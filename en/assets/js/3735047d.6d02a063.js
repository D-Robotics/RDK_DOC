"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1620],{11315:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-20220511181747071-f88dd92886b5dbee1a81d6860a234007.png"},22271:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-20230914173433676-910a18e64094f36eaa059069d5754575.png"},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var t=o(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},37690:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/connect-848436bd48f00d7849df7ad81fe2a804.png"},43519:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=o(74848),s=o(28453);const r={sidebar_position:1},a="8.1 Hardware and System",i={id:"FAQ/hardware_and_system",title:"8.1 Hardware and System",description:"For certified accessories and purchasing links, please refer to the Certified Accessories List.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/08_FAQ/01_hardware_and_system.md",sourceDirName:"08_FAQ",slug:"/FAQ/hardware_and_system",permalink:"/rdk_doc/en/FAQ/hardware_and_system",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/08_FAQ/01_hardware_and_system.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"8. \u5e38\u89c1\u95ee\u9898",permalink:"/rdk_doc/en/FAQ"},next:{title:"8.2 Interface Class",permalink:"/rdk_doc/en/FAQ/interface"}},d={},l=[{value:"What is D-Robotics Developer Kit (RDK)?",id:"what-is-d-robotics-developer-kit-rdk",level:2},{value:"How to check the system version number?",id:"how-to-check-the-system-version-number",level:2},{value:"Considerations for plugging and unplugging the camera:",id:"considerations-for-plugging-and-unplugging-the-camera",level:2},{value:"How to connect the serial cable?",id:"how-to-connect-the-serial-cable",level:2},{value:"What are the power requirements for RDK X3?",id:"what-are-the-power-requirements-for-rdk-x3",level:2},{value:"Does RDK X3 have a recommended SD card?",id:"does-rdk-x3-have-a-recommended-sd-card",level:2},{value:"How to connect F37 and GC4663 MIPI cameras?",id:"how-to-connect-f37-and-gc4663-mipi-cameras",level:2},{value:"How to view the CPU, BPU, and other running statuses of RDK X3?",id:"how-to-view-the-cpu-bpu-and-other-running-statuses-of-rdk-x3",level:2},{value:"How to set up auto-startup?",id:"how-to-set-up-auto-startup",level:2},{value:"No display after power on the development board",id:"no-display-after-power-on-the-development-board",level:2},{value:"Common phenomena of abnormal power supply for development board",id:"common-phenomena-of-abnormal-power-supply-for-development-board",level:2},{value:"Phenomenon 1: Restarting during Uboot kernel boot",id:"phenomenon-1-restarting-during-uboot-kernel-boot",level:3},{value:"Phenomenon 2: Already running in the kernel, restarts after a few seconds",id:"phenomenon-2-already-running-in-the-kernel-restarts-after-a-few-seconds",level:3},{value:"Other Phenomena:",id:"other-phenomena",level:3},{value:"Default Accounts of the Development Board",id:"default-accounts-of-the-development-board",level:2},{value:"Mounting NTFS File System",id:"mounting-ntfs-file-system",level:2},{value:"Supported by vscode Tool",id:"supported-by-vscode-tool",level:2},{value:"adb Debugging Function",id:"adb-debugging-function",level:2},{value:"apt update Update Fail",id:"apt-update-update-fail",level:2},{value:"File Transfer Methods for Development Boards",id:"file-transfer-methods-for-development-boards",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"81-hardware-and-system",children:"8.1 Hardware and System"}),"\n",(0,t.jsxs)(n.p,{children:["For certified accessories and purchasing links, please refer to the ",(0,t.jsx)(n.a,{href:"https://developer.d-robotics.cc/rdk_doc/en/Advanced_development/hardware_development/rdk_x3/accessory",children:"Certified Accessories List"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, please refer to the ",(0,t.jsx)(n.a,{href:"/rdk_doc/en/FAQ/hardware_and_system",children:"Frequently Asked Questions"})," section in the D-Robotics RDK User Manual."]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-d-robotics-developer-kit-rdk",children:"What is D-Robotics Developer Kit (RDK)?"}),"\n",(0,t.jsxs)(n.p,{children:["D-Robotics Developer Kit ",(0,t.jsx)(n.a,{href:"https://developer.d-robotics.cc/rdk_doc/",children:"RDK"}),", is a developer kit for robotics based on D-Robotics's intelligent chips, including ",(0,t.jsx)(n.strong,{children:"RDK X3"}),", ",(0,t.jsx)(n.strong,{children:"RDK X3 Module"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-check-the-system-version-number",children:"How to check the system version number?"}),"\n",(0,t.jsxs)(n.p,{children:["After the system installation, log in to the system and use the command ",(0,t.jsx)(n.code,{children:"apt list --installed | grep hobot"})," to check the version of the system's core function packages. Use the command ",(0,t.jsx)(n.code,{children:"cat /etc/version"})," to check the major version number of the system."]}),"\n",(0,t.jsx)(n.p,{children:"The system information for version 2.0.0 is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~# apt list --installed | grep hobot\n\nWARNING: apt does not have a stable CLI interface. Use with caution in scripts.\n\nhobot-boot/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-bpu-drivers/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-camera/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-configs/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-display/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-dnn/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-dtb/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-io-samples/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-io/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-kernel-headers/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-models-basic/unknown,now 1.0.1 arm64 [installed]\nhobot-multimedia-dev/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-multimedia-samples/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-multimedia/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-sp-samples/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-spdev/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-utils/unknown,now 2.0.0-20230530181103 arm64 [installed]\nhobot-wifi/unknown,now 2.0.0-20230530181103 arm64 [installed]\nroot@ubuntu:~#\nroot@ubuntu:~# cat /etc/version\n2.0.0\nroot@ubuntu:~#\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"considerations-for-plugging-and-unplugging-the-camera",children:"Considerations for plugging and unplugging the camera:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"It is strictly prohibited to plug or unplug the camera while the development board is powered on, as it can easily damage the camera module."})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-connect-the-serial-cable",children:"How to connect the serial cable?"}),"\n",(0,t.jsx)(n.p,{children:"One end of the serial cable (white) is connected to the RDK X3. Since the interface has a groove, the correct orientation is usually maintained. The other end is connected to the serial port adapter board. Pay close attention to the connection diagram below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(37690).A+"",width:"1069",height:"788"})}),"\n",(0,t.jsx)(n.h2,{id:"what-are-the-power-requirements-for-rdk-x3",children:"What are the power requirements for RDK X3?"}),"\n",(0,t.jsxs)(n.p,{children:["RDK X3 is powered through a USB Type C interface and is compatible with QC and PD fast charging protocols. It is recommended to use a power adapter that supports QC and PD fast charging protocols, or at least a power adapter with ",(0,t.jsx)(n.strong,{children:"5V DC 2A"})," output to supply power to the development board."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note: Please do not use the USB interface of a PC to power the development board, as it may cause abnormal operation of the board due to insufficient power supply (such as no HDMI output (completely black screen) after RDK X3 is powered on, the green light is not off, after connecting the serial port, the system keeps rebooting repeatedly and cannot enter the operating system)"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"does-rdk-x3-have-a-recommended-sd-card",children:"Does RDK X3 have a recommended SD card?"}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to use a high-speed C10 SD card with a capacity of at least 16GB. Older cards may have issues with booting the image."}),"\n",(0,t.jsxs)(n.p,{children:["Kingston:  ",(0,t.jsx)(n.code,{children:"https://item.jd.com/25263496192.html"})]}),"\n",(0,t.jsxs)(n.p,{children:["SanDisk:  `",(0,t.jsx)(n.a,{href:"https://item.jd.com/1875992.html#crumb-wrap%3E",children:"https://item.jd.com/1875992.html#crumb-wrap>"})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-connect-f37-and-gc4663-mipi-cameras",children:"How to connect F37 and GC4663 MIPI cameras?"}),"\n",(0,t.jsxs)(n.p,{children:["The F37 and GC4663 camera modules are connected to the development board via a 24-pin FPC cable with opposite side connectors. ",(0,t.jsx)(n.strong,{children:"Note that the blue side of the cable should be facing up when inserting it into the connector"}),". The connection diagram for the F37 camera is shown below:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(84485).A+"",width:"450",height:"297"})}),"\n",(0,t.jsx)(n.p,{children:"After a successful connection, power on the board and execute the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /app/ai_inference/03_mipi_camera_sample\nsudo python3 mipi_camera.py\n"})}),"\n",(0,t.jsx)(n.p,{children:'The HDMI output of the algorithm rendering result is shown in the following image, which detects a "teddy bear", a "cup", and a "vase" in the sample image.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(11315).A+"",width:"1499",height:"884"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Enter the command: i2cdetect -y -r 1   \nF37\uff1a\n     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:          -- -- -- -- -- -- -- -- -- -- -- -- -- \n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n30: -- -- -- -- -- -- -- -- -- -- -- UU -- -- -- -- \n40: 40 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n70: -- -- -- -- -- -- -- --   \n\nGC4663\uff1a\n     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:          -- -- -- -- -- -- -- -- -- -- -- -- -- \n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n20: -- -- -- -- -- -- -- -- -- 29 -- -- -- -- -- -- \n30: -- -- -- -- -- -- -- -- -- -- -- UU -- -- -- -- \n40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n70: -- -- -- -- -- -- -- --                         \n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-view-the-cpu-bpu-and-other-running-statuses-of-rdk-x3",children:"How to view the CPU, BPU, and other running statuses of RDK X3?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo hrut_somstatus\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-set-up-auto-startup",children:"How to set up auto-startup?"}),"\n",(0,t.jsx)(n.p,{children:'You can achieve auto-startup functionality by adding commands to the end of the file "/etc/rc.local" using the following command:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/rc.local\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then add the following lines at the end of the file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash -e\n# \n# rc.local\n#re\n# This script is executed at the end of each multiuser runlevel.\n# Make sure that the script will "exit 0" on success or any other\n# value on error.\n#\n# In order to enable or disable this script just change the execution\n# bits.\n#\n# By default this script does nothing.\n\n#!/bin/sh\n\nchmod a=rx,u+ws /usr/bin/sudo\nchown sunrise:sunrise /home/sunrise\n\nwhich "hrut_count" >/dev/null 2>&1\nif [ $? -eq 0 ]; then\n        hrut_count 0\nfi\n\n# Insert what you need\n'})}),"\n",(0,t.jsx)(n.h2,{id:"no-display-after-power-on-the-development-board",children:"No display after power on the development board"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"[Issue]"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"After power on the development board, the monitor continuously has no output, and connecting to the serial port indicates that the system is repeatedly rebooting or stuck at the uboot command line."}),"\n"]}),"\n",(0,t.jsx)("font",{color:"Green",children:"[Answer]"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Insufficient power supply causing repeated reboots, replace the 5V/3A adapter that meets the requirements of the development board, it is recommended to use the officially recommended adapter."}),"\n",(0,t.jsx)(n.li,{children:"Poor quality USB cable may cause power instability and abnormal power loss, resulting in repeated reboots."}),"\n",(0,t.jsx)(n.li,{children:"UART misoperation causing it to be stuck at the uboot, power cycle the device to recover."}),"\n",(0,t.jsx)(n.li,{children:"Micro SD card image format error, when the serial port prompts the following log, it needs to remake the image."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20221124194527634",src:o(53074).A+"",width:"540",height:"202"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Micro SD card quality issue, when the serial port prompts the following log, it means the Micro SD card is damaged and needs to be replaced."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20221124194636213",src:o(80500).A+"",width:"612",height:"176"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20221124194721750",src:o(87241).A+"",width:"637",height:"128"})}),"\n",(0,t.jsx)(n.h2,{id:"common-phenomena-of-abnormal-power-supply-for-development-board",children:"Common phenomena of abnormal power supply for development board"}),"\n",(0,t.jsx)(n.p,{children:"If the status LED of the development board does not turn off or blink continuously after power on, and no display is shown on the HDMI monitor, it is recommended to first check if the power supply is normal."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use a power adapter that supports ",(0,t.jsx)(n.strong,{children:"5V 3A"})," to power the development board, it is recommended to use the power adapter model recommended in the ",(0,t.jsx)(n.a,{href:"https://developer.d-robotics.cc/rdk_doc/en/Advanced_development/hardware_development/rdk_x3/accessory",children:"Basic Accessories list"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If using your own charger, please choose a USB Type C cable from a reputable brand and ensure it meets the requirement of ",(0,t.jsx)(n.strong,{children:"5V 3A"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Do not directly power the development board from the USB port of a computer."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To determine whether the failure to start properly is caused by a power supply problem, we need to connect the development board to a serial port and observe the startup log. Currently, the following phenomena can clearly determine a power supply abnormality."}),"\n",(0,t.jsx)(n.h3,{id:"phenomenon-1-restarting-during-uboot-kernel-boot",children:"Phenomenon 1: Restarting during Uboot kernel boot"}),"\n",(0,t.jsx)(n.p,{children:"At this time, it is in the Uboot stage, most of the tasks of Uboot have been completed, but when loading the kernel, device tree, etc. from the SD card to memory, or when jumping into the kernel for execution, the development board restarts abnormally."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230914173433676",src:o(22271).A+"",width:"643",height:"540"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230914173911690",src:o(64312).A+"",width:"745",height:"287"})}),"\n",(0,t.jsx)(n.h3,{id:"phenomenon-2-already-running-in-the-kernel-restarts-after-a-few-seconds",children:"Phenomenon 2: Already running in the kernel, restarts after a few seconds"}),"\n",(0,t.jsx)(n.p,{children:"At this time, the kernel has been loaded and running, and the loading and initialization of the kernel and drivers are in progress, but the development board restarts abnormally."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230914174123619",src:o(64295).A+"",width:"883",height:"446"})}),"\n",(0,t.jsx)(n.h3,{id:"other-phenomena",children:"Other Phenomena:"}),"\n",(0,t.jsxs)(n.p,{children:["The phenomenon of insufficient power supply can only be analyzed through serial port logs. If no ",(0,t.jsx)(n.strong,{children:"errors"})," or ",(0,t.jsx)(n.strong,{children:"warnings"})," are observed during the startup process in the log, and the development board directly prints ",(0,t.jsx)(n.code,{children:"NOTICE: fast_boot: 0"})," and restarts, it can be basically determined that the issue is due to insufficient power supply."]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, the phenomena caused by insufficient power supply are easily confused with other phenomena such as SD card recognition failure or hardware damage. It is not easy to make a clear judgment without connecting to the serial port to view the logs. It is recommended to use the power adapter models recommended in the ",(0,t.jsx)(n.a,{href:"/hardware_development/rdk_x3/accessory#basic_accessories",children:"basic accessory list"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"default-accounts-of-the-development-board",children:"Default Accounts of the Development Board"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010Question\u3011"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What types of accounts are supported by default on the development board?"}),"\n"]}),"\n",(0,t.jsx)("font",{color:"Green",children:"\u3010Answer\u3011"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The development board supports two types of accounts by default, as follows:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Default account: username ",(0,t.jsx)(n.code,{children:"sunrise"}),", password ",(0,t.jsx)(n.code,{children:"sunrise"})]}),"\n",(0,t.jsxs)(n.li,{children:["Root account: username ",(0,t.jsx)(n.code,{children:"root"}),", password ",(0,t.jsx)(n.code,{children:"root"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mounting-ntfs-file-system",children:"Mounting NTFS File System"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010Question\u3011"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How to support read-write mode after mounting the NTFS file system?"}),"\n"]}),"\n",(0,t.jsx)("font",{color:"Green",children:"\u3010Answer\u3011"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["After installing the ntfs-3g package, you can mount the NTFS file system to support write mode. The installation command is as follows:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt -y install ntfs-3g\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"supported-by-vscode-tool",children:"Supported by vscode Tool"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010Question\u3011"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Does the development board support the ",(0,t.jsx)(n.code,{children:"vscode"})," development tool?"]}),"\n"]}),"\n",(0,t.jsx)("font",{color:"Green",children:"\u3010Answer\u3011"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The development board does not support local installation of ",(0,t.jsx)(n.code,{children:"vscode"}),". Users can remotely connect to the development board through the ",(0,t.jsx)(n.code,{children:"ssh-remote"})," plugin on the PC."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"adb-debugging-function",children:"adb Debugging Function"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010Question\u3011"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How to enable the adb debugging function on the development board?"}),"\n"]}),"\n",(0,t.jsx)("font",{color:"Green",children:"\u3010Answer\u3011"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"adbd"})," service is enabled by default in Ubuntu system. Users only need to install the adb tool on the computer to use it. The method can refer to ",(0,t.jsx)(n.a,{href:"https://developer.d-robotics.cc/forumDetail/88859074455714818",children:"bootloader image update"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"apt-update-update-fail",children:"apt update Update Fail"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"[Question]"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When running the ",(0,t.jsx)(n.code,{children:"apt update"})," command in Ubuntu system, the following error is prompted:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Reading package lists... Done\nE: Could not get lock /var/lib/apt/lists/lock. It is held by process 4299 (apt-get)\nN: Be aware that removing the lock file is not a solution and may break your system.\nE: Unable to lock directory /var/lib/apt/lists/\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("font",{color:"Green",children:"[Answer]"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The automatic update program in Ubuntu system conflicts with the operation ",(0,t.jsx)(n.code,{children:"apt update"})," by the user. You can kill the automatic update process and try again, for example, ",(0,t.jsx)(n.code,{children:"kill 4299"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"file-transfer-methods-for-development-boards",children:"File Transfer Methods for Development Boards"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"[Question]"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What are the methods for file transfer between development boards and computers?"}),"\n"]}),"\n",(0,t.jsx)("font",{color:"Green",children:"[Answer]"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"File transfer can be done through network, USB, and other methods. For network transfer, you can use ftp tools, scp command, etc. For USB transfer, you can use USB flash drive, adb, etc. Taking scp command as an example, the file transfer methods are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy a single file ",(0,t.jsx)(n.code,{children:"local_file"})," to the development board:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"scp local_file sunrise@192.168.1.10:/userdata/\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy the entire directory ",(0,t.jsx)(n.code,{children:"local_folder"})," to the development board:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"scp -r local_folder sunrise@192.168.1.10:/userdata/\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},53074:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-20221124194527634-232d982f2ae8b1307bce7022cd23052a.png"},64295:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-20230914174123619-8d88f4e38bb7554c40ffd32ff67e382d.png"},64312:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-20230914173911690-f7b3fed8462c7d626e9cf701754615b2.png"},80500:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-20221124194636213-638da636b2f5281cfa19ce4b387de02d.png"},84485:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-X3-PI-Camera-3e9b3c6e20aa63b5cae2ef3a26deeef5.png"},87241:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-20221124194721750-33277e8a6753273b130a30c0d82fe9b7.png"}}]);