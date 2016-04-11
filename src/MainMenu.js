var MainMenu_root = null;
var MainMenu = cc.Layer.extend({
	rootnode:null,
	Panel_BloodBar:null,
	BloodBar:null,
	updateTime:0,
	select_main_button:null,
	Main_Button1:null,
	Main_Button2:null,
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
	PageStage_bg:null,

	FontLabelLevel:null,

	Skill_Button_List:[],

	ctor:function(){
		this._super();
		MainMenu_root = this;
		
		this.rootnode = ccs.load(res.MainMenu_json).node;
		this.addChild(this.rootnode);

		this.Panel_BloodBar = this.rootnode.getChildByName("Panel_BloodBar");
		this.BloodBar = ccui.helper.seekWidgetByName(this.rootnode, "BloodBar");
		this.MonsterBlood = ccui.helper.seekWidgetByName(this.rootnode, "MonsterBlood");
		this.Text_MonsterName  = ccui.helper.seekWidgetByName(this.rootnode, "Text_MonsterName");
		this.LoadingBar_Boss = ccui.helper.seekWidgetByName(this.rootnode, "LoadingBar_Boss");
		this.BossTimeLeft = ccui.helper.seekWidgetByName(this.rootnode, "BossTimeLeft");
		this.StageMonsterData = ccui.helper.seekWidgetByName(this.rootnode, "StageMonsterData");
		this.PageStage_bg = ccui.helper.seekWidgetByName(this.rootnode, "PageStage_bg");
		this.FontLabelLevel = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelLevel");
	
		this.FontLabelDPS = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelDPS");
		this.FontLabelTap = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelTap");
		this.FontLabelAllDPS = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelAllDPS");
		this.FontLabelTestDPS = ccui.helper.seekWidgetByName(this.rootnode, "FontLabelTestDPS");

		this.ViewNode = this.rootnode.getChildByName("ViewNode");

		
		
		for (var i = 0; i < 3; i++) {
			var skillIndex = i + 1;
			this.Skill_Button_List[i] = ccui.helper.seekWidgetByName(this.rootnode, "ButtonSkill" + skillIndex);
			this.Skill_Button_List[i].setTag(skillIndex);
			this.Skill_Button_List[i].addTouchEventListener(this.skillMenuClick);
		};

		this.Main_Button1 = ccui.helper.seekWidgetByName(this.rootnode, "Main_Button1");
		this.Main_Button1.addTouchEventListener(this.mainMenuClick);

		this.Main_Button2 = ccui.helper.seekWidgetByName(this.rootnode, "Main_Button2");
		this.Main_Button2.addTouchEventListener(this.mainMenuClick);

		this.Button_Boss = ccui.helper.seekWidgetByName(this.rootnode, "Button_Boss");
		this.Button_Boss.addTouchEventListener(this.onBossStateClick);

		this.scheduleUpdate();

		this.UpdateStage("init");

		return true;
	},
	InitStage : function () {
		UserData.StageBlood = Ruler.StageBloodBase;
		MainMenu_root.Text_MonsterName.setString(BattleLayer_root.MonsterName);
		MainMenu_root.updateBossButtonState();
	},
	UpdateStage : function (init) {
		if (init == "init") 
		{
			this.PageStage_bg.removeAllChildren();
			for (var i = 0; i <= 2; i++) {
				if (i == 0) { continue; }
				var index = i - UserData.StageIndex;
				var icon = new cc.Sprite(stage_icon[index]);
				icon.x = index * 80 + this.PageStage_bg.width*0.5;
				icon.y = this.PageStage_bg.height*0.5;
				icon.setScale(1-Math.abs(index*0.3));
				icon.setTag(index);
				this.PageStage_bg.addChild(icon);
			}
		} 
		else 
		{
			for (var i = - 1; i <=  2; i++) {
				var index = i;
				icon = this.PageStage_bg.getChildByTag(index);
				if (index == -1 && icon) {
					var action = cc.sequence(
							cc.spawn(
								cc.moveBy(0.5, cc.p(-20, 0)),
								cc.scaleTo(0.5, 0.3),
								cc.fadeOut(0.5)),
								cc.callFunc(function(nodeExecutingAction, value) { MainMenu_root.PageStage_bg.removeChild(value); }, this, icon)
							);
					icon.runAction(action);
				} else if (index == 0 && icon) {
					var action = cc.sequence(
							cc.spawn(
								cc.moveTo(0.5, cc.p(this.PageStage_bg.width*0.5 - 80, this.PageStage_bg.height*0.5)),
								cc.scaleTo(0.5, 0.7)),
								cc.callFunc(function(nodeExecutingAction, value) { value.setTag(-1); }, this, icon)
							);
					icon.runAction(action);
				} else if (index == 1 && icon) {
					var action = cc.sequence(
							cc.spawn(
								cc.moveTo(0.5, cc.p(this.PageStage_bg.width*0.5, this.PageStage_bg.height*0.5)),
								cc.scaleTo(0.5, 1)),
								cc.callFunc(function(nodeExecutingAction, value) { value.setTag(0); }, this, icon)
							);
					icon.runAction(action);
				} else if (index == 2) {
					if(UserData.StageIndex == 15)
					{
						var icon = new cc.Sprite(stage_icon[0]);
						icon.x = 1 * 80 + 20 + this.PageStage_bg.width*0.5;
						icon.y = this.PageStage_bg.height*0.5;
						icon.setScale(0.3);
						icon.setOpacity(0);
						this.PageStage_bg.addChild(icon);

						var action = cc.sequence(
								cc.spawn(
									cc.moveTo(0.5, cc.p(this.PageStage_bg.width*0.5 + 80, this.PageStage_bg.height*0.5)),
									cc.scaleTo(0.5, 0.7),
									cc.fadeIn(0.5)),
									cc.callFunc(function(nodeExecutingAction, value) { value.setTag(1); }, this, icon)
								);
						icon.runAction(action);
					}
					else
					{
						var icon = new cc.Sprite(stage_icon[UserData.StageIndex]);
						icon.x = 1 * 80 + 20 + this.PageStage_bg.width*0.5;
						icon.y = this.PageStage_bg.height*0.5;
						icon.setScale(0.3);
						icon.setOpacity(0);
						this.PageStage_bg.addChild(icon);

						var action = cc.sequence(
								cc.spawn(
									cc.moveTo(0.5, cc.p(this.PageStage_bg.width*0.5 + 80, this.PageStage_bg.height*0.5)),
									cc.scaleTo(0.5, 0.7),
									cc.fadeIn(0.5)),
									cc.callFunc(function(nodeExecutingAction, value) { value.setTag(1); }, this, icon)
								);
						icon.runAction(action);

					}
					/*var icon = new cc.Sprite(stage_icon[UserData.StageIndex]);
					icon.x = 1 * 80 + 20 + this.PageStage_bg.width*0.5;
					icon.y = this.PageStage_bg.height*0.5;
					icon.setScale(0.3);
					icon.setOpacity(0);
					this.PageStage_bg.addChild(icon);

					var action = cc.sequence(
							cc.spawn(
								cc.moveTo(0.5, cc.p(this.PageStage_bg.width*0.5 + 80, this.PageStage_bg.height*0.5)),
								cc.scaleTo(0.5, 0.7),
								cc.fadeIn(0.5)),
								cc.callFunc(function(nodeExecutingAction, value) { value.setTag(1); }, this, icon)
							);
					icon.runAction(action);*/
				}
			}
		}
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
					MainMenu_root.FontLabelLevel.setString(UserData.StageIndexNmb);
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
		

		MainMenu_root.MonsterBlood.setString(GetShowNumFromArray(UserData.StageBlood));//血量更新


		// 主角技能释放CD
		for (var i = 0; i < this.Skill_Button_List.length; i++) {
			var button = this.Skill_Button_List[i];
			var skillIndex = button.getTag();
			var showTime = 0;

			if (UserData.SkillCountdown[skillIndex] > 0) {

				
				var timetext = button.getChildByName("time");
				var progress = button.getChildByName("progress");

				//var progress = null;
				if (progress == null) {

					var progress = new cc.ProgressTimer(new cc.Sprite(res.skillCD_release_png));
					progress.state = 0;			// 0 第一阶段 1 第二阶段
					progress.setName("progress");
					progress.type = cc.ProgressTimer.TYPE_RADIAL;
					progress.setReverseDirection(true);
					progress.setAnchorPoint(0, 0);
					button.addChild(progress);
					timetext.setVisible(true);
				}
				if (UserData.SkillCountdown[skillIndex] > PlayerData.Job[UserData.UserJobIndex].Skill[skillIndex].RecoveryCD) {
					showTime = UserData.SkillCountdown[skillIndex] - PlayerData.Job[UserData.UserJobIndex].Skill[skillIndex].RecoveryCD;
					progress.setPercentage( ( showTime / PlayerData.Job[UserData.UserJobIndex].Skill[skillIndex].ReleaseCD) * 100 );

				} else {
					showTime = UserData.SkillCountdown[skillIndex];
					progress.setPercentage( (showTime / PlayerData.Job[UserData.UserJobIndex].Skill[skillIndex].RecoveryCD) * 100 );
					if (progress.state == 0) {
						progress.state = 1;
						progress.setSprite(new cc.Sprite(res.skillCD_recovery_png));
						var icon = button.getChildByName("icon");
						icon.setColor(cc.color.GRAY);
					}
				}
				UserData.SkillCountdown[skillIndex] -= dt;
				timetext.setString(timeToString(showTime*1000, false));

				if ( UserData.SkillCountdown[skillIndex] <= 0) {
					UserData.SkillCountdown[skillIndex] = 0;
					progress.removeFromParent(true);
					timetext.setVisible(false);
					var icon = button.getChildByName("icon");
					icon.setColor(cc.color.WHITE);
				}
				
			}
		}

	},
	setInformation : function () {
		MainMenu_root.FontLabelDPS.setString(GetShowNumFromArray(UserData.HeroDPS));
		MainMenu_root.FontLabelTap.setString(GetShowNumFromArray(UserData.TapAttack));
	},
	onBossStateClick : function(sender,type) {

		if (type == ccui.Widget.TOUCH_ENDED) {
			if (MainMenu_root.m_boss_state == 1) {

				UserData.EnemyIndex = -1;
				MainMenu_root.updateBossButtonState();

			} else if(MainMenu_root.m_boss_state == 2) {

				UserData.EnemyIndex = UserData.getBossInterval();
				MainMenu_root.bosstime = 0;
				MainMenu_root.updateBossButtonState();
			}		
			BattleLayer_root.RandomMonster(true);
		}
	},
	updateBossButtonState : function () {
		// 1 挑战boss状态
		// 2 准备挑战状态
		// 0 非挑战状态
		if (UserData.EnemyIndex == -1 || UserData.EnemyIndex == UserData.getBossInterval()) 
		{
			if (UserData.EnemyIndex == -1) {
				this.m_boss_state = 2;
			} else if (UserData.EnemyIndex == UserData.getBossInterval()){
				this.m_boss_state = 1;
			}

			if (this.m_boss_state == 1)
			{
				this.Button_Boss.loadTextures(res.button_lktz_n, res.button_lktz_s, res.button_lktz_n);
				this.Button_Boss.setVisible(true);
				this.LoadingBar_Boss.setVisible(true);
				this.bosstime = 0;
				this.BossTimeLeft.setVisible(true);
			} 
			else if (this.m_boss_state == 2) 
			{
				MainMenu_root.Button_Boss.loadTextures(res.button_tzboss_n, res.button_tzboss_s, res.button_tzboss_n);
				MainMenu_root.Button_Boss.setVisible(true);
				MainMenu_root.LoadingBar_Boss.setVisible(false);
				MainMenu_root.bosstime = Ruler.BossTime;
				MainMenu_root.BossTimeLeft.setVisible(false);
			}
		} 
		else 
		{
			this.Button_Boss.setVisible(false);
			this.LoadingBar_Boss.setVisible(false);
			this.bosstime = 0;
			this.BloodBar.setPercent(0);
			this.BossTimeLeft.setVisible(false);
			this.m_boss_state = 0;
		}

		if (UserData.EnemyIndex > 0 && UserData.EnemyIndex != UserData.getBossInterval()) 
		{
			this.StageMonsterData.setString(UserData.EnemyIndex + "/" + (UserData.getBossInterval() - 1));
			this.StageMonsterData.setVisible(true);
		} 
		else 
		{
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
			if(MainMenu_root.select_main_button.getName() == MainMenu_root.Main_Button2.getName())
			{
				MenuView_2_root.setVisible(false);
				MenuView_2_root.y = -500;
			}
			MainMenu_root.select_main_button.setBright(true);//设置true则控件是高亮的，否则设置false。
			MainMenu_root.select_main_button.setEnabled(true);//true 菜单响应点击，false 菜单不响应点击。
			MainMenu_root.select_main_button = null;
		}
	},
	skillMenuClick:function(sender,type){
		
		if (type == ccui.Widget.TOUCH_ENDED) {

			var skillIndex = sender.getTag();

			if (UserData.SkillCountdown[skillIndex] == 0) {
				console.log("jjjj");
				UserData.SkillCountdown[skillIndex] = PlayerData.Job[UserData.UserJobIndex].Skill[skillIndex].ReleaseCD + PlayerData.Job[UserData.UserJobIndex].Skill[skillIndex].RecoveryCD;
				console.log("llll");
				BattleLayer_root.PlaySkillEffect(skillIndex);
			}
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
			
			if(sender.getName() == MainMenu_root.Main_Button2.getName())
			{
				if (MenuView_2_root == null) {
					
					node = new MenuView_2();
					console.log("if2");
					MainMenu_root.ViewNode.addChild(node);
					
				} else {
					console.log("else");
					node = MenuView_2_root;
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

