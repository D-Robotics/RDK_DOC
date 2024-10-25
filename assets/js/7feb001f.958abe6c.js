"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9484],{52019:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>m,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(74848),s=n(28453),r=n(93859),l=n(19365);const i={sidebar_position:14},a="\u5206\u5272\u4e00\u5207",c={id:"Robot_development/boxs/function/mono_mobilesam",title:"\u5206\u5272\u4e00\u5207",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/function/mono_mobilesam.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/mono_mobilesam",permalink:"/rdk_doc/Robot_development/boxs/function/mono_mobilesam",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/05_Robot_development/03_boxs/function/mono_mobilesam.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u56fe\u7247\u7279\u5f81\u68c0\u7d22",permalink:"/rdk_doc/Robot_development/boxs/function/hobot_clip"},next:{title:"\u5149\u6d41\u4f30\u8ba1",permalink:"/rdk_doc/Robot_development/boxs/function/mono_pwcnet"}},m={},d=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2},{value:"\u8fdb\u9636\u4f7f\u7528",id:"\u8fdb\u9636\u4f7f\u7528",level:2}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"\u5206\u5272\u4e00\u5207",children:"\u5206\u5272\u4e00\u5207"}),"\n","\n",(0,t.jsx)(o.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,t.jsx)(o.p,{children:"mono_mobilesam package \u662f\u57fa\u4e8e Mobile SAM \u91cf\u5316\u90e8\u7f72\u7684\u4f7f\u7528\u793a\u4f8b\u3002\u56fe\u50cf\u6570\u636e\u6765\u6e90\u4e8e\u672c\u5730\u56fe\u7247\u56de\u704c\u548c\u8ba2\u9605\u5230\u7684image msg\u3002SAM \u4f9d\u8d56\u68c0\u6d4b\u6846\u8f93\u5165\u8fdb\u884c\u5206\u5272, \u5e76\u5206\u5272\u68c0\u6d4b\u6846\u4e2d\u7684\u76ee\u6807, \u65e0\u9700\u6307\u5b9a\u76ee\u6807\u7684\u7c7b\u522b\u4fe1\u606f, \u4ec5\u9700\u63d0\u4f9b\u6846\u3002\u6700\u7ec8\u5c06\u7b97\u6cd5\u4fe1\u606f\u901a\u8fc7\u8bdd\u9898\u53d1\u5e03, \u540c\u65f6\u5728Web\u9875\u9762\u6e32\u67d3\u53ef\u89c6\u5316\u3002"}),"\n",(0,t.jsx)(o.p,{children:"\u672c\u793a\u4f8b\u4e2d, \u6211\u4eec\u63d0\u4f9b\u4e86\u4e24\u79cd\u90e8\u7f72\u5c55\u793a\u65b9\u5f0f:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"\u56fa\u5b9a\u6846\u5206\u5272\uff1a\u56fa\u5b9a\u4e86\u68c0\u6d4b\u6846\uff08\u56fe\u7247\u4e2d\u592e\uff09\u7528\u4ee5\u5206\u5272\u3002"}),"\n",(0,t.jsx)(o.li,{children:"\u8ba2\u9605\u6846\u5206\u5272\uff1a\u8ba2\u9605\u4e0a\u6e38\u68c0\u6d4b\u7f51\u7edc\u8f93\u51fa\u7684\u68c0\u6d4b\u6846\u4fe1\u606f, \u5bf9\u6846\u4e2d\u7684\u4fe1\u606f\u8fdb\u884c\u5206\u5272\u3002"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a (",(0,t.jsx)(o.a,{href:"https://github.com/D-Robotics/mono_mobilesam.git",children:"https://github.com/D-Robotics/mono_mobilesam.git"}),")"]}),"\n",(0,t.jsx)(o.p,{children:"\u5e94\u7528\u573a\u666f\uff1a\u7ed3\u5408\u68c0\u6d4b\u6846\u8fdb\u884c\u969c\u788d\u7269\u5206\u5272\u3001\u6c34\u6e0d\u533a\u57df\u5206\u5272\u7b49\u3002"}),"\n",(0,t.jsx)(o.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"\u5e73\u53f0"}),(0,t.jsx)(o.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,t.jsx)(o.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"RDK X5"}),(0,t.jsx)(o.td,{children:"Ubuntu 22.04 (Humble)"}),(0,t.jsx)(o.td,{children:"\xb7 \u542f\u52a8MIPI/USB\u6444\u50cf\u5934/\u672c\u5730\u56de\u704c, \u63a8\u7406\u6e32\u67d3\u7ed3\u679c\u5728Web\u663e\u793a/\u4fdd\u5b58\u5728\u672c\u5730"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(o.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,t.jsx)(o.p,{children:"package\u5bf9\u5916\u53d1\u5e03\u5305\u542b\u8bed\u4e49\u5206\u5272\u548c\u76ee\u6807\u68c0\u6d4b\u4fe1\u606f\u7684\u7b97\u6cd5msg, \u7528\u6237\u53ef\u4ee5\u8ba2\u9605\u53d1\u5e03msg\u7528\u4e8e\u5e94\u7528\u5f00\u53d1\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,t.jsx)(r.A,{groupId:"tros-distro",children:(0,t.jsx)(l.A,{value:"humble",label:"Humble",children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono_mobilesam/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch mono_mobilesam sam.launch.py \n"})})})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"\u4f7f\u7528usb\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,t.jsx)(r.A,{groupId:"tros-distro",children:(0,t.jsx)(l.A,{value:"humble",label:"Humble",children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4ecetros\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono_mobilesam/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch mono_mobilesam sam.launch.py \n"})})})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"\u4f7f\u7528\u5355\u5f20\u56de\u704c\u56fe\u7247"})}),"\n",(0,t.jsx)(r.A,{groupId:"tros-distro",children:(0,t.jsx)(l.A,{value:"humble",label:"Humble",children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"# \u914d\u7f6eROS2\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4ecetros\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono_mobilesam/config/ .\n\n# \u914d\u7f6e\u56de\u704c\u56fe\u7247\nexport CAM_TYPE=fb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch mono_mobilesam sam.launch.py \n"})})})}),"\n",(0,t.jsx)(o.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"\u4f7f\u7528mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,t.jsx)(o.p,{children:"package\u521d\u59cb\u5316\u540e, \u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"[INFO] [launch]: All log files can be found below .ros/log/1970-01-02-22-39-09-001251-buildroot-22955\n[INFO] [hobot_codec_republish-2]: process started with pid [22973]\n[INFO] [mono_mobilesam-3]: process started with pid [22975]\n[INFO] [websocket-4]: process started with pid [22977]\n[hobot_codec_republish-2] [WARN] [0000167949.975123376] [HobotCodec]: This is HobotCodecNode: hobot_codec_22973.\n[hobot_codec_republish-2] [WARN] [0000167950.040208542] [HobotCodecNode]: Parameters:\n[hobot_codec_republish-2] sub_topic: /image\n[hobot_codec_republish-2] pub_topic: /hbmem_img\n[hobot_codec_republish-2] channel: 1\n[hobot_codec_republish-2] in_mode: ros\n[hobot_codec_republish-2] out_mode: shared_mem\n[hobot_codec_republish-2] in_format: jpeg\n[hobot_codec_republish-2] out_format: nv12\n[hobot_codec_republish-2] enc_qp: 10\n[hobot_codec_republish-2] jpg_quality: 60\n[hobot_codec_republish-2] input_framerate: 30\n[hobot_codec_republish-2] output_framerate: -1\n[hobot_codec_republish-2] dump_output: 0\n[hobot_codec_republish-2] [WARN] [0000167950.050887417] [HobotCodecImpl]: platform x5\n[websocket-4] [WARN] [0000167950.068235417] [websocket]:\n[websocket-4] Parameter:\n[websocket-4]  image_topic: /image\n[websocket-4]  image_type: mjpeg\n[websocket-4]  only_show_image: 0\n[websocket-4]  smart_topic: hobot_sam\n[websocket-4]  output_fps: 0\n[mono_mobilesam-3] [WARN] [0000167950.510756918] [mono_mobilesam]: Parameter:\n[mono_mobilesam-3]  cache_len_limit: 8\n[mono_mobilesam-3]  dump_render_img: 0\n[mono_mobilesam-3]  feed_type(0:local, 1:sub): 1\n[mono_mobilesam-3]  image: config/00131.jpg\n[mono_mobilesam-3]  is_regular_box: 1\n[mono_mobilesam-3]  is_shared_mem_sub: 1\n[mono_mobilesam-3]  is_sync_mode: 0\n[mono_mobilesam-3]  ai_msg_pub_topic_name: /hobot_sam\n[mono_mobilesam-3]  ai_msg_sub_topic_name: /hobot_dnn_detection\n[mono_mobilesam-3]  ros_img_sub_topic_name: /image\n[mono_mobilesam-3] [BPU_PLAT]BPU Platform Version(1.3.6)!\n[mono_mobilesam-3] [HBRT] set log level as 0. version = 3.15.52.0\n[mono_mobilesam-3] [DNN] Runtime version = 1.23.9_(3.15.52 HBRT)\n[mono_mobilesam-3] [A][DNN][packed_model.cpp:247][Model](1970-01-02,22:39:10.889.592) [HorizonRT] The model builder version = 1.23.5\n[mono_mobilesam-3] [W][DNN]bpu_model_info.cpp:491][Version](1970-01-02,22:39:11.25.90) Model: mobilesam_encoder_384_all_BPU. Inconsistency between the hbrt library version 3.15.52.0 and the model build version 3.15.47.0 detected, in order to ensure correct model results, it is recommended to use compilation tools and the BPU SDK from the same OpenExplorer package.\n[mono_mobilesam-3] [A][DNN][packed_model.cpp:247][Model](1970-01-02,22:39:11.239.603) [HorizonRT] The model builder version = 1.23.5\n[mono_mobilesam-3] [WARN] [0000167951.353811293] [mono_mobilesam]: Create hbmem_subscription with topic_name: /hbmem_img\n[mono_mobilesam-3] [W][DNN]bpu_model_info.cpp:491][Version](1970-01-02,22:39:11.318.569) Model: mobilesam_decoder_384. Inconsistency between the hbrt library version 3.15.52.0 and the model build version 3.15.47.0 detected, in order to ensure correct model results, it is recommended to use compilation tools and the BPU SDK from the same OpenExplorer package.\n[mono_mobilesam-3] [WARN] [0000167951.606431085] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 43, infer time ms: 152, post process time ms: 24\n[mono_mobilesam-3] [WARN] [0000167951.779821293] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 36, infer time ms: 149, post process time ms: 21\n[mono_mobilesam-3] [WARN] [0000167951.952713293] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 36, infer time ms: 150, post process time ms: 22\n[mono_mobilesam-3] [WARN] [0000167952.123928377] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 37, infer time ms: 149, post process time ms: 21\n[mono_mobilesam-3] [WARN] [0000167952.295540585] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 35, infer time ms: 150, post process time ms: 21\n"})}),"\n",(0,t.jsxs)(o.p,{children:["\u793a\u4f8b\u4e2d\u63a8\u7406\u7684\u7ed3\u679c\u4f1a\u6e32\u67d3\u5230Web\u4e0a, \u5728PC\u7aef\u7684\u6d4f\u89c8\u5668\u8f93\u5165",(0,t.jsx)(o.a,{href:"http://IP:8000",children:"http://IP:8000"})," \u5373\u53ef\u67e5\u770b\u56fe\u50cf\u548c\u7b97\u6cd5\u6e32\u67d3\u6548\u679c\uff08IP\u4e3aRDK\u7684IP\u5730\u5740\uff09, \u6253\u5f00\u754c\u9762\u53f3\u4e0a\u89d2\u8bbe\u7f6e, \u9009\u4e2d\u201d\u5168\u56fe\u5206\u5272\u201c\u9009\u9879, \u53ef\u4ee5\u663e\u793a\u6e32\u67d3\u6548\u679c\u3002"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:n(36118).A+"",width:"1917",height:"914"})}),"\n",(0,t.jsx)(o.h2,{id:"\u8fdb\u9636\u4f7f\u7528",children:"\u8fdb\u9636\u4f7f\u7528"}),"\n",(0,t.jsx)(o.p,{children:"\u5982\u9700\u8c03\u6574\u68c0\u6d4b\u6846\u5927\u5c0f, \u53ef\u53c2\u8003\u4e0b\u9762\u65b9\u6cd5\u9a8c\u8bc1\u3002\u66f4\u91cd\u8981\u7684\u662f\u53ef\u4ee5\u901a\u8fc7\u4e0a\u6e38\u68c0\u6d4b\u8282\u70b9\u68c0\u6d4b\u7ed3\u679c\u4f5c\u4e3asam\u8f93\u5165\u3002"}),"\n",(0,t.jsx)(o.p,{children:"\u8fd0\u884csam, \u53d6\u6d88\u56fa\u5b9a\u6846\u6a21\u5f0f sam_is_regular_box:=0"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"ros2 launch mono_mobilesam sam.launch.py sam_is_regular_box:=0\n"})}),"\n",(0,t.jsx)(o.p,{children:"\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u53d1\u5e03ai\u8bdd\u9898\u3002"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:'ros2 topic pub /hobot_dnn_detection ai_msgs/msg/PerceptionTargets \'{"targets": [{"rois": [{"rect": {"x_offset": 96, "y_offset": 96, "width": 192, "height": 96}, "type": "anything"}]}] }\'\n'})}),"\n",(0,t.jsx)(o.p,{children:'\u8bf4\u660e\uff1a\u8fd9\u91cc\u53d1\u5e03\u7684\u8bdd\u9898\u540d\u4e3a"/hobot_dnn_detection", \u68c0\u6d4b\u6846\u5750\u6807\u8d77\u70b9(96, 96), \u5bbd\u5ea6192, \u9ad8\u5ea696\u3002\u8fd9\u91cc\u68c0\u6d4b\u6846\u8d77\u6b62\u70b9, \u5e94\u8be5\u4e0d\u8d85\u8fc7\u8f93\u5165\u56fe\u50cf\u7684\u5927\u5c0f, \u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u9700\u7559\u610f\u3002'})]})}function b(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,o,n)=>{n.d(o,{A:()=>l});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:o,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:n,children:o})}},93859:(e,o,n)=>{n.d(o,{A:()=>R});var t=n(96540),s=n(34164),r=n(86641),l=n(56347),i=n(205),a=n(38874),c=n(24035),m=n(82993);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:o,children:n}=e;return(0,t.useMemo)((()=>{const e=o??function(e){return d(e).map((e=>{let{props:{value:o,label:n,attributes:t,default:s}}=e;return{value:o,label:n,attributes:t,default:s}}))}(n);return function(e){const o=(0,c.X)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,n])}function b(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function h(e){let{queryString:o=!1,groupId:n}=e;const s=(0,l.W6)(),r=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:o,groupId:n});return[(0,a.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const o=new URLSearchParams(s.location.search);o.set(r,e),s.replace({...s.location,search:o.toString()})}),[r,s])]}function p(e){const{defaultValue:o,queryString:n=!1,groupId:s}=e,r=u(e),[l,a]=(0,t.useState)((()=>function(e){let{defaultValue:o,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!b({value:o,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:o,tabValues:r}))),[c,d]=h({queryString:n,groupId:s}),[p,_]=function(e){let{groupId:o}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(o),[s,r]=(0,m.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),f=(()=>{const e=c??p;return b({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),_(e)}),[d,_,r]),tabValues:r}}var _=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:o,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),m=e=>{const o=e.currentTarget,n=a.indexOf(o),s=i[n].value;s!==t&&(c(o),l(s))},d=e=>{let o=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;o=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;o=a[n]??a[a.length-1];break}}o?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},o),children:i.map((e=>{let{value:o,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===o?0:-1,"aria-selected":t===o,ref:e=>a.push(e),onKeyDown:d,onClick:m,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===o}),children:n??o},o)}))})}function j(e){let{lazy:o,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,o)=>(0,t.cloneElement)(e,{key:o,hidden:e.props.value!==s})))})}function v(e){const o=p(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,x.jsx)(g,{...o,...e}),(0,x.jsx)(j,{...o,...e})]})}function R(e){const o=(0,_.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(o))}},36118:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/render_sam-58a8fd337e0d7e98ad943dcd5700cf2c.png"},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>i});var t=n(96540);const s={},r=t.createContext(s);function l(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);