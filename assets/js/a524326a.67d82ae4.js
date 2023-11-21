"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[45138],{20735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var s=n(85893),r=n(11151),a=n(74866),i=n(85162),o=n(25317),l=n(23734);const d={id:"docs-chat-develop-send-message",title:"Send Message",hide_title:!0,slug:"./send-message",displayed_sidebar:"pushChatSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_chat_develop--send_message.png"},c="Send message overview",u={id:"chat/build/docs-chat-develop-send-message",title:"Send Message",description:"Push Chat doesn't require a user to be on the network for you to send message \ud83d\ude00. Instead, it gives you the freedom to send a nudge to an account or a message (or a meme).",source:"@site/docs/chat/01-build/05-Develop-Send-Message.mdx",sourceDirName:"chat/01-build",slug:"/chat/build/send-message",permalink:"/docs/chat/build/send-message",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/chat/01-build/05-Develop-Send-Message.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"docs-chat-develop-send-message",title:"Send Message",hide_title:!0,slug:"./send-message",displayed_sidebar:"pushChatSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_chat_develop--send_message.png"},sidebar:"pushChatSidebar",previous:{title:"Chat Requests",permalink:"/docs/chat/build/chat-requests"},next:{title:"Types of Recipient",permalink:"/docs/chat/build/types-of-recipient"}},h={},m=[{value:"Send message API",id:"send-message-api",level:2},{value:"Send message parameters",id:"send-message-parameters",level:3},{value:"Sending images, payments, reactions, etc",id:"sending-images-payments-reactions-etc",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"send-message-overview",children:"Send message overview"}),"\n",(0,s.jsx)(t.p,{children:"Push Chat doesn't require a user to be on the network for you to send message \ud83d\ude00. Instead, it gives you the freedom to send a nudge to an account or a message (or a meme)."}),"\n",(0,s.jsx)(t.p,{children:"Every chat message sent from Push is completely E2EE. The only exception to this is when a message is sent to the user that is not yet on the Push network. Push leaves it up to the developers to decide on how they want this to be: Send non-encrypted message, empty nudge or only send message to onboarded user (which will always be E2EE)."}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("title",{children:"Send message | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,s.jsx)(t.h2,{id:"send-message-api",children:"Send message API"}),"\n",(0,s.jsx)(a.Z,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(i.Z,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// userAlice.chat.send(recipient, {message})\n// recipient - Can be wallet address, nft address or chatid | See Types of Recipient for more info\n// message - Can be modified to send various types of messages like Images, Reactions, etc\nconst aliceMessagesBob = await userAlice.chat.send(bobAccount, {\n  type: "Text",\n  content: "Hello Bob!",\n});\n'})})})}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(l.iA,{href:"/chat/message-types/",children:"Message Types"})," to understand how ",(0,s.jsx)(t.code,{children:"message"})," object can be customized to send variety of messages."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"send-message-parameters",children:"Send message parameters"}),"\n",(0,s.jsx)(t.p,{children:"When sending a message, you can customize the following params"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Subtype"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"recipient"})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/docs/chat/build/types-of-recipient",children:"Recipient supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses or even chatid which is useful for groups"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"message"})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"object"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"Configuration for message to be sent"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"message.type"})})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"Text"}),", ",(0,s.jsx)(t.code,{children:"Image"}),", ",(0,s.jsx)(t.code,{children:"File"}),", ",(0,s.jsx)(t.code,{children:"MediaEmbed"}),", etc"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Text"})}),(0,s.jsxs)(t.td,{children:["Type of message, see ",(0,s.jsx)(t.a,{href:"/docs/chat/message-types",children:"Message Types"})," for passing specific parameters based on message type"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"message.content"})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"Message Content"})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note: Parameters ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,s.jsx)(o.Z,{summary:"Expected response",children:"200 OK"}),"\n",(0,s.jsx)(t.h2,{id:"sending-images-payments-reactions-etc",children:"Sending images, payments, reactions, etc"}),"\n",(0,s.jsxs)(t.p,{children:["The second parameter of ",(0,s.jsx)(t.code,{children:"chat.send"})," contains the ",(0,s.jsx)(t.code,{children:"message"})," object that can be customized to send an evergrowing types of supported formats from the protocol."]}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(l.iA,{href:"/docs/chat/message-types/",children:"Message Types"})," to understand how ",(0,s.jsx)(t.code,{children:"message"})," object can be customized to send variety of messages."]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25317:function(e,t,n){n.d(t,{Z:function(){return b}});var s=n(67294),r=n(86010),a=n(63366),i=n(72389),o=n(86043),l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"},d=n(85893),c=["summary","children"];function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function m(e){var t=e.summary,n=e.children,m=(0,a.Z)(e,c),p=(0,i.Z)(),f=(0,s.useRef)(null),b=(0,o.u)({initialState:!m.open}),g=b.collapsed,v=b.setCollapsed,x=(0,s.useState)(m.open),j=x[0],y=x[1],w=s.isValidElement(t)?t:(0,d.jsx)("summary",{children:null!=t?t:"Details"});return(0,d.jsxs)("details",Object.assign({},m,{ref:f,open:j,"data-collapsed":g,className:(0,r.default)(l.details,p&&l.isBrowser,m.className),onMouseDown:function(e){u(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;u(t)&&h(t,f.current)&&(e.preventDefault(),g?(v(!1),y(!0)):v(!0))},children:[w,(0,d.jsx)(o.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){v(e),y(!e)},children:(0,d.jsx)("div",{className:l.collapsibleContent,children:n})})]}))}var p={details:"details_b_Ee"},f="alert alert--info";function b(e){var t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,d.jsx)(m,Object.assign({},t,{className:(0,r.default)(f,p.details,t.className)}))}},85162:function(e,t,n){n.d(t,{Z:function(){return i}});n(67294);var s=n(86010),r={tabItem:"tabItem_Ymn6"},a=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.default)(r.tabItem,i),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var s=n(67294),r=n(86010),a=n(12466),i=n(16550),o=n(20469),l=n(91980),d=n(67392),c=n(50012);function u(e){var t,n;return null!==(t=null===(n=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){var t=e.values,n=e.children;return(0,s.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,s.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function f(e){var t,n,r,a,i=e.defaultValue,l=e.queryString,d=void 0!==l&&l,u=e.groupId,f=h(e),b=(0,s.useState)((function(){return function(e){var t,n=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!==(t=s.find((function(e){return e.default})))&&void 0!==t?t:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),g=b[0],v=b[1],x=p({queryString:d,groupId:u}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),r=n[0],a=n[1],[r,(0,s.useCallback)((function(e){t&&a.set(e)}),[t,a])]),S=w[0],E=w[1],k=function(){var e=null!=j?j:S;return m({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){k&&v(k)}),[k]),{selectedValue:g,selectValue:(0,s.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),E(e)}),[y,E,f]),tabValues:f}}var b=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=n(85893);function x(e){var t=e.className,n=e.block,s=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],d=(0,a.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(d(t),i(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var s,r=l.indexOf(e.currentTarget)+1;n=null!==(s=l[r])&&void 0!==s?s:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;n=null!==(a=l[i])&&void 0!==a?a:l[l.length-1]}null===(t=n)||void 0===t||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:function(e){return l.push(e)},onKeyDown:u,onClick:c},a,{className:(0,r.default)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===r}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=f(e);return(0,v.jsxs)("div",{className:(0,r.default)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},e,t)),(0,v.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,b.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var s=n(67294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);