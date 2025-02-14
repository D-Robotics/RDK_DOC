"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1509],{9676:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/local-8ea9d895f2e02f6176ec7fa260301508.jpeg"},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:n,children:t})}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:t},e.children)}},51509:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/web-bec7eb50ef1dacab9082c9349f6fc2d2.jpeg"},56536:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/test-90cb212a8217603c8c4870208e9e79d3.jpg"},83429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=n(74848),r=n(28453),o=n(93859),l=n(19365);const a={sidebar_position:2},i="YOLOv8-Seg",c={id:"Robot_development/boxs/segmentation/yolov8_seg",title:"YOLOv8-Seg",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/segmentation/yolov8_seg.md",sourceDirName:"05_Robot_development/03_boxs/segmentation",slug:"/Robot_development/boxs/segmentation/yolov8_seg",permalink:"/rdk_doc/Robot_development/boxs/segmentation/yolov8_seg",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/segmentation/yolov8_seg.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"mobilenet_unet",permalink:"/rdk_doc/Robot_development/boxs/segmentation/mobilenet_unet"},next:{title:"\u4eba\u4f53\u68c0\u6d4b\u548c\u8ddf\u8e2a",permalink:"/rdk_doc/Robot_development/boxs/function/mono2d_body_detection"}},d={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",id:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",level:4},{value:"\u4f7f\u7528MIPI\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",id:"\u4f7f\u7528mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",level:5},{value:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",id:"\u4f7f\u7528usb\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",level:5},{value:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2},{value:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",id:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247-1",level:3},{value:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c-1",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"yolov8-seg",children:"YOLOv8-Seg"}),"\n","\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,s.jsx)(t.p,{children:"YOLOv8-Seg\u5b9e\u4f8b\u5206\u5272\u7b97\u6cd5\u793a\u4f8b\u4f7f\u7528\u56fe\u7247\u4f5c\u4e3a\u8f93\u5165\uff0c\u5229\u7528BPU\u8fdb\u884c\u7b97\u6cd5\u63a8\u7406\uff0c\u53d1\u5e03\u5305\u542b\u68c0\u6d4b\u548c\u5206\u5272\u7ed3\u679cmsg\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["YOLOv8-Seg\u662f\u4f7f\u7528",(0,s.jsx)(t.a,{href:"http://cocodataset.org/",children:"COCO128-seg\u6570\u636e\u96c6"}),"\u8bad\u7ec3\u51fa\u6765\u7684Onnx\u6a21\u578b\uff0c\u6a21\u578b\u6765\u6e90\uff1a ",(0,s.jsx)(t.a,{href:"https://github.com/D-Robotics/hobot_model",children:"https://github.com/D-Robotics/hobot_model"})," \u3002\n\u652f\u6301\u5bf9\u4eba\u3001\u52a8\u7269\u3001\u6c34\u679c\u3001\u4ea4\u901a\u5de5\u5177\u7b49\u517180\u79cd\u7c7b\u578b\u8fdb\u884c\u5b9e\u4f8b\u5206\u5272\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a ",(0,s.jsx)(t.a,{href:"https://github.com/D-Robotics/hobot_dnn",children:"https://github.com/D-Robotics/hobot_dnn"})]}),"\n",(0,s.jsx)(t.p,{children:"\u5e94\u7528\u573a\u666f\uff1aYOLOv8-Seg\u80fd\u591f\u8bc6\u522b\u56fe\u50cf\u4e2d\u7684\u5355\u4e2a\u7269\u4f53\u5e76\u5bf9\u5176\u8fdb\u884c\u7cbe\u786e\u5206\u5272\u3002\u8fd9\u79cd\u6280\u672f\u53ef\u4ee5\u5e94\u7528\u5728\u81ea\u52a8\u9a7e\u9a76\u3001\u9065\u611f\u56fe\u50cf\u5206\u6790\u3001\u533b\u7597\u5f71\u50cf\u5206\u6790\u7b49\u9886\u57df\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u5e73\u53f0"}),(0,s.jsx)(t.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,s.jsx)(t.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RDK X5"}),(0,s.jsx)(t.td,{children:"Ubuntu 22.04 (Humble)"}),(0,s.jsx)(t.td,{children:"\xb7 \u542f\u52a8MIPI/USB\u6444\u50cf\u5934/\u672c\u5730\u56de\u704c\uff0c\u6e32\u67d3\u7ed3\u679c\u4fdd\u5b58\u5728\u672c\u5730"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsx)(t.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"RDK\u5df2\u5b89\u88c5MIPI\u6216\u8005USB\u6444\u50cf\u5934\uff0c\u65e0\u6444\u50cf\u5934\u7684\u60c5\u51b5\u4e0b\u901a\u8fc7\u56de\u704c\u672c\u5730JPEG/PNG\u683c\u5f0f\u56fe\u7247\u7684\u65b9\u5f0f\u4f53\u9a8c\u7b97\u6cd5\u6548\u679c\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,s.jsx)(t.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,s.jsx)(t.h4,{id:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",children:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"}),"\n",(0,s.jsx)(t.h5,{id:"\u4f7f\u7528mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",children:"\u4f7f\u7528MIPI\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"}),"\n",(0,s.jsx)(t.p,{children:"YOLOv8-Seg\u5b9e\u4f8b\u5206\u5272\u793a\u4f8b\u8ba2\u9605sensor package\u53d1\u5e03\u7684\u56fe\u7247, \u7ecf\u8fc7\u63a8\u7406\u540e\u53d1\u5e03\u7b97\u6cd5msg\u3002\u9ed8\u8ba4\u4e0d\u4fdd\u5b58\u6e32\u67d3\u56fe\u7247, \u5982\u9700\u4fdd\u5b58, \u9700\u8981\u5728\u8fd0\u884c\u65f6\u8bbe\u7f6e dnn_example_dump_render_img \u4e3a1, \u4f1a\u5728\u8fd0\u884c\u8def\u5f84\u4e0b\u81ea\u52a8\u4fdd\u5b58\u6e32\u67d3\u540e\u7684\u56fe\u7247\uff0c\u547d\u540d\u65b9\u5f0f\u4e3arender_frameid_\u65f6\u95f4\u6233\u79d2_\u65f6\u95f4\u6233\u7eb3\u79d2.jpg\u3002"}),"\n",(0,s.jsx)(o.A,{groupId:"tros-distro",children:(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch dnn_node_example dnn_node_example.launch.py dnn_example_dump_render_img:=0 dnn_example_config_file:=config/yolov8segworkconfig.json dnn_example_image_width:=1920 dnn_example_image_height:=1080\n"})}),"\n",(0,s.jsx)(t.h5,{id:"\u4f7f\u7528usb\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247",children:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"}),"\n",(0,s.jsx)(o.A,{groupId:"tros-distro",children:(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch dnn_node_example dnn_node_example.launch.py dnn_example_dump_render_img:=0 dnn_example_config_file:=config/yolov8segworkconfig.json dnn_example_image_width:=1920 dnn_example_image_height:=1080\n"})}),"\n",(0,s.jsx)(t.h4,{id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c",children:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c"}),"\n",(0,s.jsx)(t.p,{children:"YOLOv8-Seg\u5206\u5272\u793a\u4f8b\u4f7f\u7528\u672c\u5730JPEG/PNG\u683c\u5f0f\u56fe\u7247\u56de\u704c\uff0c\u7ecf\u8fc7\u63a8\u7406\u540e\u5c06\u7b97\u6cd5\u7ed3\u679c\u6e32\u67d3\u540e\u7684\u56fe\u7247\u5b58\u50a8\u5728\u672c\u5730\u7684\u8fd0\u884c\u8def\u5f84\u4e0b\u3002"}),"\n",(0,s.jsx)(o.A,{groupId:"tros-distro",children:(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# \u542f\u52a8launch\u6587\u4ef6\nros2 launch dnn_node_example dnn_node_example_feedback.launch.py dnn_example_config_file:=config/yolov8segworkconfig.json dnn_example_image:=config/test.jpg\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,s.jsx)(t.h3,{id:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247-1",children:"\u4f7f\u7528\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"[example-3] [WARN] [0000001244.489045384] [example]: Sub img fps: -1.00, Smart fps: 6.00, infer time ms: 12, post process time ms: 31\n[example-3] [WARN] [0000001245.524813052] [example]: Sub img fps: 5.84, Smart fps: 4.99, infer time ms: 8, post process time ms: 64\n[example-3] [WARN] [0000001246.526635344] [example]: Sub img fps: 4.96, Smart fps: 5.00, infer time ms: 8, post process time ms: 66\n[example-3] [WARN] [0000001247.528846136] [example]: Sub img fps: 5.00, Smart fps: 5.00, infer time ms: 8, post process time ms: 68\n[example-3] [WARN] [0000001248.528474095] [example]: Sub img fps: 5.00, Smart fps: 5.00, infer time ms: 8, post process time ms: 68\n[example-3] [WARN] [0000001249.528576345] [example]: Sub img fps: 5.00, Smart fps: 5.00, infer time ms: 8, post process time ms: 68\n[example-3] [WARN] [0000001250.493265846] [example]: Sub img fps: 5.02, Smart fps: 5.00, infer time ms: 8, post process time ms: 32\n[example-3] [WARN] [0000001251.528909346] [example]: Sub img fps: 4.98, Smart fps: 5.00, infer time ms: 8, post process time ms: 67\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u8f93\u51falog\u663e\u793a\uff0c\u53d1\u5e03\u7b97\u6cd5\u63a8\u7406\u7ed3\u679c\u7684topic\u4e3a",(0,s.jsx)(t.code,{children:"hobot_dnn_detection"}),"\uff0c\u8ba2\u9605\u56fe\u7247\u7684topic\u4e3a",(0,s.jsx)(t.code,{children:"/hbmem_img"}),"\uff0c\u5176\u4e2d\u56fe\u7247\u53d1\u5e03\u7684\u5e27\u7387\u6839\u636e\u4f1a\u6839\u636e\u7b97\u6cd5\u63a8\u7406\u8f93\u51fa\u5e27\u7387\u81ea\u9002\u5e94\u3002\u6b64\u5916\uff0cRDK\u4e0a\u4f1a\u6e32\u67d3\u5b9e\u4f8b\u5206\u5272\u7ed3\u679c\u5e76\u5b58\u50a8\u56fe\u7247\u5728\u8fd0\u884c\u8def\u5f84\u4e0b\uff0c\u4f1a\u4f7f\u5e27\u7387\u4e0b\u964d\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u539f\u59cb\u56fe\u7247\uff1a\n",(0,s.jsx)(t.img,{alt:"raw",src:n(56536).A+"",width:"5977",height:"3355"})]}),"\n",(0,s.jsxs)(t.p,{children:["\u6e32\u67d3\u540e\u7684\u56fe\u7247\uff1a\n",(0,s.jsx)(t.img,{alt:"render_web",src:n(51509).A+"",width:"3840",height:"1919"})]}),"\n",(0,s.jsx)(t.h3,{id:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c-1",children:"\u4f7f\u7528\u672c\u5730\u56fe\u7247\u56de\u704c"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"[INFO] [0000001744.811779665] [example]: Dnn node feed with local image: /userdata/config/test.jpg\n[INFO] [0000001746.237111249] [example]: Output from frame_id: feedback, stamp: 0.0\n[INFO] [0000001746.266157040] [PostProcessBase]: out box size: 6\n[INFO] [0000001746.266340040] [PostProcessBase]: det rect: 90.4946 58.2675 192.103 351.403, det type: person, score:0.927177\n[INFO] [0000001746.267129832] [PostProcessBase]: det rect: 455.518 77.1254 536.289 354.541, det type: person, score:0.909735\n[INFO] [0000001746.267248457] [PostProcessBase]: det rect: 381.604 103.953 464.446 327.9, det type: person, score:0.898899\n[INFO] [0000001746.267331624] [PostProcessBase]: det rect: 204.864 71.6262 303.593 351.835, det type: person, score:0.887814\n[INFO] [0000001746.267404540] [PostProcessBase]: det rect: 317.885 108.287 389.773 338.197, det type: person, score:0.866887\n[INFO] [0000001746.267486457] [PostProcessBase]: det rect: 181.487 111.093 202.097 132.665, det type: car, score:0.443035\n[INFO] [0000001746.267548999] [ClassificationPostProcess]: out cls size: 0\n[INFO] [0000001746.267662832] [SegmentationPostProcess]: features size: 14240, width: 160, height: 89, num_classes: 80, step: 1\n[INFO] [0000001746.270546040] [ImageUtils]: target size: 7\n[INFO] [0000001746.270674082] [ImageUtils]: target type: person, rois.size: 1\n[INFO] [0000001746.270745915] [ImageUtils]: roi.type: person, x_offset: 90 y_offset: 58 width: 101 height: 293\n[INFO] [0000001746.271122207] [ImageUtils]: target type: person, rois.size: 1\n[INFO] [0000001746.271162499] [ImageUtils]: roi.type: person, x_offset: 455 y_offset: 77 width: 80 height: 277\n[INFO] [0000001746.271325499] [ImageUtils]: target type: person, rois.size: 1\n[INFO] [0000001746.271362082] [ImageUtils]: roi.type: person, x_offset: 381 y_offset: 103 width: 82 height: 223\n[INFO] [0000001746.271491040] [ImageUtils]: target type: person, rois.size: 1\n[INFO] [0000001746.271525249] [ImageUtils]: roi.type: person, x_offset: 204 y_offset: 71 width: 98 height: 280\n[INFO] [0000001746.271782749] [ImageUtils]: target type: person, rois.size: 1\n[INFO] [0000001746.271819457] [ImageUtils]: roi.type: person, x_offset: 317 y_offset: 108 width: 71 height: 229\n[INFO] [0000001746.271947790] [ImageUtils]: target type: car, rois.size: 1\n[INFO] [0000001746.271982374] [ImageUtils]: roi.type: car, x_offset: 181 y_offset: 111 width: 20 height: 21\n[INFO] [0000001746.272044124] [ImageUtils]: target type: parking_space, rois.size: 0\n[WARN] [0000001746.276824624] [ImageUtils]: Draw result to file: render_feedback_0_0.jpeg\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8f93\u51falog\u663e\u793a\uff0c\u7b97\u6cd5\u4f7f\u7528\u8f93\u5165\u7684\u56fe\u7247config/test.jpeg\u63a8\u7406\uff0c\u5b58\u50a8\u7684\u6e32\u67d3\u56fe\u7247\u6587\u4ef6\u540d\u4e3arender_feedback_0_0.jpeg\uff0c\u6e32\u67d3\u56fe\u7247\u6548\u679c\uff1a"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"render_feedback",src:n(9676).A+"",width:"640",height:"359"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},93859:(e,t,n)=>{n.d(t,{A:()=>I});var s=n(96540),r=n(34164),o=n(86641),l=n(56347),a=n(205),i=n(38874),c=n(24035),d=n(82993);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=c??g;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function _(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=a[n].value;r!==s&&(c(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(_,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function I(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(t))}}}]);