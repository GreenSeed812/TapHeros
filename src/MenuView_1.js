var MenuView_1_root = null;

var MenuView_1 = cc.Layer.extend({
	rootnode:null,
	CloseButton : null,
	ListView:null,
	Light:false,
	ctor:function(){
		this._super();
		MenuView_1_root = this;

		this.rootnode = ccs.load(res.MenuView_1_json).node;
		this.addChild(this.rootnode);

		this.ListView = ccui.helper.seekWidgetByName(MenuView_1_root.rootnode, "ListView");
		this.CloseButton = MenuView_1_root.rootnode.getChildByName("CloseButton");
		this.CloseButton.addTouchEventListener(this.onCloseClick);
		
		MenuView_1_root.createCells();
		MenuView_1_root.setInformation();
		return true;
	},
	onCloseClick:function(sender,type){
		switch(type){
		case ccui.Widget.TOUCH_ENDED:
			MainMenu_root.mainMenuReset();
			break;
		default:
			break;
		}
	},
	createCell:function(index){

		var custom_item = new ccui.Layout();
		custom_item.setTag(index);

		if (index == 0) {
			custom_item.setName("Player");
		} else {
			custom_item.setName("Helper");
		}

		var heroData = HeroData[index];
		var HeroLevel = UserData.HeroLevel[index];
		if(index==0||HeroLevel==0)
		{
			//创建背景条
			var cellBg = new cc.Sprite(res.bg_tiao_png);
			cellBg.x = cellBg.getContentSize().width * 0.5;
			cellBg.y = cellBg.getContentSize().height * 0.5;
			custom_item.setContentSize(cellBg.getContentSize());
			custom_item.addChild(cellBg);

			//创建头像按钮 添加监听事件
			var heroIconbutton = new ccui.Button();
			heroIconbutton.setName("heroIconbutton");
			heroIconbutton.setTouchEnabled(true);
			heroIconbutton.loadTextures(res.icon_hero_1, res.icon_hero_1, res.icon_hero_1);
			heroIconbutton.x = 74;
			heroIconbutton.y = 60;
			heroIconbutton.addTouchEventListener(MenuView_1_root.touchHeroIcon, MenuView_1_root);
			heroIconbutton.setTag(index);
			custom_item.addChild(heroIconbutton);
		}
		
		//创建按钮
		var heroData = HeroData[index];
		var HeroLevel = UserData.HeroLevel[index];

		if(index==0||HeroLevel>=0)
		{
		
		var buttonNode = new cc.Node();
		buttonNode.setName("buttonNode");

		{
			var button100 = new ccui.Button();
			button100.setName("button100");

			if(index==0)
			{
				button100.loadTextures(res.button_add_2_n_png, res.button_add_s_png, res.button_add_2_n_png);
			}
			else if(HeroLevel>=0
				){
				button100.loadTextures(res.button_add_n_png, res.button_add_s_png, res.button_add_n_png);
			}

			button100.x = 500;
			button100.y = 58;
			button100.addTouchEventListener(MenuView_1_root.touchButton, MenuView_1_root);
			button100.setTag(index);
			buttonNode.addChild(button100);
			button100.setVisible(false);

			var buttonTextNode = new cc.Node();
			buttonTextNode.setName("buttonTextNode");
			button100.addChild(buttonTextNode);

			// 金币
			var coinIcon = new cc.Sprite(res.icon_jinbi_small);
			coinIcon.setName("coinIcon");
			coinIcon.x = 20;
			coinIcon.y = 52;
			buttonTextNode.addChild(coinIcon);

			var ButtonFunction = new cc.LabelTTF("+100", res.TTF_超粗黑, 20);
			ButtonFunction.setName("ButtonFunction");
			ButtonFunction.setAnchorPoint(0, 0);
			ButtonFunction.x = 16;
			ButtonFunction.y = 16;
			buttonTextNode.addChild(ButtonFunction);

			var Money_Up = new cc.LabelTTF(GetShowNumFromArray([0,5,400,3]), res.TTF_正粗黑, 14);
			Money_Up.setName("Money_Up");
			Money_Up.setAnchorPoint(0, 0);
			Money_Up.x = 30;
			Money_Up.y = 42;
			buttonTextNode.addChild(Money_Up);
		}

		{
			var button10 = new ccui.Button();
			button10.setName("button10");
			if(index==0)
			{
				button10.loadTextures(res.button_add_2_n_png, res.button_add_s_png, res.button_add_2_n_png);
			}
			else if(HeroLevel>=0){
				button10.loadTextures(res.button_add_n_png, res.button_add_s_png, res.button_add_n_png);
			}
			
			button10.x = 500;
			button10.y = 58;
			button10.addTouchEventListener(MenuView_1_root.touchButton, MenuView_1_root);
			button10.setTag(index);
			buttonNode.addChild(button10);
			button10.setVisible(false);

			var buttonTextNode = new cc.Node();
			buttonTextNode.setName("buttonTextNode");
			button10.addChild(buttonTextNode);

			// 金币
			var coinIcon = new cc.Sprite(res.icon_jinbi_small);
			coinIcon.setName("coinIcon");
			coinIcon.x = 20;
			coinIcon.y = 52;
			buttonTextNode.addChild(coinIcon);

			var ButtonFunction = new cc.LabelTTF("+10", res.TTF_超粗黑, 20);
			ButtonFunction.setName("ButtonFunction");
			ButtonFunction.setAnchorPoint(0, 0);
			ButtonFunction.x = 16;
			ButtonFunction.y = 16;
			buttonTextNode.addChild(ButtonFunction);
		
			var Money_Up = new cc.LabelTTF(GetShowNumFromArray([0,5,400,3]), res.TTF_正粗黑, 14);
			Money_Up.setName("Money_Up");
			Money_Up.setAnchorPoint(0, 0);
			Money_Up.x = 30;
			Money_Up.y = 42;
			buttonTextNode.addChild(Money_Up);
		}

		{
			var button = new ccui.Button();
			button.setName("button");
			if(index == 0)
			{
				button.loadTextures(res.button_lvup_2_n_png, res.button_lvup_2_s_png, res.button_lvup_d_png);
				button.x = 500;
				button.y = 60;
				button.addTouchEventListener(MenuView_1_root.touchButton, MenuView_1_root);
				button.setTag(index);
				buttonNode.addChild(button);

				var buttonTextNode = new cc.Node();
				buttonTextNode.setName("buttonTextNode");
				button.addChild(buttonTextNode);

				// 金币
				var coinIcon = new cc.Sprite(res.icon_jinbi_small);
				coinIcon.setName("coinIcon");
				coinIcon.x = 34;
				coinIcon.y = 64;
				buttonTextNode.addChild(coinIcon);

				var ButtonFunction = new cc.LabelTTF("升级", res.TTF_黑体加粗, 20);
				ButtonFunction.setName("ButtonFunction");
				ButtonFunction.setAnchorPoint(0, 0);
				ButtonFunction.x = 46;
				ButtonFunction.y = 28;
				buttonTextNode.addChild(ButtonFunction);
			
				var ret = [0,5,400,3];
				var Money_Up = new cc.LabelTTF(GetShowNumFromArray(ret), res.TTF_正粗黑, 14);
				Money_Up.setName("Money_Up");
				Money_Up.setAnchorPoint(0, 0);
				Money_Up.x = 50;
				Money_Up.y = 54;
				buttonTextNode.addChild(Money_Up);

				var skillNode = new cc.Node();
				skillNode.setName("skillNode");
				for (var i = 0; i < PlayerData.SkillUnlock.length; i++) {
					if (UserData.UserSkillLevel[index]> i) {
						var icon = new cc.Sprite(PlayerData.Skill[i].Icon);
						icon.x = i * 46;
						skillNode.addChild(icon);
					}
				}
				skillNode.x = 140;
				skillNode.y = 46;

			}
			else
			{
				var HeroLevel = UserData.HeroLevel[index];
				var heroData = HeroData[index];
				if(HeroLevel>=0&&MenuView_1_root.Light==true)
				{	
						button.loadTextures(res.button_lvup_n_png, res.button_lvup_s_png, res.button_lvup_n_png);
						button.x = 500;
						button.y = 60;
						button.addTouchEventListener(MenuView_1_root.touchButton, MenuView_1_root);
						button.setTag(index);
						buttonNode.addChild(button);

						var buttonTextNode = new cc.Node();
						buttonTextNode.setName("buttonTextNode");
						button.addChild(buttonTextNode);

						// 金币
						var coinIcon = new cc.Sprite(res.icon_jinbi_small);
						coinIcon.setName("coinIcon");
						coinIcon.x = 34;
						coinIcon.y = 64;
						buttonTextNode.addChild(coinIcon);

						var Money_Up = new cc.LabelTTF(GetShowNumFromArray(getHeroMoney(heroData)), res.TTF_正粗黑, 14);
						Money_Up.setName("Money_Up");
						Money_Up.setAnchorPoint(0, 0);
						Money_Up.x = 50;
						Money_Up.y = 54;
						buttonTextNode.addChild(Money_Up);

						var ButtonFunction = new cc.LabelTTF("开启", res.TTF_黑体加粗, 20);
						ButtonFunction.setName("ButtonFunction");
						ButtonFunction.setAnchorPoint(0, 0);
						ButtonFunction.x = 46;
						ButtonFunction.y = 28;
						buttonTextNode.addChild(ButtonFunction);
					
						var DPS = new cc.LabelTTF("DPS+"+GetShowNumFromArray(getHeroAtk(heroData)), res.TTF_黑体加粗, 16);
						DPS.setName("DPS");
						DPS.setAnchorPoint(0.5, 0);
						DPS.x = 60;
						DPS.y = 8;
						buttonTextNode.addChild(DPS);

						var skillNode = new cc.Node();
						skillNode.setName("skillNode");
						for (var i = 1; i < heroData.SkillUnlock.length; i++) {
							if (UserData.HeroSkillUnLockCount[index] > i) {
								var icon = new cc.Sprite(heroData.Skill[i].Icon);
								icon.x = i * 46;
								skillNode.addChild(icon);
							}
						}
						skillNode.x = 140;
						skillNode.y = 46;

						//MenuView_1_root.UpdateButton(index);	
				}
				else if(HeroLevel>=0)
				{	
					button.loadTextures(res.button_lvup_d_png, res.button_lvup_d_png, res.button_lvup_d_png);
					button.setEnabled(true);
					button.x = 500;
					button.y = 60;
					//button.addTouchEventListener(MenuView_1_root.touchButton, MenuView_1_root);
					button.setTag(index);
					buttonNode.addChild(button);

					var buttonTextNode = new cc.Node();
					buttonTextNode.setName("buttonTextNode");
					button.addChild(buttonTextNode);

					// 金币
					var coinIcon = new cc.Sprite(res.icon_jinbi_small);
					coinIcon.setName("coinIcon");
					coinIcon.x = 34;
					coinIcon.y = 64;
					buttonTextNode.addChild(coinIcon);

					var Money_Up = new cc.LabelTTF(GetShowNumFromArray(getHeroMoney(heroData)), res.TTF_正粗黑, 14);
					Money_Up.setName("Money_Up");
					Money_Up.setAnchorPoint(0, 0);
					Money_Up.x = 50;
					Money_Up.y = 54;
					buttonTextNode.addChild(Money_Up);

					var ButtonFunction = new cc.LabelTTF("未开启", res.TTF_黑体加粗, 20);
					ButtonFunction.setName("ButtonFunction");
					ButtonFunction.setAnchorPoint(0, 0);
					ButtonFunction.x = 36;
					ButtonFunction.y = 28;
					buttonTextNode.addChild(ButtonFunction);
				
					var DPS = new cc.LabelTTF("DPS+ "+GetShowNumFromArray(getHeroAtk(heroData)), res.TTF_黑体加粗, 16);
					DPS.setName("DPS");
					DPS.setAnchorPoint(0.5, 0);
					DPS.x = 60;
					DPS.y = 8;
					buttonTextNode.addChild(DPS);	
				}
				
			}
			
		}
	}

	//创建主角信息显示
		if (index == 0) 
		{
			//名字
			//UserData.NickName = "fjskd";
			var CellName = new cc.LabelTTF(UserData.NickName, res.TTF_超粗黑, 16);
			CellName.setAnchorPoint(0, 0);
			CellName.x = 120;
			CellName.y = 74;
			//等级
			var Level = new cc.LabelTTF("LV:", res.TTF_超粗黑, 16);
			Level.setColor(cc.color(0, 255, 255));
			Level.setAnchorPoint(0, 0);
			Level.x = 220;
			Level.y = 74;
			
			var LV_Num = new cc.LabelTTF(UserData.UserLevel, res.TTF_超粗黑, 16);
			LV_Num.setName("LV_Num");
			LV_Num.setColor(cc.color(0, 255, 255));
			LV_Num.setAnchorPoint(0, 0);
			LV_Num.x = 260;
			LV_Num.y = 74;

			//点击伤害
			var Title = new cc.LabelTTF("DMG", res.TTF_超粗黑, 16);
			Title.setAnchorPoint(0, 0);
			Title.x = 330;
			Title.y = 74;
			
			var Desc = new cc.LabelTTF(GetShowNumFromArray(UserData.TapAttack), res.TTF_正粗黑, 16);
			Desc.setName("Desc");
			Desc.setColor(cc.color(255, 150, 20));
			Desc.setAnchorPoint(0, 0);
			Desc.x = 380;
			Desc.y = 74;
		}
		else
		{	//创建辅助英雄信息
			var heroData = HeroData[index];
			var HeroLevel = UserData.HeroLevel[index];
			if(HeroLevel >= 0)
			{
				//名字
				var CellName = new cc.LabelTTF(heroData.Name, res.TTF_超粗黑, 16);
				CellName.setAnchorPoint(0, 0);
				CellName.x = 120;
				CellName.y = 74;
				//等级
				var Level = new cc.LabelTTF("LV:", res.TTF_超粗黑, 16);
				Level.setColor(cc.color(0, 255, 255));
				Level.setAnchorPoint(0, 0);
				Level.x = 220;
				Level.y = 74;

				var LV_Num = new cc.LabelTTF(HeroLevel, res.TTF_超粗黑, 16);
				LV_Num.setName("LV_Num");
				LV_Num.setColor(cc.color(0, 255, 255));
				LV_Num.setAnchorPoint(0, 0);
				LV_Num.x = 260;
				LV_Num.y = 74;
				LV_Num.setString(HeroLevel);
				//DPS
				var Title = new cc.LabelTTF("DPS", res.TTF_超粗黑, 16);
				Title.setAnchorPoint(0, 0);
				Title.x = 330;
				Title.y = 74;
		
				var Desc = new cc.LabelTTF(GetShowNumFromArray(UserData.HeroDPS), res.TTF_正粗黑, 16);
				Desc.setName("Desc");
				Desc.setColor(cc.color(255, 150, 20));
				Desc.setAnchorPoint(0, 0);
				Desc.x = 380;
				Desc.y = 74;
				
				if(HeroLevel==0)
				{
					heroIconbutton.setColor(cc.color.GRAY);//未解锁时为灰色
					var newIcon = new cc.Sprite(res.icon_new_png);
					newIcon.setName("newIcon");
					newIcon.x = 280;
					newIcon.y = 50;
					custom_item.addChild(newIcon);
				}
			}
			else
			{

			}
			
		}

		if(skillNode)
		{
			custom_item.addChild(skillNode);
		}
		if (LV_Num) {
			custom_item.addChild(LV_Num);
		}
		if(Level){
			custom_item.addChild(Level);
		}
		if (Desc) {
			custom_item.addChild(Desc);
		}
		if(buttonNode){
			custom_item.addChild(buttonNode,1);
		}
		if (Title) {
			custom_item.addChild(Title);
		}
		if(CellName){
			custom_item.addChild(CellName);
		}
		
		MenuView_1_root.ListView.insertCustomItem(custom_item, index);

		//MenuView_1_root.UpdateButton(index);
	},
	createCells:function()
	{
		for(var index = 0; index < HeroData.length; index++) 
		{
			var HeroLevel = UserData.HeroLevel[index];
			var heroData = HeroData[index];
			
			if(HeroLevel >= 0)
			{
				MenuView_1_root.createCell(index);
			}
		}
		//MenuView_1_root.requestRefreshView();
	},
	requestRefreshView : function () //下一个英雄出现
	{
		var listCount = MenuView_1_root.ListView.getItems().length - 2;
		for (var i = listCount+2; i < listCount+3; i++) 
		{
			UserData.HeroLevel[i] =0;
			MenuView_1_root.Light = false;
			if(UserData.HeroLevel[i] >= 0)
			{
				MenuView_1_root.createCell(i);
			}
		}
		MenuView_1_root.setInformation();
	},
	checkMenuView:function()
	{
		var listCount = MenuView_1_root.ListView.getItems().length - 1;
		for(var i = listCount; i < HeroData.length; i++) 
		{
			if (UserData.HeroLevel[i] >= 0)
			{
				MenuView_1_root.Light = true;
				MenuView_1_root.createCell(i);
			}
		}
		MenuView_1_root.ListView.removeLastItem();	
	},
	updateCell:function(index) {
		
		var viewCell = MenuView_1_root.ListView.getItem(index);

		var LV_Num = viewCell.getChildByName("LV_Num");
		var Desc = viewCell.getChildByName("Desc");
		if (viewCell.getName() == "Player") 
		{
			LV_Num.setString(UserData.UserLevel);
			Desc.setString(GetShowNumFromArray(UserData.TapAttack));//输出滞后一次

			var skillNode = viewCell.getChildByName("skillNode");
			for (var i = 0; i < PlayerData.SkillUnlock.length; i++) {
				if (UserData.UserLevel >= PlayerData.SkillUnlock[i])
				{
					var icon = new cc.Sprite(PlayerData.Skill[i].Icon);
					icon.x = i * 46;
					skillNode.addChild(icon);
				}
			}

			if(PlayerData.SkillUnlock[UserData.UserSkillUnLockCount[index]] <= UserData.UserLevel)//解锁信息栏
			{
				UserData.UserSkillUnLockCount[index] += 1;
			}
		}
		else{
			UserData.UpdateHeroDPS();

			//var viewCell = MenuView_1_root.ListView.getItem(index);
			var HeroLevel = UserData.HeroLevel[index];
			var heroData = HeroData[index];
			if(HeroLevel >= 1)
			{
				Desc.setString(GetShowNumFromArray(UserData.HeroDPS));
			}
			var LV_Num = viewCell.getChildByName("LV_Num");
			LV_Num.setString(HeroLevel);

			var skillNode = viewCell.getChildByName("skillNode");
			for (var i = 0; i < heroData.SkillUnlock.length; i++) {
				if (HeroLevel>=heroData.SkillUnlock[i]) {
				var icon = new cc.Sprite(heroData.Skill[i].Icon);
				icon.x = i * 46;
				skillNode.addChild(icon);
				}
			}

			if(HeroLevel == 1)//解锁英雄
			{
				var heroIconbutton = viewCell.getChildByName("heroIconbutton");
				heroIconbutton.setColor(cc.color.WHITE);
				var newIcon = viewCell.getChildByName("newIcon");
				if (newIcon) {newIcon.removeFromParent(true);}

				MenuView_1_root.requestRefreshView();//下一个英雄出现
			}
		}
		MenuView_1_root.UpdateButton(index);
	},
	UpdateButton:function(index)
	{
		var heroData = HeroData[index];
		var HeroLevel = UserData.HeroLevel[index];
		if(heroData.SkillUnlock[UserData.HeroSkillUnLockCount[index]] <= HeroLevel)
		{
			UserData.HeroSkillUnLockCount[index] += 1;
		}
	},
	setInformation:function(){
		//MenuView_1_root.DPS_Hero.setString(GetShowNumFromArray(UserData.HeroDPS));
		//MenuView_1_root.Total_Money.setString(GetShowNumFromArray(UserData.UserMoney));
	},
	touchHeroIcon: function (sender, type) {

		switch (type) {
		case ccui.Widget.TOUCH_ENDED:
			var index = sender.getTag();
			if (index == 0) 
			{
				MainScene_root.pushLayer(new HeroInfoLayer());
				HeroInfoLayer_root.setReincarnationButton();
				HeroInfoLayer_root.setUserDate(PlayerData, UserData.UserLevel, index);
			}
			else
			{
				var heroData = HeroData[index];
				var HeroLevel = UserData.HeroLevel[index];
			
				MainScene_root.pushLayer(new HeroInfoLayer());
				HeroInfoLayer_root.setHeroDate(heroData, HeroLevel, index);
			}	
			break;
		}
	},
	touchButton: function (sender, type) {
		switch (type) {
		case ccui.Widget.TOUCH_BEGAN:
			sender.getChildByName("buttonTextNode").y = -2;
			break;
		case ccui.Widget.TOUCH_CANCELED:
			sender.getChildByName("buttonTextNode").y = 0;
			break;
		case ccui.Widget.TOUCH_ENDED:
			sender.getChildByName("buttonTextNode").y = 0;
			
			var upNum = 0;
			if (sender.getName() == "button10") {
				upNum = 10;
			} else if (sender.getName() == "button100") {
				upNum = 100;
			} else if(sender.getName() == "button"){
					
					upNum = 1;
			}
			var index = sender.getTag();
			 {
				if (index == 0) 
				{
					var UserLevel = UserData.UserLevel + upNum;
					UserData.UserLevel = UserLevel;
					
					UserData.UpdateTapAttack();
					MainMenu_root.setInformation();

					MenuView_1_root.cellBtnExpand(index, true, true);
					MenuView_1_root.updateCell(index);
				}
				else
				{
					var herolevel = UserData.HeroLevel[index] + upNum;
					console.log("7777777777");
					UserData.HeroLevel[index] = herolevel;
					console.log("7777777777asdsadasfdsfsfds");
					MenuView_1_root.cellBtnExpand(index, true, true);
					MenuView_1_root.updateCell(index);
				}
			}
			break;
		}
	},
	
	cellBtnExpand : function (index, isShow, showAll) {
		
		var viewCell = MenuView_1_root.ListView.getItem(index);
		var button10 = viewCell.getChildByName("buttonNode").getChildByName("button10");
		var button100 = viewCell.getChildByName("buttonNode").getChildByName("button100");
		button10.stopAllActions();
		button100.stopAllActions();
		if (isShow) {
			button10.runAction(cc.sequence(cc.show(), cc.moveTo(0.1, cc.p(414, 58)), cc.delayTime(1.8), cc.moveTo(0.15, cc.p(500, 58)), cc.hide()));
			if (showAll)
			{
				button100.runAction(cc.sequence(cc.show(), cc.moveTo(0.15, cc.p(338, 58)), cc.delayTime(1.8), cc.moveTo(0.1, cc.p(500, 58)), cc.hide()));
			}
		} else {
			button10.runAction(cc.sequence(cc.moveTo(0.15, cc.p(500, 58)), cc.hide()));
			button100.runAction(cc.sequence(cc.moveTo(0.1, cc.p(500, 58)), cc.hide()));
		}

	}
});