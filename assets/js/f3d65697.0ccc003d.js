"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[41052],{47274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={id:"go-sdk",title:"Go SDK",pagination_label:"Go SDK",sidebar_label:"Golang",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk"],description:"Learn how to use the Golang SDK in this guide.",slug:"/tools/sdk/go",tags:["SDK","Software Development Kit"]},r=void 0,l={unversionedId:"tools/sdk/go-sdk",id:"tools/sdk/go-sdk",title:"Go SDK",description:"Learn how to use the Golang SDK in this guide.",source:"@site/products/idn/tools/sdk/go.md",sourceDirName:"tools/sdk",slug:"/tools/sdk/go",permalink:"/idn/tools/sdk/go",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/sdk/go.md",tags:[{label:"SDK",permalink:"/idn/tags/sdk"},{label:"Software Development Kit",permalink:"/idn/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693373461,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:2,frontMatter:{id:"go-sdk",title:"Go SDK",pagination_label:"Go SDK",sidebar_label:"Golang",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk"],description:"Learn how to use the Golang SDK in this guide.",slug:"/tools/sdk/go",tags:["SDK","Software Development Kit"]},sidebar:"sdkSidebar",previous:{title:"SDKs",permalink:"/idn/tools/sdk"},next:{title:"PowerShell SDK",permalink:"/idn/tools/sdk/powershell"}},s={},p=[{value:"Start using the Go SDK",id:"start-using-the-go-sdk",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Create a Go module for the SDK",id:"create-a-go-module-for-the-sdk",level:3},{value:"Create a Go application for the SDK",id:"create-a-go-application-for-the-sdk",level:3},{value:"Configure the SDK",id:"configure-the-sdk",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"CLI assisted configuration",id:"cli-assisted-configuration",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:4},{value:"Install the SDK",id:"install-the-sdk",level:3},{value:"Run an example request",id:"run-an-example-request",level:2},{value:"Run an API request",id:"run-an-api-request",level:3},{value:"Paginate results",id:"paginate-results",level:3},{value:"Search",id:"search",level:3},{value:"Paginate search results",id:"paginate-search-results",level:3},{value:"Transform",id:"transform",level:3},{value:"Get started",id:"get-started",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"start-using-the-go-sdk"},"Start using the Go SDK"),(0,i.kt)("p",null,"Learn how to use the Golang SDK in this guide. The Go SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow (IDN)."),(0,i.kt)("p",null,"You can find the SDK and its examples in its GitHub repo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/golang-sdk"},"here"),"."),(0,i.kt)("p",null,"The Go SDK includes the following functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#run-an-api-request"},"APIs"),": "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3"},"V3")," and ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/beta"},"Beta")," APIs are available.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following V2 APIs are available: "),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Collection"),(0,i.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Workgroups"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Workgroup, PATCH Workgroup, DELETE Workgroup, GET Workgroups, POST Workgroups, GET Workgroup Members, POST Workgroup Members, GET Workgroup Connections, POST Bulk Delete Workgroups")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Organizations"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Organization, PATCH Organization"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following CC APIs are available: "),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Collection"),(0,i.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Accounts"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Accounts, POST Remove Account")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Applications"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Applications, GET Application, POST Application, POST Update Application, POST Delete Application, GET Application Access Profiles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Connectors"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Connectors, POST Connector, POST Delete Connector, GET Export Connector, POST Import Connector")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Update User Permissions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sources"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Account Aggregation, GET Export Account Feed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"System"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Refresh Identities"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#search"},"Search"),": You can use IDN's search. To learn more about IDN's search, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/search/index.html"},"Search"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#transform"},"Transforms"),": You can use transforms, configurable JSON objects that define easy ways to manipulate attribute data without your needing to write any code. To learn more about IDN's transforms, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/docs/transforms"},"Transforms"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#paginate-results"},"Pagination"),": You can use the SDK's pre-built pagination functionality to paginate the responses to your SDK requests. To learn more about pagination, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/standard-collection-parameters#paginating-results"},"Paginating Results"),"."))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"You need the following to use the Go SDK:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Golang version 1.18 or above. You can download it ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"here"),". You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"go version")," to check your version. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your tenant name in IDN. To learn how to find it, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/getting-started#find-your-tenant-name"},"Getting Started"),". The SDK will use this tenant name to connect to your IDN instance. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A PAT with a client secret and ID. To learn how to create one in IDN, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/authentication#personal-access-tokens"},"Personal Access Tokens"),". The SDK will use this PAT to authenticate with the SailPoint APIs. "))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To set up your Go SDK, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#create-a-go-module-for-the-sdk"},"Create a Go module for the SDK")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#create-a-go-application-for-the-sdk"},"Create a Go application for the SDK")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-the-sdk"},"Configure the SDK")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#install-the-sdk"},"Install the SDK"))),(0,i.kt)("h3",{id:"create-a-go-module-for-the-sdk"},"Create a Go module for the SDK"),(0,i.kt)("p",null," Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"go mod init github.com/github-repo-name/projectname"),' command to create your project. This command creates a "go.mod" file in your project. This "go.mod" file defines your Go module\'s properties, including its dependencies on other modules and on versions of Go. The "go.mod" file will list your Go module\'s module path and your current version of Go. '),(0,i.kt)("h3",{id:"create-a-go-application-for-the-sdk"},"Create a Go application for the SDK"),(0,i.kt)("p",null,'Create an "sdk.go" file in your project and copy this code example into the file to get started:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"`\n    "fmt"\n    "os"\n\n    sailpoint "github.com/sailpoint-oss/golang-sdk"\n )\n\nfunc main() {\n\n    ctx := context.TODO()\n    configuration := sailpoint.NewDefaultConfiguration()\n    apiClient := sailpoint.NewAPIClient(configuration)\n\n    resp, r, err := apiClient.V3.AccountsApi.ListAccounts(ctx).Execute()\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `AccountsApi.ListAccount``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n    // response from `ListAccounts`: []Account\n    fmt.Fprintf(os.Stdout, "First response from `AccountsApi.ListAccount`: %v\\n", resp[0].Name)\n\n}\n')),(0,i.kt)("p",null,"You'll be able to use this code example to run the application. The application will call the ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3/list-accounts"},"Accounts List")," V3 API endpoint to get the accounts in your tenant and return the first account it finds. "),(0,i.kt)("p",null,'Your project should now have both a "go.mod" file and an "sdk.go" file. '),(0,i.kt)("h3",{id:"configure-the-sdk"},"Configure the SDK"),(0,i.kt)("p",null,"To configure the SDK, create a configuration file or save your configuration as environment variables.\nYou can use any of the following ways to do so: "),(0,i.kt)("h4",{id:"manual-configuration"},"Manual configuration"),(0,i.kt)("p",null,'One way to create a configuration file is to create a "config.yaml" file in your project and specify the following information in it: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'activeenvironment: example # the key that identifies the currently active environment\nauthtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value\ncustomexporttemplatespath: "" # the path to the users custom export templates file if one is provided\ncustomsearchtemplatespath: "" # the path to the users custom search templates file if one is provided\ndebug: false # the debug setting  \nenvironments: # the configured environments  \n  example:\n    baseurl: https://example.api.identitynow.com\n    pat:\n      accesstoken: example-access-token\n      clientid: example-client-id\n      clientsecret: example-client-secret\n      expiry: example-access-token-expiry\n    tenanturl: https://example.identitynow.com\n')),(0,i.kt)("p",null,"You must specify the following information: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeenvironment"),': This key identifies the current active environment the SDK is connecting to. This environment name refers to your IDN tenant name. In the example, the key is "example". You must also make sure the environment name listed under ',(0,i.kt)("inlineCode",{parentName:"li"},"environments")," matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"activeenvironment"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authtype"),': The authentication type. Currently only "pat" and "pipeline" are supported. Configuring ENV VAR SAIL_AUTH_TYPE to "pipeline" overrides this value. In the example, the authentication type is "pat". You must also make sure the authentication type listed under the environment name "example" matches the ',(0,i.kt)("inlineCode",{parentName:"li"},"authtype"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"baseurl")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"tenanturl"),": These refer to your IDN tenant URL. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientsecret"),": The PAT's client secret. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientid"),": The PAT's client ID. ")),(0,i.kt)("p",null,"Here's an example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'activeenvironment: devrel # the key that identifies the currently active environment\nauthtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value\ncustomexporttemplatespath: "" # the path to the users custom export templates file if one is provided\ncustomsearchtemplatespath: "" # the path to the users custom search templates file if one is provided\ndebug: false # the debug setting  \nenvironments: # the configured environments \n  example:\n    baseurl: https://devrel.api.identitynow.com\n    pat:\n      accesstoken: example-access-token\n      clientid: g0567b766b413b22c05c66e75d532f1b\n      clientsecret: cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7\n      expiry: example-access-token-expiry\n    tenanturl: https://devrel.identitynow.com\n')),(0,i.kt)("p",null,"You can also specify this optional information: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customexporttemplatespath"),": Specifies the folder path to save your custom export templates file in. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customsearchtemplatespath"),": Specifies the folder path to save your custom search templates file in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debug"),': The debug setting. By default, it\'s set to "false".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accesstoken"),": The PAT's name. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expiry"),": The PAT's expiry date.")),(0,i.kt)("h4",{id:"cli-assisted-configuration"},"CLI assisted configuration"),(0,i.kt)("p",null,"Another way to create a configuration file is to use the SailPoint CLI. To learn how to use the SailPoint CLI to create a configuration file, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/sailpoint-cli#manual-configuration"},"Assisted Configuration"),"."),(0,i.kt)("h4",{id:"environment-variable-configuration"},"Environment variable configuration"),(0,i.kt)("p",null,"You can also store your configuration in environment variables. "),(0,i.kt)("p",null,"On ",(0,i.kt)("strong",{parentName:"p"},"Linux/Mac"),", export the following environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export SAIL_BASE_URL=https://{tenant}.api.identitynow.com\nexport SAIL_CLIENT_ID={clientID}\nexport SAIL_CLIENT_SECRET={clientSecret}\n")),(0,i.kt)("p",null,"To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),".\nOn ",(0,i.kt)("strong",{parentName:"p"},"Windows PowerShell"),", run the following commands: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:SAIL_BASE_URL=https://{tenant}.api.identitynow.com\n$env:SAIL_CLIENT_ID={clientID}\n$env:SAIL_CLIENT_SECRET={clientSecret}\n")),(0,i.kt)("p",null,"To get your environment variables to persist across PowerShell sessions, use these commands instead: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://{tenant}.api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','{clientID}')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','clientSecret}')\n")),(0,i.kt)("h3",{id:"install-the-sdk"},"Install the SDK"),(0,i.kt)("p",null,"Install the SDK with the ",(0,i.kt)("inlineCode",{parentName:"p"},"go mod tidy")," command. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"go mod tidy"),' downloads the required dependencies from the source files and updates the "go.mod" file to match those dependencies.'),(0,i.kt)("h2",{id:"run-an-example-request"},"Run an example request"),(0,i.kt)("p",null,"Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. The SDK includes some prebuilt examples you can copy into your PowerShell instance to start learning how to use the SDK. "),(0,i.kt)("p",null,"Use the examples to learn how to do the following: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-an-api-request"},"Run an API request"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#paginate-results"},"Paginate results")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#search"},"Search"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#paginate-search-results"},"Paginate search results")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#transforms"},"Transform"))),(0,i.kt)("p",null,"Run an example request with the ",(0,i.kt)("inlineCode",{parentName:"p"},"go run sdk.go")," command."),(0,i.kt)("h3",{id:"run-an-api-request"},"Run an API request"),(0,i.kt)("p",null,'To start using the API, you can copy this example request into your "sdk.go" file: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "os"\n\n    sailpoint "github.com/sailpoint-oss/golang-sdk"\n )\n\nfunc main() {\n\n    ctx := context.TODO()\n    configuration := sailpoint.NewDefaultConfiguration()\n    apiClient := sailpoint.NewAPIClient(configuration)\n\n    resp, r, err := apiClient.V3.AccountsApi.ListAccounts(ctx).Execute()\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `AccountsApi.ListAccount``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n    // response from `ListAccounts`: []Account\n    fmt.Fprintf(os.Stdout, "First response from `AccountsApi.ListAccount`: %v\\n", resp[0].Name)\n\n}\n')),(0,i.kt)("p",null,"The example API request calls the SailPoint ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3/list-accounts"},"Accounts List")," V3 API endpoint to get the accounts in your tenant and returns the first account it finds. "),(0,i.kt)("p",null,"In this line, you can make changes to the API you're calling: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"resp, r, err := apiClient.V3.AccountsApi.ListAccounts(ctx).Execute()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To call a different version of the APIs, change ",(0,i.kt)("inlineCode",{parentName:"li"},"V3")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Beta"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"V2"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"CC"),". "),(0,i.kt)("li",{parentName:"ul"},"To call a different API collection, change ",(0,i.kt)("inlineCode",{parentName:"li"},"AccountsApi")," to another collection, like ",(0,i.kt)("inlineCode",{parentName:"li"},"SourcesApi"),", for example. "),(0,i.kt)("li",{parentName:"ul"},"To call a different endpoint, change ",(0,i.kt)("inlineCode",{parentName:"li"},"ListAcounts")," to another endpoint, like ",(0,i.kt)("inlineCode",{parentName:"li"},"GetAccountEntitlements"),", for example.")),(0,i.kt)("p",null,"You can manipulate the example API request to call different APIs and write different messages for the users. "),(0,i.kt)("p",null,"In this line, you can make changes to the API you're calling: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"resp, r, err := apiClient.V3.AccountsApi.ListAccounts(ctx).Execute()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To call a different version of the APIs, change ",(0,i.kt)("inlineCode",{parentName:"li"},"V3")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Beta"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"V2"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"CC"),". "),(0,i.kt)("li",{parentName:"ul"},"To call a different API collection, change ",(0,i.kt)("inlineCode",{parentName:"li"},"AccountsApi")," to another collection, like ",(0,i.kt)("inlineCode",{parentName:"li"},"SourcesApi"),", for example. "),(0,i.kt)("li",{parentName:"ul"},"To call a different endpoint, change ",(0,i.kt)("inlineCode",{parentName:"li"},"ListAcounts")," to another endpoint, like ",(0,i.kt)("inlineCode",{parentName:"li"},"GetAccountEntitlements"),", for example.")),(0,i.kt)("p",null,"You can edit the messages produced for successful responses as well as errors in the following lines by editing the messages enclosed in the quotes. "),(0,i.kt)("h3",{id:"paginate-results"},"Paginate results"),(0,i.kt)("p",null,"The SDK has a built-in pagination function you can use to automatically call and collect responses from the APIs that support pagination. Use the syntax shown in this example to call it: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "os"\n\n    sailpoint "github.com/sailpoint-oss/golang-sdk"\n    // You must import the v3 library so the SDK is aware of the sailpointsdk.Account struct.\n    sailpointsdk "github.com/sailpoint-oss/golang-sdk/v3"\n)\n\nfunc main() {\n\n    ctx := context.TODO()\n    configuration := sailpoint.NewDefaultConfiguration()\n    apiClient := sailpoint.NewAPIClient(configuration)\n\n    // Use the paginate function to get 1000 results instead of hitting the normal 250 limit\n    resp, r, err := sailpoint.PaginateWithDefaults[sailpointsdk.Account](apiClient.V3.AccountsApi.ListAccounts(ctx))\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `AccountsApi.ListAccount``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n    // response from `ListAccounts`: []Account\n    fmt.Fprintf(os.Stdout, "First response from `AccountsApi.ListAccount`: %v\\n", resp[0].Name)\n\n}\n\n')),(0,i.kt)("p",null,"To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/standard-collection-parameters/#paginating-results"},"Paginating Results"),"."),(0,i.kt)("h3",{id:"search"},"Search"),(0,i.kt)("p",null,"To try using the IDN ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3/search-post"},"search functionality"),' along with pagination, copy this code into your "sdk.go" file following the main code:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func getSearchResults(ctx context.Context, apiClient *sailpoint.APIClient) {\n    search := v3.NewSearchWithDefaults()\n    search.Indices = append(search.Indices, "identities")\n    searchString := []byte(`\n    {\n    "indices": [\n        "identities"\n    ],\n    "query": {\n        "query": "*"\n    },\n    "sort": [\n        "-name"\n    ]\n    }\n      `)\n    search.UnmarshalJSON(searchString)\n    resp, r, err := sailpoint.PaginateSearchApi(ctx, apiClient, *search, 0, 10, 10000)\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `AccountsApi.ListAccount``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n    // response from `search`\n    for i := 0; i < len(resp); i++ {\n        fmt.Println(resp[i]["name"])\n    }\n}\n')),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"go run sdk.go")," to run the search. This example lists all the identities it finds in your tenant."),(0,i.kt)("p",null,"There are two ways to configure the search: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"searchString")," JSON:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'    searchString := []byte(`\n    {\n    "indices": [\n        "identities"\n    ],\n    "query": {\n        "query": "*"\n    },\n    "sort": [\n        "-name"\n    ]\n    }\n      `)\n')),(0,i.kt)("p",null,"In this example, changing the ",(0,i.kt)("inlineCode",{parentName:"p"},'"indices"')," from ",(0,i.kt)("inlineCode",{parentName:"p"},'"identities"')," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"access profiles"')," makes the search return access profiles instead of identities. "),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"You can edit the string at the end of this ",(0,i.kt)("inlineCode",{parentName:"li"},"search.Indices")," line to do the same thing as a shortcut: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'search.Indices = append(search.Indices, "identities")\n')),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},'"identities"')," string represents an unmarshalled JSON. Changing ",(0,i.kt)("inlineCode",{parentName:"p"},'append(search.Indices, "identities")')," to ",(0,i.kt)("inlineCode",{parentName:"p"},'append(search.Indices, "access profiles")')," does the same thing editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"searchString")," JSON does."),(0,i.kt)("h3",{id:"paginate-search-results"},"Paginate search results"),(0,i.kt)("p",null,"The search example includes the syntax you can use to paginate search results. Edit this line to configure the search result pagination: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"resp, r, err := sailpoint.PaginateSearchApi(ctx, apiClient, *search, 0, 10, 10000)\n")),(0,i.kt)("p",null,"The first value refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialOffset"),", the starting number for the results, the second refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"increment"),", the number of records per page, and the third refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),", the last record that can be returned. "),(0,i.kt)("p",null,"For example, changing the first number to ",(0,i.kt)("inlineCode",{parentName:"p"},"21"),", the second to ",(0,i.kt)("inlineCode",{parentName:"p"},"20"),", and the third to ",(0,i.kt)("inlineCode",{parentName:"p"},"40")," would configure the search to return records 21 to 40 and then stop. "),(0,i.kt)("h3",{id:"transform"},"Transform"),(0,i.kt)("p",null,'To start using the SDK to create, manage, and delete transforms, you can copy this example into your "sdk.go" file: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func getTransformResults(ctx context.Context, apiClient *sailpoint.APIClient) {\n    resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Execute()\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.GetTransformsList``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n    b, _ := json.Marshal(resp[0].Attributes)\n    fmt.Fprintf(os.Stdout, "First response from `TransformsApi.GetTransformsList`: %v\\n", string(b))\n}\n')),(0,i.kt)("p",null,"This example calls the ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3/list-transforms"},"List Transforms")," V3 API endpoint to get the transforms in your tenant and list the results for the first transform it finds, along with the transform inputs and outputs. "),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("p",null,"You can use this SDK to build new tools that extend your IDN platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss"},"https://developer.sailpoint.com/discuss"),"!"))}c.isMDXComponent=!0}}]);