var MainMenu_root = null;
var MainMenu = cc.Layer.extend({
	rootnode:null,
	Panel_BloodBar:null,
	BloodBar:null,
	updateTime:0,
	select_main_button:null,
	Main_Button1:null,
	ViewNode:null,
	Text_MonsterName:null,
	bosstime:null,
	LoadingBar_Boss:null,
	BossTimeLeft:null,

	m_boss_state:0,
	StageMonsterData:null,
	Button_Boss:null,

	FontLabelDPS:null,
	FontLabelTap:null,
	FontLabelAllDPS:null,
	FontLabelTestDPS:null,
	ctor:function(){
		this._super();
		MainMenu_root = this;
		
		this.rootnode = ccs.load(res.MainMenu_json).node;
		this.addChild(this.rootnode);

		this.Panel_BloodBar = this.rootnode.getChildByName("Panel_BloodBar");
		this.BloodBar = ccui.helper.seekWidgetByName(this.rootnode, "BloodBar");
		this.MonsterBlood = ccui.helper.seekWidgetByName(this.rootnode, "MonsterBlood");
		//this.Text_MonsterName  = ccui.helper.seekWidgetByName(this.rootnode, "Text_MonsterName");
		this.Text_MonsterName  = this.Panel_BloodBar.getChildByName("Text_MonsterName");
		this.LoadingBar_Boss = ccui.helper.seekWidgetByName(this.rootnode, "LoadingBar_Boss");
		this.BossTimeLeft = ccui.helper.seekWidgetByName(this.rootnode, "BossTimeLeft");
		this.StageMonsterData = ccui.helper.seekWidgetByName(this.rootnode, "StageMonsterData");

		this.FontLabelDPS = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelDPS");
		this.FontLabelTap = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelTap");
		this.FontLabelAllDPS = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelAllDPS");
		this.FontLabelTestDPS = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelTestDPS");

		this.ViewNode = this.rootnode.getChildByName("ViewNode");

		this.Main_Button1 = ccui.helper.seekWidgetByName(this.rootnode, "Main_Button1");
		this.Main_Button1.addTouchEventListener(this.mainMenuClick);

		this.Button_Boss = ccui.helper.seekWidgetByName(this.rootnode, "Button_Boss");
		this.Button_Boss.addTouchEventListener(this.onBossStateClick);

		MainMenu_root.InitStage();
		this.scheduleUpdate();
		return true;
	},
	InitStage : function () {
		UserData.StageBlood = Ruler.StageBloodBase;
		//MainMenu_root.Text_MonsterName.setString(BattleLayer_root.MonsterName);
		MainMenu_root.updateBossButtonState();
	},
	update: function (dt) 
	{
		if(BattleLayer_root.InGapTime()) 
		{
			
		}
		else
		{
			
			if (ArrayIsZero(UserData.StageBlood)) {
				if (UserData.EnemyIndex == UserData.getBossInterval()) {
					BattleLayer_root.NextScene();
				} else {
					BattleLayer_root.RandomMonster(false);
				}
				MainMenu_root.BloodBar.setPercent(0);
				MainMenu_root.updateBossButtonState();

			} else {

				UserData.StageBlood = ArraySubArray(UserData.StageBlood, UserData.TapAttackTemp);
				UserData.TapAttackTemp = [0];
				var pct = ArrayScaleArray(UserData.StageBlood, Ruler.StageBloodBase) * 100;
				MainMenu_root.BloodBar.setPercent(pct);

				if (MainMenu_root.m_boss_state == 1) {
					if(MainMenu_root.bosstime > Ruler.BossTime) {
						UserData.EnemyIndex = -1;
						BattleLayer_root.RandomMonster(true);
					} else {
						MainMenu_root.LoadingBar_Boss.setPercent(((Ruler.BossTime - MainMenu_root.bosstime) / Ruler.BossTime)*100);
						MainMenu_root.BossTimeLeft.setString(timeToString((Ruler.BossTime - MainMenu_root.bosstime)*1000, true));
					}
					MainMenu_root.bosstime += dt; 
				}
			}
		}
		
		MainMenu_root.MonsterBlood.setString(GetShowNumFromArray(UserData.StageBlood));
	},
	setInformation : function () {
		MainMenu_root.FontLabelDPS.setString(GetShowNumFromArray(UserData.HeroDPS));
		MainMenu_root.FontLabelTap.setString(GetShowNumFromArray(UserData.TapAttack));
	},
	onBossStateClick : function(sender,type) {

		if (type == ccui.Widget.TOUCH_ENDED) {
			if (MainMenu_root.m_boss_state == 1) {

				UserData.EnemyIndex = -1;
				MainMenu_root.updateMonsterState();

			} else if(MainMenu_root.m_boss_state == 2) {

				UserData.EnemyIndex = UserData.getBossInterval();
				MainMenu_root.bosstime = 0;
				MainMenu_root.updateMonsterState();
			}		
			BattleLayer_root.RandomMonster(true);
		}
	},
	updateBossButtonState : function () {
		// 1 挑战boss状态
		// 2 准备挑战状态
		// 0 非挑战状态
		if (UserData.EnemyIndex == -1 || UserData.EnemyIndex == UserData.getBossInterval()) {

			if (UserData.EnemyIndex == -1) {
				this.m_boss_state = 2;
			} else if (UserData.EnemyIndex == UserData.getBossInterval()) {
				this.m_boss_state = 1;
			}

			if (this.m_boss_state == 1) {
				this.Button_Boss.loadTextures(res.button_lktz_n, res.button_lktz_s, res.button_lktz_n);
				this.Button_Boss.setVisible(true);
				this.LoadingBar_Boss.setVisible(true);
				this.bosstime = 0;
				this.BossTimeLeft.setVisible(true);
			} else if (this.m_boss_state == 2) {
				this.Button_Boss.loadTextures(res.button_tzboss_n, res.button_tzboss_s, res.button_tzboss_n);
				this.Button_Boss.setVisible(true);
				this.LoadingBar_Boss.setVisible(false);
				this.bosstime = Ruler.BossTime;
				this.BossTimeLeft.setVisible(false);
			}
		} else {
			this.Button_Boss.setVisible(false);
			this.LoadingBar_Boss.setVisible(false);
			this.bosstime = 0;
			this.BloodBar.setPercent(0);
			this.BossTimeLeft.setVisible(false);
			this.m_boss_state = 0;
		}
		if (UserData.EnemyIndex > 0 && UserData.EnemyIndex != UserData.getBossInterval()) {
			this.StageMonsterData.setString(UserData.EnemyIndex + "/" + (UserData.getBossInterval() - 1));
			this.StageMonsterData.setVisible(true);
		} else {
			this.StageMonsterData.setVisible(false);
		}
	},
	mainMenuReset:function(){
		
		if (MainMenu_root.select_main_button) {
			
			if(MainMenu_root.select_main_button.getName() == MainMenu_root.Main_Button1.getName())
			{
				MenuView_1_root.setVisible(false); //默认为true 节点可见
				MenuView_1_root.y = -500;
			}
			MainMenu_root.select_main_button.setBright(true);//设置true则控件是高亮的，否则设置false。
			MainMenu_root.select_main_button.setEnabled(true);//true 菜单响应点击，false 菜单不响应点击。
			MainMenu_root.select_main_button = null;
		}
	},

	mainMenuClick:function(sender,type){
		
		switch(type){
		case ccui.Widget.TOUCH_ENDED:

			var node = null;
			
			MainMenu_root.mainMenuReset();
			MainMenu_root.select_main_button = sender;
			
			if(sender.getName() == MainMenu_root.Main_Button1.getName())
			{
				if (MenuView_1_root == null) {
					node = new MenuView_1();
					MainMenu_root.ViewNode.addChild(node);
				} else {
					node = MenuView_1_root;
					node.requestRefreshView();
				}
				sender.setBright(false);
				sender.setEnabled(false);
			}
			node.setVisible(true);
			node.y = -500;
			node.runAction(cc.moveTo(0.1, cc.p(0, 0)));
			node = null;
			break;
		default:
			break;
		}
	}
});

