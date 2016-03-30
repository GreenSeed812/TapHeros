var MenuView_2_root = null;
var MenuView_2 = cc.Layer.extend({
	rootnode:null,
	Total_Sheli:null,
	DPS_UpRate:null,
	ctor:function(){
		this._super();
		MenuView_2_root = this;
		this.rootnode = ccs.load(res.MenuView_2_json).node;
		this.addChild(this.rootnode);

		ccui.helper.seekWidgetByName(this.rootnode, "button_close").addTouchEventListener(this.onCloseClick);
		//ccui.helper.seekWidgetByName(this.rootnode, "Button_RandomArtifact").addTouchEventListener(this.touchButton);

		this.Total_Sheli = ccui.helper.seekWidgetByName(this.rootnode, "Total_Sheli");
		this.DPS_UpRate = ccui.helper.seekWidgetByName(this.rootnode, "DPS_UpRate");
		this.ListView = ccui.helper.seekWidgetByName(this.rootnode, "ListView");
		//this.createCells();
		//this.setInformation();
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
	}
});