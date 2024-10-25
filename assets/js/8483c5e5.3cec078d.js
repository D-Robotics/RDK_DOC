"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[854],{96564:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(74848),i=r(28453),s=r(93859),l=r(19365);const o={sidebar_position:8},c="\u8def\u9762\u7ed3\u6784\u5316",a={id:"Robot_development/boxs/function/parking_perception",title:"\u8def\u9762\u7ed3\u6784\u5316",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/function/parking_perception.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/parking_perception",permalink:"/rdk_doc/Robot_development/boxs/function/parking_perception",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/05_Robot_development/03_boxs/function/parking_perception.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u89c6\u89c9SLAM\u7b97\u6cd5",permalink:"/rdk_doc/Robot_development/boxs/function/orb_slam3"},next:{title:"\u6fc0\u5149\u96f7\u8fbe\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5",permalink:"/rdk_doc/Robot_development/boxs/function/hobot_centerpoint"}},p={},d=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0-1",level:3},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u8def\u9762\u7ed3\u6784\u5316",children:"\u8def\u9762\u7ed3\u6784\u5316"}),"\n","\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,t.jsx)(n.p,{children:"parking_perception package \u662f\u57fa\u4e8e hobot_dnn package\u5f00\u53d1\u7684\u8def\u9762\u7ed3\u6784\u5316\u7b97\u6cd5\u793a\u4f8b\uff0c\u5229\u7528BPU\u8fdb\u884c\u6a21\u578b\u63a8\u7406\uff0c\u4ece\u800c\u5f97\u5230\u7b97\u6cd5\u63a8\u7406\u7ed3\u679c\u3002\n\u672cpackage\u652f\u6301\u76f4\u63a5\u8ba2\u9605sensors/msg/image\u7c7b\u578b\u7684\u8bdd\u9898\uff0c\u5e76\u4e14\u652f\u6301\u8bfb\u53d6\u672c\u5730\u56fe\u7247\u7684\u5f62\u5f0f\u8fdb\u884c\u63a8\u7406\uff0c\u5c06\u7b97\u6cd5\u4fe1\u606f\u901a\u8fc7\u8bdd\u9898\u53d1\u5e03\u7684\u540c\u65f6\u4f1a\u5c06\u7ed3\u679c\u5728Web\u9875\u9762\u6e32\u67d3\u53ef\u89c6\u5316\uff0c\u540c\u65f6\u652f\u6301\u6e32\u67d3\u56fe\u7247\u4fdd\u5b58\u5728\u7a0b\u5e8f\u8fd0\u884c\u7684result\u76ee\u5f55\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7b97\u6cd5\u652f\u6301\u7684\u76ee\u6807\u68c0\u6d4b\u7c7b\u522b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u7c7b\u522b"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cyclist"}),(0,t.jsx)(n.td,{children:"\u9a91\u8f66\u4eba"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"person"}),(0,t.jsx)(n.td,{children:"\u884c\u4eba"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rear"}),(0,t.jsx)(n.td,{children:"\u8f66\u80cc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicle"}),(0,t.jsx)(n.td,{children:"\u6c7d\u8f66"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_lock"}),(0,t.jsx)(n.td,{children:"\u5730\u9501"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u7b97\u6cd5\u652f\u6301\u7684\u8bed\u4e49\u5206\u5272\u7c7b\u522b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u7c7b\u522b"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"road"}),(0,t.jsx)(n.td,{children:"\u9053\u8def"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"background"}),(0,t.jsx)(n.td,{children:"\u80cc\u666f"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lane_marking"}),(0,t.jsx)(n.td,{children:"\u8f66\u9053\u7ebf"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sign_line"}),(0,t.jsx)(n.td,{children:"\u6807\u5fd7\u7ebf"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_lane"}),(0,t.jsx)(n.td,{children:"\u8f66\u4f4d\u7ebf"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_space"}),(0,t.jsx)(n.td,{children:"\u8f66\u4f4d\u533a\u57df"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_rod"}),(0,t.jsx)(n.td,{children:"\u505c\u8f66\u6746"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_lock"}),(0,t.jsx)(n.td,{children:"\u5730\u9501"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a (",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/parking_perception.git",children:"https://github.com/D-Robotics/parking_perception.git"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"\u5e94\u7528\u573a\u666f\uff1a\u5ba4\u5916\u505c\u8f66\u533a\u68c0\u6d4b\u7b97\u6cd5\u57fa\u4e8e\u8bed\u4e49\u5206\u5272\uff0c\u8bc6\u522b\u51fa\u56fe\u7247\u4e2d\u7684\u505c\u8f66\u533a\u57df\uff0c\u53ef\u5b9e\u73b0\u81ea\u52a8\u6cca\u8f66\u7684\u529f\u80fd\uff0c\u4e3b\u8981\u5e94\u7528\u4e8e\u81ea\u52a8\u9a7e\u9a76\u9886\u57df\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c0f\u8f66\u8f66\u4f4d\u5bfb\u627e\u6848\u4f8b\uff1a",(0,t.jsx)(n.a,{href:"../../apps/parking_search",children:"4.8. \u5c0f\u8f66\u8f66\u4f4d\u5bfb\u627e"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,t.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,t.jsx)(n.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RDK X3, RDK X3 Module"}),(0,t.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,t.jsx)(n.td,{children:"\xb7 \u542f\u52a8MIPI/USB\u6444\u50cf\u5934/\u672c\u5730\u56de\u704c\uff0c\u63a8\u7406\u6e32\u67d3\u7ed3\u679c\u5728Web\u663e\u793a/\u4fdd\u5b58\u5728\u672c\u5730"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"X86"}),(0,t.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy)"}),(0,t.jsx)(n.td,{children:"\xb7 \u542f\u52a8\u672c\u5730\u56de\u704c\uff0c\u63a8\u7406\u6e32\u67d3\u7ed3\u679c\u5728Web\u663e\u793a/\u4fdd\u5b58\u5728\u672c\u5730"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"x86\u5e73\u53f0",children:"X86\u5e73\u53f0"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"X86\u73af\u5883\u5df2\u914d\u7f6eUbuntu 20.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"X86\u73af\u5883\u5df2\u6210\u529f\u5b89\u88c5tros.b\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,t.jsx)(n.p,{children:"package\u5bf9\u5916\u53d1\u5e03\u5305\u542b\u8bed\u4e49\u5206\u5272\u548c\u76ee\u6807\u68c0\u6d4b\u4fe1\u606f\u7684\u7b97\u6cd5msg\uff0c\u7528\u6237\u53ef\u4ee5\u8ba2\u9605\u53d1\u5e03msg\u7528\u4e8e\u5e94\u7528\u5f00\u53d1\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,t.jsxs)(s.A,{groupId:"tros-distro",children:[(0,t.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/setup.bash\n\n# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch parking_perception parking_perception.launch.py \n"})})}),(0,t.jsx)(l.A,{value:"humble",label:"Humble",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch parking_perception parking_perception.launch.py \n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4f7f\u7528usb\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,t.jsxs)(s.A,{groupId:"tros-distro",children:[(0,t.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/setup.bash\n\n# \u4ecetros\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch parking_perception parking_perception.launch.py \n"})})}),(0,t.jsx)(l.A,{value:"humble",label:"Humble",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4ecetros\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch parking_perception parking_perception.launch.py \n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u5355\u5f20\u56de\u704c\u56fe\u7247"})}),"\n",(0,t.jsxs)(s.A,{groupId:"tros-distro",children:[(0,t.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/setup.bash\n\n# \u4ecetros\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# \u914d\u7f6e\u56de\u704c\u56fe\u7247\nexport CAM_TYPE=fb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch parking_perception parking_perception.launch.py \n"})})}),(0,t.jsx)(l.A,{value:"humble",label:"Humble",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4ecetros\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# \u914d\u7f6e\u56de\u704c\u56fe\u7247\nexport CAM_TYPE=fb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch parking_perception parking_perception.launch.py \n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"x86\u5e73\u53f0-1",children:"X86\u5e73\u53f0"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u5355\u5f20\u56de\u704c\u56fe\u7247"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n\n# \u4ecetros\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# \u914d\u7f6e\u56de\u704c\u56fe\u7247\nexport CAM_TYPE=fb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch parking_perception parking_perception.launch.py \n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4f7f\u7528mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,t.jsx)(n.p,{children:"package\u521d\u59cb\u5316\u540e\uff0c\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[INFO] [launch]: All log files can be found below /root/.ros/log/2022-08-02-06-46-55-605266-ubuntu-3669\n[INFO] [launch]: Default logging verbosity is set to INFO\n[INFO] [mipi_cam-1]: process started with pid [3671]\n[INFO] [hobot_codec_republish-2]: process started with pid [3673]\n[INFO] [parking_perception-3]: process started with pid [3675]\n[INFO] [websocket-4]: process started with pid [3677]\n[parking_perception-3] [WARN] [1659394017.194211788] [parking_perception]: Parameter:\n[parking_perception-3] shared_men:1\n[parking_perception-3]  is_sync_mode_: 1\n[parking_perception-3]  model_file_name_: config/parking_perception_640x320.bin\n[parking_perception-3] feed_image:\n[parking_perception-3] [INFO] [1659394017.194695288] [dnn]: Node init.\n[parking_perception-3] [INFO] [1659394017.194784038] [parking_perception]: Set node para.\n[parking_perception-3] [INFO] [1659394017.194845413] [dnn]: Model init.\n[parking_perception-3] [BPU_PLAT]BPU Platform Version(1.3.1)!\n[parking_perception-3] [C][3675][08-02][06:46:57:202][configuration.cpp:49][EasyDNN]EasyDNN version: 0.4.11\n[parking_perception-3] [HBRT] set log level as 0. version = 3.14.5\n[parking_perception-3] [DNN] Runtime version = 1.9.7_(3.14.5 HBRT)\n[parking_perception-3] [INFO] [1659394017.247423580] [dnn]: The model input 0 width is 640 and height is 320\n[parking_perception-3] [INFO] [1659394017.247664997] [dnn]: Task init.\n[parking_perception-3] [INFO] [1659394017.255848788] [dnn]: Set task_num [2]\n[parking_perception-3] [INFO] [1659394017.255999663] [parking_perception]: The model input width is 640 and height is 320\n[parking_perception-3] [INFO] [1659394017.263431163] [parking_perception]: msg_pub_topic_name: ai_msg_parking_perception\n[parking_perception-3] [INFO] [1659394017.263554788] [parking_perception]: Detect images that use subscriptions\n[parking_perception-3] [WARN] [1659394017.263597997] [parking_perception]: Create hbmem_subscription with topic_name: /hbmem_img\n[parking_perception-3] [WARN] [1659394017.267204163] [parking_perception]: start success!!!\n[parking_perception-3] [WARN] [1662036456.219133588] [parking_perception]: input fps: 29.73, out fps: 29.79\n[parking_perception-3] [WARN] [1662036457.228303881] [parking_perception]: input fps: 29.73, out fps: 29.73\n[parking_perception-3] [WARN] [1662036458.237841548] [parking_perception]: input fps: 29.73, out fps: 29.73\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u5355\u5f20\u56de\u704c\u56fe\u7247"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e2d\u8bfb\u53d6\u672c\u5730\u56fe\u7247\u63a8\u7406\u7684\u7ed3\u679c\u4f1a\u6e32\u67d3\u5230\u56fe\u7247\u4e0a\uff0c\u5728PC\u7aef\u7684\u6d4f\u89c8\u5668\u8f93\u5165",(0,t.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," \u5373\u53ef\u67e5\u770b\u56fe\u50cf\u548c\u7b97\u6cd5\u6e32\u67d3\u6548\u679c\uff08IP\u4e3aRDK\u7684IP\u5730\u5740\uff09\uff0c\u6253\u5f00\u754c\u9762\u53f3\u4e0a\u89d2\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(77335).A+"",width:"1920",height:"969"})}),"\n",(0,t.jsx)(n.p,{children:"\u9009\u4e2d\u201d\u5168\u56fe\u5206\u5272\u201c\u9009\u9879\uff0c\u53ef\u4ee5\u663e\u793a\u6e32\u67d3\u6548\u679c\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(53404).A+"",width:"1920",height:"969"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u89c6\u5316\u7ed3\u679c\u53ef\u4ee5\u770b\u5230\uff0c\u5ba4\u5916\u573a\u666f\u4e0b\u505c\u8f66\u533a\u57df\u4e0e\u884c\u8f66\u533a\u57df\u6709\u6548\u5206\u5272\u5f00\uff0c\u533a\u5206\u4e86\u505c\u8f66\u8f66\u9053\u7ebf\u548c\u884c\u8f66\u8f66\u9053\u7ebf\uff0c\u540c\u65f6\u76ee\u6807\u68c0\u6d4b\u4efb\u52a1\u5b9a\u4f4d\u5230\u8fdc\u5904\u8f66\u8f86\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(53643).A+"",width:"1920",height:"969"})}),"\n",(0,t.jsx)(n.p,{children:'"dump_render_img"\u8bbe\u7f6e\u4e3a"1"\u65f6\uff0c\u6e32\u67d3\u6548\u679c\u4fdd\u5b58\u5728\u5f53\u524d\u8def\u5f84\u7684result\u76ee\u5f55\u4e0b\u3002'})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,l),hidden:r,children:n})}},93859:(e,n,r)=>{r.d(n,{A:()=>v});var t=r(96540),i=r(34164),s=r(86641),l=r(56347),o=r(205),c=r(38874),a=r(24035),p=r(82993);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const i=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,s=u(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[a,d]=x({queryString:r,groupId:i}),[g,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,p.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),j=(()=>{const e=a??g;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=r(74848);function m(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),p=e=>{const n=e.currentTarget,r=c.indexOf(n),i=o[r].value;i!==t&&(a(n),l(i))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:p,...s,className:(0,i.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=g(e);return(0,_.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,_.jsx)(m,{...n,...e}),(0,_.jsx)(f,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,_.jsx)(k,{...e,children:d(e.children)},String(n))}},77335:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/operation_1-2c36d27ce5d6d755876e12ec4e7d6f2c.png"},53404:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/operation_2-98eceeb84046ad6be3812f1af7b90ab3.png"},53643:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/render_parking-8a20ed3f4d40f6701a4100374daabee8.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);