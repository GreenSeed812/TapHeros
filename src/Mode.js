var BaseSkill = 
{
	TapHurtUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.TapHurtUpRate,
	},
	TapCritRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.TapCritRate,
	},
	TapCritHurtRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.TapCritHurtRate,
	},
	DPSHurtUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.DPSHurtUpRate,
	},
	DPSHeroHurtUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.DPSHeroHurtUpRate,
	},
	AllAttackUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.AllAttackUpRate,
	},
	DPSToTapHurtRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.DPSToTapHurtRate,
	},
	DropGlodUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.DropGlodUpRate,
	},
	DropBoxGlodUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.DropBoxGlodUpRate,
	},
	BossHurtUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.BossHurtUpRate,
	},
	AppearBoxUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.AppearBoxUpRate,
	},
	BossBloodCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.BossBloodCutRate,
	},
	DropAll10TimeGlodUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.DropAll10TimeGlodUpRate,
	},
	DropBossGlodUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.DropBossGlodUpRate,
	},
	BossMakeHeroDiesCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.BossMakeHeroDiesCutRate,
	},
	HeroLevelGlodCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.HeroLevelGlodCutRate,
	},
	BossTimeUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.BossTimeUpRate,
	},
	RebirthRelicCountUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.RebirthRelicCountUpRate,
	},
	HeroRebirthTimeCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.HeroRebirthTimeCutRate,
	},
	MonsterCountCutReat : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MonsterCountCutReat,
	},
	MainSkill1LastTimeUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1LastTimeUpRate,
	},
	MainSkill1CoolDownCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1CoolDownCutRate,
	},
	MainSkill2LastTimeUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1LastTimeUpRate,
	},
	MainSkill2CoolDownCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1CoolDownCutRate,
	},
	MainSkill3LastTimeUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1LastTimeUpRate,
	},
	MainSkill3CoolDownCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1CoolDownCutRate,
	},
	MainSkill1LastTimeUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1LastTimeUpRate,
	},
	MainSkill4CoolDownCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1CoolDownCutRate,
	},
	MainSkill5LastTimeUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1LastTimeUpRate,
	},
	MainSkill5CoolDownCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1CoolDownCutRate,
	},
	MainSkill6LastTimeUpRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1LastTimeUpRate,
	},
	MainSkill6CoolDownCutRate : {
		Desc : "这位英雄的攻击力提升%d%",
		Type : SkillType.MainSkill1CoolDownCutRate,
	},
	Reincarnation : {
		Desc : "使用蜕变重新开始游戏，即可获得能用来换取神器的圣物。",
		Type : SkillType.Reincarnation,
	}
};

var Artifact = 
[
	{
		Name : "神器1",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	},
	{
		Name : "神器2",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	},
	{
		Name : "神器3",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	},
	{
		Name : "神器4",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	},
	{
		Name : "神器5",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	},
	{
		Name : "神器6",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	},
	{
		Name : "神器7",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	},
	{
		Name : "神器8",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	},
	{
		Name : "神器9",
		Desc : "神器!神器!神器!神器!神器!神器!",
		Icon : res.icon_shenqi_1,
		BaseData : BaseSkill.TapHurtUpRate,
		MaxLevel : [0,5,10,15,20,30],
		Rate : 0.4,
	}
]

var SkillData = 
{
	Skill_1_1 : {
		Name : "技能名称",
		Icon : res.icon_skill_1,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
	},
	Skill_1_2 : {
		Name : "技能名称",
		Icon : res.icon_skill_2,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
	},
	Skill_1_3 : {
		Name : "技能名称",
		Icon : res.icon_skill_3,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
	},
	Skill_1_4 : {
		Name : "技能名称",
		Icon : res.icon_skill_4,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
	},
	Skill_1_5 : {
		Name : "技能名称",
		Icon : res.icon_skill_5,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
	},
	Skill_1_6 : {
		Name : "技能名称",
		Icon : res.icon_skill_6,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
	},
	User : {
		Name : "无",
		Icon : res.icon_skill_1,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
	},
	User_1_1 : {
		Name : "致死打击",
		Icon : res.icon_skill_1,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
		ReleaseCD : 1,
		RecoveryCD : 10,
	},
	User_1_2 : {
		Name : "瞄准射击",
		Icon : res.icon_skill_1,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
		ReleaseCD : 1,
		RecoveryCD : 10,
	},
	User_1_3 : {
		Name : "炎爆术",
		Icon : res.icon_skill_1,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
		ReleaseCD : 1,
		RecoveryCD : 10,
	},
	User_2 : {
		Name : "影分身术",
		Icon : res.icon_skill_2,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
		ReleaseCD : 5,
		RecoveryCD : 60,
	},
	User_3 : {
		Name : "重击出击",
		Icon : res.icon_skill_3,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
		ReleaseCD : 10,
		RecoveryCD : 120,
	},
	User_4 : {
		Name : "嚎壕",
		Icon : res.icon_skill_4,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
		ReleaseCD : 10,
		RecoveryCD : 120,
	},
	User_5 : {
		Name : "狂战士愤怒",
		Icon : res.icon_skill_5,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
		ReleaseCD : 10,
		RecoveryCD : 120,
	},
	User_6 : {
		Name : "米达斯之手",
		Icon : res.icon_skill_6,
		BaseData : BaseSkill.TapHurtUpRate,
		Rate : 0.4,
		ReleaseCD : 10,
		RecoveryCD : 120,
	},
	User_7 : {
		Name : "蜕变",
		Icon : res.icon_skill_2,
		BaseData : BaseSkill.Reincarnation,
		Rate : 0.4,
		ReleaseCD : 0,
		RecoveryCD : 0,
	},
};


