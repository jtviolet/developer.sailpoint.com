"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52364],{62244:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var t=n(87462),a=(n(67294),n(3905));const r={id:"certification-signed-off",title:"Certification Signed Off",pagination_label:"Certification Signed Off",sidebar_label:"Certification Signed Off",sidebar_class_name:"certificationSignedOff",keywords:["event","trigger","certification","available"],description:"Triggered when a certification is signed off by its reviewer.",slug:"/docs/event-triggers/triggers/certification-signed-off",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},s=void 0,o={unversionedId:"docs/identity-now/event-triggers/available/certification-signed-off",id:"docs/identity-now/event-triggers/available/certification-signed-off",title:"Certification Signed Off",description:"Triggered when a certification is signed off by its reviewer.",source:"@site/products/idn/docs/identity-now/event-triggers/available/certification-signed-off.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/certification-signed-off",permalink:"/idn/docs/event-triggers/triggers/certification-signed-off",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/certification-signed-off.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693373461,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{id:"certification-signed-off",title:"Certification Signed Off",pagination_label:"Certification Signed Off",sidebar_label:"Certification Signed Off",sidebar_class_name:"certificationSignedOff",keywords:["event","trigger","certification","available"],description:"Triggered when a certification is signed off by its reviewer.",slug:"/docs/event-triggers/triggers/certification-signed-off",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Campaign Generated",permalink:"/idn/docs/event-triggers/triggers/campaign-generated"},next:{title:"Form Submitted",permalink:"/idn/docs/event-triggers/triggers/form-submitted"}},d={},g=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],l={toc:g};function c(e){let{components:i,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-context"},"Event Context"),(0,a.kt)("p",null,"This event is triggered when a certification is signed-off and moves to End status.\nThis is not to be confused with Campaign End/Expiration. "),(0,a.kt)("p",null,"This is an example input from this trigger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "certification": {\n    "id": "2c91808576f886190176f88caf0d0067",\n    "name": "Manager Access Review for Alice Baker",\n    "created": "2020-02-16T03:04:45.815Z",\n    "modified": null,\n    "campaignRef": {\n      "campaignType": "MANAGER",\n      "description": "Audit access for all employees.",\n      "type": "CAMPAIGN",\n      "id": "2c91808576f886190176f88cac5a0010",\n      "name": "Manager Access Campaign"\n    },\n    "completed": true,\n    "hasErrors": false,\n    "errorMessage": null,\n    "decisionsMade": 50,\n    "decisionsTotal": 50,\n    "due": "2020-03-16T03:04:45.815Z",\n    "signed": "2020-03-04T03:04:45.815Z",\n    "reviewer": {\n      "name": "Reviewers group",\n      "id": "6a80311c-8d11-40bc-a3c8-29e2360b85e8",\n      "type": "GOVERNANCE_GROUP",\n      "email": null\n    },\n    "campaignOwner": {\n      "id": "37f080867702c1910177031320c40n27",\n      "displayName": "William Wilson",\n      "email": "william.wilson@example.com"\n    },\n    "reassignment": {\n      "comment": "Changing reviewer.",\n      "from": {\n        "id": "8a89c6de77ef762f0177ef7f52f10004",\n        "name": "Manger Access Review for Charlie Davis",\n        "type": "CERTIFICATION",\n        "reviewer": {\n          "id": "2c9180867702c1910177031320c4010c",\n          "name": "Charlie Davis",\n          "type": "IDENTITY",\n          "email": "charlie.davis@example.com"\n        }\n      }\n    },\n    "phase": "SIGNED",\n    "entitiesCompleted": 12,\n    "entitiesTotal": 12\n  }\n}\n')),(0,a.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}c.isMDXComponent=!0}}]);