"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6178],{92722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(74848),o=n(28453),a=n(93859),s=n(19365);const l={sidebar_position:4},i="5.4.4 Robot Follows the Human Body",c={id:"Robot_development/apps/car_tracking",title:"5.4.4 Robot Follows the Human Body",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/04_apps/car_tracking.md",sourceDirName:"05_Robot_development/04_apps",slug:"/Robot_development/apps/car_tracking",permalink:"/rdk_doc/en/Robot_development/apps/car_tracking",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/05_Robot_development/04_apps/car_tracking.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"5.4.3 Pose Detection",permalink:"/rdk_doc/en/Robot_development/apps/fall_detection"},next:{title:"5.4.5 Gesture Control The Car",permalink:"/rdk_doc/en/Robot_development/apps/car_gesture_control"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Result Analysis",id:"result-analysis",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"544-robot-follows-the-human-body",children:"5.4.4 Robot Follows the Human Body"}),"\n","\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"The app is used to control the robot to follow the movement of the human body. The app consists of MIPI image acquisition, body detection and tracking, body tracking strategy, image coding and decoding, and a web display interface. The workflow is shown in the following diagram:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(13359).A+"",width:"826",height:"541"})}),"\n",(0,r.jsx)(t.p,{children:"The app is demonstrated using a virtual car in the PC-side Gazebo simulation environment, but the control commands can also be directly used to control a physical robot."}),"\n",(0,r.jsxs)(t.p,{children:["Code Repository:  (",(0,r.jsx)(t.a,{href:"https://github.com/D-Robotics/body_tracking",children:"https://github.com/D-Robotics/body_tracking"}),")"]}),"\n",(0,r.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Platform"}),(0,r.jsx)(t.th,{children:"System"}),(0,r.jsx)(t.th,{children:"Function"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,r.jsx)(t.td,{children:"Ubuntu 20.04"}),(0,r.jsx)(t.td,{children:"Start MIPI/USB camera to capture images, perform body keypoints detection and body tracking, and display the tracking effect in Gazebo"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,r.jsx)(t.h3,{id:"rdk",children:"RDK"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"RDK has been flashed with the  Ubuntu 20.04/22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"TogetheROS.Bot has been successfully installed on RDK."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"MIPI or USB camera has been installed on RDK."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The PC used for RDK should be in the same network segment (either wired or connected to the same wireless network, with the first three parts of the IP address being consistent). The PC should have the following environment installed:"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.A,{groupId:"tros-distro",children:[(0,r.jsxs)(s.A,{value:"foxy",label:"Foxy",children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Ubuntu 20.04 system and ",(0,r.jsx)(t.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy Desktop Full"})]}),"\n",(0,r.jsx)(t.li,{children:"Gazebo and Turtlebot3 related packages. Installation commands:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"sudo apt-get install ros-foxy-gazebo-*\nsudo apt install ros-foxy-turtlebot3\nsudo apt install ros-foxy-turtlebot3-simulations\n"})})]}),(0,r.jsxs)(s.A,{value:"humble",label:"Humble",children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Ubuntu 22.04 system and ",(0,r.jsx)(t.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble Desktop Full"})]}),"\n",(0,r.jsx)(t.li,{children:"Gazebo and Turtlebot3 related packages. Installation commands:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"sudo apt-get install ros-humble-gazebo-*\nsudo apt install ros-humble-turtlebot3\nsudo apt install ros-humble-turtlebot3-simulations\n"})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,r.jsxs)(t.p,{children:["After running the app, the car motion control package will select the human body closest to the front of the car (with the largest width of the body detection box) as the tracking target. When the human body is far from the car, the car starts to move forward to approach the body and keeps it in front of the car.After the app is launched, the sensor will publish images and corresponding algorithm results, which can be rendered and displayed on the PC browser. (Enter ",(0,r.jsx)(t.a,{href:"http://IP:8000",children:"http://IP:8000"})," in the browser, where IP is the IP address of the RDK)."]}),"\n",(0,r.jsx)(t.p,{children:"Launch the simulation environment on the PC side:"}),"\n",(0,r.jsxs)(a.A,{groupId:"tros-distro",children:[(0,r.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,r.jsx)(s.A,{value:"humble",label:"Humble",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"export TURTLEBOT3_MODEL=burger\nros2 launch turtlebot3_gazebo empty_world.launch.py\n"})}),"\n",(0,r.jsx)(t.p,{children:"After successful launch, the car effect in the simulation environment is as follows:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(54518).A+"",width:"960",height:"563"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Publish images using MIPI camera"})}),"\n",(0,r.jsxs)(a.A,{groupId:"tros-distro",children:[(0,r.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"source /opt/tros/setup.bash\n\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\nexport CAM_TYPE=mipi\n\nros2 launch body_tracking body_tracking_without_gesture.launch.py\n"})})}),(0,r.jsx)(s.A,{value:"humble",label:"Humble",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"source /opt/tros/humble/setup.bash\n\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\nexport CAM_TYPE=mipi\n\nros2 launch body_tracking body_tracking_without_gesture.launch.py\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Publish images using USB camera"})}),"\n",(0,r.jsxs)(a.A,{groupId:"tros-distro",children:[(0,r.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"source /opt/tros/setup.bash\n\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\nexport CAM_TYPE=usb\n\nros2 launch body_tracking body_tracking_without_gesture.launch.py\n"})})}),(0,r.jsx)(s.A,{value:"humble",label:"Humble",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"source /opt/tros/humble/setup.bash\n\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\nexport CAM_TYPE=usb\n\nros2 launch body_tracking body_tracking_without_gesture.launch.py\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,r.jsx)(t.p,{children:"The following information is outputted in the terminal when running on the RDK."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"[body_tracking-7] [WARN] [1653430533.523069034] [ParametersClass]: TrackCfg param are\n[body_tracking-7] activate_wakeup_gesture: 0\n[body_tracking-7] track_serial_lost_num_thr: 100\n[body_tracking-7] activate_robot_rotate_thr: 45\n[body_tracking-7] activate_robot_move_thr: 5\n[body_tracking-7] move_step: 0.3\n[body_tracking-7] rotate_step: 0.5\n[body_tracking-7] img_width: 960\n[body_tracking-7] img_height: 544\n[body_tracking-7] \n[body_tracking-7] [WARN] [1653430533.712812076] [TrackingManager]: update frame_ts 395787, 873\n[body_tracking-7] [WARN] [1653430533.713105576] [TrackingManager]: Tracking body start!, track_id: 1, frame_ts: 395787, tracking_sta(0:INITING, 1:TRACKING, 2:LOST): 1, gesture: 0\n[body_tracking-7] [WARN] [1653430535.018442618] [TrackingManager]: Do move! body_rect_width: 353, thr: 864, move_step_ratio: 1, body_rect_to_top: 20, img_height: 544, move_step: 0.3\n[body_tracking-7] [WARN] [1653430535.220268535] [TrackingManager]: Do rotate move, ts sec: 3397, nanosec: 387800000\n[body_tracking-7] [WARN] [1653430535.220408576] [RobotCmdVelNode]: RobotCtl, angular: 0 0 0, linear: 0.3 0 0, pub twist ts: 1653430535220394\n"})}),"\n",(0,r.jsx)(t.p,{children:"The above log captures a section of the output after the app is launched. Print the relevant configuration (TrackCfg param) first after startup. After detecting the human body, the car starts to enter a following state (tracking_sta value is 1) and moves forward at a speed of 0.3m/s (RobotCtl, angular: 0 0 0, linear: 0.3 0 0) to approach the human body."}),"\n",(0,r.jsxs)(t.p,{children:["Use the command ",(0,r.jsx)(t.code,{children:"ros2 topic list"}),"on PC,the topic is as below\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ ros2 topic list\n/camera_info\n/cmd_vel\n/hbmem_img04054242060426080500012020112713\n/hobot_mono2d_body_detection\n/image\n/parameter_events\n/rosout\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Among them, ",(0,r.jsx)(t.code,{children:"/image"})," is the image captured by the RDK from the MIPI sensor and encoded in JPEG format, ",(0,r.jsx)(t.code,{children:"/hobot_mono2d_body_detection"})," is the algorithm message published by the RDK which contains the human body detection results, and ",(0,r.jsx)(t.code,{children:"/cmd_vel"})," is the motion control command published by the RDK."]}),"\n",(0,r.jsxs)(t.p,{children:["On the PC, using the ",(0,r.jsx)(t.code,{children:"ros2 topic echo /cmd_vel"})," command on the terminal can view the motion control commands issued by RDK:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"linear:\n  x: 0.5\n  y: 0.0\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: -0.5\n---\nlinear:x: 0.5\ny: 0.0\nz: 0.0\nangular:\nx: 0.0\ny: 0.0\nz: -0.5\n---\n"})}),"\n",(0,r.jsx)(t.p,{children:"In the PC simulation environment, the car follows the movement of the human body. The simulated car movement effect is as follows:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(39171).A+"",width:"960",height:"540"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n,children:t})}},93859:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),o=n(34164),a=n(86641),s=n(56347),l=n(205),i=n(38874),c=n(24035),d=n(82993);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=b({queryString:n,groupId:o}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,d.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),f=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function _(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),o=l[n].value;o!==r&&(c(t),s(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,x.jsx)(_,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function v(e){const t=(0,g.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(t))}},54518:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/gazebo-0e43917a538ed038fba57f6d0e669957.jpeg"},13359:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/body_tracking_workflow-fe4e9fa5aaf8b6b2a8ed8b5932722792.jpg"},39171:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tracking-ca868d4a1af83475598e04413392799f.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);