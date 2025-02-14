"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4228],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},d=s.createContext(r);function o(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:t},e.children)}},29809:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/10_usb_benchmark-7795ae46c1b6cb904e72aff843c084ba.png"},73592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=n(74848),r=n(28453);const d={sidebar_position:5},o="USB Driver Performance Test",i={id:"Advanced_development/linux_development/hardware_unit_test/test_usb",title:"USB Driver Performance Test",description:"Test Method",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/hardware_unit_test/test_usb.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_usb",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_usb",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_usb.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"SPI Pressure Test",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_spi"},next:{title:"Network Performance Testing",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_ethernet"}},a={},l=[{value:"Test Method",id:"test-method",level:2},{value:"On Development Board",id:"on-development-board",level:3},{value:"On PC",id:"on-pc",level:3},{value:"Test Standards",id:"test-standards",level:2}];function c(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usb-driver-performance-test",children:"USB Driver Performance Test"}),"\n",(0,s.jsx)(t.h2,{id:"test-method",children:"Test Method"}),"\n",(0,s.jsx)(t.h3,{id:"on-development-board",children:"On Development Board"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.code,{children:"CrystalDiskMark"})," for testing (the software package is located in the ",(0,s.jsx)(t.code,{children:"09-usb_test"})," directory)."]}),"\n",(0,s.jsx)(t.li,{children:"Enter the following commands on the development board:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"service adbd stop\ncd /tmp\ndd if=/dev/zero of=/tmp/700M.img bs=1M count=700\nlosetup -f /tmp/700M.img\nlosetup -a \nmodprobe g_mass_storage file=/dev/loop0 removable=1\n"})}),"\n",(0,s.jsx)(t.h3,{id:"on-pc",children:"On PC"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The PC will prompt for the new disk device, format it as FAT32."}),"\n",(0,s.jsxs)(t.li,{children:["Open ",(0,s.jsx)(t.code,{children:"CrystalDiskMark"})," on the PC, select the X3 device that was just mounted, click ",(0,s.jsx)(t.code,{children:"All"})," to start the test. If there's a prompt for insufficient space, adjust the test file size accordingly."]}),"\n",(0,s.jsxs)(t.li,{children:["After the test is finished, the first two items ",(0,s.jsx)(t.code,{children:"SEQ1M*"})," represent the sequential read/write speed, and the following two items ",(0,s.jsx)(t.code,{children:"RND4K*"})," represent the random read/write speed of 4k small files.\n",(0,s.jsx)(t.img,{alt:"10_usb_benchmark",src:n(29809).A+"",width:"486",height:"349"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"The speed shown in the image is for reference only"})}),"\n",(0,s.jsx)(t.h2,{id:"test-standards",children:"Test Standards"}),"\n",(0,s.jsxs)(t.p,{children:["The test results are obtained from CrystalDiskMark SEQ1MQ8T1 read/write data",(0,s.jsx)(t.br,{}),"\n","USB 2.0: Read/write speed exceeds ",(0,s.jsx)(t.strong,{children:"40"}),"MB/s",(0,s.jsx)(t.br,{}),"\n","USB 3.0: Read/write speed exceeds ",(0,s.jsx)(t.strong,{children:"370"}),"MB/s"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);