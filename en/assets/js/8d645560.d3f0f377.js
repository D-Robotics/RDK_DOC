"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5033],{19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(34164);const i={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:r,children:n})}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(96540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}},53404:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/operation_2-98eceeb84046ad6be3812f1af7b90ab3.png"},53643:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/render_parking-8a20ed3f4d40f6701a4100374daabee8.png"},67632:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(74848),i=r(28453),a=r(93859),o=r(19365);const s={sidebar_position:8},l="Road Structuring",c={id:"Robot_development/boxs/function/parking_perception",title:"Road Structuring",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/parking_perception.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/parking_perception",permalink:"/rdk_doc/en/Robot_development/boxs/function/parking_perception",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/parking_perception.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Human Detection and Tracking",permalink:"/rdk_doc/en/Robot_development/boxs/function/mono2d_body_detection"},next:{title:"LiDAR Object Detection Algorithm",permalink:"/rdk_doc/en/Robot_development/boxs/function/hobot_centerpoint"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Result Analysis",id:"result-analysis",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"road-structuring",children:"Road Structuring"}),"\n","\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The parking_perception package is a road structuring algorithm based on hobot_dnn package, which uses BPU for model inference to obtain algorithm results.\nThis package supports subscribing to topics of type sensors/msg/image directly, and supports inferring from local images offline. The algorithm information will be published through topics and the results will be rendered and visualized on the web page. It also supports saving the rendered images in the result directory during program execution."}),"\n",(0,t.jsx)(n.p,{children:"The supported object detection categories are as follows:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Category"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cyclist"}),(0,t.jsx)(n.td,{children:"Cyclist"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"person"}),(0,t.jsx)(n.td,{children:"Pedestrian"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rear"}),(0,t.jsx)(n.td,{children:"Rear"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicle"}),(0,t.jsx)(n.td,{children:"Vehicle"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_lock"}),(0,t.jsx)(n.td,{children:"Parking lock"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The supported semantic segmentation categories are as follows:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Category"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"road"}),(0,t.jsx)(n.td,{children:"Road"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"background"}),(0,t.jsx)(n.td,{children:"Background"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lane_marking"}),(0,t.jsx)(n.td,{children:"Lane marking"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sign_line"}),(0,t.jsx)(n.td,{children:"Sign line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_lane"}),(0,t.jsx)(n.td,{children:"Parking lane"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_space"}),(0,t.jsx)(n.td,{children:"Parking space"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_rod"}),(0,t.jsx)(n.td,{children:"Parking rod"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parking_lock"}),(0,t.jsx)(n.td,{children:"Parking lock"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Code repository:  (",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/parking_perception.git",children:"https://github.com/D-Robotics/parking_perception.git"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"Application scenario: The outdoor parking area detection algorithm is based on semantic segmentation, which identifies parking areas in the images and can achieve automatic parking. It is mainly used in the field of autonomous driving."}),"\n",(0,t.jsxs)(n.p,{children:["Car parking space search case: ",(0,t.jsx)(n.a,{href:"../../apps/parking_search",children:"Car Parking Space Search"})]}),"\n",(0,t.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Platform"}),(0,t.jsx)(n.th,{children:"System"}),(0,t.jsx)(n.th,{children:"Function"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RDK X3, RDK X3 Module"}),(0,t.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,t.jsx)(n.td,{children:"Start MIPI/USB camera/local image offline, inference rendering results displayed/saved locally on the Web"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,t.jsx)(n.h3,{id:"rdk",children:"RDK"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The RDK has burned the  Ubuntu 20.04/22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The RDK has successfully installed TogetheROS.Bot."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"The package publishes algorithm messages that include semantic segmentation and object detection information, and users can subscribe to these messages for application development."}),"\n",(0,t.jsx)(n.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Publishing images from MIPI camera"})}),"\n",(0,t.jsxs)(a.A,{groupId:"tros-distro",children:[(0,t.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch parking_perception parking_perception.launch.py \n"})})}),(0,t.jsx)(o.A,{value:"humble",label:"Humble",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch parking_perception parking_perception.launch.py \n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Publishing images from USB camera"})}),"\n",(0,t.jsxs)(a.A,{groupId:"tros-distro",children:[(0,t.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch parking_perception parking_perception.launch.py \n"})})}),(0,t.jsx)(o.A,{value:"humble",label:"Humble",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch parking_perception parking_perception.launch.py \n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Using a single image offline"})}),"\n",(0,t.jsxs)(a.A,{groupId:"tros-distro",children:[(0,t.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# Configure the local playback image.\nexport CAM_TYPE=fb\n\n# Start the launch file\nros2 launch parking_perception parking_perception.launch.py \n"})})}),(0,t.jsx)(o.A,{value:"humble",label:"Humble",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/parking_perception/config/ .\n\n# Configure the local playback image.\nexport CAM_TYPE=fb\n\n# Start the launch file\nros2 launch parking_perception parking_perception.launch.py \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Using a MIPI camera to publish images"})}),"\n",(0,t.jsx)(n.p,{children:"After the package is initialized, the following information will be displayed in the terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[INFO] [launch]: All log files can be found below /root/.ros/log/2022-08-02-06-46-55-605266-ubuntu-3669\n[INFO] [launch]: Default logging verbosity is set to INFO\n[INFO] [mipi_cam-1]: process started with pid [3671]\n[INFO] [hobot_codec_republish-2]: process started with pid [3673]\n[INFO] [parking_perception-3]: process started with pid [3675]\n[INFO] [websocket-4]: process started with pid [3677]\n[parking_perception-3] [WARN] [1659394017.194211788] [parking_perception]: Parameter:\n[parking_perception-3] shared_men:1\n[parking_perception-3]  is_sync_mode_: 1\n[parking_perception-3]  model_file_name_: config/parking_perception_640x320.bin\n[parking_perception-3] feed_image:\n[parking_perception-3] [INFO] [1659394017.194695288] [dnn]: Node init.\n[parking_perception-3] [INFO] [1659394017.194784038] [parking_perception]: Set node para.\n[parking_perception-3] [INFO] [1659394017.194845413] [dnn]: Model init.\n[parking_perception-3] [BPU_PLAT]BPU Platform Version(1.3.1)!\n[parking_perception-3] [C][3675][08-02][06:46:57:202][configuration.cpp:49][EasyDNN]EasyDNN version: 0.4.11\n[parking_perception-3] [HBRT] set log level as 0. version = 3.14.5\n[parking_perception-3] [DNN] Runtime version = 1.9.7_(3.14.5 HBRT)\n[parking_perception-3] [INFO] [1659394017.247423580] [dnn]: The model input 0 width is 640 and height is 320\n[parking_perception-3] [INFO] [1659394017.247664997] [dnn]: Task init.\n[parking_perception-3] [INFO] [1659394017.255848788] [dnn]: Set task_num [2]\n[parking_perception-3] [INFO] [1659394017.255999663] [parking_perception]: The model input width is 640 and height is 320\n[parking_perception-3] [INFO] [1659394017.263431163] [parking_perception]: msg_pub_topic_name: ai_msg_parking_perception\n[parking_perception-3] [INFO] [1659394017.263554788] [parking_perception]: Detect images that use subscriptions\n[parking_perception-3] [WARN] [1659394017.263597997] [parking_perception]: Create hbmem_subscription with topic_name: /hbmem_img\n[parking_perception-3] [WARN] [1659394017.267204163] [parking_perception]: start success!!!\n[parking_perception-3] [WARN] [1662036456.219133588] [parking_perception]: input fps: 29.73, out fps: 29.79\n[parking_perception-3] [WARN] [1662036457.228303881] [parking_perception]: input fps: 29.73, out fps: 29.73\n[parking_perception-3] [WARN] [1662036458.237841548] [parking_perception]: input fps: 29.73, out fps: 29.73\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Using single image offline"})}),"\n",(0,t.jsxs)(n.p,{children:["The result of inference reading a local image offline in the example will be rendered on the image. On the PC-side browser, you can view the image and algorithm rendering effect by entering ",(0,t.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," (IP is the IP address of the RDK), and open the settings in the upper right corner of the interface."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(77335).A+"",width:"1920",height:"969"})}),"\n",(0,t.jsx)(n.p,{children:'Select the "Full Image Segmentation" option to display the rendering effect.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(53404).A+"",width:"1920",height:"969"})}),"\n",(0,t.jsx)(n.p,{children:"From the visualization result, we can see that the parking area and driving area in the outdoor scene are effectively segmented, distinguishing the parking lane from the driving lane, and the object detection task also locates the vehicles in the distance."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(53643).A+"",width:"1920",height:"969"})}),"\n",(0,t.jsx)(n.p,{children:'When "dump_render_img" is set to "1", the rendering effect will be saved in the "result" directory at the current path.'})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},77335:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/operation_1-2c36d27ce5d6d755876e12ec4e7d6f2c.png"},93859:(e,n,r)=>{r.d(n,{A:()=>v});var t=r(96540),i=r(34164),a=r(86641),o=r(56347),s=r(205),l=r(38874),c=r(24035),p=r(82993);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const i=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=u(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=g({queryString:r,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,p.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),b=(()=>{const e=c??m;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),p=e=>{const n=e.currentTarget,r=l.indexOf(n),i=s[r].value;i!==t&&(c(n),o(i))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:p,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function _(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(_,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(n))}}}]);