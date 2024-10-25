"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4383],{12186:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(74848),d=s(28453);const i={sidebar_position:1},t="3.4.1 \u53c2\u8003\u793a\u4f8b\uff08python\uff09",c={id:"Basic_Application/multi_media/pydev_vio_demo",title:"3.4.1 \u53c2\u8003\u793a\u4f8b\uff08python\uff09",description:"\u672c\u7ae0\u8282\u5c06\u901a\u8fc7\u89c6\u9891\u6d41\u89e3\u7801\u7b49\u793a\u4f8b\u7a0b\u5e8f\uff0c\u4ecb\u7ecd D-Robotics Python \u8bed\u8a00\u7684 hobot_vio \u56fe\u50cf\u591a\u5a92\u4f53\u5e93\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u5305\u62ec\u89c6\u9891\u62c9\u6d41\u3001\u7f29\u653e\u53ca\u7f16\u89e3\u7801\u7b49\u64cd\u4f5c\u3002",source:"@site/docs/03_Basic_Application/04_multi_media/pydev_vio_demo.md",sourceDirName:"03_Basic_Application/04_multi_media",slug:"/Basic_Application/multi_media/pydev_vio_demo",permalink:"/rdk_doc/Basic_Application/multi_media/pydev_vio_demo",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/03_Basic_Application/04_multi_media/pydev_vio_demo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3.3.6 SPI\u5e94\u7528",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/spi"},next:{title:"3.4.2 \u53c2\u8003\u793a\u4f8b\uff08C++\uff09",permalink:"/rdk_doc/Basic_Application/multi_media/cdev_demo"}},o={},l=[{value:"\u89c6\u9891\u6d41\u89e3\u7801",id:"\u89c6\u9891\u6d41\u89e3\u7801",level:2},{value:"\u8fd0\u884c\u65b9\u6cd5",id:"\u8fd0\u884c\u65b9\u6cd5",level:3},{value:"\u9009\u9879\u53c2\u6570\u8bf4\u660e",id:"\u9009\u9879\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"341-\u53c2\u8003\u793a\u4f8bpython",children:"3.4.1 \u53c2\u8003\u793a\u4f8b\uff08python\uff09"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u7ae0\u8282\u5c06\u901a\u8fc7\u89c6\u9891\u6d41\u89e3\u7801\u7b49\u793a\u4f8b\u7a0b\u5e8f\uff0c\u4ecb\u7ecd D-Robotics Python \u8bed\u8a00\u7684 ",(0,r.jsx)(n.code,{children:"hobot_vio"})," \u56fe\u50cf\u591a\u5a92\u4f53\u5e93\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u5305\u62ec\u89c6\u9891\u62c9\u6d41\u3001\u7f29\u653e\u53ca\u7f16\u89e3\u7801\u7b49\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u89c6\u9891\u6d41\u89e3\u7801",children:"\u89c6\u9891\u6d41\u89e3\u7801"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8e",(0,r.jsx)(n.code,{children:"/app/pydev_demo/08_decode_rtsp_stream/"})," \u76ee\u5f55\u4e0b\uff0c\u6240\u5b9e\u73b0\u7684\u529f\u80fd\u6709\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7 opencv \u6253\u5f00 rtsp \u7801\u6d41\uff0c\u83b7\u53d6\u5230\u7801\u6d41\u6570\u636e"}),"\n",(0,r.jsx)(n.li,{children:"\u8c03\u7528\u89c6\u9891\u89e3\u7801\u63a5\u53e3\u5bf9\u7801\u6d41\u8fdb\u884c\u89e3\u7801"}),"\n",(0,r.jsx)(n.li,{children:"\u628a\u89e3\u7801\u540e\u7684\u89c6\u9891\u901a\u8fc7 HDMI \u663e\u793a"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8fd0\u884c\u65b9\u6cd5",children:"\u8fd0\u884c\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u793a\u4f8b\u8fd0\u884c\u4f9d\u8d56 rtsp \u6d41\uff0c\u5982\u7528\u6237\u4e0d\u65b9\u4fbf\u642d\u5efa rtsp \u63a8\u6d41\u670d\u52a1\uff0c\u53ef\u4f7f\u7528\u7cfb\u7edf\u9884\u7f6e\u7684\u63a8\u6d41\u670d\u52a1\u3002\u8be5\u670d\u52a1\u4f1a\u628a",(0,r.jsx)(n.code,{children:"1080P_test.h264"}),"\u89c6\u9891\u6587\u4ef6\u5904\u7406\u6210 rtsp \u6d41\uff0curl \u5730\u5740\u4e3a",(0,r.jsx)(n.code,{children:"rtsp://127.0.0.1/1080P_test.h264"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u53ef\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u542f\u52a8\u63a8\u6d41\u670d\u52a1\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd /app/pydev_demo/08_decode_rtsp_stream/\nroot@ubuntu:/app/pydev_demo/08_decode_rtsp_stream# sudo ./live555MediaServer &\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u670d\u52a1\u6b63\u5e38\u542f\u52a8\u540e\u7684log\u5982\u4e0b\uff0c \u6ce8\u610f\u6700\u540e\u4e00\u884c\u7684 ",(0,r.jsx)(n.code,{children:"We use port 80"}),", \u8bf4\u660ertsp\u670d\u52a1\u8fd0\u884c\u572880\u7aef\u53e3\uff0c\u5b83\u6709\u53ef\u80fd\u5b58\u57288000\u548c8080\u7684\u60c5\u51b5\uff0c\u5728\u540e\u9762\u8bbe\u7f6ertsp url\u7684\u65f6\u5019\u9700\u8981\u6839\u636e\u5b9e\u9645\u4f7f\u7528\u7684\u7aef\u53e3\u53f7\u505a\u4fee\u6539\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'root@ubuntu:/app/pydev_demo/08_decode_rtsp_stream#\nLIVE555 Media Server version 1.01 (LIVE555 Streaming Media library version 2020.07.09).\nPlay streams from this server using the URL\n        rtsp://192.168.127.10/<filename>\nwhere <filename> is a file present in the current directory.\nEach file\'s type is inferred from its name suffix:\n        ".264" => a H.264 Video Elementary Stream file\n... \u7701\u7565 ...\n(We use port 80 for optional RTSP-over-HTTP tunneling, or for HTTP live streaming (for indexed Transport Stream files only).)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"./decode_rtsp_stream.py "})," \u547d\u4ee4\uff0c\u542f\u52a8\u62c9\u6d41\u89e3\u7801\u7a0b\u5e8f\uff0c\u5e76\u5c06 url \u5730\u5740\u3001\u5206\u8fa8\u7387\u3001\u5e27\u7387\u7b49\u4fe1\u606f\u901a\u8fc7\u63a7\u5236\u53f0\u8f93\u51fa\uff0clog \u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:/app/pydev_demo/08_decode_rtsp_stream# ./decode_rtsp_stream.py\n['rtsp://127.0.0.1/1080P_test.h264']\nRTSP stream frame_width:1920, frame_height:1080\nDecoder(0, 1) return:0 frame count: 0\nCamera vps return:0\nDecode CHAN: 0 FPS: 30.34\nDisplay FPS: 31.46\nDecode CHAN: 0 FPS: 25.00\nDisplay FPS: 24.98\nRTSP stream frame_width:1920, frame_height:1080\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540e\uff0c\u89c6\u9891\u6d41\u4f1a\u901a\u8fc7 HDMI \u63a5\u53e3\u8f93\u51fa\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u663e\u793a\u5668\u9884\u89c8\u89c6\u9891\u753b\u9762\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u9009\u9879\u53c2\u6570\u8bf4\u660e",children:"\u9009\u9879\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u793a\u4f8b\u7a0b\u5e8f",(0,r.jsx)(n.code,{children:"decode_rtsp_stream.py"}),"\u53ef\u901a\u8fc7\u4fee\u6539\u542f\u52a8\u53c2\u6570\uff0c\u8bbe\u7f6ertsp\u5730\u5740\u3001\u5f00\u5173HDMI\u8f93\u51fa\u3001\u5f00\u5173AI\u63a8\u7406\u7b49\u529f\u80fd\u3002\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"-u"}),"  \uff1a \u8bbe\u7f6ertsp\u7f51\u7edc\u5730\u5740\uff0c\u652f\u6301\u8f93\u5165\u591a\u4e2a\u5730\u5740\uff0c\u5982\uff1a",(0,r.jsx)(n.code,{children:'-u "rtsp://127.0.0.1/1080P_test.h264;rtsp://192.168.1.10:8000/1080P_test.h264"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"-d"}),"  \uff1a \u5f00\u542f\u3001\u5173\u95edHDMI\u7684\u663e\u793a\u8f93\u51fa\uff0c\u4e0d\u8bbe\u7f6e\u65f6\u9ed8\u8ba4\u5f00\u542f\u663e\u793a\uff0c",(0,r.jsx)(n.code,{children:"-d 0 "})," \u5173\u95ed\u663e\u793a\uff0c\u591a\u8def\u89e3\u7801\u65f6\u53ea\u663e\u793a\u7b2c\u4e00\u8def\u7684\u89c6\u9891"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"-a"}),"  \uff1a \u5f00\u542f\u3001\u5173\u95edAI\u7b97\u6cd5\u63a8\u7406\u529f\u80fd\uff0c\u4e0d\u8bbe\u7f6e\u65f6\u9ed8\u8ba4\u5173\u95ed\u7b97\u6cd5\uff0c",(0,r.jsx)(n.code,{children:"-a"}),"\u5f00\u542f\u7b97\u6cd5\u63a8\u7406\uff0c\u8fd0\u884c\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u51e0\u79cd\u5e38\u7528\u7684\u542f\u52a8\u65b9\u5f0f"})}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u7801\u9ed8\u8ba4\u6d41\u5e76\u5f00\u542fHDMI\u663e\u793a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo ./decode_rtsp_stream.py\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u7801\u9ed8\u8ba4\u6d41\u5e76\u5173\u95edHDMI\u663e\u793a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo ./decode_rtsp_stream.py -d 0\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u7801\u5355\u8defrtsp\u6d41"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'sudo ./decode_rtsp_stream.py -u "rtsp://x.x.x.x/xxx"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u7801\u591a\u8defrtsp\u6d41"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'sudo ./decode_rtsp_stream.py -u "rtsp://x.x.x.x/xxx;rtsp://x.x.x.x/xxx"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u7801\u9ed8\u8ba4\u6d41\u5e76\u4f7f\u80fdAI\u63a8\u7406"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo ./decode_rtsp_stream.py -a\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u63a8\u6d41\u670d\u52a1\u5668\u63a8\u9001\u7684rtsp\u7801\u6d41\u91cc\u9762\u9700\u8981\u5305\u542b",(0,r.jsx)(n.code,{children:"PPS"}),"\u548c",(0,r.jsx)(n.code,{children:"SPS"}),"\u53c2\u6570\u4fe1\u606f\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u5f00\u53d1\u677f\u89e3\u7801\u5f02\u5e38\uff0c\u9519\u8bef\u4fe1\u606f\u5982\u4e0b\uff1a\n",(0,r.jsx)(n.img,{alt:"image-20220728110439753",src:s(36203).A+"",width:"960",height:"88"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"ffmpeg"}),"\u6253\u5f00",(0,r.jsx)(n.code,{children:".mp4 .avi"}),"\u7b49\u683c\u5f0f\u7684\u89c6\u9891\u6587\u4ef6\u63a8\u6d41\u65f6\uff0c\u9700\u8981\u6dfb\u52a0",(0,r.jsx)(n.code,{children:"-vbsf h264_mp4toannexb"}),"\u9009\u9879\uff0c\u4ee5\u6dfb\u52a0\u7801\u6d41\u7684",(0,r.jsx)(n.code,{children:"PPS"})," \u548c",(0,r.jsx)(n.code,{children:"SPS"}),"\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ffmpeg -re -stream_loop -1 -i xxx.mp4 -vcodec copy -vbsf h264_mp4toannexb -f rtsp rtsp://192.168.1.195:8554/h264_stream\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"rtsp\u89c6\u9891\u6d41\u76ee\u524d\u4ec5\u652f\u6301 1080P \u5206\u8fa8\u7387"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u652f\u6301\u4f7f\u7528 vlc \u8f6f\u4ef6\u8fdb\u884c rtsp \u63a8\u6d41\uff0c\u539f\u56e0\u662f vlc \u8f6f\u4ef6\u4e0d\u652f\u6301\u6dfb\u52a0",(0,r.jsx)(n.code,{children:"PPS"}),"\u548c",(0,r.jsx)(n.code,{children:"SPS"}),"\u4fe1\u606f"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},36203:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20220728110439753-0072af456addd613837816e45592b0b7.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(96540);const d={},i=r.createContext(d);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);