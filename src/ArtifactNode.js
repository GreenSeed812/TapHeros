var ArtifactNode = cc.Layer.extend({
	rootnode:null,
	bg:null,
	ctor:function(){
		this._super();
		this.rootnode = ccs.load(res.ArtifactNode_json).node;
		this.addChild(this.rootnode);
		return true;
	},
	create : function (size, star, res, callbackData) {
		this.bg = ccui.helper.seekWidgetByName(this.rootnode, "bg");
		console.log("create");
		this.bg.loadTexture(res);
		console.log("create2");
		if (callbackData)
		{
			this.bg.setTag(callbackData.tag);
			this.bg.addTouchEventListener(callbackData.callback);
		}
		console.log("create3");
		for (var i = 1; i <= star; i++) {
			ccui.helper.seekWidgetByName(this.rootnode, "box_" + i).setVisible(i == star);
			//ccui.helper.seekWidgetByName(this.rootnode, "star_" + i).setVisible(i <= star);
		};
		this.rootnode.setScaleX(size.width/126);
		this.rootnode.setScaleY(size.height/126);

		if (star == 0) {
			ccui.helper.seekWidgetByName(this.rootnode, "box_1").setVisible(true);
			this.bg.setColor(cc.color.GRAY);
		} else {
			this.bg.setColor(cc.color.WHITE);
		}
		console.log("create4");
	},
	setStar : function (star) {
		for (var i = 1; i <= 5; i++) {
			ccui.helper.seekWidgetByName(this.rootnode, "box_" + i).setVisible(i == star);
			//ccui.helper.seekWidgetByName(this.rootnode, "star_" + i).setVisible(i <= star);
		};
		if (star == 0) {
			ccui.helper.seekWidgetByName(this.rootnode, "box_1").setVisible(true);
			this.bg.setColor(cc.color.GRAY);
		} else {
			this.bg.setColor(cc.color.WHITE);
		}
	},
});
