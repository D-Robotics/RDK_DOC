"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4407],{10523:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=o(74848),t=o(28453),i=o(93859),s=o(19365);const a={},c="Intelligent Voice",l={id:"Robot_development/boxs/function/hobot_audio",title:"Intelligent Voice",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/hobot_audio.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hobot_audio",permalink:"/rdk_doc/en/Robot_development/boxs/function/hobot_audio",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/hobot_audio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hand Keypoint Detection",permalink:"/rdk_doc/en/Robot_development/boxs/function/hand_lmk_detection"},next:{title:"Monocular 3D Indoor Detection",permalink:"/rdk_doc/en/Robot_development/boxs/function/mono3d_indoor_detection"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Connect the audio board",id:"connect-the-audio-board",level:3},{value:"Interface connection",id:"interface-connection",level:4},{value:"Circular microphone array",id:"circular-microphone-array",level:4},{value:"Linear Microphone Array",id:"linear-microphone-array",level:4},{value:"Power Check",id:"power-check",level:4},{value:"Configure the Audio Board",id:"configure-the-audio-board",level:4},{value:"Usage",id:"usage",level:2},{value:"Result Analysis",id:"result-analysis",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"intelligent-voice",children:"Intelligent Voice"}),"\n","\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The D-Robotics intelligent voice algorithm adopts a local offline mode, subscribes to audio data and sends it to BPU for processing, and then publishes messages such as ",(0,r.jsx)(n.strong,{children:"wake-up, command word recognition"}),", ",(0,r.jsx)(n.strong,{children:"DOA\uff08Direction of Arrival\uff09"}),", and ",(0,r.jsx)(n.strong,{children:"ASR\uff08Automatic Speech Recognition\uff09"}),". The implementation of intelligent voice function corresponds to the ",(0,r.jsx)(n.strong,{children:"hobot_audio"})," package of TogetheROS.Bot, which is suitable for the circular and linear four-microphone arrays supported by RDK."]}),"\n",(0,r.jsxs)(n.p,{children:["Code repository:  (",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_audio.git",children:"https://github.com/D-Robotics/hobot_audio.git"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Application scenarios: The intelligent voice algorithm can recognize wake-up words and custom command words in audio, interpret speech content as corresponding instructions or convert it into text, and can achieve functions such as voice control and speech translation. It is mainly used in areas such as smart home, intelligent cockpit, and smart wearables."}),"\n",(0,r.jsxs)(n.p,{children:["Example of voice-controlled car movement: ",(0,r.jsx)(n.a,{href:"../../apps/car_audio_control",children:"Voice-controlled car movement"})]}),"\n",(0,r.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Platform"}),(0,r.jsx)(n.th,{children:"System"}),(0,r.jsx)(n.th,{children:"Function"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X3, RDK X5"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,r.jsx)(n.td,{children:"Start the audio module algorithm and display the results in the terminal"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Note: Only supports RDK X3."})}),"\n",(0,r.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The RDK has been burned with the  Ubuntu 20.04/22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The TogetheROS.Bot has been successfully installed on the RDK."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The intelligent voice algorithm package has been successfully installed on the RDK, installation command:"}),"\n",(0,r.jsxs)(i.A,{groupId:"tros-distro",children:[(0,r.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-hobot-audio\n"})})}),(0,r.jsx)(s.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-humble-hobot-audio\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect the circular or linear four-microphone audio board to the RDK according to the following method."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"connect-the-audio-board",children:"Connect the audio board"}),"\n",(0,r.jsx)(n.h4,{id:"interface-connection",children:"Interface connection"}),"\n",(0,r.jsx)(n.h4,{id:"circular-microphone-array",children:"Circular microphone array"}),"\n",(0,r.jsx)(n.p,{children:"The circular microphone board is an integrated design, as shown in the following image:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"cir_mic_board",src:o(88083).A+"",width:"720",height:"540"})}),"\n",(0,r.jsx)(n.p,{children:"Purchase link:"}),"\n",(0,r.jsxs)(n.p,{children:["(",(0,r.jsx)(n.a,{href:"https://www.waveshare.net/shop/Audio-Driver-HAT.htm",children:"https://www.waveshare.net/shop/Audio-Driver-HAT.htm"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Connection steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect the microphone board to the RDK X3 40PIN GPIO interface. After the connection, it looks like the following image:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"circle_mic_full",src:o(86660).A+"",width:"720",height:"540"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect the power supply, network cable, etc."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"linear-microphone-array",children:"Linear Microphone Array"}),"\n",(0,r.jsx)(n.p,{children:"The linear microphone array consists of an audio adapter board and a linear microphone board. The physical diagram and connection instructions are as follows:"}),"\n",(0,r.jsx)(n.p,{children:"Audio adapter board:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"connect_board",src:o(39123).A+"",width:"600",height:"210"})}),"\n",(0,r.jsx)(n.p,{children:"Linear microphone board:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"line_mic",src:o(28088).A+"",width:"600",height:"150"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"First, connect the RDK X3 to the audio adapter board, aligning the pins of both devices. The connection is shown in the following figure:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"link",src:o(24674).A+"",width:"1097",height:"815"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Next, connect the RDK X3 to the microphone array board. The adapter board FPC interface is connected to the microphone array board with a 15-pin FFC cable.The connection is shown in the following figure:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"link_mic",src:o(5574).A+"",width:"1164",height:"928"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect the AEC line."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"mic_line",src:o(85740).A+"",width:"1175",height:"939"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect the power supply, network cable, etc."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"power-check",children:"Power Check"}),"\n",(0,r.jsxs)(n.p,{children:["After connecting the RDK to the microphone array, power it on. Use the command ",(0,r.jsx)(n.code,{children:"i2cdetect -r -y 0"})," to check the device connection. If the connection is successful, three addresses should be read on the I2C bus. See the following figure:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"detect_mic",src:o(75967).A+"",width:"547",height:"161"})}),"\n",(0,r.jsx)(n.p,{children:"If no devices are detected, please check the device connection again."}),"\n",(0,r.jsx)(n.h4,{id:"configure-the-audio-board",children:"Configure the Audio Board"}),"\n",(0,r.jsxs)(n.p,{children:["For the first-time use of the audio board, use ",(0,r.jsx)(n.code,{children:"srpi-config"})," to configure it. Refer to the RDK user manual's ",(0,r.jsx)(n.a,{href:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x3/hardware",children:"Audio Adapter Board"})," section for configuration instructions."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["After the smart voice hobot_audio package starts running, it will capture audio from the microphone array and send the captured audio data to the smart voice algorithm SDK module for intelligent processing. It will output wake-up events, command words, ASR results, and other smart information. Wake-up events and command words are published as ",(0,r.jsx)(n.code,{children:"audio_msg::msg::SmartAudioData"})," type messages, while ASR results are published as ",(0,r.jsx)(n.code,{children:"std_msgs::msg::String"})," type messages."]}),"\n",(0,r.jsx)(n.p,{children:"The specific process is shown in the following diagram:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"hobot_audio",src:o(70249).A+"",width:"1073",height:"442"})}),"\n",(0,r.jsxs)(n.p,{children:["The smart voice function supports ASR recognition after denoising the raw audio. The default wake word and command words are defined in the ",(0,r.jsx)(n.em,{children:"config/hrsc/cmd_word.json"})," file under the root directory of the smart voice function module, which are set in chinese as:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "cmd_word": [\n        "D-Robotics \u4f60\u597d",\n        "\u5411\u524d\u8d70",\n        "\u5411\u540e\u9000",\n        "\u5411\u5de6\u8f6c",\n        "\u5411\u53f3\u8f6c",\n        "\u505c\u6b62\u8fd0\u52a8"\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The wake-up word and command words can be configured according to your needs. Changing the wake-up word may affect the default wake-up word and command word effects. It is recommended to use Chinese wake-up words and command words, preferably phrases that are easy to pronounce, with a length of 3 to 5 characters."}),"\n",(0,r.jsx)(n.p,{children:"In addition, the smart voice function supports outputting the DOA (Direction of Arrival) of the sound source, measured in degrees. For a circular microphone array, the DOA angle range is 0 degrees to 360 degrees, and for a linear microphone array, the DOA angle range is 0 degrees to 180 degrees."}),"\n",(0,r.jsx)(n.p,{children:"The relative position relationship of the angles is closely related to the installation position of the microphones. Here are the DOA angle diagrams for a circular microphone array and a linear microphone array:"}),"\n",(0,r.jsxs)(n.p,{children:["DOA angle diagram for circular microphone array:\n",(0,r.jsx)(n.img,{alt:"doa_circle",src:o(82881).A+"",width:"1200",height:"900"})]}),"\n",(0,r.jsxs)(n.p,{children:["DOA angle diagram for linear microphone array:\n",(0,r.jsx)(n.img,{alt:"doa_line",src:o(59703).A+"",width:"1200",height:"320"})]}),"\n",(0,r.jsx)(n.p,{children:"To run the hobot_audio package on the RDK:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Copy the configuration file"}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"tros-distro",children:[(0,r.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(s.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_audio/config/ .\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Confirm the configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["The default configuration of the configuration file ",(0,r.jsx)(n.em,{children:"config/audio_config.json"})," is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "micphone_enable": 1,\n   "micphone_name": "hw:0,0",\n   "micphone_rate": 16000,\n   "micphone_chn": 8,\n   "micphone_buffer_time": 0,\n   "micphone_nperiods": 4,\n   "micphone_period_size": 512,\n   "voip_mode": 0,\n   "mic_type": 0,\n   "asr_mode": 0,\n```"asr_channel": 3,\n   "save_audio": 0\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The configuration that needs to be confirmed includes: microphone device number, microphone array type, and whether ASR results need to be published."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"microphone device number"})," is set through the ",(0,r.jsx)(n.code,{children:"micphone_name"}),' field, with the default value being "hw:0,0", which represents audio device Card0 Device0. The device number can be checked using the command ',(0,r.jsx)(n.code,{children:"ls /dev/snd"}),', such as: "pcmC0D1c"; the last letter "c" represents capture device, C0 represents Card0, D1 represents Device1, and this parameter can be modified to "hw:0,1".']}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"microphone array type"})," is set through the ",(0,r.jsx)(n.code,{children:"mic_type"})," field, with the default value being ",(0,r.jsx)(n.code,{children:"0"}),", which represents the circular microphone array. If a linear microphone array is used, this field should be modified to ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ASR output"})," is set through the ",(0,r.jsx)(n.code,{children:"asr_mode"})," field, with the default value being ",(0,r.jsx)(n.code,{children:"0"}),", which means no ASR results will be outputted. To enable ASR output, this field needs to be changed to ",(0,r.jsx)(n.code,{children:"1"})," or ",(0,r.jsx)(n.code,{children:"2"}),", where ",(0,r.jsx)(n.code,{children:"1"})," means performing ASR recognition and publishing results once after wake-up, and ",(0,r.jsx)(n.code,{children:"2"})," means continuously performing ASR recognition and publishing results."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configure the tros.b environment and launch the application"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"tros-distro",children:[(0,r.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n\n# Disable debug print information\nexport GLOG_minloglevel=3\n\n# Start the launch file\nros2 launch hobot_audio hobot_audio.launch.py\n"})})}),(0,r.jsx)(s.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n\n# Disable debug print information\nexport GLOG_minloglevel=3\n\n# Start the launch file\nros2 launch hobot_audio hobot_audio.launch.py\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,r.jsx)(n.p,{children:"The following information is outputted on the terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"alsa_device_init, snd_pcm_open. handle((nil)), name(hw:0,0), direct(1), mode(0)\nsnd_pcm_open succeed. name(hw:0,0), handle(0x557d6e4d00)\nRate set to 16000Hz (requested 16000Hz)\nBuffer size range from 16 to 20480\nPeriod size range from 16 to 10240\nRequested period size 512 frames\nPeriods = 4\nwas set period_size = 512\nwas set buffer_size = 2048\nalsa_device_init. hwparams(0x557d6e4fa0), swparams(0x557d6e5210)\n"})}),"\n",(0,r.jsx)(n.p,{children:"The above log shows that the audio device initialization is successful, and the audio device is opened for audio collection."}),"\n",(0,r.jsx)(n.p,{children:'When a person speaks the Chinese command words "D-Robotics \u4f60\u597d", "\u5411\u524d\u8d70", "\u5411\u5de6\u8f6c", "\u5411\u53f3\u8f6c", "\u5411\u540e\u9000" one by one next to the microphone, the speech algorithm SDK outputs the recognition results after intelligent processing, and the log shows the following:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"recv hrsc sdk event wakeup success, wkp count is 1\n[WARN] [1657869437.600230208] [hobot_audio]: recv event:0\nrecv hrsc sdk doa data: 100\nrecv hrsc sdk command data: Go forward\n[WARN] [1657869443.870029101] [hobot_audio]: recv cmd word: Walk forward\nrecv hrsc sdk doa data: 110\nrecv hrsc sdk command data: Turn left\n[WARN] [1657869447.623147766] [hobot_audio]: recv cmd word: Turn left\nrecv hrsc sdk doa data: 100\nrecv hrsc sdk command data: Turn right\n[WARN] [1657869449.865822772] [hobot_audio]: recv cmd word: Turn right\nrecv hrsc sdk doa data: 110\nrecv hrsc sdk command data: Move backward\n[WARN] [1657869452.313969277] [hobot_audio]: recv cmd word: Move backward\n"})}),"\n",(0,r.jsx)(n.p,{children:'log shows that the voice commands "\u5411\u524d\u8d70", "\u5411\u5de6\u8f6c", "\u5411\u53f3\u8f6c"and "\u5411\u540e\u9000" are recognized, and the DOA angle information is output, e.g. "recv hrsc sdk doa data: 110" indicates that the DOA angle is 110 degrees.'}),"\n",(0,r.jsxs)(n.p,{children:["The default topic name for the smart audio messages published by hobot_audio is: ",(0,r.jsx)(n.strong,{children:"/audio_smart"}),". In another terminal, you can use the command ",(0,r.jsx)(n.code,{children:"ros2 topic list"})," to query the information of this topic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ ros2 topic list\n/audio_smart\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If ASR output is enabled, the message topic published is: ",(0,r.jsx)(n.strong,{children:"/audio_asr"}),", and the ",(0,r.jsx)(n.code,{children:"ros2 topic list"})," result is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ ros2 topic list\n/audio_smart\n/audio_asr\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,o)=>{o.d(n,{A:()=>s});o(96540);var r=o(34164);const t={tabItem:"tabItem_Ymn6"};var i=o(74848);function s(e){let{children:n,hidden:o,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,s),hidden:o,children:n})}},93859:(e,n,o)=>{o.d(n,{A:()=>w});var r=o(96540),t=o(34164),i=o(86641),s=o(56347),a=o(205),c=o(38874),l=o(24035),d=o(82993);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:o}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:o,attributes:r,default:t}}=e;return{value:n,label:o,attributes:r,default:t}}))}(o);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:o}=e;const t=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:o=!1,groupId:t}=e,i=u(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,h]=m({queryString:o,groupId:t}),[f,g]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(o);return[t,(0,r.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:t}),A=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{A&&c(A)}),[A]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=o(92303);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=o(74848);function x(e){let{className:n,block:o,selectedValue:r,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const n=e.currentTarget,o=c.indexOf(n),t=a[o].value;t!==r&&(l(n),s(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;n=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;n=c[o]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":o},n),children:a.map((e=>{let{value:n,label:o,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,t.A)("tabs__item",A.tabItem,i?.className,{"tabs__item--active":r===n}),children:o??n},n)}))})}function j(e){let{lazy:n,children:o,selectedValue:t}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",A.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},88083:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/cir_mic_board-299053b171a46de148b746ea68de7498.png"},86660:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/circle_mic_full-0c04a3d529c0eabf05a3277ce1d720ad.png"},39123:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/connect_board-d748007deebeb933f631a1a1861fd403.jpg"},75967:(e,n,o)=>{o.d(n,{A:()=>r});const r="data:image/jpeg;base64,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"},82881:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/doa_circle-604ce4faf1ac6aaf7857bb18144207f0.jpg"},59703:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/doa_line-fdbb50d61dd7705a25a8973a58ee3aeb.jpg"},70249:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/hobot_audio-a1b14ea69b2182440406dbaf6b2fedcc.jpg"},28088:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/line_mic-784bb2f15b844070e3148c6f67641fd9.jpg"},24674:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/link-31de8f0fa4dde05d1ccfbca2fb0af5b1.jpg"},5574:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/link_mic-5a1e6d4a33f7d1034f6bb7e1de0d2e6d.jpg"},85740:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/mic_line-1263ef616c15538f04be2b94f2215331.jpg"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var r=o(96540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);