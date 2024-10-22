"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1915],{29698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(74848),s=t(28453),r=t(93859),o=t(19365);const l={sidebar_position:1},i="FCOS",c={id:"Robot_development/boxs/detection/fcos",title:"FCOS",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/detection/fcos.md",sourceDirName:"05_Robot_development/03_boxs/detection",slug:"/Robot_development/boxs/detection/fcos",permalink:"/rdk_doc/en/Robot_development/boxs/detection/fcos",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/05_Robot_development/03_boxs/detection/fcos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"5.2.9 Large Language Model",permalink:"/rdk_doc/en/Robot_development/quick_demo/hobot_llm"},next:{title:"YOLO",permalink:"/rdk_doc/en/Robot_development/boxs/detection/yolo"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Use a MIPI camera to publish images",id:"use-a-mipi-camera-to-publish-images",level:4},{value:"Use a USB camera to publish images",id:"use-a-usb-camera-to-publish-images",level:4},{value:"Use local data offline",id:"use-local-data-offline",level:4},{value:"Result Analysis",id:"result-analysis",level:2},{value:"Publishing Images Using a Camera",id:"publishing-images-using-a-camera",level:3},{value:"Use local data offline",id:"use-local-data-offline-1",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"fcos",children:"FCOS"}),"\n","\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"The FCOS detection algorithm example uses images as input and utilizes BPU for inference.The result in the messages contain target categories and detection boxes."}),"\n",(0,a.jsxs)(n.p,{children:["FCOS is an open-source Onnx model developed by D-Robotics, trained using the ",(0,a.jsx)(n.a,{href:"http://cocodataset.org/",children:"COCO dataset"}),". It supports various types of object detection, including humans, animals, fruits, and vehicles, totaling 80 types."]}),"\n",(0,a.jsxs)(n.p,{children:["Code repository:  (",(0,a.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_dnn",children:"https://github.com/D-Robotics/hobot_dnn"}),")"]}),"\n",(0,a.jsx)(n.p,{children:"Application scenarios: FCOS is a one-stage object detection algorithm capable of pedestrian and vehicle detection. It is mainly used in autonomous driving and smart home fields."}),"\n",(0,a.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Platform"}),(0,a.jsx)(n.th,{children:"System"}),(0,a.jsx)(n.th,{children:"Function"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,a.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,a.jsxs)(n.td,{children:["- Launch MIPI/USB camera and display via web interface",(0,a.jsx)("br",{}),"- Use local data to save results offline"]})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,a.jsx)(n.h3,{id:"rdk",children:"RDK"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The RDK platform is flashed with the  Ubuntu 20.04/22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"TogetheROS.Bot has been successfully installed on the RDK platform."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A MIPI or USB camera has been installed on the RDK platform. If no camera is available, the algorithm effects can be experienced through local data using JPEG/PNG format or MP4, H.264, and H.265 video."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Ensure that the PC can access the RDK platform via the network."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,a.jsx)(n.h4,{id:"use-a-mipi-camera-to-publish-images",children:"Use a MIPI camera to publish images"}),"\n",(0,a.jsx)(n.p,{children:"The FCOS target detection algorithm example subscribes to images published by the sensor package, performs inference, and publishes algorithm messages. The WebSocket package is used to display the published images and corresponding algorithm results on a PC web browser."}),"\n",(0,a.jsxs)(r.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch dnn_node_example dnn_node_example.launch.py dnn_example_config_file:=config/fcosworkconfig.json dnn_example_image_width:=480 dnn_example_image_height:=272\n"})}),"\n",(0,a.jsx)(n.h4,{id:"use-a-usb-camera-to-publish-images",children:"Use a USB camera to publish images"}),"\n",(0,a.jsxs)(r.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch dnn_node_example dnn_node_example.launch.py dnn_example_config_file:=config/fcosworkconfig.json dnn_example_image_width:=480 dnn_example_image_height:=272\n"})}),"\n",(0,a.jsx)(n.h4,{id:"use-local-data-offline",children:"Use local data offline"}),"\n",(0,a.jsx)(n.p,{children:"The FCOS object detection algorithm example uses local JPEG/PNG format images. The inferred images with algorithm results are stored in the running path."}),"\n",(0,a.jsxs)(r.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Start the launch file\nros2 launch dnn_node_example dnn_node_example_feedback.launch.py dnn_example_config_file:=config/fcosworkconfig.json dnn_example_image:=config/target.jpg\n"})}),"\n",(0,a.jsx)(n.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,a.jsx)(n.h3,{id:"publishing-images-using-a-camera",children:"Publishing Images Using a Camera"}),"\n",(0,a.jsx)(n.p,{children:"The terminal output shows the following information:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"[example-3] [WARN] [1655092908.847609539] [example]: Create ai msg publisher with topic_name: hobot_dnn_detection\n[example-3] [WARN] [1655092908.849393011] [example]: Create img hbmem_subscription with topic_name: /hbmem_img\n[example-3] [WARN] [1655092543.834432739] [img_sub]: Sub img fps 31.16\n[example-3] [WARN] [1655092543.864126080] [example]: Smart fps 31.56\n[example-3] [WARN] [1655092544.867603759] [img_sub]: Sub img fps 30.01\n[example-3] [WARN] [1655092544.899715339] [example]: Smart fps 29.95\n[example-3] [WARN] [1655092545.900991853] [img_sub]: Sub img fps 30.01\n[example-3] [WARN] [1655092545.931518037] [example]: Smart fps 30.07\n[example-3] [WARN] [1655092546.901658559] [img_sub]: Sub img fps 30.00\n[example-3] [WARN] [1655092546.938970895] [example]: Smart fps 29.79\n[example-3] [WARN] [1655092547.934894494] [img_sub]: Sub img fps 30.01\n[example-3] [WARN] [1655092547.973566486] [example]: Smart fps 29.98\n[example-3] [WARN] [1655092548.967549745] [img_sub]: Sub img fps 30.10\n[example-3] [WARN] [1655092548.997125216] [example]: Smart fps 30.30\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The log output shows that the topic for publishing the inference results is ",(0,a.jsx)(n.code,{children:"hobot_dnn_detection"}),", and the topic for subscribing to images is ",(0,a.jsx)(n.code,{children:"/hbmem_img"}),". The frame rate of the subscribed images and algorithm inference output is approximately 30fps."]}),"\n",(0,a.jsxs)(n.p,{children:["To view the image and algorithm rendering effect on the PC browser, enter ",(0,a.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," (where IP is the IP address of the RDK):"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(34738).A+"",width:"1920",height:"908"})}),"\n",(0,a.jsx)(n.h3,{id:"use-local-data-offline-1",children:"Use local data offline"}),"\n",(0,a.jsx)(n.p,{children:"The terminal output shows the following information:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"[example-1] [INFO] [1654766336.839353395] [PostProcessBase]: out box size: 6\n[example-1] [INFO] [1654766336.839427767] [PostProcessBase]: det rect: 87.2364 259.123 409.917 371.59, det type: couch, score:0.782941\n[example-1] [INFO] [1654766336.839523764] [PostProcessBase]: det rect: 374.212 175.732 510.993 375.211, det type: potted plant, score:0.719925\n[example-1] [INFO] [1654766336.839597637] [PostProcessBase]: det rect: 167.183 335.857 234.13 355.308, det type: book, score:0.548071\n[example-1] [INFO] [1654766336.839671426] [PostProcessBase]: det rect: 139.87 313.279 183.4 352.292, det type: potted plant, score:0.542984\n[example-1] [INFO] [1654766336.839738966] [PostProcessBase]: det rect: 57.9695 148.59 83.5923 186.552, det type: potted plant, score:0.502935\n[example-1] [INFO] [1654766336.839823755] [PostProcessBase]: det rect: 165.691 339.25 237.475 366.896, det type: book, score:0.500648\n"})}),"\n",(0,a.jsx)(n.p,{children:"The log output shows that the algorithm infers 6 targets from the input image and outputs the coordinates of the detection boxes (the coordinates are in the order of the top left x and y coordinates of the bounding box, and the bottom right x and y coordinates) and their corresponding classes. The image is named render_feedback_0_0.jpeg, and the sample is as follows:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(98427).A+"",width:"512",height:"512"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),s=t(34164),r=t(86641),o=t(56347),l=t(205),i=t(38874),c=t(24035),d=t(82993);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),g=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==a&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function _(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(_,{...e,children:u(e.children)},String(n))}},98427:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/fcos_render_feedback-bea5c0d2c3096252ffdbe8316c5b913c.jpeg"},34738:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/fcos_render_web-0f6916633b0f61c9af14357037cb30e2.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(96540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);