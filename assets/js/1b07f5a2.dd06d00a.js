"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9311],{71051:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var s=l(74848),r=l(28453),o=l(93859),i=l(19365);const t={sidebar_position:1},c="6.1 \u6df1\u5ea6\u5b66\u4e60\u5de1\u7ebf\u5c0f\u8f66",a={id:"Application_case/line_follower",title:"6.1 \u6df1\u5ea6\u5b66\u4e60\u5de1\u7ebf\u5c0f\u8f66",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/06_Application_case/line_follower.md",sourceDirName:"06_Application_case",slug:"/Application_case/line_follower",permalink:"/rdk_doc/Application_case/line_follower",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/06_Application_case/line_follower.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"6. \u5e94\u7528\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/Application_case"},next:{title:"6.2 AMR\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/Application_case/amr"}},d={},h=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"D-Robotics RDK\u5e73\u53f0",id:"d-robotics-rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"D-Robotics RDK\u5e73\u53f0",id:"d-robotics-rdk\u5e73\u53f0-1",level:3},{value:"\u6570\u636e\u91c7\u96c6\u4e0e\u6807\u6ce8",id:"\u6570\u636e\u91c7\u96c6\u4e0e\u6807\u6ce8",level:4},{value:"\u6a21\u578b\u9009\u62e9",id:"\u6a21\u578b\u9009\u62e9",level:4},{value:"\u6a21\u578b\u5b9e\u73b0\u4e0e\u8bad\u7ec3",id:"\u6a21\u578b\u5b9e\u73b0\u4e0e\u8bad\u7ec3",level:4},{value:"\u6a21\u578b\u8f6c\u6362",id:"\u6a21\u578b\u8f6c\u6362",level:4},{value:"\u7aef\u4fa7\u90e8\u7f72",id:"\u7aef\u4fa7\u90e8\u7f72",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"61-\u6df1\u5ea6\u5b66\u4e60\u5de1\u7ebf\u5c0f\u8f66",children:"6.1 \u6df1\u5ea6\u5b66\u4e60\u5de1\u7ebf\u5c0f\u8f66"}),"\n","\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(62893).A+"",width:"638",height:"416"})}),"\n",(0,s.jsx)(n.p,{children:"\u5de1\u7ebf\u4efb\u52a1\uff0c\u5373\u673a\u5668\u4eba\u5c0f\u8f66\u80fd\u591f\u81ea\u4e3b\u8ddf\u7740\u4e00\u6761\u5f15\u5bfc\u7ebf\u5411\u524d\u8fd0\u884c\uff0c\u5f15\u5bfc\u7ebf\u5f80\u5de6\uff0c\u5c0f\u8f66\u4e5f\u8ddf\u7740\u5f80\u5de6\u8f6c\uff0c\u5f15\u5bfc\u7ebf\u5f80\u53f3\uff0c\u5c0f\u8f66\u8ddf\u7740\u5f80\u53f3\u8f6c\u3002\u8be5\u4efb\u52a1\u662f\u8f6e\u5f0f\u673a\u5668\u4eba\u4e2d\u6bd4\u8f83\u57fa\u7840\u7684\u4efb\u52a1\uff0c\u5b9e\u73b0\u65b9\u5f0f\u4e5f\u6709\u591a\u79cd\uff0c\u6bd4\u5982\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7\u5b89\u88c5\u591a\u4e2a\u5149\u7535\u4f20\u611f\u5668\uff08\u7070\u5ea6\u4f20\u611f\u5668\uff09\uff0c\u6839\u636e\u4f20\u611f\u5668\u7684\u7684\u8fd4\u56de\u503c\u5224\u65ad\u8be5\u4f20\u611f\u5668\u662f\u5426\u4f4d\u4e8e\u7ebf\u4e0a\uff0c\u8fdb\u800c\u8c03\u6574\u673a\u5668\u4eba\u8fd0\u52a8\u65b9\u5411"}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7\u6444\u50cf\u5934\u57fa\u4e8e\u4f20\u7edf\u7684\u56fe\u50cf\u5904\u7406\u65b9\u6cd5\u5982\u8fb9\u7f18\u68c0\u6d4b\u7b49\u83b7\u53d6\u7ebf\u5728\u56fe\u50cf\u4e2d\u7684\u4f4d\u7f6e\uff0c\u8fdb\u800c\u8c03\u6574\u673a\u5668\u4eba\u8fd0\u52a8\u65b9\u5411"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u8ff0\u5e38\u7528\u65b9\u6cd5\u5f53\u5149\u7167\u73af\u5883\u3001\u573a\u5730\u53d1\u751f\u53d8\u5316\uff0c\u4e00\u822c\u9700\u8981\u53cd\u590d\u901a\u8fc7\u91c7\u96c6\u56fe\u50cf\u8c03\u6574\u9608\u503c\u4ee5\u53ca\u8fdb\u884c\u6d4b\u8bd5\u6765\u5b9e\u73b0\u6bd4\u8f83\u597d\u7684\u8bc6\u522b\u7ed3\u679c\u3002\u90a3\u6709\u6ca1\u6709\u53ef\u80fd\u8ba9\u673a\u5668\u4eba\u80fd\u591f\u81ea\u884c\u9002\u5e94\u73af\u5883\u7684\u53d8\u5316\uff0c\u4e0d\u518d\u9700\u8981\u4eba\u4e3a\u7684\u8c03\u6574\u9608\u503c\u5462\uff1f\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\uff08CNN\uff09\uff0c\u662f\u6df1\u5ea6\u5b66\u4e60\u7b97\u6cd5\u5e94\u7528\u6700\u6210\u529f\u7684\u9886\u57df\u4e4b\u4e00\uff0c\u5177\u6709\u4e0d\u9519\u7684\u9002\u5e94\u6027\u548c\u9c81\u68d2\u6027\uff0c\u8fd1\u5e74\u6765\u968f\u7740\u5904\u7406\u5668\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u5df2\u7ecf\u53ef\u4ee5\u5728\u5d4c\u5165\u5f0f\u7aef\u8fdb\u884cCNN\u63a8\u7406\uff0c\u8fd9\u91cc\u4f7f\u7528CNN\u7684\u65b9\u5f0f\u5b9e\u73b0\u5de1\u7ebf\u4efb\u52a1\u4e2d\u5f15\u5bfc\u7ebf\u7684\u4f4d\u7f6e\u611f\u77e5\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a (",(0,s.jsx)(n.a,{href:"https://github.com/D-Robotics/line_follower",children:"https://github.com/D-Robotics/line_follower"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,s.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,s.jsx)(n.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RDK X3, RDK X3 Module"}),(0,s.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,s.jsx)(n.td,{children:"\u542f\u52a8MIPI\u6444\u50cf\u5934\u83b7\u53d6\u56fe\u50cf\uff0c\u5e76\u8fdb\u884c\u5f15\u5bfc\u7ebf\u68c0\u6d4b\u548c\u5c0f\u8f66\u63a7\u5236\uff0c\u6700\u540e\u901a\u8fc7\u5b9e\u8f66\u8fd0\u52a8\u5c55\u793a\u5de1\u7ebf\u6548\u679c"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsx)(n.h3,{id:"d-robotics-rdk\u5e73\u53f0",children:"D-Robotics RDK\u5e73\u53f0"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"D-Robotics RDK\u5df2\u70e7\u5f55\u597dD-Robotics \u63d0\u4f9b\u7684Ubuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"D-Robotics RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"D-Robotics RDK\u5df2\u5b89\u88c5MIPI\u6216\u8005USB\u6444\u50cf\u5934\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u548cD-Robotics RDK\u5728\u540c\u4e00\u7f51\u6bb5\uff08\u6709\u7ebf\u6216\u8005\u8fde\u63a5\u540c\u4e00\u65e0\u7ebf\u7f51\uff0cIP\u5730\u5740\u524d\u4e09\u6bb5\u9700\u4fdd\u6301\u4e00\u81f4\uff09\u7684PC\uff0cPC\u7aef\u9700\u8981\u5b89\u88c5\u7684\u73af\u5883\u5305\u62ec\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"tros-distro",children:[(0,s.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ubuntu 20.04\u7cfb\u7edf\u548c",(0,s.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy\u684c\u9762\u7248"})]}),"\n"]})}),(0,s.jsx)(i.A,{value:"humble",label:"Humble",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ubuntu 22.04\u7cfb\u7edf\u548c",(0,s.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble\u684c\u9762\u7248"})]}),"\n"]})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7b97\u6cd5\u5de5\u5177\u94feOE\u5305\u83b7\u53d6\u65b9\u5f0f\n",(0,s.jsx)(n.code,{children:"wget -c ftp://vrftp.horizon.ai/Open_Explorer_gcc_9.3.0/2.3.3/horizon_xj3_open_explorer_v2.3.3_20220727.tar.gz"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u7b97\u6cd5\u5de5\u5177\u94fedocker\u83b7\u53d6\u65b9\u5f0f\n",(0,s.jsx)(n.code,{children:"wget -c ftp://vrftp.horizon.ai/Open_Explorer_gcc_9.3.0/2.3.3/x3pi_toolchain/ai_toolchain_2.3.3.tar.gz"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5de5\u7a0b\u6e90\u7801\n",(0,s.jsx)(n.code,{children:"https://github.com/D-Robotics/line_follower/tree/develop"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.h3,{id:"d-robotics-rdk\u5e73\u53f0-1",children:"D-Robotics RDK\u5e73\u53f0"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(75822).A+"",width:"1348",height:"716"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5c0f\u8f66\u672c\u4f53\u8fd9\u91cc\u9009\u7528OriginBot\u5957\u4ef6\uff0c\u8be5\u5c0f\u8f66\u672c\u4f53\u5177\u6709\u4e24\u4e2a\u4e3b\u52a8\u8f6e\uff0c\u4e00\u4e2a\u4ece\u52a8\u8f6e\uff0c\u901a\u8fc7\u4e24\u4e2a\u4e3b\u52a8\u8f6e\u5dee\u901f\u8fdb\u884c\u65cb\u8f6c\u63a7\u5236\u3002\u5176\u4e2dMCU\u6a21\u5757\u4e3b\u8981\u7528\u4e8e\u5c0f\u8f66\u7684\u7535\u673a\u8fd0\u52a8\u63a7\u5236\u901a\u8fc7\u4e32\u53e3\u4e0e\u4e3b\u63a7D-Robotics RDK\u8fdb\u884c\u901a\u4fe1\u3002OriginBot\u7f51\u5740\uff1a",(0,s.jsx)(n.a,{href:"https://www.originbot.org/",children:"www.originbot.org"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(30572).A+"",width:"328",height:"273"})}),"\n",(0,s.jsx)(n.p,{children:"\u6574\u5957\u7cfb\u7edf\u5982\u4e0a\u56fe\u6240\u793a\uff0cD-Robotics RDK\u901a\u8fc7\u6444\u50cf\u5934\u83b7\u53d6\u5c0f\u8f66\u524d\u65b9\u73af\u5883\u6570\u636e\uff0c\u56fe\u50cf\u6570\u636e\u901a\u8fc7\u8bad\u7ec3\u597d\u7684CNN\u6a21\u578b\u8fdb\u884c\u63a8\u7406\u5f97\u5230\u5f15\u5bfc\u7ebf\u7684\u5750\u6807\u503c\uff0c\u7136\u540e\u4f9d\u636e\u4e00\u5b9a\u7684\u63a7\u5236\u7b56\u7565\u8ba1\u7b97\u5c0f\u8f66\u7684\u8fd0\u52a8\u65b9\u5f0f\uff0c\u901a\u8fc7UART\u5411\u5c0f\u8f66\u4e0b\u53d1\u8fd0\u52a8\u63a7\u5236\u6307\u4ee4\u5b9e\u73b0\u6574\u4e2a\u7cfb\u7edf\u7684\u95ed\u73af\u63a7\u5236\u3002"}),"\n",(0,s.jsx)(n.p,{children:"PC\u7528\u4e8e\u8fdb\u884c\u6570\u636e\u6807\u6ce8\u4ee5\u53ca\u8bad\u7ec3\uff0c\u4e3a\u4e86\u63d0\u9ad8\u6548\u7387\u8fd9\u91cc\u91c7\u7528D-Robotics RDK\u5c06\u56fe\u7247\u901a\u8fc7\u4ee5\u592a\u7f51\u53d1\u9001\u81f3PC\u7aef\u8fdb\u884c\u6807\u6ce8\u7684\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(80302).A+"",width:"2546",height:"454"})}),"\n",(0,s.jsx)(n.p,{children:"\u6574\u4e2a\u8f6f\u4ef6\u5de5\u7a0b\u5305\u62ec5\u4e2a\u4e3b\u8981\u73af\u8282\u5206\u522b\u662f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6570\u636e\u91c7\u96c6\u4e0e\u6807\u6ce8\uff0c\u6839\u636e\u4efb\u52a1\u76ee\u6807\u83b7\u53d6\u76f8\u5e94\u7684\u6570\u636e\u5e76\u8fdb\u884c\u6807\u6ce8\uff0c\u7528\u4e8e\u6a21\u578b\u8bad\u7ec3\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u6a21\u578b\u9009\u62e9\uff0c\u6839\u636e\u4efb\u52a1\u76ee\u6807\u9009\u53d6\u5408\u9002\u7684\u6a21\u578b\u7ed3\u6784\u786e\u4fdd\u6027\u80fd\u548c\u7cbe\u5ea6\u90fd\u80fd\u591f\u6ee1\u8db3\u9700\u8981\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u6a21\u578b\u8bad\u7ec3\uff0c\u4f7f\u7528\u6807\u6ce8\u7684\u6570\u636e\u5bf9\u6a21\u578b\u8fdb\u884c\u8bad\u7ec3\uff0c\u4ee5\u8fbe\u5230\u6ee1\u610f\u7684\u7cbe\u5ea6\u8981\u6c42\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u6a21\u578b\u8f6c\u6362\uff0c\u4f7f\u7528\u7b97\u6cd5\u5de5\u5177\u94fe\u5c06\u8bad\u7ec3\u5f97\u5230\u7684\u6d6e\u70b9\u6a21\u578b\u8f6c\u6362\u4e3a\u53ef\u4ee5\u5728D-Robotics RDK\u4e0a\u8fd0\u884c\u7684\u5b9a\u70b9\u6a21\u578b\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u7aef\u4fa7\u90e8\u7f72\uff0c\u5728D-Robotics RDK\u4e0a\u8fd0\u884c\u8f6c\u6362\u540e\u7684\u6a21\u578b\uff0c\u5f97\u5230\u611f\u77e5\u7ed3\u679c\u5e76\u63a7\u5236\u673a\u5668\u4eba\u8fd0\u52a8"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Ubuntu"})}),"\n",(0,s.jsx)(n.h4,{id:"\u6570\u636e\u91c7\u96c6\u4e0e\u6807\u6ce8",children:"\u6570\u636e\u91c7\u96c6\u4e0e\u6807\u6ce8"}),"\n",(0,s.jsx)(n.p,{children:"\u6a21\u578b\u8bad\u7ec3\u79bb\u4e0d\u5f00\u6570\u636e\u7684\u91c7\u96c6\u548c\u6807\u6ce8\uff0c\u8fd9\u91cc\u5229\u7528tros.b\u4e2dhobot_sensor\u63d0\u4f9b\u7684MIPI\u6444\u50cf\u5934\u56fe\u50cf\u91c7\u96c6\u529f\u80fd\u548c\u8de8\u8bbe\u5907\u901a\u4fe1\u80fd\u529b\uff0c\u5728PC\u4e0a\u642d\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u6570\u636e\u91c7\u96c6\u548c\u6807\u6ce8\u7cfb\u7edf\u3002\u6574\u4e2a\u6570\u636e\u91c7\u96c6\u6807\u6ce8\u7cfb\u7edf\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1asensor\u63d0\u4f9b\u7684MIPI\u6444\u50cf\u5934\u56fe\u50cf\u91c7\u96c6\u529f\u80fd\u548c\u8de8\u8bbe\u5907\u901a\u4fe1\u80fd\u529b\uff0c\u5728PC\u4e0a\u642d\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u6570\u636e\u91c7\u96c6\u548c\u6807\u6ce8\u7cfb\u7edf\u3002\u6574\u4e2a\u6570\u636e\u91c7\u96c6\u6807\u6ce8\u7cfb\u7edf\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(86343).A+"",width:"1106",height:"434"})}),"\n",(0,s.jsx)(n.p,{children:"D-Robotics RDK\u4e0a\u542f\u52a8mipi_cam\uff0c\u9009\u7528\u7684\u6444\u50cf\u5934\u6a21\u7ec4\u4e3aF37\uff0c\u8f93\u51fa\u56fe\u50cf\u683c\u5f0f\u4e3aBGR8\uff0c\u5206\u8fa8\u7387\u4e3a960x544\uff0c\u6d88\u606f\u901a\u4fe1\u65b9\u5f0f\u4e3a\u975e\u96f6\u62f7\u8d1d\u65b9\u5f0f"}),"\n",(0,s.jsxs)(o.A,{groupId:"tros-distro",children:[(0,s.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,s.jsx)(i.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp\nros2 launch mipi_cam mipi_cam.launch.py mipi_out_format:=bgr8 mipi_io_method:=mmap\n"})}),"\n",(0,s.jsx)(n.p,{children:"PC\u4e0a\u8fd0\u884c"}),"\n",(0,s.jsxs)(o.A,{groupId:"tros-distro",children:[(0,s.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source  /opt/ros/foxy/setup.bash\n"})})}),(0,s.jsx)(i.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source  /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp\n# \u7f16\u8bd1line_follower_model\uff0c\u8fdb\u5165line_follower_model\u76ee\u5f55\ncolcon build --packages-select line_follower_model\n# \u52a0\u8f7d\u7f16\u8bd1\u51fa\u7684line_follower_model\nsource install/setup.bash\n# \u8fd0\u884cPC\u7aef\u6807\u6ce8\u7a0b\u5e8f\nros2 run line_follower_model annotation\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7528\u9f20\u6807\u53f3\u952e\u70b9\u51fb\u753b\u9762\u5782\u76f4\u65b9\u5411\u4e2d\u95f4\u9644\u4ef6\u9ed1\u8272\u5f15\u5bfc\u7ebf\u4e2d\u5fc3\u5904\uff0c\u5373\u53ef\u6807\u8bb0\u76ee\u6807\u70b9\u3002\u6309\u4e0b\u56de\u8f66\u952e\uff0c\u7a0b\u5e8f\u81ea\u52a8\u4fdd\u5b58\u8be5\u56fe\u7247\u81f3image_dataset\u6587\u4ef6\u548c\u6807\u8bb0\u7ed3\u679c\u3002\u56fe\u7247\u547d\u540d\u65b9\u5f0f\u4e3axy_[x\u5750\u6807]",(0,s.jsx)(n.em,{children:"[y\u5750\u6807]"}),"[uuid].jpg\uff0c\u5176\u4e2duuid\u4e3a\u56fe\u7247\u552f\u4e00\u6807\u5fd7\u7b26\uff0c\u907f\u514d\u51fa\u73b0\u6587\u4ef6\u540d\u79f0\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u4ee5\u4e0a\u6570\u636e\u65b9\u5f0f\u91c7\u96c6\u548c\u6807\u6ce8\u65b9\u5f0f\uff0c\u91c7\u96c6\u4e00\u5b9a\u6570\u91cf\u7684\u6570\u636e\uff0c\u5efa\u8bae\u81f3\u5c11100\u5f20\uff0c\u7528\u4e8e\u540e\u7eed\u6a21\u578b\u8bad\u7ec3\u3002\u5f53\u73af\u5883\u6216\u8005\u573a\u5730\u53d8\u5316\u65f6\u4e5f\u53ef\u91c7\u96c6\u5bf9\u5e94\u7684\u56fe\u7247\u4e00\u8d77\u8bad\u7ec3\u63d0\u9ad8\u6a21\u578b\u7684\u9002\u5e94\u6027\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(75524).A+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(n.h4,{id:"\u6a21\u578b\u9009\u62e9",children:"\u6a21\u578b\u9009\u62e9"}),"\n",(0,s.jsxs)(n.p,{children:["\u7efc\u5408\u8003\u8651\u6a21\u578b\u6210\u719f\u5ea6\u3001\u8bad\u7ec3\u6a21\u578b\u5bf9CPU/GPU\u7684\u786c\u4ef6\u8981\u6c42\uff0c\u8fd9\u91cc\u9009\u62e9ResNet\u7f51\u7edc\u4f5c\u4e3abackbone\u3002\u6b8b\u5dee\u795e\u7ecf\u7f51\u7edc\uff08ResNet\uff09\u662f\u7531\u5fae\u8f6f\u7814\u7a76\u9662\u7684\u4f55\u607a\u660e\u3001\u5f20\u7965\u96e8\u3001\u4efb\u5c11\u537f\u3001\u5b59\u5251\u7b49\u4eba\u63d0\u51fa\uff0c\u57282015 \u5e74\u7684ILSVRC\uff08ImageNet Large Scale Visual Recognition Challenge\uff09\u4e2d\u53d6\u5f97\u4e86\u51a0\u519b\u3002ResNet\u5de7\u5999\u5730\u5229\u7528\u4e86shortcut\u8fde\u63a5\uff0c\u89e3\u51b3\u4e86\u6df1\u5ea6\u7f51\u7edc\u4e2d\u6a21\u578b\u9000\u5316\u7684\u95ee\u9898\uff0c\u662f\u5f53\u524d\u5e94\u7528\u6700\u4e3a\u5e7f\u6cdb\u7684CNN\u7279\u5f81\u63d0\u53d6\u7f51\u7edc\u4e4b\u4e00\u3002",(0,s.jsx)(n.a,{href:"https://huggingface.co/microsoft/resnet-18",children:"ResNet18"}),"\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(87761).A+"",width:"848",height:"226"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728D-Robotics RDK\u4e0aResNet18\u63a8\u7406\u6027\u80fd\u9ad8\u8fbe232FPS\uff0cResNet50\u63a8\u7406\u6027\u80fd\u4e5f\u8d85\u8fc7100FPS\uff0c\u9ad8\u5e27\u7387\u4fdd\u8bc1\u4e86\u6570\u636e\u5904\u7406\u7684\u5b9e\u65f6\u6027\uff0c\u662f\u540e\u7eed\u63d0\u9ad8\u8f66\u901f\u4ee5\u53ca\u5b9e\u73b0\u66f4\u590d\u6742\u5e94\u7528\u7684\u5fc5\u8981\u6761\u4ef6\u3002\u8fd9\u91cc\u5148\u4f7f\u7528ResNet18\u7f51\u7edc\u7ed3\u6784\uff0c\u540e\u671f\u9047\u5230\u74f6\u9888\u8003\u8651\u66f4\u6df1\u7684ResNet50\u7f51\u7edc\u7ed3\u6784\u3002\u4e3a\u4e86\u6ee1\u8db3\u8f93\u51fa\u5f15\u5bfc\u7ebf\u5750\u6807\u503cx\uff0cy\u8fd9\u91cc\u9700\u8981\u4fee\u6539ResNet18\u7f51\u7edcFC\u8f93\u51fa\u4e3a2\uff0c\u5373\u76f4\u63a5\u8f93\u51fa\u5f15\u5bfc\u7ebf\u7684x\uff0cy\u5750\u6807\u503c\u3002ResNet18\u8f93\u5165\u5206\u8fa8\u7387\u4e3a224x224\u3002\n\u8bad\u7ec3\u6846\u67b6\u9009\u7528\u6700\u8fd1\u6bd4\u8f83\u706b\u70ed\u7684pytorch\uff0c\u8fd9\u91cc\u5b89\u88c5CPU\u7248\u672cpytorch\uff0c\u82e5\u786c\u4ef6\u4e0a\u6709GPU\u5361\u53ef\u9009\u7528GPU\u7248\u672cpytorch\u3002\u5b89\u88c5\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f00\u53d1\u6240\u7528PC\u4e3a\u666e\u901a\u7b14\u8bb0\u672c\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CPU\uff1aIntel i5-7260U"}),"\n",(0,s.jsx)(n.li,{children:"DDR: 8G"}),"\n",(0,s.jsx)(n.li,{children:"OS: ubuntu 20.04"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u6a21\u578b\u5b9e\u73b0\u4e0e\u8bad\u7ec3",children:"\u6a21\u578b\u5b9e\u73b0\u4e0e\u8bad\u7ec3"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u529f\u80fd\u5b8c\u6210\u4ee3\u7801\u4f4d\u4e8eline_follower/line_follower_model/line_follower_model/training_member_function.py"}),"\n",(0,s.jsx)(n.p,{children:"PC\u4e0a\u8fd0\u884c"}),"\n",(0,s.jsxs)(o.A,{groupId:"tros-distro",children:[(0,s.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source  /opt/ros/foxy/setup.bash\n"})})}),(0,s.jsx)(i.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source  /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u7f16\u8bd1line_follower_model\uff0c\u8fdb\u5165line_follower_model\u76ee\u5f55\ncolcon build --packages-select line_follower_model\n# \u52a0\u8f7d\u7f16\u8bd1\u51fa\u7684line_follower_model\nsource install/setup.bash\n# \u8fd0\u884cPC\u7aef\u6807\u6ce8\u7a0b\u5e8f\nros2 run line_follower_model training\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u6a21\u578b\u8f6c\u6362",children:"\u6a21\u578b\u8f6c\u6362"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(13553).A+"",width:"1426",height:"194"})}),"\n",(0,s.jsx)(n.p,{children:"pytorch\u8bad\u7ec3\u5f97\u5230\u7684\u6d6e\u70b9\u6a21\u578b\u5982\u679c\u76f4\u63a5\u8fd0\u884c\u5728D-Robotics RDK\u4e0a\u6548\u7387\u4f1a\u5f88\u4f4e\uff0c\u4e3a\u4e86\u63d0\u9ad8\u8fd0\u884c\u6548\u7387\uff0c\u53d1\u6325BPU\u76845T\u7b97\u529b\uff0c\u8fd9\u91cc\u9700\u8981\u8fdb\u884c\u6d6e\u70b9\u6a21\u578b\u8f6c\u5b9a\u70b9\u6a21\u578b\u64cd\u4f5c\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"pytorch\u6a21\u578b\u751f\u6210onnx\u6a21\u578b"}),"\n",(0,s.jsx)(n.p,{children:"\u5728PC\u4e0a\u8fd0\u884c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ros2 run line_follower_model generate_onnx\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c\u540e\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u5f97\u5230\u751f\u6210best_line_follower_model_xy.onnx\u6a21\u578b"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6d6e\u70b9\u6a21\u578b\u751f\u6210\u5b9a\u70b9\u6a21\u578b"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u529f\u80fd\u5b8c\u6210\u4ee3\u7801\u4f4d\u4e8eline_follower/10_model_convert"}),"\n",(0,s.jsx)(n.p,{children:"OE\u5305\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:".\n\u251c\u2500\u2500 bsp\n\u2502   \u2514\u2500\u2500 X3J3-Img-PL2.2-V1.1.0-20220324.tgz\n\u251c\u2500\u2500 ddk\n\u2502   \u251c\u2500\u2500 package\n\u2502   \u251c\u2500\u2500 samples\n\u2502   \u2514\u2500\u2500 tools\n\u251c\u2500\u2500 doc\n\u2502   \u251c\u2500\u2500 cn\n\u2502   \u251c\u2500\u2500 ddk_doc\n\u2502   \u2514\u2500\u2500 en\n\u251c\u2500\u2500 release_note-CN.txt\n\u251c\u2500\u2500 release_note-EN.txt\n\u251c\u2500\u2500 run_docker.sh\n\u2514\u2500\u2500 tools\n    \u251c\u2500\u2500 0A_CP210x_USB2UART_Driver.zip\n    \u251c\u2500\u2500 0A_PL2302-USB-to-Serial-Comm-Port.zip\n    \u251c\u2500\u2500 0A_PL2303-M_LogoDriver_Setup_v202_20200527.zip\n    \u251c\u2500\u2500 0B_hbupdate_burn_secure-key1.zip\n    \u251c\u2500\u2500 0B_hbupdate_linux_cli_v1.1.tgz\n    \u251c\u2500\u2500 0B_hbupdate_linux_gui_v1.1.tgz\n    \u251c\u2500\u2500 0B_hbupdate_mac_v1.0.5.app.tar.gz\n    \u2514\u2500\u2500 0B_hbupdate_win64_v1.1.zip\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u62f7\u8d1d\u5de5\u7a0b\u4e2d10_model_convert\u81f3\u7b97\u6cd5\u5de5\u5177\u94feOE\u5305ddk/samples/ai_toolchain/horizon_model_convert_sample/03_classification/\u76ee\u5f55\u4e0b"}),"\n",(0,s.jsx)(n.p,{children:"\u52a0\u8f7d\u7b97\u6cd5toolchain docker\uff0c\u5728OE\u5305\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sh run_docker.sh /data/\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u6821\u51c6\u6570\u636e\u3002\u8be5\u6b65\u9aa4\u751f\u6210\u7684\u6821\u51c6\u6570\u636e\u4e3b\u8981\u4f9b\u4e0b\u4e00\u6b65\u6a21\u578b\u7f16\u8bd1\u8fdb\u884c\u6821\u51c6\u7528\uff0c\u53ef\u4ee5\u4f7f\u7528\u8bad\u7ec3\u6a21\u578b\u7684\u90e8\u5206\u6570\u636e\uff0c\u6ca1\u6709\u7279\u6b8a\u8981\u6c42\uff0c\u53ea\u8981\u786e\u4fdd\u6807\u51c6\u6b63\u786e\u5373\u53ef\uff0c\u6570\u91cf\u4ee5100\u5f20\u5de6\u53f3\u4e3a\u5b9c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# docker\u4e2d\u6267\u884c\ncd ddk/samples/ai_toolchain/horizon_model_convert_sample/03_classification/10_model_convert/mapper\nsh 02_preprocess.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(1769).A+"",width:"800",height:"450"})}),"\n",(0,s.jsx)(n.p,{children:"\u6a21\u578b\u7f16\u8bd1,\u8be5\u6b65\u9aa4\u5c06\u751f\u6210\u5b9a\u70b9\u6a21\u578b\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# docker\u4e2d\u6267\u884c\ncd ddk/samples/ai_toolchain/horizon_model_convert_sample/03_classification/10_model_convert/mapper\nsh 03_build.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(35952).A+"",width:"800",height:"450"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u7aef\u4fa7\u90e8\u7f72",children:"\u7aef\u4fa7\u90e8\u7f72"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u524d\u9762\u6a21\u578b\u8f6c\u6362\u5df2\u7ecf\u5f97\u5230\u53ef\u4ee5\u5728D-Robotics RDKBPU\u4e0a\u8fd0\u884c\u7684\u5b9a\u70b9\u6a21\u578b\uff0c\u5982\u4f55\u5c06\u5176\u90e8\u7f72\u5728D-Robotics RDK\u4e0a\uff0c\u5b9e\u73b0\u56fe\u50cf\u83b7\u53d6\u3001\u6a21\u578b\u63a8\u7406\u3001\u8fd0\u52a8\u63a7\u5236\u6574\u5957\u529f\u80fd\u5462\uff1f\u8fd9\u91cc\u57fa\u4e8etros.b\u4e2d\u7684hobot_dnn\u5b9e\u73b0\u3002Hobot\u5b9e\u73b0\u3002hobot_dnn\u662ftros.b\u8f6f\u4ef6\u6808\u4e2d\u7684\u677f\u7aef\u7b97\u6cd5\u63a8\u7406\u6846\u67b6\uff0c\u5728D-Robotics D-Robotics RDK\u4e0a\u5229\u7528BPU\u5904\u7406\u5668\u5b9e\u73b0\u7b97\u6cd5\u63a8\u7406\u529f\u80fd\uff0c\u4e3a\u673a\u5668\u4eba\u5e94\u7528\u5f00\u53d1\u63d0\u4f9b\u66f4\u7b80\u5355\u6613\u7528\u7684\u6a21\u578b\u96c6\u6210\u5f00\u53d1\u63a5\u53e3\uff0c\u5305\u62ec\u6a21\u578b\u7ba1\u7406\u3001\u57fa\u4e8e\u6a21\u578b\u63cf\u8ff0\u7684\u8f93\u5165\u5904\u7406\u53ca\u7ed3\u679c\u89e3\u6790\uff0c\u4ee5\u53ca\u6a21\u578b\u8f93\u51fa\u5185\u5b58\u5206\u914d\u7ba1\u7406\u7b49\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7ee7\u627fDnnNode\u5b9e\u73b0\u5fc5\u8981\u7684\u63a5\u53e3\u3002\u8fd9\u91cc\u91c7\u7528\u516c\u6709\u7ee7\u627f\u65b9\u5f0f\uff0c\u5176\u4e2d\u5fc5\u987b\u8981\u5b9e\u73b0\u7684\u63a5\u53e3\u4e3a\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SetNodePara()\u7528\u4e8e\u914d\u7f6e\u6a21\u578b\u53c2\u6570\uff0c\u5982\u6a21\u578b\u8def\u5f84\u3001\u6a21\u578b\u540d\u5b57\u7b49"}),"\n",(0,s.jsx)(n.li,{children:"SetOutputParser()\u7528\u4e8e\u89e3\u6790\u6a21\u578b\u63a8\u7406\u8f93\u51fa"}),"\n",(0,s.jsx)(n.li,{children:"PostProcess(const std::shared_ptr<DnnNodeOutput> &outputs)\u7528\u4e8e\u5bf9\u540e\u5904\u7406\u7ed3\u679c\u8fdb\u4e00\u6b65\u8fdb\u884c\u4f7f\u7528"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u6574\u4ee3\u7801\u8bf7\u53c2\u8003\uff1aline_follower/line_follower_perception/src/line_follower_perception.cpp"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06line_follower_perception\u6587\u4ef6\u5939\u548c\u7f16\u8bd1\u751f\u6210\u7684\u5b9a\u70b9\u6a21\u578b\u62f7\u8d1d\u81f3\u677f\u7aef\u6267\u884c"}),"\n",(0,s.jsxs)(o.A,{groupId:"tros-distro",children:[(0,s.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,s.jsx)(i.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"#\u5728line_follower_perception\u6587\u4ef6\u5939\u8def\u5f84\u4e0b\u6267\u884c\uff0cx3\u7248\u672c\u5206\u652f\u4e3afeature-x3\uff0cx5\u7248\u672c\u5206\u652f\u4e3afeature-x5\uff0c\u8bf7\u6839\u636e\u8bbe\u5907\u578b\u53f7\u62c9\u53d6\u5bf9\u5e94\u5206\u652f\u8fdb\u884c\u7f16\u8bd1\ncolcon build --packages-select line_follower_perception\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u901a\u8fc7\u53c2\u6570model_path\u548cmodel_name\u6307\u5b9a\u6a21\u578b\u7684\u8def\u5f84\u548c\u540d\u79f0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"source install/setup.bash\nros2 run line_follower_perception line_follower_perception --ros-args -p model_path:=./resnet18_224x224_nv12.bin -p model_name:=resnet18_224x224_nv12 &\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884cmipi_cam"}),"\n",(0,s.jsxs)(o.A,{groupId:"tros-distro",children:[(0,s.jsx)(i.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,s.jsx)(i.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ros2 launch mipi_cam mipi_cam.launch.py &\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u540e\u8fdb\u5165\u5c0f\u8f66\u7684\u8fd0\u52a8\u63a7\u5236package\uff0coriginbot_base\u8fd0\u884c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"source install/setup.bash\nros2 run originbot_base originbot_base\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,s.jsx)(n.p,{children:"\u5c0f\u8f66\u5df2\u7ecf\u5f00\u59cb\u4e86\u5de1\u7ebf\u8fd0\u52a8\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(43175).A+"",width:"640",height:"1138"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>i});l(96540);var s=l(34164);const r={tabItem:"tabItem_Ymn6"};var o=l(74848);function i(e){let{children:n,hidden:l,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:l,children:n})}},93859:(e,n,l)=>{l.d(n,{A:()=>w});var s=l(96540),r=l(34164),o=l(86641),i=l(56347),t=l(205),c=l(38874),a=l(24035),d=l(82993);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:l}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:s,default:r}}=e;return{value:n,label:l,attributes:s,default:r}}))}(l);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,c.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,o=u(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=l.find((e=>e.default))??l[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[a,h]=x({queryString:l,groupId:r}),[b,j]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Dv)(l);return[r,(0,s.useCallback)((e=>{l&&o.set(e)}),[l,o])]}({groupId:r}),m=(()=>{const e=a??b;return p({value:e,tabValues:o})?e:null})();(0,t.A)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,o]),tabValues:o}}var j=l(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=l(74848);function g(e){let{className:n,block:l,selectedValue:s,selectValue:i,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.a_)(),d=e=>{const n=e.currentTarget,l=c.indexOf(n),r=t[l].value;r!==s&&(a(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:o}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,r.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":s===n}),children:l??n},n)}))})}function f(e){let{lazy:n,children:l,selectedValue:r}=e;const o=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=b(e);return(0,_.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,_.jsx)(g,{...n,...e}),(0,_.jsx)(f,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,_.jsx)(v,{...e,children:h(e.children)},String(n))}},1769:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/02-7add32382cc2abf0d867e79e681a8a22.gif"},35952:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/03-4960d7ae2f4011edd867b3e67c1e917a.gif"},75524:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/annotation-66b8dbde5a6b5e42d91405647bbbdbeb.gif"},86343:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/annotation-e9563d60ad5004c2ceb56588e2b32472.png"},30572:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/car-7056cef7016a16cf7e029ffeb410c74d.png"},62893:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/demo-725b5185be38515fbca3c9c62faf35de.png"},75822:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/framework-c3a859e8418b4baa1f58e5ddf2289e7a.png"},87761:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/model-808e7a206ee03d1575b6284e7d3b02f6.png"},13553:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/model_convert-b7d6367e6d5ace7abf6453d581e82aee.png"},80302:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/roadmap-b553d95eada41fa25e2667ae4b4ec6e1.png"},43175:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/tracking_car-c090631217391ef88a5e4c66cb02b4b9.gif"},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>t});var s=l(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);