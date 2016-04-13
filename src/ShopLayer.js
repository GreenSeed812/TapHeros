var ShopLayer_root = null;

var ShopLayer = cc.Layer.extend({
	rootnode:null,
	ButtonClose : null,
	ListViewShop:null,
	ctor:function(){
		this._super();
		ShopLayer_root = this;

		this.rootnode = ccs.load(res.ShopLayer_json).node;
		this.addChild(this.rootnode);

		this.ListViewShop = ccui.helper.seekWidgetByName(ShopLayer_root.rootnode, "ListViewShop");
		this.ButtonClose = ShopLayer_root.rootnode.getChildByName("ButtonClose");
		this.ButtonClose.addTouchEventListener(this.onCloseClick);

		ShopLayer_root.createCells();
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

		//创建背景条
		var cellBg = new cc.Sprite(res.bg_tiao_png);
		cellBg.x = cellBg.getContentSize().width * 0.5;
		cellBg.y = cellBg.getContentSize().height * 0.5;
		custom_item.setContentSize(cellBg.getContentSize());
		custom_item.addChild(cellBg);

		//创建道具标识
		var PropIcon = new cc.Sprite(PropData[index].Icon);
		PropIcon.x = 74;
		PropIcon.y = 60;
		custom_item.setContentSize(PropIcon.getContentSize());
		custom_item.addChild(PropIcon);

		/*var CellName = new cc.LabelTTF(PropData[index].Name, res.TTF_超粗黑, 16);
		CellName.setAnchorPoint(0, 0);
		CellName.x = 120;
		CellName.y = 74;*/

		/*var Desc = new cc.LabelTTF(PropData[index].Desc, res.TTF_正粗黑, 16);
		Desc.setName("Desc");
		Desc.setColor(cc.color(255, 150, 20));
		Desc.setAnchorPoint(0, 0);
		Desc.x = 380;
		Desc.y = 74;*/

	/*	button.loadTextures(res.button_lvup_d_png, res.button_lvup_d_png, res.button_lvup_d_png);
		button.setEnabled(true);
		
		button.x = 500;
		button.y = 60;
		//button.addTouchEventListener(MenuView_1_root.touchButton, MenuView_1_root);
		button.setTag(index);
		buttonNode.addChild(button);*/
		/*if(CellName)
		{
			custom_item.addChild(CellName);
		}*/
		/*if(Desc)
		{
			custom_item.addChild(Desc);
		}*/
		if(cellBg)
		{
			custom_item.addChild(cellBg);
		}
		if(PropIcon)
		{
			custom_item.addChild(PropIcon);
		}
		ShopLayer_root.ListViewShop.insertCustomItem(custom_item, index);
	},
	createCells:function()
	{
		for(var index = 0; index < PropData.length; index++) 
		{
			ShopLayer_root.createCell(index);
		}
	},
});

//创建道具标识
		//创建按钮
		/*var buttonNode = new cc.Node();
		buttonNode.setName("buttonNode");
		{
			var button = new ccui.Button();
			button.setName("button");
			
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

			/*var ret = [0,5,400,3];
			var Money_Up = new cc.LabelTTF(GetShowNumFromArray(ret), res.TTF_正粗黑, 14);
			Money_Up.setName("Money_Up");
			Money_Up.setAnchorPoint(0, 0);
			Money_Up.x = 50;
			Money_Up.y = 54;
			buttonTextNode.addChild(Money_Up);	*/
		

		/*if(buttonNode){
			custom_item.addChild(buttonNode,1);
		}*/