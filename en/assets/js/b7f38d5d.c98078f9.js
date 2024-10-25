"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8180],{96096:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=i(74848),r=i(28453);const c={sidebar_position:3},s="I2C Debugging Guide",d={id:"Advanced_development/linux_development/driver_development/driver_i2c_dev",title:"I2C Debugging Guide",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/driver_development/driver_i2c_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_i2c_dev",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_i2c_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/07_Advanced_development/02_linux_development/driver_development/driver_i2c_dev.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"UART Driver Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_uart_dev"},next:{title:"GPIO Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_gpio_dev"}},o={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Driver Code",id:"driver-code",level:2},{value:"Kernel Configuration Location",id:"kernel-configuration-location",level:3},{value:"Kernel DTS Node Configuration",id:"kernel-dts-node-configuration",level:3},{value:"I2C Usage",id:"i2c-usage",level:2},{value:"Kernel Space",id:"kernel-space",level:3},{value:"User Space",id:"user-space",level:3},{value:"Frequency Setting",id:"frequency-setting",level:4},{value:"I2c-tools",id:"i2c-tools",level:4}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"i2c-debugging-guide",children:"I2C Debugging Guide"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The X3 chip provides a standard I2C bus, where the I2C bus controller passes information between devices connected to the bus through the Serial Data Line (SDA) and Serial Clock Line (SCL). Each device has a unique address (whether it's a microcontroller, LCD controller, memory, or keyboard interface) and can function as both a transmitter and a receiver (depending on the device's functionality). The I2C controller supports the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compatibility with I2C and SMBus buses."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Frequency support for 100KHz and 400KHz."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Support for 7-bit and 10-bit addressing modes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"driver-code",children:"Driver Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"drivers/i2c/busses/i2c-hobot.c # I2C driver code source file\ninclude/linux/i2c-hobot.h # I2C driver code header file\n"})}),"\n",(0,t.jsx)(n.h3,{id:"kernel-configuration-location",children:"Kernel Configuration Location"}),"\n",(0,t.jsx)(n.p,{children:"CONFIG_I2C_HOBOT"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220321230754098",src:i(20883).A+"",width:"793",height:"544"})}),"\n",(0,t.jsx)(n.h3,{id:"kernel-dts-node-configuration",children:"Kernel DTS Node Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The X3 chip supports a maximum of 6 I2C buses, and the DTS configuration is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot-xj3.dtsi */\ni2c0: i2c@0xA5009000 {\n    compatible = "hobot,hobot-i2c";\n    reg = <0 0xA5009000 0 0x100>;\n    interrupt-parent = <&gic>;\n    interrupts = <0 38 4>;\n    clocks = <&i2c0_mclk>;\n    clock-names = "i2c_mclk";\n    bus-speed = <400000>;\n    resets = <&rst 0x50 10>;\n    reset-names = "i2c0";\n    status = "disabled";\n    pinctrl-names = "default";\n    pinctrl-0 = <&i2c0_func>;\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note:\nThe nodes in hobot-xj3.dtsi mainly declare some registers and interrupts resources, which are common features of the soc and are not specific to a particular circuit board. In general, they do not need to be modified."}),"\n",(0,t.jsx)(n.h2,{id:"i2c-usage",children:"I2C Usage"}),"\n",(0,t.jsx)(n.p,{children:"For the usage of I2C, detailed instructions can be found in Linux Kernel's Documentation/i2c directory. This document mainly lists the special parts of the X3J3 I2C driver interface."}),"\n",(0,t.jsx)(n.h3,{id:"kernel-space",children:"Kernel Space"}),"\n",(0,t.jsx)(n.p,{children:"The X3J3 I2C driver provides an interface in Kernel Space that allows setting the I2C transmission frequency. Here is an example of usage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#include <linux/i2c-hobot.h>\n...\n{\n    struct client_request *client_data = (struct client_request *)(client->adapter->algo_data);\n    ...\n    client_data->client_req_freq = 100000; // Set the I2C transmission frequency to 100k\n    ret = i2c_transfer(client->adapter, request, ARRAY_SIZE(request));\n    ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is important to note that if the target transmission frequency is different from the default frequency, the target frequency needs to be set before each I2C transmission. This means that the frequency change only takes effect for a single transmission. This design ensures that changing the frequency and transmitting for a specific driver does not affect other drivers. The corresponding implementation can be found in i2c-hobot.c:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'/* Check if the frequency needs to be changed, and set it according to the target frequency */\nstatic void recal_clk_div(struct hobot_i2c_dev *dev)\n{\n        u32 clk_freq = 0;\n        int temp_div = 0;\n        struct client_request *client_req;\n\n        client_req = (struct client_request *)dev->adapter.algo_data;\n        clk_freq = clk_get_rate(dev->clk);\n        if (client_req->client_req_freq != 0) {\n                temp_div = DIV_ROUND_UP(clk_freq, client_req->client_req_freq) - 1;\n        } else {\n        temp_div = DIV_ROUND_UP(clk_freq, dev->default_trans_freq) - 1;\n        }\n        dev->clkdiv = DIV_ROUND_UP(temp_div, 8) - 1;\n        if (dev->clkdiv > I2C_MAX_DIV) {\n                dev_warn(dev->dev, "clkdiv too large, set to 255");\n                dev->clkdiv = I2C_MAX_DIV;\n        }\n}\n\n/* Reset I2C frequency to the default frequency */\nstatic void reset_client_freq(struct hobot_i2c_dev *dev)\n{\n        struct client_request *client_req;\n\n        client_req = (struct client_request *)dev->adapter.algo_data;\n        client_req->client_req_freq = 0;\n}\n\n/* I2C master_xfer function */\nstatic int hobot_i2c_xfer(struct i2c_adapter *adap, struct i2c_msg msgs[], int num)\n{\n    ...\n    recal_clk_div(dev);\n    ... /* I2C transfer */\n    reset_client_freq(dev);\n    ...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"user-space",children:"User Space"}),"\n",(0,t.jsx)(n.p,{children:"Typically, I2C devices are controlled by kernel drivers, but it is also possible to access all devices on the bus from user space using the /dev/i2c-%d interface. Detailed information can be found in the Documentation/i2c/dev-interface document in the kernel."}),"\n",(0,t.jsx)(n.h4,{id:"frequency-setting",children:"Frequency Setting"}),"\n",(0,t.jsx)(n.p,{children:"To check the frequency of I2C-N, taking i2c-0 as an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@x3dvbx3-hynix1G-2666:~# cat /sys/bus/i2c/devices/i2c-0/speed\n400000\n"})}),"\n",(0,t.jsx)(n.p,{children:"To set the frequency of I2C-N, taking i2c-0 as an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@x3dvbx3-hynix1G-2666:~# echo 100000 > /sys/bus/i2c/devices/i2c-0/speed\nroot@x3dvbx3-hynix1G-2666:~# cat /sys/bus/i2c/devices/i2c-0/speed\n100000\n"})}),"\n",(0,t.jsx)(n.p,{children:"Unlike setting the I2C frequency in kernel space, which only applies to a single transfer, setting the I2C frequency in user space is persistent. Use with caution!"}),"\n",(0,t.jsx)(n.h4,{id:"i2c-tools",children:"I2c-tools"}),"\n",(0,t.jsx)(n.p,{children:"i2c-tools is a set of open-source tools that has been cross-compiled and included in the rootfs of the X3J3 system software. Customers can use it directly:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"i2cdetect - used to list the I2C bus and all devices on the bus"}),"\n",(0,t.jsx)(n.li,{children:"i2cdump - display all register values of an i2c device"}),"\n",(0,t.jsx)(n.li,{children:"i2cget - read the value of a specific register of an i2c device"}),"\n",(0,t.jsx)(n.li,{children:"i2cset - write a value to a specific register of an i2c device- i2ctransfer - Can read and write the values of one or multiple registers of an i2c device."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},20883:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-20220321230754098-6d2ba97fc4e2d7c334b1c690b8c78a47.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(96540);const r={},c=t.createContext(r);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);