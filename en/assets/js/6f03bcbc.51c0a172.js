"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4760],{19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var o=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:t,children:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}},45250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(74848),r=t(28453),i=t(93859),s=t(19365);const a={sidebar_position:1},d="Human Detection and Tracking",l={id:"Robot_development/boxs/function/mono2d_body_detection",title:"Human Detection and Tracking",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/mono2d_body_detection.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/mono2d_body_detection",permalink:"/rdk_doc/en/Robot_development/boxs/function/mono2d_body_detection",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/mono2d_body_detection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"YOLOv8-Seg",permalink:"/rdk_doc/en/Robot_development/boxs/segmentation/yolov8_seg"},next:{title:"Road Structuring",permalink:"/rdk_doc/en/Robot_development/boxs/function/parking_perception"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK Platform",id:"rdk-platform",level:3},{value:"Result analysis",id:"result-analysis",level:2}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"human-detection-and-tracking",children:"Human Detection and Tracking"}),"\n","\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"The human detection and tracking algorithm example subscribes to images and utilizes BPU for inference. It publishes messages containing detection results for human bodies, heads, faces, hand boxes, and body keypoints, and achieves tracking of detection boxes through the multi-target tracking (MOT)."}),"\n",(0,o.jsx)(n.p,{children:"The supported detection categories and their corresponding data types in the algorithm are as follows:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Category"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Data Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"body"}),(0,o.jsx)(n.td,{children:"body box"}),(0,o.jsx)(n.td,{children:"Roi"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"head"}),(0,o.jsx)(n.td,{children:"head box"}),(0,o.jsx)(n.td,{children:"Roi"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"face"}),(0,o.jsx)(n.td,{children:"face box"}),(0,o.jsx)(n.td,{children:"Roi"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"hand"}),(0,o.jsx)(n.td,{children:"hand box"}),(0,o.jsx)(n.td,{children:"Roi"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"body_kps"}),(0,o.jsx)(n.td,{children:"body keypoints"}),(0,o.jsx)(n.td,{children:"Point"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"The index of the body keypoints algorithm result is shown in the following figure:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(52310).A+"",width:"749",height:"1124"})}),"\n",(0,o.jsxs)(n.p,{children:["Code Repository:  (",(0,o.jsx)(n.a,{href:"https://github.com/D-Robotics/mono2d_body_detection",children:"https://github.com/D-Robotics/mono2d_body_detection"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Application Scenarios: Human detection and tracking algorithms are an important component of human motion visual analysis, which can achieve functions such as human pose analysis and people counting. They are mainly applied in fields like human-computer interaction and gaming entertainment."}),"\n",(0,o.jsxs)(n.p,{children:["Pose Detection Example: ",(0,o.jsx)(n.a,{href:"../../apps/fall_detection",children:"Pose Detection"}),(0,o.jsx)(n.br,{}),"\n","Human Tracking for Car Example: ",(0,o.jsx)(n.a,{href:"../../apps/car_tracking",children:"Car Tracking"})]}),"\n",(0,o.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Platform"}),(0,o.jsx)(n.th,{children:"System"}),(0,o.jsx)(n.th,{children:"Function"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,o.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,o.jsx)(n.td,{children:"Start MIPI/USB camera/local video and display inference rendering results via web"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsx)(n.h3,{id:"rdk",children:"RDK"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"RDK has flashed the  Ubuntu 20.04/22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"RDK has successfully installed TogetheROS.Bot."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"RDK has installed the MIPI or USB camera."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Confirm that the PC is able to access the RDK via the network."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"The mono2d_body_detection package for human detection and tracking subscribes to images published by the sensor package, performs inference, and publishes algorithm messages. The websocket package is used to render and display the images and corresponding algorithm results on a PC browser."}),"\n",(0,o.jsx)(n.h3,{id:"rdk-platform",children:"RDK Platform"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Use MIPI Camera to Publish Images"})}),"\n",(0,o.jsxs)(i.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\n# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch mono2d_body_detection mono2d_body_detection.launch.py\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Use USB Camera to Publish Images"})}),"\n",(0,o.jsxs)(i.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\n# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch mono2d_body_detection mono2d_body_detection.launch.py\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Use Local Image Offline"})}),"\n",(0,o.jsxs)(i.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/dnn_node_example/config/ .\n\n# Configure the local playback image.\nexport CAM_TYPE=fb\n\n# Start the launch file\nros2 launch mono2d_body_detection mono2d_body_detection.launch.py publish_image_source:=config/person_body.jpg publish_image_format:=jpg publish_output_image_w:=960 publish_output_image_h:=544\n"})}),"\n",(0,o.jsx)(n.h2,{id:"result-analysis",children:"Result analysis"}),"\n",(0,o.jsx)(n.p,{children:"The following information is outputted in the terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"[mono2d_body_detection-3] [WARN] [1660219823.214730286] [example]: This is mono2d body det example!\n[mono2d_body_detection-3] [WARN] [1660219823.417856952] [mono2d_body_det]: Parameter:\n[mono2d_body_detection-3]  is_sync_mode_: 0\n[mono2d_body_detection-3]  model_file_name_: config/multitask_body_head_face_hand_kps_960x544.hbm\n[mono2d_body_detection-3]  is_shared_mem_sub: 1\n[mono2d_body_detection-3]  ai_msg_pub_topic_name: /hobot_mono2d_body_detection\n[mono2d_body_detection-3] [C][31082][08-11][20:10:23:425][configuration.cpp:49][EasyDNN]EasyDNN version: 0.4.11\n[mono2d_body_detection-3] [BPU_PLAT]BPU Platform Version(1.3.1)!\n[mono2d_body_detection-3] [HBRT] set log level as 0. version = 3.14.5\n[mono2d_body_detection-3] [DNN] Runtime version = 1.9.7_(3.14.5 HBRT)\n[mono2d_body_detection-3] [WARN] [1660219823.545293244] [mono2d_body_det]: Create hbmem_subscription with topic_name: /hbmem_img\n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] [WARN] [1660219824.895102286] [mono2d_body_det]: input fps: 31.34, out fps: 31.22\n[mono2d_body_detection-3] [WARN] [1660219825.921873870] [mono2d_body_det]: input fps: 30.16, out fps: 30.21\n[mono2d_body_detection-3] [WARN] [1660219826.922075496] [mono2d_body_det]: input fps: 30.16, out fps: 30.00\n[mono2d_body_detection-3] [WARN] [1660219827.955463330] [mono2d_body_det]: input fps: 30.01, out fps: 30.01\n[mono2d_body_detection-3] [WARN] [1660219828.955764872] [mono2d_body_det]: input fps: 30.01, out fps: 30.00\n"})}),"\n",(0,o.jsx)(n.p,{children:"The log shows that frame rates of the algorithm during inference are 30fps, and the statistics are refreshed every second."}),"\n",(0,o.jsxs)(n.p,{children:["On the PC browser, enter ",(0,o.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," to view the rendering effect of the image and the algorithm (body, head, face, and hand detection boxes, detection box type and target tracking ID, and human body keypoints) (IP is the IP address of the RDK):"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(92688).A+"",width:"1920",height:"908"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},52310:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/kps_index-6cecb8977d692cc8db31148e7c9ada54.jpeg"},92688:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/body_render-bfbd47112fb160cdb8aeeb62a8f9fd2a.jpeg"},93859:(e,n,t)=>{t.d(n,{A:()=>v});var o=t(96540),r=t(34164),i=t(86641),s=t(56347),a=t(205),d=t(38874),l=t(24035),c=t(82993);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,d]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:t,groupId:r}),[b,_]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=l??b;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),_(e)}),[u,_,i]),tabValues:i}}var _=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),r=a[t].value;r!==o&&(l(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function v(e){const n=(0,_.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(n))}}}]);