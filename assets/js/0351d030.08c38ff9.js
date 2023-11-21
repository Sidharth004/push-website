"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[26583],{95504:function(n,t,e){e.r(t),e.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var i=e(85893),a=e(11151),o=e(74866),s=e(85162);const r={id:"docs-notifications-ns-notif-standards-basic",title:"Notification Standards (Basic)",hide_title:!0,slug:"./notification-standards-basic",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications_ns_notif_standards_basic--notification_standards_(basic).png"},c="Notification Standards Overview",d={id:"notifications/notification-standards/docs-notifications-ns-notif-standards-basic",title:"Notification Standards (Basic)",description:"All notifications passed to the network are eventually transformed to JSON payload. The following glossaries help cover some of the basics that can help in understanding what is happening and how to customize the behavior.",source:"@site/docs/notifications/06-notification-standards/01-Notification-Standards-Basic.mdx",sourceDirName:"notifications/06-notification-standards",slug:"/notifications/notification-standards/notification-standards-basic",permalink:"/docs/notifications/notification-standards/notification-standards-basic",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/06-notification-standards/01-Notification-Standards-Basic.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-notifications-ns-notif-standards-basic",title:"Notification Standards (Basic)",hide_title:!0,slug:"./notification-standards-basic",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications_ns_notif_standards_basic--notification_standards_(basic).png"},sidebar:"pushNotificationSidebar",previous:{title:"Notification Standards",permalink:"/docs/notifications/notification-standards"},next:{title:"Notification Standards (Advance)",permalink:"/docs/notifications/notification-standards/notification-standards-advance"}},l={},u=[{value:"Important glossaries",id:"important-glossaries",level:2},{value:"Sending notification examples",id:"sending-notification-examples",level:2}];function h(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components},{Head:e}=t;return e||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"notification-standards-overview",children:"Notification Standards Overview"}),"\n",(0,i.jsx)(t.p,{children:"All notifications passed to the network are eventually transformed to JSON payload. The following glossaries help cover some of the basics that can help in understanding what is happening and how to customize the behavior."}),"\n",(0,i.jsx)(e,{children:(0,i.jsx)("title",{children:"Notification Standards (Basic) | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(t.h2,{id:"important-glossaries",children:"Important glossaries"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Verification Proof"})," - Each notification sent carries with itself a verification proof that allows the network to validate that the notification is coming from a channel or one of it's delegate."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Verification Proof is handled automatically by the SDK but you if you want to, you can read about it ",(0,i.jsx)(t.a,{href:"docs/notifications/notification-standards/notification-standards-advance/#notification-verification-proof",title:"post explaining notification verification proof in Push protocol",children:"over here"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notification Identity"})," - Each notification passed to the network is actually an identity which defines how the notification is formatted, where it's stored, etc."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Notification identity is abstracted away by the SDK except when invoking directly from your smart contracts. Advance section has detailed explaination about ",(0,i.jsx)(t.a,{href:"docs/notifications/notification-standards/notification-standards-advance/#notification-identity",title:"post explaining notification identity in Push protocol",children:"Notification Identity"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Identity Type"})," - Defines the format in which the notification json payload is sent to the network. Common types you need to know about."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Identity Type"}),(0,i.jsx)(t.th,{children:"Remarks"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Minimal"}),(0,i.jsx)(t.td,{children:"Recommended for Smart Contract"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Direct Payload"}),(0,i.jsx)(t.td,{children:"Recommended for PUSH SDK"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notification Type"})," - Defines the type of notification that is sent:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Broadcast (Type 1) - Is sent out to all the users who have opted in to your channel"}),"\n",(0,i.jsx)(t.li,{children:"Targeted (Type 3) - Is sent out to an individual user"}),"\n",(0,i.jsx)(t.li,{children:"Subset (Type 4) - Is sent out to a subset of users of your channel"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notification Content"})," - Defines the notification content which consists of:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Notification JSON Object - What is shown on your home screen"}),"\n",(0,i.jsx)(t.li,{children:"Payload JSON Object - What is shown and stored on your feed"}),"\n",(0,i.jsx)(t.li,{children:"Recipients - 0x0 for type 1 (broadcast), 0xTarget for type 3 (Targeted) and [0x01, 0x02, 0x03, ..., 0xN] for type 4 (Subset)"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'  // Example Raw Content for targeted notifcation, abstracted away by SDK\n  {\n    "notification": {\n      "title": "The title of your message displayed on screen (50 Chars)",\n      "body": "The intended message displayed on screen (180 Chars)"\n    },\n    "data": { // Is defined as payload most of the time\n      "type": "3" // notification type\n      "sectype": null // enables encrypted notifications\n      "asub": "[Optional] The subject of the message displayed inside app (80 Chars)",\n      "amsg": "[Optional] The intended message displayed inside app (500 Chars)",\n      "acta": "[Optional] The cta link parsed inside the app",\n      "aimg": "[Optional] The image url which is shown inside the app",\n      "etime": "[Optional] if given, notif will be deleted after this in epoch"\n      "hidden" :"[Optional] if given, notif will not show in user feed"\n    },\n      "recipients": 0xtarget\n  }\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["These concepts are for your understanding as most of them are abstracted away but if you wish to dive deeper then read more about ",(0,i.jsx)(t.a,{href:"docs/notifications/notification-standards/notification-standards-advance/#notification-payload",title:"post explaining notification payload in in Push protocol",children:"notification payload here"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Content Markdown"})," - Defines how the content markdown should be passed to enable variety of notifications. Covered in detail in the advanced section - ",(0,i.jsx)(t.a,{href:"docs/notifications/notification-standards/notification-standards-advance/#notification-content",title:"post explaining notification content and how to customize it in in Push protocol",children:"Notification Content"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Sender"})," - Defines who is sending the message. The sender is the channel address or the alias address. The address should be represented in chain specific format as ",(0,i.jsx)(t.a,{href:"/docs/notifications/important-concepts/#chain-specific-wallet-address",title:"About chain specific wallet address",children:"depicted over here"})]}),"\n",(0,i.jsx)(t.p,{children:"Examples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ethereum(Mainnet): ",(0,i.jsx)(t.code,{children:"eip155:1:<Address>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Ethereum(Goerli): ",(0,i.jsx)(t.code,{children:"eip155:42:<Address>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Polygon(Mumbai): ",(0,i.jsx)(t.code,{children:"eip155:80001:<Address>"})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["One exception to chain specific format is for smart contract to smart contract interaction (ie: ",(0,i.jsx)(t.a,{href:"/docs/notifications/build/send-notification-via-smart-contract/",title:"Send notification via smart contract",children:"Send Notification (via smart contract)"}),"), For this specific feature, the native blockchain address is required and not chain specific format."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Source"})," - The source from which the notification is coming from. Currently supports ",(0,i.jsx)(t.code,{children:"ETH_MAINNET"}),", ",(0,i.jsx)(t.code,{children:"POLYGON_MAINNET"}),", ",(0,i.jsx)(t.code,{children:"BNB_MAINNET"}),", ",(0,i.jsx)(t.code,{children:"ARB_MAINNET"}),", ",(0,i.jsx)(t.code,{children:"THE_GRAPH"}),", ",(0,i.jsx)(t.code,{children:"ETH_TEST_SEPOLIA"})," ",(0,i.jsx)(t.code,{children:"ETH_TEST_GOERLI"}),", ",(0,i.jsx)(t.code,{children:"POLYGON_TESTNET"}),", ",(0,i.jsx)(t.code,{children:"BNB_TESTNET"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Source is determined ",(0,i.jsx)(t.a,{href:"http://localhost:3000/docs/notifications/build/initialize-user/",title:"Initialize User Push SDK",children:"by the chain at which the user is inititialized"})," from Push SDK, by the network it is coming from in case of smart contracts."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Recipient(s)"})," - The address to the notification should reach. Push supports multiple address formats as ",(0,i.jsx)(t.a,{href:"/docs/notifications/important-concepts/#types-of-supported-wallet-address-account",title:"learn about all supported wallet address account",children:"depicted over here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Few examples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ethereum(Mainnet): ",(0,i.jsx)(t.code,{children:"eip155:1:<Address>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Ethereum(Sepolia): ",(0,i.jsx)(t.code,{children:"eip155:11155111:<Address>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Polygon(Mumbai): ",(0,i.jsx)(t.code,{children:"eip155:80001:<Address>"})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["One exception to address format support is for smart contract to smart contract interaction (ie: ",(0,i.jsx)(t.a,{href:"/docs/notifications/build/send-notification-via-smart-contract/",title:"Send notification via smart contract",children:"Send Notification (via smart contract)"}),"), For this specific feature, the native blockchain address is required. for example: ",(0,i.jsx)(t.code,{children:"0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"sending-notification-examples",children:"Sending notification examples"}),"\n",(0,i.jsxs)(o.Z,{groupId:"notification-examples",children:[(0,i.jsx)(s.Z,{value:"Push SDK",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'// userAlice.channel.send([recipients], {options?})\n// to send a broadcast notification - pass \'*\' in recipients array\nconst broadcastNotif = await userAlice.channel.send(["*"], {\n  notification: { title: "test", body: "test" },\n});\n\n// userAlice.channel.send([recipients], {options?})\n// to send a targeted notification - pass that single wallet address in recipients array\nconst targetedNotif = await userAlice.channel.send(\n  ["0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"],\n  {\n    notification: {\n      title: "test",\n      body: "test",\n    },\n  },\n);\n\n// userAlice.channel.send([recipients], {options?})\n// to send a subset notification - pass the list of wallet address in recipients array\nconst subsetNotif = await userAlice.channel.send(\n  [randomWallet1, randomWallet2, randomWallet3],\n  {\n    notification: {\n      title: "test",\n      body: "test",\n    },\n  },\n);\n'})})}),(0,i.jsxs)(s.Z,{value:"Smart Contract",default:!0,children:[(0,i.jsx)(t.p,{children:"While any Notification Identity can be passed in any of the interactions, It's recommended to start with Identity Type 0 (Minimal) for smart contracts."}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Format:"})," ",(0,i.jsx)(t.code,{children:"0+<Notification Type>+<Title>+<Body>"})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"What to call:"})," ",(0,i.jsx)(t.code,{children:"sendNotification(address _channel, address _recipient, bytes calldata _identity)"})]}),(0,i.jsxs)(t.p,{children:["**Additional Rules: **\nNotification Type 1 (Broadcast): Pass recipient as _channel\nNotification Type 3 (Targeted): Pass recipient as intended recipient\nNotification Type 4 (Subset): ",(0,i.jsx)(t.strong,{children:"Not supported yet"})]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example:"})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:'IPUSHCommInterface(EPNS_COMM_CONTRACT_ADDRESS_FOR_SPECIFIC_BLOCKCHAIN).sendNotification(\n  YOUR_CHANNEL_ADDRESS, // from channel - recommended to set channel via dApp and put it\'s value -> then once contract is deployed, go back and add the contract address as delegate for your channel\n  to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targeted put the address to which you want to send\n  bytes(\n      string(\n          // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity\n          abi.encodePacked(\n              "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity\n              "+", // segregator\n              "3", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)\n              "+", // segregator\n              "Title", // this is notification title\n              "+", // segregator\n              "Body" // notification body\n          )\n      )\n  )\n);\n'})})]})]})]})}function f(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},85162:function(n,t,e){e.d(t,{Z:function(){return s}});e(67294);var i=e(86010),a={tabItem:"tabItem_Ymn6"},o=e(85893);function s(n){var t=n.children,e=n.hidden,s=n.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.default)(a.tabItem,s),hidden:e,children:t})}},74866:function(n,t,e){e.d(t,{Z:function(){return w}});var i=e(67294),a=e(86010),o=e(12466),s=e(16550),r=e(20469),c=e(91980),d=e(67392),l=e(50012);function u(n){var t,e;return null!==(t=null===(e=i.Children.toArray(n).filter((function(n){return"\n"!==n})).map((function(n){if(!n||(0,i.isValidElement)(n)&&((t=n.props)&&"object"==typeof t&&"value"in t))return n;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==t?t:[]}function h(n){var t=n.values,e=n.children;return(0,i.useMemo)((function(){var n=null!=t?t:function(n){return u(n).map((function(n){var t=n.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(e);return function(n){var t=(0,d.l)(n,(function(n,t){return n.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[t,e])}function f(n){var t=n.value;return n.tabValues.some((function(n){return n.value===t}))}function p(n){var t=n.queryString,e=void 0!==t&&t,a=n.groupId,o=(0,s.k6)(),r=function(n){var t=n.queryString,e=void 0!==t&&t,i=n.groupId;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:e,groupId:a});return[(0,c._X)(r),(0,i.useCallback)((function(n){if(r){var t=new URLSearchParams(o.location.search);t.set(r,n),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[r,o])]}function m(n){var t,e,a,o,s=n.defaultValue,c=n.queryString,d=void 0!==c&&c,u=n.groupId,m=h(n),x=(0,i.useState)((function(){return function(n){var t,e=n.defaultValue,i=n.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+e+'" but none of its children has the corresponding value. Available values are: '+i.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return e}var a=null!==(t=i.find((function(n){return n.default})))&&void 0!==t?t:i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),b=x[0],j=x[1],y=p({queryString:d,groupId:u}),v=y[0],g=y[1],w=(t=function(n){return n?"docusaurus.tab."+n:null}({groupId:u}.groupId),e=(0,l.Nk)(t),a=e[0],o=e[1],[a,(0,i.useCallback)((function(n){t&&o.set(n)}),[t,o])]),N=w[0],T=w[1],S=function(){var n=null!=v?v:N;return f({value:n,tabValues:m})?n:null}();return(0,r.Z)((function(){S&&j(S)}),[S]),{selectedValue:b,selectValue:(0,i.useCallback)((function(n){if(!f({value:n,tabValues:m}))throw new Error("Can't select invalid tab value="+n);j(n),g(n),T(n)}),[g,T,m]),tabValues:m}}var x=e(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=e(85893);function y(n){var t=n.className,e=n.block,i=n.selectedValue,s=n.selectValue,r=n.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,l=function(n){var t=n.currentTarget,e=c.indexOf(t),a=r[e].value;a!==i&&(d(t),s(a))},u=function(n){var t,e=null;switch(n.key){case"Enter":l(n);break;case"ArrowRight":var i,a=c.indexOf(n.currentTarget)+1;e=null!==(i=c[a])&&void 0!==i?i:c[0];break;case"ArrowLeft":var o,s=c.indexOf(n.currentTarget)-1;e=null!==(o=c[s])&&void 0!==o?o:c[c.length-1]}null===(t=e)||void 0===t||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":e},t),children:r.map((function(n){var t=n.value,e=n.label,o=n.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:function(n){return c.push(n)},onKeyDown:u,onClick:l},o,{className:(0,a.default)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t}),children:null!=e?e:t}),t)}))})}function v(n){var t=n.lazy,e=n.children,a=n.selectedValue,o=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){var s=o.find((function(n){return n.props.value===a}));return s?(0,i.cloneElement)(s,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map((function(n,t){return(0,i.cloneElement)(n,{key:t,hidden:n.props.value!==a})}))})}function g(n){var t=m(n);return(0,j.jsxs)("div",{className:(0,a.default)("tabs-container",b.tabList),children:[(0,j.jsx)(y,Object.assign({},n,t)),(0,j.jsx)(v,Object.assign({},n,t))]})}function w(n){var t=(0,x.Z)();return(0,j.jsx)(g,Object.assign({},n,{children:u(n.children)}),String(t))}},11151:function(n,t,e){e.d(t,{Z:function(){return r},a:function(){return s}});var i=e(67294);const a={},o=i.createContext(a);function s(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);