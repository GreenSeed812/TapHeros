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

	create : function (type, data) {
		console.log("zxczxczxc1");

		
		this._type = type;
		this._data = data;

		var huadongtiaoIndex=this._data.Index;
		var ArtifactID=this._data.ArtifactID;

		console.log("huadongtiaoIndex"+huadongtiaoIndex);
		console.log("ArtifactID"+ArtifactID);

		//var artifact = UserData.GetArtifactForID(this._data.ArtifactID);
		var artifactRuler = Artifact[ArtifactID-1];//index是神器id
		console.log(artifactRuler.Name);

		var level = null;
		for (var i = 0; i < UserData.ArtifactAll2.length; i++) {
			if(UserData.ArtifactAll2[i].id == ArtifactID)
			{
				level = UserData.ArtifactAll2[i].level;
			}
		};
		console.log("level"+level);

		if (this._type == InformationLayerType.ArtifactBreak)
		{
			console.log("levelsssss");
			//var artifact = UserData.GetArtifactForID(this._data.ArtifactID);
			//var artifactRuler = Artifact[artifact.i];
			//var level = artifact.l;
			var star = null;


			var Iconbutton = new ArtifactNode();
			Iconbutton.create({width : 126, height : 126}, star, artifactRuler.Icon);
			ProjectNode.addChild(Iconbutton);
			console.log("levelsssss2");
			var Button_Style_2 = ccui.helper.seekWidgetByName(this.rootnode, "Button_Style_2");
			Button_Style_2.setVisible(true);
			Button_Style_2.addTouchEventListener(this.onArtifactUpClick, this);
			console.log("levelsssss3");
			var Text_Name = ccui.helper.seekWidgetByName(this.rootnode, "Text_Name");
			Text_Name.setString(artifactRuler.Name);
			var Text_LevelNum = ccui.helper.seekWidgetByName(this.rootnode, "Text_LevelNum");
			Text_LevelNum.setString(level);
			var EffectDesc_now = ccui.helper.seekWidgetByName(this.rootnode, "EffectDesc_now");
			EffectDesc_now.setString(artifactRuler.BaseData.Desc);
			var Text_EffectDesc_Next = ccui.helper.seekWidgetByName(this.rootnode, "Text_EffectDesc_Next");
			Text_EffectDesc_Next.setString(artifactRuler.BaseData.Desc);
			console.log("levelsssss4");
			var Text_Desc = ccui.helper.seekWidgetByName(this.rootnode, "Text_Desc");
			Text_Desc.setString(artifactRuler.Desc);
			var Text_Desc_Desc = ccui.helper.seekWidgetByName(this.rootnode, "Text_Desc_Desc");
			Text_Desc_Desc.setString("");
			var Text_NextDesc = ccui.helper.seekWidgetByName(this.rootnode, "Text_NextDesc");
			Text_NextDesc.setString("下一等级");
			console.log("levelsssss5");
		}
	},
	onArtifactUpClick:function(sender,type){
		
		if (type == ccui.Widget.TOUCH_ENDED) {
			if (this._type == InformationLayerType.ArtifactBreak) {
				console.log("onArtifactUpClick");
				var ArtifactID2=this._data.ArtifactID;
				var huadongtiaoIndex2=this._data.Index;
				console.log("ArtifactID2"+ArtifactID2);
				console.log("huadongtiaoIndex2"+huadongtiaoIndex2);
				var artifact=Artifact[huadongtiaoIndex2-1];
				var id=artifact.Name;
				console.log("id"+id);
				//var artifact = UserData.GetArtifactForID(this._data.ArtifactID);
				
				
				//UserData.BreakArtifact(this._data.Index)

				//UserData.BreakArtifact2(b);
				
				for (var i = 1; i <= UserData.ArtifactAll2.length; i++) {
					var viewCell = MenuView_2_root.ListView.getItem(i);
					var a=viewCell.getTag();
					console.log("Tag"+a);
					if(a == ArtifactID2)
					{
						UserData.ArtifactAll2.splice(i-1,1);
						MenuView_2_root.ListView.removeItem(i);
						UserData.ArtifactCoin += 1;
						console.log("i"+i);
					}
				};


				MainScene_root.popLayer();
				/*UserData.UpdateArtifactState();
				if (ArtifactEditeLayer_root) {
					ArtifactEditeLayer_root.create(artifact.i);
				}*/
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
