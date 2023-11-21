"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[94341],{42758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return c}});var i=n(85893),a=n(11151),s=n(23734);const d={id:"docs-video-develop-initiate-video-call",title:"Initiate Video Call",hide_title:!0,slug:"./initiate-video-call",displayed_sidebar:"pushVideoSidebar",sidebar_position:3,image:"/assets/docs/previews/docs_video_develop--initiate_video_call.png"},r="Initiate video call overview",o={id:"video/build/docs-video-develop-initiate-video-call",title:"Initiate Video Call",description:"This section covers everything you need to do to create video calls, handle incoming video calls, establish connection and how to disconnect.",source:"@site/docs/video/01-build/03-Develop-Initiate-Video-Call.mdx",sourceDirName:"video/01-build",slug:"/video/build/initiate-video-call",permalink:"/docs/video/build/initiate-video-call",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/video/01-build/03-Develop-Initiate-Video-Call.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"docs-video-develop-initiate-video-call",title:"Initiate Video Call",hide_title:!0,slug:"./initiate-video-call",displayed_sidebar:"pushVideoSidebar",sidebar_position:3,image:"/assets/docs/previews/docs_video_develop--initiate_video_call.png"},sidebar:"pushVideoSidebar",previous:{title:"Create Video Object",permalink:"/docs/video/build/create-video-object"},next:{title:"Managing Media Stream",permalink:"/docs/video/build/managing-media-stream"}},l={},c=[{value:"Create a Local Media Stream",id:"create-a-local-media-stream",level:2},{value:"Fire a Request for a Video Call",id:"fire-a-request-for-a-video-call",level:2},{value:"Accept a Request for a Video Call",id:"accept-a-request-for-a-video-call",level:2},{value:"Receiving a request in sockets",id:"receiving-a-request-in-sockets",level:3},{value:"Accepting the Request",id:"accepting-the-request",level:3},{value:"Connect a video call",id:"connect-a-video-call",level:2},{value:"Disconnect a video call",id:"disconnect-a-video-call",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"initiate-video-call-overview",children:"Initiate video call overview"}),"\n",(0,i.jsx)(t.p,{children:"This section covers everything you need to do to create video calls, handle incoming video calls, establish connection and how to disconnect."}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"Initiate Video Call | Push Video | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(t.h2,{id:"create-a-local-media-stream",children:"Create a Local Media Stream"}),"\n",(0,i.jsx)(t.p,{children:"Before initiating the call, we need to create a local media stream, i.e., local audio and video which will be used during the call initiation."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"await videoObject.create({\n  video?: boolean; // for frontend use\n  audio?: boolean; // for frontend use\n  stream?: MediaStream; // for backend use\n});\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["create() function generates a new MediaStream object using ",(0,i.jsx)(t.code,{children:"navigator.mediaDevices.getUserMedia"})]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"video"})," and ",(0,i.jsx)(t.code,{children:"audio"})," boolean params are used to tell if you want to enable your audio/video during the video call or not. Example:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you pass the ",(0,i.jsx)(t.code,{children:"video"})," as ",(0,i.jsx)(t.code,{children:"false"}),", your video will be disabled during the entire call. If you pass it as ",(0,i.jsx)(t.code,{children:"true"}),", then your video will be turned on initially during the call, and later, you will have the option to toggle it on or off."]}),"\n",(0,i.jsxs)(t.li,{children:["For ",(0,i.jsx)(t.code,{children:"audio"})," the above logic is the same."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.code,{children:"stream"})," object is passed as a param to ",(0,i.jsx)(t.code,{children:"create()"})," function then ",(0,i.jsx)(t.code,{children:"create"})," doesn't generate a new MediaStream rather, it would just assigns ",(0,i.jsx)(t.code,{children:"data.local.stream"})," to the passed ",(0,i.jsx)(t.code,{children:"stream"})," object param. This is for backend use."]})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"video"}),(0,i.jsxs)(t.td,{children:["Whether the video should be enabled or not during the call. Defaults to ",(0,i.jsx)(t.code,{children:"true"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"audio"}),(0,i.jsxs)(t.td,{children:["Whether the audio should be enabled or not during the call. Defaults to ",(0,i.jsx)(t.code,{children:"true"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stream"}),(0,i.jsxs)(t.td,{children:["Local stream. For backend use. Defaults to ",(0,i.jsx)(t.code,{children:"null"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["\u26a0 ",(0,i.jsx)(t.strong,{children:"Warning"}),": If ",(0,i.jsx)(t.code,{children:"audio"}),", ",(0,i.jsx)(t.code,{children:"video"})," aren't passed as true in ",(0,i.jsx)(t.code,{children:"create()"})," then they won't be available during the entire video call respectively."]})}),"\n",(0,i.jsx)(s.S5,{href:"https://www.npmjs.com/package/@pushprotocol/restapi#create",title:"NPM example of Push Video Create API",target:"_blank",children:(0,i.jsx)(t.p,{children:"Create API Example"})}),"\n",(0,i.jsx)(t.h2,{id:"fire-a-request-for-a-video-call",children:"Fire a Request for a Video Call"}),"\n",(0,i.jsx)(t.p,{children:"We are now ready to request/initiate a video call. As the name suggests, this will be done on the initiator's end."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"await videoObject.request({\n  senderAddress: string;\n  recipientAddress: string | string[];\n  chatId: string;\n  onReceiveMessage?: (message: string) => void;\n  retry?: boolean;\n});\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"senderAddress"}),(0,i.jsx)(t.td,{children:"Wallet address of the local user"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"recipientAddress"}),(0,i.jsx)(t.td,{children:"Wallet addresses of users you want to call, single address for wallet to wallet call and array of addresses for group call"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"chatId"}),(0,i.jsx)(t.td,{children:"Unique identifier for every push chat, here, the one between the senderAddress and the recipientAddress"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"onReceiveMessage"}),(0,i.jsx)(t.td,{children:"Function which will be called when the sender receives a message via webRTC data channel"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"retry"}),(0,i.jsx)(t.td,{children:"If we are retrying the call then this param should be set to true, only for internal use"})]})]})]}),"\n",(0,i.jsx)(s.S5,{href:"https://www.npmjs.com/package/@pushprotocol/restapi#request",title:"NPM example of Push Video Request API",target:"_blank",children:(0,i.jsx)(t.p,{children:"Request API Example"})}),"\n",(0,i.jsx)(t.h2,{id:"accept-a-request-for-a-video-call",children:"Accept a Request for a Video Call"}),"\n",(0,i.jsx)(t.h3,{id:"receiving-a-request-in-sockets",children:"Receiving a request in sockets"}),"\n",(0,i.jsxs)(t.p,{children:["In order to receive a video call request, we need to listen for the ",(0,i.jsx)(t.code,{children:"USER_FEEDS"})," event from ",(0,i.jsx)(t.code,{children:"@pushprotocol/socket"})," and use the following code inside of the event listener:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { VideoCallStatus } from "@pushprotocol/restapi";\nimport { ADDITIONAL_META_TYPE } from "@pushprotocol/restapi/src/lib/payloads/constants";\n\npushSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {\n  // The event listner for the USER_FEEDS event\n  const { payload } = feedItem || {};\n  // we check if the additionalMeta property is present in payload.data\n  if (\n    payload.hasOwnProperty("data") &&\n    payload["data"].hasOwnProperty("additionalMeta")\n  ) {\n    const additionalMeta = payload["data"]["additionalMeta"];\n\n    // check for PUSH_VIDEO\n    if (additionalMeta.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`) {\n      const videoCallMetaData = JSON.parse(additionalMeta.data);\n\n      // If the received status is INITIALIZED that means we have an incoming call\n      if (videoCallMetaData.status === VideoCallStatus.INITIALIZED) {\n        const {\n          // your address, ie the recipient address of the video call notification\n          recipientAddress,\n\n          // address of the other user part of the video call, who sent you this notification\n          senderAddress,\n\n          // the unique identifier for every push chat, here, the one between the senderAddress and the recipientAddress\n          chatId,\n\n          // webRTC signal data received from the peer which sent this notification\n          signalData,\n\n          // current status of the video call, can be found from VideoCallStatus enum\n          status,\n        } = videoCallMetaData;\n        // Note - We\'ll need signalData while calling acceptRequest function\n        // You can save these properties in a state for furture use\n\n        /* \n          If you want you can also save these properties on the data state\n          we created while initializing the video object.\n          Later you can use it while calling acceptRequest()\n          signalData will be available via data.meta.initiator.signal\n        */\n        videoObject.setData((oldData) => {\n          return produce(oldData, (draft) => {\n            draft.local.address = recipientAddress;\n            draft.incoming[0].address = senderAddress;\n            draft.incoming[0].status = PushAPI.VideoCallStatus.RECEIVED;\n            draft.meta.chatId = chatId;\n            draft.meta.initiator.address = senderAddress;\n            draft.meta.initiator.signal = signalData;\n          });\n        });\n        // PS: Don\'t forget to import videoObject. :)\n      }\n    }\n  }\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"additionalMeta"})," property has the following type:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"additionalMeta?: {\n  /**\n   * type = ADDITIONAL_META_TYPE+VERSION\n   * VERSION > 0\n   */\n  type: `${ADDITIONAL_META_TYPE}+${number}`;\n  data: string;\n  domain?: string;\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When you parse the ",(0,i.jsx)(t.code,{children:"data"})," property from the ",(0,i.jsx)(t.code,{children:"additionalMeta"})," object, you'll receive the videoCallMetaData, which has the following type:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"interface VideoCallMetaDataType {\n  recipientAddress: string;\n  senderAddress: string;\n  chatId: string;\n  signalData?: any;\n  status: VideoCallStatus;\n}\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"recipientAddress"}),(0,i.jsx)(t.td,{children:"Wallet address of remote user ie the address which you want to call"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"senderAddress"}),(0,i.jsx)(t.td,{children:"Wallet address of the local user"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"chatId"}),(0,i.jsx)(t.td,{children:"Unique identifier for every push chat, here, the one between the senderAddress and the recipientAddress"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"signalingData"}),(0,i.jsx)(t.td,{children:"WebRTC signal data received from the peer which sent this notification"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"status"}),(0,i.jsx)(t.td,{children:"Current status of the video call, can be found from VideoCallStatus enum"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"accepting-the-request",children:"Accepting the Request"}),"\n",(0,i.jsxs)(t.p,{children:["After receiving a request for a video call, you can show a sort of incoming call UI. Now it's time to accept the request for a video call on the receiver's end. For this, we'll need the ",(0,i.jsx)(t.code,{children:"signalData"})," we received from the event handler of the ",(0,i.jsx)(t.code,{children:"USER_FEEDS"})," event above."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"await videoObject.acceptRequest({\n  signalData: any;\n  senderAddress: string;\n  recipientAddress: string;\n  chatId: string;\n  onReceiveMessage?: (message: string) => void;\n  retry?: boolean;\n});\n\n// Note: If you saved the properties from the additionalMeta received in the sockets\n// You can call acceptRequest() like below:\nawait videoObject.acceptRequest({\n  signalData: data.meta.initiator.signal;\n  senderAddress: data.local.address;\n  recipientAddress: data.incoming[0].address;\n  chatId: data.meta.chatId;\n});\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"signalData"}),(0,i.jsx)(t.td,{children:"Signal data received from the initiator peer via push notification upon request() call"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"senderAddress"}),(0,i.jsx)(t.td,{children:"Wallet address of the local user"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"recipientAddress"}),(0,i.jsx)(t.td,{children:"Wallet address of the remote user, i.e., the address whose call request you want to accept"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"chatId"}),(0,i.jsx)(t.td,{children:"Unique identifier for every push chat, here, the one between the senderAddress and the recipientAddress"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"onReceiveMessage"}),(0,i.jsx)(t.td,{children:"Function which will be called when the sender receives a message via webRTC data channel"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"retry"}),(0,i.jsx)(t.td,{children:"If we are retrying the call, only for internal use"})]})]})]}),"\n",(0,i.jsx)(s.S5,{href:"https://www.npmjs.com/package/@pushprotocol/restapi#acceptrequest",title:"NPM example of Push Video Accept Request API",target:"_blank",children:(0,i.jsx)(t.p,{children:"Accept Request API Example"})}),"\n",(0,i.jsx)(t.h2,{id:"connect-a-video-call",children:"Connect a video call"}),"\n",(0,i.jsxs)(t.p,{children:["Now, to finally connect a video call on the initiator's end, we need to listen for the ",(0,i.jsx)(t.code,{children:"USER_FEEDS"})," event from ",(0,i.jsx)(t.code,{children:"@pushprotocol/socket"})," and use the following code inside of the event listener:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { ADDITIONAL_META_TYPE } from "@pushprotocol/restapi/src/lib/payloads/constants";\n\npushSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {\n  // The event listner for the USER_FEEDS event\n  const { payload } = feedItem || {};\n  //We check if the additionalMeta property is present in payload.data\n  if (\n    payload.hasOwnProperty("data") &&\n    payload["data"].hasOwnProperty("additionalMeta")\n  ) {\n    const additionalMeta = payload["data"]["additionalMeta"];\n\n    // check for PUSH_VIDEO\n    if (additionalMeta.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`) {\n      const videoCallMetaData = JSON.parse(additionalMeta.data);\n\n      // If the received status is RECEIVED that means we can connect the video call\n      if (videoCallMetaData.status === VideoCallStatus.RECEIVED) {\n        const { \n          signalData,\n          senderAddress\n        } = videoCallMetaData;\n\n        // connecting the call using received signalData\n        videoObject.connect({\n          signalData,\n          peerAddress: senderAddress\n        });\n        // PS: Dont forget to import videoObject. :)\n      }\n    }\n  }\n});\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"videoObject.connect({\n  signalData: any;\n  peerAddress?: string;\n});\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"signalData"}),(0,i.jsx)(t.td,{children:"Signal data received from the receiver peer via push notification upon acceptRequest() call"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"peerAddress"}),(0,i.jsxs)(t.td,{children:["The address you want connect the call with, defaults to ",(0,i.jsx)(t.code,{children:"data.incoming[0].address"})]})]})]})]}),"\n",(0,i.jsx)(s.S5,{href:"https://www.npmjs.com/package/@pushprotocol/restapi#connect",title:"NPM example of Push Video Connect API",target:"_blank",children:(0,i.jsx)(t.p,{children:"Connect API Example"})}),"\n",(0,i.jsx)(t.h2,{id:"disconnect-a-video-call",children:"Disconnect a video call"}),"\n",(0,i.jsxs)(t.p,{children:["To disconnect a call, we use the ",(0,i.jsx)(t.code,{children:"disconnect()"})," method on the videoObject."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"videoObject.disconnect({\n  peerAddress: string\n} | undefined);\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"peerAddress"}),(0,i.jsxs)(t.td,{children:["The address you want disconnect the call with, defaults to ",(0,i.jsx)(t.code,{children:"data.incoming[0].address"})]})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["And add this to the event handler of the",(0,i.jsx)(t.code,{children:"USER_FEEDS"})," event from ",(0,i.jsx)(t.code,{children:"@pushprotocol/socket"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { ADDITIONAL_META_TYPE } from "@pushprotocol/restapi/src/lib/payloads/constants";\n\npushSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {\n  // The event listner for the USER_FEEDS event\n\n  const { payload } = feedItem || {};\n  // we check if the additionalMeta property is present in payload.data\n  if (\n    payload.hasOwnProperty("data") &&\n    payload["data"].hasOwnProperty("additionalMeta")\n  ) {\n    // parsing additionalMeta\n    const additionalMeta = payload["data"]["additionalMeta"];\n\n    // check for PUSH_VIDEO\n    if (additionalMeta.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`) {\n      const videoCallMetaData = JSON.parse(additionalMeta.data);\n\n      // If the received status is DISCONNECTED that means the call has ended\n      if (videoCallMetaData.status === VideoCallStatus.DISCONNECTED) {\n        // here you can do a window reload or just clear out the video state\n      }\n    }\n  }\n});\n'})}),"\n",(0,i.jsx)(s.S5,{href:"https://www.npmjs.com/package/@pushprotocol/restapi#disconnect",title:"NPM example of Push Video Disconnect API",target:"_blank",children:(0,i.jsx)(t.p,{children:"Disconnect API Example"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var i=n(67294);const a={},s=i.createContext(a);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);