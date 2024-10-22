"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3161],{5839:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=i(74848),d=i(28453);const c={sidebar_position:1},r="ifconfig",o={id:"Appendix/linux-command-manual/cmd_ifconfig",title:"ifconfig",description:"ifconfig is a command used to configure and manage network interfaces. It allows users to view and modify the configuration of network interfaces, including IP address, subnet mask, MAC address, MTU, broadcast address, point-to-point address, etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_ifconfig.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_ifconfig",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_ifconfig",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/linux-command-manual/cmd_ifconfig.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"grep command",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_grep"},next:{title:"ip",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_ip"}},t={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Option Description",id:"option-description",level:2},{value:"Common Commands",id:"common-commands",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"ifconfig",children:"ifconfig"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"ifconfig"})," is a command used to configure and manage network interfaces. It allows users to view and modify the configuration of network interfaces, including IP address, subnet mask, MAC address, MTU, broadcast address, point-to-point address, etc."]}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"ifconfig [-a] [-v] [-s] <interface> [[<AF>] <address>]\n  [add <address>[/<prefixlen>]]\n  [del <address>[/<prefixlen>]]\n  [[-]broadcast [<address>]]  [[-]pointopoint [<address>]]\n  [netmask <address>]  [dstaddr <address>]  [tunnel <address>]\n  [outfill <NN>] [keepalive <NN>]\n  [hw <HW> <address>]  [mtu <NN>]\n  [[-]trailers]  [[-]arp]  [[-]allmulti]\n  [multicast]  [[-]promisc]\n  [mem_start <NN>]  [io_addr <NN>]  [irq <NN>]  [media <type>]\n  [txqueuelen <NN>]\n  [[-]dynamic]\n  [up|down] ...\n"})}),"\n",(0,s.jsx)(e.h2,{id:"option-description",children:"Option Description"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig"}),": displays all configured and active network interfaces along with their status."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig -a"}),": displays all network interfaces, including those that are not active."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface>"}),": displays the configuration of the specified network interface."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> up"}),": activates the specified network interface."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> down"}),": deactivates the specified network interface."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> add <address>"}),": adds an IP address to the specified network interface."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> del <address>"}),": removes an IP address from the specified network interface."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> netmask <address>"}),": sets the subnet mask for the specified network interface."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> broadcast <address>"}),": sets the broadcast address."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> pointopoint <address>"}),": sets the point-to-point address."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> hw <HW> <address>"}),": sets the MAC address."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> mtu <NN>"}),": sets the MTU (Maximum Transmission Unit)."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> arp"}),": enables ARP (Address Resolution Protocol)."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> promisc"}),": enables promiscuous mode, which allows receiving all packets passing through the network interface."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> multicast"}),": enables multicast mode."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig <interface> dynamic"}),": enables dynamic configuration."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig -s"}),": displays network interface information in a concise format."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ifconfig -v"}),": displays detailed information."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"common-commands",children:"Common Commands"}),"\n",(0,s.jsx)(e.p,{children:"Common commands"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"ifconfig   # Network interface in active state\nifconfig -a  # All configured network interfaces, regardless of whether they are active\nifconfig eth0  # Display network card information for eth0\n"})}),"\n",(0,s.jsx)(e.p,{children:"Start and stop specified network card"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"ifconfig eth0 up\nifconfig eth0 down\n"})}),"\n",(0,s.jsx)(e.p,{children:"Configure IP address"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"ifconfig eth0 192.168.1.10\nifconfig eth0 192.168.1.10 netmask 255.255.255.0\nifconfig eth0 192.168.1.10 netmask 255.255.255.0 broadcast 192.168.1.255\n"})})]})}function f(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var s=i(96540);const d={},c=s.createContext(d);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);