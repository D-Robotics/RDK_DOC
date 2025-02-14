"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1249],{28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(96540);const c={},d=r.createContext(c);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(d.Provider,{value:n},e.children)}},49385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>v,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var r=s(74848),c=s(28453);const d={sidebar_position:10},l="\u4f4e\u529f\u8017\u6a21\u5f0f\u8c03\u8bd5\u6307\u5357",o={id:"Advanced_development/linux_development/driver_development_x5/driver_lowpower",title:"\u4f4e\u529f\u8017\u6a21\u5f0f\u8c03\u8bd5\u6307\u5357",description:"overview",source:"@site/docs/07_Advanced_development/02_linux_development/driver_development_x5/driver_lowpower.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development_x5",slug:"/Advanced_development/linux_development/driver_development_x5/driver_lowpower",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_lowpower",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/driver_development_x5/driver_lowpower.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Thermal \u7cfb\u7edf",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_thermal_dev"},next:{title:"LCD\u9a71\u52a8\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_lcd"}},i={},p=[{value:"overview",id:"overview",level:2},{value:"DVFS\u8c03\u9891\u8c03\u538b",id:"dvfs\u8c03\u9891\u8c03\u538b",level:2},{value:"BPU \u8c03\u9891",id:"bpu-\u8c03\u9891",level:3},{value:"GPU 3D \u8c03\u9891",id:"gpu-3d-\u8c03\u9891",level:3},{value:"DDR \u8c03\u9891",id:"ddr-\u8c03\u9891",level:3},{value:"CPU\u7684\u8c03\u9891\u8c03\u538b",id:"cpu\u7684\u8c03\u9891\u8c03\u538b",level:3},{value:"CPU hotplug",id:"cpu-hotplug",level:2},{value:"\u8bbe\u5907\u7684\u7535\u6e90\u63a7\u5236",id:"\u8bbe\u5907\u7684\u7535\u6e90\u63a7\u5236",level:2},{value:"\u4f11\u7720\u5524\u9192",id:"\u4f11\u7720\u5524\u9192",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4f4e\u529f\u8017\u6a21\u5f0f\u8c03\u8bd5\u6307\u5357",children:"\u4f4e\u529f\u8017\u6a21\u5f0f\u8c03\u8bd5\u6307\u5357"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"overview"}),"\n",(0,r.jsx)(n.p,{children:"\u82af\u7247\u7684\u529f\u8017\u4e0e\u5de5\u4f5c\u7535\u538b\uff0c\u65f6\u949f\u9891\u7387\u4ee5\u53ca\u73af\u5883\u6e29\u5ea6\u5bc6\u5207\u76f8\u5173\u3002\u5728\u8d1f\u8f7d\u4e00\u5b9a\u7684\u60c5\u51b5\u4e0b\uff0c\u7535\u538b\u3001\u65f6\u949f\u9891\u7387\u3001\u73af\u5883\u6e29\u5ea6\u7684\u5347\u9ad8\u4f1a\u5bfc\u81f4\u529f\u8017\u589e\u52a0\u3002\u6240\u4ee5\u964d\u4f4e\u529f\u8017\u53ef\u4ee5\u4ece\u964d\u4f4e\u7535\u538b\u3001\u964d\u4f4e\u65f6\u949f\u9891\u7387\u4ee5\u53ca\u6563\u70ed\u4e09\u4e2a\u65b9\u9762\u5165\u624b\u3002\u672c\u6587\u4e2d\u63d0\u5230\u7684\u4f4e\u529f\u8017\u65b9\u6cd5\u4e3b\u8981\u662f\u5bf9\u65f6\u949f\u9891\u7387\u548c\u7535\u538b\u7684\u8c03\u8282\u548c\u63a7\u5236\u3002 \u540c\u65f6\uff0c\u8d1f\u8f7d\u51cf\u8f7b\u4e5f\u53ef\u4ee5\u964d\u4f4e\u529f\u8017\uff0c\u5ba2\u6237\u53ef\u6839\u636e\u81ea\u5df1\u7684\u4ea7\u54c1\u4f18\u5316\u7535\u8def\u3002\u53e6\u5916\u4f4e\u529f\u8017\u4f1a\u5bf9\u6027\u80fd\u6709\u8d1f\u9762\u5f71\u54cd\uff0c\u6240\u4ee5\u6839\u636e\u4f7f\u7528\u573a\u666f\u6765\u9009\u62e9\u662f\u5426\u8981\u8fdb\u5165\u4f4e\u529f\u8017\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"dvfs\u8c03\u9891\u8c03\u538b",children:"DVFS\u8c03\u9891\u8c03\u538b"}),"\n",(0,r.jsx)(n.p,{children:"\u5728X5\u4e2d\uff0c\u5171\u6709CPU/GPU 3D/BPU/DDR\u652f\u6301\u8c03\u9891\uff0cCPU\u652f\u6301\u8c03\u538b"}),"\n",(0,r.jsx)(n.h3,{id:"bpu-\u8c03\u9891",children:"BPU \u8c03\u9891"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u8def\u5f84\u53ef\u4ee5\u63a7\u5236\u5bf9bpu\u7684\u8c03\u9891"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/sys/class/devfreq/3a000000.bpu\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524dBPU\u652f\u6301\u4e24\u4e2a\u9891\u70b9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"root@buildroot:/$ cat /sys/class/devfreq/3a000000.bpu/available_frequencies\n500000000 1000000000\n"})}),"\n",(0,r.jsx)(n.p,{children:"BPU\u652f\u6301\u7684governor\u5305\u62ec"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"userspace\uff1a\u6839\u636e\u5ba2\u6237\u7684\u914d\u7f6e\u6307\u5b9a\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"performance\uff1a\u8bbe\u7f6e\u4e3a\u6700\u9ad8\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"powersave\uff1a\u4ee5\u6700\u4f4e\u9891\u7387\u8fd0\u884c"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u8981\u8c03\u6574BPU\u7684governor\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo userspace >/sys/class/devfreq/3a000000.bpu/governor\necho performance >/sys/class/devfreq/3a000000.bpu/governor\necho powersave >/sys/class/devfreq/3a000000.bpu/governor\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u60f3\u624b\u52a8\u8c03\u6574\u9891\u7387"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo userspace >/sys/class/devfreq/3a000000.bpu/governor\necho 500000000 >/sys/class/devfreq/3a000000.bpu/userspace/set_freq\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u9891\u7387"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat /sys/class/devfreq/3a000000.bpu/cur_freq\n"})}),"\n",(0,r.jsx)(n.h3,{id:"gpu-3d-\u8c03\u9891",children:"GPU 3D \u8c03\u9891"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u8def\u5f84\u53ef\u4ee5\u63a7\u5236\u5bf9GPU 3D\u7684\u8c03\u9891"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/sys/class/devfreq/3c000000.gc8000\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524dGPU 3D\u652f\u63014\u4e2a\u9891\u70b9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat /sys/class/devfreq/3c000000.gc8000/available_frequencies\n200000000 400000000 750000000 1000000000\n"})}),"\n",(0,r.jsx)(n.p,{children:"GPU 3D\u652f\u6301\u7684governor\u5305\u62ec"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"userspace\uff1a\u6839\u636e\u5ba2\u6237\u7684\u914d\u7f6e\u6307\u5b9a\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"performance\uff1aGPU 3D\u8bbe\u7f6e\u4e3a\u6700\u9ad8\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"powersave\uff1a\u4ee5\u6700\u4f4e\u9891\u7387\u8fd0\u884c"}),"\n",(0,r.jsx)(n.li,{children:"simple_ondemand\uff1a\u7ed3\u5408\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6309\u9700\u8c03\u6574\u9891\u7387"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u8981\u8c03\u6574GPU 3D\u7684governor\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo userspace >/sys/class/devfreq/3c000000.gc8000/governor\necho performance >/sys/class/devfreq/3c000000.gc8000/governor\necho powersave >/sys/class/devfreq/3c000000.gc8000/governor\necho simple_ondemand >/sys/class/devfreq/3c000000.gc8000/governor\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u60f3\u624b\u52a8\u8c03\u6574\u9891\u7387"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo userspace >/sys/class/devfreq/3c000000.gc8000/governor\necho 750000000 >/sys/class/devfreq/3c000000.gc8000/userspace/set_freq\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u9891\u7387"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat /sys/class/devfreq/3c000000.gc8000/cur_freq\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ddr-\u8c03\u9891",children:"DDR \u8c03\u9891"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u8def\u5f84\u53ef\u4ee5\u63a7\u5236\u5bf9DDR\u7684\u8c03\u9891"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/sys/class/devfreq/soc\\:ddrc-freq\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u540c\u7684DDR\u9897\u7c92\u652f\u6301\u7684\u9891\u70b9\u53ef\u80fd\u4e0d\u4e00\u81f4\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u9891\u70b9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"root@buildroot:/$ cat /sys/class/devfreq/soc\\:ddrc-freq/available_frequencies\n266000000 1066000000 2133000000 3200000000\n"})}),"\n",(0,r.jsx)(n.p,{children:"DDR\u652f\u6301\u7684governor\u5305\u62ec"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"userspace\uff1a\u6839\u636e\u5ba2\u6237\u7684\u914d\u7f6e\u6307\u5b9a\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"performance\uff1aDDR\u8bbe\u7f6e\u4e3a\u6700\u9ad8\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"simple_ondemand\uff1a\u6839\u636eDDR\u7684\u8d1f\u8f7d\u8c03\u6574\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"powersave\uff1a\u4ee5\u6700\u4f4e\u9891\u7387\u8fd0\u884c"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u8981\u8c03\u6574ddr\u7684governor\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo userspace >/sys/class/devfreq/soc\\:ddrc-freq/governor\necho performance >/sys/class/devfreq/soc\\:ddrc-freq/governor\necho simple_ondemand >/sys/class/devfreq/soc\\:ddrc-freq/governor\necho powersave >/sys/class/devfreq/soc\\:ddrc-freq/governor\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u60f3\u624b\u52a8\u8c03\u6574\u9891\u7387"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo userspace >/sys/class/devfreq/soc\\:ddrc-freq/governor\necho 266000000 >/sys/class/devfreq/soc\\:ddrc-freq/userspace/set_freq\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u9891\u7387"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat /sys/class/devfreq/soc\\:ddrc-freq/cur_freq\n"})}),"\n",(0,r.jsx)(n.h3,{id:"cpu\u7684\u8c03\u9891\u8c03\u538b",children:"CPU\u7684\u8c03\u9891\u8c03\u538b"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u8def\u5f84\u53ef\u4ee5\u63a7\u5236\u5bf9cpu\u7684\u8c03\u9891"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/sys/devices/system/cpu/cpufreq/policy0/\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524d\u652f\u6301\u7684\u9891\u7387\u5305\u62ec"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat /sys/devices/system/cpu/cpufreq/policy0/scaling_available_frequencies\n300000 600000 1200000 1500000\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u8d85\u9891\u7684\u529f\u80fd\uff0c\u8d85\u9891\u9891\u7387\u4e3a1.8G\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u6253\u5f00\u8d85\u9891\u529f\u80fd"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo 1 >/sys/devices/system/cpu/cpufreq/boost\necho performance >/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor\n"})}),"\n",(0,r.jsx)(n.p,{children:"1.8G\u8d85\u9891\u65f6\uff0cCPU\u5de5\u4f5c\u7535\u538b\u4e3a1V\uff0c\u5176\u4f59\u9891\u70b9\u5bf9\u5e94\u7684\u5de5\u4f5c\u7535\u538b\u4e3a800mV \u76ee\u524dCPU\u652f\u6301\u7684governor"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"performance\uff1a\u4ee5\u6700\u9ad8\u9891\u7387\u6267\u884c"}),"\n",(0,r.jsx)(n.li,{children:"ondemand\uff1a\u6309\u7167\u8d1f\u8f7d\u8c03\u6574\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"userspace\uff1a\u6839\u636e\u7528\u6237\u7684\u8bbe\u7f6e\u9891\u7387"}),"\n",(0,r.jsx)(n.li,{children:"powersave\uff1a\u4ee5\u6700\u4f4e\u9891\u7387\u6267\u884c"}),"\n",(0,r.jsx)(n.li,{children:"schedutil\uff1a\u6309\u7167\u8d1f\u8f7d\u8c03\u6574\u9891\u7387\uff0c\u5b83\u662f\u4e0eCPU\u8c03\u5ea6\u5668\u7ed3\u5408\u6765\u4f7f\u7528"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u8981\u8c03\u6574CPU\u7684governor\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo performance >/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor\necho ondemand >/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor\necho userspace >/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor\necho powersave >/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor\necho schedutil >/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u60f3\u624b\u52a8\u8c03\u6574\u9891\u7387"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo userspace >/sys/devices/system/cpu/cpu0/cpufreq/scaling_governor\necho 1200000 >/sys/devices/system/cpu/cpufreq/policy0/scaling_setspeed\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u9891\u7387"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat /sys/devices/system/cpu/cpufreq/policy0/cpuinfo_cur_freq\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cpu-hotplug",children:"CPU hotplug"}),"\n",(0,r.jsx)(n.p,{children:"CPU core\u5728\u4e0d\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u5c06\u5176\u62d4\u51fa\uff0c\u4e5f\u53ef\u4ee5\u8fdb\u4e00\u6b65\u964d\u4f4e\u529f\u8017\uff0c\u9664\u4e86core0\u4e0d\u652f\u6301hotpulg\uff0ccore1~core7\u5747\u652f\u6301hotplug\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo 0 >/sys/devices/system/cpu/cpu1/online  #disable cpu1\necho 1 >/sys/devices/system/cpu/cpu1/online  #enable cpu1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u5907\u7684\u7535\u6e90\u63a7\u5236",children:"\u8bbe\u5907\u7684\u7535\u6e90\u63a7\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8eBPU/GPU/ISP/VIDEO CODEC/JPEG/HIFI\u90fd\u662f\u6709\u72ec\u7acb\u7684\u7535\u6e90\u63a7\u5236\uff0c\u76ee\u524d\u8fd9\u4e9b\u8bbe\u5907\u53ea\u6709\u5728\u4f7f\u7528\u65f6\uff08\u9a71\u52a8open\uff09\u4e0a\u7535\uff0c\u4f7f\u7528\u7ed3\u675f\uff08\u9a71\u52a8close\uff09\u5c31\u4f1a\u4e0b\u7535\u3002\u53ef\u5c3d\u91cf\u964d\u4f4eX5 SOC\u7684\u6574\u4f53\u529f\u8017\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f11\u7720\u5524\u9192",children:"\u4f11\u7720\u5524\u9192"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f11\u7720\u53ef\u4ee5\u901a\u8fc7\u957f\u6309\u6309\u952e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8f93\u5165",(0,r.jsx)(n.code,{children:"hobot-suspend"}),"\u6307\u4ee4\uff1b\u77ed\u6309\u6309\u952e\uff0c\u8bbe\u5907\u5524\u9192\uff1b"]})]})}function v(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);