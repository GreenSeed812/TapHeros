var MenuView_2_root = null;
var MenuView_2 = cc.Layer.extend({
	rootnode:null,
	Total_Sheli:null,
	DPS_UpRate:null,
	BitmapFontLabel_2:null,
	chouquCoin:null,
	tmpIndex:null,
	ctor:function(){
		this._super();
		MenuView_2_root = this;
		this.rootnode = ccs.load(res.MenuView_2_json).node;
		this.addChild(this.rootnode);

		ccui.helper.seekWidgetByName(this.rootnode, "button_close").addTouchEventListener(this.onCloseClick);
		ccui.helper.seekWidgetByName(this.rootnode, "Button_RandomArtifact").addTouchEventListener(this.touchButton);

		this.Total_Sheli = ccui.helper.seekWidgetByName(this.rootnode, "Total_Sheli");
		this.DPS_UpRate = ccui.helper.seekWidgetByName(this.rootnode, "DPS_UpRate");
		this.BitmapFontLabel_2 = ccui.helper.seekWidgetByName(this.rootnode, "BitmapFontLabel_2");
		MenuView_2_root.BitmapFontLabel_2.setString(UserData.ReincarnationCount);
		this.chouquCoin = ccui.helper.seekWidgetByName(this.rootnode, "chouquCoin");
		//MenuView_2_root.chouquCoin.setString(UserData.chouquCoinList[UserData.chouquCoinNmb]);
		MenuView_2_root.chouquCoin.setString(UserData.chouquCoinList[UserData.chouquCoinNmb]);
		this.ListView = ccui.helper.seekWidgetByName(this.rootnode, "ListView");
		this.createCells();
		//this.setInformation();
		return true;
	},
	createCells:function(){
		/*for (var index = 0; index < Artifact.length; index++) 
		{

			var level = UserData.ArtifactLevel[index];
			if(level >= 0) {
				this.createCell(index);
			}
		}*/
		//this.createCell(1);
	},
	SetFormulas:function(){
		UserData.ChouquMoney				= (1+UserData.ArtifactAll2.length)*2;							// 抽取神器需要转生币公式
		UserData.BreakMoney					= UserData.ArtifactAll2.length*2;								// 打破神器返还转生币公式
	},
	createCell:function(index){
		console.log("cell");
		console.log("createCell");
		tmpIndex=index;
		var active = UserData.ArtifactActive[index];
		var level = UserData.ArtifactLevel[index];
		var star = UserData.ArtifactStar[index];
		var artifact = Artifact[index-1];
		
		var custom_item = new ccui.Layout();
		custom_item.setTag(index);

		var cellBg = new cc.Sprite(res.bg_tiao_png);
		cellBg.x = cellBg.getContentSize().width * 0.5;
		cellBg.y = cellBg.getContentSize().height * 0.5;
		console.log("thisqaa1");
		// Create the button
		var buttonNode = new cc.Node();
		buttonNode.setName("buttonNode");
		{
			
			var button = new ccui.Button();
			button.setName("button");
			button.setTouchEnabled(true);
			button.loadTextures(res.button_lvup_2_n_png, res.button_lvup_2_s_png, res.button_lvup_2_n_png);
			button.x = 500;
			button.y = 60;
			button.addTouchEventListener(this.touchButtonEdite, this);
			button.setTag(index);
			buttonNode.addChild(button);

			var buttonTextNode = new cc.Node();
			buttonTextNode.setName("buttonTextNode");
			button.addChild(buttonTextNode);

			/*if (level > 0) {
				var ButtonFunction = new cc.LabelTTF("强化", res.TTF_黑体加粗, 20);
			} else {
				var ButtonFunction = new cc.LabelTTF("抽取", res.TTF_黑体加粗, 20);
			}*/

			var ButtonFunction = new cc.LabelTTF("强化", res.TTF_黑体加粗, 20);
			
			ButtonFunction.setName("ButtonFunction");
			ButtonFunction.setAnchorPoint(0.5, 1);
			ButtonFunction.x = 66;
			ButtonFunction.y = 50;
			buttonTextNode.addChild(ButtonFunction);
		}
		
		var Desc = new cc.LabelTTF(artifact.BaseData.Desc, res.TTF_正粗黑, 16);
		Desc.setName("Desc");
		Desc.setColor(cc.color.GRAY);
		Desc.setDimensions(310, 50);
		Desc.setAnchorPoint(0, 1);
		Desc.x = 120;
		Desc.y = 70;

		var LV = new cc.LabelTTF("Lv.", res.TTF_超粗黑, 20);
		LV.setName("LV");
		LV.setAnchorPoint(0, 0);
		LV.x = 350;
		LV.y = 74;

		var LV_Num = new cc.LabelTTF(level, res.TTF_超粗黑, 20);
		LV_Num.setName("LV_Num");
		LV_Num.setColor(cc.color(0, 255, 255));
		LV_Num.setAnchorPoint(0, 0);
		LV_Num.x = 380;
		LV_Num.y = 74;

		var HeroName = new cc.LabelTTF(artifact.Name, res.TTF_正粗黑, 20);
		HeroName.setName("HeroName");
		HeroName.setAnchorPoint(0, 0);
		HeroName.x = 120;
		HeroName.y = 74;

		// Create the hero icon
		var Iconbutton = new ArtifactNode();
		Iconbutton.setName("Iconbutton");
		Iconbutton.create({width : 78, height : 78}, star,artifact.Icon, { callback : this.touchHeroIcon, tag : index});
		Iconbutton.x = 74;
		Iconbutton.y = 60;

		custom_item.setContentSize(cellBg.getContentSize());
		custom_item.addChild(cellBg);
		custom_item.addChild(Iconbutton);
		custom_item.addChild(LV);
		custom_item.addChild(LV_Num);
		custom_item.addChild(HeroName);
		custom_item.addChild(Desc);
		custom_item.addChild(buttonNode);

		var sq = { id : index, l : level,  data : custom_item };
		UserData.ArtifactAll2.push(sq);
		console.log("sq");
		
		//MenuView_2_root.ListView.insertCustomItem(custom_item, 1);

		console.log("id");
		var a=UserData.ArtifactAll2[0].id;
		var b=UserData.ArtifactAll2.length;
		console.log(a);
		console.log(b);
		MenuView_2_root.ListView.insertCustomItem(UserData.ArtifactAll2[b-1].data, 1);
		
		//MenuView_2_root.ListView.insertCustomItem(UserData.ArtifactAll2[b-1].data, index);
	},
	touchButtonEdite: function (sender, type) {
		

		var index = sender.getTag();
		
		switch (type) {
			/*case ccui.Widget.TOUCH_BEGAN:
				sender.getChildByName("buttonTextNode").y = -2;
				break;
			case ccui.Widget.TOUCH_CANCELED:
				sender.getChildByName("buttonTextNode").y = 0;
				break;*/
			case ccui.Widget.TOUCH_ENDED:
			console.log("asdasdaaaaaaa");
			console.log(index);
			for (var i = 0; i < UserData.ArtifactAll2.length; i++) {
				console.log("i:"+i);
				if(UserData.ArtifactAll2[i].id == index)
				{
					console.log("ok");
					console.log("level q:"+UserData.ArtifactAll2[i].l);
					UserData.ArtifactAll2[i].l +=1;
					console.log("level h:"+UserData.ArtifactAll2[i].l);
					MenuView_2_root.updateCell();
					console.log("ok2");
				}
			};
				
				break;
		}
	},
	touchButton : function (sender, type) {
		switch (type) {
		case ccui.Widget.TOUCH_BEGAN:
			break;
		case ccui.Widget.TOUCH_ENDED:
		
			if (sender.getName() == "Button_RandomArtifact") {
				/*UserData.RandomArtifact();
				MenuView_2_root.requestRefreshView();*/

				var a=UserData.chouquCoinList[UserData.chouquCoinNmb];
				var b=UserData.ReincarnationCount;
				console.log("UserData.chouquCoinList[UserData.chouquCoinNmb]"+a);
				console.log("UserData.ReincarnationCount"+b);

				if(b >= a && UserData.ArtifactAll2.length < 6)
				{
					var tmpnum=null;
					UserData.ReincarnationCount -= UserData.chouquCoinList[UserData.chouquCoinNmb];

					if(UserData.ArtifactIndex <= 80)
					{
						UserData.ArtifactIndex++;
						var tmp=MenuView_2_root.RandomArtifactNum();
						console.log("UserData.ArtifactIndex"+UserData.ArtifactIndex);
						MenuView_2_root.createCell(tmp+1);
						MenuView_2_root.requestRefreshView();
						tmpnum=tmp;
					}

					UserData.chouquCoinNmb++;
					MenuView_2_root.BitmapFontLabel_2.setString(UserData.ReincarnationCount);
					MenuView_2_root.chouquCoin.setString(UserData.chouquCoinList[UserData.chouquCoinNmb]);

					console.log("tmpnum+++++++++++++++++++++++++++++"+tmpnum);
					{
						if(tmpnum == 0)
						{
							console.log("守护者之杖");
						}
						else if(tmpnum == 1)
						{
							console.log("影之哀伤");
						}
						else if(tmpnum == 2)
						{
							console.log("炎魔之锤");
						}
						else if(tmpnum == 3)
						{
							console.log("群星之怒4");
						}
						else if(tmpnum == 4)
						{
							console.log("龙父之牙5");
						}
						else if(tmpnum == 5)
						{
							console.log("巨龙之怒6");
						}
					}
				}

				/*if(UserData.ArtifactIndex <= 8)
				{
					UserData.ArtifactIndex++;
					var tmp=MenuView_2_root.RandomArtifactNum();
					console.log("UserData.ArtifactIndex"+UserData.ArtifactIndex);
					MenuView_2_root.createCell(tmp+1);
					MenuView_2_root.requestRefreshView();
					
				}*/
			}
			else if (sender.getName() == "Button_AddArtifactCount") {
				
			}
			
			break;

			
		}
	},
	RandomArtifactNum : function(){
		console.log("RandomArtifactNum");
		var Num=null;

		do
		{
			//Artifact.length-1
			var tmpNum = GetRandomNum(0,5);
			Num=tmpNum;
			console.log(tmpNum);
			if(UserData.ArtifactActive2[tmpNum] == 0)
			{
				UserData.ArtifactActive2[tmpNum] = 1;
				Num=tmpNum;
				break;
			}
		}
		while(UserData.ArtifactActive2[Num] == 1);

		return Num;
	},
	requestRefreshView : function () {

		/*for (var index = 0; index < UserData.ArtifactAll2.length; index++) 

		{
			//console.log("a");
			var level = UserData.ArtifactLevel[index];
			if(level >= 0) {
				this.updateCell(index);
			}
		}*/

		for (var index = 1; index <= UserData.ArtifactAll2.length; index++) 
		{
			this.updateCell(index);
		}
		//this.setInformation();

		/*{
			console.log("forq");
			for (var index = 0; index < UserData.ArtifactAll2.length; index++) 
			{
				var index2=UserData.ArtifactAll2[index].id;
				var level = UserData.ArtifactAll2[index].l;
				console.log(index2);
				console.log(level);
				this.updateCell(index);
			}

		}*/


	},
	updateCell:function(index){
		
		/*console.log("qqqqq");
		var level = UserData.ArtifactAll2[index].l;
		console.log(level);
		console.log("qqqqqhhh");
		//var artifact = Artifact[index];
		var index2=UserData.ArtifactAll2[index].id;
		console.log(index2);
		var artifact = Artifact[index2-1];

		var viewCell = this.ListView.getItem(3);
		console.log("asdasdasdas2");
		var LV_Num = viewCell.getChildByName("LV_Num");
		console.log("asdasdasdas3");
		LV_Num.setString(level);
		console.log("asdasdasdas4");

		var button = viewCell.getChildByName("buttonNode").getChildByName("button");
		var ButtonFunction = button.getChildByName("buttonTextNode").getChildByName("ButtonFunction");
		
			ButtonFunction.setString("强化");*/

		
		/*console.log("index:"+index);
		if(UserData.ArtifactAll2[index].id)
		{
			console.log("aaaaa");
			var level = UserData.ArtifactAll2[index].l;
			console.log("aaaaa2");
			//var star = UserData.ArtifactStar[index];
			var artifact = Artifact[index];

			var viewCell = this.ListView.getItem(index);
			var LV_Num = viewCell.getChildByName("LV_Num");
			LV_Num.setString(level);
			console.log("aaaaa3");
			//var Iconbutton = viewCell.getChildByName("Iconbutton");
			//Iconbutton.setStar(star);

			var button = viewCell.getChildByName("buttonNode").getChildByName("button");
			var ButtonFunction = button.getChildByName("buttonTextNode").getChildByName("ButtonFunction");
			
				ButtonFunction.setString("强化");
		}*/

		/*var level = 0;
		//var star = UserData.ArtifactStar[index];
		var artifact = Artifact[index];

		var viewCell = this.ListView.getItem(index);
		var LV_Num = viewCell.getChildByName("LV_Num");
		LV_Num.setString(level);
		var Iconbutton = viewCell.getChildByName("Iconbutton");
		//Iconbutton.setStar(star);

		var button = viewCell.getChildByName("buttonNode").getChildByName("button");
		var ButtonFunction = button.getChildByName("buttonTextNode").getChildByName("ButtonFunction");
		ButtonFunction.setString("强化");*/
		
		
		for (var i = 0; i < UserData.ArtifactAll2.length; i++) {
			
			if(UserData.ArtifactAll2[i].id == index)
			{
				var level = UserData.ArtifactAll2[i].l;
				//var star = UserData.ArtifactStar[index];
				var artifact = Artifact[index];

				var viewCell = this.ListView.getItem(index);
				var LV_Num = viewCell.getChildByName("LV_Num");
				LV_Num.setString(level);
				var Iconbutton = viewCell.getChildByName("Iconbutton");
				//Iconbutton.setStar(star);

				var button = viewCell.getChildByName("buttonNode").getChildByName("button");
				var ButtonFunction = button.getChildByName("buttonTextNode").getChildByName("ButtonFunction");
				ButtonFunction.setString("强化");
			}
		};


		var artifact = Artifact[tmpIndex];
		var LV_Num = viewCell.getChildByName("LV_Num");
		LV_Num.setString(level);
		var Iconbutton = viewCell.getChildByName("Iconbutton");
		//Iconbutton.setStar(star);

		var button = viewCell.getChildByName("buttonNode").getChildByName("button");
		var ButtonFunction = button.getChildByName("buttonTextNode").getChildByName("ButtonFunction");
		
			ButtonFunction.setString("强化");
		

	},
	touchHeroIcon: function (sender, type) {


		var index = sender.getTag();//神器id
		var huadongtiaoIndex=null;
		switch (type) {
		case ccui.Widget.TOUCH_ENDED:
			{
				for (var i = 1; i <= UserData.ArtifactAll2.length; i++) {
					
					var viewCell = MenuView_2_root.ListView.getItem(i);
					var a=viewCell.getTag();//滑动条id
					if(a == index)
					{
						console.log("zhengque a"+a);
						huadongtiaoIndex=a;

						/*MenuView_2_root.ListView.removeItem(1);
						console.log("remove ok");*/
					}
				};
			}
			MainScene_root.pushLayer(new InformationLayer());

			//MenuView_2_root.chouquCoin.setString(555);
			InformationLayer_root.create(InformationLayerType.ArtifactBreak, { Index : huadongtiaoIndex, ArtifactID : index } );

			

			
				/*MenuView_2_root.ListView.removeItem(1);
				console.log("remove1 ok");

				MenuView_2_root.ListView.removeItem(2);
				console.log("remove2 ok");

				MenuView_2_root.ListView.removeItem(3);
				console.log("remove3 ok");*/
			
			

			break;
		}
	},
	onCloseClick:function(sender,type){
		switch(type){
		case ccui.Widget.TOUCH_ENDED:
			MainMenu_root.mainMenuReset();
			break;
		default:
			break;
		}
	}
});