"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9611],{40395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>i,frontMatter:()=>d,metadata:()=>a,toc:()=>p});var s=t(74848),r=t(28453);const d={sidebar_position:3},o="5.5.3 breakpad\u4f7f\u7528",a={id:"Robot_development/tros_dev/breakpad",title:"5.5.3 breakpad\u4f7f\u7528",description:"\u529f\u80fd\u80cc\u666f",source:"@site/docs/05_Robot_development/05_tros_dev/breakpad.md",sourceDirName:"05_Robot_development/05_tros_dev",slug:"/Robot_development/tros_dev/breakpad",permalink:"/rdk_doc/Robot_development/tros_dev/breakpad",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/05_Robot_development/05_tros_dev/breakpad.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"5.5.2 \u6a21\u578b\u63a8\u7406",permalink:"/rdk_doc/Robot_development/tros_dev/ai_predict"},next:{title:"5.5.4 \u6027\u80fd\u706b\u7130\u56fe",permalink:"/rdk_doc/Robot_development/tros_dev/flame_graph"}},c={},p=[{value:"\u529f\u80fd\u80cc\u666f",id:"\u529f\u80fd\u80cc\u666f",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u4efb\u52a1\u5185\u5bb9",id:"\u4efb\u52a1\u5185\u5bb9",level:2},{value:"1. \u521b\u5efa\u3001\u7f16\u8bd1\u5e76\u8fd0\u884ctest\u7a0b\u5e8f",id:"1-\u521b\u5efa\u7f16\u8bd1\u5e76\u8fd0\u884ctest\u7a0b\u5e8f",level:3},{value:"2. \u4f7f\u7528breakpad\u751f\u6210dump\u6587\u4ef6",id:"2-\u4f7f\u7528breakpad\u751f\u6210dump\u6587\u4ef6",level:3},{value:"3. \u5206\u6790",id:"3-\u5206\u6790",level:3},{value:"\u672c\u8282\u603b\u7ed3",id:"\u672c\u8282\u603b\u7ed3",level:2}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"553-breakpad\u4f7f\u7528",children:"5.5.3 breakpad\u4f7f\u7528"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd\u80cc\u666f",children:"\u529f\u80fd\u80cc\u666f"}),"\n",(0,s.jsx)(n.p,{children:"Breakpad\u662f\u4e00\u4e2a\u6bd4Linux core\u673a\u5236\u66f4\u5f3a\u5927\u7684\u3001\u7528\u4e8e\u8bb0\u5f55\u7a0b\u5e8f\u5d29\u6e83\u65f6\u4fe1\u606f\u7684\u5de5\u5177\u5957\u4ef6\uff0c\u53ef\u7528\u6765\u67e5\u770b\u88abstrip\uff0c\u4e5f\u5c31\u662f\u88ab\u5254\u9664\u4e86\u7f16\u8bd1\u5668\u8c03\u8bd5\u4fe1\u606f\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u5d29\u6e83\u4fe1\u606f\u3002\u5728\u7a0b\u5e8f\u5d29\u6e83\u65f6\uff0c\u5c06\u5d29\u6e83\u4fe1\u606f\u8bb0\u5f55\u5728\u4e00\u4e2a\u5c0f\u5de7\u7684\u201c minidump\u201d\u6587\u4ef6\u4e2d\uff0c\u5c06\u5176\u53d1\u9001\u56de\u670d\u52a1\u5668\u3002\u5e76\u4e14\u53ef\u4ee5\u4ece\u8fd9\u4e9bminidump\u548c\u7b26\u53f7\u6587\u4ef6\u6765\u751f\u6210C\u548cC++\u5806\u6808\u8ddf\u8e2a\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u7f6e\u6761\u4ef6",children:"\u524d\u7f6e\u6761\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["Breakpad\u4f4d\u4e8e",(0,s.jsx)(n.a,{href:"https://github.com/D-Robotics/breakpad.git",children:"\u4ee3\u7801\u4ed3\u5e93"}),"\uff0c\u5206\u652f\u4e3adevelop\uff0c\u76ee\u5f55\u5185\u5305\u542b\u4e86\u7ecf\u8fc7\u4ea4\u53c9\u7f16\u8bd1\uff0c\u53ef\u5728RDK\u4e0a\u8fd0\u884c\u7684bin\uff0clib\uff0cincludes\u7b49\u6587\u4ef6\u5939\uff0c\u5206\u522b\u5305\u542b\u4e86breakpad\u5de5\u5177\uff0c\u9759\u6001\u94fe\u63a5\u5e93\uff0c\u5934\u6587\u4ef6\u7b49\u5185\u5bb9\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4efb\u52a1\u5185\u5bb9",children:"\u4efb\u52a1\u5185\u5bb9"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u521b\u5efa\u7f16\u8bd1\u5e76\u8fd0\u884ctest\u7a0b\u5e8f",children:"1. \u521b\u5efa\u3001\u7f16\u8bd1\u5e76\u8fd0\u884ctest\u7a0b\u5e8f"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f7d\u6e90\u7801\u540e\uff0c\u5728Breakpad\u76ee\u5f55\u4e0b\u65b0\u5efa\u6d4b\u8bd5\u7a0b\u5e8f test.cpp\uff0c\u5e76\u7f16\u8bd1\u4e3a\u53ef\u6267\u884c\u7a0b\u5e8f test\uff0c\u5176\u4e2d\u8981\u5e26\u4e0a -g \u9009\u9879\u3002\u65b0\u5efa\u76ee\u5f55 /tmp\uff0c\u518d\u8fd0\u884c\u53ef\u6267\u884c\u7a0b\u5e8f test"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c++",children:'//  test.cpp\n\n//  \u5305\u542bbreakpad\u6838\u5fc3\u5934\u6587\u4ef6\n#include "client/linux/handler/exception_handler.h"\n\n//  \u53d1\u751fcrash\u65f6\u7684\u56de\u8c03\u51fd\u6570\nstatic bool dumpCallback(const google_breakpad::MinidumpDescriptor& descriptor,\n                          void* context, bool succeeded) {\n  printf("Dump path: %s\\n", descriptor.path());\n  return succeeded;\n}\n\n//  crash\u51fd\u6570\nvoid crash() { volatile int* a = (int*)(nullptr); *a = 1; }\n\nint main(int argc, char* argv[]) {\n  //  \u521d\u59cb\u5316 descriptor\uff0c\u8bbe\u7f6ecoredmup\u6587\u4ef6\u8def\u5f84\u4e3a /tmp\n  google_breakpad::MinidumpDescriptor descriptor("/tmp");\n  google_breakpad::ExceptionHandler eh(descriptor, NULL, dumpCallback, NULL,\n                                        true, -1);\n  crash();\n  return 0;\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# g++ ./test.cpp -o test -g \\\n  -I ./include/breakpad/ \\\n  -L ./lib/ \\\n  -lbreakpad -lbreakpad_client -lpthread\n\nroot@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# mkdir /tmp\nroot@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# ./test\nDump path: /tmp/4113ab89-7169-49df-963945b3-383e8364.dmp\nSegmentation fault\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-\u4f7f\u7528breakpad\u751f\u6210dump\u6587\u4ef6",children:"2. \u4f7f\u7528breakpad\u751f\u6210dump\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u8d4b\u4e88\u7a0b\u5e8f\u53ef\u6267\u884c\u6743\u9650, \u4f7f\u7528 dump_sys\u5de5\u5177\u628a\u53ef\u6267\u884c\u7a0b\u5e8f test\u7684symbols\u4fe1\u606fdump\u4e3atest.sym\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# chmod +x ./bin/*\nroot@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# ./bin/dump_syms ./test > test.sym\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770btest.sym\u7b2c\u4e00\u884c\u4fe1\u606f\uff0c\u5e76\u65b0\u5efa\u76f8\u5173\u6587\u4ef6\u5939"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# head -n1 test.sym\nMODULE Linux arm64 3816BF7138E87673BEE70E2C86F5FAC80 test\nroot@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# mkdir -p ./symbols/test/3816BF7138E87673BEE70E2C86F5FAC80 \nroot@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# cp test.sym ./symbols/test/3816BF7138E87673BEE70E2C86F5FAC80 \n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c\u53ef\u6267\u884c\u7a0b\u5e8ftest\uff0c\u751f\u6210 minidump.dmp\u6587\u4ef6\uff0c\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u53ef\u5f97\u5230\u7a0b\u5e8f\u7684\u5806\u6808\u4fe1\u606f\u3002\u6ce8\u610f .dmp\u6587\u4ef6\u540d\u53ef\u80fd\u4e0d\u540c\uff0c\u8fd9\u91cc\u7684\u662f\u7b2c\u4e00\u6b65\u751f\u6210\u7684dmp\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~/cc_ws/tros_ws/src/tools/breakpad# ./bin/minidump_stackwalk /tmp/4113ab89-7169-49df-963945b3-383e8364.dmp ./symbols\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-\u5206\u6790",children:"3. \u5206\u6790"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u4e00\u8282\u7b2c\u56db\u6b65\u7684\u547d\u4ee4\u7684\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff0c\u53ef\u4ee5\u770b\u5230\u7a0b\u5e8f\u5728test.cpp\u7684\u7b2c11\u884c\u5d29\u6e83\uff0c\u7b26\u5408\u7a0b\u5e8f\u7684\u9884\u671f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Thread 0 (crashed)\n  0  test!crash() [test.cpp : 11 + 0x8]\n      x0 = 0x0000000000000000    x1 = 0x0000000000000001\n      x2 = 0x0000000000000000    x3 = 0x0000000000000001\n      x4 = 0x0000005571754448    x5 = 0x0000005571754458\n      x6 = 0x000000000000017f    x7 = 0x0000000000000000\n      x8 = 0x0000000000000010    x9 = 0x0000000000000000\n    x10 = 0x0000000000000000   x11 = 0x0000000000000000\n    x12 = 0x0000007fb68d6e48   x13 = 0x0000000000000000\n    x14 = 0x0000000000000000   x15 = 0x0000000000000020\n    x16 = 0x0000005571753df8   x17 = 0x0000007fb6c5a418\n    x18 = 0x0000000000000000   x19 = 0x00000055717333d0\n    x20 = 0x0000000000000000   x21 = 0x0000005571710470\n    x22 = 0x0000000000000000   x23 = 0x0000000000000000\n    x24 = 0x0000000000000000   x25 = 0x0000000000000000\n    x26 = 0x0000000000000000   x27 = 0x0000000000000000\n    x28 = 0x0000000000000000    fp = 0x0000007ffb82b550\n      lr = 0x0000005571710668    sp = 0x0000007ffb82b540\n      pc = 0x00000055717105c4\n    Found by: given as instruction pointer in context\n  1  test!main [test.cpp : 18 + 0x0]\n    x19 = 0x00000055717333d0   x20 = 0x0000000000000000\n    x21 = 0x0000005571710470   x22 = 0x0000000000000000\n    x23 = 0x0000000000000000   x24 = 0x0000000000000000\n    x25 = 0x0000000000000000   x26 = 0x0000000000000000\n    x27 = 0x0000000000000000   x28 = 0x0000000000000000\n      fp = 0x0000007ffb82b550    sp = 0x0000007ffb82b550\n      pc = 0x0000005571710668\n    Found by: call frame info\n  2  libc.so.6 + 0x20d4c\n    x19 = 0x00000055717333d0   x20 = 0x0000000000000000\n    x21 = 0x0000005571710470   x22 = 0x0000000000000000\n    x23 = 0x0000000000000000   x24 = 0x0000000000000000\n    x25 = 0x0000000000000000   x26 = 0x0000000000000000\n    x27 = 0x0000000000000000   x28 = 0x0000000000000000\n      fp = 0x0000007ffb82b700    sp = 0x0000007ffb82b700\n      pc = 0x0000007fb68f3d50\n    Found by: call frame info\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u672c\u8282\u603b\u7ed3",children:"\u672c\u8282\u603b\u7ed3"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528breakpad\u6846\u67b6\u751f\u6210\u5d29\u6e83\u6587\u4ef6\u5e76\u5206\u6790\u5806\u6808\u4fe1\u606f\u3002\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7\u6307\u5b9adump\u6587\u4ef6\u751f\u6210\u7684\u76ee\u5f55\uff0c\u5e76\u6ce8\u518c\u5d29\u6e83\u65f6\u7684\u56de\u8c03\u51fd\u6570\u5b8c\u6210breakpad\u7684\u521d\u59cb\u5316\u3002\n\u518d\u4f7f\u7528breakpad\u7684dump_syms\u5de5\u5177\u751f\u6210symbol\u6587\u4ef6\uff0c\u540c\u65f6\u521b\u5efasymbol\u76ee\u5f55\u3002\u6700\u540e\u5229\u7528minidump_stackwalk\u5de5\u5177\u89e3\u6790\u51fadump\u6587\u4ef6\u5e76\u5206\u6790\u5806\u6808\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003breakpad\u5b98\u65b9\u7f51\u7ad9\uff1a",(0,s.jsx)(n.a,{href:"https://chromium.googlesource.com/breakpad/breakpad/",children:"https://chromium.googlesource.com/breakpad/breakpad/"})]})]})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},d=s.createContext(r);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);