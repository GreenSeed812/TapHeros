var ShopLayer_root = null;

var ShopLayer = cc.Layer.extend({
	rootnode:null,
	ButtonClose : null,
	BitmapFontLabel_1 : null,
	SpriteBg : null,
	ListViewShop:null,
	ctor:function(){
		this._super();
		ShopLayer_root = this;

		this.rootnode = ccs.load(res.ShopLayer_json).node;
		this.addChild(this.rootnode);

		this.ListViewShop = ccui.helper.seekWidgetByName(ShopLayer_root.rootnode, "ListViewShop");
		this.ButtonClose = ShopLayer_root.rootnode.getChildByName("ButtonClose");
		//this.SpriteBg = ShopLayer_root.rootnode.getChildByName("SpriteBg");
		
		this.BitmapFontLabel_1 = ShopLayer_root.rootnode.getChildByName("BitmapFontLabel_1");
		ccui.helper.seekWidgetByName(this.rootnode, "Button_1").addTouchEventListener(this.touchButton);
		this.ButtonClose.addTouchEventListener(this.onCloseClick);
		this.createCells();
		
		return true;
	},
	touchButton:function(sender, type){
		switch (type) {
			case ccui.Widget.TOUCH_ENDED:
			console.log("touchButton");
			UserData.DiamondsCount += 10;
			ShopLayer_root.BitmapFontLabel_1.setString(UserData.DiamondsCount);
		}
	},
	createCells:function(){
		for (var index = 0; index < Prop.length; index++) 
		{
			this.createCell(index);
		}
	},
	createCell:function(index){
		console.log("createCell"+index);

		var custom_item = new ccui.Layout();
		custom_item.setTag(index);

		var cellBg = new cc.Sprite(res.bg_tiao_png);
		cellBg.x = cellBg.getContentSize().width * 0.5;
		cellBg.y = cellBg.getContentSize().height * 0.5;

		

		var buttonNode = new cc.Node();
		buttonNode.setName("buttonNode");
		{
			
			var button = new ccui.Button();
			button.setName("button");
			button.setTouchEnabled(true);
			button.loadTextures(res.button_lvup_2_n_png, res.button_lvup_2_s_png, res.button_lvup_2_n_png);
			button.x = 500;
			button.y = 60;
			button.setTag(index);
			button.addTouchEventListener(this.touchButtonEdite, this);
			//button.setTag(index);
			buttonNode.addChild(button);

			var buttonTextNode = new cc.Node();
			buttonTextNode.setName("buttonTextNode");
			button.addChild(buttonTextNode);

			var ButtonFunction = new cc.LabelTTF("购买", res.TTF_黑体加粗, 20);
			
			ButtonFunction.setName("ButtonFunction");
			ButtonFunction.setAnchorPoint(0.5, 1);
			ButtonFunction.x = 66;
			ButtonFunction.y = 50;
			buttonTextNode.addChild(ButtonFunction);

			var Diamonds = new cc.Sprite(res.icon_zuanshi);
			Diamonds.setName("Diamonds");
			Diamonds.setScale(0.5,0.5);
			Diamonds.x = 40;
			Diamonds.y = 63;
			buttonTextNode.addChild(Diamonds);

			var number_Diamonds = new cc.LabelTTF(Prop[index].Diamonds, res.TTF_超粗黑, 20);
			number_Diamonds.setName("number_Diamonds");
			number_Diamonds.setColor(cc.color(255, 255, 255));
			number_Diamonds.setAnchorPoint(0, 0);
			number_Diamonds.x = 65;
			number_Diamonds.y = 53;
			buttonTextNode.addChild(number_Diamonds);

			var test_n = new cc.LabelTTF("×", res.TTF_超粗黑, 20);
			test_n.setName("test_n");
			test_n.setColor(cc.color(0, 0, 0));
			test_n.setAnchorPoint(0, 0);
			test_n.x = 35;
			test_n.y = 53;
			test_n.setVisible(false);
			buttonTextNode.addChild(test_n);
			//UserData.PropCount[index]
			var number_nn = new cc.LabelTTF("0", res.TTF_超粗黑, 20);
			number_nn.setName("number_nn");
			number_nn.setColor(cc.color(255, 255, 255));
			number_nn.setAnchorPoint(0, 0);
			number_nn.x = 65;
			number_nn.y = 53;
			number_nn.setVisible(false);
			buttonTextNode.addChild(number_nn);
		}

		var Desc = new cc.LabelTTF(Prop[index].Describe, res.TTF_正粗黑, 21);
		Desc.setName("Desc");
		Desc.setColor(cc.color.GRAY);
		Desc.setDimensions(310, 50);
		Desc.setAnchorPoint(0, 1);
		Desc.x = 120;
		Desc.y = 65;

		/*var number = new cc.LabelTTF("拥有数量：", res.TTF_超粗黑, 20);
		number.setName("number");
		number.setAnchorPoint(0, 0);
		number.x = 120;
		number.y = 30;*/

		var tmp=UserData.PropCount[index];
		if(tmp == 0)
		{
			tmp="0";
		}
		
		/*var number_n = new cc.LabelTTF(tmp, res.TTF_超粗黑, 20);
		number_n.setName("number_n");
		number_n.setColor(cc.color(0, 255, 255));
		number_n.setAnchorPoint(0, 0);
		number_n.x = 220;
		number_n.y = 30;*/

		/*var number_Diamonds = new cc.LabelTTF(1, res.TTF_超粗黑, 20);
		number_Diamonds.setName("number_Diamonds");
		number_Diamonds.setColor(cc.color(0, 255, 255));
		number_Diamonds.setAnchorPoint(0, 0);
		number_Diamonds.x = 0;
		number_Diamonds.y = 0;*/

		var HeroName = new cc.LabelTTF(Prop[index].Name, res.TTF_正粗黑, 20);
		HeroName.setName("HeroName");
		HeroName.setAnchorPoint(0, 0);
		HeroName.x = 120;
		HeroName.y = 74;

		
		var Iconbutton = new ArtifactNode();
		Iconbutton.setName("Iconbutton");
		Iconbutton.create({width : 78, height : 78}, null,Prop[index].Icon, { callback : this.touchHeroIcon, tag : index});
		Iconbutton.x = 74;
		Iconbutton.y = 60;

		custom_item.setContentSize(cellBg.getContentSize());
		custom_item.addChild(cellBg);
		custom_item.addChild(buttonNode);
		custom_item.addChild(Desc);
		//custom_item.addChild(number);
		//custom_item.addChild(number_n);
		custom_item.addChild(HeroName);
		custom_item.addChild(Iconbutton);


		//this.SpriteBg.addChild(number_Diamonds);

		ShopLayer_root.ListViewShop.insertCustomItem(custom_item, index);
	},
	touchButtonEdite:function(sender, type){
		switch (type) {
			case ccui.Widget.TOUCH_ENDED:
			console.log("touchButtonEdite");
			var index = sender.getTag();
			console.log("index"+index);
			if(UserData.PropCount[index] > 0)
			{
				
				UserData.PropCount[index] -= 1
			}
			else if(UserData.PropCount[index] == 0)
			{
				var DiamondsCount=UserData.DiamondsCount;
				var Diamonds=Prop[index].Diamonds;
				console.log("DiamondsCount"+DiamondsCount);
				console.log("Diamonds"+Diamonds);

				if(UserData.DiamondsCount >= Prop[index].Diamonds)
				{
					console.log("if");
					UserData.DiamondsCount -= Prop[index].Diamonds;
					UserData.PropCount[index] += 1;
					ShopLayer_root.BitmapFontLabel_1.setString(UserData.DiamondsCount);
				}
				else
				{
					console.log("else");
				}
				
			}
			
			console.log("index2"+UserData.PropCount[index]);
			ShopLayer_root.requestRefreshView();
		}
	},
	updateCell:function(index){
		var count = UserData.PropCount[index];
		var viewCell = ShopLayer_root.ListViewShop.getItem(index);
		/*var tmp_Num = viewCell.getChildByName("number_n");
		tmp_Num.setString(count);*/
		var button = viewCell.getChildByName("buttonNode").getChildByName("button");
		var ButtonFunction = button.getChildByName("buttonTextNode").getChildByName("ButtonFunction");
		var Diamonds = button.getChildByName("buttonTextNode").getChildByName("Diamonds");
		var number_Diamonds = button.getChildByName("buttonTextNode").getChildByName("number_Diamonds");
		var test_n = button.getChildByName("buttonTextNode").getChildByName("test_n");
		var number_nn = button.getChildByName("buttonTextNode").getChildByName("number_nn");
		if (count > 0) {
			ButtonFunction.setString("使用");
			Diamonds.setVisible(false);
			number_Diamonds.setVisible(false);
			test_n.setVisible(true);
			var a=UserData.PropCount[index];
			number_nn.setString(a);
			number_nn.setVisible(true);
		} else {
			//Button_Style_2.setBright(false);

			ButtonFunction.setString("购买");
			Diamonds.setVisible(true);
			number_Diamonds.setVisible(true);
			test_n.setVisible(false);
			number_nn.setVisible(false);

			/*var DiamondsCount=UserData.DiamondsCount;
			var Diamonds=Prop[index].Diamonds;
			if(DiamondsCount >= Diamonds)
			{
				button.setTouchEnabled(true);
			}
			else
			{
				button.setTouchEnabled(false);
			}*/
			
			
		}
		console.log("for updateCell5");
	},
	requestRefreshView : function () {
		console.log("requestRefreshView");
		for (var index = 0; index < UserData.PropCount.length; index++) 
		{
			console.log("for");
			console.log("for count"+UserData.PropCount.length);
			this.updateCell(index);
		}
	},
	touchHeroIcon:function(sender, type){
		switch (type) {
			case ccui.Widget.TOUCH_ENDED:
			console.log("touchHeroIcon");
		}
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
});