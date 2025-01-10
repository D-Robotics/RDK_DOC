"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3346],{89607:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>A});var s=c(74848),l=c(28453);const i={sidebar_position:3},d="CAN\u4f7f\u7528",a={id:"Advanced_development/hardware_development/rdk_x5/can",title:"CAN\u4f7f\u7528",description:"\u534f\u8bae\u7b80\u4ecb",source:"@site/docs/07_Advanced_development/01_hardware_development/rdk_x5/can.md",sourceDirName:"07_Advanced_development/01_hardware_development/rdk_x5",slug:"/Advanced_development/hardware_development/rdk_x5/can",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x5/can",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/01_hardware_development/rdk_x5/can.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u914d\u4ef6\u6e05\u5355",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x5/accessory"},next:{title:"\u663e\u793a\u5c4f\u4f7f\u7528",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x5/display"}},r={},A=[{value:"\u534f\u8bae\u7b80\u4ecb",id:"\u534f\u8bae\u7b80\u4ecb",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u6a21\u5757\u7b80\u4ecb",id:"\u6a21\u5757\u7b80\u4ecb",level:2},{value:"\u9a71\u52a8\u6307\u5357",id:"\u9a71\u52a8\u6307\u5357",level:2},{value:"can-utils\u5de5\u5177\u4ecb\u7ecd",id:"can-utils\u5de5\u5177\u4ecb\u7ecd",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u6d4b\u8bd5\u6307\u5357",id:"\u6d4b\u8bd5\u6307\u5357",level:2},{value:"\u56de\u73af\u6d4b\u8bd5",id:"\u56de\u73af\u6d4b\u8bd5",level:3},{value:"CANFD\u56de\u73af\u6d4b\u8bd5",id:"canfd\u56de\u73af\u6d4b\u8bd5",level:3},{value:"\u53cc\u8bbe\u5907\u901a\u4fe1\u6d4b\u8bd5",id:"\u53cc\u8bbe\u5907\u901a\u4fe1\u6d4b\u8bd5",level:3},{value:"\u5e94\u7528\u6307\u5357",id:"\u5e94\u7528\u6307\u5357",level:2}];function t(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"can\u4f7f\u7528",children:"CAN\u4f7f\u7528"}),"\n",(0,s.jsx)(e.h2,{id:"\u534f\u8bae\u7b80\u4ecb",children:"\u534f\u8bae\u7b80\u4ecb"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"CAN"}),"\nCAN \u662fController AreaNetwork \u7684\u7f29\u5199\uff0c\u4e2d\u6587\u540d\u4e3a\u63a7\u5236\u5668\u5c40\u57df\u7f51\u7edc\uff0c\u662fISO\u56fd\u9645\u6807\u51c6\u5316\u7684\u4e32\u884c\u901a\u4fe1\u534f\u8bae\uff0c\u662f\u4e00\u79cd\u7528\u4e8e\u5b9e\u65f6\u5e94\u7528\u7684\u4e32\u884c\u901a\u8baf\u534f\u8bae\u603b\u7ebf\uff0c\u5b83\u53ef\u4ee5\u4f7f\u7528\u53cc\u7ede\u7ebf\u6765\u4f20\u8f93\u4fe1\u53f7\uff0c\u662f\u4e16\u754c\u4e0a\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\u73b0\u573a\u603b\u7ebf\u4e4b\u4e00\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"CAN\u603b\u7ebf\u7684\u4f18\u70b9:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53ef\u9760\u6027\u9ad8\uff0c\u6297\u5e72\u6270\u80fd\u529b\u5f3a\nphy\u82af\u7247\u5916\u56f4\u57fa\u4e8e\u5dee\u5206\u4fe1\u53f7\u548c\u53cc\u7ede\u7ebf\u8fdb\u884c\u4f20\u8f93\uff0c\u6709\u6548\u62b5\u6d88\u7535\u78c1\u5e72\u6270;\u786c\u4ef6\u56fa\u5316\u7684\u6570\u636e\u94fe\u8def\u5c42\u80fd\u81ea\u52a8\u89e3\u51b3\u591a\u8282\u70b9\u95f4\u65f6\u949f\u4e0d\u540c\u6b65\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5177\u5907\u5f88\u5f3a\u7684\u68c0\u9519\u80fd\u529b\n\u786c\u4ef6\u56fa\u5316\u7684\u6570\u636e\u94fe\u8def\u5c42\u5305\u542bCRC\u3001\u4f4d\u68c0\u6d4b\u7b49\u68c0\u6d4b\u80fd\u529b\uff0c\u51e0\u4e4e\u80fd100%\u68c0\u6d4b\u901a\u4fe1\u5f02\u5e38\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b8c\u5584\u7684\u9519\u8bef\u7ba1\u7406\u673a\u5236\n\u5982\u62a5\u6587\u5e27\u4ef2\u88c1\u5931\u8d25\u6216\u4f20\u8f93\u671f\u95f4\u88ab\u7834\u574f\u80fd\u81ea\u52a8\u91cd\u53d1;\u8282\u70b9\u5728\u9519\u8bef\u4e25\u91cd\u7684\u60c5\u51b5\u4e0b\uff0c\u5177\u6709\u81ea\u52a8\u8131\u79bb\u603b\u7ebf\u7684\u529f\u80fd\uff0c\u5207\u65ad\u5b83\u4e0e\u603b\u7ebf\u7684\u8054\u7cfb\uff0c\u4e0d\u5f71\u54cd\u603b\u7ebf\u7684\u6b63\u5e38\u5de5\u4f5c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b9e\u65f6\u6027\u5f3a\nCAN\u603b\u7ebf\u5177\u6709\u8f83\u9ad8\u7684\u6570\u636e\u4f20\u8f93\u901f\u7387\uff0c\u80fd\u591f\u5b9e\u65f6\u5904\u7406\u548c\u4f20\u8f93\u5927\u91cf\u6570\u636e\uff0c\u6ee1\u8db3\u6c7d\u8f66\u7535\u5b50\u63a7\u5236\u7cfb\u7edf\u7684\u5b9e\u65f6\u6027\u9700\u6c42\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6210\u672c\u4f4e\nCAN\u603b\u7ebf\u7684\u786c\u4ef6\u6210\u672c\u76f8\u5bf9\u8f83\u4f4e\uff0c\u53ef\u4ee5\u964d\u4f4e\u6c7d\u8f66\u7535\u5b50\u63a7\u5236\u7cfb\u7edf\u7684\u6574\u4f53\u6210\u672c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u901a\u4fe1\u8ddd\u79bb\u8fdc\u3001\u6d88\u606f\u4f20\u8f93\u901f\u5ea6\u5feb\n\u76f4\u63a5\u901a\u4fe1\u8ddd\u79bb\u6700\u8fdc\u53ef\u8fbe10km(\u901f\u73874Kbps\u4ee5\u4e0b);\u901a\u4fe1\u901f\u7387\u6700\u9ad8\u53ef\u8fbe1Mbps(\u6b64\u65f6\u8ddd\u79bb\u6700\u957f40m)\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u652f\u6301\u591a\u4e3b\u673a\u901a\u4fe1\uff0c\u652f\u6301\u65e0\u635f\u4ef2\u88c1\u6280\u672f\n\u5f53\u4e24\u4e2a\u8282\u70b9\u540c\u65f6\u53d1\u5e03\u4fe1\u606f\u65f6\uff0c\u9ad8\u4f18\u5148\u7ea7\u62a5\u6587\u53ef\u4e0d\u53d7\u5f71\u54cd\u5730\u4f20\u8f93\u6570\u636e\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:'\u5e9f\u9664"\u5730\u5740\u201d\u6982\u5ff5\uff0c\u9ad8\u6548\u7075\u6d3b\nCAN\u534f\u8bae\u7684\u4e00\u4e2a\u6700\u5927\u7279\u70b9\u662f\u5e9f\u9664\u4e86\u4f20\u7edf\u7684\u7ad9\u5730\u5740\u7f16\u7801\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u5bf9\u901a\u4fe1\u62a5\u6587\u8fdb\u3002'}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u884c\u7f16\u7801\n1\uff09CAN\u6784\u6210\u7684\u7f51\u7edc\u8282\u70b9\u4e2a\u6570\u662f\u4e0d\u53d7\u9650\u5236\u7684\uff0c\u4f7f\u7528\u4e0a\u5177\u6709\u5f88\u5927\u7684\u7075\u6d3b\u6027;\n2\uff09\u5728\u603b\u7ebf\u4e0a\u589e\u52a0\u8282\u70b9\u65f6\uff0c\u4e0d\u4f1a\u5bf9\u603b\u7ebf\u4e0a\u5df2\u6709\u8282\u70b9\u7684\u8f6f\u786c\u4ef6\u53ca\u5e94\u7528\u5c42\u9020\u6210\u5f71\u54cd\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7ed3\u6784\u7b80\u5355\uff0c\u7ec4\u7f51\u65b9\u4fbf\uff0c\u53ef\u6269\u5c55\u6027\u5f3a\n\u6dfb\u52a0\u65b0\u8bbe\u5907\u65f6\uff0c\u53ea\u9700\u5f80\u53cc\u7ede\u7ebf\u4e0a\u653e\u5c31\u884c\uff0c\u65e0\u9700\u989d\u5916\u4fee\u6539\u7ebf\u8def\uff08\u53cd\u4f8b\u5982SPI\u7b49\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"CAN FD"}),"\n\u5e02\u573a\u5bf9\u63d0\u5347CAN \u603b\u7ebf\u6027\u80fd\u7684\u5f3a\u70c8\u9700\u6c42\u4f7fCAN-FD(Flexible Data rate)\u5e94\u8fd0\u800c\u751f\uff0cCAN-FD\u53d1\u626c\u4e86CAN \u7684\u4f18\u70b9\uff0c\u5e76\u5f25\u8865\u4e86CAN \u7684\u4e0d\u8db3\uff0c\u5176\u4e3b\u8981\u7279\u6027\u5982\u4e0b:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6269\u5c55\u6709\u6548\u6570\u636e\u573a\nCAN-FD\u534f\u8bae\u7684\u6bcf\u5e27\u62a5\u6587\u6709\u6548\u6570\u636e\u573a\u53ef\u4ee5\u8fbe\u523064\u5b57\u82825\uff0c\u800c\u4f20\u7edf\u7684CAN\u534f\u8bae\u53ea\u67098\u5b57\u8282\u3002\u8fd9\u5927\u5927\u589e\u52a0\u4e86\u6570\u636e\u4f20\u8f93\u7684\u80fd\u529b\uff0c\u4f7f\u5f97\u66f4\u591a\u7684\u6570\u636e\u53ef\u4ee5\u5728\u5355\u4e2a\u62a5\u6587\u4e2d\u8fdb\u884c\u4f20\u8f93\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u53cc\u6bd4\u7279\u7387\u6a21\u5f0f\nCAN-FD\u534f\u8bae\u5f15\u5165\u4e86\u53cc\u6bd4\u7279\u7387\u6a21\u5f0f\uff0c\u5373\u5728\u4ef2\u88c1\u6bb5\u4f7f\u7528\u6807\u79f0\u6bd4\u7279\u7387(\u6700\u9ad81 Mbit/s)\u800c\u5728\u6570\u636e\u6bb5\u4f7f\u7528\u66f4\u9ad8\u7684\u6570\u636e\u6bd4\u7279\u7387(\u6700\u9ad85 Mbit/s)\u3002\u8fd9\u79cd\u6a21\u5f0f\u53ef\u4ee5\u5728\u4fdd\u8bc1\u517c\u5bb9\u6027\u7684\u540c\u65f6\uff0c\u63d0\u9ad8\u6570\u636e\u4f20\u8f93\u901f\u7387\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6539\u8fdb\u7684\u5faa\u73af\u5197\u4f59\u6821\u9a8c\u548c\u586b\u5145\u4f4d\u8ba1\u6570\u5668\nCAN-FD\u534f\u8bae\u91c7\u7528\u4e86\u6539\u8fdb\u7684\u5faa\u73af\u5197\u4f59\u6821\u9a8c(CRC)\u548c\u586b\u5145\u4f4d\u8ba1\u6570\u5668(SBC)\uff0c\u4ee5\u63d0\u9ad8\u9519\u8bef\u68c0\u6d4b\u80fd\u529b\u3002\u8fd9\u4e9b\u6539\u8fdb\u589e\u5f3a\u4e86\u6570\u636e\u7684\u5b8c\u6574\u6027\u548c\u53ef\u9760\u6027\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u53d6\u6d88\u8fdc\u7a0b\u5e27\u7684\u652f\u6301\n\u4e3a\u7b80\u5316\u5e27\u7ed3\u6784\uff0cCAN-FD\u534f\u8bae\u53d6\u6d88\u4e86\u8fdc\u7a0b\u5e27\u7684\u652f\u6301\u3002\u8fd9\u610f\u5473\u7740\u5728CAN-FD\u7f51\u7edc\u4e2d\uff0c\u901a\u4fe1\u662f\u901a\u8fc7\u6570\u636e\u5e27\u8fdb\u884c\u7684\uff0c\u4e0d\u518d\u9700\u8981\u8fdc\u7a0b\u5e27\u7684\u63a7\u5236\u548c\u8bf7\u6c42\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u63a5\u53e3\u8bf4\u660e",children:"\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img-20241009-1",src:c(19011).A+"",width:"1186",height:"733"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"RDK X5 \u63d0\u4f9b\u4e86 CAN \u901a\u4fe1\u63a5\u53e3\uff0c\u5e76\u914d\u5907\u4e86\u4e00\u4e2a 120 \u6b27\u59c6\u7ec8\u7aef\u7535\u963b\u5f00\u5173\uff0c\u5f53\u9700\u8981\u542f\u7528\u7ec8\u7aef\u7535\u963b\u65f6\uff0c\u53ea\u9700\u95ed\u5408\u8be5\u5f00\u5173\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7aef\u5b50\u63a5\u53e3\u578b\u53f7\uff1aSH1.0 1X3P"}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,s.jsx)(e.p,{children:"\u5982\u679c\u8ddd\u79bb\u8fc7\u957f\uff08\u5927\u4e8e1\u7c73\uff09\uff0c\u901f\u7387\u8fc7\u5927\uff08\u5927\u4e8e125Kbps\uff09\uff0c\u9700\u8981\u95ed\u5408 RDK X5 \u7684\u7ec8\u7aef\u7535\u963b\u5f00\u5173\uff0c\u5bf9\u7aef\u8bbe\u5907\u4e5f\u8981\u4f7f\u80fd120\u6b27\u59c6\u7684\u7535\u963b\u3002\u8fd9\u6837\u505a\u4f1a\u6d88\u9664\u4fe1\u53f7\u53cd\u5c04\uff0c\u4fdd\u8bc1\u603b\u7ebf\u7684\u7a33\u5b9a\u901a\u4fe1\u3002"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6a21\u5757\u7b80\u4ecb",children:"\u6a21\u5757\u7b80\u4ecb"}),"\n",(0,s.jsx)(e.p,{children:"RDK X5\u96c6\u6210\u4e86TCAN4550\nTCAN4550\u662f\u5e26\u6709\u96c6\u6210 CAN FD \u6536\u53d1\u5668\u7684 CAN FD \u63a7\u5236\u5668\uff0c\u652f\u6301\u9ad8\u8fbe 8Mbps \u7684\u6570\u636e\u901f\u7387\u3002\u6b64 CAN FD \u63a7\u5236\u5668\u7b26\u5408 ISO11898-1:2015 \u9ad8\u901f\u63a7\u5236\u5668\u5c40\u57df\u7f51 (CAN) \u6570\u636e\u94fe\u8def\u5c42\u7684\u89c4\u8303\uff0c\u5e76\u6ee1\u8db3 ISO11898\u20132:2016 \u9ad8\u901fCAN \u89c4\u8303\u7684\u7269\u7406\u5c42\u8981\u6c42\u3002TCAN4550 \u901a\u8fc7\u4e32\u884c\u5916\u8bbe\u63a5\u53e3 (SPI) \u5728 CAN \u603b\u7ebf\u548c\u7cfb\u7edf\u5904\u7406\u5668\u4e4b\u95f4\u63d0\u4f9b\u4e86\u4e00\u4e2a\u63a5\u53e3\uff0c\u540c\u65f6\u652f\u6301\u7ecf\u5178 CAN \u548c CAN FD\uff0c\u5e76\u4e3a\u4e0d\u652f\u6301CAN FD \u7684\u5904\u7406\u5668\u5b9e\u73b0 \u7aef\u53e3\u6269\u5c55\u6216 CAN \u652f\u6301\u3002TCAN4550 \u63d0\u4f9b CAN FD \u6536\u53d1\u5668\u529f\u80fd\uff1a\u4f20\u8f93\u5230\u603b\u7ebf\u7684\u5dee\u5206\u4f20\u8f93\u80fd\u529b\u548c\u4ece\u603b\u7ebf\u63a5\u6536\u7684\u5dee\u5206\u63a5\u6536\u80fd\u529b\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u63011M\u7684CAN 2M\u7684CAN FD"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9a71\u52a8\u6307\u5357",children:"\u9a71\u52a8\u6307\u5357"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"dts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'&spi5 {\n  status = "okay";\n  pinctrl-names = "default";\n  pinctrl-0 = <&pinctrl_spi5 &lsio_gpio0_7 &lsio_gpio0_12>;\n\n  tcan4x5x: tcan4x5x@0 {\n    compatible = "ti,tcan4x5x";\n    reg = <0>;\n    #address-cells = <1>;\n    #size-cells = <1>;\n    spi-max-frequency = <10000000>;\n    bosch,mram-cfg = <0x0 0 0 16 0 0 1 1>;\n    interrupt-parent = <&ls_gpio0_porta>;\n    interrupts = <12 IRQ_TYPE_EDGE_FALLING>;\n    reset-gpios = <&ls_gpio0_porta 7 GPIO_ACTIVE_HIGH>;\n  };\n};\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u9a71\u52a8\u4ee3\u7801"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kernel\\drivers\\net\\can\\m_can\\tcan4x5x-core.c\n"})}),"\n",(0,s.jsx)(e.h2,{id:"can-utils\u5de5\u5177\u4ecb\u7ecd",children:"can-utils\u5de5\u5177\u4ecb\u7ecd"}),"\n",(0,s.jsx)(e.p,{children:"can-utils \u662f\u4e00\u5957\u7528\u4e8eLinux\u64cd\u4f5c\u7cfb\u7edf\u7684\u5f00\u6e90\u5de5\u5177\uff0c\u4e13\u95e8\u7528\u6765\u5904\u7406\u4e0eCAN\uff08Controller Area Network\uff09\u603b\u7ebf\u76f8\u5173\u7684\u4efb\u52a1\u3002CAN\u603b\u7ebf\u5e7f\u6cdb\u5e94\u7528\u4e8e\u6c7d\u8f66\u548c\u5de5\u4e1a\u81ea\u52a8\u5316\u4e2d\uff0c\u7528\u4e8e\u8bbe\u5907\u4e4b\u95f4\u7684\u901a\u8baf\u3002\n\u8fd9\u4e2a\u5de5\u5177\u96c6\u63d0\u4f9b\u4e86\u591a\u79cd\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e\u53d1\u9001\u3001\u63a5\u6536\u548c\u5904\u7406CAN\u7f51\u7edc\u4e0a\u7684\u6570\u636e\u3002\u6bd4\u5982\uff1a\ncansend\uff1a\u53d1\u9001\u5355\u4e2aCAN\u5e27\u3002\ncandump\uff1a\u6355\u83b7\u5e76\u663e\u793a\u7ecf\u8fc7CAN\u63a5\u53e3\u7684\u6570\u636e\u3002\ncanplayer\uff1a\u91cd\u653ecandump\u8bb0\u5f55\u7684\u6570\u636e\u3002\ncansniffer\uff1a\u663e\u793aCAN\u6570\u636e\u7684\u53d8\u5316\u3002\ncan-utils \u8fd8\u5305\u62ec\u4e86\u4e00\u4e9b\u7528\u4e8e\u9ad8\u7ea7\u529f\u80fd\u7684\u5de5\u5177\uff0c\u6bd4\u5982\u8bbe\u7f6eCAN\u786c\u4ef6\u8fc7\u6ee4\u5668\uff0c\u6216\u8005\u8c03\u8bd5CAN\u8bbe\u5907\u548c\u7f51\u7edc\u7684\u5de5\u5177\u3002\u8fd9\u4e9b\u5de5\u5177\u901a\u8fc7\u547d\u4ee4\u884c\u754c\u9762\u63d0\u4f9b\uff0c\u53ef\u4ee5\u7075\u6d3b\u5730\u96c6\u6210\u5230\u811a\u672c\u548c\u81ea\u52a8\u5316\u7cfb\u7edf\u4e2d\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"1. candump"}),"\n\u663e\u793a\u3001\u8fc7\u6ee4\u5e76\u8bb0\u5f55CAN\u6570\u636e"]}),"\n",(0,s.jsx)(e.p,{children:"\u57fa\u672c\u7528\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"candump can0\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u663e\u793a\u901a\u8fc7 can0 \u63a5\u53e3\u7684\u6240\u6709CAN\u6570\u636e\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fc7\u6ee4\u7279\u5b9aID\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"candump can0,123:7FF\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u663e\u793aID\u4e3a123\u7684CAN\u5e27\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8bb0\u5f55\u6570\u636e\u5230\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"candump -l can0\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8fd9\u5c06\u628a\u901a\u8fc7 can0 \u7684\u6570\u636e\u8bb0\u5f55\u5230\u6587\u4ef6\u4e2d\uff0c\u9ed8\u8ba4\u6587\u4ef6\u540d\u683c\u5f0f\u4e3a candump-\u65e5\u671f.log\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"2. canplayer"}),"\ncanplayer \u7528\u4e8e\u56de\u653e\u7528 candump \u5f55\u5236\u7684CAN\u6570\u636e\u65e5\u5fd7\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u57fa\u672c\u7528\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"canplayer -I candump.log\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5c06\u56de\u653e\u6587\u4ef6 candump.log \u4e2d\u8bb0\u5f55\u7684CAN\u6570\u636e\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"3. cansend"}),"\n\u7528\u6765\u53d1\u9001\u6307\u5b9a\u7684CAN\u5e27"]}),"\n",(0,s.jsx)(e.p,{children:"\u57fa\u672c\u7528\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cansend can0 123#1122334455667788\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5411 can0 \u63a5\u53e3\u53d1\u9001\u4e00\u4e2aID\u4e3a123\u7684CAN\u5e27\uff0c\u6570\u636e\u5185\u5bb9\u4e3a 1122334455667788\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"4. cangen"}),"\n\u751f\u6210\u968f\u673a\u6216\u7279\u5b9a\u89c4\u5219\u7684CAN\u6d41\u91cf\uff0c\u7528\u4e8e\u6d4b\u8bd5\u6216\u6a21\u62df\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u57fa\u672c\u7528\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cangen can0 -I 1A -L 8 -D i -g 10 -n 100\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728 can0 \u4e0a\u751f\u6210100\u4e2aID\u4e3a1A\uff0c\u957f\u5ea6\u4e3a8\u5b57\u8282\u7684\u9012\u589e\u6570\u636e\u5305\uff0c\u6bcf\u4e2a\u5305\u4e4b\u95f4\u95f4\u969410\u6beb\u79d2\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"5. cansequence"}),"\n\u53d1\u9001\u4e00\u7cfb\u5217\u5177\u6709\u9012\u589e\u8f7d\u8377\u7684CAN\u5e27\uff0c\u5e76\u68c0\u67e5\u662f\u5426\u6709\u4e22\u5e27\u73b0\u8c61\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u57fa\u672c\u7528\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cansequence can0\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728 can0 \u4e0a\u53d1\u9001\u5e76\u68c0\u67e5\u4e00\u7cfb\u5217\u9012\u589e\u8f7d\u8377\u7684CAN\u5e27\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"6. cansniffer"}),"\n\u7528\u4e8e\u663e\u793aCAN\u6570\u636e\u7684\u53d8\u5316\uff0c\u8fd9\u5bf9\u4e8e\u8c03\u8bd5\u548c\u7406\u89e3\u6570\u636e\u6d41\u975e\u5e38\u6709\u5e2e\u52a9\u3002\n\u57fa\u672c\u7528\u6cd5\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cansniffer can0\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u76d1\u63a7\u5e76\u663e\u793a can0 \u63a5\u53e3\u4e0aCAN\u6570\u636e\u7684\u4efb\u4f55\u53d8\u5316\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6d4b\u8bd5\u6307\u5357",children:"\u6d4b\u8bd5\u6307\u5357"}),"\n",(0,s.jsx)(e.h3,{id:"\u56de\u73af\u6d4b\u8bd5",children:"\u56de\u73af\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:"\u914d\u7f6ecan\u603b\u7ebf\u4f4d\u901f\u7387\u548c\u56de\u73af\u6a21\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ip link set down can0\nip link set can0 type can bitrate 125000\nip link set can0 type can loopback on\nip link set up can0\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770bcan0\u914d\u7f6e\u4fe1\u606f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ip -details link show can0\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img-20241009-2",src:c(57032).A+"",width:"1280",height:"194"})}),"\n",(0,s.jsx)(e.p,{children:"\u7ee7\u7eed\u8f93\u5165\u63a5\u6536\u6307\u4ee4(\u540e\u53f0\u63a5\u6536\uff0c\u4e0d\u80fd\u963b\u585e\u4e32\u53e3\uff0c\u540e\u7eed\u8fd8\u9700\u8981\u8f93\u5165\u53d1\u9001\u6307\u4ee4)\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"candump can0 -L &\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53d1\u9001\u6d4b\u8bd5\u8f93\u5165\uff0c\u6b63\u5e38\u7684\u60c5\u51b5\u4e0b\u5c06\u7acb\u5373\u63a5\u6536\u5230\u6d4b\u8bd5\u6570\u636e\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cansend can0 123#1122334455667788\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6d4b\u8bd5\u7ed3\u679c\uff1a\n",(0,s.jsx)(e.img,{alt:"img-20241009-3",src:c(89073).A+"",width:"749",height:"86"})]}),"\n",(0,s.jsx)(e.h3,{id:"canfd\u56de\u73af\u6d4b\u8bd5",children:"CANFD\u56de\u73af\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:"\u4ef2\u88c1\u6bb5\u6ce2\u7279\u7387\u4e3a500K\uff0c\u6570\u636e\u573a\u6ce2\u7279\u7387\u4e3a2M"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ip link set can0 down\nip link set can0 type can bitrate 500000 dbitrate 2000000  fd on\nip link set can0 type can loopback on\nip link set can0 up\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53d1\u9001\uff0c\u63a5\u6536CAN FD\u6570\u636e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"candump can0 -L &\ncansend can0 123##300112233445566778899aabbccddeeff\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u53cc\u8bbe\u5907\u901a\u4fe1\u6d4b\u8bd5",children:"\u53cc\u8bbe\u5907\u901a\u4fe1\u6d4b\u8bd5"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u786c\u4ef6\u8fde\u63a5"}),"\n",(0,s.jsx)(e.img,{alt:"img-20241009-4",src:c(60862).A+"",width:"1011",height:"819"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"GND\u63a5GND L\u63a5L H\u63a5H"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6d4b\u8bd5\u6307\u4ee4"}),"\n\u4e24\u53f0\u8bbe\u5907\u914d\u7f6e\u76f8\u540c\u7684can\u603b\u7ebf\u4f4d\u901f\u7387"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ip link set down can0\nip link set can0 type can bitrate 125000\nip link set up can0\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u53f0\u8bbe\u5907\u63a5\u6536"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"candump can0 -L\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u53f0\u8bbe\u5907\u53d1\u9001"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cansend can0 123#1122334455667788\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5e94\u7528\u6307\u5357",children:"\u5e94\u7528\u6307\u5357"}),"\n",(0,s.jsx)(e.p,{children:"Linux \u63d0\u4f9b\u4e86SocketCAN \u63a5\u53e3\uff0c\u4f7f\u5f97 CAN \u603b\u7ebf\u901a\u4fe1\u8fd1\u4f3c\u4e8e\u548c\u4ee5\u592a\u7f51\u7684\u901a\u4fe1\uff0c\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u63a5\u53e3 \u66f4\u52a0\u901a\u7528\uff0c\u4e5f\u66f4\u52a0\u7075\u6d3b\u3002\u4f7f\u7528socketCAN\u5c31\u50cf\u4f7f\u7528TCP/IP\u4e00\u6837\u3002\n\u8fd9\u91cc\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u6536\u53d1\u4f8b\u7a0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u9996\u5148\uff0c\u914d\u7f6ecan\u603b\u7ebf\u4f4d\u901f\u7387\u548c\u56de\u73af\u6a21\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ip link set down can0\nip link set can0 type can bitrate 125000\nip link set can0 type can loopback on\nip link set up can0\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7f16\u5199\u7a0b\u5e8f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <unistd.h>\n#include <linux/can.h>\n#include <linux/can/raw.h>\n#include <sys/socket.h>\n#include <net/if.h>\n#include <sys/ioctl.h>\n#include <fcntl.h>\n\nint main() {\n  int sock;\n  struct sockaddr_can addr;\n  struct can_frame frame;\n\n  // \u521b\u5efa Socket\n  sock = socket(PF_CAN, SOCK_RAW, CAN_RAW);\n  if (sock < 0) {\n      perror("Socket");\n      return 1;\n  }\n\n  // \u83b7\u53d6 can0 \u63a5\u53e3\n  struct ifreq ifr;\n  strcpy(ifr.ifr_name, "can0");\n  ioctl(sock, SIOCGIFINDEX, &ifr);\n\n  // \u7ed1\u5b9a Socket\n  addr.can_family = PF_CAN;\n  addr.can_ifindex = ifr.ifr_ifindex;\n  bind(sock, (struct sockaddr *)&addr, sizeof(addr));\n\n  // \u53d1\u9001\u6d88\u606f\n  frame.can_id = 0x123;\n  frame.can_dlc = 4;\n  memcpy(frame.data, "\\xde\\xad\\xbe\\xef", 4);\n  write(sock, &frame, sizeof(struct can_frame));\n\n  // \u63a5\u6536\u6d88\u606f\n  while (1) {\n      int nbytes = read(sock, &frame, sizeof(struct can_frame));\n      if (nbytes > 0) {\n          printf("Received: ID: 0x%X Data: ", frame.can_id);\n          for (int i = 0; i < frame.can_dlc; i++) {\n              printf("%02X ", frame.data[i]);\n          }\n          printf("\\n");\n      }\n  }\n\n  close(sock);\n  return 0;\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7f16\u8bd1\u548c\u8fd0\u884c\n\u4fdd\u5b58\u4ee3\u7801\u5230",(0,s.jsx)(e.code,{children:"can_loopback.c"}),"\u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u7f16\u8bd1\u7a0b\u5e8f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"gcc -o can_loopback can_loopback.c\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd0\u884c\u7a0b\u5e8f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo ./can_loopback\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0a\u4ee3\u7801\u4f1a\u53d1\u9001\u4e00\u6761 CAN \u6d88\u606f\uff0c\u5e76\u4e0d\u65ad\u63a5\u6536\u5e76\u6253\u5370\u63a5\u6536\u5230\u7684\u6d88\u606f\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},19011:(n,e,c)=>{c.d(e,{A:()=>s});const s=c.p+"assets/images/img-20241009-1-df79e2478230c1f512e3b70478e86776.png"},57032:(n,e,c)=>{c.d(e,{A:()=>s});const s=c.p+"assets/images/img-20241009-2-a8e89d8c8d2a68f2542c2f0432c88892.png"},89073:(n,e,c)=>{c.d(e,{A:()=>s});const s="data:image/png;base64,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"},60862:(n,e,c)=>{c.d(e,{A:()=>s});const s=c.p+"assets/images/img-20241009-4-1df1ee0777684ba8c0122001050cfa10.png"},28453:(n,e,c)=>{c.d(e,{R:()=>d,x:()=>a});var s=c(96540);const l={},i=s.createContext(l);function d(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);