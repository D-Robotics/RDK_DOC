"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3618],{13359:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/body_tracking_workflow-fe4e9fa5aaf8b6b2a8ed8b5932722792.jpg"},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var l=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},l=r.createContext(s);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:n},e.children)}},39171:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/tracking-ca868d4a1af83475598e04413392799f.gif"},44070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),l=t(93859),a=t(19365);const o={sidebar_position:4},i="5.4.4 \u5c0f\u8f66\u4eba\u4f53\u8ddf\u968f",c={id:"Robot_development/apps/car_tracking",title:"5.4.4 \u5c0f\u8f66\u4eba\u4f53\u8ddf\u968f",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/04_apps/car_tracking.md",sourceDirName:"05_Robot_development/04_apps",slug:"/Robot_development/apps/car_tracking",permalink:"/rdk_doc/Robot_development/apps/car_tracking",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/04_apps/car_tracking.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"5.4.3 \u59ff\u6001\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/apps/fall_detection"},next:{title:"5.4.5 \u5c0f\u8f66\u624b\u52bf\u63a7\u5236",permalink:"/rdk_doc/Robot_development/apps/car_gesture_control"}},d={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"544-\u5c0f\u8f66\u4eba\u4f53\u8ddf\u968f",children:"5.4.4 \u5c0f\u8f66\u4eba\u4f53\u8ddf\u968f"}),"\n","\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u5c0f\u8f66\u4eba\u4f53\u8ddf\u968fApp\u529f\u80fd\u4e3a\u63a7\u5236\u673a\u5668\u4eba\u8ddf\u968f\u4eba\u4f53\u79fb\u52a8\uff0cApp\u7531MIPI\u56fe\u50cf\u91c7\u96c6\u3001\u4eba\u4f53\u68c0\u6d4b\u548c\u8ddf\u8e2a\u3001\u4eba\u4f53\u8ddf\u968f\u7b56\u7565\u3001\u56fe\u50cf\u7f16\u89e3\u7801\u3001Web\u5c55\u793a\u7aef\u7ec4\u6210\uff0c\u6d41\u7a0b\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(13359).A+"",width:"826",height:"541"})}),"\n",(0,r.jsx)(n.p,{children:"App\u4ee5PC\u7aefGazebo\u4eff\u771f\u73af\u5883\u4e0b\u7684\u865a\u62df\u5c0f\u8f66\u4e3e\u4f8b\uff0c\u53d1\u5e03\u7684\u63a7\u5236\u6307\u4ee4\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e\u63a7\u5236\u5b9e\u7269\u5c0f\u8f66\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a (",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/body_tracking",children:"https://github.com/D-Robotics/body_tracking"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,r.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X3, RDK X3 Module"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X5"}),(0,r.jsx)(n.td,{children:"Ubuntu 22.04 (Humble)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK Ultra"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u5b89\u88c5MIPI\u6216\u8005USB\u6444\u50cf\u5934\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u548cRDK\u5728\u540c\u4e00\u7f51\u6bb5\uff08\u6709\u7ebf\u6216\u8005\u8fde\u63a5\u540c\u4e00\u65e0\u7ebf\u7f51\uff0cIP\u5730\u5740\u524d\u4e09\u6bb5\u9700\u4fdd\u6301\u4e00\u81f4\uff09\u7684PC\uff0cPC\u7aef\u9700\u8981\u5b89\u88c5\u7684\u73af\u5883\u5305\u62ec\uff1a"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"tros-distro",children:[(0,r.jsxs)(a.A,{value:"foxy",label:"Foxy",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ubuntu 20.04\u7cfb\u7edf\u548c",(0,r.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy\u684c\u9762\u7248"})]}),"\n",(0,r.jsx)(n.li,{children:"Gazebo\u548cTurtlebot3\u76f8\u5173\u7684\u529f\u80fd\u5305\uff0c\u5b89\u88c5\u65b9\u6cd5\uff1a"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install ros-foxy-gazebo-*\nsudo apt install ros-foxy-turtlebot3\nsudo apt install ros-foxy-turtlebot3-simulations\n"})})]}),(0,r.jsxs)(a.A,{value:"humble",label:"Humble",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ubuntu 22.04\u7cfb\u7edf\u548c",(0,r.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble\u684c\u9762\u7248"})]}),"\n",(0,r.jsx)(n.li,{children:"Gazebo\u548cTurtlebot3\u76f8\u5173\u7684\u529f\u80fd\u5305\uff0c\u5b89\u88c5\u65b9\u6cd5\uff1a"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install ros-humble-gazebo-*\nsudo apt install ros-humble-turtlebot3\nsudo apt install ros-humble-turtlebot3-simulations\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c\u5c0f\u8f66\u4eba\u4f53\u8ddf\u968fApp\u540e\uff0c\u5c0f\u8f66\u8fd0\u52a8\u63a7\u5236package\u9009\u62e9\u8ddd\u79bb\u5c0f\u8f66\u524d\u65b9\u6700\u8fd1\u7684\u4eba\u4f53\uff08\u4eba\u4f53\u68c0\u6d4b\u6846\u5bbd\u5ea6\u6700\u5927\uff09\u4f5c\u4e3a\u8ddf\u968f\u5bf9\u8c61\u3002\u5f53\u4eba\u4f53\u8ddd\u79bb\u5c0f\u8f66\u8f83\u8fdc\u65f6\uff0c\u5c0f\u8f66\u5f00\u59cb\u524d\u8fdb\u8fd0\u52a8\u9760\u8fd1\u4eba\u4f53\uff0c\u5e76\u4fdd\u6301\u4eba\u4f53\u5728\u5c0f\u8f66\u6b63\u524d\u65b9\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["APP\u542f\u52a8\u540e\u53ef\u4ee5\u5728PC\u7aef\u6d4f\u89c8\u5668\u4e0a\u6e32\u67d3\u663e\u793asensor\u53d1\u5e03\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684\u7b97\u6cd5\u7ed3\u679c\uff08\u6d4f\u89c8\u5668\u8f93\u5165 ",(0,r.jsx)(n.code,{children:"http://IP:8000"}),"\uff0cIP\u4e3aRDK\u7684IP\u5730\u5740\uff09\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"PC\u7aef\u542f\u52a8\u4eff\u771f\u73af\u5883\uff1a"}),"\n",(0,r.jsxs)(l.A,{groupId:"tros-distro",children:[(0,r.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,r.jsx)(a.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"export TURTLEBOT3_MODEL=burger\nros2 launch turtlebot3_gazebo empty_world.launch.py\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u6210\u529f\u540e\uff0c\u4eff\u771f\u73af\u5883\u4e2d\u5c0f\u8f66\u6548\u679c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(54518).A+"",width:"960",height:"563"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4f7f\u7528mipi\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,r.jsxs)(l.A,{groupId:"tros-distro",children:[(0,r.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n\n# \u4eceTogetheROS\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch body_tracking body_tracking_without_gesture.launch.py\n"})})}),(0,r.jsx)(a.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4eceTogetheROS\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch body_tracking body_tracking_without_gesture.launch.py\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,r.jsxs)(l.A,{groupId:"tros-distro",children:[(0,r.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n\n# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch body_tracking body_tracking_without_gesture.launch.py\n"})})}),(0,r.jsx)(a.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch body_tracking body_tracking_without_gesture.launch.py\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u5728RDK\u677f\u7aef\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[body_tracking-7] [WARN] [1653430533.523069034] [ParametersClass]: TrackCfg param are\n[body_tracking-7] activate_wakeup_gesture: 0\n[body_tracking-7] track_serial_lost_num_thr: 100\n[body_tracking-7] activate_robot_rotate_thr: 45\n[body_tracking-7] activate_robot_move_thr: 5\n[body_tracking-7] move_step: 0.3\n[body_tracking-7] rotate_step: 0.5\n[body_tracking-7] img_width: 960\n[body_tracking-7] img_height: 544\n[body_tracking-7] \n[body_tracking-7] [WARN] [1653430533.712812076] [TrackingManager]: update frame_ts 395787, 873\n[body_tracking-7] [WARN] [1653430533.713105576] [TrackingManager]: Tracking body start!, track_id: 1, frame_ts: 395787, tracking_sta(0:INITING, 1:TRACKING, 2:LOST): 1, gesture: 0\n[body_tracking-7] [WARN] [1653430535.018442618] [TrackingManager]: Do move! body_rect_width: 353, thr: 864, move_step_ratio: 1, body_rect_to_top: 20, img_height: 544, move_step: 0.3\n[body_tracking-7] [WARN] [1653430535.220268535] [TrackingManager]: Do rotate move, ts sec: 3397, nanosec: 387800000\n[body_tracking-7] [WARN] [1653430535.220408576] [RobotCmdVelNode]: RobotCtl, angular: 0 0 0, linear: 0.3 0 0, pub twist ts: 1653430535220394\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0alog\u622a\u53d6\u4e86\u4e00\u6bb5App\u542f\u52a8\u540e\u7684\u8f93\u51fa\u3002\u542f\u52a8\u540e\u5148\u6253\u5370\u76f8\u5173\u914d\u7f6e\uff08TrackCfg param\uff09\u3002\u68c0\u6d4b\u5230\u4eba\u4f53\u540e\u5c0f\u8f66\u5c31\u5f00\u59cb\u8fdb\u5165\u8ddf\u968f\u72b6\u6001\uff08tracking_sta\u503c\u4e3a1\uff09\uff0c\u5e76\u4ee50.3m/s\u7684\u901f\u5ea6\u524d\u8fdb\u8fd0\u52a8\uff08RobotCtl, angular: 0 0 0, linear: 0.3 0 0\uff09\u9760\u8fd1\u4eba\u4f53\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["PC\u7aef\u5728\u7ec8\u7aef\u4f7f\u7528",(0,r.jsx)(n.code,{children:"ros2 topic list"}),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u8be2\u5230RDK\u7684topic\u4fe1\u606f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ ros2 topic list\n/camera_info\n/cmd_vel\n/hbmem_img04054242060426080500012020112713\n/hobot_mono2d_body_detection\n/image\n/parameter_events\n/rosout\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d",(0,r.jsx)(n.code,{children:"/image"}),"\u662fRDK\u53d1\u5e03\u7684\u4eceMIPI sensor\u91c7\u96c6\u56fe\u50cf\u540e\u7ecf\u8fc7JPEG\u683c\u5f0f\u7f16\u7801\u7684\u56fe\u7247\uff0c",(0,r.jsx)(n.code,{children:"/hobot_mono2d_body_detection"}),"\u662fRDK\u53d1\u5e03\u7684\u5305\u542b\u4eba\u4f53\u68c0\u6d4b\u7ed3\u679c\u7684\u7b97\u6cd5msg\uff0c",(0,r.jsx)(n.code,{children:"/cmd_vel"}),"\u662fRDK\u53d1\u5e03\u7684\u8fd0\u52a8\u63a7\u5236\u6307\u4ee4\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["PC\u7aef\u5728\u7ec8\u7aef\u4f7f\u7528",(0,r.jsx)(n.code,{children:"ros2 topic echo /cmd_vel"}),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5230RDK\u53d1\u5e03\u7684\u8fd0\u52a8\u63a7\u5236\u6307\u4ee4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"linear:\n  x: 0.5\n  y: 0.0\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: -0.5\n---\nlinear:\n  x: 0.5\n  y: 0.0\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: -0.5\n---\n"})}),"\n",(0,r.jsx)(n.p,{children:"PC\u7aef\u4eff\u771f\u73af\u5883\u4e2d\u5c0f\u8f66\u8ddf\u968f\u4eba\u4f53\u8fd0\u52a8\uff0c\u4eff\u771f\u5c0f\u8f66\u8fd0\u52a8\u6548\u679c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(39171).A+"",width:"960",height:"540"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},54518:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/gazebo-0e43917a538ed038fba57f6d0e669957.jpeg"},93859:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),s=t(34164),l=t(86641),a=t(56347),o=t(205),i=t(38874),c=t(24035),d=t(82993);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=b({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),x=(()=>{const e=c??g;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),s=o[t].value;s!==r&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,_.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,_.jsx)(j,{...n,...e}),(0,_.jsx)(f,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,_.jsx)(v,{...e,children:u(e.children)},String(n))}}}]);