"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9775],{23162:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/image-20220321232551078-3f8609809d4f72cefb45d83fc77ac322.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var d=i(96540);const s={},o=d.createContext(s);function r(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(o.Provider,{value:n},e.children)}},54513:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>t});var d=i(74848),s=i(28453);const o={sidebar_position:4},r="GPIO\u8c03\u8bd5\u6307\u5357",l={id:"Advanced_development/linux_development/driver_development/driver_gpio_dev",title:"GPIO\u8c03\u8bd5\u6307\u5357",description:"X3 \u82af\u7247\u5171\u6709121\u4e2aIO\u529f\u80fd\u7ba1\u811a\uff0c\u6bcf\u4e2a\u7ba1\u811a\u90fd\u53ef\u4ee5\u914d\u7f6e\u5de5\u4f5c\u5728gpio\u6a21\u5f0f\u4e0b\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u548c\u5176\u4ed6\u529f\u80fd\u7ba1\u811a\u7684\u590d\u7528\u5173\u7cfb\u3002",source:"@site/docs/07_Advanced_development/02_linux_development/driver_development/driver_gpio_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_gpio_dev",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_gpio_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/driver_development/driver_gpio_dev.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"I2C\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_i2c_dev"},next:{title:"Pinctrl\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_pinctrl_dev"}},c={},t=[{value:"\u7ba1\u811a\u67e5\u8be2",id:"\u7ba1\u811a\u67e5\u8be2",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"GPIO\u5e2e\u52a9\u5de5\u5177",id:"gpio\u5e2e\u52a9\u5de5\u5177",level:3},{value:"\u9a71\u52a8\u4ee3\u7801",id:"\u9a71\u52a8\u4ee3\u7801",level:2},{value:"\u5185\u6838\u914d\u7f6e",id:"\u5185\u6838\u914d\u7f6e",level:3},{value:"\u5185\u6838DTS\u914d\u7f6e",id:"\u5185\u6838dts\u914d\u7f6e",level:3},{value:"GPIO\u4f7f\u7528",id:"gpio\u4f7f\u7528",level:2},{value:"Kernel Space",id:"kernel-space",level:3},{value:"DTS\u914d\u7f6e",id:"dts\u914d\u7f6e",level:4},{value:"\u9a71\u52a8\u4ee3\u7801\u63a5\u53e3",id:"\u9a71\u52a8\u4ee3\u7801\u63a5\u53e3",level:4},{value:"X3J3 GPIO IRQ",id:"x3j3-gpio-irq",level:4},{value:"User Space",id:"user-space",level:3},{value:"\u63a7\u5236\u63a5\u53e3",id:"\u63a7\u5236\u63a5\u53e3",level:4},{value:"\u8c03\u7528\u63a5\u53e3",id:"\u8c03\u7528\u63a5\u53e3",level:4},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b",level:4},{value:"\u8c03\u8bd5\u63a5\u53e3",id:"\u8c03\u8bd5\u63a5\u53e3",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"gpio\u8c03\u8bd5\u6307\u5357",children:"GPIO\u8c03\u8bd5\u6307\u5357"}),"\n",(0,d.jsx)(n.p,{children:"X3 \u82af\u7247\u5171\u6709121\u4e2aIO\u529f\u80fd\u7ba1\u811a\uff0c\u6bcf\u4e2a\u7ba1\u811a\u90fd\u53ef\u4ee5\u914d\u7f6e\u5de5\u4f5c\u5728gpio\u6a21\u5f0f\u4e0b\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u548c\u5176\u4ed6\u529f\u80fd\u7ba1\u811a\u7684\u590d\u7528\u5173\u7cfb\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u7ba1\u811a\u67e5\u8be2",children:"\u7ba1\u811a\u67e5\u8be2"}),"\n",(0,d.jsxs)(n.p,{children:["IO\u7ba1\u811a\u7684\u590d\u7528\u548c\u914d\u7f6e\u53ef\u4ee5\u5728 ",(0,d.jsx)(n.a,{href:"https://archive.d-robotics.cc/downloads/datasheets/",children:"datasheets"})," \u67e5\u9605\u300aPL-2500-3-X3 PIN SW Reg-V1.2.xls\u300b \u548c\u300aRM-2500-5-X3M Register Reference Manual-GPIO&PIN-V1.1.pdf\u300b\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5728 \u300aPL-2500-3-X3 PIN SW Reg-V1.2.xls\u300b\u53ef\u4ee5\u6bd4\u8f83\u76f4\u89c2\u7684\u67e5\u8be2\u5230\u7ba1\u811a\u7684\u4e0a\u7535\u9ed8\u8ba4\u72b6\u6001\u3001\u590d\u7528\u3001\u9a71\u52a8\u80fd\u529b\u3001\u4e0a\u4e0b\u62c9\u3001\u65bd\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5728 \u300aRM-2500-5-X3M Register Reference Manual-GPIO&PIN-V1.1.pdf\u300b\u6587\u6863\u4e2d\u67e5\u8be2\u5bf9\u5e94\u7ba1\u811a\u7684gpio\u5bc4\u5b58\u5668\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.p,{children:["\u4ee5\u67e5\u8be2",(0,d.jsx)(n.code,{children:"gpio120"}),"\u53f7\u7ba1\u811a\u7684\u590d\u7528\u3001\u65b9\u5411\u63a7\u5236\u3001\u6570\u636e\u5bc4\u5b58\u5668\u5730\u5740\u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\uff1a"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u529f\u80fd\u590d\u7528\u5bc4\u5b58\u5668\u8bf4\u660e\uff1a"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6253\u5f00 \u300aPL-2500-3-X3 PIN SW Reg-V1.2.xls\u300b\uff0c\u9009\u62e9  ",(0,d.jsx)(n.code,{children:"PIN SW Register"})," \u7684\u6570\u636e\u8868\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u7b2c\u4e00\u884c\u4f1a\u6807\u660e\u529f\u80fd\u590d\u7528\u7684\u57fa\u5730\u4e3a",(0,d.jsx)(n.code,{children:"0xA6004000"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728",(0,d.jsx)(n.code,{children:"GPIO"}),"\u5217\u627e\u5230 ",(0,d.jsx)(n.code,{children:"GPIO[120]"}),"\uff0c\u8fd9\u4e00\u9879\u5bf9\u5e94\u7684\u4fe1\u606f\u5373\u662f\u7ba1\u811a ",(0,d.jsx)(n.code,{children:"120"}),"\u7684\u4e0a\u7535\u9ed8\u8ba4\u72b6\u6001\u3001\u590d\u7528\u3001\u9a71\u52a8\u80fd\u529b\u3001\u4e0a\u4e0b\u62c9\u3001\u65bd\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image-20220529112804426",src:i(78897).A+"",width:"1448",height:"486"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u627e\u5230\u4ee5\u4e0a\u914d\u7f6e\u9879\u540e\uff0c\u57fa\u5730\u5740\u52a0\u4e0a\u504f\u79fb\u7684\u503c\u5373\u8be5\u7ba1\u5bb6\u7684\u590d\u7528\u63a7\u5236\u5bc4\u5b58\u5668\uff0c\u4f8b\u5982",(0,d.jsx)(n.code,{children:"GPIO120"}),"\u7684\u590d\u7528\u5bc4\u5b58\u5668\u4e3a ",(0,d.jsx)(n.code,{children:"0xA6004000 + 0x1E0 = 0xA600410E0"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u914d\u7f6e\u529f\u80fd\u590d\u7528\u5bc4\u5b58\u5668\u65f6\uff0c\u5efa\u8bae\u5148\u628a\u8be5\u503c\u5148\u8bfb\u51fa\u6765\uff0c\u7136\u540e\u8bbe\u7f6e\u60f3\u8981\u8bbe\u7f6e\u7684\u5bf9\u5e94bit\u540e\u518d\u5199\u56de\u3002\u4f8b\u5982\u914d\u7f6e",(0,d.jsx)(n.code,{children:"GPIO120"}),"\u4e3a",(0,d.jsx)(n.code,{children:"GPIO"}),"\u6a21\u5f0f\uff0c\u5219\u53ea\u8bbe\u7f6e ",(0,d.jsx)(n.code,{children:"0xA600410E0"})," \u5bc4\u5b58\u5668\u7684\u4f4e\u4e24\u4f4d\u4e3a",(0,d.jsx)(n.code,{children:"0x3"}),"\uff0c\u4fdd\u6301\u5176\u4ed6\u542f\u52a8\u5f3a\u5ea6\u3001\u4e0a\u4e0b\u62c9\u3001\u65af\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e\u4e0d\u53d8\uff0c\u9664\u975e\u4f60\u660e\u786e\u77e5\u9053\u4f60\u9700\u8981\u5bf9\u5b83\u4eec\u4e5f\u505a\u4fee\u6539\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"GPIO\u63a7\u5236\u548c\u6570\u636e\u5bc4\u5b58\u5668\uff1a"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6253\u5f00 \u300aRM-2500-5-X3M Register Reference Manual-GPIO&PIN-V1.1.pdf\u300b\uff0c\u672c\u6587\u6863\u5206\u4e24\u4e2a\u4e3b\u8981\u7ae0\u8282\uff0c",(0,d.jsx)(n.code,{children:"GPIO"}),"\u7ae0\u8282\u662f\u63cf\u8ff0\u7ba1\u811a\u7684\u63a7\u5236\u5bc4\u5b58\u5668\u3001\u8f93\u51fa\u6570\u636e\u5bc4\u5b58\u5668\u3001\u8f93\u5165\u6570\u636e\u5bc4\u5b58\u5668\u548c\u7ba1\u811a\u7535\u538b\u57df\u914d\u7f6e\u5bc4\u5b58\u5668\uff08\u504f\u79fb\u4e3a0x170 \u548c 0x174\u7684\u4e24\u4e2a\u5bc4\u5b58\u5668\u662f\u7ba1\u811a\u7535\u538b\u57df\u914d\u7f6e\u5bc4\u5b58\u5668\uff09\u3002",(0,d.jsx)(n.code,{children:"Pin Group"}),"\u7ae0\u8282\u4e0e\u5bc4\u5b58\u5668\u590d\u7528\u300aPL-2500-3-X3 PIN SW Reg-V1.2.xls\u300b\u8868\u5185\u5bb9\u4e00\u6837\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u63a7\u5236\u3001\u6570\u636e\u5bc4\u5b58\u5668\u7684\u57fa\u5730\u5740\u5728\u6bcf\u9875\u8868\u683c\u7684\u7b2c\u4e00\u884c\u4f1a\u663e\u793a\uff0c\u4e3a",(0,d.jsx)(n.code,{children:"BASE_ADDR:0xA600_3000 "}),"\uff0c\u67e5\u8be2\u5230\u7684\u504f\u79fb\u5730\u5740\u52a0\u4e0a\u672c\u57fa\u5730\u5740\u5c31\u662f\u5bf9\u5e94\u7684\u5b8c\u6574\u5bc4\u5b58\u5668\u5730\u5740\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65ed\u65e5X3M\u82af\u7247\u603b\u5171\u6709",(0,d.jsx)(n.code,{children:"120"}),"\u4e2a\u53ef\u7528\u7684\u7ba1\u811a\uff0c\u5206\u62107\u4e2abank\uff0c\u6bcf\u4e2abank\u6700\u591a16\u4e2a\u7ba1\u811a\uff0c\u63a7\u5236\u548c\u6570\u636e\u5bc4\u5b58\u5668\u4ee5\u4e00\u4e2abank\u4e3a\u4e00\u4e2a\u63a7\u5236\u5355\u5143\u3002\u4f8b\u5982",(0,d.jsx)(n.code,{children:"GPIO120"}),"\u7684bank\u4e3a",(0,d.jsx)(n.code,{children:"120\u9664\u4ee516\u540e\u53d6\u6574\u4e3a7"}),"\uff0c\u5728bank\u4e2d\u7684\u7ba1\u811a\u7f16\u53f7\u4e3a",(0,d.jsx)(n.code,{children:"120\u5bf916\u53d6\u4f59\u6570\u4e3a8"}),"\u3002\u7531\u6b64\u6211\u4eec\u5c31\u53ef\u4ee5\u627e\u5230\u5bf9\u5e94\u7684\u5bc4\u5b58\u5668\u5730\u5740\u4e3a\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,d.jsx)(n.code,{children:"GPIO120"}),"\u7684\u5bc4\u5b58\u5668\u5373\u4ee5\u4e0b\u56fe\u4e2d\u5bc4\u5b58\u5668",(0,d.jsx)(n.code,{children:"GPIO7_xxx"}),"\u4e2d\u5bf9\u5e94\u7684",(0,d.jsx)(n.code,{children:"bit8"}),"\uff08\u4ecebit0\u5f00\u59cb\u8ba1\u7b97\uff09\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image-20220529115057783",src:i(72445).A+"",width:"1008",height:"283"})}),"\n",(0,d.jsx)(n.h3,{id:"gpio\u5e2e\u52a9\u5de5\u5177",children:"GPIO\u5e2e\u52a9\u5de5\u5177"}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7\u4ee5\u4e0a\u7ae0\u8282\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u5177\u5907\u81ea\u4e3b\u67e5\u8be2\u3001\u8bbe\u7f6e\u5404\u7ba1\u811a\u7684\u914d\u7f6e\u7684\u80fd\u529b\u3002\u9488\u5bf9\u65ed\u65e5X3M\u82af\u7247\uff0cD-Robotics \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5c0f\u8f6f\u4ef6\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5b8c\u6210\u4ee5\u4e0a\u5bc4\u5b58\u5668\u7684\u67e5\u8be2\uff0c\u5e76\u4e14\u63d0\u4f9b\u7ba1\u811a\u8bbe\u7f6e\u7684\u5e2e\u52a9\u547d\u4ee4\uff0c\u53ef\u4ee5\u4ece ",(0,d.jsx)(n.a,{href:"https://pan.horizon.ai/index.php/s/JTitK4g8SLzSGa6/download?path=%2FGpio_tools&files=%E5%9C%B0%E5%B9%B3%E7%BA%BFGPIO%E5%B8%AE%E5%8A%A9%E5%B7%A5%E5%85%B7v1.0.exe",children:"D-Robotics GPIO\u5e2e\u52a9\u5de5\u5177"}),"\u4e0b\u8f7d\u4f7f\u7528\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5de5\u5177\u7684\u754c\u9762\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u7528\u6237\u53ef\u4ee5\u63a7\u5236\u8f93\u5165 ",(0,d.jsx)(n.code,{children:"GPIO\u7f16\u53f7"})," \u6216\u8005 ",(0,d.jsx)(n.code,{children:"GPIO\u7ba1\u811a "}),"\u6765\u67e5\u8be2\u7ba1\u811a\u7684\u5404\u79cd\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u5e76\u4e14\u751f\u6210gpio\u529f\u80fd\u7684\u5e2e\u52a9\u547d\u4ee4\uff0c\u547d\u4ee4\u8bf4\u660e\u8bf7\u67e5\u770b ",(0,d.jsx)(n.a,{href:"#user-space",children:"GPIO\u7528\u6237\u7a7a\u95f4\u4f7f\u7528\u8bf4\u660e"}),"\u4e86\u89e3\u8be6\u60c5\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image-20220529120102028",src:i(63329).A+"",width:"432",height:"452"})}),"\n",(0,d.jsx)(n.h2,{id:"\u9a71\u52a8\u4ee3\u7801",children:"\u9a71\u52a8\u4ee3\u7801"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"drivers/gpio/gpio-hobot-x3.c # gpio\u9a71\u52a8\u6e90\u6587\u4ef6\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5185\u6838\u914d\u7f6e",children:"\u5185\u6838\u914d\u7f6e"}),"\n",(0,d.jsx)(n.p,{children:"CONFIG_GPIO_HOBOT_X3"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image-20220321232551078",src:i(23162).A+"",width:"793",height:"544"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5185\u6838dts\u914d\u7f6e",children:"\u5185\u6838DTS\u914d\u7f6e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot-xj3.dtsi */\ngpios: gpio@0xA6003000 {\n    compatible = "hobot,x3-gpio";\n    reg = <0 0xA6003000 0 0x100>;\n    gpio-controller;\n    #gpio-cells = <2>; \n    gpio-ranges = <&pinctrl 0 0 121>;\n    interrupts = <0 54 4>;\n    interrupt-parent = <&gic>;\n    interrupt-controller;\n    #interrupt-cells = <2>; \n};\n'})}),"\n",(0,d.jsx)(n.admonition,{title:"\u5907\u6ce8",type:"info",children:(0,d.jsx)(n.p,{children:"hobot-xj3.dtsi\u4e2d\u7684\u8282\u70b9\u4e3b\u8981\u58f0\u660e\u4e00\u4e9b\u5bc4\u5b58\u5668\u3001\u4e2d\u65ad\u7684resource\uff0c\u5747\u4e3asoc\u5171\u6709\u7279\u6027\uff0c\u548c\u5177\u4f53\u7535\u8def\u677f\u65e0\u5173\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u7528\u4fee\u6539\u3002"})}),"\n",(0,d.jsx)(n.h2,{id:"gpio\u4f7f\u7528",children:"GPIO\u4f7f\u7528"}),"\n",(0,d.jsx)(n.h3,{id:"kernel-space",children:"Kernel Space"}),"\n",(0,d.jsx)(n.h4,{id:"dts\u914d\u7f6e",children:"DTS\u914d\u7f6e"}),"\n",(0,d.jsx)(n.p,{children:"GPIO\u8bbe\u5907\u6811\u8282\u70b9\u7684\u5c5e\u6027\u547d\u540d\u65b9\u5f0f\u4e00\u822c\u4e3anames-gpios\u6216names-gpio\uff0c\u4e3e\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot/hobot-x3-sdb.dtsi */\n&usb_id {\n        status = "okay";  \n        id-gpio = <&gpios 65 GPIO_ACTIVE_HIGH>;\n        host-rst-gpio = <&gpios 115 GPIO_ACTIVE_HIGH>;\n        host-exrst-gpio = <&gpios 38 GPIO_ACTIVE_LOW>;\n};\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u9a71\u52a8\u4ee3\u7801\u63a5\u53e3",children:"\u9a71\u52a8\u4ee3\u7801\u63a5\u53e3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:"/* include/linux/gpio.h */\n/* \u7533\u8bf7GPIO */\nint gpio_request(unsigned gpio, const char *label);\n/* GPIO\u521d\u59cb\u5316\u4e3a\u8f93\u51fa\u3002\u5e76\u8bbe\u7f6e\u8f93\u51fa\u7535\u5e73*/\nint gpio_direction_output(unsigned gpio, int value);\n/* GPIO\u521d\u59cb\u5316\u4e3a\u8f93\u5165 */\nint gpio_direction_input(unsigned gpio);\n/* \u83b7\u53d6GPIO\u7684\u7535\u5e73 */\nint gpio_get_value(unsigned int gpio);\n/* \u8bbe\u7f6eGPIO\u7684\u7535\u5e73 */\nvoid gpio_set_value(unsigned int gpio, int value);\n/* \u91ca\u653eGPIO */\nvoid gpio_free(unsigned gpio)\n/* \u7533\u8bf7GPIO\u4e2d\u65ad\uff0c\u8fd4\u56de\u7684\u503c\u53ef\u4ee5\u4f20\u7ed9request_irq\u548cfree_irq */\nint gpio_to_irq(unsigned int gpio);\n"})}),"\n",(0,d.jsx)(n.h4,{id:"x3j3-gpio-irq",children:"X3J3 GPIO IRQ"}),"\n",(0,d.jsx)(n.p,{children:"X3 GPIO\u5171\u6709121\u4e2apin\uff0c\u786c\u4ef6\u4e2d\u65ad\u6570\u91cf\u4e3a4\u4e2a\uff0c\u4f7f\u7528\u65f6\u901a\u8fc7GPIO\u6a21\u5757\u5bc4\u5b58\u5668\u7684\u8bbe\u7f6e\u53ef\u4ee5\u5c06121\u4e2apin\u4e2d\u7684\u6700\u591a4\u4e2apin\u6620\u5c04\u52304\u4e2aIRQ\u4e2d\u65ad\u4e0a\uff0c\u6620\u5c04\u8fc7\u7a0b\u7531GPIO\u9a71\u52a8\u7ba1\u7406\uff0c\u901a\u8fc7gpio_to_irq\u7533\u8bf7GPIO IRQ\u53f7\uff0c4\u4e2airq\u90fd\u88ab\u7533\u8bf7\u5b8c\uff0c\u540e\u7eed\u7533\u8bf7\u90fd\u4f1a\u5931\u8d25\uff0cirq\u6620\u5c04\u7ba1\u7406\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'/* drivers/gpio/gpio-hobot-x3.c */\n/* \u521d\u59cb\u5316irq\u6620\u5c04\u8868 */\nvoid init_irqbank*struct x3_gpio *gpo) {\n    int i = 0;\n    for (i = 0; i < GPIO_IRQ_BANK_NUM; i++) {\n        gpo->irqbind[i] = GPIO_IRQ_NO_BIND;\n    }\n}\n\n/* request irq\u5e76\u66f4\u65b0\u6620\u5c04\u8868 */\nint request_irqbank(struct x3_gpio *gpo, unsigned long gpio) {\n    int i = 0, index = GPIO_IRQ_NO_BIND;\n    index = find_irqbank(gpo, gpio);\n    if(index == GPIO_IRQ_NO_BIND) {\n        for (i = 0; i < GPIO_IRQ_BANK_NUM; i++) {\n            if(gpo->irqbind[i] == GPIO_IRQ_NO_BIND) {\n                gpo->irqbind[i] = gpio;\n                index = i;\n                break;\n            }\n        }\n    } else {\n        dev_err(gpo->dev, "gpio(%ld) has be binded\\n", gpio);\n        return GPIO_IRQ_NO_BIND;\n    }\n    return index;\n}\n\n/* free gpio\u5e76\u66f4\u65b0\u6620\u5c04\u8868 */\nvoid release_irqbank(struct x3_gpio *gpo, unsigned long gpio) {\n    int index = GPIO_IRQ_NO_BIND;\n    index = find_irqbank(gpo, gpio);\n    if(index != GPIO_IRQ_NO_BIND) {\n        gpo->irqbind[index] = GPIO_IRQ_NO_BIND;\n    }\n}\n'})}),"\n",(0,d.jsx)(n.admonition,{title:"\u5907\u6ce8",type:"info",children:(0,d.jsx)(n.p,{children:"X3 GPIO\u5728Kernel Space\u7684\u63a5\u53e3\u90fd\u662fLinux\u7684\u6807\u51c6\u63a5\u53e3\uff0c\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u8003Documentation/gpio/consumer.txt\u3002"})}),"\n",(0,d.jsx)(n.h3,{id:"user-space",children:"User Space"}),"\n",(0,d.jsx)(n.h4,{id:"\u63a7\u5236\u63a5\u53e3",children:"\u63a7\u5236\u63a5\u53e3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"/sys/class/gpio/export #\u7528\u6237\u7a7a\u95f4\u53ef\u4ee5\u901a\u8fc7\u5199\u5165gpio\u53f7\u7533\u8bf7\u5c06gpio\u7684\u63a7\u5236\u6743\u5bfc\u51fa\u5230\u7528\u6237\u7a7a\u95f4\uff0c\u6bd4\u5982 echo 42 > export\n/sys/class/gpio/unexport # \u548cexport\u76f8\u53cd\n/sys/class/gpio/gpiochip0 # gpio\u63a7\u5236\u5668\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u8c03\u7528\u63a5\u53e3",children:"\u8c03\u7528\u63a5\u53e3"}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528export\u5bfc\u51fagpio\u7684\u63a7\u5236\u6743\u4ee5\u540e\u4f1a\u6709\u8def\u5f84/sys/class/gpio/gpio42/\uff0c\u8def\u5f84\u4e0b\u6709\u5982\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:'direction\uff1a\u8868\u793aGPIO\u7aef\u53e3\u65b9\u5411\uff0c\u8bfb\u53d6\u4e3a"in"\u6216"out"\uff0c\u5199\u5165"in"\u6216\u8005"out"\u53ef\u4ee5\u8bbe\u7f6e\u8f93\u5165\u6216\u8f93\u51fa'}),"\n",(0,d.jsx)(n.li,{children:"value\uff1a\u8868\u793aGPIO\u7684\u7535\u5e73\uff0c0\u4e3a\u4f4e\u7535\u5e73\uff0c1\u4e3a\u9ad8\u7535\u5e73\uff0c\u5982\u679cGPIO\u914d\u7f6e\u4e3a\u8f93\u51fa\uff0c\u5219value\u503c\u53ef\u5199"}),"\n",(0,d.jsx)(n.li,{children:'edge\uff1a\u8868\u793a\u4e2d\u65ad\u89e6\u53d1\u65b9\u5f0f\uff0c\u6709"none" "rising" "falling" "both" 4\u79cd\u7c7b\u578b\uff0c"none"\u8868\u793aGPIO\u4e0d\u4e3a\u4e2d\u65ad\u5f15\u811a\uff0c"rising"\u8868\u793a\u5f15\u811a\u4e3a\u4e0a\u5347\u6cbf\u89e6\u53d1\u7684\u4e2d\u65ad\uff0c"falling"\u8868\u793a\u5f15\u811a\u4e3a\u4e0b\u964d\u6cbf\u89e6\u53d1\u7684\u4e2d\u65ad\uff0c"both"\u8868\u793a\u5f15\u811a\u4e3a\u8fb9\u6cbf\u89e6\u53d1\u7684\u4e2d\u65ad\u3002'}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8c03\u7528\u793a\u4f8b",children:"\u8c03\u7528\u793a\u4f8b"}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u5bfc\u51fa  JTG_TRSTN \u7ba1\u811a\uff0c\u8bbe\u7f6e\u4e3a\u8f93\u51fa\u6a21\u5f0f\uff0c\u8f93\u51fa\u9ad8\u7535\u5e73\uff0c\u6700\u540e\u53cd\u5bfc\u51fa\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"echo 4 > /sys/class/gpio/export\necho out > /sys/class/gpio/gpio4/direction\necho 1 > /sys/class/gpio/gpio4/value\n# echo 0 > /sys/class/gpio/gpio4/value\necho 4 > /sys/class/gpio/unexport\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u8c03\u8bd5\u63a5\u53e3",children:"\u8c03\u8bd5\u63a5\u53e3"}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u5728\u5185\u6838\u914d\u7f6e\u4e2d\u6253\u5f00\u4e86Linux Kernel\u7684CONFIG_DEBUG_FS \u9009\u9879\uff0c\u5e76\u4e14\u6302\u8f7d\u4e86debugfs\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"mount -t debugfs none /sys/kernel/debug\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5219\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u8282\u70b9\u67e5\u770bGPIO\u7684\u7533\u8bf7\u5217\u8868\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"root@x3dvbx3-hynix1G-2666:~# cat /sys/kernel/debug/gpio\ngpiochip0: GPIOs 0-120, parent: platform/a6003000.gpio:\ngpio-42  (           |sysfs     ) in hi\ngpio-64  (           |cd        ) in lo IRQ\ngpio-65  (           |id        ) in hi IRQ\ngpio-100 (           |?         ) out lo\ngpio-120 (           |?         ) out hi\nroot@x3dvbx3-hynix1G-2666:~#\n"})}),"\n",(0,d.jsx)(n.admonition,{title:"\u5907\u6ce8",type:"info",children:(0,d.jsx)(n.p,{children:"X3 GPIO\u5728User Space\u7684\u63a5\u53e3\u90fd\u662fLinux\u7684\u6807\u51c6\u63a5\u53e3\uff0c\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u8003Documentation/gpio/sysfs.txt"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},63329:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/image-20220529120102028-fa37f833283b29eff798e26d8661e330.png"},72445:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/gpio_control_and_data_register_cn-7470267bf9af172e8affefe90c530d6d.png"},78897:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/function_register_cn-fa4048f96aa0394ba4d48051b3910b7b.png"}}]);