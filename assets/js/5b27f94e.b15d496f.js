"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6125],{19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var l=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,a),hidden:t,children:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var l=t(96540);const s={},r=l.createContext(s);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}},69325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var l=t(74848),s=t(28453),r=t(93859),a=t(19365);const i={sidebar_position:1},o="mobilenetv2",c={id:"Robot_development/boxs/classification/mobilenetv2",title:"mobilenetv2",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/classification/mobilenetv2.md",sourceDirName:"05_Robot_development/03_boxs/classification",slug:"/Robot_development/boxs/classification/mobilenetv2",permalink:"/rdk_doc/Robot_development/boxs/classification/mobilenetv2",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/classification/mobilenetv2.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EfficientNet_Det",permalink:"/rdk_doc/Robot_development/boxs/detection/efficientnet"},next:{title:"mobilenet_unet",permalink:"/rdk_doc/Robot_development/boxs/segmentation/mobilenet_unet"}},d={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"\u4f7f\u7528MIPI\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",id:"\u4f7f\u7528mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",level:4},{value:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",id:"\u4f7f\u7528usb\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",level:4},{value:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",level:4},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0-1",level:3},{value:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c-1",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2},{value:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",id:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",level:3},{value:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c-2",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"mobilenetv2",children:"mobilenetv2"}),"\n","\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.p,{children:"mobilenetv2\u56fe\u7247\u5206\u7c7b\u7b97\u6cd5\u793a\u4f8b\u4f7f\u7528\u56fe\u7247\u4f5c\u4e3a\u8f93\u5165\uff0c\u5229\u7528BPU\u8fdb\u884c\u7b97\u6cd5\u63a8\u7406\uff0c\u53d1\u5e03\u5305\u542b\u7269\u4f53\u7c7b\u522b\u7684\u7b97\u6cd5msg\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["mobilenetv2\u662f\u4f7f\u7528",(0,l.jsx)(n.a,{href:"http://www.image-net.org/",children:"ImageNet data"}),"\u6570\u636e\u96c6\u8bad\u7ec3\u51fa\u6765\u7684caffe\u6a21\u578b\uff0c\u6a21\u578b\u6765\u6e90\uff1a ",(0,l.jsx)(n.a,{href:"https://github.com/shicai/MobileNet-Caffe",children:"https://github.com/shicai/MobileNet-Caffe"})," \u3002\n\u652f\u6301\u7684\u76ee\u6807\u7c7b\u578b\u5305\u62ec\u4eba\u3001\u52a8\u7269\u3001\u6c34\u679c\u3001\u4ea4\u901a\u5de5\u5177\u7b49\u51711000\u79cd\u7c7b\u578b\u3002\u5177\u4f53\u652f\u6301\u7684\u7c7b\u522b\u8be6\u89c1RDK\u677f\u7aef\u6587\u4ef6 /opt/tros/",(0,l.jsx)(n.code,{children:"${TROS_DISTRO}"}),"/lib/dnn_node_example/config/imagenet.list\uff08\u5df2\u5b89\u88c5TogatherROS.Bot\uff09\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a ",(0,l.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_dnn",children:"https://github.com/D-Robotics/hobot_dnn"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5e94\u7528\u573a\u666f\uff1amobilenetv2\u80fd\u591f\u9884\u6d4b\u7ed9\u5b9a\u56fe\u7247\u7684\u7c7b\u522b\uff0c\u53ef\u5b9e\u73b0\u6570\u5b57\u8bc6\u522b\u3001\u7269\u4f53\u8bc6\u522b\u7b49\u529f\u80fd\uff0c\u4e3b\u8981\u5e94\u7528\u4e8e\u6587\u5b57\u8bc6\u522b\u3001\u56fe\u50cf\u68c0\u7d22\u7b49\u9886\u57df\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u98df\u54c1\u7c7b\u578b\u8bc6\u522b\u6848\u4f8b\uff1a ",(0,l.jsx)(n.a,{href:"https://github.com/frotms/Chinese-and-Western-Food-Classification",children:"https://github.com/frotms/Chinese-and-Western-Food-Classification"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,l.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,l.jsx)(n.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RDK X3, RDK X3 Module"}),(0,l.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,l.jsxs)(n.td,{children:["\xb7 \u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c",(0,l.jsx)("br",{}),"\xb7 \u4f7f\u7528\u672c\u5730\u56de\u704c\uff0c\u6e32\u67d3\u7ed3\u679c\u4fdd\u5b58\u5728\u672c\u5730"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RDK X5"}),(0,l.jsx)(n.td,{children:"Ubuntu 22.04 (Humble)"}),(0,l.jsxs)(n.td,{children:["\xb7 \u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c",(0,l.jsx)("br",{}),"\xb7 \u4f7f\u7528\u672c\u5730\u56de\u704c\uff0c\u6e32\u67d3\u7ed3\u679c\u4fdd\u5b58\u5728\u672c\u5730"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RDK Ultra"}),(0,l.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy)"}),(0,l.jsxs)(n.td,{children:["\xb7 \u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c",(0,l.jsx)("br",{}),"\xb7 \u4f7f\u7528\u672c\u5730\u56de\u704c\uff0c\u6e32\u67d3\u7ed3\u679c\u4fdd\u5b58\u5728\u672c\u5730"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"X86"}),(0,l.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy)"}),(0,l.jsx)(n.td,{children:"\xb7 \u4f7f\u7528\u672c\u5730\u56de\u704c\uff0c\u6e32\u67d3\u7ed3\u679c\u4fdd\u5b58\u5728\u672c\u5730"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5tros.b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"RDK\u5df2\u5b89\u88c5MIPI\u6216\u8005USB\u6444\u50cf\u5934\uff0c\u65e0\u6444\u50cf\u5934\u7684\u60c5\u51b5\u4e0b\u901a\u8fc7\u56de\u704c\u672c\u5730JPEG/PNG\u683c\u5f0f\u56fe\u7247\u6216\u8005MP4\u3001H.264\u548cH.265\u7684\u89c6\u9891\u65b9\u5f0f\u4f53\u9a8c\u7b97\u6cd5\u6548\u679c\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u786e\u8ba4PC\u673a\u80fd\u591f\u901a\u8fc7\u7f51\u7edc\u8bbf\u95eeRDK\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"x86\u5e73\u53f0",children:"X86\u5e73\u53f0"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"X86\u73af\u5883\u5df2\u914d\u7f6e\u597dUbuntu 20.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"X86\u73af\u5883\u7cfb\u7edf\u5df2\u6210\u529f\u5b89\u88c5tros.b\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,l.jsx)(n.p,{children:"mobilenetv2\u56fe\u7247\u5206\u7c7b\u8ba2\u9605sensor package\u53d1\u5e03\u7684\u56fe\u7247\uff0c\u7ecf\u8fc7\u63a8\u7406\u540e\u53d1\u5e03\u7b97\u6cd5msg\uff0c\u901a\u8fc7websocket package\u5b9e\u73b0\u5728PC\u7aef\u6d4f\u89c8\u5668\u4e0a\u6e32\u67d3\u663e\u793a\u53d1\u5e03\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684\u7b97\u6cd5\u7ed3\u679c\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",children:"\u4f7f\u7528MIPI\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,l.jsx)(a.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch dnn_node_example dnn_node_example.launch.py dnn_example_config_file:=config/mobilenetv2workconfig.json dnn_example_image_width:=480 dnn_example_image_height:=272\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528usb\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",children:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,l.jsx)(a.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch dnn_node_example dnn_node_example.launch.py dnn_example_config_file:=config/mobilenetv2workconfig.json dnn_example_image_width:=480 dnn_example_image_height:=272\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",children:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c"}),"\n",(0,l.jsx)(n.p,{children:"mobilenetv2\u56fe\u7247\u5206\u7c7b\u7b97\u6cd5\u793a\u4f8b\u4f7f\u7528\u672c\u5730JPEG/PNG\u683c\u5f0f\u56fe\u7247\u56de\u704c\uff0c\u7ecf\u8fc7\u63a8\u7406\u540e\u5c06\u7b97\u6cd5\u7ed3\u679c\u6e32\u67d3\u540e\u7684\u56fe\u7247\u5b58\u50a8\u5728\u672c\u5730\u7684\u8fd0\u884c\u8def\u5f84\u4e0b\u3002"}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,l.jsx)(a.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# \u542f\u52a8launch\u6587\u4ef6\nros2 launch dnn_node_example dnn_node_example_feedback.launch.py dnn_example_config_file:=config/mobilenetv2workconfig.json dnn_example_image:=config/target_class.jpg\n"})}),"\n",(0,l.jsx)(n.h3,{id:"x86\u5e73\u53f0-1",children:"X86\u5e73\u53f0"}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c-1",children:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c"}),"\n",(0,l.jsx)(n.p,{children:"mobilenetv2\u56fe\u7247\u5206\u7c7b\u7b97\u6cd5\u793a\u4f8b\u4f7f\u7528\u672c\u5730JPEG/PNG\u683c\u5f0f\u56fe\u7247\u56de\u704c\uff0c\u7ecf\u8fc7\u63a8\u7406\u540e\u5c06\u7b97\u6cd5\u7ed3\u679c\u6e32\u67d3\u540e\u7684\u56fe\u7247\u5b58\u50a8\u5728\u672c\u5730\u7684\u8fd0\u884c\u8def\u5f84\u4e0b\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch dnn_node_example dnn_node_example_feedback.launch.py dnn_example_config_file:=config/mobilenetv2workconfig.json dnn_example_image:=config/target_class.jpg\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,l.jsx)(n.h3,{id:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",children:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"[example-3] [WARN] [1655095481.707875587] [example]: Create ai msg publisher with topic_name: hobot_dnn_detection\n[example-3] [WARN] [1655095481.707983957] [example]: Create img hbmem_subscription with topic_name: /hbmem_img\n[example-3] [WARN] [1655095482.985732162] [img_sub]: Sub img fps 31.07\n[example-3] [WARN] [1655095482.992031931] [example]: Smart fps 31.31\n[example-3] [WARN] [1655095484.018818843] [img_sub]: Sub img fps 30.04\n[example-3] [WARN] [1655095484.025123362] [example]: Smart fps 30.04\n[example-3] [WARN] [1655095485.051988567] [img_sub]: Sub img fps 30.01\n[example-3] [WARN] [1655095486.057854228] [example]: Smart fps 30.07\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8f93\u51falog\u663e\u793a\uff0c\u53d1\u5e03\u7b97\u6cd5\u63a8\u7406\u7ed3\u679c\u7684topic\u4e3a",(0,l.jsx)(n.code,{children:"hobot_dnn_detection"}),"\uff0c\u8ba2\u9605\u56fe\u7247\u7684topic\u4e3a",(0,l.jsx)(n.code,{children:"/hbmem_img"}),"\uff0c\u8ba2\u9605\u5230\u7684\u56fe\u7247\u548c\u7b97\u6cd5\u63a8\u7406\u8f93\u51fa\u5e27\u7387\u7ea6\u4e3a30fps\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728PC\u7aef\u7684\u6d4f\u89c8\u5668\u8f93\u5165",(0,l.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," \u5373\u53ef\u67e5\u770b\u56fe\u50cf\u548c\u7b97\u6cd5\u6e32\u67d3\u6548\u679c\uff08IP\u4e3aRDK\u7684IP\u5730\u5740\uff09\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"render_web",src:t(96034).A+"",width:"1920",height:"907"})}),"\n",(0,l.jsx)(n.h3,{id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c-2",children:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"[example-1] [INFO] [1654767648.897132079] [example]: The model input width is 224 and height is 224\n[example-1] [INFO] [1654767648.897180241] [example]: Dnn node feed with local image: config/target_class.jpg\n[example-1] [INFO] [1654767648.935638968] [example]: task_num: 2\n[example-1] [INFO] [1654767648.946566665] [example]: Output from image_name: config/target_class.jpg, frame_id: feedback, stamp: 0.0\n[example-1] [INFO] [1654767648.946671029] [ClassificationPostProcess]: outputs size: 1\n[example-1] [INFO] [1654767648.946718774] [ClassificationPostProcess]: out cls size: 1\n[example-1] [INFO] [1654767648.946773602] [ClassificationPostProcess]: class type:window-shade, score:0.776356\n[example-1] [INFO] [1654767648.947251721] [ImageUtils]: target size: 1\n[example-1] [INFO] [1654767648.947342212] [ImageUtils]: target type: window-shade, rois.size: 1\n[example-1] [INFO] [1654767648.947381666] [ImageUtils]: roi.type: , x_offset: 112 y_offset: 112 width: 0 height: 0\n[example-1] [WARN] [1654767648.947563731] [ImageUtils]: Draw result to file: render_feedback_0_0.jpeg\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8f93\u51falog\u663e\u793a\uff0c\u7b97\u6cd5\u4f7f\u7528\u8f93\u5165\u7684\u56fe\u7247config/target_class.jpg\u63a8\u7406\u51fa\u7684\u56fe\u7247\u5206\u7c7b\u7ed3\u679c\u662fwindow-shade\uff0c\u7f6e\u4fe1\u5ea6\u4e3a0.776356\uff08\u7b97\u6cd5\u53ea\u8f93\u51fa\u7f6e\u4fe1\u5ea6\u6700\u9ad8\u7684\u5206\u7c7b\u7ed3\u679c\uff09\u3002\u5b58\u50a8\u7684\u6e32\u67d3\u56fe\u7247\u6587\u4ef6\u540d\u4e3arender_feedback_0_0.jpeg\uff0c\u6e32\u67d3\u56fe\u7247\u6548\u679c\uff1a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"render_feedback",src:t(91435).A+"",width:"224",height:"224"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},91435:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/mobilenetv2_render_feedback-f21931aee7b71dbd165f9141c8f3d294.jpeg"},93859:(e,n,t)=>{t.d(n,{A:()=>I});var l=t(96540),s=t(34164),r=t(86641),a=t(56347),i=t(205),o=t(38874),c=t(24035),d=t(82993);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:s}}=e;return{value:n,label:t,attributes:l,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[a,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:n,block:t,selectedValue:l,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==l&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(_,{...n,...e})]})}function I(e){const n=(0,x.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},96034:(e,n,t)=>{t.d(n,{A:()=>l});const l=t.p+"assets/images/mobilenetv2_render_web-92295b1cdfb529b15ebe4218478ea757.jpeg"}}]);