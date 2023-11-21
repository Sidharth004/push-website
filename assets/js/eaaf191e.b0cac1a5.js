"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[21039],{11996:function(n,e,t){t.r(e),t.d(e,{assets:function(){return h},contentTitle:function(){return c},default:function(){return x},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var i=t(85893),r=t(11151),o=t(74866),s=t(85162),d=t(25317);t(23734);const a={id:"docs-notifications-develop-send-notification",title:"Send Notification",hide_title:!0,slug:"./send-notification",displayed_sidebar:"pushNotificationSidebar",sidebar_position:12,image:"/assets/docs/previews/docs_notifications_develop--send_notification.png"},c="Send notification overview",l={id:"notifications/build/docs-notifications-develop-send-notification",title:"Send Notification",description:"This section covers all APIs related to sending notifications from a created channel.",source:"@site/docs/notifications/01-build/12-Develop-Send-Notification.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/send-notification",permalink:"/docs/notifications/build/send-notification",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/01-build/12-Develop-Send-Notification.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"docs-notifications-develop-send-notification",title:"Send Notification",hide_title:!0,slug:"./send-notification",displayed_sidebar:"pushNotificationSidebar",sidebar_position:12,image:"/assets/docs/previews/docs_notifications_develop--send_notification.png"},sidebar:"pushNotificationSidebar",previous:{title:"Types of Notification",permalink:"/docs/notifications/build/types-of-notification"},next:{title:"Send Notification (via Smart Contract)",permalink:"/docs/notifications/build/send-notification-via-smart-contract"}},h={},u=[{value:"Send notification API",id:"send-notification-api",level:2},{value:"Send notification parameters",id:"send-notification-parameters",level:3},{value:"Send notification interface",id:"send-notification-interface",level:3}];function f(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components},{Head:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"send-notification-overview",children:"Send notification overview"}),"\n",(0,i.jsx)(e.p,{children:"This section covers all APIs related to sending notifications from a created channel."}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"Send Notification | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(e.h2,{id:"send-notification-api",children:"Send notification API"}),"\n",(0,i.jsx)(o.Z,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:'// userAlice.channel.send([recipients], {options?})\nconst sendNotifRes = await userAlice.channel.send(["*"], {\n  notification: { title: "test", body: "test" },\n});\n'})})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"send-notification-parameters",children:"Send notification parameters"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Subtype"}),(0,i.jsx)(e.th,{children:"Default"}),(0,i.jsx)(e.th,{children:"Remarks"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)(e.code,{children:"recipients"})})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string[]"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsxs)(e.td,{children:["An array of recipient addresses passed in ",(0,i.jsx)(e.a,{href:"/docs/notifications/important-concepts/#types-of-supported-wallet-address-account",children:"any supported wallet address format"}),". Possible values are: Broadcast -> [*], Targeted -> [0xA], Subset -> [0xA, 0xB], see ",(0,i.jsx)(e.a,{href:"/docs/notifications/build/types-of-notification",children:"types of notifications"})," for more info."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)(e.code,{children:"options"})})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"NotificationOptions"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Configuration options for sending notifications."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)(e.code,{children:"options.notification"})})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"INotification"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"An object containing the notification's title and body. (Mandatory)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)(e.code,{children:"options.notification.title"})})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"The title for the notification. If not provided, it is taken from notification.title."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.em,{children:(0,i.jsx)(e.code,{children:"options.notification.body"})})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"The body of the notification. If not provided, it is taken from notification.body."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.payload"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"IPayload"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"An object containing additional payload information for the notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.payload.title"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"The title for the notification. If not provided, it is taken from notification.title."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.payload.body"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"The body of the notification. If not provided, it is taken from notification.body."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.payload.cta"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Call to action for the notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.payload.embed"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Media information like image/video links"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.payload.category"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Don't pass category if you are sending a generic notification. Notification category represents index point of each individual settings. Pass this if you want to indicate what category of notification you are sending (If channel has settings enabled). For example, if a channel has 10 settings, then a notification of category 7 indicates it's a notification sent for setting 7, if user has turned setting 7 off then Push ndoes will stop notif from getting to the user."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.payload.meta"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"{ domain?: string, type: string, data: string }"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Metadata for the notification, including domain, type, and data."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.config"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"IConfig"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"An object containing configuration options for the notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.config.expiry"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"number"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Expiry time for the notification in seconds"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.config.silent"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"boolean"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Indicates whether the notification is silent."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.config.hidden"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"boolean"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Indicates whether the notification is hidden."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.advanced"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"IAdvance"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"An object containing advanced options for the notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.advanced.graph"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"{ id: string, counter: number }"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Advanced options related to the graph based notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.advanced.ipfs"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"IPFS information for the notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.advanced.minimal"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Minimal Payload type notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.advanced.chatid"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"For chat based notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.advanced.pgpPrivateKey"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"PGP private key for chat based notification."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"options.channel"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"string"})}),(0,i.jsx)(e.td,{children:"-"}),(0,i.jsx)(e.td,{children:"Channel address in CAIP. Mostly used when a delegator sends a notification on behalf of the channel"})]})]})]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Note: Parameters ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(d.Z,{summary:"Expected response",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"// PushAPI.payloads.sendNotification | Response - 204 OK\n"})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"send-notification-interface",children:"Send notification interface"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"interface INotification {\n  title: string;\n  body: string;\n}\n\ninterface IPayload {\n  title?: string;\n  body?: string;\n  cta?: string;\n  embed?: string;\n  category?: number;\n  meta?: {\n    domain?: string;\n    type: string;\n    data: string;\n  };\n}\n\ninterface IConfig {\n  expiry?: number;\n  silent?: boolean;\n  hidden?: boolean;\n}\n\ninterface IAdvanced {\n  graph?: {\n    id: string;\n    counter: number;\n  };\n  ipfs?: string;\n  minimal?: string;\n  chatid?: string;\n  pgpPrivateKey?: string;\n}\n\ninterface NotificationOptions = {\n  notification: INotification;\n  payload?: IPayload;\n  config?: IConfig;\n  advanced?: IAdvance;\n  channel?: string;\n};\n\n// Usage example:\nconst apiResponse: ApiResponse = await userAlice.channel.send(recipients, {\n  // NotificationOptions - as per your given object structure\n});\n"})})]})}function x(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(f,{...n})}):f(n)}},25317:function(n,e,t){t.d(e,{Z:function(){return p}});var i=t(67294),r=t(86010),o=t(63366),s=t(72389),d=t(86043),a={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"},c=t(85893),l=["summary","children"];function h(n){return!!n&&("SUMMARY"===n.tagName||h(n.parentElement))}function u(n,e){return!!n&&(n===e||u(n.parentElement,e))}function f(n){var e=n.summary,t=n.children,f=(0,o.Z)(n,l),x=(0,s.Z)(),j=(0,i.useRef)(null),p=(0,d.u)({initialState:!f.open}),b=p.collapsed,m=p.setCollapsed,v=(0,i.useState)(f.open),g=v[0],y=v[1],w=i.isValidElement(e)?e:(0,c.jsx)("summary",{children:null!=e?e:"Details"});return(0,c.jsxs)("details",Object.assign({},f,{ref:j,open:g,"data-collapsed":b,className:(0,r.default)(a.details,x&&a.isBrowser,f.className),onMouseDown:function(n){h(n.target)&&n.detail>1&&n.preventDefault()},onClick:function(n){n.stopPropagation();var e=n.target;h(e)&&u(e,j.current)&&(n.preventDefault(),b?(m(!1),y(!0)):m(!0))},children:[w,(0,c.jsx)(d.z,{lazy:!1,collapsed:b,disableSSRStyle:!0,onCollapseTransitionEnd:function(n){m(n),y(!n)},children:(0,c.jsx)("div",{className:a.collapsibleContent,children:t})})]}))}var x={details:"details_b_Ee"},j="alert alert--info";function p(n){var e=Object.assign({},(function(n){if(null==n)throw new TypeError("Cannot destructure "+n)}(n),n));return(0,c.jsx)(f,Object.assign({},e,{className:(0,r.default)(j,x.details,e.className)}))}},85162:function(n,e,t){t.d(e,{Z:function(){return s}});t(67294);var i=t(86010),r={tabItem:"tabItem_Ymn6"},o=t(85893);function s(n){var e=n.children,t=n.hidden,s=n.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.default)(r.tabItem,s),hidden:t,children:e})}},74866:function(n,e,t){t.d(e,{Z:function(){return w}});var i=t(67294),r=t(86010),o=t(12466),s=t(16550),d=t(20469),a=t(91980),c=t(67392),l=t(50012);function h(n){var e,t;return null!==(e=null===(t=i.Children.toArray(n).filter((function(n){return"\n"!==n})).map((function(n){if(!n||(0,i.isValidElement)(n)&&((e=n.props)&&"object"==typeof e&&"value"in e))return n;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==e?e:[]}function u(n){var e=n.values,t=n.children;return(0,i.useMemo)((function(){var n=null!=e?e:function(n){return h(n).map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}(t);return function(n){var e=(0,c.l)(n,(function(n,e){return n.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function f(n){var e=n.value;return n.tabValues.some((function(n){return n.value===e}))}function x(n){var e=n.queryString,t=void 0!==e&&e,r=n.groupId,o=(0,s.k6)(),d=function(n){var e=n.queryString,t=void 0!==e&&e,i=n.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:t,groupId:r});return[(0,a._X)(d),(0,i.useCallback)((function(n){if(d){var e=new URLSearchParams(o.location.search);e.set(d,n),o.replace(Object.assign({},o.location,{search:e.toString()}))}}),[d,o])]}function j(n){var e,t,r,o,s=n.defaultValue,a=n.queryString,c=void 0!==a&&a,h=n.groupId,j=u(n),p=(0,i.useState)((function(){return function(n){var e,t=n.defaultValue,i=n.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!==(e=i.find((function(n){return n.default})))&&void 0!==e?e:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:j})})),b=p[0],m=p[1],v=x({queryString:c,groupId:h}),g=v[0],y=v[1],w=(e=function(n){return n?"docusaurus.tab."+n:null}({groupId:h}.groupId),t=(0,l.Nk)(e),r=t[0],o=t[1],[r,(0,i.useCallback)((function(n){e&&o.set(n)}),[e,o])]),I=w[0],N=w[1],S=function(){var n=null!=g?g:I;return f({value:n,tabValues:j})?n:null}();return(0,d.Z)((function(){S&&m(S)}),[S]),{selectedValue:b,selectValue:(0,i.useCallback)((function(n){if(!f({value:n,tabValues:j}))throw new Error("Can't select invalid tab value="+n);m(n),y(n),N(n)}),[y,N,j]),tabValues:j}}var p=t(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},m=t(85893);function v(n){var e=n.className,t=n.block,i=n.selectedValue,s=n.selectValue,d=n.tabValues,a=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,l=function(n){var e=n.currentTarget,t=a.indexOf(e),r=d[t].value;r!==i&&(c(e),s(r))},h=function(n){var e,t=null;switch(n.key){case"Enter":l(n);break;case"ArrowRight":var i,r=a.indexOf(n.currentTarget)+1;t=null!==(i=a[r])&&void 0!==i?i:a[0];break;case"ArrowLeft":var o,s=a.indexOf(n.currentTarget)-1;t=null!==(o=a[s])&&void 0!==o?o:a[a.length-1]}null===(e=t)||void 0===e||e.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":t},e),children:d.map((function(n){var e=n.value,t=n.label,o=n.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:function(n){return a.push(n)},onKeyDown:h,onClick:l},o,{className:(0,r.default)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===e}),children:null!=t?t:e}),e)}))})}function g(n){var e=n.lazy,t=n.children,r=n.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){var s=o.find((function(n){return n.props.value===r}));return s?(0,i.cloneElement)(s,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map((function(n,e){return(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==r})}))})}function y(n){var e=j(n);return(0,m.jsxs)("div",{className:(0,r.default)("tabs-container",b.tabList),children:[(0,m.jsx)(v,Object.assign({},n,e)),(0,m.jsx)(g,Object.assign({},n,e))]})}function w(n){var e=(0,p.Z)();return(0,m.jsx)(y,Object.assign({},n,{children:h(n.children)}),String(e))}},11151:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return s}});var i=t(67294);const r={},o=i.createContext(r);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);