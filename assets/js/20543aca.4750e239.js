"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[25334],{22826:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var n=e(87462),a=(e(67294),e(3905));const s={id:"saas-connectivity-limits",title:"Limits",pagination_label:"Limits",sidebar_label:"Limits",sidebar_position:6.8,sidebar_class_name:"limits",keywords:["connectivity","connectors","commands","cli"],description:"This describes certain limits that are in place when running a SaaS Connector",slug:"/docs/saas-connectivity/limits",tags:["Connectivity"]},o=void 0,l={unversionedId:"docs/identity-now/saas-connectivity/saas-connectivity-limits",id:"docs/identity-now/saas-connectivity/saas-connectivity-limits",title:"Limits",description:"This describes certain limits that are in place when running a SaaS Connector",source:"@site/products/idn/docs/identity-now/saas-connectivity/limits.md",sourceDirName:"docs/identity-now/saas-connectivity",slug:"/docs/saas-connectivity/limits",permalink:"/idn/docs/saas-connectivity/limits",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/limits.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693373461,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:6.8,frontMatter:{id:"saas-connectivity-limits",title:"Limits",pagination_label:"Limits",sidebar_label:"Limits",sidebar_position:6.8,sidebar_class_name:"limits",keywords:["connectivity","connectors","commands","cli"],description:"This describes certain limits that are in place when running a SaaS Connector",slug:"/docs/saas-connectivity/limits",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Postman Collection",permalink:"/idn/docs/saas-connectivity/postman-collection"},next:{title:"Connector Commands",permalink:"/idn/docs/saas-connectivity/connector-commands"}},c={},r=[],m={toc:r};function d(t){let{components:i,...e}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,e,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below is a list of limits set in SaaS Connectivity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Max Run Time"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The actual run time of a connector is not limited at this time, however a response in the form of ",(0,a.kt)("inlineCode",{parentName:"li"},"res.send()")," must be recieved from a command at least every 3 minutes"),(0,a.kt)("li",{parentName:"ul"},"If you have a long running call, you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"res.keepAlive()")," to send a heartbeat to IdentityNow in between ",(0,a.kt)("inlineCode",{parentName:"li"},"res.send()")," calls to let it know the connector is still running"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response Size"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The maximum size of a single ",(0,a.kt)("inlineCode",{parentName:"li"},"res.send()")," call is 256 KiB. Not that some metadata is sent along with the call, so the max size of the payload sent will be slightly less than 256 KiB"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Memory Limits"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Each instance of a running SaaS connector is limited to 512 MB")))))}d.isMDXComponent=!0}}]);