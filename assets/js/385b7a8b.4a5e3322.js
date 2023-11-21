"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[72326],{98694:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=t(85893),i=t(11151),r=t(74866),s=t(85162);const o={id:"docs-chat-develop-all-api-calls",title:"All API Calls",hide_title:!0,slug:"./all-api-calls",displayed_sidebar:"pushChatSidebar",sidebar_position:13,image:"/assets/docs/previews/docs_chat_develop--all_api_calls.png"},l="All API Calls",c={id:"chat/build/docs-chat-develop-all-api-calls",title:"All API Calls",description:"This tutorial is designed to get you up and going by providing a step wise guide to use and explore the Push SDK.",source:"@site/docs/chat/01-build/13-All-API-Calls.mdx",sourceDirName:"chat/01-build",slug:"/chat/build/all-api-calls",permalink:"/docs/chat/build/all-api-calls",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/chat/01-build/13-All-API-Calls.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"docs-chat-develop-all-api-calls",title:"All API Calls",hide_title:!0,slug:"./all-api-calls",displayed_sidebar:"pushChatSidebar",sidebar_position:13,image:"/assets/docs/previews/docs_chat_develop--all_api_calls.png"},sidebar:"pushChatSidebar",previous:{title:"Stream Chat",permalink:"/docs/chat/build/stream-chat"},next:{title:"Message Types",permalink:"/docs/chat/message-types"}},u={},d=[{value:"Step 1 - Setup and Installation",id:"step-1---setup-and-installation",level:2},{value:"Step 2 - Initialize User",id:"step-2---initialize-user",level:2},{value:"Step 3 - Navigating User Profile Functionality",id:"step-3---navigating-user-profile-functionality",level:2},{value:"Step 4 - Navigating Chat Functionality",id:"step-4---navigating-chat-functionality",level:2},{value:"Step 5 - Navigating Group Chat Functionality",id:"step-5---navigating-group-chat-functionality",level:2},{value:"Step 6 - Navigating User Encryption Functionality",id:"step-6---navigating-user-encryption-functionality",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"all-api-calls",children:"All API Calls"}),"\n",(0,a.jsx)(n.p,{children:"This tutorial is designed to get you up and going by providing a step wise guide to use and explore the Push SDK."}),"\n",(0,a.jsx)(t,{children:(0,a.jsx)("title",{children:"Push SDK APIs playground tutorial | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"step-1---setup-and-installation",children:"Step 1 - Setup and Installation"}),"\n",(0,a.jsx)(n.p,{children:"Start by setting up the project environment and installing the SDK and its required peer dependencies ( ethersV5 )."}),"\n",(0,a.jsx)(n.p,{children:"** Note - ** For this tutorial we will be using plain Javascript"}),"\n",(0,a.jsx)(r.Z,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"# Create Project Directory\nmkdir push-sdk-tutorial\n\n# Navigate to Project Directory\ncd push-sdk-tutorial\n\n# Initialize Project\nnpm init -y\n\n# Create index.mjs File\ntouch index.mjs\n\n# Install Required Libraries\nnpm install @pushprotocol/restapi@latest @pushprotocol/socket@latest ethers@^5.7\n\n"})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-2---initialize-user",children:"Step 2 - Initialize User"}),"\n",(0,a.jsx)(n.p,{children:"Initialization is a crucial step before utilizing the SDK. It involves creating a Push Profile for new users or re-authenticating and decrypting keys for existing users."}),"\n",(0,a.jsx)(r.Z,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// index.mjs\n\nimport { PushAPI, CONSTANTS } from "@pushprotocol/restapi";\nimport { ethers } from "ethers";\n\n/**\n * Private key of the user can be exported from any wallet such as Metamask\n * Note - One should use a .env file to store the private key and make sure it is not committed to the repository\n * Ideal code - const signer = new ethers.Wallet(`0x${prcoess.env.PRIVATE_KEY}`)\n * For this tutorial we will be using a random private key\n */\nconst aliceSigner = new ethers.Wallet.createRandom();\nconst aliceAddress = await aliceSigner.getAddress();\n\nconst bobSigner = new ethers.Wallet.createRandom();\nconst bobAddress = await bobSigner.getAddress();\n\n/** Initialization */\nconst userAlice = await PushAPI.initialize(aliceSigner, { env: "prod" });\nconst userBob = await PushAPI.initialize(bobSigner, { env: "prod" });\n\n/** Get details of the initialized user */\nconst userAliceInfo = await userAlice.info();\n'})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-3---navigating-user-profile-functionality",children:"Step 3 - Navigating User Profile Functionality"}),"\n",(0,a.jsx)(n.p,{children:"Push SDK provides getters and setters related to the user's profile, which can be utilized to display user profile information in your UI and enable users to change their profile information effortlessly."}),"\n",(0,a.jsx)(r.Z,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// index.mjs\n...\n...\n\n/**\n * User Profile Functions\n */\n\n/** Get Profile Info such as name, image etc */\nconst userAliceProfileInfo = await userAlice.profile.info()\n\n/** Set Profile Info such as name, image etc */\nconst updatedUserAliceProfileInfo = await userAlice.profile.update({\n  name: 'Alice',\n})\n"})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-4---navigating-chat-functionality",children:"Step 4 - Navigating Chat Functionality"}),"\n",(0,a.jsx)(n.p,{children:"Push SDK provides various functions for sending chat messages, receiving, accepting or rejecting chat invites"}),"\n",(0,a.jsx)(r.Z,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// index.mjs\n...\n...\n/**\n * Push Chat Functions\n */\n\n/** Send Chat message to another user */\n// Note - This message will be sent as a request to the receiver who needs to accept or reject it\nconst aliceMessagesBob = await userAlice.chat.send(bobAddress, {\n  content: 'Gm Gm !!!',\n  type: 'Text',\n})\n\n/** Get list of all chats done by user */\nconst userAliceChats = await userAlice.chat.list('CHATS')\n\n/** Get list of all chat requests received by user */\nconst userAliceRequests = await userAlice.chat.list('REQUESTS')\n\n/** Get latest chat message of a specific chat */\nconst aliceLatestChatWithBob = await userAlice.chat.latest(bobAddress)\n\n/** Get historical chat message of a specific chat */\nconst aliceHistoricalChatWithBob = await userAlice.chat.history(bobAddress)\n\n/** Accept chat request */\nconst bobAcceptsAliceChatRequest = await userBob.chat.accept(aliceAddress)\n\n/** Reject chat request */\n// Setup\nconst tempSigner = new ethers.Wallet.createRandom()\nconst tempAddress = await tempSigner.getAddress()\nconst userTemp = await PushAPI.initialize(tempSigner, { env: 'prod' })\nconst tempMessageBob = await userTemp.chat.send(bobAddress, {\n  content: 'Click this link to get scammed',\n  type: 'Text',\n})\n// Reject\nconst bobRejectsChatRequest = await userBob.chat.reject(tempAddress)\n\n/** Block User */\nconst aliceBlocksBob = await userAlice.chat.block([bobAddress])\n\n/** UnBlock User */\nconst aliceUnblocksBob = await userAlice.chat.unblock([bobAddress])\n\n"})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-5---navigating-group-chat-functionality",children:"Step 5 - Navigating Group Chat Functionality"}),"\n",(0,a.jsx)(n.p,{children:"Push SDK provides various functions for creation, updation , adding and removing users from group."}),"\n",(0,a.jsx)(r.Z,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// index.mjs\n...\n...\n/**\n * Push Group Chat Functions\n */\n\n/** Create Push Chat Group */\n// Note - By default group creator is the admin of the group\nconst createdGroup = await userAlice.chat.group.create('Sample Grp', {\n  description: 'Same Desc',\n  image: null,\n  members: [],\n  admins: [],\n  private: false,\n})\nconst groupChatId = createdGroup.chatId\n\n/** Update Group Info */\n// Note - Only admin can update group info\nconst updatedGroup = await userAlice.chat.group.update(groupChatId, {\n  description: 'Updated Description',\n})\n\n/** Get Group Info */\nconst groupInfo = await userAlice.chat.group.info(groupChatId)\n\n/** Get group Permissions */\nconst groupPermissions = await userAlice.chat.group.permissions(groupChatId)\n\n/** Add Member to Group */\nconst addMember = await userAlice.chat.group.add(groupChatId, {\n  role: 'MEMBER',\n  accounts: ['0x754E2C9f31D7DB279E9d4A9140e33ad8839E1FAd'],\n})\n\n/** Add Admin to Group */\nconst addAdmin = await userAlice.chat.group.add(groupChatId, {\n  role: 'ADMIN',\n  accounts: [bobAddress],\n})\n\n/** Remove Member from Group */\nconst removeMember = await userAlice.chat.group.remove(groupChatId, {\n  role: 'MEMBER',\n  accounts: ['0x754E2C9f31D7DB279E9d4A9140e33ad8839E1FAd'],\n})\n\n/** Remove Admin from Group */\nconst removeAdmin = await userAlice.chat.group.remove(groupChatId, {\n  role: 'ADMIN',\n  accounts: [bobAddress],\n})\n\n/** Join Group */\n// Note - A user can only join a group if its public or if the user is invited to join the group\nconst joinGrp = await userBob.chat.group.join(groupChatId)\n\n/** Leave Group */\nconst leaveGrp = await userBob.chat.group.leave(groupChatId)\n\n/** Reject a Group Joining Invite */\n// Setup\nconst newGroup = await userAlice.chat.group.create('Tmp Grp', {\n  description: 'Tmp Desc',\n  image: null,\n  members: [bobAddress],\n  admins: [],\n  private: true,\n})\n// Reject\nconst rejectGrpJoiningReq = await userBob.chat.group.reject(newGroup.chatId)\n\n"})})})}),"\n",(0,a.jsx)(n.h2,{id:"step-6---navigating-user-encryption-functionality",children:"Step 6 - Navigating User Encryption Functionality"}),"\n",(0,a.jsx)(n.p,{children:"Push SDK provides functions for getting info related to the encryption of a Push profile and also allow to change encryption of user keys"}),"\n",(0,a.jsx)(r.Z,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(s.Z,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// index.mjs\n...\n...\n/**\n * Push User Encryption Functions\n */\n\n/** Get User profile encryption info */\nconst encryptionInfo = await userAlice.encryption.info()\n\n/** Update encryption version of Push Profile */\n// Note - This function changes the encryption of push chat encryption keys and need to be called cautiously\nconst PGP_V3 = 'eip191-aes256-gcm-hkdf-sha256'\nconst encryptionUpdate = await userAlice.encryption.update(PGP_V3)\n\n"})})})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return s}});t(67294);var a=t(86010),i={tabItem:"tabItem_Ymn6"},r=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.default)(i.tabItem,s),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(67294),i=t(86010),r=t(12466),s=t(16550),o=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!==(n=null===(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,r=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:i});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function g(e){var n,t,i,r,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,g=p(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!==(n=a.find((function(e){return e.default})))&&void 0!==n?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:g})})),b=m[0],v=m[1],j=f({queryString:c,groupId:d}),y=j[0],A=j[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),i=t[0],r=t[1],[i,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),w=x[0],I=x[1],S=function(){var e=null!=y?y:w;return h({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){S&&v(S)}),[S]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),A(e),I(e)}),[A,I,g]),tabValues:g}}var m=t(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=t(85893);function j(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(c(n),s(i))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,i=l.indexOf(e.currentTarget)+1;t=null!==(a=l[i])&&void 0!==a?a:l[0];break;case"ArrowLeft":var r,s=l.indexOf(e.currentTarget)-1;t=null!==(r=l[s])&&void 0!==r?r:l[l.length-1]}null===(n=t)||void 0===n||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,r=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},r,{className:(0,i.default)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,i=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=r.find((function(e){return e.props.value===i}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function A(e){var n=g(e);return(0,v.jsxs)("div",{className:(0,i.default)("tabs-container",b.tabList),children:[(0,v.jsx)(j,Object.assign({},e,n)),(0,v.jsx)(y,Object.assign({},e,n))]})}function x(e){var n=(0,m.Z)();return(0,v.jsx)(A,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(67294);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);