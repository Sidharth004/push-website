"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[26074],{46128:function(e,t,s){s.r(t),s.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var n=s(85893),a=s(11151),i=s(1277);const r={id:"docs-chat-message-types-section",title:"Message Types",hide_title:!0,slug:"./message-types",displayed_sidebar:"pushChatSidebar",sidebar_position:91,image:"/assets/docs/previews/docs_chat__section--message_types.png"},o="Intro to Message Types",c={id:"chat/docs-chat-message-types-section",title:"Message Types",description:"Each message of Push Chat is a json payload that carries with it a message type and some parameters that enable each frontend that integrates Push Chat to understand and display various message types.",source:"@site/docs/chat/102-Message-Types-Section.mdx",sourceDirName:"chat",slug:"/chat/message-types",permalink:"/docs/chat/message-types",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/chat/102-Message-Types-Section.mdx",tags:[],version:"current",sidebarPosition:91,frontMatter:{id:"docs-chat-message-types-section",title:"Message Types",hide_title:!0,slug:"./message-types",displayed_sidebar:"pushChatSidebar",sidebar_position:91,image:"/assets/docs/previews/docs_chat__section--message_types.png"},sidebar:"pushChatSidebar",previous:{title:"All API Calls",permalink:"/docs/chat/build/all-api-calls"},next:{title:"Text",permalink:"/docs/chat/message-types/text"}},d={},u=[];function l(e){const t={code:"code",h1:"h1",p:"p",...(0,a.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"intro-to-message-types",children:"Intro to Message Types"}),"\n",(0,n.jsx)(t.p,{children:"Each message of Push Chat is a json payload that carries with it a message type and some parameters that enable each frontend that integrates Push Chat to understand and display various message types."}),"\n",(0,n.jsxs)(t.p,{children:["Push Chat supports an evergrowing list message types, all of which can be sent by ",(0,n.jsx)(t.code,{children:"chat.send"}),", though some require passing few additional parameters."]}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)("title",{children:"Intro to Message Types | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,n.jsx)(i.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1277:function(e,t,s){s.d(t,{Z:function(){return f}});s(67294);var n=s(86010),a=s(53791),i=s(39960),r=s(95999),o={cardContainer:"cardContainer_VPOR",cardTitle:"cardTitle_deVx",cardDescription:"cardDescription_crxe"},c=s(85893);function d(e){var t=e.href,s=e.children;return(0,c.jsx)(i.Z,{href:t,className:(0,n.default)("card padding--lg",o.cardContainer),children:s})}function u(e){var t=e.href,s=e.icon,a=e.title,i=e.description;return(0,c.jsxs)(d,{href:t,children:[(0,c.jsxs)("h2",{className:(0,n.default)("text--truncate",o.cardTitle),title:a,children:[s," ",a]}),i&&(0,c.jsx)("p",{className:(0,n.default)("text--truncate",o.cardDescription),title:i,children:i})]})}function l(e){var t,s=e.item;return(0,c.jsx)(u,{icon:"\ud83d\uddc3\ufe0f",title:s.label,description:null!==(t=s.description)&&void 0!==t?t:(0,r.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})})}function h(e){var t,s,n=e.item,i=(0,a.xz)(null!==(t=n.docId)&&void 0!==t?t:void 0);return(0,c.jsx)(u,{href:n.href,icon:"",title:n.label,description:null!==(s=n.description)&&void 0!==s?s:null==i?void 0:i.description})}function p(e){var t=e.item;switch(t.type){case"link":return(0,c.jsx)(h,{item:t});case"category":return(0,c.jsx)(l,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function m(e){var t=e.className,s=(0,a.jA)();return(0,c.jsx)(f,{items:s.items,className:t})}function f(e){var t=e.items,s=e.className;if(!t)return(0,c.jsx)(m,Object.assign({},e));var i=(0,a.MN)(t);return(0,c.jsx)("section",{className:(0,n.default)("row",s),children:i.map((function(e,t){return(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(p,{item:e})},t)}))})}},11151:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return r}});var n=s(67294);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);