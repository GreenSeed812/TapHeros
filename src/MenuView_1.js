var MenuView_1_root = null;

var MenuView_1 = cc.Layer.extend({
	rootnode:null,
	CloseButton : null,
	ListView:null,
	TotalMoney :null,
	ctor:function(){
		this._super();
		MenuView_1_root = this;

		this.rootnode = ccs.load(res.MenuView_1_json).node;
		this.addChild(this.rootnode);

		this.ListView = ccui.helper.seekWidgetByName(MenuView_1_root.rootnode, "ListView");
		MenuView_1_root.TotalMoney = ccui.helper.seekWidgetByName(MenuView_1_root.rootnode, "TotalMoney");
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
	requestRefreshView : function () {
		this.setInformation();
	},
	setInformation:function(){
		MenuView_1_root.TotalMoney.setString(GetShowNumFromArray(UserData.UserMoney));
	},
	updateCell:function(index) {
		
		var viewCell = MenuView_1_root.ListView.getItem(index);

		var LV_Num = viewCell.getChildByName("LV_Num");
		console.log("dlfjsldk");
		var Desc = viewCell.getChildByName("Desc");
		if (viewCell.getName() == "Player") 
		{
			LV_Num.setString(UserData.UserLevel);
			Desc.setString(GetShowNumFromArray(UserData.TapAttackTemp));
		}
		else{
			var HeroLevel = UserData.HeroLevel[index];
			if (HeroLevel == 1)
			{
				var heroIconbutton = viewCell.getChildByName("heroIconbutton");
				heroIconbutton.setColor(cc.color.WHITE);

				var newIcon = viewCell.getChildByName("newIcon");
				if (newIcon) {newIcon.removeFromParent(true);}
				
			}
			var LV_Num = viewCell.getChildByName("LV_Num");
			LV_Num.setString(HeroLevel);
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

		// Create the bg_tiao
		var cellBg = new cc.Sprite(res.bg_tiao_png);
		
		cellBg.x = cellBg.getContentSize().width * 0.5;
		cellBg.y = cellBg.getContentSize().height * 0.5;
		
		custom_item.setContentSize(cellBg.getContentSize());
		custom_item.addChild(cellBg);

		// Create the hero icon
		var heroIconbutton = new ccui.Button();
		heroIconbutton.setName("heroIconbutton");
		heroIconbutton.setTouchEnabled(true);
		heroIconbutton.loadTextures(res.icon_hero_1, res.icon_hero_1, res.icon_hero_1);
		heroIconbutton.loadTextures(res.icon_hero_1, res.icon_hero_1, res.icon_hero_1);
		heroIconbutton.x = 74;
		heroIconbutton.y = 60
		heroIconbutton.addTouchEventListener(MenuView_1_root.touchHeroIcon, MenuView_1_root);
		heroIconbutton.setTag(index);
		custom_item.addChild(heroIconbutton);

		// Create the hero biaoshi
		if (index == 0) 
		{
			//UserData.NickName = "fjskd";
			var CellName = new cc.LabelTTF(UserData.NickName, res.TTF_超粗黑, 16);
			CellName.setAnchorPoint(0, 0);
			CellName.x = 120;
			CellName.y = 74;

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

			
			var Title = new cc.LabelTTF("DMG", res.TTF_超粗黑, 16);
			Title.setAnchorPoint(0, 0);
			Title.x = 330;
			Title.y = 74
			
			var Desc = new cc.LabelTTF(GetShowNumFromArray(UserData.TapAttack), res.TTF_正粗黑, 16);
			Desc.setName("Desc");
			Desc.setColor(cc.color(255, 150, 20));
			Desc.setAnchorPoint(0, 0);
			Desc.x = 380;
			Desc.y = 74;
		}
		else
		{
			var HeroLevel = UserData.HeroLevel[index];
			HeroLevel = 0;
			if (HeroLevel == 0)
			{
				heroIconbutton.setColor(cc.color.GRAY);
				var newIcon = new cc.Sprite(res.icon_new_png);
				newIcon.setName("newIcon");
				newIcon.x = 280;
				newIcon.y = 50;
				custom_item.addChild(newIcon);
			}

			var CellName = new cc.LabelTTF("NickName", res.TTF_超粗黑, 16);
			CellName.setAnchorPoint(0, 0);
			CellName.x = 120;
			CellName.y = 74;

			var Level = new cc.LabelTTF("LV:", res.TTF_超粗黑, 16);
			Level.setColor(cc.color(0, 255, 255));
			Level.setAnchorPoint(0, 0);
			Level.x = 220;
			Level.y = 74;

			var LV_Num = new cc.LabelTTF(0, res.TTF_超粗黑, 16);
			LV_Num.setName("LV_Num");
			LV_Num.setColor(cc.color(0, 255, 255));
			LV_Num.setAnchorPoint(0, 0);
			LV_Num.x = 260;
			LV_Num.y = 74;
			LV_Num.setString(HeroLevel);
			
			var Title = new cc.LabelTTF("DPS", res.TTF_超粗黑, 16);
			Title.setAnchorPoint(0, 0);
			Title.x = 330;
			Title.y = 74
			
			var Desc = new cc.LabelTTF(GetShowNumFromArray(UserData.HeroDPS), res.TTF_正粗黑, 16);
			Desc.setName("Desc");
			Desc.setColor(cc.color(255, 150, 20));
			Desc.setAnchorPoint(0, 0);
			Desc.x = 380;
			Desc.y = 74;
		}

		// Create the button
		var buttonNode = new cc.Node();
		buttonNode.setName("buttonNode");

		{
			var button100 = new ccui.Button();
			button100.setName("button100");

			if(index==0)
			{
				button100.loadTextures(res.button_add_2_n_png, res.button_add_s_png, res.button_add_2_n_png);
			}
			else{
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
			else{
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
			}
			else
			{
				var HeroLevel = UserData.HeroLevel[index];
				HeroLevel = 0;
				if(HeroLevel==0)
				{
					//console.log("fjsdl");
					button.loadTextures(res.button_lvup_d_png, res.button_lvup_d_png, res.button_lvup_d_png);
					//MenuView_1_root.button.setEnabled(true);
				}
				else
				{
					button.loadTextures(res.button_lvup_n_png, res.button_lvup_s_png, res.button_lvup_n_png);
				}
			}
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
			//UserData.UpdateMoneyUp();
			
			var Money_Up = new cc.LabelTTF(GetShowNumFromArray(ret), res.TTF_正粗黑, 14);
			Money_Up.setName("Money_Up");
			Money_Up.setAnchorPoint(0, 0);
			Money_Up.x = 50;
			Money_Up.y = 54;
			buttonTextNode.addChild(Money_Up);
		}


		if(buttonNode){
			custom_item.addChild(buttonNode);
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
		if (Title) {
			custom_item.addChild(Title);
		}
		if(CellName){
			custom_item.addChild(CellName);
		}
		
		MenuView_1_root.ListView.insertCustomItem(custom_item, index);
	},
	createCells:function(){
		for(var index = 0; index < 10; index++) 
		{
			MenuView_1_root.createCell(index);
		}
	},
	touchHeroIcon: function (sender, type) {

		switch (type) {
		case ccui.Widget.TOUCH_ENDED:
			var index = sender.getTag();
			if (index == 0) 
			{
				MainScene_root.pushLayer(new HeroInfoLayer());
				//HeroInfoLayer_root.setHeroDate(PlayerData, UserData.UserLevel, index);
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
				//if(MenuView_1_root.TotalMoney>=MenuView_1_root)
				//{	
					upNum = 1;
				//}
			}
			var index = sender.getTag();
			 {
				if (index == 0) 
				{
					var UserLevel = UserData.UserLevel + upNum;
					UserData.UserLevel = UserLevel;
					UserData.TapAttackChange();
				}
				else
				{
					upNum = upNum+1;
					UserData.HeroLevel[index] += upNum;
				}
				
				MenuView_1_root.updateCell(index);
				MenuView_1_root.cellBtnExpand(index, true, true);
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