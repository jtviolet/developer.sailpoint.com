"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[1605],{56617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var a=n(87462),l=(n(67294),n(3905));const o={id:"cli-template-spconfig",title:"SPConfig Template",pagination_label:"CLI Templates SPConfig",sidebar_label:"SPConfig",sidebar_position:7,sidebar_class_name:"cli-template-spconfig",keywords:["cli","template","spconfig"],description:"Learn about the SPConfig template commands you can use to import and export configurations from the CLI.",slug:"/tools/cli/templates/spconfig",tags:["CLI"]},i=void 0,s={unversionedId:"tools/cli/Templates/cli-template-spconfig",id:"tools/cli/Templates/cli-template-spconfig",title:"SPConfig Template",description:"Learn about the SPConfig template commands you can use to import and export configurations from the CLI.",source:"@site/products/idn/tools/cli/Templates/spconfig.md",sourceDirName:"tools/cli/Templates",slug:"/tools/cli/templates/spconfig",permalink:"/idn/tools/cli/templates/spconfig",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/cli/Templates/spconfig.md",tags:[{label:"CLI",permalink:"/idn/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693373461,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:7,frontMatter:{id:"cli-template-spconfig",title:"SPConfig Template",pagination_label:"CLI Templates SPConfig",sidebar_label:"SPConfig",sidebar_position:7,sidebar_class_name:"cli-template-spconfig",keywords:["cli","template","spconfig"],description:"Learn about the SPConfig template commands you can use to import and export configurations from the CLI.",slug:"/tools/cli/templates/spconfig",tags:["CLI"]},sidebar:"sdkSidebar",previous:{title:"CLI Templates Search",permalink:"/idn/tools/cli/templates/search"},next:{title:"SDKs",permalink:"/idn/tools/sdk"}},p={},r=[],c={toc:r};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Use SPConfig templates to perform complex import and export operations with IdentityNow (IDN) configurations."),(0,l.kt)("p",null,"This is an example of a template file with one SPConfig template populated:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "all-objects",\n    "description": "Export all available objects",\n    "variables": [],\n    "exportBody": {\n      "description": "Export all available objects",\n      "excludeTypes": [],\n      "includeTypes": [\n        "SOURCE",\n        "RULE",\n        "TRIGGER_SUBSCRIPTION",\n        "TRANSFORM",\n        "IDENTITY_PROFILE"\n      ],\n      "objectOptions": {}\n    }\n  }\n]\n')),(0,l.kt)("p",null,"This is the SPConfig template anatomy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n    {\n        "name": "all-objects",\n')),(0,l.kt)("p",null,"This is the SPConfig template's name. "),(0,l.kt)("p",null,"The SPConfig template name displays in the template list when you run ",(0,l.kt)("inlineCode",{parentName:"p"},"sail spconfig template"),"."),(0,l.kt)("p",null,"You can also provide this name as an argument: ",(0,l.kt)("inlineCode",{parentName:"p"},"sail spconfig template all-objects")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'        "description": "Export all available objects",\n')),(0,l.kt)("p",null,"This is the SPConfig template's description. "),(0,l.kt)("p",null,"in the ",(0,l.kt)("inlineCode",{parentName:"p"},"sail spconfig template")," list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'        "variables": [],\n')),(0,l.kt)("p",null,"Use variables to dynamically populate values in the following content during command run time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'        "exportBody": {\n')),(0,l.kt)("p",null,"The following object matches that detailed in the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/beta/export-sp-config"},"API docs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'        "description": "Export all available objects",\n        "excludeTypes": [],\n        "includeTypes": [\n            "SOURCE",\n            "RULE",\n            "TRIGGER_SUBSCRIPTION",\n            "TRANSFORM",\n            "IDENTITY_PROFILE"\n        ],\n        "objectOptions": {}\n        }\n\n    }\n\n')))}m.isMDXComponent=!0}}]);