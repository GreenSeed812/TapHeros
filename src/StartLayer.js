var StartLayer_root = null;
var StartLayer = cc.Layer.extend({
	rootnode:null,
	PushBg:null,
	TextFieldName:null,
	ButtonCertain:null,
	PanelNickName:null,
    ctor:function () {
        this._super();

        StartLayer_root = this;
        var size = cc.winSize;

        this.rootnode = ccs.load(res.StartLayer_json).node;
        this.addChild(this.rootnode);

		StartLayer_root.PanelNickName = ccui.helper.seekWidgetByName(StartLayer_root.rootnode, "PanelNickName");
		StartLayer_root.TextFieldName = ccui.helper.seekWidgetByName(StartLayer_root.rootnode, "TextFieldName");
		
		StartLayer_root.ButtonCertain = this.rootnode.getChildByName("ButtonCertain");
		StartLayer_root.ButtonCertain.addTouchEventListener(this.onBackClick);
        return true;
    },
    onBackClick:function(sender,type)
    {
    	console.log("333");
		var buttonName = sender.getName();
		switch(type)
		{
		case ccui.Widget.TOUCH_ENDED:
			if (buttonName == "ButtonCertain") 
			{ 
				console.log("11111111111111");
				UserData.NickName = StartLayer_root.TextFieldName.getString();
				MainScene_root.popLayer();
			}
			break;
		
		}
	}
});
