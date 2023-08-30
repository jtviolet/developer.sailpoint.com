"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20505],{27374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"standard-collection-parameters",title:"Standard Collection Parameters",pagination_label:"Standard Collection Parameters",sidebar_label:"Standard Collection Parameters",sidebar_position:5,sidebar_class_name:"standardCollectionParameters",keywords:["standard collection parameters"],description:"Many endpoints in the IdentityNow API support a generic syntax for paginating, filtering and sorting the results.",tags:["Standard Collection Parameters"]},l=void 0,o={unversionedId:"api/standard-collection-parameters",id:"api/standard-collection-parameters",title:"Standard Collection Parameters",description:"Many endpoints in the IdentityNow API support a generic syntax for paginating, filtering and sorting the results.",source:"@site/products/idn/api/standard-collection-parameters.md",sourceDirName:"api",slug:"/api/standard-collection-parameters",permalink:"/idn/api/standard-collection-parameters",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/api/standard-collection-parameters.md",tags:[{label:"Standard Collection Parameters",permalink:"/idn/tags/standard-collection-parameters"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693373461,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:5,frontMatter:{id:"standard-collection-parameters",title:"Standard Collection Parameters",pagination_label:"Standard Collection Parameters",sidebar_label:"Standard Collection Parameters",sidebar_position:5,sidebar_class_name:"standardCollectionParameters",keywords:["standard collection parameters"],description:"Many endpoints in the IdentityNow API support a generic syntax for paginating, filtering and sorting the results.",tags:["Standard Collection Parameters"]},sidebar:"openApiSidebar",previous:{title:"Service Accounts",permalink:"/idn/api/service-accounts"},next:{title:"Rate Limiting",permalink:"/idn/api/rate-limit"}},s={},p=[{value:"Paginating Results",id:"paginating-results",level:2},{value:"Paginating Search Queries",id:"paginating-search-queries",level:2},{value:"Example of Paginating Search Results",id:"example-of-paginating-search-results",level:3},{value:"Filtering Results",id:"filtering-results",level:2},{value:"Data Types",id:"data-types",level:3},{value:"Filter Syntax",id:"filter-syntax",level:3},{value:"Primitive Operators",id:"primitive-operators",level:3},{value:"Composite Operators",id:"composite-operators",level:3},{value:"Escaping Special Characters in a Filter",id:"escaping-special-characters-in-a-filter",level:3},{value:"Known Limitations",id:"known-limitations",level:3},{value:"Sorting Results",id:"sorting-results",level:2},{value:"Putting it all Together",id:"putting-it-all-together",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Many endpoints in the IdentityNow API support a generic syntax for paginating, filtering and sorting the results. A collection endpoint has the following characteristics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The HTTP verb is always GET."),(0,r.kt)("li",{parentName:"ul"},"The last component in the URL is a plural noun (ex. ",(0,r.kt)("inlineCode",{parentName:"li"},"/v3/public-identities"),")."),(0,r.kt)("li",{parentName:"ul"},"The return value from a successful request is always an array of JSON objects. This array may be empty if there are no results.")),(0,r.kt)("h2",{id:"paginating-results"},"Paginating Results"),(0,r.kt)("p",null,"Use the following optional query parameters to achieve pagination:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Constraints"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limit")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer specifying the maximum number of records to return in a single API call. If it is not specified, a default limit is used."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"250")),(0,r.kt)("td",{parentName:"tr",align:null},"Maxiumum of 250 records per page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offset")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer specifying the offset of the first result from the beginning of the collection. The ",(0,r.kt)("strong",{parentName:"td"},"offset")," value is record-based, not page-based, and the index starts at 0. For example, ",(0,r.kt)("strong",{parentName:"td"},"offset=0")," and ",(0,r.kt)("strong",{parentName:"td"},"limit=20")," returns records 0-19, but ",(0,r.kt)("strong",{parentName:"td"},"offset=1")," and ",(0,r.kt)("strong",{parentName:"td"},"limit=20")," returns records 1-20."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Between 0 and the last record index.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"count")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean indicating whether a total count is returned, factoring in any filter parameters, in the ",(0,r.kt)("strong",{parentName:"td"},"X-Total-Count")," response header. The value is the total size of the collection that would be returned if ",(0,r.kt)("strong",{parentName:"td"},"limit")," and ",(0,r.kt)("strong",{parentName:"td"},"offset")," were ignored. For example, if the total number of records is 1000, then count=true would return 1000 in the ",(0,r.kt)("strong",{parentName:"td"},"X-Total-Count")," header. Because requesting a total count can have performance impact, do not send ",(0,r.kt)("strong",{parentName:"td"},"count=true")," if that value is not being used."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Must be ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v3/public-identities?limit=2")),(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v3/public-identities?limit=20&offset=4")),(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v3/public-identities?count=true"))),(0,r.kt)("h2",{id:"paginating-search-queries"},"Paginating Search Queries"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/search"},"search API")," in IdentityNow leverages ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html"},"Elasticsearch"),' functionality, which returns a maximum of 10,000 records by default. However, you can page more than 10,000 records by using the "searchAfter" property.'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"searchAfter")," capability provides the ability to page on sorted field values, instead of offset paging. For example, if you sort by ID and page 100 records at a time, you can take the 1st page of 100 records, pass the last ID from that record set into your next search, and the next search will return the next 100 records after that ID. You continue that pattern of using the last value passed into ",(0,r.kt)("inlineCode",{parentName:"p"},"searchAfter")," until the end of the result set. This allows you to page past the 10,000 record limit until you reach the final record."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Required Properties for Paginating Search Results")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"query")),(0,r.kt)("td",{parentName:"tr",align:null},"The Query JSON object. Refer to the following Query JSON Object table for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sort")),(0,r.kt)("td",{parentName:"tr",align:null},"The array list of the fields to sort by. This is required if you are using the ",(0,r.kt)("inlineCode",{parentName:"td"},"searchAfter")," approach. You can use ",(0,r.kt)("inlineCode",{parentName:"td"},"-fieldName")," for descending searches (optional).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"searchAfter")),(0,r.kt)("td",{parentName:"tr",align:null},"You can use this instead of offset to get past the 10,000 paging result record limit, passing the last value(s) of your sort fields from the previous result set into the next result set until you get the total number of results or the end of results (optional).")))),(0,r.kt)("h3",{id:"example-of-paginating-search-results"},"Example of Paginating Search Results"),(0,r.kt)("p",null,"Here is an example of a search API call with ",(0,r.kt)("inlineCode",{parentName:"p"},"searchAfter")," paging. The first query will get the first set of results. The default limit for search is 10,000, which is different from other collection endpoints. For this example, the query is set to page 100 records at a time. Paginating search queries also requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"sort")," property to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"POST")," ",(0,r.kt)("a",{parentName:"p",href:"https://%7Btenant%7D.api.identitynow.com/v3/search?limit=100&count=true"},"https://{tenant}.api.identitynow.com/v3/search?limit=100&count=true")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "indices": [\n        "identities"\n    ],\n    "query": {\n        "query": "*"\n    },\n    "sort": [\n        "id"\n    ]\n}\n')),(0,r.kt)("p",null,"This query will return 100 records. To get the next 100 records, find the last record's ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and use it in the next query's ",(0,r.kt)("inlineCode",{parentName:"p"},"searchAfter")," property."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"POST")," ",(0,r.kt)("a",{parentName:"p",href:"https://%7Btenant%7D.api.identitynow.com/v3/search?limit=100&count=true"},"https://{tenant}.api.identitynow.com/v3/search?limit=100&count=true")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "indices": [\n        "identities"\n    ],\n    "query": {\n        "query": "*"\n    },\n    "sort": [\n        "id"\n    ],\n    "searchAfter": ["2c9180835d38ca0c015d606b50851b1e"]\n}\n')),(0,r.kt)("p",null,"This will get the next 100 records in the search query. Repeat this process until no more records return."),(0,r.kt)("h2",{id:"filtering-results"},"Filtering Results"),(0,r.kt)("p",null,"Any collection with a ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," parameter supports filtering. This means that an item is only included in the returned array if the filters expression evaluates to true for that item. Check the available request parameters for the collection endpoint you are using to see if it supports filtering."),(0,r.kt)("h3",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"Filter expressions are applicable to fields of the following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Numeric"),(0,r.kt)("li",{parentName:"ul"},"Boolean: either ",(0,r.kt)("strong",{parentName:"li"},"true")," or ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Strings. Enumerated values are a special case of this."),(0,r.kt)("li",{parentName:"ul"},"Date-time. In V3, all date time values are in ISO-8601 format, as specified in ",(0,r.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc3339"},"RFC 3339 - Date and Time on the Internet: Timestamps"),".")),(0,r.kt)("h3",{id:"filter-syntax"},"Filter Syntax"),(0,r.kt)("p",null,"The V3 filter syntax is similar to, but not exactly the same as, that specified by the SCIM standard. These are some key differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A slightly different set of supported operators"),(0,r.kt)("li",{parentName:"ul"},'Case-sensitivity of operators. All V3 filter operators are in lowercase; specifying "EQ" instead of "eq" is not allowed.')),(0,r.kt)("h3",{id:"primitive-operators"},"Primitive Operators"),(0,r.kt)("p",null,"These filter operators apply directly to fields and their values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ca")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the collection-valued field contains all the listed values."),(0,r.kt)("td",{parentName:"tr",align:null},'groups ca ("Venezia","Firenze")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"co")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the value of the field contains the specified value as a substring.(Applicable to string-valued fields only.)"),(0,r.kt)("td",{parentName:"tr",align:null},'name co "Rajesh"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eq")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the value of the field indicated by the first operand is equal to the value specified by the second operand."),(0,r.kt)("td",{parentName:"tr",align:null},'identitySummary.id eq "2c9180846e85e4b8016eafeba20c1314"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ge")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the value of the field indicated by the first operand is greater or equal to the value specified by the second operand."),(0,r.kt)("td",{parentName:"tr",align:null},'daysUntilEscalation ge 7\xa0name ge "Genaro"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gt")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the value of the field indicated by the first operand is greater than the value specified by the second operand."),(0,r.kt)("td",{parentName:"tr",align:null},'daysUntilEscalation gt 7\xa0name gt "Genaro"\xa0created gt 2018-12-18T23:05:55Z')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"in")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the field value is\xa0in the list of values."),(0,r.kt)("td",{parentName:"tr",align:null},'accountActivityItemId in ("2c9180846b0a0583016b299f210c1314","2c9180846b0a0581016b299e82560c1314")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"le")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the value of the field indicated by the first operand is less or equal to the value specified by the second operand."),(0,r.kt)("td",{parentName:"tr",align:null},'daysUntilEscalation le 7\xa0name le "Genaro"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lt")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the value of the field indicated by the first operand is\xa0less than the value specified by the second operand."),(0,r.kt)("td",{parentName:"tr",align:null},'daysUntilEscalation lt 7\xa0name lt "Genaro"\xa0created lt 2018-12-18T23:05:55Z')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ne")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the value of the field indicated by the first operand is not equal to the value specified by the second operand."),(0,r.kt)("td",{parentName:"tr",align:null},'type ne "ROLE"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pr")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the field is\xa0present, that is, not null."),(0,r.kt)("td",{parentName:"tr",align:null},"pr accountRequestInfo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sw")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the value of the field starts with the specified value.(Applicable to string-valued fields only.)"),(0,r.kt)("td",{parentName:"tr",align:null},'name sw "Rajesh"')))),(0,r.kt)("h3",{id:"composite-operators"},"Composite Operators"),(0,r.kt)("p",null,"These operators are applied to other filter expressions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"and")),(0,r.kt)("td",{parentName:"tr",align:null},"True if both the filter-valued operands are true."),(0,r.kt)("td",{parentName:"tr",align:null},'startDate gt 2018 and name sw "Genaro"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not")),(0,r.kt)("td",{parentName:"tr",align:null},"True if the filter-valued operand is false."),(0,r.kt)("td",{parentName:"tr",align:null},'not groups ca ("Venezia","Firenze")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"or")),(0,r.kt)("td",{parentName:"tr",align:null},"True if either of the filter-valued operands are true."),(0,r.kt)("td",{parentName:"tr",align:null},'startDate gt 2018 or name sw "Genaro"')))),(0,r.kt)("h3",{id:"escaping-special-characters-in-a-filter"},"Escaping Special Characters in a Filter"),(0,r.kt)("p",null,"Certain characters must be escaped before they can be used in a filter expression. For example, the following filter expression attempting to find all sources with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"#Employees")," will produce a 400 error:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'/v3/sources?filters=name eq "#Employees"')),(0,r.kt)("p",null,"To properly escape this filter, do the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'/v3/sources?filters=name eq "%23Employees"')),(0,r.kt)("p",null,"If you are searching for a string containing double quotes, use the following escape sequence:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'/v3/sources/?filters=name eq "\\"Employees\\""')),(0,r.kt)("p",null,"The following table lists the special characters that are incompatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," and how to escape them."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Character"),(0,r.kt)("th",{parentName:"tr",align:null},"Escape Sequence"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#"),(0,r.kt)("td",{parentName:"tr",align:null},"%23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"%25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&"),(0,r.kt)("td",{parentName:"tr",align:null},"%26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\"),(0,r.kt)("td",{parentName:"tr",align:null},"\\","\\")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"'),(0,r.kt)("td",{parentName:"tr",align:null},"\\",'"')))),(0,r.kt)("h3",{id:"known-limitations"},"Known Limitations"),(0,r.kt)("p",null,"Although filter expressions are a very general mechanism, individual API endpoints will only support filtering on a specific set of fields that are relevant to that endpoint, and will frequently only support a subset of operations for each field. For example, an endpoint might allow filtering on the name field but not support use of the co operator on that field. Consult the documentation for each API endpoint to determine what fields and operators can be used. Attempts to use an unsupported filter expression will result in a 400 Bad Request response."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'/v3/public-identities?filters=email eq "john.doe@example.com"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'/v3/public-identities?filters=firstname sw "john" or email sw "joe"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"not prop1 eq val1 or prop2 eq val2 and prop3 eq val3")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"(not (prop1 eq val1)) or ((prop2 eq val2) and (prop3 eq val3))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"not (prop1 eq val1 or prop2 eq val2) and prop3 eq val3")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"(not ((prop1 eq val1) or (prop2 eq val2))) and (prop3 eq val3)"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spaces in URLs must be escaped with ",(0,r.kt)("inlineCode",{parentName:"p"},"%20"),". Most programming languages, frameworks, libraries, and tools will do this for you, but some won't. In the event that your tool doesn't escape spaces, you will need to format your query as ",(0,r.kt)("inlineCode",{parentName:"p"},'/v3/public-identities?filters=email%20eq%20"john.doe@example.com"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Double quotes may need to be escaped with ",(0,r.kt)("inlineCode",{parentName:"p"},"%22"),". Most programming languages, frameworks, libraries, and tools will do this for you, but some won't. In the event that your tool doesn't escape quotes, you will need to format your query as ",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/public-identities?filters=email%20eq%20%22john.doe@example.com%22"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You must escape spaces in URLs with ",(0,r.kt)("inlineCode",{parentName:"p"},"%20"),". Most programming languages, frameworks, libraries, and tools do this for you, but some do not. In the event that your tool does not escape spaces, you must format your query as ",(0,r.kt)("inlineCode",{parentName:"p"},'/v3/public-identities?filters=email%20eq%20"john.doe@example.com"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unless explicitly noted otherwise, strings are compared lexicographically. Most comparisons are not case sensitive. Any situations where the comparisons are case sensitive will be called out.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Date-times are compared temporally; an earlier date-time is less than a later date-time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The usual precedence and associativity of the composite operators applies, with ",(0,r.kt)("strong",{parentName:"p"},"not")," having higher priority than ",(0,r.kt)("strong",{parentName:"p"},"and"),", which in turn has higher priority than ",(0,r.kt)("strong",{parentName:"p"},"or"),". You can use parentheses to override this precedence.")))),(0,r.kt)("h2",{id:"sorting-results"},"Sorting Results"),(0,r.kt)("p",null,"Result sorting is supported with the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"sorters"),' parameter. Its syntax is a set of comma-separated field names. You may optionally prefix each field name with a "-" character, indicating that the sort is descending based on the value of that field. Otherwise, the sort is ascending.'),(0,r.kt)("p",null,"For example, to sort primarily by ",(0,r.kt)("strong",{parentName:"p"},"type")," in ascending order, and secondarily by ",(0,r.kt)("strong",{parentName:"p"},"modified date")," in descending order, use ",(0,r.kt)("inlineCode",{parentName:"p"},"sorters=type,-modified")),(0,r.kt)("h2",{id:"putting-it-all-together"},"Putting it all Together"),(0,r.kt)("p",null,"Pagination, filters, and sorters can be mixed and match to achieve the desired output for a given collection endpoint. Here are some examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'/v3/public-identities?limit=20&filters=firstname eq "john"&sorters=-name')," returns the first 20 identities that have a first name of John and are sorted in descending order by full name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/v3/account-activities?limit=10&offset=2&sorters=-created")," sorts the results by descending created time, so the most recent activities appear first. The limit and offset returns the 3rd page of this sorted response with 10 records displayed.")))}u.isMDXComponent=!0}}]);