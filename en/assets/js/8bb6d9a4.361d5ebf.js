"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9315],{95907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(74848),s=t(28453),r=t(93859),l=t(19365);const a={sidebar_position:6},i="5.4.6 Voice Control The Car",c={id:"Robot_development/apps/car_audio_control",title:"5.4.6 Voice Control The Car",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/04_apps/car_audio_control.md",sourceDirName:"05_Robot_development/04_apps",slug:"/Robot_development/apps/car_audio_control",permalink:"/rdk_doc/en/Robot_development/apps/car_audio_control",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/05_Robot_development/04_apps/car_audio_control.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5.4.5 Gesture Control The Car",permalink:"/rdk_doc/en/Robot_development/apps/car_gesture_control"},next:{title:"5.4.7 Robot Follows the Voice's DOA And Command",permalink:"/rdk_doc/en/Robot_development/apps/car_audio_tracking"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"Result Analysis",id:"result-analysis",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"546-voice-control-the-car",children:"5.4.6 Voice Control The Car"}),"\n","\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"The function of voice-controlled car movement allows users to control the robot's movement forward, backward, left, and right using chinese voice commands. The process is as shown in the following diagram:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(13512).A+"",width:"1120",height:"870"})}),"\n",(0,o.jsx)(n.p,{children:"The app uses a virtual car in the PC Gazebo simulation environment as an example, but the control commands can also be directly used to control a physical robot."}),"\n",(0,o.jsxs)(n.p,{children:["Code repository:  (",(0,o.jsx)(n.a,{href:"https://github.com/D-Robotics/audio_control.git",children:"https://github.com/D-Robotics/audio_control.git"}),")"]}),"\n",(0,o.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Platform"}),(0,o.jsx)(n.th,{children:"System"}),(0,o.jsx)(n.th,{children:"Function"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RDK X3"}),(0,o.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,o.jsx)(n.td,{children:"Start smart voice module, parse voice information, and control the car in Gazebo"})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Note: Only RDK X3 is supported, RDK X3 Module is not supported."})}),"\n",(0,o.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsx)(n.h3,{id:"rdk",children:"RDK"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The RDK is flashed with the  Ubuntu 20.04/22.04 image provided by D-Robotics."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"TogetheROS.Bot has been successfully installed on the RDK."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The smart voice algorithm package has been successfully installed on the RDK. Installation command:"}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-hobot-audio\n"})})}),(0,o.jsx)(l.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-humble-hobot-audio\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The compatible audio board has been successfully connected to the RDK (refer to the ",(0,o.jsx)(n.a,{href:"/rdk_doc/en/Robot_development/boxs/function/hobot_audio",children:"Smart Voice section"})," for more details)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The PC is on the same network (either wired or connected to the same Wi-Fi network) as the RDK. The PC-side environment package requirements include:"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsxs)(l.A,{value:"foxy",label:"Foxy",children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ubuntu 20.04 system and ",(0,o.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy Desktop Full"})]}),"\n",(0,o.jsx)(n.li,{children:"Gazebo and Turtlebot3 related packages. Installation commands:"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install ros-foxy-gazebo-*\nsudo apt install ros-foxy-turtlebot3\nsudo apt install ros-foxy-turtlebot3-simulations\n"})})]}),(0,o.jsxs)(l.A,{value:"humble",label:"Humble",children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ubuntu 22.04 system and ",(0,o.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble Desktop Full"})]}),"\n",(0,o.jsx)(n.li,{children:"Gazebo and Turtlebot3 related packages. Installation commands:"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install ros-humble-gazebo-*\nsudo apt install ros-humble-turtlebot3\nsudo apt install ros-humble-turtlebot3-simulations\n"})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"Start the simulation environment on the PC:"}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,o.jsx)(l.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"export TURTLEBOT3_MODEL=burger\nros2 launch turtlebot3_gazebo empty_world.launch.py\n"})}),"\n",(0,o.jsx)(n.p,{children:"After successful launch, the simulation environment shows the following effect of the car:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(75975).A+"",width:"960",height:"563"})}),"\n",(0,o.jsx)(n.p,{children:"RDK startup program:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Copy the audio configuration file"}),"\n"]}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/setup.bash\n"})})}),(0,o.jsx)(l.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cp -r /opt/tros/${TROS_DISTRO}/lib/hobot_audio/config/ .\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check the microphone device"}),"\n",(0,o.jsxs)(n.p,{children:["The microphone device number is set in the configuration file ",(0,o.jsx)(n.em,{children:"config/audio_config.json"})," with the ",(0,o.jsx)(n.code,{children:"micphone_name"}),' field. The default is "hw:0,0", which represents audio device Card0 Device0. The device number can be checked by the command ',(0,o.jsx)(n.code,{children:"ls /dev/snd"}),", for example: \"pcmC0D1c\". The letter 'c' represents the capture device, 'C0' represents Card0, and 'D1' represents Device1. Modify the parameter to \"hw:0,1\"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Start the program"}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/setup.bash\n"})})}),(0,o.jsx)(l.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ros2 launch audio_control audio_control.launch.py\n"})}),"\n",(0,o.jsx)(n.p,{children:"After the program is successfully started, you can control the car's movement using chinese commands such as \u201c\u5411\u524d\u8d70\u201d\u3001\u201c\u5411\u540e\u9000\u201d\u3001\u201c\u5411\u5de6\u8f6c\u201d\uff0c\u201c\u5411\u53f3\u8f6c\u201d and \u201c\u505c\u6b62\u8fd0\u52a8\u201d."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,o.jsx)(n.p,{children:"The following information is output in the RDK running terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'        This is audio control package.\n\n============================================\n        audio control usage\n\nWake up device is "Hello D-Robotics".\nAudio control command word definitions are:\n        "go forward": move front.\n        "go backward": move back.\n'})}),"\n",(0,o.jsx)(n.p,{children:'The above log snippet captures the output from the audio control package after its launch. The log content indicates that the wake-up word configured for this voice control module is "Hello D-Robotics", and the chinese command words for controlling the movement of the robot are: \u201c\u5411\u524d\u8d70\u201d\u3001\u201c\u5411\u540e\u9000\u201d\u3001\u201c\u5411\u5de6\u8f6c\u201d\uff0c\u201c\u5411\u53f3\u8f6c\u201d.'}),"\n",(0,o.jsxs)(n.p,{children:["On the PC, you can use the ",(0,o.jsx)(n.code,{children:"ros2 topic list"})," command in the terminal to query the topic information of the RDK:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ ros2 topic list\n/audio_smart\n/cmd_vel\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Among them, ",(0,o.jsx)(n.code,{children:"/audio_smart"})," is the topic published by X3 that contains the algorithm message for intelligent voice results, and ",(0,o.jsx)(n.code,{children:"/cmd_vel"})," is the topic published by RDK for motion control commands."]}),"\n",(0,o.jsxs)(n.p,{children:["On the PC side, you can use the ",(0,o.jsx)(n.code,{children:"ros2 topic echo /cmd_vel"})," command in the terminal to view the motion control commands published by RDK:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"linear:\n  x: 0.30000001192092896\n  y: 0.0\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: 0.0\n---\nlinear:\n  x: 0.0\n  y: -0.30000001192092896\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: -0.5\n---\nlinear:\n  x: 0.0\n  y: 0.30000001192092896\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: 0.5\n---\n"})}),"\n",(0,o.jsx)(n.p,{children:"The simulation car on the PC follows the instructions of voice control commands to move. The motion effect of the simulated car is as follows:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(79274).A+"",width:"1920",height:"932"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var o=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,l),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>_});var o=t(96540),s=t(34164),r=t(86641),l=t(56347),a=t(205),i=t(38874),c=t(24035),d=t(82993);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),s=a[t].value;s!==o&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function _(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},13512:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/audio_control-3b5149353b86861594dcedb597e6181c.jpg"},79274:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/move-bd01ef1c5ad9f9f9bca11d1a89441373.gif"},75975:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/gazebo-0e43917a538ed038fba57f6d0e669957.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);