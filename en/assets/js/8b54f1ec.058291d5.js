"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3169],{1484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var o=t(74848),r=t(28453),s=t(93859),i=t(19365);const a={},l="Hand Keypoint Detection",d={id:"Robot_development/boxs/function/hand_lmk_detection",title:"Hand Keypoint Detection",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/hand_lmk_detection.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hand_lmk_detection",permalink:"/rdk_doc/en/Robot_development/boxs/function/hand_lmk_detection",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/05_Robot_development/03_boxs/function/hand_lmk_detection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gesture Recognition",permalink:"/rdk_doc/en/Robot_development/boxs/function/hand_gesture_detection"},next:{title:"Intelligent Voice",permalink:"/rdk_doc/en/Robot_development/boxs/function/hobot_audio"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"Result Analysis",id:"result-analysis",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hand-keypoint-detection",children:"Hand Keypoint Detection"}),"\n","\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"The hand keypoint detection example subscribes to images and algorithm messages containing hand bounding box information. It uses BPU for inference and publishes messages containing hand keypoint."}),"\n",(0,o.jsx)(n.p,{children:"The index of hand keypoints is shown in the following figure:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(93026).A+"",width:"589",height:"882"})}),"\n",(0,o.jsx)(n.p,{children:"Code repository:"}),"\n",(0,o.jsxs)(n.p,{children:["(",(0,o.jsx)(n.a,{href:"https://github.com/D-Robotics/hand_lmk_detection",children:"https://github.com/D-Robotics/hand_lmk_detection"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["(",(0,o.jsx)(n.a,{href:"https://github.com/D-Robotics/mono2d_body_detection",children:"https://github.com/D-Robotics/mono2d_body_detection"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Application scenarios: The hand keypoint detection algorithm is mainly used to capture keypoints of the hand, enabling functions such as custom gesture recognition. It is mainly applied in areas such as smart homes, virtual reality, and gaming entertainment."}),"\n",(0,o.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Platform"}),(0,o.jsx)(n.th,{children:"System"}),(0,o.jsx)(n.th,{children:"Function"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,o.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,o.jsx)(n.td,{children:"\xb7 Start MIPI/USB camera and display inference results on the web"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsx)(n.h3,{id:"rdk",children:"RDK"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The RDK has been flashed with the  Ubuntu 20.04/22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"TogetheROS.Bot has been successfully installed on the RDK."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"MIPI or USB cameras have been installed on the RDK."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Confirm that the PC can access the RDK through the network."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"The hand keypoint detection (hand_lmk_detection) package subscribes to images published by the sensor package and hand bounding box detection results published by the human body detection and tracking package. After inference, it publishes algorithm messages. The websocket package is used to render and display the published images and corresponding algorithm results on a PC browser."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Use MIPI Camera to Publish Images"})}),"\n",(0,o.jsxs)(s.A,{groupId:"tros-distro",children:[(0,o.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(i.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\n\n# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch hand_lmk_detection hand_lmk_detection.launch.py\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Use USB Camera to Publish Images"})}),"\n",(0,o.jsxs)(s.A,{groupId:"tros-distro",children:[(0,o.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(i.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\n\n# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch hand_lmk_detection hand_lmk_detection.launch.py\n"})}),"\n",(0,o.jsx)(n.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,o.jsx)(n.p,{children:"The log during execution is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[hand_lmk_detection-4] [WARN] [1660269063.553205182] [hand_lmk_det]: input fps: 31.43, out fps: 31.47\n[hand_lmk_detection-4] [WARN] [1660269064.579457516] [hand_lmk_det]: input fps: 30.21, out fps: 30.21[hand_lmk_detection-4] [WARN] [1660269065.612579058] [hand_lmk_det]: input fps: 30.01, out fps: 30.01\n[hand_lmk_detection-4] [WARN] [1660269066.612778892] [hand_lmk_det]: input fps: 30.00, out fps: 30.00\n[hand_lmk_detection-4] [WARN] [1660269067.646101309] [hand_lmk_det]: input fps: 30.01, out fps: 30.01\n[hand_lmk_detection-4] [WARN] [1660269068.679036184] [hand_lmk_det]: input fps: 30.04, out fps: 30.04\n"})}),"\n",(0,o.jsx)(n.p,{children:"The log shows that the program runs successfully and the input and output frame rates of the algorithm are 30fps, refreshing the statistical frame rate once per second."}),"\n",(0,o.jsxs)(n.p,{children:["On the PC browser, enter ",(0,o.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," to view the image and algorithm rendering effect (where IP is the IP address of the RDK):"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(92083).A+"",width:"1920",height:"907"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>v});var o=t(96540),r=t(34164),s=t(86641),i=t(56347),a=t(205),l=t(38874),d=t(24035),c=t(82993);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[d,u]=m({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),_=(()=>{const e=d??b;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{_&&l(_)}),[_]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==o&&(d(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",_.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",_.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},93026:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/hand_lmk_index-f3cfbe06d83eeb05ae4e01ad1fc5214d.jpeg"},92083:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/hand_render-fc882e9c0f3ac9bfa80758e805d5697d.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);