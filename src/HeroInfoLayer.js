var HeroInfoLayer_root;
var HeroInfoLayer = cc.Layer.extend({
	rootnode:null,

	ImageHero:null,
	FontDps:null,
	FontLevel:null,
	TextDetails:null,
	TextHeroName:null,
	ImageBlack:null,
	ButtonClose:null,

	heroIndex:null,
	ListView_SkillList:null,
	ctor:function(){
		this._super();
		HeroInfoLayer_root = this;
		HeroInfoLayer_root.rootnode = ccs.load(res.HeroInfoLayer_json).node;
		
		HeroInfoLayer_root.addChild(HeroInfoLayer_root.rootnode);

		HeroInfoLayer_root.ImageHero = ccui.helper.seekWidgetByName(HeroInfoLayer_root.rootnode, "ImageHero");
		HeroInfoLayer_root.TextHeroName = ccui.helper.seekWidgetByName(HeroInfoLayer_root.rootnode, "TextHeroName");
		HeroInfoLayer_root.FontLevel = ccui.helper.seekWidgetByName(HeroInfoLayer_root.rootnode, "FontLevel");
		HeroInfoLayer_root.FontDps = ccui.helper.seekWidgetByName(HeroInfoLayer_root.rootnode, "FontDps");
		HeroInfoLayer_root.TextDetails = ccui.helper.seekWidgetByName(HeroInfoLayer_root.rootnode, "TextDetails");
		HeroInfoLayer_root.ListView_SkillList = ccui.helper.seekWidgetByName(HeroInfoLayer_root.rootnode, "ListView_SkillList");

		ccui.helper.seekWidgetByName(HeroInfoLayer_root.rootnode, "ButtonClose").addTouchEventListener(HeroInfoLayer_root.onCloseClick);

		HeroInfoLayer_root.heroIndex = 0;
		return true;
	},
	setHeroDate : function(heroData, level, index) {
		HeroInfoLayer_root.heroIndex = index;
		HeroInfoLayer_root.ImageHero.loadTexture(heroData.Icon);
		HeroInfoLayer_root.TextHeroName.setString(heroData.Name);
		HeroInfoLayer_root.FontLevel.setString("Lv. "+level);
		HeroInfoLayer_root.TextDetails.setString(heroData.Desc);
		HeroInfoLayer_root.FontDps.setString("DPS: "+GetShowNumFromArray(UserData.HeroDPS));

		for (var i = 0; i < heroData.Skill.length; i++) {
			var array_element = heroData.Skill[i];
			HeroInfoLayer_root.createCell(array_element, heroData.SkillUnlock[i], i);
		}
	},
	setUserDate : function(Data, level, index) {
		HeroInfoLayer_root.heroIndex = index;
		HeroInfoLayer_root.ImageHero.loadTexture(Data.Icon);
		HeroInfoLayer_root.TextHeroName.setString(UserData.NickName);
		HeroInfoLayer_root.FontLevel.setString("Lv. "+level);
		HeroInfoLayer_root.TextDetails.setString(Data.Desc);
		HeroInfoLayer_root.FontDps.setString("DMG: "+GetShowNumFromArray(UserData.TapAttack));

		for (var i = 0; i < Data.Skill.length; i++) {
			var array_element = heroData.Skill[i];
			HeroInfoLayer_root.createCell(array_element, Data.SkillUnlock[i], i);
		}
	},
	createCell:function(skillData, unLockLevel, index) {
		var custom_item = new ccui.Layout();
		custom_item.setTag(index);
		if (unLockLevel > 0)
		{
			var cellBg = new cc.Sprite(res.info_bg_xinxitiao_png);
			cellBg.x = cellBg.getContentSize().width * 0.5;
			cellBg.y = cellBg.getContentSize().height * 0.5;

			var skillIconBg = new cc.Sprite(res.icon_skill_bg_png);
			skillIconBg.x = 60;
			skillIconBg.y = 50;
			
			var skillIcon = new cc.Sprite(skillData.Icon);
			skillIcon.x = 60;
			skillIcon.y = 50;

			var SkillName = new cc.LabelTTF(skillData.Name, res.TTF_正粗黑, 24);
			SkillName.setColor(cc.color.BLACK);
			SkillName.setAnchorPoint(0, 0);
			SkillName.x = 110;
			SkillName.y = 50;

			var SkillDesc = new cc.LabelTTF(skillData.BaseData.Desc, res.TTF_黑体加粗, 24);
			SkillDesc.setColor(cc.color.BLACK);
			SkillDesc.setAnchorPoint(0, 0);
			SkillDesc.x = 110;
			SkillDesc.y = 24;

			custom_item.setContentSize(cellBg.getContentSize());
			custom_item.addChild(cellBg);
			custom_item.addChild(skillIconBg);
			custom_item.addChild(skillIcon);
			custom_item.addChild(SkillName);
			custom_item.addChild(SkillDesc);

			var HeroLevel = UserData.HeroLevel[index];
			var heroData = HeroData[index];
			
			if (UserData.HeroSkillUnLockCount[HeroInfoLayer_root.heroIndex] > index) {
				var icon = new cc.Sprite(res.info_icon_kaiqi_png);
				icon.x = 500;
				icon.y = 50;
				custom_item.addChild(icon);
			} else {
				var skillUnlock = new cc.LabelTTF("需要Lv."+unLockLevel, res.TTF_正粗黑, 24);
				skillUnlock.setColor(cc.color.ORANGE);
				skillUnlock.setAnchorPoint(0, 0);
				skillUnlock.x = 450;
				skillUnlock.y = 50;
				custom_item.addChild(skillUnlock);
			}
			
		}
		HeroInfoLayer_root.ListView_SkillList.insertCustomItem(custom_item, index);
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
