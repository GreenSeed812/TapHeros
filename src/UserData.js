var UserData = {
		NickName				: "",															// 昵称
		StageBlood          	: [0],															// 关卡血量
		StageBossBlood			: [0],															// 关卡Boss血量
		StageIndex          	: 1,															// 关卡索引
		StageIndexD          	: 0,															// 大地图索引
		StageIndexNmb          	: 1,															// 关卡数字索引
		EnemyIndex				: 1,															// 敌人索引
		UserJobIndex			: 1,															// 玩家职业
		MusicEnable				: 1,															// 音乐开关
		SoundEnable				: 1,															// 音效开关
		ArtifactActiveCount 	: 10,															// 神器激活上限
		NewArtifactID			: 0,															// 神器id

		UserLevel  			  	: 1,															// 玩家等级
		UserSkillLevel        	: [0,0,0,0,0,0,0],												// 玩家技能等级
		UserMoney             	: [0],															// 金币
		ArtifactCoin		  	: 0,															// 神器货币
		ArtifactIndex			: 0,															// 神器索引
		Diamond               	: 0,															// 钻石
		HeroLevel             	: [0,0,-1,-1,-1],												// 英雄等级
		ArtifactLevel		  	: [-1,0,0,0,0,0,0,0,0,0],										// 每种神器最高等级
		ArtifactStar		  	: [-1,0,0,0,0,0,0,0,0,0],										// 神器对应等级星级
		ArtifactActive		  	: [-1,0,0,0,0,0,0,0,0,0],										// 神器激活状态
		ArtifactActive2		  	: [0,0,0,0,0,0,0,0,0],											// 神器激活状态2
		HeroCountdown         	: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],						// 英雄死亡冷却
		SkillCountdown        	: [-1,0,0,0,0,0,0],												// 英雄技能冷却
		HeroSkillUnLockCount  	: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],					// 英雄技能解锁个数
		UserSkillUnLockCount  	: [0],															// 主角技能解锁个数

		ArtifactAll			  	: [],															// 玩家持有所有神器
		ArtifactAll2		 	: [],															// 玩家持有所有神器2
		OffLineTimestamp		: 0,															// 离线时间戳
		HeroMoney               : [0],

		RandomArtifact : function (data) {
			var index = GetRandomNum(1, Artifact.length);
			if (data) {
				var af = { i : index, s : data.s, l : data.l , id : this.NewArtifactID };
			} else {
				var af = { i : index, s : 2, 		l : 1 , 	 id : this.NewArtifactID };
			}
			this.NewArtifactID += 1;
			this.ArtifactAll.push(af);
			this.UpdateArtifactState();
		},
		GetArtifactForID : function (id) {
			for (var i = 0; i < this.ArtifactAll.length; i++) {
				var artifact = this.ArtifactAll[i];
				if (Number(artifact.id) == Number(id)) {
					return artifact;
				}
			}
		},
		UpArtifact : function (index) {

			var upArtifact = this.ArtifactAll[index];
			var maxLevel = Artifact[upArtifact.i].MaxLevel[upArtifact.s];

			if (upArtifact.s < 5 && upArtifact.l == maxLevel) {

				var material1Index = null;

				for (var i = 0; i < this.ArtifactAll.length; i++) {
					var artifact = this.ArtifactAll[i];
					if (material1Index == null) {
						if (i != index && artifact.i == upArtifact.i && artifact.s == upArtifact.s && artifact.l == maxLevel) {
							if(material1Index == null) {
								material1Index = i;
								break;
							}
						}
					}
				};
				if (material1Index) {
					upArtifact.s += 1;
					this.ArtifactAll.splice(material1Index,1);
					return true;
				} else {															
					cc.log("材料不足！");
				}
			} else {
				cc.log("原料条件不足");
			}
			return false;
		},
		BreakArtifact : function (index) {
			var Artifact = this.ArtifactAll.splice(index,1);
			this.ArtifactCoin += 1;
			return Artifact;
		},
		UpdateArtifactState : function () {
			for (var i = 1; i < Artifact.length; i++) {
				this.ArtifactLevel[i] = 0;
				this.ArtifactStar[i] = 0;
			};
			for (var i = 0; i < this.ArtifactAll.length; i++) {
				var data = this.ArtifactAll[i];
				if (this.ArtifactStar[data.i] < data.s) {
					this.ArtifactLevel[data.i] = data.l;
					this.ArtifactStar[data.i] = data.s;
				}
			};
		},

		//即时计算
		HeroDPS 			: [0],
		HeroDPSTemp 		: [0],
		HeroBossDPS 		: [0],
		TapAttack 			: [0],
		TapAttackTemp   	: [0],
		OfflineCoin			: [0],															// 离线收益
		StageBloodTest      : [0],

		TapHurtUpRate				: 0,			//点击攻击力提升百分比
		TapCritRate					: 1,			//暴击几率百分比
		TapCritHurtRate				: 0,			//暴击伤害百分比
		DPSHurtUpRate 				: 0,			//DPS伤害额外提升百分比
		DPSHeroHurtUpRate			: 0,			//某英雄DPS提升百分比
		AllAttackUpRate				: 0,			//所有攻击力提升百分比
		DPSToTapHurtRate			: 0,			//DPS转换为点击攻击力百分比
		DropGlodUpRate 				: 0,			//掉落黄金提升百分比
		DropBoxGlodUpRate 			: 0,			//宝箱怪掉落金币提升百分比
		BossHurtUpRate 				: 0,			//对Boss攻击力提升百分比
		AppearBoxUpRate 			: 0,			//宝箱怪出现几率提高百分比
		BossBloodCutRate 			: 0,			//Boss血量降低百分比	
		DropAll10TimeGlodUpRate 	: 0,			//提高10倍金币掉落百分比
		DropBossGlodUpRate 			: 0,			//Boss金币掉落提升百分比
		BossMakeHeroDiesCutRate 	: 0,			//Boss击杀英雄概率降低百分比
		HeroLevelGlodCutRate 		: 0,			//英雄升级消耗降低百分比
		BossTimeUpRate 				: 0,			//Boss挑战时间增加百分比
		RebirthRelicCountUpRate 	: 0,			//转生获得舍利子数量提升百分比
		HeroRebirthTimeCutRate 		: 0,			//英雄复活时间降低百分比
		MonsterCountCutReat 		: 0,			//关卡小怪数量减少百分比
		MainSkill1LastTimeUpRate 	: 0,			//主角技能1持续时间增加百分比
		MainSkill1CoolDownCutRate 	: 0,			//主角技能1冷却时间减少百分比
		MainSkill2LastTimeUpRate 	: 0,			//主角技能2持续时间增加百分比
		MainSkill2CoolDownCutRate 	: 0,			//主角技能2冷却时间减少百分比
		MainSkill3LastTimeUpRate 	: 0,			//主角技能3持续时间增加百分比
		MainSkill3CoolDownCutRate 	: 0,			//主角技能3冷却时间减少百分比
		
		getBossInterval : function () {
			return Ruler.BossInterval;
		},
		MoneyUpdate : function () {
			for (var i = 1; i < this.HeroLevel.length; i++) {
				if (this.HeroLevel[i] == -1||this.HeroLevel[i] == 0)
				{
					if(ArrayScaleArray(this.UserMoney, getHeroMoney(HeroData[i])) >= 1 )
					{
						//this.HeroLevel[i] = 0;
						return true;
					}
					break;
				}
			}
			return false;
		},
		UpdateAllAttackUpRate : function () {
			this.AllAttackUpRate = 0;
			return this.AllAttackUpRate;
		},
		UpdateTapAttack : function () {
			var up1 = ArrayMulNumber(this.HeroDPS, this.DPSToTapHurtRate);
			var up2 = ArraySumArray(getHeroAtk(PlayerData), up1);
			var up3 = ArrayMulNumber(up2, (1 + this.AllAttackUpRate) * (1 + this.TapHurtUpRate));
			this.TapAttack = up3;
			return this.TapAttack;
		},
		GetHeroAttack : function (index) {
			var DPSHeroHurtUpRate = 0;
			var heroData = HeroData[index];
			var heroLevel = this.HeroLevel[index];

			for (var i = 0; i < heroData.Skill.length; i++) {
				var skill = heroData.Skill[i];
				if (skill.BaseData.Type == SkillType.DPSHeroHurtUpRate) {
					DPSHeroHurtUpRate += skill.Rate;
				}
			};
			var ret = ArrayMulNumber(getHeroAtk(heroData) , (1 + DPSHeroHurtUpRate) * (1 + this.AllAttackUpRate));
			return ret;
		},
		
		DeleateArchive : function () {
			var ls = cc.sys.localStorage;
			
			ls.removeItem("NickName");
		},
		SaveArchive : function (){
        	var ls = cc.sys.localStorage;

        	ls.setItem("OffLineTimestamp", this.OffLineTimestamp);
        	ls.setItem("MusicEnable", this.MusicEnable);
        	ls.setItem("SoundEnable", this.SoundEnable);
        	ls.setItem("UserJobIndex", this.UserJobIndex);
        	ls.setItem("NickName", this.NickName);
        	ls.setItem("Diamond", this.Diamond);
        	ls.setItem("StageIndex", this.StageIndex);
        	ls.setItem("EnemyIndex", this.EnemyIndex);
        	ls.setItem("UserLevel", this.UserLevel);
        	ls.setItem("UserSkillLevel", JSON.stringify(this.UserSkillLevel));
        	ls.setItem("UserMoney", JSON.stringify(this.UserMoney));
        	ls.setItem("HeroLevel", JSON.stringify(this.HeroLevel));
        	ls.setItem("HeroCountdown", JSON.stringify(this.HeroCountdown));
        	ls.setItem("HeroSkillUnLockCount", JSON.stringify(this.HeroSkillUnLockCount));
        	ls.setItem("ArtifactAll", JSON.stringify(this.ArtifactAll));
        	ls.setItem("ArtifactLevel", JSON.stringify(this.ArtifactLevel));
        	ls.setItem("ArtifactStar", JSON.stringify(this.ArtifactStar));
        	ls.setItem("ArtifactActive", JSON.stringify(this.ArtifactActive));
        	ls.setItem("SkillCountdown", JSON.stringify(this.SkillCountdown));
        	ls.setItem("NewArtifactID", this.NewArtifactID);
        	ls.setItem("ArtifactCoin", this.ArtifactCoin);
        	
        	cc.log("SaveArchive");
		},
		ReadArchive : function () {
			var ls = cc.sys.localStorage;
			
			if (ls.getItem("NickName")) {

				this.OffLineTimestamp = Number(ls.getItem("OffLineTimestamp"));
				this.MusicEnable = Number(ls.getItem("MusicEnable"));
				this.SoundEnable = Number(ls.getItem("SoundEnable"));
				
				this.UserJobIndex = Number(ls.getItem("UserJobIndex"));
				this.NickName = ls.getItem("NickName");
				this.Diamond = Number(ls.getItem("Diamond"));
				this.StageIndex = Number(ls.getItem("StageIndex"));
				this.EnemyIndex = Number(ls.getItem("EnemyIndex"));
				this.UserLevel = Number(ls.getItem("UserLevel"));
				this.UserSkillLevel = JSON.parse(ls.getItem("UserSkillLevel"));
				this.UserMoney = JSON.parse(ls.getItem("UserMoney"));
				this.HeroLevel = JSON.parse(ls.getItem("HeroLevel"));
				this.HeroCountdown = JSON.parse(ls.getItem("HeroCountdown"));
				this.HeroSkillUnLockCount = JSON.parse(ls.getItem("HeroSkillUnLockCount"));
				this.ArtifactAll = JSON.parse(ls.getItem("ArtifactAll"));
				this.ArtifactLevel = JSON.parse(ls.getItem("ArtifactLevel"));
				this.ArtifactStar = JSON.parse(ls.getItem("ArtifactStar"));
				this.ArtifactActive = JSON.parse(ls.getItem("ArtifactActive"));
				this.SkillCountdown = JSON.parse(ls.getItem("SkillCountdown"));
				this.NewArtifactID = Number(ls.getItem("NewArtifactID"));
        		this.ArtifactCoin = Number(ls.getItem("ArtifactCoin"));

			} else {
				this.SaveArchive();
			}
		},
		TimeEarnings : function () {
			var TimestampDifference = Timestamp() - UserData.OffLineTimestamp;
			cc.log("TimestampDifference" + TimestampDifference)
			if (TimestampDifference > Ruler.TimeEarningsInterval) {
				this.OfflineCoin = [0,0,0,0,222,0];
				UserData.OffLineTimestamp = Timestamp();
			} else {
			}
		},
		TapAttackChange : function()
		{
			UserData.TapAttackTemp = ArrayMulNumber([2],Math.pow(UserData.UserLevel,3));
			UserData.TapAttack = UserData.TapAttackTemp;
		},
		UpdateHeroDPS : function () {
			var ret = [0,0];
			
			for (var index = 1; index < HeroData.length; index++) 
			{
				var heroLevel = UserData.HeroLevel[index];
				var heroData = HeroData[index];
				if(heroLevel > 0)
				{
					ret = ArraySumArray(ret, getHeroAtk(heroData));
					UserData.HeroDPS = ArrayMulNumber([100],heroLevel);
					//UserData.HeroDPS = UserData.HeroDPSTemp;	
					//UserData.HeroDPSTemp = [0];
				}
				
			}
			
		},
		UpLevelNeedMoney:function()
		{
			UserData.UserMoney = ArrayMulNumber([1.5],Math.pow(UserData.UserLevel,3));
		},
		UpHeroLevelNeedMoney:function()
		{
			for (var index = 1; index < HeroData.length; index++) 
			{
				var heroLevel = UserData.HeroLevel[index];
				UserData.HeroMoney = ArrayMulNumber(UserData.HeroMoney,(1+0.6*heroLevel));
			}
		},
		ChangeMonsterBlood:function()
		{	
			UserData.StageBloodTest =  ArrayMulNumber([2],Math.pow(UserData.StageIndex,4));//血量是否有基础值？
			UserData.StageBlood = UserData.StageBloodTest;
			UserData.StageBloodTest = [0];
			//金币掉落
			//UserData.OfflineCoin = ArrayMulNumber([2],Math.pow(UserData.UserLevel,3));
		},
		ChangeBossMonsterBlood:function()
		{
			//Boss是小怪血量8倍，掉落金币是10倍
			UserData.StageBossBlood = ArrayMulNumber(UserData.StageBlood,8);
			UserData.OfflineCoin = ArrayMulNumber(UserData.OfflineCoin,10);
		}
};



