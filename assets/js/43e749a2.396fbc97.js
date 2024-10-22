"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5184],{14922:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var i=s(74848),d=s(28453);const c={sidebar_position:11},l="7.3.11 \u67e5\u8be2\u591a\u5a92\u4f53\u6a21\u5757\u8c03\u8bd5\u4fe1\u606f",r={id:"Advanced_development/multimedia_development/debug_info",title:"7.3.11 \u67e5\u8be2\u591a\u5a92\u4f53\u6a21\u5757\u8c03\u8bd5\u4fe1\u606f",description:"\u9a71\u52a8\u4e0e\u591a\u5a92\u4f53\u7cfb\u7edf\u4ea4\u4e92",source:"@site/docs/07_Advanced_development/03_multimedia_development/debug_info.md",sourceDirName:"07_Advanced_development/03_multimedia_development",slug:"/Advanced_development/multimedia_development/debug_info",permalink:"/rdk_doc/Advanced_development/multimedia_development/debug_info",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/07_Advanced_development/03_multimedia_development/debug_info.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"7.3.10 \u89c6\u9891\u89e3\u7801",permalink:"/rdk_doc/Advanced_development/multimedia_development/video_decode"},next:{title:"7.3.12 \u591a\u5a92\u4f53\u6027\u80fd\u8c03\u8bd5",permalink:"/rdk_doc/Advanced_development/multimedia_development/performance_debug"}},t={},h=[{value:"\u9a71\u52a8\u4e0e\u591a\u5a92\u4f53\u7cfb\u7edf\u4ea4\u4e92",id:"\u9a71\u52a8\u4e0e\u591a\u5a92\u4f53\u7cfb\u7edf\u4ea4\u4e92",level:2},{value:"VIO\u8c03\u8bd5\u4fe1\u606f",id:"vio\u8c03\u8bd5\u4fe1\u606f",level:2},{value:"SIF\u8c03\u8bd5\u4fe1\u606f",id:"sif\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"ISP\u8c03\u8bd5\u4fe1\u606f",id:"isp\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"IPU\u8c03\u8bd5\u4fe1\u606f",id:"ipu\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"PYM\u8c03\u8bd5\u4fe1\u606f",id:"pym\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"IAR\u8c03\u8bd5\u4fe1\u606f",id:"iar\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"VPU\u8c03\u8bd5\u4fe1\u606f",id:"vpu\u8c03\u8bd5\u4fe1\u606f",level:2},{value:"VENC\u8c03\u8bd5\u4fe1\u606f",id:"venc\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"VDEC\u8c03\u8bd5\u4fe1\u606f",id:"vdec\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"JPU\u8c03\u8bd5\u4fe1\u606f",id:"jpu\u8c03\u8bd5\u4fe1\u606f",level:2},{value:"JENC\u8c03\u8bd5\u4fe1\u606f",id:"jenc\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"JDEC\u8c03\u8bd5\u4fe1\u606f",id:"jdec\u8c03\u8bd5\u4fe1\u606f",level:3},{value:"\u5a92\u4f53\u6a21\u5757\u65e5\u5fd7\u67e5\u770b",id:"\u5a92\u4f53\u6a21\u5757\u65e5\u5fd7\u67e5\u770b",level:2},{value:"\u65e5\u5fd7\u7ea7\u522b",id:"\u65e5\u5fd7\u7ea7\u522b",level:3},{value:"\u65e5\u5fd7\u6807\u7b7e",id:"\u65e5\u5fd7\u6807\u7b7e",level:3},{value:"\u65e5\u5fd7\u8fc7\u6ee4",id:"\u65e5\u5fd7\u8fc7\u6ee4",level:3},{value:"\u65e5\u5fd7\u5b58\u50a8",id:"\u65e5\u5fd7\u5b58\u50a8",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"7311-\u67e5\u8be2\u591a\u5a92\u4f53\u6a21\u5757\u8c03\u8bd5\u4fe1\u606f",children:"7.3.11 \u67e5\u8be2\u591a\u5a92\u4f53\u6a21\u5757\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.h2,{id:"\u9a71\u52a8\u4e0e\u591a\u5a92\u4f53\u7cfb\u7edf\u4ea4\u4e92",children:"\u9a71\u52a8\u4e0e\u591a\u5a92\u4f53\u7cfb\u7edf\u4ea4\u4e92"}),"\n",(0,i.jsx)(n.p,{children:"\u5728VIN\u4e2d\uff0ccamera\u76f8\u5173\u7684\u63a7\u5236\u5168\u90e8\u5728\u7528\u6237\u6001\u5b8c\u6210\uff0c\u800cmipi/ISP\u7684\u63a7\u5236\u5219\u5728\u9a71\u52a8\u4e2d\u5b8c\u6210\uff0c\u901a\u8fc7\u5c06\u7528\u6237\u6001\u76f8\u5173\u7684\u914d\u7f6e\u4f20\u9012\u7ed9\u9a71\u52a8\uff0c\u7531\u9a71\u52a8\u4f7f\u7528\uff0c\u5bf9\u786c\u4ef6\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5404\u4e2a\u76f8\u5173\u7684\u8bbe\u5907\u8282\u70b9\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220327233823654",src:s(35681).A+"",width:"1034",height:"283"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"mipi_host0~4:"})," mipi host\u914d\u7f6e\u8282\u70b9\uff0c\u4e3b\u8981\u5b8c\u6210mipi_host\u7684\u521d\u59cb\u5316\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"mipi_dphy:"})," dphy\u76f8\u5173\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"mipi_dev0:"})," \u8be5\u8bbe\u5907\u8282\u70b9\u4f1a\u5728\u914d\u7f6e\u4e2d\u4f7f\u80fd\uff0c\u914d\u7f6emipi_dev\u8f93\u51fa\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"SIF\u5171\u6709\u4e24\u4e2a\u8282\u70b9\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"sif_capture:"})," \u8bbe\u7f6esif\u76f8\u5173\u5c5e\u6027\u4fe1\u606f\uff0c\u5bf9sif\u6a21\u5757\u521d\u59cb\u5316\uff0c\u53ef\u4ee5dump sif\u6a21\u5757\u51fa\u6765\u7684\u56fe\u50cf\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"sif_ddrin:"})," \u8bbe\u7f6eddrin\u8282\u70b9\u7684\u5c5e\u6027\u4fe1\u606f/\u5c3a\u5bf8/\u683c\u5f0f\u7b49\uff0csif-offline-isp\u573a\u666f\u624d\u4f7f\u7528\uff0c\u8d1f\u8d23\u8bfb\u5185\u5b58\u6570\u636e\u7ed9isp\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"ISP\u76f8\u5173\u8282\u70b9\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ac_calib:"})," calibration\u6548\u679c\u5e93\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ac_isp:"})," isp\u6548\u679c\u8c03\u8282\u63a5\u53e3\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ac_isp4uf0~7:"})," isp\u9a71\u52a8\u7b97\u6cd5\u5e93\u53d1command\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ac_sbuf0~7:"})," \u7b97\u6cd5\u5e93\u901a\u8fc7\u8be5\u8bbe\u5907\u8282\u70b9\u4e0eisp\u9a71\u52a8\u540c\u6b65\u4e00\u4e9b\u7b97\u6cd5\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"video0~7:"})," isp v4l2\u8bbe\u5907\u8282\u70b9\uff0c\u8bbe\u7f6e\u5c3a\u5bf8/\u683c\u5f0f/\u5927\u5c0f\uff0c\u5185\u5b58\u6620\u5c04\u901a\u8fc7\u8be5\u8282\u70b9\u4e0e\u8bbe\u5907\u4ea4\u4e92\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"VIN\u4e2d\uff0cMIPI/SIF\u7684\u529f\u80fd\u76f8\u5bf9\u7b80\u5355\uff0c\u5bf9\u4e8eMIPI\u5b9e\u9645\u4e0a\u5c31\u662f\u786c\u4ef6\u4e0a\u62bd\u8c61\u51fa\u6765\u7684\u51e0\u4e2a\u8282\u70b9\uff0c\u7528\u4e8e\u7528\u6237\u914d\u7f6e\u53c2\u6570\uff0c\u4ece\u800c\u8bbe\u7f6eMIPI\nHOST\u5230\u5bf9\u5e94\u7684\u72b6\u6001\uff0c\u80fd\u591f\u63a5\u53d7sensor\u7684MIPI\u6570\u636e\u8f93\u5165\uff1b"}),"\n",(0,i.jsx)(n.p,{children:"\u800cSIF\u5219\u662f\u5c06MIPI HOST\u6536\u5230\u7684\u6570\u636e\u518d\u8fdb\u884c\u4e00\u5b9a\u7684\u5904\u7406\uff0c\u6bd4\u5982\u5c06\u4e0d\u540csensor\u7684\u6570\u636e\u4fdd\u5b58\u5230\u4e0d\u540c\u7684ddr\u5730\u5740\u7b49\uff1b"}),"\n",(0,i.jsx)(n.p,{children:"ISP\u7684\u529f\u80fd\u76f8\u5bf9\u6765\u8bf4\u662f\u6700\u590d\u6742\u7684\uff0c\u5b83\u9700\u8981\u548csensor\u4ea4\u4e92/\u9700\u8981\u52a0\u8f7d\u5bf9\u5e94\u7684\u7b97\u6cd5\u5e93/\u9700\u8981\u52a0\u8f7d\u5bf9\u5e94\u7684\u6548\u679c\u5e93\uff0c\u5728\u914d\u7f6e\u4ee3\u7801\u4e2d\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(87197).A+"",width:"531",height:"338"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ispAlgoState:"}),"  \u8fd9\u4e2a\u6807\u7b7e\u8868\u793a\u4f7f\u75283A\u7b97\u6cd5\uff0c\u5c06\u4f1a\u4f7f\u7528lib_algo.so\u5e93\u7684\u7b97\u6cd5\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"calib\uff1a"})," \u8fd9\u4e2a\u5219\u662f\u4e0d\u540csensor\u914d\u7f6e\u51fa\u6765\u7684\u6548\u679c\u5e93\uff0c\u7528\u4e8e\u8c03\u6574sensor\u6548\u679c\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"vio\u8c03\u8bd5\u4fe1\u606f",children:"VIO\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.h3,{id:"sif\u8c03\u8bd5\u4fe1\u606f",children:"SIF\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770bSIF\u8c03\u8bd5\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/devices/platform/soc/a4001000.sif/cfg_info\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(74231).A+"",width:"1266",height:"537"})}),"\n",(0,i.jsx)(n.h3,{id:"isp\u8c03\u8bd5\u4fe1\u606f",children:"ISP\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770bISP\u8c03\u8bd5\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/devices/platform/soc/b3000000.isp/isp_status\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(85717).A+"",width:"830",height:"445"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ipu\u8c03\u8bd5\u4fe1\u606f",children:"IPU\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u54ea\u4e9bpipe\u4f7f\u80fd\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /sys/devices/platform/soc/a4040000.ipu/info/enabled_pipeline\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u5404pipe\u914d\u7f6e\u60c5\u51b5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /sys/devices/platform/soc/a4040000.ipu/info/pipelinex_info # x \u53d6\u503c0-7\n# \u793a\u4f8b\ncat /sys/devices/platform/soc/a4040000.ipu/info/pipeline0_info\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(31690).A+"",width:"1076",height:"450"})}),"\n",(0,i.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"subdev0\u5bf9\u5e94ipu src\uff0csbudev1~6\u5bf9\u5e94ipu\nus/ds0~ds4\u3002subdev\u540e\u9762\u62ec\u53f7\u91cc\u7684\u4fe1\u606f\u8868\u793a\u8fd9\u4e2a\u901a\u9053\u7684buffer\u5728\u5404\u4e2a\u72b6\u6001\u7684\u6570\u91cf\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"pym\u8c03\u8bd5\u4fe1\u606f",children:"PYM\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u54ea\u4e9bpipe\u4f7f\u80fd\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/devices/platform/soc/a4042000.pym/info/enabled_pipeline\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u5404pipe\u914d\u7f6e\u60c5\u51b5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /sys/devices/platform/soc/a4042000.pym/info/pipelinex_info # x\u53d6\u503c0-7\n# \u793a\u4f8b\ncat /sys/devices/platform/soc/a4042000.pym/info/pipeline0_info\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(10135).A+"",width:"1069",height:"791"})}),"\n",(0,i.jsx)(n.h3,{id:"iar\u8c03\u8bd5\u4fe1\u606f",children:"IAR\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770bIAR\u8c03\u8bd5\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/kernel/debug/iar\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(36641).A+"",width:"901",height:"301"})}),"\n",(0,i.jsx)(n.h2,{id:"vpu\u8c03\u8bd5\u4fe1\u606f",children:"VPU\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.h3,{id:"venc\u8c03\u8bd5\u4fe1\u606f",children:"VENC\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u7f16\u7801\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/kernel/debug/vpu/venc\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(62429).A+"",width:"1622",height:"882"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(66336).A+"",width:"925",height:"383"})}),"\n",(0,i.jsx)(n.h3,{id:"vdec\u8c03\u8bd5\u4fe1\u606f",children:"VDEC\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u89e3\u7801\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/kernel/debug/vpu/vdec\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(12050).A+"",width:"1058",height:"253"})}),"\n",(0,i.jsx)(n.h2,{id:"jpu\u8c03\u8bd5\u4fe1\u606f",children:"JPU\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.h3,{id:"jenc\u8c03\u8bd5\u4fe1\u606f",children:"JENC\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u7f16\u7801\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/kernel/debug/jpu/jenc\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(75070).A+"",width:"1398",height:"759"})}),"\n",(0,i.jsx)(n.h3,{id:"jdec\u8c03\u8bd5\u4fe1\u606f",children:"JDEC\u8c03\u8bd5\u4fe1\u606f"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u89e3\u7801\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat /sys/kernel/debug/jpu/jdec\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(63934).A+"",width:"831",height:"199"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5a92\u4f53\u6a21\u5757\u65e5\u5fd7\u67e5\u770b",children:"\u5a92\u4f53\u6a21\u5757\u65e5\u5fd7\u67e5\u770b"}),"\n",(0,i.jsx)(n.h3,{id:"\u65e5\u5fd7\u7ea7\u522b",children:"\u65e5\u5fd7\u7ea7\u522b"}),"\n",(0,i.jsx)(n.p,{children:"\u63a7\u5236\u53f0\u8f93\u51fa\u65e5\u5fd7\u548clogcat\u67e5\u770b\u65e5\u5fd7\u662f\u4e8c\u9009\u4e00\u7684\u5173\u7cfb\uff0c\u901a\u8fc7\u73af\u5883\u53d8\u91cfLOGLEVEL\u6765\u63a7\u5236\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982export LOGLEVEL=14\uff0c\u5373\u628a\u6bd4Debug\u7ea7\u522b\u9ad8\u7684\u65e5\u5fd7\uff08<=14\uff09\u5168\u90e8\u8f93\u51fa\u5230Console\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u60f3\u901a\u8fc7logcat\u67e5\u770bDebug\u53ca\u66f4\u9ad8\u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\u9700\u8981export LOGLEVEL=4\u3002"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u63a7\u5236\u53f0\u8f93\u51fa\u65e5\u5fd7"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u901a\u8fc7logcat\u67e5\u770b\u65e5\u5fd7"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CONSOLE_DEBUG_LEVEL"}),(0,i.jsx)(n.td,{children:"14"}),(0,i.jsx)(n.td,{children:"ALOG_DEBUG_LEVEL"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CONSOLE_INFO_LEVEL"}),(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:"ALOG_INFO_LEVEL"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CONSOLE_WARNING_LEVEL"}),(0,i.jsx)(n.td,{children:"12"}),(0,i.jsx)(n.td,{children:"ALOG_WARNING_LEVEL"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CONSOLE_ERROR_LEVEL"}),(0,i.jsx)(n.td,{children:"11"}),(0,i.jsx)(n.td,{children:"ALOG_ERROR_LEVEL"}),(0,i.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u65e5\u5fd7\u6807\u7b7e",children:"\u65e5\u5fd7\u6807\u7b7e"}),"\n",(0,i.jsx)(n.p,{children:"\u5a92\u4f53\u6a21\u5757\u5185\u90e8\u5b9a\u4e49\u4e86\u4e00\u4e9bLOG_TAG\uff0c\u6240\u6709TAG\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"vio-core vio-devop ipu sif dwe gdc pym vin isp rgn mipi vp vps venc vdec audio vot vio-bufmgr ffmedia multimedia"})})})}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"\u6ca1\u6709\u6807\u7b7e\u7684\u65e5\u5fd7\u4e0d\u80fd\u8fc7\u6ee4\uff0c\u5728\u6ee1\u8db3LOG\nLEVEL\u7ea7\u522b\u7684\u60c5\u51b5\u4e0b\u4f1a\u88ab\u6253\u5370\u51fa\u6765\uff08\u4e00\u822c\u89c1\u4e8e\u5e94\u7528\u7a0b\u5e8f\u6216\u6ca1\u52a0TAG\u7684\u6a21\u5757\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u60f3\u7ed9\u5e94\u7528\u7a0b\u5e8f\u52a0\u4e0aTAG\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u5728\u6587\u4ef6\u6700\u5f00\u5934\u5b9a\u4e49#define LOG_TAG \u201cAPP\u201d"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5305\u542b\u76f8\u5173\u5934\u6587\u4ef6 #include \u201clogging.h\u201d"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u65e5\u5fd7\u6253\u5370\u7528logging.h\u5934\u6587\u4ef6\u4e2d\u7684pr_xxx\u5f00\u5173\u7684\u5b8f\u5b9a\u4e49"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u65e5\u5fd7\u8fc7\u6ee4",children:"\u65e5\u5fd7\u8fc7\u6ee4"}),"\n",(0,i.jsx)(n.p,{children:"\u5404\u6a21\u5757\u65e5\u5fd7\u5747\u53ef\u901a\u8fc7logcat\u6765\u8fc7\u6ee4\u67e5\u770b\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e0b\u6a21\u5757\u76f8\u5173\u5982\u4f55\u8fc7\u6ee4\u3002logcat\u662f\u5f00\u6e90\u7684\u547d\u4ee4\uff0c\u5176\u4ed6\u53c2\u6570\u53ef\u81ea\u884c\u63a2\u7d22\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\u53ea\u60f3\u6253\u5370vps\u90e8\u5206\u4e14\u65e5\u5fd7\u7ea7\u522b\u9ad8\u4e8eDebug\u7684\u65e5\u5fd7\uff0c\u5e76\u8f93\u51fa\u5230\u6587\u4ef6\u53ef\u4ee5\u8fd9\u6837\u64cd\u4f5c\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:["logcat vps",":D"," -f log.txt"]}),"\n",(0,i.jsx)(n.p,{children:"\u60f3\u67e5\u770b\u591a\u4e2a\u6a21\u5757\u7684\u65e5\u5fd7\u53ef\u4ee5\u5728\u540e\u9762\u8ffd\u52a0\u8fc7\u6ee4\u5982\u67e5\u770bvps/vin\u6a21\u5757\u4e14\u7ea7\u522b\u9ad8\u4e8eDebug\u7684\u65e5\u5fd7\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:["logcat vps",":D"," vin",":D"," -f log.txt"]}),"\n",(0,i.jsx)(n.h3,{id:"\u65e5\u5fd7\u5b58\u50a8",children:"\u65e5\u5fd7\u5b58\u50a8"}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u6838\u65e5\u5fd7\u4f1a\u4fdd\u5b58\u5728/userdata/log/kernel/\u76ee\u5f55\uff1b"}),"\n",(0,i.jsx)(n.p,{children:"LOGLEVEL\u8bbe\u7f6e\u4e3a4\uff0c\u4e0a\u5c42\u65e5\u5fd7\u4f1a\u4fdd\u5b58\u5728/userdata/log/usr/\u76ee\u5f55\uff1b"})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},62429:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/01ef41acb92787b58fe84a0a5241b7dc-d1ff335e761f19323b647f9f8aa979e9.png"},75070:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/1944f201c81a20991a2623a464ac749c-95f093606ec2060c8551376753e51740.png"},74231:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/354af0a4710e0c5a631ab6a96bf932c6-03b3997ab2ad7656426a178dd64a6770.png"},31690:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/5c314a3ac1028e4de8293548efb65704-10e015b91d094712348be036c16d1a5c.png"},63934:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/64fdce46047c2462decae977fd2d2288-421702301ec1d0e16993d322c71c4985.png"},87197:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/7c497fc6373c2c0a35f2248f7fc16280-5b5c6ec3a6595bab06768d111d337be9.png"},12050:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/7f297a9c2dfd3b25a308f898b97f89c2-86b45a638d9ae41f29bb1e0eed0efb53.png"},10135:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/81aec6c1b63287146ec1a11be9780b71-53a6c393b1dda0e43f44ebd6643019f3.png"},85717:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/a6cabe90c204d0510e417106b32b3622-9295ecbcec98a6efa713ca0a6feae069.png"},36641:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/c437b118301b57610a49246d39de9213-698eeebf17d4e861cba4a217079cea93.png"},66336:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/c5df92bf5f46a0575c1f049867871ffe-6388a8090bfd4dbb19d36a0f28840b82.png"},35681:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/drive_and_multimedia-fd5f2730eb6bf386b04be043e431a2c4.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(96540);const d={},c=i.createContext(d);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);