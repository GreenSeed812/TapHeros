
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
		
		ccui.helper.seekWidgetByName(HeroInfoLayer_root.rootnode, "ButtonClose").addTouchEventListener(HeroInfoLayer_root.onCloseClick);

		HeroInfoLayer_root.heroIndex = 0;
		return true;
	},
	setHeroDate : function(heroData, level, index) {

		console.log("123243546");
		/*HeroInfoLayer_root.heroIndex = index;
		HeroInfoLayer_root.Image_HeroIcon.loadTexture(heroData.Icon);
		HeroInfoLayer_root.Text_HeroName.setString(heroData.Name);
		//HeroInfoLayer_root.FontLevel.setString("Lv."+level);
		HeroInfoLayer_root.TextDetails.setString(heroData.Desc);*/
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
