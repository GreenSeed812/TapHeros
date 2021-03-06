var BattleLayer_root = null;
var BattleLayer = cc.Layer.extend({
    rootnode:null,
	Bg_Sprite:null,
	MonsterNode:null,
	BattlePanel:null,
    Armature:null,
    GapTime:false,
    MonsterName:"",
    MonsterScale:0.8,
    BossMonsterScale:1.0,
    DestJsonNode:null,
    AtkEffects:[],
    Armature:null,
    AtkEffectIndex:0,
    PlayerJobData:null,
    zhezhao:null,
    DestPos:{x:0,y:0},
    locationPos:null,
    Button_OfflineCoin:null,
    Money:null,
    ctor:function () {
        this._super();
        BattleLayer_root = this;
        var size = cc.winSize;

        this.rootnode = ccs.load(res.BattleLayer_json).node;
        

        this.rootnode.resizeCallback = function () {
            BattleLayer_root.DestPos.x = BattleLayer_root.BattlePanel.x;
            BattleLayer_root.DestPos.y = BattleLayer_root.BattlePanel.y;
            
        },

        this.addChild(this.rootnode);

        this.Bg_Sprite = this.rootnode.getChildByName("Bg_Sprite");
        this.BattlePanel = this.rootnode.getChildByName("BattlePanel");
        this.DestNode = this.BattlePanel.getChildByName("Dest_Node");
		this.MonsterNode = this.BattlePanel.getChildByName("MonsterNode");

        this.MoneyImage = ccui.helper.seekWidgetByName(this.rootnode, "MoneyImage");
        this.Money = ccui.helper.seekWidgetByName(this.rootnode, "Money");
        this.Panel_Money = ccui.helper.seekWidgetByName(this.rootnode, "Panel_Money");
        //this.Button_OfflineCoin = ccui.helper.seekWidgetByName(this.rootnode, "Button_OfflineCoin");
        //this.Button_OfflineCoin.addTouchEventListener(this.OfflineCoinClick, this.Button_OfflineCoin);

        this.zhezhao = this.rootnode.getChildByName("zhezhao");
        this.zhezhao.setVisible(false);

        this.DestPos.x = this.BattlePanel.x;
        this.DestPos.y = this.BattlePanel.y;

        BattleLayer_root.locationPos = cc.p(0,0);

        this.RandomMonster(false);

        this.mExitTime = 0;

        //this.updateOfflineCoinState();

        return true;
    },
    OfflineCoinClick : function (sender,type) {
        if (type == ccui.Widget.TOUCH_ENDED) {

            var coinNum = 20;
            for (var i = 0; i < coinNum; i++) {
                var icon = new cc.Sprite(res.icon_goldcoindrop);
                icon.showNum = ArrayMulNumber(UserData.OfflineCoin, 1/coinNum);

                icon.x = this.x;
                icon.y = this.y;

                var rX = GetRandomNum(-250, 450);
                var rY = GetRandomNum(-250, 450);
                var time = GetRandomNum(1000, 1500)/1000;

                var controlPoints = [   cc.p(this.x + rX, this.y + rY),
                                        cc.p(this.x + rX + GetRandomNum(-100, 100), this.y + rY + GetRandomNum(-100, 100)),
                                        cc.p(BattleLayer_root.MoneyImage.x, BattleLayer_root.MoneyImage.y) ];

                var bezierForward = cc.bezierTo(time, controlPoints);//.easing(cc.easeExponentialInOut());

                var rep = cc.sequence(  
                                        cc.spawn( bezierForward,
                                                  cc.sequence(cc.scaleTo(time/10*2, 1.1), cc.scaleTo(time/10*8, 0.7))),
                                        cc.callFunc(BattleLayer_root.onCallback, BattleLayer_root, icon)
                                     );
                icon.runAction(rep);
                BattleLayer_root.Panel_Money.addChild(icon);
            }
            sender.setVisible(false);
            UserData.OfflineCoin = [0,0];
        }
    },
    updateOfflineCoinState : function () {
        if (ArrayIsZero(UserData.OfflineCoin)) {
            this.Button_OfflineCoin.setVisible(false);
        } else {
            this.Button_OfflineCoin.getChildByName("effect").runAction(cc.rotateBy(1.2, 360).repeatForever());
        }
    },
    NextStage : function() {
        if (this.DestJsonNode) {
            this.DestNode.removeChild(this.DestJsonNode);
        }
        
        this.DestJsonNode = ccs.load(Spec.StageSpec[UserData.StageIndexD][1]).node;
        this.DestJsonNode.setAnchorPoint(0.5,0.5);
        this.DestJsonNode.setOpacity(0);//设置透明度
        this.DestJsonNode.runAction(cc.fadeIn(0.5));
        this.DestNode.addChild(this.DestJsonNode);
    },
    NextScene : function () {
        var stateName = Spec.StageSpec[UserData.StageIndex][0];
        
        UserData.StageIndex += 1;
       
        UserData.StageIndexD += 1;
        UserData.StageIndexNmb += 1;
        UserData.EnemyIndex = 1;
        MainMenu_root.UpdateStage("update");

        if( UserData.StageIndex>=15)
        {
            UserData.StageIndex = 1;
        }
        //大地图
        if( UserData.StageIndexD>=15)
        {
            UserData.StageIndexD = 0;
        }
        //地图数字
        if( UserData.StageIndexNmb >=16)
        {
            UserData.StageIndexNmb = 1;
        }
        if (stateName != Spec.StageSpec[UserData.StageIndex][0]) {
            if (this.DestJsonNode) {
                this.DestNode.removeChild(this.DestJsonNode);
                this.DestJsonNode = null;

                {
                    this.zhezhao.setVisible(true);
                    this.zhezhao.setOpacity(0);//设置透明度

                    var action2 = cc.sequence(cc.spawn(cc.fadeIn(0.8)),cc.callFunc(this.fadeOutCallback, this,this.zhezhao),cc.spawn(cc.fadeOut(0.8)));
                   this.zhezhao.runAction(action2);

                }
           }
        }
    },
    onEnter : function () {
        this._super();

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan: function (touches, event) {

                if (BattleLayer_root.InGapTime()) 
                {
                    return false;
                }
                else
                {
                    var timestamp = Timestamp();

                   BattleLayer_root.locationPos = touches[0].getLocation();

                    if ((timestamp - BattleLayer_root.mExitTime) > Ruler.TapInterval ) 
                    {
                        BattleLayer_root.mExitTime = timestamp;
                        // 暴击
 
                        BattleLayer_root.Armature.getAnimation().play("Hurt");

                        UserData.UpdateTapAttack();
                        UserData.TapAttackChange();
                        // 播放攻击特效。播放伤害数字
                    }  
                    BattleLayer_root.DallianceMonster(cc.p(0,0)); 
                }
                return true;
             } ,
            onTouchesEnded: function (touches, event) {
                
                return true;
            },
        }, this);
    },
                
   RandomMonster : function(enforce) {
         
        if (this.Armature && enforce == false) 
        {
            if(this.GapTime == false) 
            {
                this.GapTime = true;
                this.Armature.getAnimation().play("Leave");

                var CoinNum = UserData.GetCoin();
                BattleLayer_root.DropCoin(CoinNum,10);
            };
        } 
        else
        {
            if (enforce) 
            {
                this.MonsterNode.removeChild(BattleLayer_root.Armature);
                this.Armature = null;
            }
           if (this.DestJsonNode == null) 
           {
                this.NextStage();
            } else 
            {
                if (UserData.EnemyIndex < UserData.getBossInterval()&& UserData.EnemyIndex != -1) 
                {
                    UserData.EnemyIndex += 1;

                }
           }
            var index = GetRandomNum(0, Spec.MonsterSpec.length - 1);
            this.MonsterName = Spec.MonsterSpec[index][2];
            ccs.armatureDataManager.addArmatureFileInfo(Spec.MonsterSpec[index][0]);
            this.Armature = new ccs.Armature(Spec.MonsterSpec[index][1]);
            this.Armature.getAnimation().play("Start");
            if(UserData.EnemyIndex < UserData.getBossInterval())
            {
                this.Armature.setScale(this.MonsterScale);
            }
           
            this.MonsterNode.addChild(this.Armature);
            this.Armature.getAnimation().setMovementEventCallFunc(this.AnimationEvent);

            ccs.armatureDataManager.addArmatureFileInfo(res.effect_02_001);
            var dust = new ccs.Armature("Effect_appear_dust");
            dust.getAnimation().play("Dust");
            dust.setScale(this.MonsterScale);
            this.MonsterNode.addChild(dust);
            dust.getAnimation().setMovementEventCallFunc(this.AnimationEvent);
            
            MainMenu_root.InitStage();
            if(enforce==false) 
            {
                if(UserData.EnemyIndex == UserData.getBossInterval())
                {
                    this.Armature.setScale(this.BossMonsterScale);
                    UserData.ChangeBossMonsterBlood();
                }
            }
            this.GapTime = false;
        }
    },

    AnimationEvent:function (armature, movementType, movementID) 
    {
        if (movementType == ccs.MovementEventType.loopComplete) 
        {
           if (movementID == "Hurt") {
                armature.getAnimation().play("Wait");
            } 
           else if (movementID == "Wait") 
           {
            }
            else if (movementID == "Start") {
                armature.getAnimation().play("Wait");
            }
            else if (movementID == "Leave") {
                BattleLayer_root.MonsterNode.removeChild(BattleLayer_root.Armature);
                BattleLayer_root.Armature = null;
                BattleLayer_root.scheduleOnce(function(){
                  BattleLayer_root.RandomMonster(false);
              }, 0.2);
            }
           else if (movementID == "Dust" || movementID == "Play") {
              armature.removeFromParent(true);
           } 
        }
    },
    DallianceMonster : function(locationPos) {
        if (this.Armature && this.GapTime == false) {
            this.Armature.getAnimation().play("Hurt");
            
            var label = new cc.LabelBMFont(GetShowNumFromArray(UserData.TapAttackTemp), res.default_01);
            label.setColor(cc.color(255, 0, 0));
            this.BattlePanel.addChild(label);

            var action = cc.sequence(
                    cc.spawn(
                            cc.ScaleTo(0.2,2.0),
                            cc.moveBy(1, cc.p(0, 200)),
                            cc.fadeOut(1.0)),
                            cc.callFunc(this.onCallback, this, label));
            label.setPosition(this.BattlePanel.width/2, this.BattlePanel.height/2 + this.Armature.height* this.Armature.getScale() + 60);
            label.runAction(action);

            BattleLayer_root.PlayAtkEffect(locationPos);
        }
    },
    DropCoin : function (showNum, num) {

        ccs.armatureDataManager.addArmatureFileInfo(res.effect_drop_coin);
        for (var i = 0; i < num; i++) { 
            var coin = new ccs.Armature("goldcoin_drop");
            coin.getAnimation().play("coin1");

            var offY = this.Armature.height * this.Armature.getScale() * 0.6;
                
            var rT = GetRandomNum(0.2, 1);
            var rY = GetRandomNum(-60, 100);

            var r1R = GetRandomNum(-100, 100);
            var r1 = GetRandomNum(60 + rY, 160) * Math.abs(r1R)/r1R;
            
            var r3 = GetRandomNum(-10, 10);
            coin.x = this.MonsterNode.x;
            coin.y = this.MonsterNode.y + offY;
            var action = cc.sequence(   cc.jumpTo(0.5, cc.p(320 + r1,       270 + rY), 200, 1),
                                        cc.jumpTo(0.3, cc.p(320 + r3 + r1,  270 + rY), r3, 3),
                                        cc.delayTime(rT),
                                        cc.callFunc(this.PickCoin, this, coin) );
            var scale = ((rY * -1) + 60) / 120 ;
            coin.setScale(scale < 0.7 ? 0.7 : scale);
            BattleLayer_root.BattlePanel.addChild(coin);
            coin.runAction(action);

        };
         coin.showNum = ArrayMulNumber(showNum,1);
    },
    PickCoin : function (nodeExecutingAction, coin) {
        coin.getAnimation().play("coin3");

        var action1 = cc.sequence(cc.moveTo(0.5, cc.p(this.Panel_Money.x, this.Panel_Money.y)),
                                    cc.callFunc(this.onCallback, this, coin));
        coin.runAction(action1);

        var showNum = new cc.LabelBMFont(GetShowNumFromArray(coin.showNum), res.default_01);
        BattleLayer_root.BattlePanel.addChild( showNum );
        showNum.x = coin.x;
        showNum.y = coin.y;
        var action = cc.sequence(
                cc.spawn(   cc.moveBy(0.8, cc.p(0, 50)),
                            cc.fadeOut(0.8)),
                            cc.callFunc(this.onCallback, this, showNum));
        showNum.runAction(action);

    },
    onCallback:function (nodeExecutingAction, value) {
        if (value.showNum != undefined) {
            UserData.UserMoney = ArraySumArray(UserData.UserMoney, value.showNum); 
            
            var needRefreshView = UserData.UnlockHero();
            if(MenuView_1_root != null&&needRefreshView) 
            {
               MenuView_1_root.checkMenuView();//金币数够按钮是亮的 
            }
            var needRefreshViewUser = UserData.UserUpdate();
            if(MenuView_1_root != null&&needRefreshViewUser)
            {
                MenuView_1_root.checkUserView();//金币数够按钮是亮的
            }
            BattleLayer_root.showMoney();
            BattleLayer_root.MoneyImage.setScale(1.2);
            BattleLayer_root.MoneyImage.runAction(cc.scaleTo(0.1,1));
        };
        value.removeFromParent();
    },
    showMoney:function()
    {
        BattleLayer_root.Money.setString(GetShowNumFromArray(UserData.UserMoney));//显示金币数
    },
    PlayAtkEffect : function (locationPos) {

        
        this.PlayerJobData = PlayerJob.JobSoldier;
        
        var offY = this.Armature.height * this.Armature.getScale() * 0.4;

        var AtkEffect = null;

        for (var i = 0; i < this.AtkEffects.length; i++) {
            AtkEffect = this.AtkEffects[i];
            if (AtkEffect.isVisible() == false) {
                break;
            } else {
                AtkEffect = null;
            }
        }

        if (AtkEffect != null) {
            AtkEffect.x = this.BattlePanel.x;
            AtkEffect.y = this.BattlePanel.y + offY;
        AtkEffect.getAnimation().play(this.PlayerJobData.AtkArmatureList[this.AtkEffectIndex],0,false);
        
        }else {
            ccs.armatureDataManager.addArmatureFileInfo(this.PlayerJobData.AtkArmatureRes);
            AtkEffect = new ccs.Armature(this.PlayerJobData.AtkArmatureName);

            AtkEffect.x = this.BattlePanel.x;
            AtkEffect.y = this.BattlePanel.y + offY;
            
            /*{
            AtkEffect.x += GetRandomNum(-100, 100);
            AtkEffect.y += GetRandomNum(-100, 100);
            }*/

            AtkEffect.setVisible(false);
            this.AtkEffects.push(AtkEffect);
            this.addChild(AtkEffect);
            AtkEffect.getAnimation().setMovementEventCallFunc(this.AnimationEventAtkEffect);
        }   
    },
    PlaySkillEffect : function (skillIndex) {

        if(skillIndex == 1)
        {
            ccs.armatureDataManager.addArmatureFileInfo(res.effect_soldier_skill);
            var effect = new ccs.Armature("Effect_strike_warrior");
        }
        else if(skillIndex == 2)
        {
            ccs.armatureDataManager.addArmatureFileInfo(res.effect_master_skill);
            var effect = new ccs.Armature("Effect_strike_magister");
        }
        else if(skillIndex == 3)
        {
            ccs.armatureDataManager.addArmatureFileInfo(res.effect_hunter_skill);
            var effect = new ccs.Armature("Effect_strike_hunter");
        }
        var offY = this.Armature.height * this.Armature.getScale() * 0.4;
        effect.y += offY;
        effect.setScale(2);
        effect.getAnimation().play("Play");

        effect.getAnimation().setMovementEventCallFunc(this.AnimationEvent);

        var action = cc.sequence(
                    cc.spawn(
                            cc.delayTime(0.8)),
                            cc.callFunc(this.Shake, this));
        effect.runAction(action);

        this.MonsterNode.addChild(effect);
        
    },
    Shake : function () {
        
        var x = this.DestPos.x;
        var y = this.DestPos.y;
        var tempArray = [];
        for (var i = 0; i < 20; i++) {

            var rX = GetRandomNum(-10, 10);
            var rY = GetRandomNum(-10, 10);
            tempArray.push(cc.moveTo(0.02, cc.p(x + rX, y + rY)));
        };

        tempArray.push(cc.moveTo(0, cc.p(x, y)));
        var shake = cc.sequence( tempArray );
        this.BattlePanel.runAction(shake);
    },
    AnimationEventAtkEffect:function (armature, movementType, movementID) {
        
        if (movementType == ccs.MovementEventType.start) {
            armature.setVisible(true);
            BattleLayer_root.AtkEffectIndex += 1;
            if (BattleLayer_root.AtkEffectIndex == BattleLayer_root.PlayerJobData.AtkArmatureList.length) { BattleLayer_root.AtkEffectIndex = 0;}
        } else if (movementType == ccs.MovementEventType.loopComplete) {
            
        } else if (movementType == ccs.MovementEventType.complete) {
            armature.setVisible(false);
        }
    },
    fadeOutCallback:function () {
        /*this.DestNode.removeChild(this.DestJsonNode);
        this.DestJsonNode = null;
        console.log("1111111");*/
     },
     fadeOutCallback2:function () {
        this.DestNode.removeChild(this.DestJsonNode);
        this.DestJsonNode = null;
     },
    InGapTime:function () {
        return this.GapTime;
    },  
});