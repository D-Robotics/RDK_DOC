"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2357],{88416:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=n(74848),t=n(28453);const s={sidebar_position:7},c="CPU Performance Test",i={id:"Advanced_development/linux_development/hardware_unit_test/test_cpu",title:"CPU Performance Test",description:"Test Description",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/hardware_unit_test/test_cpu.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_cpu",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_cpu",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_cpu.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Network Performance Testing",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_ethernet"},next:{title:"7.2.4 Kernel Header Files",permalink:"/rdk_doc/en/Advanced_development/linux_development/kernel_headers"}},l={},a=[{value:"Test Description",id:"test-description",level:2},{value:"Test Method",id:"test-method",level:2},{value:"Test Metrics",id:"test-metrics",level:2},{value:"AppendixThe cross-compilation process for <code>coremark</code> is as follows:",id:"appendixthe-cross-compilation-process-for-coremark-is-as-follows",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"cpu-performance-test",children:"CPU Performance Test"}),"\n",(0,o.jsx)(r.h2,{id:"test-description",children:"Test Description"}),"\n",(0,o.jsxs)(r.p,{children:["This test uses the ",(0,o.jsx)(r.code,{children:"Coremark"})," tool for testing. The source code and compiled software are located in the ",(0,o.jsx)(r.code,{children:"10-cpu_performance"})," directory. CoreMark is a benchmark test program that mainly aims to test the performance of processor cores. The standard testing method of CoreMark is to run the CoreMark program multiple times within a unit of time under certain configuration parameters, and the industry score is presented as ",(0,o.jsx)(r.code,{children:"Coremark"})," / ",(0,o.jsx)(r.code,{children:"CPU clock Mhz"})," / ",(0,o.jsx)(r.code,{children:"Core num"}),", that is, ",(0,o.jsx)(r.code,{children:"coremark runs per second"})," / ",(0,o.jsx)(r.code,{children:"cpu clock frequency"})," / ",(0,o.jsx)(r.code,{children:"number of cpu cores"}),", resulting in a final score."]}),"\n",(0,o.jsx)(r.h2,{id:"test-method",children:"Test Method"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["Unzip ",(0,o.jsx)(r.code,{children:"coremark-main.zip"})," and enter the ",(0,o.jsx)(r.code,{children:"coremark-main"})," folder."]}),"\n",(0,o.jsxs)(r.li,{children:["Execute ",(0,o.jsx)(r.code,{children:"./coremark_single 0x0 0x0 0x66 0 7 1 2000 > ./run1.log"}),", wait for the program to finish; execute ",(0,o.jsx)(r.code,{children:"./coremark_multi 0x0 0x0 0x66 0 7 1 2000 > ./run2.log"}),", wait for the program to finish."]}),"\n",(0,o.jsxs)(r.li,{children:["Check the ",(0,o.jsx)(r.strong,{children:"single core"})," test score in ",(0,o.jsx)(r.code,{children:"run1.log"}),", as follows:"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"2K performance run parameters for coremark.\nCoreMark Size    : 666\nTotal ticks      : 20830\nTotal time (secs): 20.830000\nIterations/Sec   : 5280.844935\nIterations       : 110000\nCompiler version : GCC6.5.0\nCompiler flags   :  -O3 -funroll-all-loops -static --param max-inline-insns-auto=550 -DPERFORMANCE_RUN=1  -lrt\nMemory location  : Please put data memory location here\n                        (e.g. code in flash, data on heap etc)\nseedcrc          : 0xe9f5\n[0]crclist       : 0xe714\n[0]crcmatrix     : 0x1fd7\n[0]crcstate      : 0x8e3a\n[0]crcfinal      : 0x33ff\nCorrect operation validated. See README.md for run and reporting rules.\nCoreMark 1.0 : 5280.844935 / GCC6.5.0  -O3 -funroll-all-loops -static --param max-inline-insns-auto=550 -DPERFORMANCE_RUN=1  -lrt / Heap\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Note the column ",(0,o.jsx)(r.code,{children:"Iterations/Sec"}),", which indicates how many iterations per second, which is the ",(0,o.jsx)(r.code,{children:"coremark"})," score in the formula above.\nAccording to the formula, the single-core score for this x3 is ",(0,o.jsx)(r.code,{children:"5280.844935"})," / ",(0,o.jsx)(r.code,{children:"1200"})," (default frequency) / ",(0,o.jsx)(r.code,{children:"1"})," = ",(0,o.jsx)(r.code,{children:"4.400"}),", which falls within the normal range."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.strong,{children:"multi-core"})," score is saved in ",(0,o.jsx)(r.code,{children:"./run2.log"}),". The calculation of the multi-core score is similar to that of the single-core score and is not repeated here."]}),"\n",(0,o.jsx)(r.h2,{id:"test-metrics",children:"Test Metrics"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Single core score X > 4.2"}),"\n",(0,o.jsx)(r.li,{children:"Quad-core score X > 4.2"}),"\n"]}),"\n",(0,o.jsxs)(r.h2,{id:"appendixthe-cross-compilation-process-for-coremark-is-as-follows",children:["AppendixThe cross-compilation process for ",(0,o.jsx)(r.code,{children:"coremark"})," is as follows:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["Go to the ",(0,o.jsx)(r.code,{children:"coremark-main"})," directory and replace the ",(0,o.jsx)(r.code,{children:"CC"})," compiler path in ",(0,o.jsx)(r.code,{children:"aarch64/core_portme.mak"})," with your own ",(0,o.jsx)(r.code,{children:"gcc"})," path for cross-compilation."]}),"\n",(0,o.jsxs)(r.li,{children:["Execute ",(0,o.jsx)(r.code,{children:'make PORT_DIR=aarch64 XCFLAGS="-O3 -funroll-all-loops -static --param max-inline-insns-auto=550 -DPERFORMANCE_RUN=1" REBUILD=1 run1.log'})," to compile the ",(0,o.jsx)(r.strong,{children:"single-core"})," test program; execute ",(0,o.jsx)(r.code,{children:'make PORT_DIR=aarch64 XCFLAGS="-O3 -funroll-all-loops -static --param max-inline-insns-auto=550 -DPERFORMANCE_RUN=1 -DMULTITHREAD=4  -DUSE_PTHREAD -pthread" REBUILD=1 run1.log'})," to compile the ",(0,o.jsx)(r.strong,{children:"4-core"})," test program, where the ",(0,o.jsx)(r.code,{children:"-DMULTITHREAD="})," parameter controls the number of cores for the test program."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var o=n(96540);const t={},s=o.createContext(t);function c(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);