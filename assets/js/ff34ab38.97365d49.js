"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[22024],{57277:function(e,s,t){t.r(s),t.d(s,{assets:function(){return o},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var n=t(85893),d=t(11151);t(23734);const r={id:"docs-video-supported-wallet-standards",title:"Supported Wallet Standards",hide_title:!0,slug:"./supported-wallet-standards",displayed_sidebar:"pushVideoSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_video--supported_wallet_standards.png"},a="Supported Wallet Standards",i={id:"video/docs-video-supported-wallet-standards",title:"Supported Wallet Standards",description:"Before you begin sending your web3 native notifications from your protocol to wallets. It's important to learn few core concepts to help understand it better.",source:"@site/docs/video/02-Supported-Wallets.mdx",sourceDirName:"video",slug:"/video/supported-wallet-standards",permalink:"/docs/video/supported-wallet-standards",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/video/02-Supported-Wallets.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-video-supported-wallet-standards",title:"Supported Wallet Standards",hide_title:!0,slug:"./supported-wallet-standards",displayed_sidebar:"pushVideoSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_video--supported_wallet_standards.png"},sidebar:"pushVideoSidebar",previous:{title:"Quickstart",permalink:"/docs/video/quickstart"},next:{title:"Build",permalink:"/docs/video/build"}},o={},l=[{value:"Types of supported wallet address (Account)",id:"types-of-supported-wallet-address-account",level:2},{value:"Standard Wallet Address",id:"standard-wallet-address",level:3},{value:"Chain Specific Wallet Address",id:"chain-specific-wallet-address",level:3},{value:"Lens profile / Cyberconnect profile / Any NFT profile",id:"lens-profile--cyberconnect-profile--any-nft-profile",level:3}];function c(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"supported-wallet-standards",children:"Supported Wallet Standards"}),"\n",(0,n.jsx)(s.p,{children:"Before you begin sending your web3 native notifications from your protocol to wallets. It's important to learn few core concepts to help understand it better."}),"\n",(0,n.jsx)(t,{children:(0,n.jsx)("title",{children:"Supported Wallet Standards | Push Video | Push Documentation"})}),"\n",(0,n.jsx)(s.h2,{id:"types-of-supported-wallet-address-account",children:"Types of supported wallet address (Account)"}),"\n",(0,n.jsx)(s.p,{children:"Push is chain agnostic and even supports messaging wallet addresses, NFT addresses, all evms (and even non-EVM in the future). Below is the list of evergrowing standards that Push is compatible with, either of which you can use as per your requirements \u2014"}),"\n","\n","\n",(0,n.jsx)(s.h3,{id:"standard-wallet-address",children:"Standard Wallet Address"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Standard Wallet Address"})," - Standard wallet is supported and used by default"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"usage"})})," - ",(0,n.jsx)(s.code,{children:"0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'// Using standard wallet address - defaults to EVM format\nconst wallet = "0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666";\n'})}),"\n",(0,n.jsx)(s.h3,{id:"chain-specific-wallet-address",children:"Chain Specific Wallet Address"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Chain Agnostic Wallet Address"})," - Pass ** {chain_standard}:{chainId}:{account_id} ** format to use this instead of standard wallet address. SDK converts all normal wallet address to chain agnostic ones by default."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"usage"})})," - ",(0,n.jsx)(s.code,{children:"eip155:1:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"usage"})})," - ",(0,n.jsx)(s.code,{children:"eip155:11155111:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"usage"})})," - ",(0,n.jsx)(s.code,{children:"eip155:137:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'// Using chain agnostic wallet address, support eip155 currently\nconst wallet = "eip155:1:0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666";\n'})}),"\n",(0,n.jsx)(s.h3,{id:"lens-profile--cyberconnect-profile--any-nft-profile",children:"Lens profile / Cyberconnect profile / Any NFT profile"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"NFT profile"})," - Pass ",(0,n.jsx)(s.strong,{children:"nft:{chain_standard}:{nftChainId}:{nftContractAddress}:{nftTokenId}"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"usage"})})," - ",(0,n.jsx)(s.code,{children:"nft:eip155:11155111:0x42af3147f17239341477113484752D5D3dda997B:2:1683058528"})]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'// Using nft format, any nfts supported including .lens, .crypto, .polygon or your crypto punks\nconst wallet =\n  "nft:eip155:11155111:0x42af3147f17239341477113484752D5D3dda997B:2:1683058528";\n'})})]})}function p(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:function(e,s,t){t.d(s,{Z:function(){return i},a:function(){return a}});var n=t(67294);const d={},r=n.createContext(d);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);