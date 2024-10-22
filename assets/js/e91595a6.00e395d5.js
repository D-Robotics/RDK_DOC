"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6452],{23030:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var d=t(74848),i=t(28453);const l={sidebar_position:2},s="EMMC\u76f8\u5173\u6d4b\u8bd5",r={id:"Advanced_development/linux_development/hardware_unit_test/test_emmc",title:"EMMC\u76f8\u5173\u6d4b\u8bd5",description:"\u5bf9\u4e8eEMMC\u6765\u8bb2\uff0c\u4e3b\u8981\u5173\u5fc3\u5b83\u7684\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u3002",source:"@site/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_emmc.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_emmc",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_emmc",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_emmc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u53ef\u9760\u6027\u6d4b\u8bd5\uff08\u5b9a\u9891\uff09",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_environment_reliability"},next:{title:"UART\u538b\u529b\u6d4b\u8bd5",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_uart"}},c={},o=[{value:"EMMC\u7a33\u5b9a\u6027\u6d4b\u8bd5",id:"emmc\u7a33\u5b9a\u6027\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u65b9\u6cd5",id:"\u6d4b\u8bd5\u65b9\u6cd5",level:3},{value:"\u6d4b\u8bd5\u6807\u51c6",id:"\u6d4b\u8bd5\u6807\u51c6",level:3},{value:"EMMC\u6027\u80fd\u6d4b\u8bd5",id:"emmc\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u65b9\u6cd5",id:"\u6d4b\u8bd5\u65b9\u6cd5-1",level:3},{value:"\u6d4b\u8bd5\u6807\u51c6",id:"\u6d4b\u8bd5\u6807\u51c6-1",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"emmc\u76f8\u5173\u6d4b\u8bd5",children:"EMMC\u76f8\u5173\u6d4b\u8bd5"}),"\n",(0,d.jsx)(n.p,{children:"\u5bf9\u4e8eEMMC\u6765\u8bb2\uff0c\u4e3b\u8981\u5173\u5fc3\u5b83\u7684\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"emmc\u7a33\u5b9a\u6027\u6d4b\u8bd5",children:"EMMC\u7a33\u5b9a\u6027\u6d4b\u8bd5"}),"\n",(0,d.jsx)(n.h3,{id:"\u6d4b\u8bd5\u65b9\u6cd5",children:"\u6d4b\u8bd5\u65b9\u6cd5"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4f7f\u7528\u5f00\u6e90\u5de5\u5177",(0,d.jsx)(n.code,{children:"iozone"}),"\u5bf9EMMC\u8fdb\u884c\u6587\u4ef6\u7cfb\u7edf\u8bfb\u5199\u6d4b\u8bd5\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u8fdb\u5165\u5230",(0,d.jsx)(n.code,{children:"test_tools/02_emmc"}),"\u6587\u4ef6\u5939\u4e0b\uff0c\u6267\u884c",(0,d.jsx)(n.code,{children:"sh emmc_stability_test.sh &"}),"\u811a\u672c\u5bf9EMMC\u6587\u4ef6\u7cfb\u7edf\u8bfb\u5199\u6d4b\u8bd5\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6d4b\u8bd5\u6807\u51c6",children:"\u6d4b\u8bd5\u6807\u51c6"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u9ad8\u6e29\uff1a45\xb0\u3001\u4f4e\u6e29\uff1a-10\xb0\u3001\u5e38\u6e29\u4e0b\uff0c\u7a0b\u5e8f\u6b63\u5e38\u6267\u884c\uff0c\u4e0d\u4f1a\u51fa\u73b0\u91cd\u542f\u6302\u6b7b\u7684\u60c5\u51b5\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["LOG\u4e2d\u6ca1\u6709",(0,d.jsx)(n.code,{children:"fail"}),"\u3001",(0,d.jsx)(n.code,{children:"error"}),"\u3001",(0,d.jsx)(n.code,{children:"timeout"}),"\u7b49\u5f02\u5e38\u6253\u5370\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u80fd\u7a33\u5b9a\u8fd0\u884c48\u5c0f\u65f6\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"emmc\u6027\u80fd\u6d4b\u8bd5",children:"EMMC\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,d.jsx)(n.h3,{id:"\u6d4b\u8bd5\u65b9\u6cd5-1",children:"\u6d4b\u8bd5\u65b9\u6cd5"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4f7f\u7528\u5f00\u6e90\u5de5\u5177",(0,d.jsx)(n.code,{children:"iozone"}),"\u5bf9EMMC\u6587\u4ef6\u7cfb\u7edf\u8bfb\u5199\u901f\u5ea6\u8fdb\u884c\u6d4b\u8bd5\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"Read\u4e0a\u9650\uff1a172.8MB/s\u3001Write\u4e0a\u9650\uff1a35MB/s\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u8fdb\u5165\u5230",(0,d.jsx)(n.code,{children:"test_tools/02_emmc"}),"\u6587\u4ef6\u5939\u4e0b\uff0c\u6267\u884c",(0,d.jsx)(n.code,{children:"sh emmc_performance_test.sh &"}),"\u811a\u672c\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6d4b\u8bd5\u6807\u51c6-1",children:"\u6d4b\u8bd5\u6807\u51c6"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u5e38\u6e29\u73af\u5883\u4e0b\uff0c\u7a0b\u5e8f\u6b63\u5e38\u6267\u884c\uff0c\u4e0d\u4f1a\u51fa\u73b0\u91cd\u542f\u6302\u6b7b\u7b49\u5f02\u5e38\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["LOG\u4e2d\u65e0",(0,d.jsx)(n.code,{children:"fail"}),"\u3001",(0,d.jsx)(n.code,{children:"error"}),"\u3001",(0,d.jsx)(n.code,{children:"timeout"}),"\u7b49\u5f02\u5e38\u6253\u5370\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u7edf\u8ba1\u5b9e\u9645\u6d4b\u8bd5\u8bfb\u5199\u901f\u5ea6\u662f\u5426\u7b26\u5408\u6027\u80fd\u6307\u6807\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u7a33\u5b9a\u8fd0\u884c48\u5c0f\u65f6\u3002"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var d=t(96540);const i={},l=d.createContext(i);function s(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);