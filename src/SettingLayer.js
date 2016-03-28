
var SettingLayer_root;
var SettingLayer = cc.Layer.extend({
	rootnode:null,
	
	Button_Music:null,
	Button_Sound:null,
	Text_Music:null,
	Text_Sound:null,
	ctor:function(){
		this._super();
		SettingLayer_root = this;
		SettingLayer_root.rootnode = ccs.load(res.SettingLayer_json).node;
		enableResize(SettingLayer_root.rootnode);
		SettingLayer_root.addChild(SettingLayer_root.rootnode);

		SettingLayer_root.Text_Music = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "Text_Music");
		SettingLayer_root.Button_Music = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "Button_Music");
		SettingLayer_root.Button_Music.addTouchEventListener(SettingLayer_root.onMusicOrSoundClick);
		SettingLayer_root.Text_Sound = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "Text_Sound");
		SettingLayer_root.Button_Sound = ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "Button_Sound");
		SettingLayer_root.Button_Sound.addTouchEventListener(SettingLayer_root.onMusicOrSoundClick);
		
		ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "button_close").addTouchEventListener(SettingLayer_root.onCloseClick);
		ccui.helper.seekWidgetByName(SettingLayer_root.rootnode, "Panel_bg").addTouchEventListener(SettingLayer_root.onCloseClick, SettingLayer_root);

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
	updateButtonState : function () {

		SettingLayer_root.Button_Music.getChildByName("forbid").setVisible(UserData.MusicEnable == 0 ? true : false);
		SettingLayer_root.Text_Music.setString(UserData.MusicEnable == 0 ? "音乐:关" : "音乐:开");
		
		SettingLayer_root.Button_Sound.getChildByName("forbid").setVisible(UserData.SoundEnable == 0 ? true : false);
		SettingLayer_root.Text_Sound.setString(UserData.SoundEnable == 0 ? "音乐:关" : "音乐:开");

	},
	onMusicOrSoundClick:function(sender,type){
		
		var buttonName = sender.getName();
		switch(type){
		case ccui.Widget.TOUCH_ENDED:
			if (buttonName == "Button_Music") 
			{ 
				if (UserData.MusicEnable == 0) { UserData.MusicEnable = 1;} else { UserData.MusicEnable = 0; }
			}
			else if (buttonName == "Button_Sound") 
			{
				if (UserData.SoundEnable == 0) { UserData.SoundEnable = 1;} else { UserData.SoundEnable = 0; }
			}
			SettingLayer_root.updateButtonState();
			UserData.SaveArchive();
			break;
		default:
			break;
		}
	},
});
