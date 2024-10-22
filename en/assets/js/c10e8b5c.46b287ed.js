"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5656],{91207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(74848),o=n(28453),s=n(93859),i=n(19365);const a={},d="Gesture Recognition",l={id:"Robot_development/boxs/function/hand_gesture_detection",title:"Gesture Recognition",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/hand_gesture_detection.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hand_gesture_detection",permalink:"/rdk_doc/en/Robot_development/boxs/function/hand_gesture_detection",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/05_Robot_development/03_boxs/function/hand_gesture_detection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monocular Elevation Network",permalink:"/rdk_doc/en/Robot_development/boxs/function/elevation_net"},next:{title:"Hand Keypoint Detection",permalink:"/rdk_doc/en/Robot_development/boxs/function/hand_lmk_detection"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparations",id:"preparations",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"Analysis of Results",id:"analysis-of-results",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"gesture-recognition",children:"Gesture Recognition"}),"\n","\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"The gesture recognition example subscription package includes algorithm messages containing hand bounding boxes and hand keypoint information. It uses BPU for inference and publishes algorithm result messages containing gesture information."}),"\n",(0,r.jsx)(t.p,{children:'The supported gesture recognition categories and their corresponding values in the algorithm message (Attribute member, with type "gesture") are as follows:'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Gesture"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ThumbUp"}),(0,r.jsx)(t.td,{children:"Thumbs up"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Victory"}),(0,r.jsx)(t.td,{children:'"V" gesture'}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Mute"}),(0,r.jsx)(t.td,{children:"mute gesture"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Palm"}),(0,r.jsx)(t.td,{children:"Palm"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Okay"}),(0,r.jsx)(t.td,{children:"OK gesture"}),(0,r.jsx)(t.td,{children:"11"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ThumbLeft"}),(0,r.jsx)(t.td,{children:"Thumb left"}),(0,r.jsx)(t.td,{children:"12"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ThumbRight"}),(0,r.jsx)(t.td,{children:"Thumb right"}),(0,r.jsx)(t.td,{children:"13"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Awesome"}),(0,r.jsx)(t.td,{children:'"666" gesture'}),(0,r.jsx)(t.td,{children:"14"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Code repositories:"}),"\n",(0,r.jsxs)(t.p,{children:["(",(0,r.jsx)(t.a,{href:"https://github.com/D-Robotics/hand_lmk_detection",children:"https://github.com/D-Robotics/hand_lmk_detection"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["(",(0,r.jsx)(t.a,{href:"https://github.com/D-Robotics/hand_gesture_detection",children:"https://github.com/D-Robotics/hand_gesture_detection"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["(",(0,r.jsx)(t.a,{href:"https://github.com/D-Robotics/mono2d_body_detection",children:"https://github.com/D-Robotics/mono2d_body_detection"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Application scenarios: Gesture recognition algorithms integrate hand keypoint detection, gesture analysis, and other technologies, enabling computers to interpret human gestures as corresponding commands. It can be used for gesture control, sign language translation, and other functions, primarily in the fields of smart homes, smart cabins, smart wearables, etc."}),"\n",(0,r.jsxs)(t.p,{children:["Example of gesture-controlled car: ",(0,r.jsx)(t.a,{href:"../../apps/car_gesture_control",children:"Car Gesture Control"})]}),"\n",(0,r.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Platform"}),(0,r.jsx)(t.th,{children:"System"}),(0,r.jsx)(t.th,{children:"Function"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,r.jsx)(t.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,r.jsx)(t.td,{children:"Start MIPI/USB camera and display inference results via web"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"preparations",children:"Preparations"}),"\n",(0,r.jsx)(t.h3,{id:"rdk",children:"RDK"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"RDK is flashed with  Ubuntu 20.04/22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"TogetheROS.Bot has been successfully installed on RDK."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The RDK is installed with a MIPI or USB camera."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Confirm that the PC can access the RDK through the network."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"The gesture recognition package (hand_gesture_detection) subscribes to the hand key point detection package and publishes the hand key point detection results. After inference, it publishes the algorithm message. The WebSocket package is used to display the images and corresponding algorithm results on the PC browser."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Use MIPI Camera to Publish Images"})}),"\n",(0,r.jsxs)(s.A,{groupId:"tros-distro",children:[(0,r.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(i.A,{value:"humble",label:"Humble",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_gesture_detection/config/ .\n\n# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch hand_gesture_detection hand_gesture_detection.launch.py\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Use USB Camera to Publish Images"})}),"\n",(0,r.jsxs)(s.A,{groupId:"tros-distro",children:[(0,r.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(i.A,{value:"humble",label:"Humble",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_gesture_detection/config/ .\n\n# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch hand_gesture_detection hand_gesture_detection.launch.py\n"})}),"\n",(0,r.jsx)(t.h2,{id:"analysis-of-results",children:"Analysis of Results"}),"\n",(0,r.jsx)(t.p,{children:"The following information will be displayed in the terminal output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"[hand_gesture_detection-5] [C][32711][08-12][09:39:39:575][configuration.cpp:49][EasyDNN]EasyDNN version: 0.4.11[hand_gesture_detection-5] [DNN] Runtime version = 1.9.7_(3.14.5 HBRT)\n[hand_gesture_detection-5] [WARN] [1660268379.611419981] [hand gesture det node]: input_idx: 0, tensorType = 8, tensorLayout = 0\n[hand_gesture_detection-5] [WARN] [1660268379.619313022] [hand gesture det node]: Create subscription with topic_name: /hobot_hand_lmk_detection\n[hand_gesture_detection-5] [WARN] [1660268379.629207314] [hand gesture det node]: ai_msg_pub_topic_name: /hobot_hand_gesture_detection\n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[hand_gesture_detection-5] [WARN] [1660268381.026173815] [hand_gesture_det]: Sub smart fps 31.16\n[hand_gesture_detection-5] [WARN] [1660268381.206196565] [hand_gesture_det]: Pub smart fps 30.17\n[hand_gesture_detection-5] [WARN] [1660268382.054034899] [hand_gesture_det]: Sub smart fps 30.19\n[hand_gesture_detection-5] [WARN] [1660268382.234087357] [hand_gesture_det]: Pub smart fps 30.19\n[hand_gesture_detection-5] [WARN] [1660268383.055988982] [hand_gesture_det]: Sub smart fps 29.97\n[hand_gesture_detection-5] [WARN] [1660268383.235230316] [hand_gesture_det]: Pub smart fps 30.00\n[hand_gesture_detection-5] [WARN] [1660268384.087152150] [hand_gesture_det]: Sub smart fps 30.10\n[hand_gesture_detection-5] [WARN] [1660268384.256141566] [hand_gesture_det]: Pub smart fps 30.39\n"})}),"\n",(0,r.jsx)(t.p,{children:"The log shows that the program runs successfully, with an input and output frame rate of 30fps during inference, and the statistics of frame rate are refreshed once per second."}),"\n",(0,r.jsx)(t.p,{children:'The output log shows that the subscribed algorithm message includes hand information (including the bounding box and key points detection results of the hand), and the gesture recognition algorithm outputs a gesture classification result of "Palm" (the classification result is 5).'}),"\n",(0,r.jsxs)(t.p,{children:["On the PC side, enter ",(0,r.jsx)(t.a,{href:"http://IP:8000",children:"http://IP:8000"})," in the browser to view the image and the rendering effect of the algorithm (where IP is the IP address of the RDK)."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Gesture Rendering",src:n(52747).A+"",width:"1646",height:"837"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n,children:t})}},93859:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),o=n(34164),s=n(86641),i=n(56347),a=n(205),d=n(38874),l=n(24035),c=n(82993);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,u]=m({queryString:n,groupId:o}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,c.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),_=(()=>{const e=l??g;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{_&&d(_)}),[_]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),o=a[n].value;o!==r&&(l(t),i(o))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,o.A)("tabs__item",_.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",_.tabList),children:[(0,f.jsx)(x,{...t,...e}),(0,f.jsx)(j,{...t,...e})]})}function v(e){const t=(0,b.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},52747:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/gesture_render-c49be7fd01b7b89913b1df5a45daccda.jpeg"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);