var StartScene_root = null;
var startScene = cc.Layer.extend({
    ctor:function () {

        this._super();
        StartScene_root = this;
        var size = cc.winSize;

        var scene = ccs.load(res.StartScene_json).node;
        this.addChild(scene);

        return true;
    }
});
