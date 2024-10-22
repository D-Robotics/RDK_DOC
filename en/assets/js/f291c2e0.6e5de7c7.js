"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[585],{34838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var o=n(74848),r=n(28453),i=n(93859),a=n(19365);const d={},s="Monocular 3D Indoor Detection",l={id:"Robot_development/boxs/function/mono3d_indoor_detection",title:"Monocular 3D Indoor Detection",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/mono3d_indoor_detection.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/mono3d_indoor_detection",permalink:"/rdk_doc/en/Robot_development/boxs/function/mono3d_indoor_detection",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/05_Robot_development/03_boxs/function/mono3d_indoor_detection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53cc\u76ee\u6df1\u5ea6\u4f30\u8ba1\u7b97\u6cd5",permalink:"/rdk_doc/en/Robot_development/boxs/function/hobot_stereonet"},next:{title:"Visual SLAM",permalink:"/rdk_doc/en/Robot_development/boxs/function/orb_slam3"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Result Analysis",id:"result-analysis",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"monocular-3d-indoor-detection",children:"Monocular 3D Indoor Detection"}),"\n","\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"The mono3d_indoor_detection package is an example of indoor object 3D detection algorithm based on the hobot_dnn package. It uses the 3D detection model and indoor data on the D-Robotics's RDK to perform model inference using BPU and obtain the inference results."}),"\n",(0,o.jsx)(t.p,{children:"Compared to 2D object detection, which can only recognize the object category and bounding box, 3D object detection can identify the precise position and orientation of the object. For example, in navigation the rich information provided by 3D object detection algorithms can help the planning and control robot achieve better effects."}),"\n",(0,o.jsx)(t.p,{children:"The supported indoor object detection categories of the algorithm include: charging docks, trash cans, and slippers."}),"\n",(0,o.jsx)(t.p,{children:"The detection results for each category include:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Length, width, height: The length, width, and height of the three-dimensional object (i.e. hexahedron), measured in meters."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Orientation: The orientation of the object relative to the camera, measured in radians. The range is from -\u03c0 to \u03c0, representing the angle between the camera coordinate system x-axis and the object's forward direction in the camera coordinate system."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Depth information: The distance from the camera to the object, measured in meters."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Code repository:  (",(0,o.jsx)(t.a,{href:"https://github.com/D-Robotics/mono3d_indoor_detection",children:"https://github.com/D-Robotics/mono3d_indoor_detection"}),")"]}),"\n",(0,o.jsx)(t.p,{children:"Applications: The monocular 3D indoor detection algorithm can directly identify the exact position and orientation of objects in images, enabling object posture recognition. It is mainly used in autonomous driving, smart home, and other fields."}),"\n",(0,o.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Platform"}),(0,o.jsx)(t.th,{children:"System"}),(0,o.jsx)(t.th,{children:"Function"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,o.jsx)(t.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,o.jsx)(t.td,{children:"\xb7 Start MIPI/USB camera/local data and save the inference rendering result locally"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsx)(t.h3,{id:"rdk",children:"RDK"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"RDK has been flashed with the  Ubuntu 20.04/22.04 system system image provided by D-Robotics."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"TogetheROS.Bot has been successfully installed on the RDK."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.p,{children:"Because the 3D detection model is related to camera parameters, different cameras need to adjust the parameters accordingly."}),"\n",(0,o.jsx)(t.p,{children:"The mono3d_indoor_detection algorithm package uses local image input for inference. After the inference, it can detect object categories and 3D positioning information, and publish the algorithm message for 3D information. Users can subscribe to the 3D detection result message for application development."}),"\n",(0,o.jsx)(t.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,o.jsxs)(i.A,{groupId:"tros-distro",children:[(0,o.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(a.A,{value:"humble",label:"Humble",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono3d_indoor_detection/config/ .\n\n# Start the launch file\nros2 launch mono3d_indoor_detection mono3d_indoor_detection.launch.py \n"})}),"\n",(0,o.jsx)(t.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,o.jsx)(t.p,{children:"After processing one frame of image data, the mono3d_indoor_detection package outputs the following information:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"[mono3d_indoor_detection-1] [INFO] [1662612553.868256257] [mono3d_detection]: target type: trash_can\n[mono3d_indoor_detection-1] [INFO] [1662612553.868303755] [mono3d_detection]: target type: width, value: 0.236816\n[mono3d_indoor_detection-1] [INFO] [1662612553.868358420] [mono3d_detection]: target type: height, value: 0.305664\n[mono3d_indoor_detection-1] [INFO] [1662612553.868404002] [mono3d_detection]: target type: length, value: 0.224182\n[mono3d_indoor_detection-1] [INFO] [1662612553.868448000] [mono3d_detection]: target type: rotation, value: -1.571989\n[mono3d_indoor_detection-1] [INFO] [1662612553.868487790] [mono3d_detection]: target type: x, value: -0.191978\n[mono3d_indoor_detection-1] [INFO] [1662612553.868530705] [mono3d_detection]: target type: y, value: -0.143963\n[mono3d_indoor_detection-1] [INFO] [1662612553.868570870] [mono3d_detection]: target type: z, value: 0.714024\n[mono3d_indoor_detection-1] [INFO] [1662612553.868611119] [mono3d_detection]: target type: depth, value: 0.714024\n[mono3d_indoor_detection-1] [INFO] [1662612553.868651409] [mono3d_detection]: target type: score, value: 0.973215\n[mono3d_indoor_detection-1] [INFO] [1662612553.868760238] [mono3d_detection]: target type: trash_can\n[mono3d_indoor_detection-1] [INFO] [1662612553.868799486] [mono3d_detection]: target type: width, value: 0.253052\n[mono3d_indoor_detection-1] [INFO] [1662612553.868842610] [mono3d_detection]: target type: height, value: 0.282349\n[mono3d_indoor_detection-1] [INFO] [1662612553.868885191] [mono3d_detection]: target type: length, value: 0.257935\n[mono3d_indoor_detection-1] [INFO] [1662612553.868929273] [mono3d_detection]: target type: rotation, value: -1.542728\n[mono3d_indoor_detection-1] [INFO] [1662612553.868968855] [mono3d_detection]: target type: x, value: 0.552460\n[mono3d_indoor_detection-1] [INFO] [1662612553.869010645] [mono3d_detection]: target type: y, value: -0.164073\n[mono3d_indoor_detection-1] [INFO] [1662612553.869050018] [mono3d_detection]: target type: z, value: 1.088358\n[mono3d_indoor_detection-1] [INFO] [1662612553.869088767] [mono3d_detection]: target type: depth, value: 1.088358\n[mono3d_indoor_detection-1] [INFO] [1662612553.869126765] [mono3d_detection]: target type: score, value: 0.875521\n"})}),"\n",(0,o.jsx)(t.p,{children:"The log displays the processing result of a frame. The result shows that the target type in the subscribed algorithm message is trash_can, and it also provides the 3D coordinates, distance, and rotation angle information of the trash_can."}),"\n",(0,o.jsx)(t.p,{children:"The rendered result of a local image (which can be replaced by modifying the feed_image field in mono3d_indoor_detection.launch.py) is saved as an image in the result directory of the program. The corresponding inference result and rendering information of the image are as follows:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(88305).A+"",width:"1920",height:"1080"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var o=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,a),hidden:n,children:t})}},93859:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(96540),r=n(34164),i=n(86641),a=n(56347),d=n(205),s=n(38874),l=n(24035),c=n(82993);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[a,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[l,u]=p({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=l??b;return m({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{g&&s(g)}),[g]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=n(74848);function v(e){let{className:t,block:n,selectedValue:o,selectValue:a,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=d[n].value;r!==o&&(l(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>s.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=b(e);return(0,_.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,_.jsx)(v,{...t,...e}),(0,_.jsx)(x,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,_.jsx)(j,{...e,children:u(e.children)},String(t))}},88305:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/indoor_render-fcacac609d9a2113695d4026e2196d60.jpeg"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);