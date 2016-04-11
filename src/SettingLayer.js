var SettingLayer_root = null;
var SettingLayer = cc.Layer.extend({
	rootnode:null,
	
	ButtonMusic:null,
	ButtonSound:null,
	TextMusic:null,
	TextSound:null,

	ButtonData:null,
	ButtonHelp:null,
	ButtonBank:null,
	ButtonMark:null,
	TextData:null,
	TextHelp:null,
	TextBank:null,
	TextMark:null,

	
	ctor:function(){
		this._super();
		SettingLayer_root = this;
		SettingLayer_root.rootnode = ccs.load(res.SettingLayer_json).node;
		
		SettingLayer_root.addChild(SettingLayer_root.rootnode);

		SettingLayer_root.TextMusic = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "TextMusic");
		SettingLayer_root.ButtonMusic = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "ButtonMusic");
		SettingLayer_root.ButtonMusic.addTouchEventListener(SettingLayer_root.onMusicOrSoundClick);
		SettingLayer_root.TextSound = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "TextSound");
		SettingLayer_root.ButtonSound = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "ButtonSound");
		SettingLayer_root.ButtonSound.addTouchEventListener(SettingLayer_root.onMusicOrSoundClick);
		
		SettingLayer_root.TextData = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "TextData");
		SettingLayer_root.ButtonData = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "ButtonData");
		SettingLayer_root.ButtonData.addTouchEventListener(SettingLayer_root.onDataClick);

		ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "ButtonClose").addTouchEventListener(SettingLayer_root.onCloseClick);
		ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "PanelBg").addTouchEventListener(SettingLayer_root.onCloseClick, SettingLayer_root);

		SettingLayer_root.updateButtonState();
		return true;
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
	onDataClick:function(sender,type)
	{
		var buttonName = sender.getName();
		switch(type){
		case ccui.Widget.TOUCH_ENDED:

			break;
		default:
			break;
		}
	},
	updateButtonState : function () {

		SettingLayer_root.ButtonMusic.getChildByName("ImageForbid2").setVisible(UserData.MusicEnable == 0 ? true : false);
		SettingLayer_root.TextMusic.setString(UserData.MusicEnable == 0 ? "音乐:关" : "音乐:开");
		
		SettingLayer_root.ButtonSound.getChildByName("ImageForbid1").setVisible(UserData.SoundEnable == 0 ? true : false);
		SettingLayer_root.TextSound.setString(UserData.SoundEnable == 0 ? "音乐:关" : "音乐:开");
	},
	onMusicOrSoundClick:function(sender,type){
		var buttonName = sender.getName();
		switch(type){
		case ccui.Widget.TOUCH_ENDED:
			if (buttonName == "ButtonMusic") 
			{ 
				if (UserData.MusicEnable == 0) { UserData.MusicEnable = 1;} else { UserData.MusicEnable = 0; }
			}
			else if (buttonName == "ButtonSound") 
			{
				if (UserData.SoundEnable == 0) { UserData.SoundEnable = 1;} else { UserData.SoundEnable = 0; }
			}
			SettingLayer_root.updateButtonState();
			//UserData.SaveArchive();
			break;
		default:
			break;
		}
	},
});
