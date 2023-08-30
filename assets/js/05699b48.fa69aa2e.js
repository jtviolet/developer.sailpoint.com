"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88410],{4066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={id:"connector-spec",title:"Connector Specification File",pagination_label:"Connector Spec File",sidebar_label:"Connector Spec File",sidebar_position:4,sidebar_class_name:"connectorSpecFile",keywords:["connectivity","connectors","spec","specification"],description:"The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors.",slug:"/docs/saas-connectivity/connector-spec",tags:["Connectivity"]},r=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/connector-spec/connector-spec",id:"docs/identity-now/saas-connectivity/connector-spec/connector-spec",title:"Connector Specification File",description:"The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-spec/index.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-spec",slug:"/docs/saas-connectivity/connector-spec",permalink:"/idn/docs/saas-connectivity/connector-spec",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-spec/index.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693373461,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:4,frontMatter:{id:"connector-spec",title:"Connector Specification File",pagination_label:"Connector Spec File",sidebar_label:"Connector Spec File",sidebar_position:4,sidebar_class_name:"connectorSpecFile",keywords:["connectivity","connectors","spec","specification"],description:"The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors.",slug:"/docs/saas-connectivity/connector-spec",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Common CLI Commands",permalink:"/idn/docs/saas-connectivity/common-cli-commands"},next:{title:"Card",permalink:"/idn/docs/saas-connectivity/connector-spec/card"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Sample File",id:"sample-file",level:2},{value:"Description of Fields",id:"description-of-fields",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors."),(0,i.kt)("h2",{id:"sample-file"},"Sample File"),(0,i.kt)("p",null,"To see a sample spec file, see this link: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json"},"connector-spec.json")),(0,i.kt)("h2",{id:"description-of-fields"},"Description of Fields"),(0,i.kt)("p",null,"The following describes in detail the different fields in the connector spec:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"name:")," The name of the connector as it appears in IDN. Tags can be appended to this name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"keyType:")," Either \u201csimple\u201d or \u201ccompound\u201d This determines which type of key your connector expects to receive and send back for each of the commands. This must always be indicated in your connector spec - the connector returns the correct type for each command that returns a key type."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, the stdAccountRead command input is the StdAccountReadInput. if you select keyType as \u201csimple,\u201d then the StdAccountReadInput.key will be the type SimpleKey."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"commands:")," The list of commands the connector supports. A full list of available commands can be found ",(0,i.kt)("a",{parentName:"p",href:"/idn/docs/saas-connectivity/connector-commands"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"sourceConfig")," A list of configuration items you must provide when you create a source in IDN. The order of these items is preserved in the UI."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:")," This is always \u201cmenu\u201d - it indicates a new menu for the sidebar. You can have multiple sections defined for complex connector configurations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"label:")," This label indicates the text that will show up on the sidebar in IDN"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"items:")," The array of items in the menu",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:"),' This is always "section" - it indicates a new section on the page'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sectionTitle:")," The large text title that will display for the section."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sectionHelpMessage:")," A description about the section that can help the user understand what it is used for and how to fill out the fields"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"docLinkLabel:")," An optional field that is the text that displays next to documentation help link."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"docLink:")," The optional link that the docLinkLabel will direct to if clicked.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"key:")," The name of the configuration item as it is referenced in code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"label:")," The name of the configuration item as it appears in the UI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"required")," (Optional): Set to 'false' by default. Valid values are 'true' or 'false.' You must populate required configuration items in the IDN source configuration wizard before continuing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:")," The configuration items' types. The following types are valid:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"text"),(0,i.kt)("li",{parentName:"ul"},"number"),(0,i.kt)("li",{parentName:"ul"},"secret"),(0,i.kt)("li",{parentName:"ul"},"textarea"),(0,i.kt)("li",{parentName:"ul"},"secrettextarea"),(0,i.kt)("li",{parentName:"ul"},"checkbox"),(0,i.kt)("li",{parentName:"ul"},"url"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./connector-spec/radio"},"radio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./connector-spec/select"},"select")),(0,i.kt)("li",{parentName:"ul"},"toggle"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./connector-spec/list"},"list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./connector-spec/key-value"},"keyValue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./connector-spec/card"},"cardList")))))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"accountSchema:")," The schema for an account in IDN populated by data from the source."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayAttribute:")," Identifies the attribute (defined below) used to map to ",(0,i.kt)("inlineCode",{parentName:"li"},"Account Name")," in the IdentityNow account schema. This should be a unique value even though it is not required because the connector will use this value to correlate accounts in IDN to accounts in the source system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"identityAttribute:")," Identifies the attribute (defined below) used to map to ",(0,i.kt)("inlineCode",{parentName:"li"},"Account ID")," in the IdentityNow account schema. This must be a globally unique identifier, such as email address, employee ID, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"groupAttribute:")," Identifies the attribute used to map accounts to entitlements. For example, a web service can define ",(0,i.kt)("inlineCode",{parentName:"li"},"groups")," that users are members of, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"groups")," grant entitlements to each user. In this case, ",(0,i.kt)("strong",{parentName:"li"},"groupAttribute")," is \u201cgroups,\u201d and there is also an account attribute called \u201cgroups\u201d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attributes:")," One or more attributes that map to a user\u2019s attribute on the target source. Each attribute defines the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name:")," The attribute\u2019s name as it appears in IDN."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:")," The attribute\u2019s type. Possible values are ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"long"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description:")," A helpful description of the attribute. This is useful to source owners when they are trying to understand the account schema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"managed:")," This indicates whether the entitlements are manageable through IDN or read-only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"entitlement:")," This boolean indicates whether the attribute is an entitlement. Entitlements give identities privileges on the source system. Use this indication to determine which fields to synchronize with accounts in IDN for tasks such as separation of duties and role assignment. The boolean indicates whether the attribute is an entitlement."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"multi:")," This indicates entitlements that are stored in an array format. This one field can store multiple entitlements for a single account."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"entitlementSchemas:")," A list of entitlement schemas in IDN populated by data from the source."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:")," The entitlement\u2019s type. Currently, only ",(0,i.kt)("inlineCode",{parentName:"li"},"group")," is supported."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayAttribute:")," The entitlement attribute\u2019s name. This can be the ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," or another human friendly identifier for a group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"identityAttribute:")," The entitlement attribute\u2019s unique ID. This can be the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," or another unique key for a group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attributes:")," The entitlement\u2019s list of attributes. This list of attributes is an example: ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"description"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name:")," The name of the attribute as it appears in IDN."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:")," The attribute\u2019s type. Possible values are ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"long"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description:")," A helpful description the attribute. This is useful to source owners when they are trying to understand the account schema."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"accountCreateTemplate:")," A map of identity attributes IDN will pass to the connector to create an account in the target source."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"key:")," The unique identifier of the attribute. This is also the name that is presented in the Create Profile screen in IDN."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"label:")," A friendly name for presentation purposes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:")," The attribute\u2019s type. Possible values are ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"long"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"initialValue (Optional):")," Use this to specify identitAttribute mapping, generator or default values.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:")," The initial value type. Possible values are ",(0,i.kt)("inlineCode",{parentName:"li"},"identityAttribute"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"generator"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"static"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attributes:")," Attributes change depending on the type selected.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name:")," Use this to identify the mapping for identityAttribute type, or the generator to use (",(0,i.kt)("inlineCode",{parentName:"li"},"Create Password"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Create Unique Account ID"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"value:")," Use this as the default value for the static type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxSize:")," Use this for the Create Unique Account ID generator type. This value specifies the maximum size of the username to be generated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxUniqueChecks:")," Use this for the Create Unique Account ID generator type. This value specifies the maximum retries in case a unique ID is not found with the first random generated user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"template:")," Use this for the Create Unique Account ID generator type. This value specifies the template used for generation. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},'"$(firstname).$(lastname)$(uniqueCounter)"'),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"required (Optional):")," Determines whether the account create operation requires this attribute. It defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". If it is ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and IdentityNow encounters an identity missing this attribute, IDN does not send the account to the connector for account creation.")))))))}u.isMDXComponent=!0}}]);