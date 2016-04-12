var InformationLayer_root = null;
var InformationLayer = cc.Layer.extend({
	rootnode:null,

	ProjectNode:null,
	_index:0,
	_data:null,

	ctor:function(){

		this._super();
		InformationLayer_root = this;
		this.rootnode = ccs.load(res.InformationLayer_json).node;
		
		//enableResize(this.rootnode);
		
		this.addChild(this.rootnode);
		console.log("222");
		ccui.helper.seekWidgetByName(this.rootnode, "button_close").addTouchEventListener(this.onCloseClick);
		ccui.helper.seekWidgetByName(this.rootnode, "Panel_bg").addTouchEventListener(this.onCloseClick);

		ProjectNode = ccui.helper.seekWidgetByName(this.rootnode, "ProjectNode");

		return true;
	},
	create : function (data) {

		//this._type = type;
		this._data = data;
		{

			var artifact = UserData.GetArtifactForID(this._data.ArtifactID);
			var artifactRuler = Artifact[artifact.i];
			var level = artifact.l;
			var star = artifact.s;

			var Iconbutton = new ArtifactNode();
			Iconbutton.create({width : 126, height : 126}, star, artifactRuler.Icon);
			ProjectNode.addChild(Iconbutton);

			var Button_Style_1 = ccui.helper.seekWidgetByName(this.rootnode, "Button_Style_1");
			Button_Style_1.setVisible(false);
			var Button_Style_2 = ccui.helper.seekWidgetByName(this.rootnode, "Button_Style_2");
			Button_Style_2.setVisible(true);
			Button_Style_2.addTouchEventListener(this.onArtifactUpClick, this);

			var Text_Name = ccui.helper.seekWidgetByName(this.rootnode, "Text_Name");
			Text_Name.setString(artifactRuler.Name);
			var Text_LevelNum = ccui.helper.seekWidgetByName(this.rootnode, "Text_LevelNum");
			Text_LevelNum.setString(level);
			var EffectDesc_now = ccui.helper.seekWidgetByName(this.rootnode, "EffectDesc_now");
			EffectDesc_now.setString(artifactRuler.BaseData.Desc);
			var Text_EffectDesc_Next = ccui.helper.seekWidgetByName(this.rootnode, "Text_EffectDesc_Next");
			Text_EffectDesc_Next.setString(artifactRuler.BaseData.Desc);

			var Text_Desc = ccui.helper.seekWidgetByName(this.rootnode, "Text_Desc");
			Text_Desc.setString(artifactRuler.Desc);
			var Text_Desc_Desc = ccui.helper.seekWidgetByName(this.rootnode, "Text_Desc_Desc");
			Text_Desc_Desc.setString("");
			var Text_NextDesc = ccui.helper.seekWidgetByName(this.rootnode, "Text_NextDesc");
			Text_NextDesc.setString("下一等级");
		}
	},
	onArtifactUpClick:function(sender,type){
		if (type == ccui.Widget.TOUCH_ENDED) {
			if (this._type == InformationLayerType.ArtifactUp) {

				var artifact = UserData.GetArtifactForID(this._data.ArtifactID);

				if (UserData.UpArtifact(this._data.Index)) {
					MainScene_root.popLayer();
					UserData.UpdateArtifactState();
					if (ArtifactEditeLayer_root) {
						ArtifactEditeLayer_root.create(artifact.i);
					}
				}
			} else if (this._type == InformationLayerType.ArtifactBreak) {

				var artifact = UserData.GetArtifactForID(this._data.ArtifactID);

				UserData.BreakArtifact(this._data.Index)
				MainScene_root.popLayer();
				UserData.UpdateArtifactState();
				if (ArtifactEditeLayer_root) {
					ArtifactEditeLayer_root.create(artifact.i);
				}
			}
		}
	},
	onCloseClick:function(sender,type){
		switch(type){
		case ccui.Widget.TOUCH_ENDED:
			MainScene_root.popLayer();
			break;
		default:
			break;
		}
	},
});
