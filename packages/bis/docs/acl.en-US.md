---
order: 4
title: Yunzai Authority Control
type: Documents
---

Permission control uses `ACLService` by default to load the `current system all button permissions` and `role permissions` transmitted by the backend.

## How to use?

Refer to the [ACLService](/acl/getting-started) document for details


## Initial loading

```ts
const abilities: string[] = [];
generateAbility([currentMenu], abilities,'');
this.aclService.attachRole(
  user?.roles
    .map((role: NzSafeAny) => {
      return role.roleValue;
    })
    .filter((a: NzSafeAny) => !!a) || []
);
this.aclService.attachAbility(abilities);
```

The above code can be found in `YunzaiStartupService`, use `Menu` data to recursively generate authority points during initialization

## Permission Points

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

For each point, there is a full amount of authority points. For example, `/base/data/presentation/profile:123` is a full amount of points, and the corresponding non-full amount of points is `123`


## Role

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
As above, it is a list of roles configured by the backend, which will also be automatically added to `ACLService` when the system is initialized.
