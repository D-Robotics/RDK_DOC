"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2532],{28453:(e,r,d)=>{d.d(r,{R:()=>c,x:()=>a});var n=d(96540);const t={},o=n.createContext(t);function c(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:r},e.children)}},62769:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var n=d(74848),t=d(28453);const o={sidebar_position:1},c="\u786c\u4ef6\u8d44\u6599",a={id:"Advanced_development/hardware_development/rdk_x5/hardware",title:"\u786c\u4ef6\u8d44\u6599",description:"\u672c\u7ae0\u8282\u63d0\u4f9bRDK X5\u7684\u4ea7\u54c1\u624b\u518c\u548c\u8bbe\u8ba1\u8d44\u6599\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5168\u9762\u4e86\u89e3\u4ea7\u54c1\uff0c\u5e76\u4e3a\u786c\u4ef6\u8bbe\u8ba1\u5de5\u4f5c\u63d0\u4f9b\u6307\u5bfc\u3002",source:"@site/docs/07_Advanced_development/01_hardware_development/rdk_x5/hardware.md",sourceDirName:"07_Advanced_development/01_hardware_development/rdk_x5",slug:"/Advanced_development/hardware_development/rdk_x5/hardware",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x5/hardware",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/01_hardware_development/rdk_x5/hardware.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6444\u50cf\u5934\u4f7f\u7528",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_ultra/camera"},next:{title:"\u914d\u4ef6\u6e05\u5355",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x5/accessory"}},s={},i=[{value:"\u4ea7\u54c1\u624b\u518c",id:"\u4ea7\u54c1\u624b\u518c",level:2},{value:"\u8bbe\u8ba1\u8d44\u6599",id:"\u8bbe\u8ba1\u8d44\u6599",level:2}];function l(e){const r={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"\u786c\u4ef6\u8d44\u6599",children:"\u786c\u4ef6\u8d44\u6599"}),"\n",(0,n.jsx)(r.p,{children:"\u672c\u7ae0\u8282\u63d0\u4f9bRDK X5\u7684\u4ea7\u54c1\u624b\u518c\u548c\u8bbe\u8ba1\u8d44\u6599\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5168\u9762\u4e86\u89e3\u4ea7\u54c1\uff0c\u5e76\u4e3a\u786c\u4ef6\u8bbe\u8ba1\u5de5\u4f5c\u63d0\u4f9b\u6307\u5bfc\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u4ea7\u54c1\u624b\u518c",children:"\u4ea7\u54c1\u624b\u518c"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"\u89c4\u683c\u4e66"}),"\uff1a\u4ecb\u7ecd\u4ea7\u54c1\u89c4\u683c\u3001\u7279\u8272\u3001\u5c3a\u5bf8\u53ca\u578b\u53f7\u7b49\u5185\u5bb9"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://archive.d-robotics.cc/downloads/hardware/rdk_x5/RDK_X5_Product_Brief_V1.0.pdf",children:"RDK X5 \u89c4\u683c\u4e66"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u8bbe\u8ba1\u8d44\u6599",children:"\u8bbe\u8ba1\u8d44\u6599"}),"\n",(0,n.jsx)(r.p,{children:"\u672c\u7ae0\u8282\u4e3b\u8981\u63d0\u4f9b\u786c\u4ef6\u539f\u7406\u56fe\u3001\u673a\u68b0\u5c3a\u5bf8\u56fe\u7b49\u8bbe\u8ba1\u8d44\u6599\u5185\u5bb9\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5bf9\u5916\u56f4\u63a5\u53e3\u7684\u4f7f\u7528\u3002"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u539f\u7406\u56fe"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://archive.d-robotics.cc/downloads/hardware/rdk_x5/RDK_X5_IO_CONN_PUBLIC_V1.0.pdf",children:"RDK X5 \u539f\u7406\u56fe"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u673a\u68b0\u5c3a\u5bf8\u56fe"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://archive.d-robotics.cc/downloads/hardware/rdk_x5/X5_RDK_LPDDR4_4266MHz_V1P0_pcb.stp",children:"RDK X5 3D\u673a\u68b0\u5c3a\u5bf8\u56fe"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://archive.d-robotics.cc/downloads/hardware/rdk_x5/X5_RDK_LPDDR4_4266MHz_V1P0_bottom_dxf.dxf",children:"RDK X5 2D\u673a\u68b0\u5c3a\u5bf8\u56fe bottom"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://archive.d-robotics.cc/downloads/hardware/rdk_x5/X5_RDK_LPDDR4_4266MHz_V1P0_top_dxf.dxf",children:"RDK X5 2D\u673a\u68b0\u5c3a\u5bf8\u56fe top"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);