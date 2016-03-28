var MenuView_2_root = null;

var MenuView_2 = cc.Layer.extend({
	rootnode:null,
	btn : null,
	ctor:function(){
		this._super();
		MenuView_2_root = this;

		MenuView_2_root.rootnode = ccs.load(res.MenuView_2_json).node;
		MenuView_2_root.addChild(MenuView_2_root.rootnode);

		this.btn = MenuView_2_root.rootnode.getChildByName("closeButton");
		this.btn.addTouchEventListener(this.onCloseClick);

		return true;
	},
	onCloseClick:function(sender, type){

		MenuView_1_root.rootnode.setPosition(cc.p(0, -500));
		//console.log("fksdlfsdlfksdg");	
	}
});