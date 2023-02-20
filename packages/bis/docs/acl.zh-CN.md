---
order: 4
title: 云在权限控制 
type: Documents
---

权限控制使用`ACLService`默认加载好了后端传输的`当前系统所有按钮权限`,`角色权限`

## How to use?

具体查阅[ACLService](/acl/getting-started)文档


## 初始化加载

```ts
const abilities: string[] = [];
generateAbility([currentMenu], abilities, '');
this.aclService.attachRole(
  user?.roles
    .map((role: NzSafeAny) => {
      return role.roleValue;
    })
    .filter((a: NzSafeAny) => !!a) || []
);
this.aclService.attachAbility(abilities);
```

上述代码在`YunzaiStartupService`中可以找到，在初始化时使用`Menu`数据递归生成权限点数

## 权限点数

```ts
"/base/data/presentation/profile:123"
"123"
"/base/data/presentation/profile/businessSystem/iframePage/iframePage/displayIndex:portal_c"
"portal_c"
"/base/data/presentation/profile/businessSystem/iframePage/iframePage/displayIndex:testa"
"testa"
"/base/data/presentation/profile/businessSystem/iframePage/iframePage/displayIndex:portal_a"
"portal_a"
"/base/data/presentation/profile/businessSystem/iframePage/iframePage/displayIndex:portal_b"
"portal_b"
```

对于每个点数都拥有一份全量权限点数,例如`/base/data/presentation/profile:123`是一份全量点数,对应的非全量点数为`123`


## 角色

```ts
"fwck"
"CAMPUS_LOCUS_ADMIN"
"shouwenguidang"
"weekly_upload"
"wfsDeptPepoleRole"
"sunweisuperadmin"
"website3_content_manager"
"ROLE_XI_LEADER"
"sunwei_test"
"yzkfpt-school"
"dqtest2"
"JIAO_ZHI_GONG"
"DATA_FILL_CHUSHEN_TEST"
"officesend"
"website3_manger"
"fwsq"
"ROLE_DEVCENTER_ADMIN"
"ROLE_YX_FUDAOYUAN"
"shouwenchaxun"
"ROLE_ORDER"
"R_D_TEAM_FOUR"
"ROLE_ADMIN"
"fawenguidang"
"ROLE_FACE_CHECK"
"datafill"
"mj"
"fawenchaxun"
"ROLE_ORDER_ADMIN"
"hongtouwenjianguanli"
"dqtest1"
"ROLE_YX_BANZHUREN"
```
如上，是一份由后端配置出来的角色列表,系统初始化时也会自动添加到`ACLService`中

