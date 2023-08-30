"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[16646],{27816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={id:"replace",title:"Replace",pagination_label:"Replace",sidebar_label:"Replace",sidebar_class_name:"replace",keywords:["transforms","operations","replace"],description:"Find and replace all instances of a single string.",slug:"/docs/transforms/operations/replace",tags:["Transforms","Transform Operations"]},i=void 0,l={unversionedId:"docs/identity-now/transforms/operations/replace",id:"docs/identity-now/transforms/operations/replace",title:"Replace",description:"Find and replace all instances of a single string.",source:"@site/products/idn/docs/identity-now/transforms/operations/replace.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/replace",permalink:"/idn/docs/transforms/operations/replace",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/replace.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693373461,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{id:"replace",title:"Replace",pagination_label:"Replace",sidebar_label:"Replace",sidebar_class_name:"replace",keywords:["transforms","operations","replace"],description:"Find and replace all instances of a single string.",slug:"/docs/transforms/operations/replace",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Replace All",permalink:"/idn/docs/transforms/operations/replace-all"},next:{title:"Right Pad",permalink:"/idn/docs/transforms/operations/right-pad"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Use the replace transform to find a given pattern of characters within incoming data and replace all instances of that pattern with alternate values. The transform recognizes standard regex syntax. See the ",(0,n.kt)("a",{parentName:"p",href:"#references"},"References")," section for more information about regex."),(0,n.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,n.kt)("p",null,"The replace transform takes a ",(0,n.kt)("inlineCode",{parentName:"p"},"regex")," attribute as an argument to identify which pattern to replace and a ",(0,n.kt)("inlineCode",{parentName:"p"},"replacement")," attribute for the characters to replace the pattern with. The transform also requires the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "regex": "IIQ",\n    "replacement": "IdentityNow"\n  },\n  "type": "replace",\n  "name": "Replace Transform"\n}\n')),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"replace"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"regex")," - This is the pattern you want to replace."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"replacement")," - This is the replacement string that replaces the pattern wherever it occurs."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,'This transform makes a simple word replacement, exchanging "IIQ" for "IdentityNow".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "Working with IIQ is fun"\nOutput: "Working with IdentityNow is fun"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "regex": "IIQ",\n    "replacement": "IdentityNow"\n  },\n  "type": "replace",\n  "name": "Replace Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,"This example uses a more complex regex pattern to remove any non-alphabet characters from the input string."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "The quick brown fox jumped over 10 lazy dogs"\nOutput: "Thequickbrownfoxjumpedoverlazydogs"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": "The quick brown fox jumped over 10 lazy dogs",\n    "regex": "[^a-zA-Z]",\n    "replacement": ""\n  },\n  "type": "replace",\n  "name": "Replace Transform"\n}\n')),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.regular-expressions.info/replacetutorial.html"},"https://www.regular-expressions.info/replacetutorial.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://regex101.com/"},"https://regex101.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://extendsclass.com/regex-tester.html"},"https://extendsclass.com/regex-tester.html"))))}c.isMDXComponent=!0}}]);