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
});