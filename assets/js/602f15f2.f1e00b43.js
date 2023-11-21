"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[55163],{4664:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=t(85893),i=t(11151),o=t(23734),s=t(65530);const r={id:"docs-notifications-tutorial-advance-create-your-channel-using-safe",title:"Advance - Create your channel using Safe",hide_title:!0,slug:"./create-your-channel-using-safe",displayed_sidebar:"pushNotificationSidebar",sidebar_position:3,image:"/assets/docs/previews/docs_notifications_tutorial_advance_create_your_channel_using_safe--advance_-_create_your_channel_using_safe.png"},c="Creating a Channel using Safe",l={id:"notifications/tutorials/docs-notifications-tutorial-advance-create-your-channel-using-safe",title:"Advance - Create your channel using Safe",description:"This is an advance tutorial which assumes your knowledge of web3 to be of intermediate level. At the very least, you should be aware of what is a safe, multisig, EOA and smart contract wallets.",source:"@site/docs/notifications/04-tutorials/03-Tutorial-Create-Channel-Using-Safe.mdx",sourceDirName:"notifications/04-tutorials",slug:"/notifications/tutorials/create-your-channel-using-safe",permalink:"/docs/notifications/tutorials/create-your-channel-using-safe",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/04-tutorials/03-Tutorial-Create-Channel-Using-Safe.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"docs-notifications-tutorial-advance-create-your-channel-using-safe",title:"Advance - Create your channel using Safe",hide_title:!0,slug:"./create-your-channel-using-safe",displayed_sidebar:"pushNotificationSidebar",sidebar_position:3,image:"/assets/docs/previews/docs_notifications_tutorial_advance_create_your_channel_using_safe--advance_-_create_your_channel_using_safe.png"},sidebar:"pushNotificationSidebar",previous:{title:"Enabling channel on other chains",permalink:"/docs/notifications/tutorials/enabling-channel-on-other-chains"},next:{title:"Token transfer notification from smart contract",permalink:"/docs/notifications/tutorials/token-transfer-notification-from-smart-contract"}},h={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Step 1\ufe0f\u20e3 - Connect Push dApp to Safe",id:"step-1\ufe0f\u20e3---connect-push-dapp-to-safe",level:3},{value:"Step 2\ufe0f\u20e3 - Create the Channel",id:"step-2\ufe0f\u20e3---create-the-channel",level:3},{value:"Step 3\ufe0f\u20e3 - Signing and Initiating channel creation transaction",id:"step-3\ufe0f\u20e3---signing-and-initiating-channel-creation-transaction",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"creating-a-channel-using-safe",children:"Creating a Channel using Safe"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This is an advance tutorial which assumes your knowledge of web3 to be of intermediate level. At the very least, you should be aware of what is a safe, multisig, EOA and smart contract wallets."})}),"\n",(0,a.jsx)(n.p,{children:"While you can use an EOA for creating a channel, that's not the only option."}),"\n",(0,a.jsx)(n.p,{children:"Channels, on the Push protocol, can also be created using a multi-sig contract. Once created, that contract shall be the owner of that channel and any channel action can be performed after the approval of the required signers of that particular multi-sig contract."}),"\n",(0,a.jsx)(n.p,{children:"In this quick example, we shall learn to create a channel on Push using a Safe (instead of a simple EOA)."}),"\n",(0,a.jsx)(r,{children:(0,a.jsx)("title",{children:"Create Channel using Safe| Tutorial | Push Notifications | Push\nDocumentation"})}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"Before we proceed with the actual steps of connecting the safe to the Push dapp and creating a channel, let's quickly understand the prerequisites:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create your own safe with the right set of owners and policies."}),"\n",(0,a.jsxs)(n.li,{children:["Fund your safe with at least 50 PUSH tokens. ",(0,a.jsx)(n.em,{children:"This amount of PUSH is required for channel creation."})]}),"\n",(0,a.jsxs)(n.li,{children:["Initiate a ",(0,a.jsx)(n.strong,{children:"contract interaction"})," from your safe itself to trigger the ",(0,a.jsx)(n.strong,{children:"approve()"})," function of the ",(0,a.jsx)(n.a,{href:"https://etherscan.io/token/0xf418588522d5dd018b425e472991e52ebbeeeeee",children:"Push token"})," with the following values for the argument:"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"spender (address) :0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE - EPNSCore Contract"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"rawAmount (uint256) - 50 * 10^18 PUSH tokens -> Channel Creation Fees"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This is important to ensure that the core contract is allowed to use 50 PUSH tokens from the safe for the successful creation of the channel."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Sample $PUSH approval transaction from SAFE",src:t(80798).Z+"",title:"A sample of how PUSH approval transaction looks like from SAFE",width:"697",height:"767"})}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.p,{children:"once you have ensured all the prerequisites are completed, let's move forward with creating a channel with the safe using the following steps \u2014"}),"\n",(0,a.jsx)(n.h3,{id:"step-1\ufe0f\u20e3---connect-push-dapp-to-safe",children:"Step 1\ufe0f\u20e3 - Connect Push dApp to Safe"}),"\n",(0,a.jsxs)(n.p,{children:["a. Open a new tab and goto ",(0,a.jsx)(n.a,{href:"https://app.push.org",title:"Production dApp of Push Protocol",children:"Push dApp"})]}),"\n",(0,a.jsxs)(n.p,{children:["b. Select ",(0,a.jsx)(n.strong,{children:"Wallet Connect"})," as an option to connect your wallet to the dapp and Copy the connection link. (Keep this link handy as we will use it soon)."]}),"\n",(0,a.jsxs)(n.p,{children:["c. Open a new tab and go to ",(0,a.jsx)(n.a,{href:"https://safe.global/",title:"Production dApp of Safe",children:"Safe"})]}),"\n",(0,a.jsx)(n.p,{children:"d. Once you have connected with your safe on the safe app, go to the apps section at the left sidebar of the safe app."}),"\n",(0,a.jsx)(n.p,{children:"e. Search for the Wallet connect app and click on it."}),"\n",(0,a.jsxs)(n.p,{children:["f. Paste the ",(0,a.jsx)(n.strong,{children:"connection link"})," (from step b) in the given Wallet connect box."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"You should now be connected to Push dapp from Safe."})," Below is a quick video of the entire process of connecting your safe to Push dapp \ud83d\udc47"]}),"\n",(0,a.jsx)(s.Z,{embedURL:"https://www.loom.com/embed/a08d946e81bc48e88f24874ebbfd0939?sid=17d62549-b889-4524-b6a5-ea5ff28351d2"}),"\n",(0,a.jsx)(n.h3,{id:"step-2\ufe0f\u20e3---create-the-channel",children:"Step 2\ufe0f\u20e3 - Create the Channel"}),"\n",(0,a.jsxs)(n.p,{children:["Now that you are connected to the dapp, creating a channel using a safe is an exactly similar process as it was using an EOA account. Follow this step by step guide to ",(0,a.jsx)(o.iA,{href:"/docs/notifications/tutorials/create-your-channel/#setup-channel",title:"Setup your notification channel via Push protocol",children:"setup your channel"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"step-3\ufe0f\u20e3---signing-and-initiating-channel-creation-transaction",children:"Step 3\ufe0f\u20e3 - Signing and Initiating channel creation transaction"}),"\n",(0,a.jsx)(n.p,{children:"The only difference in creating a channel with safe is the fact that every transaction must be signed and executed on the safe app itself."}),"\n",(0,a.jsx)(n.p,{children:"Therefore, once the channel details are entered and the transaction is initiated, it's time for the required number of owners to sign and approve this transaction from the safe app to execute it."}),"\n",(0,a.jsx)(n.p,{children:"After the successful execution of the transaction, your channel will be created on the Push dapp and will be owned by the safe(and its owners)."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Remember in order to access the channel's profile page, you must log in to the dapp from the safe itself."})}),"\n",(0,a.jsx)(s.Z,{embedURL:"https://www.loom.com/embed/388b7a807f5c4bc3b8e7538c90a717a8?sid=fcf38949-efbb-4197-a28e-7cdccaa5d828"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},65530:function(e,n,t){t(67294);var a=t(68458),i=t(85893),o=a.ZP.div.withConfig({displayName:"LoomEmbed__LoomWrapper",componentId:"sc-lg5kbk-0"})(["padding-bottom:56.25%;position:relative;& iframe{position:absolute;}"]);n.Z=function(e){var n=e.embedURL;return(0,i.jsx)(o,{children:(0,i.jsx)("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,style:{width:"100%",height:"100%",display:"block",margin:"auto",border:"none"}})})}},80798:function(e,n,t){n.Z=t.p+"assets/images/pushTransactionFormSafe-307e833df57f432edf4624ee0c877a96.png"},11151:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var a=t(67294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);