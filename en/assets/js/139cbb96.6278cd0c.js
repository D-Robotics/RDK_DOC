"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3578],{97257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(74848),a=n(28453);const o={sidebar_position:2},r="3.1.2 Using USB Camera",c={id:"Basic_Application/Image/usb_camera",title:"3.1.2 Using USB Camera",description:"Video//www.youtube.com/watch?v=7xNgU1i2xsk&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=2",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/01_Image/usb_camera.md",sourceDirName:"03_Basic_Application/01_Image",slug:"/Basic_Application/Image/usb_camera",permalink:"/rdk_doc/en/Basic_Application/Image/usb_camera",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/03_Basic_Application/01_Image/usb_camera.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"3.1.1 Using MIPI Camera",permalink:"/rdk_doc/en/Basic_Application/Image/mipi_camera"},next:{title:"3.2.1 Audio Adapter Board On RDK X3",permalink:"/rdk_doc/en/Basic_Application/audio/audio_board_x3"}},s={},d=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Execution Method",id:"execution-method",level:2},{value:"Expected Result",id:"expected-result",level:2}];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"312-using-usb-camera",children:"3.1.2 Using USB Camera"}),"\n",(0,i.jsxs)(t.p,{children:["Video: ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=7xNgU1i2xsk&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=2",children:"https://www.youtube.com/watch?v=7xNgU1i2xsk&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=2"})]}),"\n",(0,i.jsxs)(t.p,{children:["The development board is equipped with the ",(0,i.jsx)(t.code,{children:"usb_camera_fcos.py"})," program to test the data path of the USB camera. This example will capture the image data from the USB camera in real time, then run the object detection algorithm, and finally output the merged image data and detection results through the HDMI interface."]}),"\n",(0,i.jsx)(t.h2,{id:"environment-preparation",children:"Environment Preparation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Connect the USB camera to the development board and make sure that the ",(0,i.jsx)(t.code,{children:"/dev/video8"})," device node is created."]}),"\n",(0,i.jsx)(t.li,{children:"Connect the development board to the monitor using an HDMI cable."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"execution-method",children:"Execution Method"}),"\n",(0,i.jsx)(t.p,{children:"Execute the program with the following command."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"sunrise@ubuntu:~$ cd /app/pydev_demo/02_usb_camera_sample/\nsunrise@ubuntu:/app/pydev_demo/02_usb_camera_sample$ sudo python3 ./usb_camera_fcos.py\n"})}),"\n",(0,i.jsx)(t.h2,{id:"expected-result",children:"Expected Result"}),"\n",(0,i.jsxs)(t.p,{children:["After running the program, the monitor will display the camera image and the results of the object detection algorithm (object type, confidence), as shown below:",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.img,{alt:"image-20220612110739490",src:n(24389).A+"",width:"960",height:"572"})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["For detailed code implementation instructions, please refer to the ",(0,i.jsx)(t.a,{href:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/usb_camera",children:"USB Camera Inference"})," chapter."]})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},24389:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image-20220612110739490-766f1d688b4d3fe80d31b0db8a8e8df5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);