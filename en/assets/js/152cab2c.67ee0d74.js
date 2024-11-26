"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9576],{76080:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(74848),r=s(28453);const i={sidebar_position:5},o="2.5 Autostart Programs on Boot",a={id:"System_configuration/self_start",title:"2.5 Autostart Programs on Boot",description:"Video//www.youtube.com/watch?v=9NwFttgPeE&list=PLSxjn4YS2IuFUWcLGj2uuCfLYnNYw6Ld&index=4",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02_System_configuration/05_self_start.md",sourceDirName:"02_System_configuration",slug:"/System_configuration/self_start",permalink:"/rdk_doc/en/System_configuration/self_start",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/02_System_configuration/05_self_start.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"2.4 Thermal Control and CPU Frequency Management",permalink:"/rdk_doc/en/System_configuration/frequency_management"},next:{title:"3 \u57fa\u7840\u5e94\u7528\u5f00\u53d1",permalink:"/rdk_doc/en/Basic_Application"}},c={},d=[{value:"Setting up Autostart Service",id:"setting-up-autostart-service",level:2},{value:"Add to rc.local service",id:"add-to-rclocal-service",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"25-autostart-programs-on-boot",children:"2.5 Autostart Programs on Boot"}),"\n",(0,n.jsxs)(t.p,{children:["Video: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=9N_wFttgPeE&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=4",children:"https://www.youtube.com/watch?v=9N_wFttgPeE&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=4"})]}),"\n",(0,n.jsx)(t.p,{children:"There are multiple ways to add autostart programs in Ubuntu system. This section provides two methods as reference."}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-autostart-service",children:"Setting up Autostart Service"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create a startup script"}),"\n",(0,n.jsxs)(t.p,{children:["Use any text editor and create a new startup script under the ",(0,n.jsx)(t.code,{children:"/etc/init.d"})," directory, assuming it's named ",(0,n.jsx)(t.code,{children:"your_script_name"}),". Here is an example of the script:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"#!/bin/bash\n\n### BEGIN INIT INFO\n# Provides:          your_service_name\n# Required-Start:    $all\n# Required-Stop:     \n# Default-Start:     2 3 4 5\n# Default-Stop:      0 1 6\n# Short-Description: Start your_service_name at boot time\n# Description:       Enable service provided by your_service_name\n### END INIT INFO\n\n/path/to/your/program &\n\nexit 0\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set the startup script to have execute permission"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo chmod +x /etc/init.d/your_script_name\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Use the update-rc.d command to add the script to the system's startup items"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo update-rc.d your_script_name defaults\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Enable autostart using the systemctl command"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl enable your_script_name\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Restart the development board to verify if the autostart service program is running correctly"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"root@ubuntu:~# systemctl status your_script_name.service \n\u25cf your_script_name.service - LSB: Start your_service_name at boot time\n   Loaded: loaded (/etc/init.d/your_script_name; generated)\n   Active: active (exited) since Wed 2023-04-19 15:01:12 CST; 57s ago\n   Docs: man:systemd-sysv-generator(8)\n   Process: 2768 ExecStart=/etc/init.d/your_script_name start (code=exited, status=0/SUCCESS)\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"add-to-rclocal-service",children:"Add to rc.local service"}),"\n",(0,n.jsx)(t.p,{children:"rc.local is a system service used to automatically execute scripts or commands when the system starts. This service is automatically called during system startup, and it executes user-specified scripts or commands after the system has finished starting in order to perform custom configurations or operations during system startup."}),"\n",(0,n.jsx)(t.p,{children:"In earlier Linux distributions, rc.local was the last service to be run during the system startup process by default. With the popularity of systemd, rc.local is considered to be a legacy system service."}),"\n",(0,n.jsxs)(t.p,{children:["This can be achieved by adding the startup command at the end of the ",(0,n.jsx)(t.code,{children:"sudo vim /etc/rc.local"})," file, for example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'#!/bin/bash -e\n\n# rc.local\n# This script is executed at the end of each multiuser runlevel.\n# Make sure that the script will "exit 0" on success or any other\n# value on error.\n#\n# In order to enable or disable this script just change the execution\n# bits.\n#\n# By default this script does nothing.\n\n# Insert what you need\n\nexit 0\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);