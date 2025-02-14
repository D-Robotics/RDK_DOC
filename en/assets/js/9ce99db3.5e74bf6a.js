"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7607],{28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}},49770:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/whiteboard_exported_image-48b98874a380b45bdd0274239f080a77.png"},93613:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=o(74848),r=o(28453);const s={sidebar_position:5},a="PoE Power Supply Usage",i={id:"Advanced_development/hardware_development/rdk_x5/POE",title:"PoE Power Supply Usage",description:"Currently, there are several PoE standards available, each with different voltage and power specifications. To avoid power supply issues or potential damage to the board due to incompatible PoE standards, please read the following content.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/01_hardware_development/rdk_x5/POE.md",sourceDirName:"07_Advanced_development/01_hardware_development/rdk_x5",slug:"/Advanced_development/hardware_development/rdk_x5/POE",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x5/POE",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/01_hardware_development/rdk_x5/POE.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Display Usage",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x5/display"},next:{title:"7.2. Linux\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/en/linux_development"}},d={},c=[{value:"Protocol Overview",id:"protocol-overview",level:2},{value:"Interface Usage",id:"interface-usage",level:2},{value:"PoE Hat",id:"poe-hat",level:2}];function p(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"poe-power-supply-usage",children:"PoE Power Supply Usage"}),"\n",(0,n.jsx)(t.p,{children:"Currently, there are several PoE standards available, each with different voltage and power specifications. To avoid power supply issues or potential damage to the board due to incompatible PoE standards, please read the following content."}),"\n",(0,n.jsx)(t.h2,{id:"protocol-overview",children:"Protocol Overview"}),"\n",(0,n.jsx)(t.p,{children:"Power over Ethernet (PoE) is a standardized technology that allows power to be transmitted to devices over Ethernet cables through twisted pairs."}),"\n",(0,n.jsx)(t.p,{children:"A PoE system consists of two components: Power Sourcing Equipment (PSE) and Powered Devices (PD). PSE is the device responsible for providing power over Ethernet cables, often a network switch. PD refers to any device powered by a PoE system. Typically, PD devices come with an optional external power input interface, allowing the power received from PoE to be converted into other derived power supplies (e.g., VDD)."}),"\n",(0,n.jsx)(t.p,{children:"Currently, the most common PoE protocols are IEEE 802.3af and IEEE 802.3at, which support maximum power delivery of 15W and 30W, respectively."}),"\n",(0,n.jsx)(t.h2,{id:"interface-usage",children:"Interface Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The RDK X5 supports power supply via a PoE system but is not a complete PSE or PD device. The RDK X5 acts as the ",(0,n.jsx)(t.strong,{children:"frontend of the PD device"})," and the ",(0,n.jsx)(t.strong,{children:"backend load of the PD device"}),", as shown in the diagram below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"PoE Interface Diagram",src:o(49770).A+"",width:"870",height:"810"})}),"\n",(0,n.jsx)(t.p,{children:"The RJ45 connector on the RDK X5 has an integrated transformer that outputs AC power. This connector is located next to the Ethernet port, with a 4-pin header for AC power output."}),"\n",(0,n.jsx)(t.p,{children:"As shown in Path \u2460, users should connect the 4-pin header to an external third-party PoE Hat, which feeds into the PD device circuit."}),"\n",(0,n.jsxs)(t.p,{children:["The primary function of the PoE Hat is to convert the incoming AC power into DC power. For the RDK X5, ",(0,n.jsx)(t.strong,{children:"the required DC power is 5V (MAX 5.2V)"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"As shown in Path \u2461, users should connect the DC 5V power to the 5V pin on the RDK X5's 40-pin header."}),"\n",(0,n.jsx)(t.p,{children:"Users should connect this 5V DC power to the 5V pin on the RDK X5's 40-pin header."}),"\n",(0,n.jsx)(t.h2,{id:"poe-hat",children:"PoE Hat"}),"\n",(0,n.jsxs)(t.p,{children:["When designing or selecting a PoE Hat, users should ensure that the PoE Hat supports the correct protocol standard. It is recommended to use a PoE solution that follows the ",(0,n.jsx)(t.strong,{children:"IEEE 802.3at"})," standard to ensure the reliable operation of the RDK X5 and its peripherals."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);