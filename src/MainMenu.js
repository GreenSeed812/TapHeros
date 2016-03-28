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

		this.ViewNode = this.rootnode.getChildByName("ViewNode");

		this.Main_Button1 = ccui.helper.seekWidgetByName(this.rootnode, "Main_Button1");
		this.Main_Button1.addTouchEventListener(this.mainMenuClick);

        UserData.StageBlood = Ruler.StageBloodBase;

		MainMenu_root.updateMonsterState();
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
			if(ArrayIsZero(UserData.StageBlood)) 
			{
				if(UserData.EnemyIndex == UserData.getBossInterval()) 
				{
					this.LoadingBar_Boss.setVisible(false);
					this.BossTimeLeft.setVisible(false);
					BattleLayer_root.NextScene(); 
					MainMenu_root.bosstime = 0;
					//BattleLayer_root.NextStage();???
				} 
				else 
				{	
					BattleLayer_root.RandomMonster(false);
				}

				if(UserData.EnemyIndex == UserData.getBossInterval()-1)
				{
					MainMenu_root.LoadingBar_Boss.setVisible(true);
					MainMenu_root.BossTimeLeft.setVisible(true);
					this.m_boss_state =1;
					BattleLayer_root.RandomMonster(false);
				}

				MainMenu_root.BloodBar.setPercent(0);
			}
			else
			{
				UserData.StageBlood = ArraySubArray(UserData.StageBlood, UserData.TapAttackTemp);//减法
				var pct = ArrayScaleArray(UserData.StageBlood, Ruler.StageBloodBase) * 100;
				MainMenu_root.BloodBar.setPercent(pct);
				UserData.TapAttackTemp = [0];

				if (this.m_boss_state == 1)
				{
					if(MainMenu_root.bosstime > Ruler.BossTime) {
							this.LoadingBar_Boss.setVisible(false);
							this.BossTimeLeft.setVisible(false);
							MainMenu_root.bosstime = 0;
							BattleLayer_root.RandomMonster(true);
						} else {
							MainMenu_root.LoadingBar_Boss.setPercent(((Ruler.BossTime - MainMenu_root.bosstime) / Ruler.BossTime)*100);
							MainMenu_root.BossTimeLeft.setString(timeToString((Ruler.BossTime - MainMenu_root.bosstime)*1000, true));
						}
						MainMenu_root.bosstime += dt;
				}
			}	
		}

		if (UserData.EnemyIndex > 0 && UserData.EnemyIndex != UserData.getBossInterval()) {
				this.StageMonsterData.setString(UserData.EnemyIndex + "/" + (UserData.getBossInterval() -1));
				this.StageMonsterData.setVisible(true);
					} else {
				this.StageMonsterData.setVisible(false);
				}

		MainMenu_root.MonsterBlood.setString(GetShowNumFromArray(UserData.StageBlood));
		
	},

	updateMonsterState : function () {
		// 1 boss出现状态
		// 2 boss消失
		// 0 小怪状态
		if (this.m_boss_state == 1)
		 {
			this.LoadingBar_Boss.setVisible(true);
			this.BossTimeLeft.setVisible(true);
			//BattleLayer_root.MonsterScale = 1.2;
		} 
		else if(this.m_boss_state == 2) 
		{
			this.LoadingBar_Boss.setVisible(false);
			this.BossTimeLeft.setVisible(false);
			//BattleLayer_root.MonsterScale = 0.8;
		}
		else 
		{
			this.LoadingBar_Boss.setVisible(false);
			this.bosstime = 0;
			this.BloodBar.setPercent(0);
			this.BossTimeLeft.setVisible(false);
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

