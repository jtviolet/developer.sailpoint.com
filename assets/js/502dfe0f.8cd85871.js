"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77614],{25531:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const c={id:"account-disable",title:"Account Disable",pagination_label:"Account Disable",sidebar_label:"Account Disable",keywords:["connectivity","connectors","account disable"],description:"Disable an account on the source.",slug:"/docs/saas-connectivity/commands/account-disable",tags:["Connectivity","Connector Command"]},i=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/account-disable",id:"docs/identity-now/saas-connectivity/connector-commands/account-disable",title:"Account Disable",description:"Disable an account on the source.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-disable.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/account-disable",permalink:"/idn/docs/saas-connectivity/commands/account-disable",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-disable.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693373461,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{id:"account-disable",title:"Account Disable",pagination_label:"Account Disable",sidebar_label:"Account Disable",keywords:["connectivity","connectors","account disable"],description:"Disable an account on the source.",slug:"/docs/saas-connectivity/commands/account-disable",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Delete",permalink:"/idn/docs/saas-connectivity/commands/account-delete"},next:{title:"Account Discover",permalink:"/idn/docs/saas-connectivity/commands/account-discover"}},l={},d=[{value:"Example StdAccountDisableInput",id:"example-stdaccountdisableinput",level:3},{value:"Example StdAccountDisableOutput",id:"example-stdaccountdisableoutput",level:3},{value:"Description",id:"description",level:2}],r={toc:d};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Input - Disable"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountDisableInput")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Output -Disable"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountDisableOutput")))),(0,o.kt)("h3",{id:"example-stdaccountdisableinput"},"Example StdAccountDisableInput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n')),(0,o.kt)("h3",{id:"example-stdaccountdisableoutput"},"Example StdAccountDisableOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"You typically invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"account disable")," command during the joiner, mover, leaver (JML) lifecycle. An identity\u2019s leaving from the organization or change to a role that does not require access to one or more accounts triggers the account disable command."),(0,o.kt)("p",null,"Disabling accounts is generally preferred if the source supports account disabling so the account data remains for later reactivation or inspection. If the source does not support account disabling, or deleting accounts is preferred when an identity leaves the organization, the connector can perform the necessary steps to delete an account with the account disable function."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 It is important to note that although SaaS Connectivity supports the account delete command, IDN never sends the account delete command, only the account disable command. The connector\u2019s developer determines the appropriate action for account disable on the source.")),(0,o.kt)("p",null,"Account disable is similar to implementing the account update command. If you have implemented your source call to modify any of the values on your source, then you can use the same method to implement the command. The following code implements disable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},".stdAccountDisable(async (context: Context, input: StdAccountDisableInput, res: Response<StdAccountDisableOutput>) => {\n    let account = await airtable.getAccount(input.key)\n    const change: AttributeChange = {\n        op: AttributeChangeOp.Set,\n        attribute: 'enabled',\n        value: 'false'\n    }\n    account = await airtable.changeAccount(account, change)\n    res.send(account.toStdAccountDisableOutput())\n})\n\n")))}u.isMDXComponent=!0}}]);