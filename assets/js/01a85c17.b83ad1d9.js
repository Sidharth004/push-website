"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[64013],{57388:function(e,t,i){i.d(t,{Z:function(){return f}});var a=i(67294),n=i(87524),r=i(86010),s=i(39960),l=i(95999),c=i(16550),o=i(48596);function m(e){var t=(0,c.TH)().pathname;return(0,a.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,o.Mg)(e.permalink,t))}(e,t)}))}),[e,t])}var d={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"},u=i(85893);function g(e){var t=e.sidebar,i=m(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,r.default)(d.sidebar,"thin-scrollbar"),"aria-label":(0,l.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,r.default)(d.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,r.default)(d.sidebarItemList,"clean-list"),children:i.map((function(e){return(0,u.jsx)("li",{className:d.sidebarItem,children:(0,u.jsx)(s.Z,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var p=i(13102);function h(e){var t=m(e.sidebar.items);return(0,u.jsx)("ul",{className:"menu__list",children:t.map((function(e){return(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function b(e){return(0,u.jsx)(p.Zo,{component:h,props:e})}function f(e){var t=e.sidebar,i=(0,n.i)();return null!=t&&t.items.length?"mobile"===i?(0,u.jsx)(b,{sidebar:t}):(0,u.jsx)(g,{sidebar:t}):null}},40245:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(63366),n=(i(67294),i(56006)),r=i(57388),s=i(85893),l=["sidebar","toc","children"];function c(e){var t=e.sidebar,i=e.toc,c=e.children,o=(0,a.Z)(e,l);t&&t.items.length;return(0,s.jsx)(n.Z,Object.assign({},o,{children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(r.Z,{sidebar:t}),(0,s.jsx)("main",{itemScope:!0,itemType:"http://schema.org/Blog",children:c}),i&&(0,s.jsx)("div",{className:"col col--2",children:i})]})})}))}},95845:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}});i(67294);var a=i(86010),n=i(95999),r=function(){return(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};var s=i(10833),l=i(35281),c=i(40245),o=i(9567),m=i(68458),d=i(52257),u=i(85893);function g(e){var t=e.letterEntry;return(0,u.jsxs)(f,{children:[(0,u.jsx)("h2",{children:t.letter}),(0,u.jsx)(b,{children:t.tags.map((function(e){return(0,u.jsx)(h,{children:(0,u.jsx)(o.Z,Object.assign({},e))},e.permalink)}))})]})}function p(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var i,a=function(e){return e[0].toUpperCase()}(e.label);null!==(i=t[a])&&void 0!==i||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var i=e[0],a=t[0];return i.localeCompare(a)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return(0,u.jsx)("section",{children:t.map((function(e){return(0,u.jsx)(g,{letterEntry:e},e.letter)}))})}var h=m.ZP.li.withConfig({displayName:"TagsListByLetter__Li",componentId:"sc-1kwqg8b-0"})(["list-style:none;display:flex !important;margin:1rem 0.4rem 0.5rem 0;"]),b=m.ZP.ul.withConfig({displayName:"TagsListByLetter__Ul",componentId:"sc-1kwqg8b-1"})(["margin:0 0;padding:0 0;display:grid !important;grid-template-columns:repeat(4,minmax(0,1fr));@media ","{grid-template-columns:repeat(2,minmax(0,1fr));}@media ","{grid-template-columns:repeat(1,minmax(0,1fr));}"],d.Uh.tablet,d.Uh.mobileL),f=m.ZP.div.withConfig({displayName:"TagsListByLetter__TagSection",componentId:"sc-1kwqg8b-2"})(["margin:25px 0;&.h2{color:var(--ifm-color-secondary-blog);}"]),v=i(90197);function x(e){var t=e.tags,i=(e.sidebar,r());return(0,u.jsxs)(s.FG,{className:(0,a.default)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,u.jsx)(s.d,{title:i}),(0,u.jsx)(v.Z,{tag:"blog_tags_list"}),(0,u.jsx)(c.Z,{}),(0,u.jsxs)(j,{children:[(0,u.jsx)("h1",{children:i}),(0,u.jsx)(p,{tags:t})]})]})}var j=m.ZP.div.withConfig({displayName:"BlogTagsListPage__TagSection",componentId:"sc-kceye3-0"})(["width:1120px !important;margin:50px auto;&.h1{color:var(--ifm-color-secondary-blog);}@media ","{width:90% !important;}"],d.Uh.laptopL)},9567:function(e,t,i){i.d(t,{Z:function(){return l}});i(67294);var a=i(86010),n=i(39960),r={tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"},s=i(85893);function l(e){var t=e.permalink,i=e.label,l=e.count;return(0,s.jsx)(n.Z,{href:t,className:(0,a.default)(l?r.tagWithCount:r.tagRegular),children:i})}}}]);