var PlayerJob =
{
	JobSoldier : {
		Index : 1,
		Desc : "战士是以近身格斗为主的职业：断筋技能可以使敌人致残而减慢速度(近战技能，减速50%）。而战斗怒吼可以提高队友们的战斗能力（100码范围内的所有小队和团队成员的攻击强度提高",
		AtkArmatureRes : res.effect_soldier_001,
		AtkArmatureName : "Effect_atk_warrior",
		AtkArmatureList : ["W1", "W2", "W3", "W4"],
		Skill : [SkillData.User,SkillData.User_1_1,SkillData.User_2,SkillData.User_3,SkillData.User_4,SkillData.User_5,SkillData.User_6,SkillData.User_7],
	},
	JobMaster : {
		Index : 2,
		Desc : "法师是著名网游《魔兽世界》中的职业之一，多个不同游戏版本在玩家中享有暴雪“亲儿子”之称。其定义为纯伤害输出型，法师们会用神秘的咒语摧毁他们的敌人，可操作性极强。",
		AtkArmatureRes : res.effect_master_001,
		AtkArmatureName : "Effect_atk_magister",
		AtkArmatureList : ["M1", "M2", "M3", "M4", "M5"],
		Skill : [SkillData.User,SkillData.User_1_3,SkillData.User_2,SkillData.User_3,SkillData.User_4,SkillData.User_5,SkillData.User_6,SkillData.User_7],
	},
	JobHunter : {
		Index : 3,
		Desc : "猎人是著名网游《魔兽世界》中的职业之一，其定义为伤害输出型。猎人在远距离与敌人作战，当他们使用弓箭或枪攻击敌人时，还会指挥宠物进行作战。前期版本一直有蓝条存在，从大灾变版（85级）开始变更为集中值。",
		AtkArmatureRes : res.effect_hunter_001,
		AtkArmatureName : "Effect_atk_hunter",
		AtkArmatureList : ["H1"],
		Skill : [SkillData.User,SkillData.User_1_2,SkillData.User_2,SkillData.User_3,SkillData.User_4,SkillData.User_5,SkillData.User_6,SkillData.User_7],
	}
};

var PlayerData = 
{
	Name : "地狱咆哮",
	Desc : "主角玩家主角玩家主角玩家主角玩家主角玩家主角玩家",
	Icon : res.icon_hero_1,
	AtkBase : [0,0,2,0],
	MoneyBase : [0,0,2,0],
	SkillUnlock : [0, 10,50,100,200,400,600,600],
	Job : [ null ,PlayerJob.JobSoldier, PlayerJob.JobMaster, PlayerJob.JobHunter],
};

var HeroData = 
[
	/*{

	},*/
	{
		Name : "火枪手",
		Desc : "火枪手火枪手火枪手火枪手火枪手火枪手火枪手火枪手火枪手火枪手火枪手火枪手火枪手火枪手",
		Icon : res.icon_hero_1,
		AtkBase : [0,0,2,0],
		MoneyBase : [0,2,0],
		SkillUnlock : [10,50,150,250,350,600,600],
		Skill : [SkillData.Skill_1_1,SkillData.Skill_1_2,SkillData.Skill_1_3,SkillData.Skill_1_4,SkillData.Skill_1_5,SkillData.Skill_1_6,SkillData.Skill_1_6],
	},
	{
		Name : "狙击手",
		Desc : "狙击手狙击手狙击手狙击手狙击手狙击手狙击手狙击手狙击手狙击手狙击手狙击手狙击手狙击手狙击手",
		Icon : res.icon_hero_1,
		AtkBase : [0,0,2,0],
		MoneyBase : [0,2,0],
		SkillUnlock : [10,50,150,250,350,600,600],
		Skill : [SkillData.Skill_1_1,SkillData.Skill_1_2,SkillData.Skill_1_3,SkillData.Skill_1_4,SkillData.Skill_1_5,SkillData.Skill_1_6,SkillData.Skill_1_6],
	},
	{
		Name : "地狱咆哮",
		Desc : "地狱咆哮地狱咆哮地狱咆哮地狱咆哮地狱咆哮地狱咆哮地狱咆哮地狱咆哮地狱咆哮地狱咆哮地狱咆哮",
		Icon : res.icon_hero_1,
		AtkBase : [0,0,2,0],
		MoneyBase : [0,2,0],
		SkillUnlock : [10,50,150,250,350,600,600],
		Skill : [SkillData.Skill_1_1,SkillData.Skill_1_2,SkillData.Skill_1_3,SkillData.Skill_1_4,SkillData.Skill_1_5,SkillData.Skill_1_6,SkillData.Skill_1_6],
	},
	{
		Name : "地狱火",
		Desc : "地狱火地狱火地狱火地狱火地狱火地狱火",
		Icon : res.icon_hero_1,
		AtkBase : [0,0,2,0],
		MoneyBase : [0,2,0],
		SkillUnlock : [10,50,150,250,350,600,600],
		Skill : [SkillData.Skill_1_1,SkillData.Skill_1_2,SkillData.Skill_1_3,SkillData.Skill_1_4,SkillData.Skill_1_5,SkillData.Skill_1_6,SkillData.Skill_1_6],
	},
];

function getHeroAtk(hero) {
	return hero.AtkBase;
}
function getHeroMoney(hero) {
	return hero.MoneyBase;
}



