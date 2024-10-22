"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8875],{82422:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(74848),i=s(28453);const r={sidebar_position:1},d="3.4.1 Reference Examples (python)",o={id:"Basic_Application/multi_media/pydev_vio_demo",title:"3.4.1 Reference Examples (python)",description:"In this chapter, we will introduce the usage of the hobot_vio image and multimedia library in D-Robotics Python language through examples such as video stream decoding. This includes operations such as video streaming, scaling, and encoding/decoding.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/04_multi_media/pydev_vio_demo.md",sourceDirName:"03_Basic_Application/04_multi_media",slug:"/Basic_Application/multi_media/pydev_vio_demo",permalink:"/rdk_doc/en/Basic_Application/multi_media/pydev_vio_demo",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/03_Basic_Application/04_multi_media/pydev_vio_demo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3.3.6 Using SPI",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/spi"},next:{title:"3.4.2  Reference Example \uff08C++\uff09",permalink:"/rdk_doc/en/Basic_Application/multi_media/cdev_demo"}},a={},c=[{value:"Video Stream Decoding",id:"video-stream-decoding",level:2},{value:"Running Method",id:"running-method",level:3},{value:"Option Parameter Description",id:"option-parameter-description",level:3},{value:"Precautions",id:"precautions",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"341-reference-examples-python",children:"3.4.1 Reference Examples (python)"}),"\n",(0,t.jsxs)(n.p,{children:["In this chapter, we will introduce the usage of the ",(0,t.jsx)(n.code,{children:"hobot_vio"})," image and multimedia library in D-Robotics Python language through examples such as video stream decoding. This includes operations such as video streaming, scaling, and encoding/decoding."]}),"\n",(0,t.jsx)(n.h2,{id:"video-stream-decoding",children:"Video Stream Decoding"}),"\n",(0,t.jsxs)(n.p,{children:["The example code for this is located in the ",(0,t.jsx)(n.code,{children:"/app/pydev_demo/08_decode_rtsp_stream/"})," directory. The implemented functionalities are:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open the RTSP stream using OpenCV and get the stream data."}),"\n",(0,t.jsx)(n.li,{children:"Decode the stream using the video decoding interface."}),"\n",(0,t.jsx)(n.li,{children:"Display the decoded video using HDMI."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"running-method",children:"Running Method"}),"\n",(0,t.jsxs)(n.p,{children:["This example requires an RTSP stream to run. If the user cannot set up an RTSP streaming service, they can use the system's pre-installed streaming service. This service converts the ",(0,t.jsx)(n.code,{children:"1080P_test.h264"})," video file into an RTSP stream with the URL ",(0,t.jsx)(n.code,{children:"rtsp://127.0.0.1/1080P_test.h264"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Users can start the streaming service using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /app/pydev_demo/08_decode_rtsp_stream/\nroot@ubuntu:/app/pydev_demo/08_decode_rtsp_stream# sudo ./live555MediaServer &\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the service starts successfully, the log will show ",(0,t.jsx)(n.code,{children:"We use port 80"})," in the last line, indicating that the RTSP service is running on port 80. It might also have cases where it runs on ports 8000 and 8080. When setting the RTSP URL later, you need to modify it according to the actual port number used."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:/app/pydev_demo/08_decode_rtsp_stream# \nLIVE555 Media Server version 1.01 (LIVE555 Streaming Media library version 2020.07.09).\nPlay streams from this server using the URL\n        rtsp://192.168.1.10/<filename>\nwhere <filename> is a file present in the current directory.\n...\n...\n(We use port 80 for optional RTSP-over-HTTP tunneling, or for HTTP live streaming (for indexed Transport Stream files only).)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, execute the command ",(0,t.jsx)(n.code,{children:"./decode_rtsp_stream.py"})," to start the streaming decoding program. The URL, resolution, frame rate, and other information will be displayed through the console output. The log will be as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:/app/pydev_demo/08_decode_rtsp_stream# ./decode_rtsp_stream.py \n['rtsp://127.0.0.1/1080P_test.h264']\nRTSP stream frame_width:1920, frame_height:1080\nDecoder(0, 1) return:0 frame count: 0\nCamera vps return:0\nDecode CHAN: 0 FPS: 30.34\nDisplay FPS: 31.46\nDecode CHAN: 0 FPS: 25.00\nDisplay FPS: 24.98RTSP stream frame_width:1920, frame_height:1080\n"})}),"\n",(0,t.jsx)(n.p,{children:"Finally, the video stream will be output via the HDMI interface, and users can preview the video image through a monitor."}),"\n",(0,t.jsx)(n.h3,{id:"option-parameter-description",children:"Option Parameter Description"}),"\n",(0,t.jsxs)(n.p,{children:["The sample program ",(0,t.jsx)(n.code,{children:"decode_rtsp_stream.py"})," can be modified by changing the startup parameters to set the RTSP address, switch HDMI output, switch AI inference, and other functions. The parameter descriptions are as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-u"}),": Set the RTSP network address, supports multiple addresses input, such as: ",(0,t.jsx)(n.code,{children:'-u "rtsp://127.0.0.1/1080P_test.h264;rtsp://192.168.1.10:8000/1080P_test.h264"'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-d"}),": Turn on or off the HDMI display output. If not set, the display is enabled by default. ",(0,t.jsx)(n.code,{children:"-d 0"})," disables the display. When decoding multiple streams, only the video of the first stream is displayed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"-a"}),": Turn on or off the AI algorithm inference function. If not set, the algorithm is disabled by default. ",(0,t.jsx)(n.code,{children:"-a"})," enables the algorithm inference and runs the target detection algorithm."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Several common startup methods"})}),"\n",(0,t.jsx)(n.p,{children:"Decode the default stream and enable HDMI display:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo ./decode_rtsp_stream.py\n"})}),"\n",(0,t.jsx)(n.p,{children:"Decode the default stream and disable HDMI display:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo ./decode_rtsp_stream.py -d 0\n"})}),"\n",(0,t.jsx)(n.p,{children:"Decode a single RTSP stream:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'sudo ./decode_rtsp_stream.py -u "rtsp://x.x.x.x/xxx"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Decode multiple RTSP streams:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'sudo ./decode_rtsp_stream.py -u "rtsp://x.x.x.x/xxx;rtsp://x.x.x.x/xxx"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Decode the default stream and enable AI inference:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo ./decode_rtsp_stream.py -a\n"})}),"\n",(0,t.jsx)(n.h3,{id:"precautions",children:"Precautions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The RTSP stream pushed by the streaming server needs to include the ",(0,t.jsx)(n.code,{children:"PPS"})," and ",(0,t.jsx)(n.code,{children:"SPS"})," parameter information, otherwise it will cause decoding abnormalities on the development board, and the error message is as follows:\n",(0,t.jsx)(n.img,{alt:"image-20220728110439753",src:s(36203).A+"",width:"960",height:"88"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.code,{children:"ffmpeg"})," to open video files in ",(0,t.jsx)(n.code,{children:".mp4 .avi"})," and other formats for streaming, the ",(0,t.jsx)(n.code,{children:"-vbsf h264_mp4toannexb"})," option needs to be added to add the ",(0,t.jsx)(n.code,{children:"PPS"})," and ",(0,t.jsx)(n.code,{children:"SPS"})," information of the stream. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ffmpeg -re -stream_loop -1 -i xxx.mp4 -vcodec copy -vbsf h264_mp4toannexb -f rtsp rtsp://192.168.1.195:8554/h264_stream\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The RTSP video stream currently only supports 1080p resolution."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Using VLC software for RTSP streaming is not supported because VLC software does not support adding ",(0,t.jsx)(n.code,{children:"PPS"})," and ",(0,t.jsx)(n.code,{children:"SPS"})," information."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},36203:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220728110439753-0072af456addd613837816e45592b0b7.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);