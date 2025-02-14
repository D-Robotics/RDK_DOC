"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6667],{12102:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/audio_control-3b5149353b86861594dcedb597e6181c.jpg"},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:r,children:n})}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(96540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}},30265:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=r(74848),t=r(28453),a=r(93859),l=r(19365);const o={sidebar_position:7},i="5.4.7 \u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u5c0f\u8f66\u8fd0\u52a8",c={id:"Robot_development/apps/car_audio_tracking",title:"5.4.7 \u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u5c0f\u8f66\u8fd0\u52a8",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/04_apps/car_audio_tracking.md",sourceDirName:"05_Robot_development/04_apps",slug:"/Robot_development/apps/car_audio_tracking",permalink:"/rdk_doc/Robot_development/apps/car_audio_tracking",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/04_apps/car_audio_tracking.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"5.4.6 \u8bed\u97f3\u63a7\u5236\u5c0f\u8f66\u8fd0\u52a8",permalink:"/rdk_doc/Robot_development/apps/car_audio_control"},next:{title:"5.4.8 \u5c0f\u8f66\u8f66\u4f4d\u5bfb\u627e",permalink:"/rdk_doc/Robot_development/apps/parking_search"}},d={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"547-\u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u5c0f\u8f66\u8fd0\u52a8",children:"5.4.7 \u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u5c0f\u8f66\u8fd0\u52a8"}),"\n","\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"\u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u5c0f\u8f66\u8fd0\u52a8\u529f\u80fd\u6839\u636e\u58f0\u6e90\u5b9a\u4f4d\u7684DOA\u89d2\u5ea6\u4fe1\u606f\u63a7\u5236\u673a\u5668\u4eba\u8f6c\u5411\u58f0\u6e90\u65b9\u5411\uff0c\u5e76\u4e14\u63a7\u5236\u673a\u5668\u4eba\u5411\u524d\u79fb\u52a8\u3002\u6b64\u529f\u80fd\u9700\u8981\u642d\u914dD-Robotics RDK\u673a\u5668\u4eba\u64cd\u4f5c\u7cfb\u7edf\u7684\u667a\u80fd\u8bed\u97f3\u6a21\u5757\u4e00\u8d77\u4f7f\u7528\u3002\u5f53\u7528\u6237\u8bf4\u51fa\u667a\u80fd\u8bed\u97f3\u8bc6\u522b\u6a21\u5757\u914d\u7f6e\u7684\u5524\u9192\u8bcd\u5524\u9192\u8bbe\u5907\u4e4b\u540e\uff0c\u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u5c0f\u8f66\u529f\u80fd\u4f1a\u6fc0\u6d3b\uff0c\u540e\u7eed\u7528\u6237\u8bf4\u51fa\u5524\u9192\u8bcd\u6216\u8005\u914d\u7f6e\u7684\u547d\u4ee4\u8bcd\uff0c\u667a\u80fd\u8bed\u97f3\u8bc6\u522b\u6a21\u5757\u4f1a\u8f93\u51fa\u58f0\u6e90\u7684DOA\u89d2\u5ea6\u4fe1\u606f\uff0c\u6b64\u6a21\u5757\u6536\u5230DOA\u89d2\u5ea6\u4fe1\u606f\u4e4b\u540e\u4f1a\u63a7\u5236\u6d88\u606f\u8f6c\u5411\u58f0\u6e90\u65b9\u5411\uff0c\u5e76\u4e14\u524d\u8fdb\u4e00\u5b9a\u8ddd\u79bb\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6d41\u7a0b\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(12102).A+"",width:"1120",height:"870"})}),"\n",(0,s.jsx)(n.p,{children:"App\u4ee5PC\u7aefGazebo\u4eff\u771f\u73af\u5883\u4e0b\u7684\u865a\u62df\u5c0f\u8f66\u4e3e\u4f8b\uff0c\u53d1\u5e03\u7684\u63a7\u5236\u6307\u4ee4\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e\u63a7\u5236\u5b9e\u7269\u5c0f\u8f66\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u667a\u80fd\u8bed\u97f3\u529f\u80fd\u8f93\u51fa\u7684\u58f0\u6e90\u5b9a\u4f4dDOA\u89d2\u5ea6\u4fe1\u606f\uff0c\u5355\u4f4d\u4e3a\u89d2\u5ea6\uff0c\u652f\u6301\u7ebf\u5f62\u548c\u73af\u5f62\u4e24\u79cd\u7c7b\u578b\u9ea6\u514b\u98ce\u9635\u5217\uff0c\u5176\u4e2d\u7ebf\u5f62\u9ea6\u514b\u98ce\u9635\u5217\u89d2\u5ea6\u8303\u56f4\u4e3a0\u5ea6\u5230180\u5ea6\uff0c\u73af\u5f62\u9ea6\u514b\u98ce\u9635\u5217\u89d2\u5ea6\u8303\u56f4\u4e3a0\u5ea6\u5230360\u5ea6\u3002\u9ea6\u514b\u98ce\u89d2\u5ea6\u7684\u76f8\u5bf9\u4f4d\u7f6e\u5173\u7cfb\u4e0e\u9ea6\u514b\u98ce\u7684\u5b89\u88c5\u4f4d\u7f6e\u5f3a\u76f8\u5173\uff0c\u5b9e\u9645\u89d2\u5ea6\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u7ebf\u5f62\u9ea6\u514b\u98ce\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(34417).A+"",width:"1200",height:"320"})}),"\n",(0,s.jsx)(n.p,{children:"\u73af\u5f62\u9ea6\u514b\u98ce\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(47075).A+"",width:"1200",height:"900"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a (",(0,s.jsx)(n.a,{href:"https://github.com/D-Robotics/audio_tracking.git",children:"https://github.com/D-Robotics/audio_tracking.git"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,s.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,s.jsx)(n.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RDK X3, RDK X5"}),(0,s.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,s.jsx)(n.td,{children:"\u542f\u52a8\u667a\u80fd\u8bed\u97f3\u6a21\u5757\u89e3\u6790\u8bed\u97f3\u4fe1\u606f\u5e76\u8fdb\u884c\u8bed\u97f3\u8ffd\u8e2a\u901a\u8fc7Gazebo\u5c55\u793a\u8ffd\u8e2a\u6548\u679c"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u4ec5\u652f\u6301RDK X3\uff0cRDK X3 Module\u6682\u4e0d\u652f\u6301\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5\u667a\u80fd\u8bed\u97f3\u7b97\u6cd5\u5305\uff0c\u5b89\u88c5\u547d\u4ee4\uff1a"}),"\n",(0,s.jsxs)(a.A,{groupId:"tros-distro",children:[(0,s.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-hobot-audio\n"})})}),(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-humble-hobot-audio\n"})})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["RDK\u5df2\u6210\u529f\u63a5\u597d\u9002\u914d\u7684\u97f3\u9891\u677f\uff08\u53ef\u53c2\u8003",(0,s.jsx)(n.a,{href:"/rdk_doc/Robot_development/boxs/function/hobot_audio",children:"\u667a\u80fd\u8bed\u97f3\u7ae0\u8282"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u548cRDK\u5728\u540c\u4e00\u7f51\u6bb5\uff08\u6709\u7ebf\u6216\u8005\u8fde\u63a5\u540c\u4e00\u65e0\u7ebf\u7f51\uff0cIP\u5730\u5740\u524d\u4e09\u6bb5\u9700\u4fdd\u6301\u4e00\u81f4\uff09\u7684PC\uff0cPC\u7aef\u9700\u8981\u5b89\u88c5\u7684\u73af\u5883\u5305\u62ec\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.A,{groupId:"tros-distro",children:[(0,s.jsxs)(l.A,{value:"foxy",label:"Foxy",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ubuntu 20.04\u7cfb\u7edf\u548c",(0,s.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy\u684c\u9762\u7248"})]}),"\n",(0,s.jsx)(n.li,{children:"Gazebo\u548cTurtlebot3\u76f8\u5173\u7684\u529f\u80fd\u5305\uff0c\u5b89\u88c5\u65b9\u6cd5\uff1a"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install ros-foxy-gazebo-*\nsudo apt install ros-foxy-turtlebot3\nsudo apt install ros-foxy-turtlebot3-simulations\n"})})]}),(0,s.jsxs)(l.A,{value:"humble",label:"Humble",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ubuntu 22.04\u7cfb\u7edf\u548c",(0,s.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble\u684c\u9762\u7248"})]}),"\n",(0,s.jsx)(n.li,{children:"Gazebo\u548cTurtlebot3\u76f8\u5173\u7684\u529f\u80fd\u5305\uff0c\u5b89\u88c5\u65b9\u6cd5\uff1a"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install ros-humble-gazebo-*\nsudo apt install ros-humble-turtlebot3\nsudo apt install ros-humble-turtlebot3-simulations\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c\u8bed\u97f3\u8ffd\u8e2a\u529f\u80fd\u540e\uff0c\u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u6a21\u5757\u4f1a\u63a5\u6536\u4ece\u667a\u80fd\u8bed\u97f3\u529f\u80fd\u6a21\u5757\u53d1\u5e03\u7684\u667a\u80fd\u8bed\u97f3\u6d88\u606f\u7ed3\u679c\uff0c\u5e76\u4e14\u89e3\u6790\u6d88\u606f\uff0c\u6839\u636e\u6d88\u606f\u4e2d\u7684\u5524\u9192\u4e8b\u4ef6\u4ee5\u53caDOA\u89d2\u5ea6\u4fe1\u606f\u53d1\u5e03\u63a7\u5236\u5c0f\u8f66\u8f6c\u5411\u67d0\u4e2a\u65b9\u5411\u7279\u5b9a\u89d2\u5ea6\u7684\u6307\u4ee4\uff0c\u5f53\u5c0f\u8f66\u8f6c\u5411\u7279\u5b9a\u89d2\u5ea6\u4e4b\u540e\uff0c\u7ee7\u7eed\u63a7\u5236\u5c0f\u8f66\u524d\u8fdb\u4e00\u5b9a\u8ddd\u79bb\uff08\u6b64\u6a21\u5757\u9ed8\u8ba4\u63a7\u5236\u5c0f\u8f66\u524d\u8fdb0.2\u7c73\u7684\u8ddd\u79bb\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"PC\u7aef\u542f\u52a8\u4eff\u771f\u73af\u5883\uff1a"}),"\n",(0,s.jsxs)(a.A,{groupId:"tros-distro",children:[(0,s.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export TURTLEBOT3_MODEL=burger\nros2 launch turtlebot3_gazebo empty_world.launch.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u542f\u52a8\u6210\u529f\u540e\uff0c\u4eff\u771f\u73af\u5883\u4e2d\u5c0f\u8f66\u6548\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(75975).A+"",width:"960",height:"563"})}),"\n",(0,s.jsx)(n.p,{children:"RDK\u5e73\u53f0\u542f\u52a8\u7a0b\u5e8f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u62f7\u8d1d\u97f3\u9891\u914d\u7f6e\u6587\u4ef6\u548c\u52a0\u8f7d\u97f3\u9891\u9a71\u52a8"}),"\n"]}),"\n",(0,s.jsxs)(a.A,{groupId:"tros-distro",children:[(0,s.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_audio/config/ .\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u786e\u8ba4\u9ea6\u514b\u98ce\u8bbe\u5907"}),"\n",(0,s.jsxs)(n.p,{children:["\u9ea6\u514b\u98ce\u8bbe\u5907\u53f7\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(n.em,{children:"config/audio_config.json"})," \u4e2d ",(0,s.jsx)(n.code,{children:"micphone_name"}),' \u5b57\u6bb5\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a"hw:0,0"\uff0c\u8868\u793a\u97f3\u9891\u8bbe\u5907Card0 Device0\uff0c\u8bbe\u5907\u53f7\u53ef\u901a\u8fc7\u547d\u4ee4 ',(0,s.jsx)(n.code,{children:"ls /dev/snd"}),'  \u67e5\u770b\u5982\uff1a"pcmC0D1c"\uff1b\u6700\u540e\u5b57\u6bcdc\u8868\u793acapture\u8bbe\u5907\uff0cC0\u8868\u793aCard0\uff0cD1\u8868\u793aDevice1\uff0c\u4fee\u6539\u53c2\u6570\u4e3a"hw:0,1"\u3002']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u542f\u52a8\u7a0b\u5e8f"}),"\n",(0,s.jsxs)(a.A,{groupId:"tros-distro",children:[(0,s.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u542f\u52a8launch\u6587\u4ef6\uff0c\u5e76\u6307\u5b9a\u5c0f\u8f66\u6b63\u524d\u65b9\u5bf9\u5e94\u7684\u8bed\u97f3DOA\u89d2\u5ea6\uff0c\u4ee590\u4e3a\u4f8b\nros2 launch audio_tracking audio_tracking.launch.py car_front_audio_angle:=90\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,s.jsx)(n.p,{children:"\u5728RDK\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'\n        This is audio tracking package.\n\n============================================\n        audio tracking usage\n\nWake up device is "D-Robotics \u4f60\u597d".\nAudio control commnad word definitions are:\n        "\u5411\u524d\u8d70"\n        "\u5411\u540e\u9000"\n        "\u5411\u53f3\u8f6c"\n        "\u5411\u5de6\u8f6c" \nWhen you say the wake word, the car turns toward you \nLet\'s start the experience\n============================================\n\n[INFO] [1663149803.248119421] [audio_tracking]: AudioTrackingEngine construct\n[INFO] [1663149803.313949108] [rclcpp]: ParametersClass node construct\n[WARN] [1663149803.337782049] [AudioTrackingNode]: Parameter:\n ai_msg_sub_topic_name: /audio_smart\n twist_pub_topic_name: /cmd_vel\n[WARN] [1663149804.316577383] [audio_control_parameter_node]: Robot Move param are\nmove_step: 0.3\nrotate_step: 0.348\n\n[INFO] [1663149814.967019845] [audio_tracking]: process audio frame type:2\n[INFO] [1663149814.967377380] [audio_tracking]: process audio event type:1\n[INFO] [1663149815.012831677] [audio_tracking]: process audio frame type:5\n[WARN] [1663149815.013112088] [audio_tracking]: process audio doa theta:80.000000\n[INFO] [1663149815.168426039] [audio_tracking]: process audio doa move to front distance:0.200000, speed:0.300000, duration:0.666667, ticks:6\n[WARN] [1663149815.769833806] [audio_tracking]: cancel move\n[INFO] [1663149822.128098383] [audio_tracking]: process audio frame type:2\n[INFO] [1663149822.128389794] [audio_tracking]: process audio event type:1\n[INFO] [1663149822.145186562] [audio_tracking]: process audio frame type:5\n[WARN] [1663149822.145491473] [audio_tracking]: process audio doa theta:55.000000\n[INFO] [1663149822.174037772] [audio_tracking]: process audio doa move theta:35.000000, angle:0.610865, direction:1, ticks:6\n[WARN] [1663149822.775398926] [audio_tracking]: cancel move\n[INFO] [1663149822.775698796] [audio_tracking]: process audio doa move to front distance:0.200000, speed:0.300000, duration:0.666667, ticks:6\n[WARN] [1663149823.377099758] [audio_tracking]: cancel move\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0alog\u622a\u53d6\u4e86\u4e00\u6bb5\u97f3\u9891\u63a7\u5236pkg\u542f\u52a8\u540e\u7684\u8f93\u51fa\u3002log\u5185\u5bb9\u663e\u793a\uff0c\u667a\u80fd\u8bed\u97f3\u8bc6\u522b\u6a21\u5757\u914d\u7f6e\u7684\u8bbe\u5907\u5524\u9192\u8bcd\u662f\u201cD-Robotics \u4f60\u597d\u201d\uff0c\u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u6a21\u5757\u63a5\u6536\u5230\u5524\u9192\u4e8b\u4ef6\u4e4b\u540e\u63a5\u6536\u5230DOA\u89d2\u5ea6\u4fe1\u606f\uff0c\u5982log\u4e0a\u9762\u663e\u793aDOA\u662f80\u5ea6\uff0c\u6b64\u65f6\u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u6a21\u5757\u53d1\u5e03\u63a7\u5236\u5c0f\u8f66\u5de6\u8f6c20\u5ea6\uff0c\u8f6c\u52a8\u4e4b\u540e\u63a7\u5236\u5c0f\u8f66\u524d\u8fdb\uff0c\u540e\u9762\u63a7\u5236\u5c0f\u8f66\u505c\u6b62\u8fd0\u52a8\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["PC\u7aef\u5728\u7ec8\u7aef\u4f7f\u7528",(0,s.jsx)(n.code,{children:"ros2 topic list"}),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u8be2\u5230RDK\u7684topic\u4fe1\u606f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ ros2 topic list\n/audio_smart\n/cmd_vel\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d",(0,s.jsx)(n.code,{children:"/audio_smart"}),"\u662fX3\u53d1\u5e03\u7684\u5305\u542b\u667a\u80fd\u8bed\u97f3\u7ed3\u679c\u7684\u7b97\u6cd5\u611f\u77e5msg\uff0c",(0,s.jsx)(n.code,{children:"/cmd_vel"}),"\u662fRDK\u53d1\u5e03\u7684\u8fd0\u52a8\u63a7\u5236\u6307\u4ee4\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["PC\u7aef\u5728\u7ec8\u7aef\u4f7f\u7528",(0,s.jsx)(n.code,{children:"ros2 topic echo /cmd_vel"}),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5230\u662fRDK\u53d1\u5e03\u7684\u8fd0\u52a8\u63a7\u5236\u6307\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"linear:\n  x: 0.0\n  y: 0.30000001192092896\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: 1.1136000156402588\n---\nlinear:\n  x: 0.0\n  y: 0.30000001192092896\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: 1.1136000156402588\n---\nlinear:\n  x: 0.0\n  y: 0.30000001192092896\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: 1.1136000156402588\n---\nlinear:\n  x: 0.0\n  y: 0.30000001192092896\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: 1.1136000156402588\n---\nlinear:\n  x: 0.0\n  y: 0.30000001192092896\n  z: 0.0\nangular:\n  x: 0.0\n  y: 0.0\n  z: 1.1136000156402588\n---\n"})}),"\n",(0,s.jsx)(n.p,{children:"PC\u7aef\u4eff\u771f\u73af\u5883\u4e2d\u8bed\u97f3\u8ffd\u8e2a\u63a7\u5236\u5c0f\u8f66\u8fd0\u52a8\uff0c\u6548\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(67257).A+"",width:"800",height:"433"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u56fe\u4e2d\u5de6\u8fb9\u4e3a\u4eff\u771f\u5c0f\u8f66\u6839\u636e\u58f0\u6e90\u5b9a\u4f4d\u89d2\u5ea6\u8f6c\u52a8\uff0c\u53f3\u8fb9\u4e3a\u7a0b\u5e8f\u8f93\u51fa\u7684log\uff0clog\u4e2d\u5305\u542b\u6709DOA\u89d2\u5ea6\u4fe1\u606f\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},34417:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/doa_line-fdbb50d61dd7705a25a8973a58ee3aeb.jpg"},47075:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/doa_circle-604ce4faf1ac6aaf7857bb18144207f0.jpg"},67257:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/audio_tracking-c5960224e6b99081b54513ad9deb34e1.gif"},75975:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/gazebo-0e43917a538ed038fba57f6d0e669957.jpeg"},93859:(e,n,r)=>{r.d(n,{A:()=>y});var s=r(96540),t=r(34164),a=r(86641),l=r(56347),o=r(205),i=r(38874),c=r(24035),d=r(82993);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,u]=b({queryString:r,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),g=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function f(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=o[r].value;t!==s&&(c(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function _(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,j.jsx)(_,{...e,children:u(e.children)},String(n))}}}]);