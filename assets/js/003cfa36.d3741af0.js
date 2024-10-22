"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[397],{36182:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var i=s(74848),c=s(28453);const d={sidebar_position:1},l="2.1 \u7f51\u7edc\u4e0e\u84dd\u7259\u914d\u7f6e",r={id:"System_configuration/network_blueteeth",title:"2.1 \u7f51\u7edc\u4e0e\u84dd\u7259\u914d\u7f6e",description:"\u672c\u7ae0\u8282\u4e3b\u8981\u4ecb\u7ecd\u5f00\u53d1\u677f\u6709\u7ebf\u3001\u65e0\u7ebf\u7f51\u7edc\u914d\u7f6e\u7684\u4fee\u6539\u65b9\u6cd5\u3002",source:"@site/docs/02_System_configuration/01_network_blueteeth.md",sourceDirName:"02_System_configuration",slug:"/System_configuration/network_blueteeth",permalink:"/rdk_doc/System_configuration/network_blueteeth",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/02_System_configuration/01_network_blueteeth.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"2. \u7cfb\u7edf\u914d\u7f6e",permalink:"/rdk_doc/System_configuration"},next:{title:"2.2 srpi-config \u5de5\u5177\u914d\u7f6e",permalink:"/rdk_doc/System_configuration/srpi-config"}},a={},t=[{value:"\u6709\u7ebf\u7f51\u7edc",id:"config_ethnet",level:2},{value:"\u4fee\u6539\u9759\u6001IP\u914d\u7f6e",id:"\u4fee\u6539\u9759\u6001ip\u914d\u7f6e",level:3},{value:"\u4fee\u6539DHCP\u914d\u7f6e",id:"\u4fee\u6539dhcp\u914d\u7f6e",level:3},{value:"\u4fee\u6539MAC\u5730\u5740\u914d\u7f6e",id:"\u4fee\u6539mac\u5730\u5740\u914d\u7f6e",level:3},{value:"\u65e0\u7ebf\u7f51\u7edc",id:"\u65e0\u7ebf\u7f51\u7edc",level:2},{value:"Station\u6a21\u5f0f",id:"station\u6a21\u5f0f",level:3},{value:"Soft AP\u6a21\u5f0f",id:"soft-ap\u6a21\u5f0f",level:3},{value:"DNS\u670d\u52a1",id:"dns\u670d\u52a1",level:2},{value:"\u7cfb\u7edf\u66f4\u65b0",id:"\u7cfb\u7edf\u66f4\u65b0",level:2},{value:"\u84dd\u7259\u914d\u7f6e",id:"\u84dd\u7259\u914d\u7f6e",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u914d\u7f51\u8fde\u63a5",id:"\u914d\u7f51\u8fde\u63a5",level:3}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"21-\u7f51\u7edc\u4e0e\u84dd\u7259\u914d\u7f6e",children:"2.1 \u7f51\u7edc\u4e0e\u84dd\u7259\u914d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u4e3b\u8981\u4ecb\u7ecd\u5f00\u53d1\u677f\u6709\u7ebf\u3001\u65e0\u7ebf\u7f51\u7edc\u914d\u7f6e\u7684\u4fee\u6539\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"config_ethnet",children:"\u6709\u7ebf\u7f51\u7edc"}),"\n",(0,i.jsxs)(n.p,{children:["Video: ",(0,i.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=11",children:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=11"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u677f\u6709\u7ebf\u7f51\u7edc\u9ed8\u8ba4\u91c7\u7528\u9759\u6001IP\u914d\u7f6e\uff0c\u521d\u59cbIP\u5730\u5740\u4e3a",(0,i.jsx)(n.code,{children:"192.168.127.10"}),"\u3002\u7528\u6237\u53ef\u901a\u8fc7\u5982\u4e0b\u65b9\u6cd5\u5b9e\u73b0\u9759\u6001\u3001DHCP\u6a21\u5f0f\u7684\u5207\u6362\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4fee\u6539\u9759\u6001ip\u914d\u7f6e",children:"\u4fee\u6539\u9759\u6001IP\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u677f\u9759\u6001\u7f51\u7edc\u914d\u7f6e\u4fdd\u5b58\u5728",(0,i.jsx)(n.code,{children:"/etc/network/interfaces"}),"\u6587\u4ef6\u4e2d\uff0c\u901a\u8fc7\u4fee\u6539",(0,i.jsx)(n.code,{children:"address"}),"\u3001",(0,i.jsx)(n.code,{children:"netmask"}),"\u3001",(0,i.jsx)(n.code,{children:"gateway"}),"\u7b49\u5b57\u6bb5\uff0c\u53ef\u5b8c\u6210\u5bf9\u9759\u6001IP\u914d\u7f6e\u7684\u4fee\u6539\uff0c",(0,i.jsx)(n.code,{children:"metric"}),"\u662f\u7f51\u7edc\u4f18\u5148\u7ea7\u914d\u7f6e\uff0c\u8bbe\u7f6e\u4e3a",(0,i.jsx)(n.code,{children:"700"}),"\u662f\u4e3a\u4e86\u8ba9\u6709\u7ebf\u7f51\u7edc\u7684\u4f18\u5148\u7ea7\u66f4\u4f4e\uff0c\u5f53\u6709\u7ebf\u548c\u65e0\u7ebf\u7f51\u7edc\u540c\u65f6\u4f7f\u80fd\u65f6\u4f18\u5148\u4f1a\u4f7f\u7528\u65e0\u7ebf\u7f51\u7edc\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/network/interfaces\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# interfaces(5) file used by ifup(8) and ifdown(8)\n# Include files from /etc/network/interfaces.d:\nsource-directory /etc/network/interfaces.d\nauto eth0\niface eth0 inet static\n    pre-up /etc/set_mac_address.sh\n    address 192.168.127.10\n    netmask 255.255.255.0\n    gateway 192.168.127.1\n    metric 700\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u547d\u4ee4\u884c\u8f93\u5165",(0,i.jsx)(n.code,{children:"sudo restart_network"}),"\u547d\u4ee4\u8ba9\u914d\u7f6e\u751f\u6548\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4fee\u6539dhcp\u914d\u7f6e",children:"\u4fee\u6539DHCP\u914d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"DHCP(Dynamic Host Configuration Protocol\uff0c\u52a8\u6001\u4e3b\u673a\u914d\u7f6e\u534f\u8bae)\u901a\u5e38\u88ab\u5e94\u7528\u5728\u5c40\u57df\u7f51\u7edc\u73af\u5883\u4e2d\uff0c\u4e3b\u8981\u4f5c\u7528\u662f\u96c6\u4e2d\u7684\u7ba1\u7406\u3001\u5206\u914dIP\u5730\u5740\uff0c\u4f7f\u7f51\u7edc\u73af\u5883\u4e2d\u7684\u4e3b\u673a\u52a8\u6001\u7684\u83b7\u5f97IP\u5730\u5740\u3001Gateway\u5730\u5740\u3001DNS\u670d\u52a1\u5668\u5730\u5740\u7b49\u4fe1\u606f\uff0c\u5e76\u80fd\u591f\u63d0\u5347\u5730\u5740\u7684\u4f7f\u7528\u7387\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u677f\u7684DHCP\u7f51\u7edc\u914d\u7f6e\u4fdd\u5b58\u5728",(0,i.jsx)(n.code,{children:"/etc/network/interfaces"}),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4fee\u6539eth0\u76f8\u5173\u914d\u7f6e\uff0c\u53ef\u5b8c\u6210\u5bf9DHCP\u6a21\u5f0f\u7684\u4fee\u6539\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/network/interfaces\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"source-directory /etc/network/interfaces.d\nauto lo\niface lo inet loopback\nauto eth0\niface eth0 inet dhcp\n    metric 700\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u547d\u4ee4\u884c\u8f93\u5165",(0,i.jsx)(n.code,{children:"sudo restart_network"}),"\u547d\u4ee4\u8ba9\u914d\u7f6e\u751f\u6548\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4fee\u6539mac\u5730\u5740\u914d\u7f6e",children:"\u4fee\u6539MAC\u5730\u5740\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u9700\u4fee\u6539\u5f00\u53d1\u677f\u9ed8\u8ba4MAC\u5730\u5740\uff0c\u53ef\u901a\u8fc7\u5728",(0,i.jsx)(n.code,{children:"/etc/network/interfaces"}),"\u6587\u4ef6\u4e2d\u589e\u52a0",(0,i.jsx)(n.code,{children:"pre-up"}),"\u914d\u7f6e\u4fe1\u606f\uff0c\u6307\u5b9a\u7528\u6237\u9700\u8981\u7684MAC\u5730\u5740\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/network/interfaces\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# interfaces(5) file used by ifup(8) and ifdown(8)\n# Include files from /etc/network/interfaces.d:\nsource-directory /etc/network/interfaces.d\nauto eth0\niface eth0 inet static\n    pre-up /etc/set_mac_address.sh\n    address 192.168.127.10\n    netmask 255.255.255.0\n    gateway 192.168.127.1\n    metric 700\n    pre-up ifconfig eth0 hw ether 00:11:22:9f:51:27\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539\u5b8c\u6210\u540e\uff0c",(0,i.jsx)(n.code,{children:"reboot"}),"\u91cd\u542f\u8ba9\u914d\u7f6e\u751f\u6548\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u65e0\u7ebf\u7f51\u7edc",children:"\u65e0\u7ebf\u7f51\u7edc"}),"\n",(0,i.jsxs)(n.p,{children:["Video: ",(0,i.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=12",children:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=12"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5f00\u53d1\u677f\u96c6\u6210\u4e862.4GHz\u65e0\u7ebfWiFi\u6a21\u5757\uff0c\u652f\u6301Soft AP\u548cStation\u4e24\u79cd\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u8fd0\u884c\u5728Station\u6a21\u5f0f\u4e0b\u3002\u4e0b\u9762\u4ecb\u7ecd\u4e24\u79cd\u6a21\u5f0f\u7684\u4f7f\u7528\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"station\u6a21\u5f0f",children:"Station\u6a21\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"Station\u6a21\u5f0f\u4e0b\uff0c\u5f00\u53d1\u677f\u4f5c\u4e3a\u5ba2\u6237\u7aef\uff0c\u63a5\u5165\u8def\u7531\u5668\u65e0\u7ebf\u70ed\u70b9\u8fdb\u884c\u8054\u7f51\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4f7f\u7528Ubuntu Desktop\u7248\u672c\u7cfb\u7edf\u7684\u7528\u6237\uff0c\u53ef\u70b9\u51fb\u684c\u9762\u53f3\u4e0a\u89d2Wi-Fi\u56fe\u6807\uff0c\u9009\u62e9\u5bf9\u5e94\u70ed\u70b9\u5e76\u8f93\u5165\u5bc6\u7801\u4ee5\u5b8c\u6210\u7f51\u7edc\u914d\u7f6e\uff0c\u5982\u4e0b\u56fe\uff1a",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"image-wifi-config",src:s(8955).A+"",width:"284",height:"398"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u4f7f\u7528Ubuntu Server\u7248\u672c\u7cfb\u7edf\u7684\u7528\u6237\uff0c\u53ef\u901a\u8fc7\u547d\u4ee4\u884c\u5b8c\u6210\u65e0\u7ebf\u7f51\u7edc\u914d\u7f6e\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"sudo nmcli device wifi rescan"}),"\u547d\u4ee4\u626b\u63cf\u70ed\u70b9\u3002\u5982\u8fd4\u56de\u5982\u4e0b\u4fe1\u606f\uff0c\u8bf4\u660e\u626b\u63cf\u8fc7\u4e8e\u9891\u7e41\uff0c\u9700\u8981\u7a0d\u540e\u518d\u8bd5"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~# sudo nmcli device wifi rescan\nError: Scanning not allowed immediately following previous scan.\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"sudo nmcli device wifi list"}),"\u547d\u4ee4\u5217\u51fa\u626b\u63cf\u5230\u7684\u70ed\u70b9"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:'sudo wifi_connect "SSID" "PASSWD"'}),"\u547d\u4ee4\u8fde\u63a5\u70ed\u70b9\uff0c\u8fd4\u56de\u5982\u4e0b\u4fe1\u606f\uff0c\u8bf4\u660e\u7f51\u7edc\u8fde\u63a5\u6210\u529f"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~# sudo wifi_connect \"WiFi-Test\" \"12345678\" \nDevice 'wlan0' successfully activated with 'd7468833-4195-45aa-aa33-3d43da86e1a7'.\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8fde\u63a5\u70ed\u70b9\u540e\uff0c\u8fd4\u56de\u5982\u4e0b\u4fe1\u606f\uff0c\u8bf4\u660e\u70ed\u70b9\u6ca1\u6709\u627e\u5230\uff0c\u53ef\u4ee5\u6267\u884c",(0,i.jsx)(n.code,{children:"sudo nmcli device wifi rescan"}),"\u547d\u4ee4\u91cd\u65b0\u626b\u63cf\u540e\u518d\u6b21\u8fde\u63a5"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'root@ubuntu:~# sudo wifi_connect "WiFi-Test" "12345678" \nError: No network with SSID \'WiFi-Test\' found.\n'})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"soft-ap\u6a21\u5f0f",children:"Soft AP\u6a21\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"\u5f00\u53d1\u677f\u65e0\u7ebf\u7f51\u7edc\u9ed8\u8ba4\u8fd0\u884c\u5728Station\u6a21\u5f0f\u4e0b\uff0c\u5982\u9700\u4f7f\u7528Soft AP\u6a21\u5f0f\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5b89\u88c5",(0,i.jsx)(n.code,{children:"hostapd"})," \u548c ",(0,i.jsx)(n.code,{children:"isc-dhcp-server"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt install hostapd\nsudo apt install isc-dhcp-server\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"sudo vim /etc/hostapd.conf"}),"\u547d\u4ee4\u6765\u914d\u7f6e",(0,i.jsx)(n.code,{children:"hostapd.conf"}),"\uff0c\u4e3b\u8981\u5173\u6ce8\u4e0b\u9762\u51e0\u4e2a\u5b57\u6bb5:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"interface=wlan0 #\u4f5c\u4e3aAP\u70ed\u70b9\u7684\u7f51\u5361\nssid=Sunrise #WiFi\u540d\u5b57\nwpa=2 #0\u4e3aWPA 2\u4e3aWPA2 \u4e00\u822c\u4e3a2\nwpa_key_mgmt=WPA-PSK #\u52a0\u5bc6\u7b97\u6cd5 \u4e00\u822c\u4e3aWPA-PSK\nwpa_passphrase=12345678 #\u5bc6\u7801\nwpa_pairwise=CCMP #\u52a0\u5bc6\u534f\u8bae\uff0c\u4e00\u822c\u4e3aCCMP\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65e0\u5bc6\u7801\u7684\u70ed\u70b9\u914d\u7f6e\uff0c\u8bf7\u5728",(0,i.jsx)(n.code,{children:"hostapd.conf"}),"\u6587\u4ef6\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"interface=wlan0\ndriver=nl80211\nctrl_interface=/var/run/hostapd\nssid=Sunrise\nchannel=6\nieee80211n=1\nhw_mode=g\nignore_broadcast_ssid=0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6709\u5bc6\u7801\u7684\u70ed\u70b9\u914d\u7f6e\uff0c\u8bf7\u5728",(0,i.jsx)(n.code,{children:"hostapd.conf"}),"\u6587\u4ef6\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"interface=wlan0\ndriver=nl80211\nctrl_interface=/var/run/hostapd\nssid=Sunrise\nchannel=6\nieee80211n=1\nhw_mode=g\nignore_broadcast_ssid=0\nwpa=2\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=CCMP\nwpa_passphrase=12345678\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u914d\u7f6e",(0,i.jsx)(n.code,{children:"isc-dhcp-server"}),"\u6587\u4ef6\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6267\u884c ",(0,i.jsx)(n.code,{children:"sudo vim /etc/default/isc-dhcp-server"}),"\u4fee\u6539",(0,i.jsx)(n.code,{children:"isc-dhcp-server"}),"\u6587\u4ef6\uff0c\u6dfb\u52a0\u5982\u4e0b\u5b9a\u4e49\u7684\u7f51\u7edc\u63a5\u53e3\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'INTERFACESv4="wlan0"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6267\u884c ",(0,i.jsx)(n.code,{children:"sudo vim /etc/dhcp/dhcpd.conf"}),"\u4fee\u6539",(0,i.jsx)(n.code,{children:"dhcpd.conf"}),"\u6587\u4ef6\uff0c \u53d6\u6d88\u4ee5\u4e0b\u5b57\u6bb5\u7684\u6ce8\u91ca\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"  authoritative;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7136\u540e\u5728 ",(0,i.jsx)(n.code,{children:"/etc/dhcp/dhcpd.conf"}),"\u6587\u4ef6\u672b\u5c3e\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"  subnet 10.5.5.0 netmask 255.255.255.0 { #\u7f51\u6bb5\u548c\u5b50\u7f51\u63a9\u7801\n  range 10.5.5.100 10.5.5.254;#\u53ef\u83b7\u53d6\u7684IP\u8303\u56f4\n  option subnet-mask 255.255.255.0; #\u5b50\u7f51\u63a9\u7801\n  option routers 10.5.5.1;#\u9ed8\u8ba4\u7f51\u5173\n  option broadcast-address 10.5.5.31;#\u5e7f\u64ad\u5730\u5740\n  default-lease-time 600;#\u9ed8\u8ba4\u79df\u7ea6\u671f\u9650\uff0c\u5355\u4f4d\u79d2\n  max-lease-time 7200;#\u6700\u957f\u79df\u7ea6\u671f\u9650\uff0c\u5355\u4f4d\u79d2\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u505c\u6b62 ",(0,i.jsx)(n.code,{children:"wpa_supplicant"})," \u670d\u52a1\uff0c\u5e76\u91cd\u542f ",(0,i.jsx)(n.code,{children:"wlan0"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"systemctl mask wpa_supplicant\nsystemctl stop wpa_supplicant\n\nip addr flush dev wlan0\nsleep 0.5\nifconfig wlan0 down\nsleep 1\nifconfig wlan0 up\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6309\u5982\u4e0b\u6b65\u9aa4\u542f\u52a8 ",(0,i.jsx)(n.code,{children:"hostapd"}),"\u670d\u52a1"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6267\u884c",(0,i.jsx)(n.code,{children:"sudo hostapd -B /etc/hostapd.conf"}),"\u547d\u4ee4"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:' root@ubuntu:~# sudo hostapd -B /etc/hostapd.conf\n\n Configuration file: /etc/hostapd.conf\n Using interface wlan0 with hwaddr 08:e9:f6:af:18:26 and ssid "sunrise"\n wlan0: interface state UNINITIALIZED->ENABLED\n wlan0: AP-ENABLED\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"ifconfig"}),"\u547d\u4ee4\uff0c\u914d\u7f6e\u65e0\u7ebf\u63a5\u53e3",(0,i.jsx)(n.code,{children:"wlan0"}),"\u7684IP\u548c\u7f51\u6bb5\uff0c\u6ce8\u610f\u8981\u8ddf\u7b2c\u4e09\u6b65\u7684\u914d\u7f6e\u4fdd\u6301\u4e00\u81f4"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ifconfig wlan0 10.5.5.1 netmask 255.255.255.0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6700\u540e\u5f00\u542f",(0,i.jsx)(n.code,{children:"dhcp"}),"\u670d\u52a1\u5668\uff0c\u8fde\u4e0a\u70ed\u70b9\u4f1a\u4ece",(0,i.jsx)(n.code,{children:"10.5.5.100"}),"\u5230",(0,i.jsx)(n.code,{children:"10.5.5.255"}),"\u4e4b\u95f4\u5206\u914d\u4e00\u4e2aip\u5730\u5740\u7ed9\u5ba2\u6237\u7aef"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ifconfig wlan0 10.5.5.1 netmask 255.255.255.0\nsudo systemctl start isc-dhcp-server\nsudo systemctl enable isc-dhcp-server\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8fde\u63a5\u5f00\u53d1\u677f\u70ed\u70b9\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"sunrise"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"image-20220601203025803",src:s(15928).A+"",width:"828",height:"483"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u9700\u5207\u6362\u56de",(0,i.jsx)(n.code,{children:"Station"}),"\u6a21\u5f0f\uff0c\u53ef\u6309\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:"[RDK X5]"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# \u505c\u6b62 hostapd\nkillall -9 hostapd\n\n# \u6e05\u9664 wlan0 \u7684\u5730\u5740\nip addr flush dev wlan0\nsleep 0.5\nifconfig wlan0 down\nsleep 1\nifconfig wlan0 up\n\n# \u91cd\u542f wpa_supplicant\nsystemctl unmask wpa_supplicant\nsystemctl restart wpa_supplicant\n\n#\u91cd\u88c5wifi\u9a71\u52a8\nrmmod aic8800_fdrv \nmodprobe aic8800_fdrv\n\n# \u8fde\u63a5\u70ed\u70b9,\uff0c\u5177\u4f53\u64cd\u4f5c\u53ef\u4ee5\u67e5\u770b\u4e0a\u4e00\u7ae0\u8282 \u201c\u65e0\u7ebf\u7f51\u7edc\u201d\nwifi_connect "WiFi-Test" "12345678"\n'})}),"\n",(0,i.jsx)(n.p,{children:"[Other]"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# \u505c\u6b62 hostapd\nkillall -9 hostapd\n\n# \u6e05\u9664 wlan0 \u7684\u5730\u5740\nip addr flush dev wlan0\nsleep 0.5\nifconfig wlan0 down\nsleep 1\nifconfig wlan0 up\n\n# \u91cd\u542f wpa_supplicant\nsystemctl unmask wpa_supplicant\nsystemctl restart wpa_supplicant\n\n# \u8fde\u63a5\u70ed\u70b9,\uff0c\u5177\u4f53\u64cd\u4f5c\u53ef\u4ee5\u67e5\u770b\u4e0a\u4e00\u7ae0\u8282 \u201c\u65e0\u7ebf\u7f51\u7edc\u201d\nwifi_connect "WiFi-Test" "12345678"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dns\u670d\u52a1",children:"DNS\u670d\u52a1"}),"\n",(0,i.jsxs)(n.p,{children:["Video: ",(0,i.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=13",children:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=13"})]}),"\n",(0,i.jsx)(n.p,{children:"DNS(Domain Name Server)\u662f\u8fdb\u884c\u57df\u540d(domain name)\u548c\u4e0e\u4e4b\u76f8\u5bf9\u5e94\u7684IP\u5730\u5740\u8f6c\u6362\u7684\u670d\u52a1\u5668\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u677fDNS\u914d\u7f6e\u901a\u8fc7",(0,i.jsx)(n.code,{children:"/etc/systemd/resolved.conf"}),"\u6587\u4ef6\u7ba1\u7406\uff0c\u7528\u6237\u53ef\u901a\u8fc7\u4fee\u6539\u8be5\u6587\u4ef6\u5b8c\u6210DNS\u76f8\u5173\u914d\u7f6e\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539",(0,i.jsx)(n.code,{children:"resolved.conf"}),"\u6587\u4ef6\uff0c\u6dfb\u52a0DNS\u670d\u52a1\u5668\u5730\u5740\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"DNS=8.8.8.8 114.114.114.114\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u4f7f\u80fdDNS\u914d\u7f6e\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart systemd-resolved\nsudo systemctl enable systemd-resolved\nsudo mv /etc/resolv.conf  /etc/resolv.conf.bak\nsudo ln -s /run/systemd/resolve/resolv.conf /etc/\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7cfb\u7edf\u66f4\u65b0",children:"\u7cfb\u7edf\u66f4\u65b0"}),"\n",(0,i.jsxs)(n.p,{children:["\u51fa\u4e8e\u7cfb\u7edf\u5b89\u5168\u3001\u7a33\u5b9a\u6027\u7684\u8003\u8651\uff0c\u63a8\u8350\u7528\u6237\u5b89\u88c5\u5b8c\u7cfb\u7edf\u540e\uff0c\u901a\u8fc7",(0,i.jsx)(n.code,{children:"apt"}),"\u547d\u4ee4\u5bf9\u7cfb\u7edf\u8fdb\u884c\u66f4\u65b0\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"/etc/apt/source.list"}),"\u6587\u4ef6\u4e2d\uff0c\u4fdd\u5b58\u4e86",(0,i.jsx)(n.code,{children:"apt"}),"\u547d\u4ee4\u7684\u8f6f\u4ef6\u6e90\u5217\u8868\uff0c\u5728\u5b89\u88c5\u8f6f\u4ef6\u524d\uff0c\u9700\u8981\u5148\u901a\u8fc7",(0,i.jsx)(n.code,{children:"apt"}),"\u547d\u4ee4\u66f4\u65b0package\u5217\u8868\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u6253\u5f00\u7ec8\u7aef\u547d\u4ee4\u884c\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u5347\u7ea7\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u5230\u6700\u65b0\u7248\u672c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt full-upgrade\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u63a8\u8350\u4f7f\u7528",(0,i.jsx)(n.code,{children:"full-upgrade"}),"\u800c\u4e0d\u662f",(0,i.jsx)(n.code,{children:"upgrade"}),"\u9009\u9879\uff0c\u8fd9\u6837\u5f53\u76f8\u5173\u4f9d\u8d56\u53d1\u751f\u53d8\u52a8\u65f6\uff0c\u4e5f\u4f1a\u540c\u6b65\u66f4\u65b0\u4f9d\u8d56\u5305\u3002"]}),(0,i.jsxs)(n.p,{children:["\u5f53\u8fd0\u884c",(0,i.jsx)(n.code,{children:"sudo apt full-upgrade"}),"\u547d\u4ee4\u65f6\uff0c\u7cfb\u7edf\u4f1a\u63d0\u793a\u6570\u636e\u4e0b\u8f7d\u548c\u78c1\u76d8\u5360\u7528\u5927\u5c0f\uff0c\u4f46\u662f",(0,i.jsx)(n.code,{children:"apt"}),"\u4e0d\u4f1a\u68c0\u67e5\u78c1\u76d8\u7a7a\u95f4\u662f\u5426\u5145\u8db3\uff0c\u5efa\u8bae\u7528\u6237\u901a\u8fc7",(0,i.jsx)(n.code,{children:"df -h"}),"\u547d\u4ee4\u624b\u52a8\u68c0\u67e5\u3002\u6b64\u5916\uff0c\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u4e0b\u8f7d\u7684deb\u6587\u4ef6\u4f1a\u4fdd\u5b58\u5728",(0,i.jsx)(n.code,{children:"/var/cache/apt/archives"}),"\u76ee\u5f55\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.code,{children:"sudo apt clean"}),"\u547d\u4ee4\u5220\u9664\u7f13\u5b58\u6587\u4ef6\u4ee5\u91ca\u653e\u78c1\u76d8\u7a7a\u95f4\u3002"]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884c",(0,i.jsx)(n.code,{children:"apt full-upgrade"}),"\u547d\u4ee4\u540e\uff0c\u53ef\u80fd\u4f1a\u91cd\u65b0\u5b89\u88c5\u9a71\u52a8\u3001\u5185\u6838\u6587\u4ef6\u548c\u90e8\u5206\u7cfb\u7edf\u8f6f\u4ef6\uff0c\u5efa\u8bae\u7528\u6237\u624b\u52a8\u91cd\u542f\u8bbe\u5907\u4f7f\u66f4\u65b0\u751f\u6548\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u84dd\u7259\u914d\u7f6e",children:"\u84dd\u7259\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["Video: ",(0,i.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=9",children:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=9"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u677f\u84dd\u7259\u529f\u80fd\u9ed8\u8ba4\u6ca1\u6709\u5f00\u542f\uff0c\u9700\u8981\u6267\u884c ",(0,i.jsx)(n.code,{children:"/usr/bin/startbt6212.sh"}),"\u811a\u672c\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u8be5\u811a\u672c\u5b8c\u6210\u4ee5\u4e0b\u5de5\u4f5c\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u590d\u4f4d\u84dd\u7259"}),"\n",(0,i.jsxs)(n.li,{children:["\u521b\u5efa ",(0,i.jsx)(n.code,{children:"messagebus"})," \u7528\u6237\u548c\u7528\u6237\u7ec4\uff0c",(0,i.jsx)(n.code,{children:"dbus-daemon"})," \u7a0b\u5e8f\u8fd0\u884c\u65f6\u9700\u8981\u4f7f\u7528\u8be5\u7528\u6237"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"brcm_patchram_plus"})," \u5b8c\u6210\u84dd\u7259\u7684\u9a71\u52a8\u52a0\u8f7d\u548c\u56fa\u4ef6\u52a0\u8f7d"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5faa\u73af\u68c0\u67e5 ",(0,i.jsx)(n.code,{children:"/sys/class/bluetooth/hci0"})," \u76ee\u5f55\u662f\u5426\u5b58\u5728\uff0c\u786e\u8ba4\u84dd\u7259\u9a71\u52a8\u5df2\u7ecf\u6b63\u5e38\u8fd0\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:["\u51fa\u73b0 ",(0,i.jsx)(n.strong,{children:"Done setting line discpline"}),"  \u8868\u793a\u84dd\u7259\u542f\u7528\u6210\u529f"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6267\u884c ",(0,i.jsx)(n.code,{children:"hciconfig hci0 up"}),"  \u5b8c\u6210\u84dd\u7259\u7684Link Up"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6267\u884c ",(0,i.jsx)(n.code,{children:"hciconfig hci0 piscan"})," \u8fdb\u884c\u84dd\u7259\u626b\u63cf\uff0c\u672c\u6b65\u9aa4\u53ef\u4ee5\u6839\u636e\u60c5\u51b5\u53bb\u6389"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u811a\u672c\u6267\u884c\u6210\u529f\u540e\u7684log\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220601172145987",src:s(87997).A+"",width:"757",height:"215"})}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u67e5\u8be2\u84dd\u7259\u8fdb\u7a0b\u662f\u5426\u6b63\u5e38\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'ps ax | grep "/usr/bin/dbus-daemon\\|/usr/lib/bluetooth/bluetoothd"\n/usr/bin/dbus-daemon\n\n/usr/lib/bluetooth/bluetoothd\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f51\u8fde\u63a5",children:"\u914d\u7f51\u8fde\u63a5"}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884c",(0,i.jsx)(n.code,{children:"sudo bluetoothctl"}),"\u8fdb\u5165\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u7684\u84dd\u7259\u914d\u7f6e\u754c\u9762\uff0c\u51fa\u73b0\u4e86\u7c7b\u4f3c\u4e0b\u56fe\u7684\u8bbe\u5907\u4fe1\u606f\u8868\u793a\u84dd\u7259\u88ab\u8bc6\u522b\u5230\u4e86\uff0c\u7136\u540e\u7528",(0,i.jsx)(n.code,{children:"show"}),"\u6765\u67e5\u770b\u84dd\u7259\u4fe1\u606f\uff0c\u7559\u610f\u84dd\u7259\u7684",(0,i.jsx)(n.code,{children:"powered"}),"\u548c",(0,i.jsx)(n.code,{children:"discoverable"}),"\u72b6\u6001\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220601172604051",src:s(80055).A+"",width:"1001",height:"503"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884c ",(0,i.jsx)(n.code,{children:"power on"})," \u4f7f\u80fd\u84dd\u7259\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220601172501882",src:s(60405).A+"",width:"371",height:"69"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u80fd\u591f\u4f7f\u84dd\u7259\u88ab\u9644\u8fd1\u7684\u8bbe\u5907\u53d1\u73b0\uff0c\u9700\u8981\u6267\u884c",(0,i.jsx)(n.code,{children:"discoverable on"}),"\u4f7f\u80fd\u84dd\u7259\u5e76\u6253\u5f00\u84dd\u7259\u53ef\u53d1\u73b0\u5c5e\u6027\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220601172648853",src:s(24485).A+"",width:"685",height:"82"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6b64\u65f6\u4f7f\u7528\u624b\u673a\u6216\u8005\u7535\u8111\u626b\u63cf\u84dd\u7259\u5c31\u53ef\u4ee5\u53d1\u73b0 ",(0,i.jsx)(n.code,{children:"ubuntu"})," \u8fd9\u4e2a\u540d\u79f0\u7684\u84dd\u7259\u8bbe\u5907\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220601175322650",src:s(76324).A+"",width:"455",height:"491"})}),"\n",(0,i.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u6d4b\u8bd5\u84dd\u7259\u7684\u4e3b\u52a8\u626b\u63cf\u529f\u80fd\uff0c\u5728",(0,i.jsx)(n.code,{children:"bluetoothctl"}),"\u7684\u4ea4\u4e92\u754c\u9762\u8f93\u5165",(0,i.jsx)(n.code,{children:"scan on"}),"\u5373\u53ef\u6253\u5f00\u4e3b\u52a8\u626b\u63cf\uff0c\u5b83\u4f1a\u5468\u671f\u6027\u5730\u6253\u5370\u9644\u8fd1\u7684\u8bbe\u5907\uff0c\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u53d1\u73b0\u4e86\u6211\u7684\u624b\u673a\u8bbe\u5907\uff0c",(0,i.jsx)(n.code,{children:"scan off"}),"\u5173\u95ed\u626b\u63cf\u529f\u80fd\u5e76\u6c47\u603b\u6253\u5370\u626b\u63cf\u5230\u7684\u84dd\u7259\u8bbe\u5907\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220601154131158",src:s(81122).A+"",width:"1091",height:"318"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220601154253947",src:s(33031).A+"",width:"667",height:"363"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u5c31\u662f\u548c\u5176\u4ed6\u84dd\u7259\u7684\u914d\u5bf9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u914d\u5bf9\u547d\u4ee4\uff1a",(0,i.jsx)(n.code,{children:"pair [targetMAC] "}),"\uff0c\u8f93\u5165\u8be5\u547d\u4ee4\u540e\uff0c\u6839\u636e\u63d0\u793a\u8f93\u5165",(0,i.jsx)(n.code,{children:"yes"}),"\uff0c\u5bf9\u7aef\u84dd\u7259\u8bbe\u5907\u9009\u62e9",(0,i.jsx)(n.code,{children:"\u914d\u5bf9"}),"\u9009\u9879\u5b8c\u6210\u914d\u5bf9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u914d\u5bf9\u6210\u529f\u540e\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:"trust [targetMAC]"}),"\u6765\u8ba9\u4e0b\u6b21\u81ea\u52a8\u8fde\u63a5"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220601154414717",src:s(39005).A+"",width:"982",height:"547"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7ecf\u8fc7\u4ee5\u4e0a\u64cd\u4f5c\u540e\uff0c\u84dd\u7259\u7684\u626b\u63cf\u3001\u914d\u5bf9\u7684\u57fa\u672c\u529f\u80fd\u5c31\u5b8c\u6210\u4e86\uff0c\u5982\u9700\u4f7f\u7528\u66f4\u591a\u529f\u80fd\uff0c\u53ef\u67e5\u9605 ",(0,i.jsx)(n.code,{children:"BlueZ"}),"\u7684\u5b98\u65b9\u5e2e\u52a9\u8bf4\u660e\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},81122:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601154131158-a4b27b18cb7cb77176cb325bce74b228.png"},33031:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601154253947-451bc0a8af28f5c0d7168c3b148fe704.png"},39005:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601154414717-a1496688514e4c88761a84fde5660229.png"},87997:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601172145987-116b69efa33227d091b832a380e1c5ac.png"},60405:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601172501882-0dd2b0b0b551df5bdb3192ae19e97d73.png"},80055:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601172604051-74a44caff0eeddb19c2e7b0b24fe91a9.png"},24485:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601172648853-3f96573828f72cc091b5addad607682f.png"},76324:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601175322650-1c5ca52b592f35629a47dfc1b1a55ef8.png"},15928:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220601203025803-ba3de05d9f87b5b7a814eb95a62d9c00.png"},8955:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-wifi-config-558f89621701c067be22f22cca86590a.jpeg"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(96540);const c={},d=i.createContext(c);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);