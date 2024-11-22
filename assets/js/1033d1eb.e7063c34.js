"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[118],{84053:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var l=s(74848),t=s(28453),r=s(93859),o=s(19365);const a={sidebar_position:1},i="5.4.1 SLAM\u5efa\u56fe",u={id:"Robot_development/apps/slam",title:"5.4.1 SLAM\u5efa\u56fe",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/04_apps/slam.md",sourceDirName:"05_Robot_development/04_apps",slug:"/Robot_development/apps/slam",permalink:"/rdk_doc/Robot_development/apps/slam",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/04_apps/slam.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4eba\u8138106\u5173\u952e\u70b9\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/boxs/function/mono_face_landmarks_detection"},next:{title:"5.4.2 Navigation2",permalink:"/rdk_doc/Robot_development/apps/navigation2"}},c={},d=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"541-slam\u5efa\u56fe",children:"5.4.1 SLAM\u5efa\u56fe"}),"\n","\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.p,{children:"SLAM\u6307\u5373\u65f6\u5b9a\u4f4d\u4e0e\u5730\u56fe\u6784\u5efa\uff08Simultaneous Localization and Mapping\uff0c\u7b80\u79f0SLAM\uff09\u3002\n\u672c\u7ae0\u8282\u4f7f\u7528ROS2\u7684SLAM-Toolbox\u4f5c\u4e3a\u5efa\u56fe\u7b97\u6cd5\uff0c\u5728Gazebo\u4e2d\u63a7\u5236\u5c0f\u8f66\u884c\u9a76\u5efa\u7acb\u5730\u56fe\uff0c\u5e76\u901a\u8fc7Rviz2\u89c2\u5bdf\u5efa\u56fe\u6548\u679c\u3002\n\u5176\u4e2dSLAM-Toolbox\u8fd0\u884c\u5728RDK\u4e0a\uff0cGazebo\u548cRviz2\u8fd0\u884c\u5728\u4e0eRDK\u540c\u4e00\u7f51\u6bb5\u7684PC\u4e0a\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,l.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RDK X3, RDK X3 Module,"}),(0,l.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RDK X5"}),(0,l.jsx)(n.td,{children:"Ubuntu 22.04 (Humble)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RDK Ultra"}),(0,l.jsx)(n.td,{children:"Ubuntu 22.04"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"tros.b\u6210\u529f\u5b89\u88c5\u540e\uff0c\u5b89\u88c5SLAM-Toolbox"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-foxy-slam-toolbox\n"})})}),(0,l.jsx)(o.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-humble-slam-toolbox\n"})})})]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsx)(n.p,{children:"\u5982\u679c\u5b89\u88c5\u5931\u8d25\uff0c\u5e76\u4e14\u62a5\u9519\u5982\u4e0b\uff1a"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"  The following packages have unmet dependencies:\n   ros-foxy-slam-toolbox : Depends: ros-foxy-nav2-map-server but it is not going to be installed\n  E: Unable to correct problems, you have held broken packages.\n"})}),(0,l.jsx)(n.p,{children:"\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u540e\u518d\u5b89\u88c5\uff1a"}),(0,l.jsx)(n.p,{children:"apt update"}),(0,l.jsx)(n.p,{children:"sudo apt install libwebp6=0.6.1-2ubuntu0.20.04.3"})]}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"\u548cRDK\u5728\u540c\u4e00\u7f51\u6bb5\u7684PC\uff0cPC\u5df2\u5b89\u88c5Ubuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u3001ROS2\u684c\u9762\u7248\u548c\u4eff\u771f\u73af\u5883Gazebo\uff0c\u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177Rviz2\u3002"}),"\n"]}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsxs)(o.A,{value:"foxy",label:"Foxy",children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Ubuntu 20.04\u7cfb\u7edf\u548c",(0,l.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy\u684c\u9762\u7248"})]}),"\n",(0,l.jsx)(n.li,{children:"PC\u7684ROS2\u5b89\u88c5\u6210\u529f\u540e\u5b89\u88c5Gazebo\u548cTurtlebot3\u76f8\u5173\u7684\u529f\u80fd\u5305\uff0c\u5b89\u88c5\u65b9\u6cd5\u4e3a\uff1a"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-foxy-gazebo-*\nsudo apt install ros-foxy-turtlebot3\nsudo apt install ros-foxy-turtlebot3-bringup\nsudo apt install ros-foxy-turtlebot3-simulations\nsudo apt install ros-foxy-teleop-twist-keyboard\n"})})]}),(0,l.jsxs)(o.A,{value:"humble",label:"Humble",children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Ubuntu 22.04\u7cfb\u7edf\u548c",(0,l.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble\u684c\u9762\u7248"})]}),"\n",(0,l.jsx)(n.li,{children:"PC\u7684ROS2\u5b89\u88c5\u6210\u529f\u540e\u5b89\u88c5Gazebo\u548cTurtlebot3\u76f8\u5173\u7684\u529f\u80fd\u5305\uff0c\u5b89\u88c5\u65b9\u6cd5\u4e3a\uff1a"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-humble-gazebo-*\nsudo apt install ros-humble-turtlebot3\nsudo apt install ros-humble-turtlebot3-bringup\nsudo apt install ros-humble-turtlebot3-simulations\nsudo apt install ros-humble-teleop-twist-keyboard\n"})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u5c0f\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528RDK\u8fd0\u884cSLAM\u7b97\u6cd5\uff0c\u5e76\u4f7f\u7528PC\u89c2\u5bdf\u5efa\u56fe\u6548\u679c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"PC\u7aef\u542f\u52a8\u4eff\u771f\u73af\u5883\uff1a"}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,l.jsx)(o.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export TURTLEBOT3_MODEL=burger\nros2 launch turtlebot3_gazebo turtlebot3_world.launch.py\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["\u5982\u679c\u542f\u52a8\u5931\u8d25\uff0c\u5e76\u4e14\u62a5\u9519",(0,l.jsx)(n.code,{children:"[ERROR] [gzclient-2]: process has died"}),"\uff0c\u8bf7\u6267\u884c\u547d\u4ee4",(0,l.jsx)(n.code,{children:"source /usr/share/gazebo/setup.sh"}),"\u540e\u518d\u542f\u52a8\u3002"]})}),"\n",(0,l.jsxs)(n.p,{children:["\u4eff\u771f\u73af\u5883\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,l.jsx)(n.img,{src:s(98302).A+"",width:"1436",height:"896"})]}),"\n",(0,l.jsx)(n.p,{children:"PC\u7aef\u5f00\u542f\u53e6\u5916\u4e00\u4e2a\u63a7\u5236\u53f0\uff0c\u542f\u52a8Rviz2 \u7528\u4e8e\u89c2\u5bdf\u5efa\u56fe\u6548\u679c\uff1a"}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,l.jsx)(o.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ros2 launch turtlebot3_bringup rviz2.launch.py\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6253\u5f00Rviz2\u540e\uff0c\u9700\u8981\u6dfb\u52a0\u201cmap\u201d\u53ef\u89c6\u5316\u9009\u9879\uff0c\u7528\u4e8e\u5c55\u793a\u5efa\u7acb\u7684\u5730\u56fe\uff0c\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\uff1a\n",(0,l.jsx)(n.img,{src:s(6117).A+"",width:"976",height:"881"})]}),"\n",(0,l.jsx)(n.p,{children:"RDK\u677f\u7aef\u8fd0\u884cSLAM-Toolbox\uff1a"}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,l.jsx)(o.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"#\u542f\u52a8SLAM launch\u6587\u4ef6\nros2 launch slam_toolbox online_sync_launch.py\n"})}),"\n",(0,l.jsx)(n.p,{children:"PC\u7aef\u5f00\u542f\u53e6\u5916\u4e00\u4e2a\u63a7\u5236\u53f0\uff0cPC\u7aef\u542f\u52a8\u63a7\u5236\u5de5\u5177\uff0c\u901a\u8fc7\u952e\u76d8\u63a7\u5236\u5c0f\u8f66\u8fd0\u52a8\uff0c\u63a7\u5236\u65b9\u6cd5\u89c1\u63a7\u5236\u53f0\u6253\u5370\u7684log\uff0c\u5728\u6b64\u4e0d\u518d\u8d58\u8ff0\uff1a"}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,l.jsx)(o.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ros2 run teleop_twist_keyboard teleop_twist_keyboard\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u63a7\u5236\u5c0f\u8f66\u884c\u9a76\uff0c\u968f\u7740\u5c0f\u8f66\u96f7\u8fbe\u63a2\u6d4b\u5230\u66f4\u591a\u7684\u73af\u5883\u4fe1\u606f\uff0cSLAM\u7b97\u6cd5\u4e5f\u5efa\u7acb\u8d77\u73af\u5883\u5730\u56fe\uff0c\u53ef\u4ee5\u5728Rviz2\u4e0a\u89c2\u5bdf\u5230\u5efa\u56fe\u6548\u679c\u3002\n",(0,l.jsx)(n.img,{src:s(54748).A+"",width:"1632",height:"900"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,l.jsx)(n.p,{children:"\u5728RDK\u677f\u7aef\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"[INFO] [launch]: All log files can be found below /root/.ros/log/2022-06-10-06-40-34-204213-ubuntu-5390\n[INFO] [launch]: Default logging verbosity is set to INFO\n[INFO] [sync_slam_toolbox_node-1]: process started with pid [5392]\n[sync_slam_toolbox_node-1] [INFO] [1654843239.403931058] [slam_toolbox]: Node using stack size 40000000\n[sync_slam_toolbox_node-1] [INFO] [1654843240.092340814] [slam_toolbox]: Using solver plugin solver_plugins::CeresSolver\n[sync_slam_toolbox_node-1] [INFO] [1654843240.096554433] [slam_toolbox]: CeresSolver: Using SCHUR_JACOBI preconditioner.\n[sync_slam_toolbox_node-1] Info: clipped range threshold to be within minimum and maximum range!\n[sync_slam_toolbox_node-1] [WARN] [1654843589.431524393] [slam_toolbox]: maximum laser range setting (20.0 m) exceeds the capabilities of the used Lidar (3.5 m)\n[sync_slam_toolbox_node-1] Registering sensor: [Custom Described Lidar]\n"})})]})}function b(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var l=s(34164);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(t.tabItem,o),hidden:s,children:n})}},93859:(e,n,s)=>{s.d(n,{A:()=>_});var l=s(96540),t=s(34164),r=s(86641),o=s(56347),a=s(205),i=s(38874),u=s(24035),c=s(82993);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:l,default:t}}=e;return{value:n,label:s,attributes:l,default:t}}))}(s);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function b(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const t=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=h(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=s.find((e=>e.default))??s[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[u,d]=p({queryString:s,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,c.Dv)(s);return[t,(0,l.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),j=(()=>{const e=u??x;return b({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function f(e){let{className:n,block:s,selectedValue:l,selectValue:o,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,s=i.indexOf(n),t=a[s].value;t!==l&&(u(n),o(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,t.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":l===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function _(e){const n=(0,m.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},98302:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/gazebo-916bb92628dd6e28c62b5e124c58c05c.jpg"},54748:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/map-c046adcf8e755c070c56cb5442b1fe04.jpg"},6117:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/rvizsetting-5739327dc8ab96d59f5d82793670045c.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var l=s(96540);const t={},r=l.createContext(t);function o(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);