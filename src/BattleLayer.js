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
    AtkEffects:[],//
    Armature:null,//
    AtkEffectIndex:0,//
    PlayerJobData:null,//
    zhezhao:null,
    DestPos:{x:0,y:0},//
    locationPos:null,
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

        this.zhezhao = this.rootnode.getChildByName("zhezhao");

        this.DestPos.x = this.BattlePanel.x;
        this.DestPos.y = this.BattlePanel.y;

        BattleLayer_root.locationPos = cc.p(0,0);

        this.RandomMonster(false);

        this.mExitTime = 0;

        return true;
    },
    NextStage : function() {
        if (this.DestJsonNode) {
            this.DestNode.removeChild(this.DestJsonNode);
        }
        var index = GetRandomNum(0, Spec.StageSpec.length - 1);
        this.DestJsonNode = ccs.load(Spec.StageSpec[index][1]).node;
        this.DestJsonNode.setAnchorPoint(0.5,0.5);
        this.DestJsonNode.setOpacity(0);//设置透明度
        this.DestJsonNode.runAction(cc.fadeIn(1));
        this.DestNode.addChild(this.DestJsonNode);
    },
    NextScene : function () {
        var stateName = Spec.StageSpec[UserData.StageIndex][0];

        UserData.StageIndex += 1;
        UserData.EnemyIndex = 1;
        MainMenu_root.UpdateStage("update");
        if( UserData.StageIndex>=16)
        {
            UserData.StageIndex = 0;
        }
        if (stateName != Spec.StageSpec[UserData.StageIndex][0]) {
            if (this.DestJsonNode) {

                //this.DestJsonNode.runAction(cc.fadeOut(1.0));

                /*this.DestNode.removeChild(this.DestJsonNode);
                this.DestJsonNode = null;*/

                {
                    var action = cc.sequence(
                    cc.spawn(
                            cc.fadeOut(0.3)),
                            cc.callFunc(this.fadeOutCallback, this,this.DestJsonNode));
                    this.DestJsonNode.runAction(action);
                }
                {
                    this.zhezhao.setOpacity(0);//设置透明度
                    this.zhezhao.runAction(cc.fadeIn(1));
                }
                //this.fadeOutCallback();

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
                BattleLayer_root.DropCoin([1,1,1]);
                //BattleLayer_root.DropCoin(Spec.StageSpec[UserData.StageIndex].drop, 5);
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
            if(UserData.EnemyIndex == UserData.getBossInterval())
            {
                this.Armature.setScale(this.BossMonsterScale);
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
            this.BattlePanel.addChild(label);

            var action = cc.sequence(
                    cc.spawn(
                            cc.moveBy(1, cc.p(0, 200)),
                            cc.fadeOut(1.0)),
                            cc.callFunc(this.onCallback, this, label));
            label.setPosition(this.BattlePanel.width/2, this.BattlePanel.height/2 + this.Armature.height* this.Armature.getScale() + 60);
            label.runAction(action);

            BattleLayer_root.PlayAtkEffect(locationPos);
        }
    },
    DropCoin : function (showNum, num) {

        if (isNaN(num)) {num = 10};
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
            coin.showNum = ArrayMulNumber(showNum, 1/num);
            BattleLayer_root.BattlePanel.addChild(coin);
            coin.runAction(action);

        };
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
            BattleLayer_root.Money.setString(GetShowNumFromArray(UserData.UserMoney));//显示金币数
            BattleLayer_root.MoneyImage.setScale(1.2);
            BattleLayer_root.MoneyImage.runAction(cc.scaleTo(0.1,1));

        };
        value.removeFromParent();
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
        this.DestNode.removeChild(this.DestJsonNode);
        this.DestJsonNode = null;
     },
    InGapTime:function () {
        return this.GapTime;
    },  
});