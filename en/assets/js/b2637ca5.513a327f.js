"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7809],{56500:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>_,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(74848),s=t(28453),r=t(93859),i=t(19365);const a={sidebar_position:19},d="DOSOD",l={id:"Robot_development/boxs/function/hobot_dosod",title:"DOSOD",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/hobot_dosod.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hobot_dosod",permalink:"/rdk_doc/en/Robot_development/boxs/function/hobot_dosod",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/hobot_dosod.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Face 106 Landmarks Detection",permalink:"/rdk_doc/en/Robot_development/boxs/function/mono_face_landmarks_detection"},next:{title:"Monocular Elevation Network",permalink:"/rdk_doc/en/Robot_development/boxs/function/elevation_net"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Result analysis",id:"result-analysis",level:2},{value:"Advance",id:"advance",level:2}];function h(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"dosod",children:"DOSOD"}),"\n","\n",(0,n.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(o.p,{children:["DOSOD (Decoupled Open-Set Object Detector)[",(0,n.jsx)(o.a,{href:"https://github.com/D-Robotics-AI-Lab/DOSOD",children:"https://github.com/D-Robotics-AI-Lab/DOSOD"}),"]"," is an advanced open-vocabulary object detection algorithm capable of efficiently detecting various novel category targets in a zero-shot manner."]}),"\n",(0,n.jsxs)(o.p,{children:["Code Repository: (",(0,n.jsx)(o.a,{href:"https://github.com/D-Robotics/hobot_dosod",children:"https://github.com/D-Robotics/hobot_dosod"}),")"]}),"\n",(0,n.jsx)(o.p,{children:"Application Scenarios: The robust zero-shot detection capability of DOSOD endows it with enhanced generalization, making it applicable in domains such as autonomous driving, smart home, and other fields."}),"\n",(0,n.jsx)(o.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Platform"}),(0,n.jsx)(o.th,{children:"System"}),(0,n.jsx)(o.th,{children:"Function"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"RDK X5"}),(0,n.jsx)(o.td,{children:"Ubuntu 22.04 (Humble)"}),(0,n.jsx)(o.td,{children:"Start MIPI/USB camera/local video and display inference rendering results via web"})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"preparation",children:"Preparation"}),"\n",(0,n.jsx)(o.h3,{id:"rdk",children:"RDK"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"RDK has flashed the Ubuntu 22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"RDK has successfully installed TogetheROS.Bot."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"RDK has installed the MIPI or USB camera."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Confirm that the PC is able to access the RDK via the network."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o.p,{children:"DOSOD (hobot_dosod) package subscribes to images published by the sensor package. It has the capability to alter the detection categories by parameterizing the model. The websocket package is used to render and display the images and corresponding algorithm results on a PC browser."}),"\n",(0,n.jsx)(o.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Use MIPI Camera to Publish Images"})}),"\n",(0,n.jsx)(r.A,{groupId:"tros-distro",children:(0,n.jsxs)(i.A,{value:"humble",label:"Humble",children:[(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_dosod/config/ .\n\n# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch hobot_dosod dosod.launch.py dosod_model_file_name:=config/dosod_mlp3x_l_rep-int8.bin dosod_vocabulary_file_name:=config/offline_vocabulary.json\n"})})]})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Use USB Camera to Publish Images"})}),"\n",(0,n.jsx)(r.A,{groupId:"tros-distro",children:(0,n.jsxs)(i.A,{value:"humble",label:"Humble",children:[(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_dosod/config/ .\n\n# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch hobot_dosod dosod.launch.py dosod_model_file_name:=config/dosod_mlp3x_l_rep-int8.bin dosod_vocabulary_file_name:=config/offline_vocabulary.json\n"})})]})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Use Local Image Offline"})}),"\n",(0,n.jsx)(r.A,{groupId:"tros-distro",children:(0,n.jsxs)(i.A,{value:"humble",label:"Humble",children:[(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_dosod/config/ .\n\n# Configure the local playback image.\nexport CAM_TYPE=fb\n\n# Start the launch file\nros2 launch hobot_dosod dosod.launch.py dosod_model_file_name:=config/dosod_mlp3x_l_rep-int8.bin dosod_vocabulary_file_name:=config/offline_vocabulary.json\n"})})]})}),"\n",(0,n.jsx)(o.h2,{id:"result-analysis",children:"Result analysis"}),"\n",(0,n.jsx)(o.p,{children:"The following information is outputted in the terminal:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"[INFO] [launch]: All log files can be found below /root/.ros/log/2025-01-08-11-03-34-125542-ubuntu-9125\n[INFO] [launch]: Default logging verbosity is set to INFO\ncamera_type is  fb\nusing feedback\nHobot shm pkg enables zero-copy with fastrtps profiles file: /userdata/install/lib/hobot_shm/config/shm_fastdds.xml\nHobot shm pkg sets RMW_FASTRTPS_USE_QOS_FROM_XML: 1\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nwebserver has launch\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nenv of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting\nwebserver has launch\n[INFO] [hobot_image_pub-1]: process started with pid [9128]\n[INFO] [hobot_codec_republish-2]: process started with pid [9130]\n[INFO] [hobot_dosod-3]: process started with pid [9132]\n[INFO] [websocket-4]: process started with pid [9134]\n[hobot_codec_republish-2] [WARN] [1736305415.448727260] [hobot_codec_encoder]: Parameters:\n[hobot_codec_republish-2] sub_topic: /hbmem_img\n[hobot_codec_republish-2] pub_topic: /image\n[hobot_codec_republish-2] channel: 1\n[hobot_codec_republish-2] in_mode: shared_mem\n[hobot_codec_republish-2] out_mode: ros\n[hobot_codec_republish-2] in_format: nv12\n[hobot_codec_republish-2] out_format: jpeg\n[hobot_codec_republish-2] enc_qp: 10\n[hobot_codec_republish-2] jpg_quality: 60\n[hobot_codec_republish-2] input_framerate: 30\n[hobot_codec_republish-2] output_framerate: -1\n[hobot_codec_republish-2] dump_output: 0\n[hobot_codec_republish-2] [WARN] [1736305415.455977260] [HobotCodecImpl]: platform x5\n[hobot_codec_republish-2] [WARN] [1736305415.456186677] [hobot_codec_encoder]: Enabling zero-copy\n[hobot_dosod-3] [WARN] [1736305415.687929557] [hobot_dosod]: This is hobot dosod!\n[websocket-4] [WARN] [1736305415.794630560] [websocket]:\n[websocket-4] Parameter:\n[websocket-4]  image_topic: /image\n[websocket-4]  image_type: mjpeg\n[websocket-4]  only_show_image: 0\n[websocket-4]  smart_topic: hobot_dosod\n[websocket-4]  output_fps: 0\n[hobot_dosod-3] [WARN] [1736305415.835729185] [hobot_dosod]: Parameter:\n[hobot_dosod-3]  model_file_name: config/dosod_mlp3x_l_rep-int8.bin\n[hobot_dosod-3]  vocabulary_file_name: config/offline_vocabulary.json\n[hobot_dosod-3]  feed_type(0:local, 1:sub): 1\n[hobot_dosod-3]  image: config/000000160864.jpg\n[hobot_dosod-3]  dump_ai_result: 0\n[hobot_dosod-3]  dump_raw_img: 0\n[hobot_dosod-3]  dump_render_img: 0\n[hobot_dosod-3]  dump_ai_path: .\n[hobot_dosod-3]  dump_raw_path: .\n[hobot_dosod-3]  dump_render_path: .\n[hobot_dosod-3]  is_shared_mem_sub: 1\n[hobot_dosod-3]  score_threshold: 0.2\n[hobot_dosod-3]  iou_threshold: 0.5\n[hobot_dosod-3]  nms_top_k: 50\n[hobot_dosod-3]  is_homography: 0\n[hobot_dosod-3]  trigger_mode: 0\n[hobot_dosod-3]  class_mode: 0\n[hobot_dosod-3]  task_num: 2\n[hobot_dosod-3]  roi: 0\n[hobot_dosod-3]  y_offset: 950\n[hobot_dosod-3]  ai_msg_pub_topic_name: /hobot_dosod\n[hobot_dosod-3]  ros_img_sub_topic_name: /image\n[hobot_dosod-3] [WARN] [1736305415.836617477] [hobot_dosod]: model_file_name_: config/dosod_mlp3x_l_rep-int8.bin, task_num: 2\n[hobot_dosod-3] [BPU_PLAT]BPU Platform Version(1.3.6)!\n[hobot_dosod-3] [HBRT] set log level as 0. version = 3.15.54.0\n[hobot_dosod-3] [DNN] Runtime version = 1.23.10_(3.15.54 HBRT)\n[hobot_image_pub-1] [WARN] [1736305416.129590859] [image_pub_node]: parameter:\n[hobot_image_pub-1] image_source: ./config/000000160864.jpg\n[hobot_image_pub-1] source_image_w: 960\n[hobot_image_pub-1] source_image_h: 544\n[hobot_image_pub-1] output_image_w: 1920\n[hobot_image_pub-1] output_image_h: 1080\n[hobot_image_pub-1] fps: 10\n[hobot_image_pub-1] is_shared_mem: 1\n[hobot_image_pub-1] is_loop: 1\n[hobot_image_pub-1] is_compressed_img_pub: 0\n[hobot_image_pub-1] image_format: jpg\n[hobot_image_pub-1] pub_encoding: nv12pub_name_mode: 0\n[hobot_image_pub-1] msg_pub_topic_name: /hbmem_img\n[hobot_image_pub-1] [WARN] [1736305416.130613275] [hobot_image_pub]: Enabling zero-copy\n[hobot_codec_republish-2] [WARN] [1736305416.348757530] [hobot_codec_encoder]: Loaned messages are only safe with const ref subscription callbacks. If you are using any other kind of subscriptions, set the ROS_DISABLE_LOANED_MESSAGES environment variable to 1 (the default).\n[hobot_codec_republish-2] [WARN] [1736305416.349073988] [HobotVenc]: init_pic_w_: 1920, init_pic_h_: 1080, alined_pic_w_: 1920, alined_pic_h_: 1088, aline_w_: 16, aline_h_: 16\n[hobot_dosod-3] [A][DNN][packed_model.cpp:247][Model](2025-01-08,11:03:36.664.601) [HorizonRT] The model builder version = 1.24.3\n[hobot_dosod-3] [WARN] [1736305417.323044552] [hobot_dosod]: Get model name: 3x-l_epoch_100_rep-coco80-without-nms from load model.\n[hobot_dosod-3] [WARN] [1736305417.323560635] [hobot_dosod]: Create ai msg publisher with topic_name: /hobot_dosod\n[hobot_dosod-3] [WARN] [1736305417.350238969] [hobot_dosod]: Create img hbmem_subscription with topic_name: /hbmem_img\n[hobot_dosod-3] [WARN] [1736305417.445453471] [dosod]: Loaned messages are only safe with const ref subscription callbacks. If you are using any other kind of subscriptions, set the ROS_DISABLE_LOANED_MESSAGES environment variable to 1 (the default).\n[hobot_codec_republish-2] [WARN] [1736305417.453916388] [hobot_codec_encoder]: sub nv12 1920x1088, fps: 11.4504, pub jpeg, fps: 11.4504, comm delay [0.0833]ms, codec delay [13.5833]ms\n[hobot_dosod-3] [W][DNN]bpu_model_info.cpp:491][Version](2025-01-08,11:03:37.311.128) Model: 3x-l_epoch_100_rep-coco80-without-nms. Inconsistency between the hbrt library version 3.15.54.0 and the model build version 3.15.55.0 detected, in order to ensure correct model results, it is recommended to use compilation tools and the BPU SDK from the same OpenExplorer package.\n[hobot_dosod-3] [WARN] [1736305418.846408168] [hobot_dosod]: Sub img fps: 12.95, Smart fps: 12.67, pre process time ms: 12, infer time ms: 78, post process time ms: 8\n[hobot_dosod-3] [WARN] [1736305419.857350566] [hobot_dosod]: Sub img fps: 9.97, Smart fps: 10.88, pre process time ms: 11, infer time ms: 91, post process time ms: 8\n[hobot_dosod-3] [WARN] [1736305420.858769504] [hobot_dosod]: Sub img fps: 10.04, Smart fps: 9.99, pre process time ms: 13, infer time ms: 100, post process time ms: 7\n[hobot_dosod-3] [WARN] [1736305421.860964318] [hobot_dosod]: Sub img fps: 9.99, Smart fps: 9.99, pre process time ms: 14, infer time ms: 100, post process time ms: 7\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can view the image and algorithm rendering effects by entering ",(0,n.jsx)(o.a,{href:"http://IP:8000",children:"http://IP:8000"})," in the browser on the PC (where IP is the IP address of the RDK):"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:t(17665).A+"",width:"2560",height:"1262"})}),"\n",(0,n.jsx)(o.h2,{id:"advance",children:"Advance"}),"\n",(0,n.jsx)(o.p,{children:"If you want to modify the target text, you can parameter the model. [Usage] TODO."})]})}function _(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,o,t)=>{t.d(o,{A:()=>i});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:o,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:o})}},93859:(e,o,t)=>{t.d(o,{A:()=>S});var n=t(96540),s=t(34164),r=t(86641),i=t(56347),a=t(205),d=t(38874),l=t(24035),c=t(82993);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:o,children:t}=e;return(0,n.useMemo)((()=>{const e=o??function(e){return u(e).map((e=>{let{props:{value:o,label:t,attributes:n,default:s}}=e;return{value:o,label:t,attributes:n,default:s}}))}(t);return function(e){const o=(0,l.X)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,t])}function _(e){let{value:o,tabValues:t}=e;return t.some((e=>e.value===o))}function b(e){let{queryString:o=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:o=!1,groupId:t}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:o,groupId:t});return[(0,d.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const o=new URLSearchParams(s.location.search);o.set(r,e),s.replace({...s.location,search:o.toString()})}),[r,s])]}function p(e){const{defaultValue:o,queryString:t=!1,groupId:s}=e,r=h(e),[i,d]=(0,n.useState)((()=>function(e){let{defaultValue:o,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!_({value:o,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:r}))),[l,u]=b({queryString:t,groupId:s}),[p,m]=function(e){let{groupId:o}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(o),[s,r]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=l??p;return _({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!_({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:o,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),c=e=>{const o=e.currentTarget,t=d.indexOf(o),s=a[t].value;s!==n&&(l(o),i(s))},u=e=>{let o=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;o=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;o=d[t]??d[d.length-1];break}}o?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},o),children:a.map((e=>{let{value:o,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===o?0:-1,"aria-selected":n===o,ref:e=>d.push(e),onKeyDown:u,onClick:c,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":n===o}),children:t??o},o)}))})}function x(e){let{lazy:o,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(o){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,o)=>(0,n.cloneElement)(e,{key:o,hidden:e.props.value!==s})))})}function j(e){const o=p(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...o,...e}),(0,g.jsx)(x,{...o,...e})]})}function S(e){const o=(0,m.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(o))}},17665:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/render_dosod-ed29d0b9037cfe718de1c5a3689586d0.jpeg"},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var n=t(96540);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);