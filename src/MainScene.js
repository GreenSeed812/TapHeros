
var MainScene_root;
var MainScene = cc.Scene.extend({
	layerQueue:null,
	PanelLayerQueue:null,
	PanelEffect:null,
	ctor:function(){
		this._super();
		MainScene_root = this;
		var rootnode = ccs.load(res.MainScene_json).node;
		
		this.addChild(rootnode);
		this.layerQueue = [];
		this.PanelEffect = ccui.helper.seekWidgetByName(rootnode, "PanelEffect");
		this.PanelLayerQueue = ccui.helper.seekWidgetByName(rootnode, "PanelLayerQueue");
		return true;
	},
	initGameData : function () {
		if (UserData.NickName.length == 0) {
			this.pushLayer(new StartLayer());
        }
	},
	pushLayer :function(layer) {
		this.layerQueue.push(layer);
		this.PanelLayerQueue.addChild(layer);
	},
	popLayer : function () {
		this.PanelLayerQueue.removeChild(MainScene_root.layerQueue.pop());
	},
	clean : function(){
		this.PanelLayerQueue.removeAllChildren();
	},
	touchBreak : function (enabled) {
		this.PanelLayerQueue.setTouchEnabled(enabled);
	},
});
