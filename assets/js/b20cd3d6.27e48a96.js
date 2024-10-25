"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7641],{64323:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var l=s(74848),d=s(28453);const i={sidebar_position:1},r="8.1 \u786c\u4ef6\u548c\u7cfb\u7edf",o={id:"FAQ/hardware_and_system",title:"8.1 \u786c\u4ef6\u548c\u7cfb\u7edf",description:"\u8ba4\u8bc1\u914d\u4ef6\u53ca\u8d2d\u4e70\u94fe\u63a5\u8bf7\u53c2\u8003\u8ba4\u8bc1\u914d\u4ef6\u6e05\u5355",source:"@site/docs/08_FAQ/01_hardware_and_system.md",sourceDirName:"08_FAQ",slug:"/FAQ/hardware_and_system",permalink:"/rdk_doc/FAQ/hardware_and_system",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/08_FAQ/01_hardware_and_system.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"8. \u5e38\u89c1\u95ee\u9898",permalink:"/rdk_doc/FAQ"},next:{title:"8.2 \u63a5\u53e3\u7c7b",permalink:"/rdk_doc/FAQ/interface"}},c={},t=[{value:"\u4ec0\u4e48\u662fD-Robotics RDK\u5957\u4ef6\uff1f",id:"\u4ec0\u4e48\u662fd-robotics-rdk\u5957\u4ef6",level:2},{value:"\u5982\u4f55\u67e5\u770b\u7cfb\u7edf\u7248\u672c\u53f7",id:"\u5982\u4f55\u67e5\u770b\u7cfb\u7edf\u7248\u672c\u53f7",level:2},{value:"\u7cfb\u7edf\u7248\u672c\u548cRDK\u5e73\u53f0\u786c\u4ef6\u5bf9\u5e94\u5173\u7cfb",id:"\u7cfb\u7edf\u7248\u672c\u548crdk\u5e73\u53f0\u786c\u4ef6\u5bf9\u5e94\u5173\u7cfb",level:2},{value:"\u6444\u50cf\u5934\u63d2\u62d4\u6ce8\u610f\u4e8b\u9879",id:"\u6444\u50cf\u5934\u63d2\u62d4\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4e32\u53e3\u7ebf\u5982\u4f55\u8fde\u63a5?",id:"\u4e32\u53e3\u7ebf\u5982\u4f55\u8fde\u63a5",level:2},{value:"RDK X3\u4f9b\u7535\u6709\u4ec0\u4e48\u8981\u6c42\uff1f",id:"rdk-x3\u4f9b\u7535\u6709\u4ec0\u4e48\u8981\u6c42",level:2},{value:"RDK X3\u662f\u5426\u6709\u63a8\u8350SD\u5361\uff1f",id:"rdk-x3\u662f\u5426\u6709\u63a8\u8350sd\u5361",level:2},{value:"F37\u548cGC4663 MIPI\u6444\u50cf\u5934\u5982\u4f55\u8fde\u63a5?",id:"f37\u548cgc4663-mipi\u6444\u50cf\u5934\u5982\u4f55\u8fde\u63a5",level:2},{value:"\u5982\u4f55\u67e5\u770bRDK X3\u7684CPU\u3001BPU\u7b49\u8fd0\u884c\u72b6\u6001?",id:"\u5982\u4f55\u67e5\u770brdk-x3\u7684cpubpu\u7b49\u8fd0\u884c\u72b6\u6001",level:2},{value:"\u5982\u4f55\u8bbe\u7f6e\u81ea\u542f\u52a8?",id:"\u5982\u4f55\u8bbe\u7f6e\u81ea\u542f\u52a8",level:2},{value:"\u5f00\u53d1\u677f\u4e0a\u7535\u540e\u65e0\u663e\u793a",id:"\u5f00\u53d1\u677f\u4e0a\u7535\u540e\u65e0\u663e\u793a",level:2},{value:"\u5f00\u53d1\u677f\u4f9b\u7535\u5f02\u5e38\u7684\u5e38\u89c1\u73b0\u8c61",id:"\u5f00\u53d1\u677f\u4f9b\u7535\u5f02\u5e38\u7684\u5e38\u89c1\u73b0\u8c61",level:2},{value:"\u73b0\u8c611\uff1a\u4eceUboot\u5f15\u5bfc\u5185\u6838\u65f6\u91cd\u542f",id:"\u73b0\u8c611\u4eceuboot\u5f15\u5bfc\u5185\u6838\u65f6\u91cd\u542f",level:3},{value:"\u73b0\u8c612\uff1a\u5df2\u8fd0\u884c\u81f3\u5185\u6838\uff0c\u6570\u79d2\u540e\u91cd\u542f",id:"\u73b0\u8c612\u5df2\u8fd0\u884c\u81f3\u5185\u6838\u6570\u79d2\u540e\u91cd\u542f",level:3},{value:"\u5176\u4ed6\u73b0\u8c61\uff1a",id:"\u5176\u4ed6\u73b0\u8c61",level:3},{value:"\u5f00\u53d1\u677f\u9ed8\u8ba4\u8d26\u6237",id:"\u5f00\u53d1\u677f\u9ed8\u8ba4\u8d26\u6237",level:2},{value:"NTFS\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",id:"ntfs\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",level:2},{value:"vscode\u5de5\u5177\u652f\u6301",id:"vscode\u5de5\u5177\u652f\u6301",level:2},{value:"adb\u8c03\u8bd5\u529f\u80fd",id:"adb\u8c03\u8bd5\u529f\u80fd",level:2},{value:"apt update\u66f4\u65b0\u5931\u8d25",id:"apt-update\u66f4\u65b0\u5931\u8d25",level:2},{value:"\u5f00\u53d1\u677f\u6587\u4ef6\u4f20\u8f93\u65b9\u5f0f",id:"\u5f00\u53d1\u677f\u6587\u4ef6\u4f20\u8f93\u65b9\u5f0f",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"81-\u786c\u4ef6\u548c\u7cfb\u7edf",children:"8.1 \u786c\u4ef6\u548c\u7cfb\u7edf"}),"\n",(0,l.jsxs)(e.p,{children:["\u8ba4\u8bc1\u914d\u4ef6\u53ca\u8d2d\u4e70\u94fe\u63a5\u8bf7\u53c2\u8003",(0,l.jsx)(e.a,{href:"https://developer.d-robotics.cc/rdk_doc/Advanced_development/hardware_development/rdk_x3/accessory",children:"\u8ba4\u8bc1\u914d\u4ef6\u6e05\u5355"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u8be6\u7ec6\u8bf7\u53c2\u8003",(0,l.jsx)(e.a,{href:"/rdk_doc/FAQ/hardware_and_system",children:"D-Robotics RDK\u5957\u4ef6\u7528\u6237\u624b\u518c\u7684\u5e38\u89c1\u95ee\u9898"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u4ec0\u4e48\u662fd-robotics-rdk\u5957\u4ef6",children:"\u4ec0\u4e48\u662fD-Robotics RDK\u5957\u4ef6\uff1f"}),"\n",(0,l.jsxs)(e.p,{children:["D-Robotics Developer Kits\uff0c\u7b80\u79f0",(0,l.jsx)(e.a,{href:"https://developer.d-robotics.cc/rdk_doc/",children:"D-Robotics RDK\u5957\u4ef6"}),"\uff0c\u662f\u57fa\u4e8eD-Robotics \u667a\u80fd\u82af\u7247\u6253\u9020\u7684\u673a\u5668\u4eba\u5f00\u53d1\u8005\u5957\u4ef6\uff0c\u5305\u62ec",(0,l.jsx)(e.strong,{children:"RDK X3\uff08\u65ed\u65e5X3\u6d3e\uff09"}),"\u3001",(0,l.jsx)(e.strong,{children:"RDK X3 Module\uff08\u65ed\u65e5X3\u6a21\u7ec4\uff09"}),"\u3001",(0,l.jsx)(e.strong,{children:"RDK Ultra"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5982\u4f55\u67e5\u770b\u7cfb\u7edf\u7248\u672c\u53f7",children:"\u5982\u4f55\u67e5\u770b\u7cfb\u7edf\u7248\u672c\u53f7"}),"\n",(0,l.jsxs)(e.p,{children:["\u7cfb\u7edf\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u767b\u5f55\u7cfb\u7edf\u5e76\u4f7f\u7528\u547d\u4ee4",(0,l.jsx)(e.code,{children:"apt list --installed | grep hobot"}),"\u67e5\u770b\u7cfb\u7edf\u6838\u5fc3\u529f\u80fd\u5305\u7248\u672c\uff0c\u4f7f\u7528",(0,l.jsx)(e.code,{children:"cat /etc/version"}),"\u547d\u4ee4\u67e5\u770b\u7cfb\u7edf\u5927\u7248\u672c\u53f7\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"2.x\u7248\u672c\uff08\u4ee52.0.0\u7248\u672c\u4e3a\u4f8b\u8bf4\u660e\uff09\u7cfb\u7edf\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"root@ubuntu:~# apt list --installed | grep hobot\n\nWARNING: apt does not have a stable CLI interface. Use with caution in scripts.\n\nhobot-boot/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-bpu-drivers/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-camera/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-configs/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-display/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-dnn/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-dtb/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-io-samples/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-io/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-kernel-headers/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-models-basic/unknown,now 1.0.1 arm64 [installed]\nhobot-multimedia-dev/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-multimedia-samples/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-multimedia/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-sp-samples/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-spdev/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-utils/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-wifi/unknown,now 2.0.0-20230530181103 arm64 [installed]\nroot@ubuntu:~#\nroot@ubuntu:~# cat /etc/version\n2.0.0\nroot@ubuntu:~#\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"1.x\u7248\u672c\uff08\u4ee51.1.6\u7248\u672c\u4e3a\u4f8b\u8bf4\u660e\uff09\u7cfb\u7edf\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"root@ubuntu:~# apt list --installed | grep hobot\n\nWARNING: apt does not have a stable CLI interface. Use with caution in scripts.\n\nhobot-arm64-bins/unknown,now 1.1.5 arm64 [installed]\nhobot-arm64-boot/unknown,now 1.1.6 arm64 [installed]\nhobot-arm64-configs/unknown,now 1.1.6 arm64 [installed]\nhobot-arm64-desktop/unknown,now 1.1.5 arm64 [installed]\nhobot-arm64-dnn-python/unknown,now 1.1.6 arm64 [installed]\nhobot-arm64-gpiopy/unknown,now 1.1.5 arm64 [installed]\nhobot-arm64-hdmi-sdb/unknown,now 1.1.5 arm64 [installed]\nhobot-arm64-includes/unknown,now 1.1.5 arm64 [installed]\nhobot-arm64-libs/unknown,now 1.1.6 arm64 [installed]\nhobot-arm64-modules/unknown,now 1.1.6 arm64 [installed]\nhobot-arm64-sdb-ap6212/unknown,now 1.1.6 arm64 [installed]\nhobot-arm64-srcampy/unknown,now 1.1.5 arm64 [installed]\nhobot-linux-headers/unknown,now 1.1.5 arm64 [installed]\nhobot-models-basic/unknown,now 1.0.1 arm64 [installed]\nhobot-sp-cdev/unknown,now 1.1.6 arm64 [installed]\nroot@ubuntu:~#\nroot@ubuntu:~# cat /etc/version\nx3_ubuntu_v1.1.6\nroot@ubuntu:~#\n\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u7cfb\u7edf\u7248\u672c\u548crdk\u5e73\u53f0\u786c\u4ef6\u5bf9\u5e94\u5173\u7cfb",children:"\u7cfb\u7edf\u7248\u672c\u548cRDK\u5e73\u53f0\u786c\u4ef6\u5bf9\u5e94\u5173\u7cfb"}),"\n",(0,l.jsx)(e.p,{children:"\u7cfb\u7edf\u7248\u672c\u8bf4\u660e\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"2.x\u7248\u672c\u7cfb\u7edf\uff1a\u57fa\u4e8eRDK Linux\u5f00\u6e90\u4ee3\u7801\u5305\u5236\u4f5c\uff0c\u652f\u6301RDK X3\u3001RDK X3 Module\u7b49\u5168\u7cfb\u5217\u786c\u4ef6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"1.x\u7248\u672c\u7cfb\u7edf\uff1a\u57fa\u4e8e\u95ed\u6e90Linux\u7cfb\u7edf\u5236\u4f5c\uff0c\u5386\u53f2\u7248\u672c\uff0c\u4ec5\u652f\u6301RDK X3\u786c\u4ef6\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1.x\u7248\u672c\u7cfb\u7edf\u65e0\u6cd5\u901a\u8fc7apt\u547d\u4ee4\u76f4\u63a5\u5347\u7ea7\u52302.x\u7248\u672c\u7cfb\u7edf\uff0c\u9700\u8981\u4ee5\u70e7\u5f55\u955c\u50cf\u7684\u65b9\u5f0f\u91cd\u65b0",(0,l.jsx)(e.a,{href:"https://developer.d-robotics.cc/documents_rdk../../../01_Quick_start/install_os.md",children:"\u5b89\u88c5\u7cfb\u7edf"}),"\u3002"]})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"2.x\u7248\u672ctros.b\u4ec5\u652f\u63012.x\u7248\u672c\u7cfb\u7edf\uff0c1.x\u7248\u672ctros.b\u4ec5\u652f\u63011.x\u7248\u672c\u7cfb\u7edf\u3002"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6444\u50cf\u5934\u63d2\u62d4\u6ce8\u610f\u4e8b\u9879",children:"\u6444\u50cf\u5934\u63d2\u62d4\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u4e25\u7981\u5728\u5f00\u53d1\u677f\u672a\u65ad\u7535\u7684\u60c5\u51b5\u4e0b\u63d2\u62d4\u6444\u50cf\u5934\uff0c\u5426\u5219\u975e\u5e38\u5bb9\u6613\u70e7\u574f\u6444\u50cf\u5934\u6a21\u7ec4"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4e32\u53e3\u7ebf\u5982\u4f55\u8fde\u63a5",children:"\u4e32\u53e3\u7ebf\u5982\u4f55\u8fde\u63a5?"}),"\n",(0,l.jsx)(e.p,{children:"\u4e32\u53e3\u7ebf\u4e00\u7aef\uff08\u767d\u8272\uff09\u63a5\u5230RDK X3\uff0c\u7531\u4e8e\u63a5\u53e3\u6709\u51f9\u69fd\u6b63\u53cd\u9762\u901a\u5e38\u4e0d\u4f1a\u63a5\u53cd\uff0c\u53e6\u5916\u4e00\u7aef\u63a5\u5230\u4e32\u53e3\u8f6c\u63a5\u677f\uff0c\u6b64\u5904\u9700\u8981\u91cd\u70b9\u5173\u6ce8\uff0c\u8fde\u63a5\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:s(37690).A+"",width:"1069",height:"788"})}),"\n",(0,l.jsx)(e.h2,{id:"rdk-x3\u4f9b\u7535\u6709\u4ec0\u4e48\u8981\u6c42",children:"RDK X3\u4f9b\u7535\u6709\u4ec0\u4e48\u8981\u6c42\uff1f"}),"\n",(0,l.jsxs)(e.p,{children:["RDK X3\u901a\u8fc7USB Type C\u63a5\u53e3\u4f9b\u7535\uff0c\u5e76\u517c\u5bb9QC\u3001PD\u5feb\u5145\u534f\u8bae\u3002\u63a8\u8350\u4f7f\u7528\u652f\u6301QC\u3001PD\u5feb\u5145\u534f\u8bae\u7684\u7535\u6e90\u9002\u914d\u5668\uff0c\u6216\u8005\u81f3\u5c11\u642d\u914d",(0,l.jsx)(e.strong,{children:"5V \u76f4\u6d41 2A"}),"\u7684\u7535\u6e90\u9002\u914d\u5668\u4e3a\u5f00\u53d1\u677f\u4f9b\u7535\u3002"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6ce8\u610f\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528PC\u673aUSB\u63a5\u53e3\u4e3a\u5f00\u53d1\u677f\u4f9b\u7535\uff0c\u5426\u5219\u4f1a\u56e0\u4f9b\u7535\u4e0d\u8db3\u9020\u6210\u5f00\u53d1\u677f\u5de5\u4f5c\u5f02\u5e38\uff08\u4f8b\u5982RDK X3\u4e0a\u7535\u540e\uff0c HDMI \u65e0\u8f93\u51fa\uff08\u5b8c\u5168\u9ed1\u5c4f\uff09\uff0c\u7eff\u706f\u6ca1\u6709\u7184\u706d\uff0c\u8fde\u63a5\u4e32\u53e3\u540e\uff0c\u53d1\u73b0\u7cfb\u7edf\u5728\u53cd\u590d\u91cd\u542f\uff0c\u65e0\u6cd5\u8fdb\u5165\u64cd\u4f5c\u7cfb\u7edf\uff09\u3002"})}),"\n",(0,l.jsx)(e.h2,{id:"rdk-x3\u662f\u5426\u6709\u63a8\u8350sd\u5361",children:"RDK X3\u662f\u5426\u6709\u63a8\u8350SD\u5361\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u5efa\u8bae\u4f7f\u7528\u9ad8\u901fC10 SD\u5361\uff0c\u8001\u5361\u53ef\u80fd\u4f1a\u5b58\u5728\u70e7\u5f55\u955c\u50cf\u65e0\u6cd5\u542f\u52a8\u95ee\u9898\uff0cSD\u536116G\u4ee5\u4e0a\uff1b"}),"\n",(0,l.jsxs)(e.p,{children:["\u91d1\u58eb\u987f\uff1a ",(0,l.jsx)(e.code,{children:"https://item.jd.com/25263496192.html"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u95ea\u8fea\uff1a `",(0,l.jsx)(e.a,{href:"https://item.jd.com/1875992.html#crumb-wrap%3E",children:"https://item.jd.com/1875992.html#crumb-wrap>"})]}),"\n",(0,l.jsx)(e.h2,{id:"f37\u548cgc4663-mipi\u6444\u50cf\u5934\u5982\u4f55\u8fde\u63a5",children:"F37\u548cGC4663 MIPI\u6444\u50cf\u5934\u5982\u4f55\u8fde\u63a5?"}),"\n",(0,l.jsxs)(e.p,{children:["F37\u548cGC4663\u6444\u50cf\u5934\u6a21\u7ec4\u901a\u8fc724pin\u5f02\u9762FPC\u6392\u7ebf\u8ddf\u5f00\u53d1\u677f\u8fde\u63a5\uff0c",(0,l.jsx)(e.strong,{children:"\u6ce8\u610f\u6392\u7ebf\u4e24\u7aef\u84dd\u9762\u5411\u4e0a\u63d2\u5165\u8fde\u63a5\u5668"}),"\u3002F37\u6444\u50cf\u5934\u8fde\u63a5\u793a\u610f\u56fe\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:s(84485).A+"",width:"450",height:"297"})}),"\n",(0,l.jsx)(e.p,{children:"\u6b63\u5e38\u8fde\u63a5\u540e\u63a5\u901a\u7535\u6e90\uff0c\u6267\u884c\u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cd /app/ai_inference/03_mipi_camera_sample\nsudo python3 mipi_camera.py\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u7b97\u6cd5\u6e32\u67d3\u7ed3\u679c\u7684HDMI\u8f93\u51fa\u5982\u4e0b\u56fe\uff0c\u793a\u4f8b\u56fe\u50cf\u4e2d\u68c0\u6d4b\u5230\u4e86",(0,l.jsx)(e.code,{children:"teddy bear"}),"\u3001",(0,l.jsx)(e.code,{children:"cup"}),"\u548c",(0,l.jsx)(e.code,{children:"vase"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:s(11315).A+"",width:"1499",height:"884"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\u547d\u4ee4\uff1ai2cdetect -y -r 1   \nF37\uff1a\n     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:          -- -- -- -- -- -- -- -- -- -- -- -- -- \n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n30: -- -- -- -- -- -- -- -- -- -- -- UU -- -- -- -- \n40: 40 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n70: -- -- -- -- -- -- -- --   \n\nGC4663\uff1a\n     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:          -- -- -- -- -- -- -- -- -- -- -- -- -- \n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n20: -- -- -- -- -- -- -- -- -- 29 -- -- -- -- -- -- \n30: -- -- -- -- -- -- -- -- -- -- -- UU -- -- -- -- \n40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n70: -- -- -- -- -- -- -- --                         \n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5982\u4f55\u67e5\u770brdk-x3\u7684cpubpu\u7b49\u8fd0\u884c\u72b6\u6001",children:"\u5982\u4f55\u67e5\u770bRDK X3\u7684CPU\u3001BPU\u7b49\u8fd0\u884c\u72b6\u6001?"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo hrut_somstatus\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5982\u4f55\u8bbe\u7f6e\u81ea\u542f\u52a8",children:"\u5982\u4f55\u8bbe\u7f6e\u81ea\u542f\u52a8?"}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u5728sudo vim /etc/rc.local\u6587\u4ef6\u672b\u5c3e\u6dfb\u52a0\u547d\u4ee4\uff0c\u53ef\u5b9e\u73b0\u5f00\u673a\u81ea\u542f\u52a8\u529f\u80fd\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash -e\n# \n# rc.local\n#re\n# This script is executed at the end of each multiuser runlevel.\n# Make sure that the script will "exit 0" on success or any other\n# value on error.\n#\n# In order to enable or disable this script just change the execution\n# bits.\n#\n# By default this script does nothing.\n\n#!/bin/sh\n\nchmod a=rx,u+ws /usr/bin/sudo\nchown sunrise:sunrise /home/sunrise\n\nwhich "hrut_count" >/dev/null 2>&1\nif [ $? -eq 0 ]; then\n        hrut_count 0\nfi\n\n# Insert what you need\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u5f00\u53d1\u677f\u4e0a\u7535\u540e\u65e0\u663e\u793a",children:"\u5f00\u53d1\u677f\u4e0a\u7535\u540e\u65e0\u663e\u793a"}),"\n",(0,l.jsx)("font",{color:"Blue",children:"\u3010\u95ee\u9898\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f00\u53d1\u677f\u4e0a\u7535\u540e\uff0c\u663e\u793a\u5668\u6301\u7eed\u65e0\u753b\u9762\u8f93\u51fa\uff0c\u8fde\u63a5\u4e32\u53e3\u53d1\u73b0\u7cfb\u7edf\u53cd\u590d\u91cd\u542f\u6216\u8005\u963b\u585e\u5728uboot\u547d\u4ee4\u884c"}),"\n"]}),"\n",(0,l.jsx)("font",{color:"Green",children:"\u3010\u89e3\u7b54\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f9b\u7535\u4e0d\u8db3\u5bfc\u81f4\u53cd\u590d\u91cd\u542f\uff0c\u66f4\u6362\u7b26\u5408\u5f00\u53d1\u677f\u8981\u6c42\u76845V/3A\u9002\u914d\u5668\uff0c\u63a8\u8350\u4f7f\u7528\u5b98\u65b9\u63a8\u8350\u7684\u9002\u914d\u5668"}),"\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528\u7684USB\u7ebf\u8d28\u91cf\u4e0d\u597d\uff0c\u4f1a\u5f15\u8d77\u4f9b\u7535\u7684\u4e0d\u7a33\u5b9a\u5bfc\u81f4\u5f02\u5e38\u65ad\u7535\u3001\u53cd\u590d\u91cd\u542f"}),"\n",(0,l.jsx)(e.li,{children:"\u4e32\u53e3\u8bef\u89e6\u5bfc\u81f4\u963b\u585e\u5728uboot\uff0c\u91cd\u65b0\u7ed9\u8bbe\u5907\u4e0a\u7535\u6062\u590d"}),"\n",(0,l.jsx)(e.li,{children:"Micro SD\u5361\u955c\u50cf\u683c\u5f0f\u9519\u8bef\uff0c\u5f53\u4e32\u53e3\u63d0\u793a\u5982\u4e0blog\u65f6\uff0c\u9700\u8981\u91cd\u65b0\u5236\u4f5c\u955c\u50cf"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20221124194527634",src:s(53074).A+"",width:"540",height:"202"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Micro SD\u5361\u8d28\u91cf\u95ee\u9898\uff0c\u5f53\u4e32\u53e3\u63d0\u793a\u5982\u4e0blog\uff0c\u8bf4\u660eMicro SD\u5361\u635f\u574f\uff0c\u9700\u8981\u66f4\u6362\u65b0\u5361"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20221124194636213",src:s(80500).A+"",width:"612",height:"176"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20221124194721750",src:s(87241).A+"",width:"637",height:"128"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5f00\u53d1\u677f\u4f9b\u7535\u5f02\u5e38\u7684\u5e38\u89c1\u73b0\u8c61",children:"\u5f00\u53d1\u677f\u4f9b\u7535\u5f02\u5e38\u7684\u5e38\u89c1\u73b0\u8c61"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u53d1\u73b0\u5f00\u53d1\u677f\u4e0a\u7535\u540e\u72b6\u6001\u706f\u4e00\u76f4\u4e0d\u7184\u706d\u6216\u8005\u4e0d\u95ea\u70c1\uff0cHDMI\u663e\u793a\u5668\u4e0a\u4e5f\u4e0d\u663e\u793a\u4efb\u4f55\u753b\u9762\uff0c\u5219\u5efa\u8bae\u5148\u6392\u67e5\u4f9b\u7535\u662f\u5426\u6b63\u5e38\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u9700\u8981\u4f7f\u7528\u652f\u6301",(0,l.jsx)(e.strong,{children:"5V 3A"}),"\u7684\u7535\u6e90\u9002\u914d\u5668\u4e3a\u5f00\u53d1\u677f\u4f9b\u7535\uff0c\u63a8\u8350\u4f7f\u7528",(0,l.jsx)(e.a,{href:"https://developer.d-robotics.cc/rdk_doc/Advanced_development/hardware_development/rdk_x3/accessory",children:"\u57fa\u7840\u914d\u4ef6\u6e05\u5355"}),"\u4e2d\u63a8\u8350\u7684\u7535\u6e90\u9002\u914d\u5668\u578b\u53f7\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679c\u4f7f\u7528\u81ea\u5df1\u7684\u5145\u7535\u5668\uff0c\u8bf7\u9009\u7528\u6b63\u89c4\u54c1\u724c\u7684USB Type C \u53e3\u4f9b\u7535\u7ebf\uff0c\u5e76\u4e14\u6ee1\u8db3",(0,l.jsx)(e.strong,{children:"5V 3A"})]}),"\n",(0,l.jsx)(e.li,{children:"\u4e0d\u8981\u76f4\u63a5\u4f7f\u7528\u7535\u8111\u7684USB\u53e3\u7ed9\u5f00\u53d1\u677f\u4f9b\u7535"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8981\u786e\u5b9a\u662f\u5426\u7531\u4f9b\u7535\u95ee\u9898\u5bfc\u81f4\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5f00\u53d1\u677f\u8fde\u63a5\u5230\u4e32\u53e3\uff0c\u5e76\u89c2\u5bdf\u542f\u52a8\u65e5\u5fd7\uff0c\u76ee\u524d\u4ee5\u4e0b\u73b0\u8c61\u53ef\u4ee5\u660e\u786e\u5224\u65ad\u662f\u4f9b\u7535\u5f02\u5e38\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u73b0\u8c611\u4eceuboot\u5f15\u5bfc\u5185\u6838\u65f6\u91cd\u542f",children:"\u73b0\u8c611\uff1a\u4eceUboot\u5f15\u5bfc\u5185\u6838\u65f6\u91cd\u542f"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u65f6\u5904\u5728uboot\u9636\u6bb5\uff0cuboot\u7684\u5927\u90e8\u5206\u4efb\u52a1\u5df2\u7ecf\u5b8c\u6210\uff0c\u5728\u628a\u5185\u6838\u3001\u8bbe\u5907\u6811\u7b49\u4eceSD\u5361\u4e0a\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u65f6\uff0c\u6216\u5728\u8df3\u8f6c\u8fdb\u5185\u6838\u6267\u884c\u65f6\uff0c\u5f00\u53d1\u677f\u5f02\u5e38\u91cd\u542f\u4e86\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20230914173433676",src:s(97142).A+"",width:"643",height:"540"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20230914173911690",src:s(69253).A+"",width:"745",height:"287"})}),"\n",(0,l.jsx)(e.h3,{id:"\u73b0\u8c612\u5df2\u8fd0\u884c\u81f3\u5185\u6838\u6570\u79d2\u540e\u91cd\u542f",children:"\u73b0\u8c612\uff1a\u5df2\u8fd0\u884c\u81f3\u5185\u6838\uff0c\u6570\u79d2\u540e\u91cd\u542f"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u65f6\u5185\u6838\u52a0\u8f7d\u5e76\u5df2\u7ecf\u8fd0\u884c\uff0c\u6b63\u5728\u8fdb\u884c\u5185\u6838\u3001\u9a71\u52a8\u7684\u52a0\u8f7d\u548c\u521d\u59cb\u5316\uff0c\u5f00\u53d1\u677f\u5f02\u5e38\u91cd\u542f\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"image-20230914174123619",src:s(66438).A+"",width:"883",height:"446"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5176\u4ed6\u73b0\u8c61",children:"\u5176\u4ed6\u73b0\u8c61\uff1a"}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u524d\u4f9b\u7535\u4e0d\u8db3\u7684\u73b0\u8c61\u53ea\u80fd\u901a\u8fc7\u4e32\u53e3\u65e5\u5fd7\u5206\u6790\uff0c\u5982\u679c\u542f\u52a8\u65e5\u5fd7\u4e0a\u89c2\u5bdf\u5230\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u6ca1\u6709\u4efb\u4f55\u7684",(0,l.jsx)(e.strong,{children:"\u9519\u8bef"}),"\u548c",(0,l.jsx)(e.strong,{children:"\u544a\u8b66"}),"\u4fe1\u606f\uff0c\u5f00\u53d1\u677f\u76f4\u63a5\u6253\u5370 ",(0,l.jsx)(e.code,{children:"NOTICE:  fast_boot:0"})," \u91cd\u542f\uff0c\u90a3\u4e48\u57fa\u672c\u53ef\u4ee5\u5224\u65ad\u662f\u4f9b\u7535\u4e0d\u8db3\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u76ee\u524d\u56e0\u4e3a\u4f9b\u7535\u4e0d\u8db3\u5f15\u8d77\u7684\u73b0\u8c61\u5bb9\u6613\u548c\u5176\u4ed6\u6bd4\u5982SD\u5361\u4e0d\u8bc6\u522b\u3001\u786c\u4ef6\u635f\u574f\u7b49\u73b0\u8c61\u6df7\u6dc6\uff0c\u5982\u679c\u4e0d\u63a5\u5165\u4e32\u53e3\u67e5\u770b\u65e5\u5fd7\u5219\u4e0d\u597d\u660e\u786e\u5224\u65ad\u3002\u63a8\u8350\u4f7f\u7528",(0,l.jsx)(e.a,{href:"/hardware_development/rdk_x3/accessory#basic_accessories",children:"\u57fa\u7840\u914d\u4ef6\u6e05\u5355"}),"\u4e2d\u63a8\u8350\u7684\u7535\u6e90\u9002\u914d\u5668\u578b\u53f7\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5f00\u53d1\u677f\u9ed8\u8ba4\u8d26\u6237",children:"\u5f00\u53d1\u677f\u9ed8\u8ba4\u8d26\u6237"}),"\n",(0,l.jsx)("font",{color:"Blue",children:"\u3010\u95ee\u9898\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f00\u53d1\u677f\u9ed8\u8ba4\u652f\u6301\u7684\u8d26\u6237\u7c7b\u578b"}),"\n"]}),"\n",(0,l.jsx)("font",{color:"Green",children:"\u3010\u89e3\u7b54\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f00\u53d1\u677f\u9ed8\u8ba4\u652f\u6301\u4e24\u79cd\u8d26\u6237\uff0c\u5177\u4f53\u5982\u4e0b\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u9ed8\u8ba4\u8d26\u6237\uff1a\u7528\u6237\u540d",(0,l.jsx)(e.code,{children:"sunrise"}),"  \u5bc6\u7801",(0,l.jsx)(e.code,{children:"sunrise"})]}),"\n",(0,l.jsxs)(e.li,{children:["root\u8d26\u6237\uff1a\u7528\u6237\u540d",(0,l.jsx)(e.code,{children:"root"}),"  \u5bc6\u7801",(0,l.jsx)(e.code,{children:"root"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"ntfs\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d",children:"NTFS\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d"}),"\n",(0,l.jsx)("font",{color:"Blue",children:"\u3010\u95ee\u9898\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"NTFS\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\u540e\uff0c\u5982\u4f55\u652f\u6301\u8bfb\u5199\u6a21\u5f0f"}),"\n"]}),"\n",(0,l.jsx)("font",{color:"Green",children:"\u3010\u89e3\u7b54\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5b89\u88c5ntfs-3g\u529f\u80fd\u5305\u540e\uff0c\u518d\u6302\u8f7dNTFS\u6587\u4ef6\u7cfb\u7edf\u5373\u53ef\u652f\u6301\u5199\u6a21\u5f0f\u3002\u5b89\u88c5\u547d\u4ee4\u5982\u4e0b\uff1a","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt -y install ntfs-3g\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"vscode\u5de5\u5177\u652f\u6301",children:"vscode\u5de5\u5177\u652f\u6301"}),"\n",(0,l.jsx)("font",{color:"Blue",children:"\u3010\u95ee\u9898\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f00\u53d1\u677f\u662f\u5426\u652f\u6301",(0,l.jsx)(e.code,{children:"vscode"}),"\u5f00\u53d1\u5de5\u5177"]}),"\n"]}),"\n",(0,l.jsx)("font",{color:"Green",children:"\u3010\u89e3\u7b54\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f00\u53d1\u677f\u4e0d\u652f\u6301",(0,l.jsx)(e.code,{children:"vscode"}),"\u672c\u5730\u5b89\u88c5\uff0c\u7528\u6237\u53ef\u5728PC\u7aef\u901a\u8fc7",(0,l.jsx)(e.code,{children:"ssh-remote"}),"\u63d2\u4ef6\u65b9\u5f0f\u8fdc\u7a0b\u94fe\u63a5\u5f00\u53d1\u677f"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"adb\u8c03\u8bd5\u529f\u80fd",children:"adb\u8c03\u8bd5\u529f\u80fd"}),"\n",(0,l.jsx)("font",{color:"Blue",children:"\u3010\u95ee\u9898\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f00\u53d1\u677f\u5982\u4f55\u542f\u52a8adb\u8c03\u8bd5\u529f\u80fd"}),"\n"]}),"\n",(0,l.jsx)("font",{color:"Green",children:"\u3010\u89e3\u7b54\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Ubuntu\u7cfb\u7edf\u4e2d\u9ed8\u8ba4\u542f\u52a8\u4e86",(0,l.jsx)(e.code,{children:"adbd"}),"\u670d\u52a1\uff0c\u7528\u6237\u53ea\u9700\u5728\u7535\u8111\u5b89\u88c5adb\u5de5\u5177\u540e\u5373\u53ef\u4f7f\u7528\uff0c\u65b9\u6cd5\u53ef\u53c2\u8003",(0,l.jsx)(e.a,{href:"https://developer.d-robotics.cc/forumDetail/88859074455714818",children:"bootloader\u955c\u50cf\u66f4\u65b0"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"apt-update\u66f4\u65b0\u5931\u8d25",children:"apt update\u66f4\u65b0\u5931\u8d25"}),"\n",(0,l.jsx)("font",{color:"Blue",children:"\u3010\u95ee\u9898\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Ubuntu\u7cfb\u7edf\u4e2d\u8fd0\u884c",(0,l.jsx)(e.code,{children:"apt update"}),"\u547d\u4ee4\uff0c\u63d0\u793a\u4ee5\u4e0b\u9519\u8bef\uff1a","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"Reading package lists... Done\nE: Could not get lock /var/lib/apt/lists/lock. It is held by process 4299 (apt-get)\nN: Be aware that removing the lock file is not a solution and may break your system.\nE: Unable to lock directory /var/lib/apt/lists/\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)("font",{color:"Green",children:"\u3010\u89e3\u7b54\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Ubuntu\u7cfb\u7edf\u81ea\u52a8\u8fd0\u884c\u7684\u66f4\u65b0\u7a0b\u5e8f\uff0c\u8ddf\u7528\u6237",(0,l.jsx)(e.code,{children:"apt update"}),"\u64cd\u4f5c\u53d1\u751f\u51b2\u7a81\u3002\u53ef\u4ee5\u6740\u6b7b\u7cfb\u7edf\u81ea\u52a8\u8fd0\u884c\u7684\u66f4\u65b0\u8fdb\u7a0b\u540e\u91cd\u8bd5\uff0c\u4f8b\u5982",(0,l.jsx)(e.code,{children:"kill 4299"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5f00\u53d1\u677f\u6587\u4ef6\u4f20\u8f93\u65b9\u5f0f",children:"\u5f00\u53d1\u677f\u6587\u4ef6\u4f20\u8f93\u65b9\u5f0f"}),"\n",(0,l.jsx)("font",{color:"Blue",children:"\u3010\u95ee\u9898\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f00\u53d1\u677f\u548c\u7535\u8111\u4e4b\u95f4\u7684\u6587\u4ef6\u4f20\u8f93\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b"}),"\n"]}),"\n",(0,l.jsx)("font",{color:"Green",children:"\u3010\u89e3\u7b54\u3011"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u3001USB\u7b49\u65b9\u5f0f\u8fdb\u884c\u4f20\u8f93\u3002\u5176\u4e2d\uff0c\u7f51\u7edc\u53ef\u4f7f\u7528ftp\u5de5\u5177\u3001scp\u547d\u4ee4\u7b49\u65b9\u5f0f\uff0cUSB\u53ef\u4f7f\u7528u\u76d8\u3001adb\u7b49\u65b9\u5f0f\u3002\u4ee5scp\u547d\u4ee4\u4e3a\u4f8b\uff0c\u6587\u4ef6\u4f20\u8f93\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u62f7\u8d1d",(0,l.jsx)(e.code,{children:"local_file"}),"\u5355\u4e2a\u6587\u4ef6\u5230\u5f00\u53d1\u677f\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"scp local_file sunrise@192.168.1.10:/userdata/\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u62f7\u8d1d",(0,l.jsx)(e.code,{children:"local_folder"}),"\u6574\u4e2a\u76ee\u5f55\u5230\u5f00\u53d1\u677f\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"scp -r local_folder sunrise@192.168.1.10:/userdata/\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},37690:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/connect-848436bd48f00d7849df7ad81fe2a804.png"},11315:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/image-20220511181747071-f88dd92886b5dbee1a81d6860a234007.png"},84485:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/image-X3-PI-Camera-3e9b3c6e20aa63b5cae2ef3a26deeef5.png"},53074:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/image-20221124194527634-232d982f2ae8b1307bce7022cd23052a.png"},80500:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/image-20221124194636213-638da636b2f5281cfa19ce4b387de02d.png"},87241:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/image-20221124194721750-33277e8a6753273b130a30c0d82fe9b7.png"},97142:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/image-20230914173433676-9d80fbe045ee291cd992597d9d3cc33f.png"},69253:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/image-20230914173911690-d262d651d1e8cfc8a18497f9d720a525.png"},66438:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/image-20230914174123619-5e731931e1122c4e29ba4d77c1063eb8.png"},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var l=s(96540);const d={},i=l.createContext(d);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);