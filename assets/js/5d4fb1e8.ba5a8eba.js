"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4818],{17665:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/render_dosod-ed29d0b9037cfe718de1c5a3689586d0.jpeg"},19365:(e,o,n)=>{n.d(o,{A:()=>i});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:o,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:n,children:o})}},26192:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>_});var t=n(74848),s=n(28453),r=n(93859),i=n(19365);const d={sidebar_position:19},a="DOSOD",l={id:"Robot_development/boxs/function/hobot_dosod",title:"DOSOD",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/function/hobot_dosod.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hobot_dosod",permalink:"/rdk_doc/Robot_development/boxs/function/hobot_dosod",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/hobot_dosod.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"\u4eba\u8138106\u5173\u952e\u70b9\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/boxs/function/mono_face_landmarks_detection"},next:{title:"5.4.1 SLAM\u5efa\u56fe",permalink:"/rdk_doc/Robot_development/apps/slam"}},c={},_=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2},{value:"\u8fdb\u9636\u4f7f\u7528",id:"\u8fdb\u9636\u4f7f\u7528",level:2}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"dosod",children:"DOSOD"}),"\n","\n",(0,t.jsx)(o.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(o.p,{children:["DOSOD (Decoupled Open-Set Object Detector)[",(0,t.jsx)(o.a,{href:"https://github.com/D-Robotics-AI-Lab/DOSOD",children:"https://github.com/D-Robotics-AI-Lab/DOSOD"}),"]"," \u662f\u5730\u74dc\u81ea\u7814\u7684\u5f00\u653e\u8bcd\u6c47\u76ee\u6807\u68c0\u6d4b\u65b9\u6cd5\uff0c\u5229\u7528\u8f93\u5165\u6587\u672c\u7279\u5f81\u8fdb\u884c\u91cd\u53c2\u6570\u5316\uff0c\u53ef\u4ee5\u5b9e\u73b0\u4ee5\u96f6\u6837\u672c\u7684\u65b9\u5f0f\u66f4\u6539\u76ee\u6807\u68c0\u6d4b\u7c7b\u522b\u3002\u6b64\u4e3a\u4e0e\u5e38\u89c4\u68c0\u6d4b\u5668\u6700\u5927\u7684\u5dee\u522b\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a (",(0,t.jsx)(o.a,{href:"https://github.com/D-Robotics/hobot_dosod",children:"https://github.com/D-Robotics/hobot_dosod"}),")"]}),"\n",(0,t.jsx)(o.p,{children:"\u5e94\u7528\u573a\u666f\uff1aDOSOD\u5f3a\u5927\u7684\u96f6\u6837\u672c\u68c0\u6d4b\u80fd\u529b\u4f7f\u5f97\u5176\u5177\u6709\u66f4\u5f3a\u7684\u6cdb\u5316\u80fd\u529b\uff0c\u53ef\u4ee5\u5e94\u7528\u5728\u667a\u80fd\u9a7e\u9a76\u3001\u667a\u80fd\u5bb6\u5c45\u3001\u5730\u8d28\u68c0\u6d4b\u7b49\u9886\u57df\u3002"}),"\n",(0,t.jsx)(o.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"\u5e73\u53f0"}),(0,t.jsx)(o.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,t.jsx)(o.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"RDK X5"}),(0,t.jsx)(o.td,{children:"Ubuntu 22.04 (Humble)"}),(0,t.jsx)(o.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934/\u672c\u5730\u56de\u704c\uff0c\u5e76\u901a\u8fc7Web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(o.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"RDK\u5df2\u5b89\u88c5MIPI\u6216\u8005USB\u6444\u50cf\u5934\u3002"}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"\u786e\u8ba4PC\u673a\u80fd\u591f\u901a\u8fc7\u7f51\u7edc\u8bbf\u95eeRDK\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,t.jsx)(o.p,{children:"DOSOD (hobot_dosod) package\u8ba2\u9605sensor package\u53d1\u5e03\u7684\u56fe\u7247\uff0c\u5e76\u8f93\u5165\u6a21\u578b\u63a8\u7406\uff0c\u7ecf\u8fc7\u63a8\u7406\u540e\u53d1\u5e03\u7b97\u6cd5msg\uff0c\u901a\u8fc7websocket package\u5b9e\u73b0\u5728PC\u7aef\u6d4f\u89c8\u5668\u4e0a\u6e32\u67d3\u663e\u793asensor\u53d1\u5e03\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684\u7b97\u6cd5\u7ed3\u679c\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"\u4f7f\u7528MIPI\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,t.jsx)(r.A,{groupId:"tros-distro",children:(0,t.jsxs)(i.A,{value:"humble",label:"Humble",children:[(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_dosod/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6, \u901a\u8fc7dosod_model_file_name\u914d\u7f6e\u5bf9\u5e94\u6a21\u578b, dosod_vocabulary_file_name\u914d\u7f6e\u5bf9\u5e94\u8bcd\u6c47\u672c\u3002\u6ce8\u610f\u8bcd\u6c47\u672c\u4e0e\u6a21\u578b\u4e00\u4e00\u5bf9\u5e94\u3002\nros2 launch hobot_dosod dosod.launch.py dosod_model_file_name:=config/dosod_mlp3x_l_rep-int8.bin dosod_vocabulary_file_name:=config/offline_vocabulary.json\n"})})]})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,t.jsx)(r.A,{groupId:"tros-distro",children:(0,t.jsxs)(i.A,{value:"humble",label:"Humble",children:[(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"\n# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_dosod/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6, \u901a\u8fc7dosod_model_file_name\u914d\u7f6e\u5bf9\u5e94\u6a21\u578b, dosod_vocabulary_file_name\u914d\u7f6e\u5bf9\u5e94\u8bcd\u6c47\u672c\u3002\u6ce8\u610f\u8bcd\u6c47\u672c\u4e0e\u6a21\u578b\u4e00\u4e00\u5bf9\u5e94\u3002\nros2 launch hobot_dosod dosod.launch.py dosod_model_file_name:=config/dosod_mlp3x_l_rep-int8.bin dosod_vocabulary_file_name:=config/offline_vocabulary.json\n"})})]})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"\u4f7f\u7528\u672c\u5730\u56de\u704c\u56fe\u7247"})}),"\n",(0,t.jsx)(r.A,{groupId:"tros-distro",children:(0,t.jsxs)(i.A,{value:"humble",label:"Humble",children:[(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_dosod/config/ .\n\n# \u914d\u7f6e\u672c\u5730\u56de\u704c\u56fe\u7247\nexport CAM_TYPE=fb\n\n# \u542f\u52a8launch\u6587\u4ef6, \u901a\u8fc7dosod_model_file_name\u914d\u7f6e\u5bf9\u5e94\u6a21\u578b, dosod_vocabulary_file_name\u914d\u7f6e\u5bf9\u5e94\u8bcd\u6c47\u672c\u3002\u6ce8\u610f\u8bcd\u6c47\u672c\u4e0e\u6a21\u578b\u4e00\u4e00\u5bf9\u5e94\u3002\nros2 launch hobot_dosod dosod.launch.py dosod_model_file_name:=config/dosod_mlp3x_l_rep-int8.bin dosod_vocabulary_file_name:=config/offline_vocabulary.json\n"})})]})}),"\n",(0,t.jsx)(o.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,t.jsx)(o.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"[INFO] [launch]: All log files can be found below /root/.ros/log/2025-01-08-11-03-34-125542-ubuntu-9125\n[INFO] [launch]: Default logging verbosity is set to INFO\ncamera_type is  fb\nusing feedback\nHobot shm pkg enables zero-copy with fastrtps profiles file: /userdata/install/lib/hobot_shm/config/shm_fastdds.xml\nHobot shm pkg sets RMW_FASTRTPS_USE_QOS_FROM_XML: 1\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nwebserver has launch\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nwebserver has launch\n[INFO] [hobot_image_pub-1]: process started with pid [9128]\n[INFO] [hobot_codec_republish-2]: process started with pid [9130]\n[INFO] [hobot_dosod-3]: process started with pid [9132]\n[INFO] [websocket-4]: process started with pid [9134]\n[hobot_codec_republish-2] [WARN] [1736305415.448727260] [hobot_codec_encoder]: Parameters:\n[hobot_codec_republish-2] sub_topic: /hbmem_img\n[hobot_codec_republish-2] pub_topic: /image\n[hobot_codec_republish-2] channel: 1\n[hobot_codec_republish-2] in_mode: shared_mem\n[hobot_codec_republish-2] out_mode: ros\n[hobot_codec_republish-2] in_format: nv12\n[hobot_codec_republish-2] out_format: jpeg\n[hobot_codec_republish-2] enc_qp: 10\n[hobot_codec_republish-2] jpg_quality: 60\n[hobot_codec_republish-2] input_framerate: 30\n[hobot_codec_republish-2] output_framerate: -1\n[hobot_codec_republish-2] dump_output: 0\n[hobot_codec_republish-2] [WARN] [1736305415.455977260] [HobotCodecImpl]: platform x5\n[hobot_codec_republish-2] [WARN] [1736305415.456186677] [hobot_codec_encoder]: Enabling zero-copy\n[hobot_dosod-3] [WARN] [1736305415.687929557] [hobot_dosod]: This is hobot dosod!\n[websocket-4] [WARN] [1736305415.794630560] [websocket]:\n[websocket-4] Parameter:\n[websocket-4]  image_topic: /image\n[websocket-4]  image_type: mjpeg\n[websocket-4]  only_show_image: 0\n[websocket-4]  smart_topic: hobot_dosod\n[websocket-4]  output_fps: 0\n[hobot_dosod-3] [WARN] [1736305415.835729185] [hobot_dosod]: Parameter:\n[hobot_dosod-3]  model_file_name: config/dosod_mlp3x_l_rep-int8.bin\n[hobot_dosod-3]  vocabulary_file_name: config/offline_vocabulary.json\n[hobot_dosod-3]  feed_type(0:local, 1:sub): 1\n[hobot_dosod-3]  image: config/000000160864.jpg\n[hobot_dosod-3]  dump_ai_result: 0\n[hobot_dosod-3]  dump_raw_img: 0\n[hobot_dosod-3]  dump_render_img: 0\n[hobot_dosod-3]  dump_ai_path: .\n[hobot_dosod-3]  dump_raw_path: .\n[hobot_dosod-3]  dump_render_path: .\n[hobot_dosod-3]  is_shared_mem_sub: 1\n[hobot_dosod-3]  score_threshold: 0.2\n[hobot_dosod-3]  iou_threshold: 0.5\n[hobot_dosod-3]  nms_top_k: 50\n[hobot_dosod-3]  is_homography: 0\n[hobot_dosod-3]  trigger_mode: 0\n[hobot_dosod-3]  class_mode: 0\n[hobot_dosod-3]  task_num: 2\n[hobot_dosod-3]  roi: 0\n[hobot_dosod-3]  y_offset: 950\n[hobot_dosod-3]  ai_msg_pub_topic_name: /hobot_dosod\n[hobot_dosod-3]  ros_img_sub_topic_name: /image\n[hobot_dosod-3] [WARN] [1736305415.836617477] [hobot_dosod]: model_file_name_: config/dosod_mlp3x_l_rep-int8.bin, task_num: 2\n[hobot_dosod-3] [BPU_PLAT]BPU Platform Version(1.3.6)!\n[hobot_dosod-3] [HBRT] set log level as 0. version = 3.15.54.0\n[hobot_dosod-3] [DNN] Runtime version = 1.23.10_(3.15.54 HBRT)\n[hobot_image_pub-1] [WARN] [1736305416.129590859] [image_pub_node]: parameter:\n[hobot_image_pub-1] image_source: ./config/000000160864.jpg\n[hobot_image_pub-1] source_image_w: 960\n[hobot_image_pub-1] source_image_h: 544\n[hobot_image_pub-1] output_image_w: 1920\n[hobot_image_pub-1] output_image_h: 1080\n[hobot_image_pub-1] fps: 10\n[hobot_image_pub-1] is_shared_mem: 1\n[hobot_image_pub-1] is_loop: 1\n[hobot_image_pub-1] is_compressed_img_pub: 0\n[hobot_image_pub-1] image_format: jpg\n[hobot_image_pub-1] pub_encoding: nv12pub_name_mode: 0\n[hobot_image_pub-1] msg_pub_topic_name: /hbmem_img\n[hobot_image_pub-1] [WARN] [1736305416.130613275] [hobot_image_pub]: Enabling zero-copy\n[hobot_codec_republish-2] [WARN] [1736305416.348757530] [hobot_codec_encoder]: Loaned messages are only safe with const ref subscription callbacks. If you are using any other kind of subscriptions, set the ROS_DISABLE_LOANED_MESSAGES environment variable to 1 (the default).\n[hobot_codec_republish-2] [WARN] [1736305416.349073988] [HobotVenc]: init_pic_w_: 1920, init_pic_h_: 1080, alined_pic_w_: 1920, alined_pic_h_: 1088, aline_w_: 16, aline_h_: 16\n[hobot_dosod-3] [A][DNN][packed_model.cpp:247][Model](2025-01-08,11:03:36.664.601) [HorizonRT] The model builder version = 1.24.3\n[hobot_dosod-3] [WARN] [1736305417.323044552] [hobot_dosod]: Get model name: 3x-l_epoch_100_rep-coco80-without-nms from load model.\n[hobot_dosod-3] [WARN] [1736305417.323560635] [hobot_dosod]: Create ai msg publisher with topic_name: /hobot_dosod\n[hobot_dosod-3] [WARN] [1736305417.350238969] [hobot_dosod]: Create img hbmem_subscription with topic_name: /hbmem_img\n[hobot_dosod-3] [WARN] [1736305417.445453471] [dosod]: Loaned messages are only safe with const ref subscription callbacks. If you are using any other kind of subscriptions, set the ROS_DISABLE_LOANED_MESSAGES environment variable to 1 (the default).\n[hobot_codec_republish-2] [WARN] [1736305417.453916388] [hobot_codec_encoder]: sub nv12 1920x1088, fps: 11.4504, pub jpeg, fps: 11.4504, comm delay [0.0833]ms, codec delay [13.5833]ms\n[hobot_dosod-3] [W][DNN]bpu_model_info.cpp:491][Version](2025-01-08,11:03:37.311.128) Model: 3x-l_epoch_100_rep-coco80-without-nms. Inconsistency between the hbrt library version 3.15.54.0 and the model build version 3.15.55.0 detected, in order to ensure correct model results, it is recommended to use compilation tools and the BPU SDK from the same OpenExplorer package.\n[hobot_dosod-3] [WARN] [1736305418.846408168] [hobot_dosod]: Sub img fps: 12.95, Smart fps: 12.67, pre process time ms: 12, infer time ms: 78, post process time ms: 8\n[hobot_dosod-3] [WARN] [1736305419.857350566] [hobot_dosod]: Sub img fps: 9.97, Smart fps: 10.88, pre process time ms: 11, infer time ms: 91, post process time ms: 8\n[hobot_dosod-3] [WARN] [1736305420.858769504] [hobot_dosod]: Sub img fps: 10.04, Smart fps: 9.99, pre process time ms: 13, infer time ms: 100, post process time ms: 7\n[hobot_dosod-3] [WARN] [1736305421.860964318] [hobot_dosod]: Sub img fps: 9.99, Smart fps: 9.99, pre process time ms: 14, infer time ms: 100, post process time ms: 7\n"})}),"\n",(0,t.jsxs)(o.p,{children:["\u5728PC\u7aef\u7684\u6d4f\u89c8\u5668\u8f93\u5165",(0,t.jsx)(o.a,{href:"http://IP:8000",children:"http://IP:8000"})," \u5373\u53ef\u67e5\u770b\u56fe\u50cf\u548c\u7b97\u6cd5\u6e32\u67d3\u6548\u679c\uff08IP\u4e3aRDK\u7684IP\u5730\u5740\uff09\uff1a"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:n(17665).A+"",width:"2560",height:"1262"})}),"\n",(0,t.jsx)(o.h2,{id:"\u8fdb\u9636\u4f7f\u7528",children:"\u8fdb\u9636\u4f7f\u7528"}),"\n",(0,t.jsx)(o.p,{children:"\u5982\u679c\u60a8\u5e0c\u671b\u4fee\u6539\u81ea\u5b9a\u4e49\u7c7b\u522b, \u8bf7\u53c2\u8003[\u6a21\u578b\u91cd\u53c2\u6570\u5316\u65b9\u6cd5] \uff08\u94fe\u63a5\u5373\u5c06\u4e0a\u7ebf\uff09"})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>d});var t=n(96540);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}},93859:(e,o,n)=>{n.d(o,{A:()=>R});var t=n(96540),s=n(34164),r=n(86641),i=n(56347),d=n(205),a=n(38874),l=n(24035),c=n(82993);function _(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:o,children:n}=e;return(0,t.useMemo)((()=>{const e=o??function(e){return _(e).map((e=>{let{props:{value:o,label:n,attributes:t,default:s}}=e;return{value:o,label:n,attributes:t,default:s}}))}(n);return function(e){const o=(0,l.X)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,n])}function h(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function b(e){let{queryString:o=!1,groupId:n}=e;const s=(0,i.W6)(),r=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:o,groupId:n});return[(0,a.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const o=new URLSearchParams(s.location.search);o.set(r,e),s.replace({...s.location,search:o.toString()})}),[r,s])]}function p(e){const{defaultValue:o,queryString:n=!1,groupId:s}=e,r=u(e),[i,a]=(0,t.useState)((()=>function(e){let{defaultValue:o,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!h({value:o,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:o,tabValues:r}))),[l,_]=b({queryString:n,groupId:s}),[p,m]=function(e){let{groupId:o}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(o),[s,r]=(0,c.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),f=(()=>{const e=l??p;return h({value:e,tabValues:r})?e:null})();(0,d.A)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),_(e),m(e)}),[_,m,r]),tabValues:r}}var m=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:o,block:n,selectedValue:t,selectValue:i,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),c=e=>{const o=e.currentTarget,n=a.indexOf(o),s=d[n].value;s!==t&&(l(o),i(s))},_=e=>{let o=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;o=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;o=a[n]??a[a.length-1];break}}o?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},o),children:d.map((e=>{let{value:o,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===o?0:-1,"aria-selected":t===o,ref:e=>a.push(e),onKeyDown:_,onClick:c,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===o}),children:n??o},o)}))})}function x(e){let{lazy:o,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,o)=>(0,t.cloneElement)(e,{key:o,hidden:e.props.value!==s})))})}function j(e){const o=p(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...o,...e}),(0,g.jsx)(x,{...o,...e})]})}function R(e){const o=(0,m.A)();return(0,g.jsx)(j,{...e,children:_(e.children)},String(o))}}}]);