"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2666],{28926:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var t=n(74848),d=n(28453);const s={sidebar_position:5},c="LCD Display Usage",r={id:"Advanced_development/hardware_development/rdk_x3_module/display",title:"LCD Display Usage",description:"The RDK X3 Module carrier board provides one MIPI DSI interface, supporting the connection of various LCD screens. The following example uses a 4.3-inch MIPI LCD to illustrate the screen connection and usage.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/01_hardware_development/rdk_x3_module/display.md",sourceDirName:"07_Advanced_development/01_hardware_development/rdk_x3_module",slug:"/Advanced_development/hardware_development/rdk_x3_module/display",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x3_module/display",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/07_Advanced_development/01_hardware_development/rdk_x3_module/display.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Camera Usage",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x3_module/camera"},next:{title:"Parts List",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x3_module/accessory"}},i={},a=[];function l(e){const o={admonition:"admonition",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"lcd-display-usage",children:"LCD Display Usage"}),"\n",(0,t.jsx)(o.p,{children:"The RDK X3 Module carrier board provides one MIPI DSI interface, supporting the connection of various LCD screens. The following example uses a 4.3-inch MIPI LCD to illustrate the screen connection and usage."}),"\n",(0,t.jsx)(o.p,{children:"The screen connection is as shown in the following diagram:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"image-mipi-dsi-lcd1",src:n(89087).A+"",width:"832",height:"402"})}),"\n",(0,t.jsx)(o.admonition,{title:"Caution",type:"caution",children:(0,t.jsx)(o.p,{children:"It is strictly prohibited to plug or unplug the screen when the development board is not powered off, as it may cause short circuits and damage to the screen module."})}),"\n",(0,t.jsxs)(o.p,{children:["Since the RDK X3 Module system defaults to HDMI output, it needs to be switched to LCD display mode through commands. First, execute the following command to back up the ",(0,t.jsx)(o.code,{children:"DTB"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"sudo cp /boot/hobot/hobot-x3-cm.dtb /boot/hobot/hobot-x3-cm_backup.dtb\n"})}),"\n",(0,t.jsx)(o.p,{children:"Execute the following command to determine the current display type:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"sudo fdtget /boot/hobot/hobot-x3-cm.dtb /chosen bootargs\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Taking ",(0,t.jsx)(o.code,{children:"HDMI"})," as an example, executing the above command will print:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"sunrise@ubuntu:~$ sudo fdtget /boot/hobot/hobot-x3-cm.dtb /chosen bootargs\nearlycon loglevel=8 kgdboc=ttyS0 video=hobot:x3sdb-hdmi\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Execute the following command to modify the ",(0,t.jsx)(o.code,{children:"chosen"})," node:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:'sudo fdtput -t s /boot/hobot/hobot-x3-cm.dtb /chosen bootargs "earlycon loglevel=8 kgdboc=ttyS0 video=hobot:cm480p"\n'})}),"\n",(0,t.jsx)(o.p,{children:"Execute the following command to print the modified node and confirm that the modification was successful:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"sudo fdtget /boot/hobot/hobot-x3-cm.dtb /chosen bootargs\n"})}),"\n",(0,t.jsx)(o.p,{children:"Enter the following command to restart the development board:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"sync\nsudo reboot\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The display mode has been switched from ",(0,t.jsx)(o.code,{children:"HDMI"})," to ",(0,t.jsx)(o.code,{children:"DSI"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["If you want to switch back to ",(0,t.jsx)(o.code,{children:"HDMI"})," display, after entering the kernel, execute the following command:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"sudo cp /boot/hobot/hobot-x3-cm_backup.dtb /boot/hobot/hobot-x3-cm.dtb\nsync\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Then enter ",(0,t.jsx)(o.code,{children:"sudo reboot"})," to restart the development board."]})]})}function h(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},89087:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/image-mipi-dsi-lcd1-0908127b1e49e1d6eb51f35e67d99810.png"},28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>r});var t=n(96540);const d={},s=t.createContext(d);function c(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);