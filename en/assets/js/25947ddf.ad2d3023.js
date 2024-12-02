"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5160],{4823:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(74848),d=i(28453);const t={sidebar_position:3},r="LCD Driver Debugging Guide",o={id:"Advanced_development/linux_development/driver_development_x5/driver_lcd",title:"LCD Driver Debugging Guide",description:"1. Specifications",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/driver_development_x5/driver_lcd.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development_x5",slug:"/Advanced_development/linux_development/driver_development_x5/driver_lcd",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development_x5/driver_lcd",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/driver_development_x5/driver_lcd.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"I2C\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development_x5/driver_i2c_dev"},next:{title:"GPIO\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development_x5/driver_gpio_dev"}},l={},c=[{value:"1. Specifications",id:"1-specifications",level:2},{value:"2. Debugging Process",id:"2-debugging-process",level:2},{value:"Kernel Driver Layer",id:"kernel-driver-layer",level:3},{value:"Kernel Device Tree Level",id:"kernel-device-tree-level",level:3},{value:"3. Compile",id:"3-compile",level:2},{value:"4. Testing",id:"4-testing",level:2},{value:"5. Remarks",id:"5-remarks",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lcd-driver-debugging-guide",children:"LCD Driver Debugging Guide"}),"\n",(0,s.jsx)(n.h2,{id:"1-specifications",children:"1. Specifications"}),"\n",(0,s.jsx)(n.p,{children:"The MIPI-DSI interface specifications for X5 are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Supports up to four data lanes"}),"\n",(0,s.jsxs)(n.li,{children:["The maximum rate for each lane is ",(0,s.jsx)("font",{color:"red",children:"2.5Gbps"})]}),"\n",(0,s.jsxs)(n.li,{children:["Supports ",(0,s.jsx)("font",{color:"red",children:"Non-Burst-Sync-Pulse"})," synchronous pulse mode, ",(0,s.jsx)("font",{color:"red",children:"Non-Burst-Sync-Even"})," synchronous event mode, and Burst mode"]}),"\n",(0,s.jsxs)(n.li,{children:["Supports ",(0,s.jsx)("font",{color:"red",children:"MIPI_DSI_CLOCK_NON_CONTINUOUS"})," non-continuous clock mode and ",(0,s.jsx)("font",{color:"red",children:"MIPI_DSI_CLOCK_CONTINUOUS"})," continuous clock mode"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-debugging-process",children:"2. Debugging Process"}),"\n",(0,s.jsx)(n.p,{children:"Before adding a new screen driver, the following information needs to be determined:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The screen's timing, including hbp (horizontal back porch), hfp (horizontal front porch), hsa (horizontal sync active), vbp (vertical back porch), vfp (vertical front porch), and vsa (vertical sync active)"}),"\n",(0,s.jsx)(n.li,{children:"The screen's initialization sequence"}),"\n",(0,s.jsx)(n.li,{children:"The supported transmission mode of the screen, whether it is burst or non-burst"}),"\n",(0,s.jsx)(n.li,{children:"The supported clock mode of the screen, whether it is continuous or non-continuous"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Taking the ",(0,s.jsx)(n.code,{children:"JC050HD134"})," screen as an example, the following information can be derived from the configuration provided by the manufacturer:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#define Width 720\n#define Height 1280\n\n#define VFP 20\n#define VBP 20\n#define VSA 4\n\n#define HFP 32\n#define HBP 20\n#define HSA 20\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kernel-driver-layer",children:"Kernel Driver Layer"}),"\n",(0,s.jsxs)(n.p,{children:["In the kernel, there is a pre-debugged reference driver: ",(0,s.jsx)(n.code,{children:"panel-atk-md0550.c"}),". Future panel drivers can be derived from this driver."]}),"\n",(0,s.jsxs)(n.p,{children:["Copy the ",(0,s.jsx)(n.code,{children:"panel-atk-md0550.c"})," file from ",(0,s.jsx)(n.code,{children:"kernel/drivers/gpu/drm/panel/"})," and rename it as ",(0,s.jsx)(n.code,{children:"panel-jc-050hd134.c"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following modifications are based on ",(0,s.jsx)(n.code,{children:"panel-jc-050hd134.c"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"name"})," attribute in ",(0,s.jsx)(n.code,{children:"panel_simple_dsi_driver"})," to ",(0,s.jsx)(n.code,{children:"panel-jc-050hd134"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'static struct mipi_dsi_driver panel_simple_dsi_driver = {\n\t.driver =\n\t\t{\n\t\t\t.name\t\t= "panel-jc-050hd134",\n\t\t\t.of_match_table = dsi_of_match,\n\t\t},\n\t.probe\t  = panel_simple_dsi_probe,\n\t.remove\t  = panel_simple_dsi_remove,\n\t.shutdown = panel_simple_dsi_shutdown,\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"drm_display_mode"})," structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"static const struct drm_display_mode jc_050hd134_mode = { // Change structure name to jc_050hd134_mode\n    .clock       = 65000, // Pixel clock in kHz, calculated by: fps * (htotal + vtotal)\n    .hdisplay    = 720, // Horizontal display area width\n    .hsync_start = 720 + 32, // hdisplay + hfp (Horizontal Front Porch)\n    .hsync_end   = 720 + 32 + 20, // hsync_start + hsa (Horizontal Sync Active)\n    .htotal      = 720 + 32 + 20 + 20, // hsync_end + hbp (Horizontal Back Porch)\n    .vdisplay    = 1280, // Vertical display area height\n    .vsync_start = 1280 + 20, // vdisplay + vfp (Vertical Front Porch)\n    .vsync_end   = 1280 + 20 + 4, // vsync_start + vsa (Vertical Sync Active)\n    .vtotal      = 1280 + 20 + 4 + 20, // vsync_end + vbp (Vertical Back Porch)\n    .flags       = DRM_MODE_FLAG_NHSYNC | DRM_MODE_FLAG_NVSYNC, // Polarity flags\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"panel_desc_dsi"})," structure as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"static const struct panel_desc_dsi jc_050hd134 = { // Rename structure to jc_050hd134\n    .desc =\n    {\n        .modes      = &jc_050hd134_mode, // Points to the timing structure\n        .num_modes  = 1, // Number of timing modes for this panel, typically 1\n        .bpc        = 8, // Bits per color, RGB888 means 8 bits per color, RGB666 means 6 bits per color\n        .size = // Physical size of the visible area in mm\n        {\n            .width  = 62,\n            .height = 110,\n        },\n        .connector_type = DRM_MODE_CONNECTOR_DSI, // DSI connector type\n    },\n    .flags   = MIPI_DSI_MODE_VIDEO | MIPI_DSI_MODE_VIDEO_SYNC_PULSE, // DSI mode flags, indicating video mode and non-burst mode\n    // For more flags, refer to kernel/include/drm/drm_mipi_dsi.h\n    .format  = MIPI_DSI_FMT_RGB888, // Panel color format\n    .lanes   = 4, // Number of data lanes\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"dsi_of_match"})," to prepare for binding the device tree:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'static const struct of_device_id dsi_of_match[] = {\n    {.compatible = "jc-050hd134", .data = &jc_050hd134}, // Bind the device tree compatible string to the panel description\n    {\n        /* sentinel */\n    }\n};\nMODULE_DEVICE_TABLE(of, dsi_of_match); // Register the device table for device tree matching\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"panel_simple_dsi_init"})," function. This function essentially calls the ",(0,s.jsx)(n.code,{children:"dsi_dcs_write_seq"})," function to write the MIPI initialization sequence to the panel."]}),"\n",(0,s.jsx)(n.p,{children:"If you receive the initialization parameters from the screen manufacturer in the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DSI_CMD(0x04);DSI_PA(0xB9);\nDSI_PA(0xF1);\nDSI_PA(0x12);\nDSI_PA(0x83);\n\nDSI_CMD(0x1C);DSI_PA(0xBA);\nDSI_PA(0x33); // 1\nDSI_PA(0x81); // 2\nDSI_PA(0x05); // 3\nDSI_PA(0xF9); // 4\nDSI_PA(0x0E); // 5\nDSI_PA(0x0E); // 6\nDSI_PA(0x20); // 7\nDSI_PA(0x00); // 8\nDSI_PA(0x00); // 9\nDSI_PA(0x00); //10\nDSI_PA(0x00); //11\nDSI_PA(0x00); //12\nDSI_PA(0x00); //13\nDSI_PA(0x00); //14\nDSI_PA(0x44); //15\nDSI_PA(0x25); //16\nDSI_PA(0x00); //17\nDSI_PA(0x91); //18\nDSI_PA(0x0A); //19\nDSI_PA(0x00); //20\nDSI_PA(0x00); //21\nDSI_PA(0x02); //22\nDSI_PA(0x4F); //23\nDSI_PA(0xD1); //24\nDSI_PA(0x00); //25\nDSI_PA(0x00); //26\nDSI_PA(0x37); //27\n\n......\n"})}),"\n",(0,s.jsx)(n.p,{children:"Convert to Driver Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dsi_dcs_write_seq(dsi, 0xb9, 0xF1, 0x12, 0x83);\ndsi_dcs_write_seq(dsi, 0xBA, 0x33, 0x81, 0x05, 0xF9, 0x0E, 0x0E, 0x20, 0x00, 0x00, 0x00,\n\t\t\t  0x00, 0x00, 0x00, 0x00, 0x44, 0x25, 0x00, 0x91, 0x0A, 0x00, 0x00, 0x02,\n\t\t\t  0x4F, 0xD1, 0x00, 0x00, 0x37);\n......\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can see that in the two sets of initialization sequences provided by the manufacturer, the first value written is the length of the initialization sequence itself. When converting this into driver code, you don't need to include it manually as it will be calculated automatically during the writing process."}),"\n",(0,s.jsx)(n.p,{children:"If the initialization sequence provided by the screen manufacturer looks like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"panel-init-sequence-zero = [\n 39 00 04 B9 FF 83 94\n 15 00 02 36 01\n 39 00 07 BA 63 03 68 6B B2 C0\n 39 00 0B B1 48 12 72 09 32 54 71 71 57 47\n......\n]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Converting to Driver Code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\tdsi_dcs_write_seq(dsi, 0xb9, 0xff, 0x83, 0x94);\n\tdsi_dcs_write_seq(dsi, 0x36, 0x01);\n\tdsi_dcs_write_seq(dsi, 0xba, 0x63, 0x03, 0x68, 0x6b, 0xb2, 0xc0);\n\tdsi_dcs_write_seq(dsi, 0xb1, 0x48, 0x12, 0x72, 0x09, 0x32, 0x54, 0x71, 0x71, 0x57, 0x47);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here, we will explain the conversion using the first sequence ",(0,s.jsx)(n.code,{children:"39 00 04 B9 FF 83 94"})," as an example:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"39"})," indicates that this sequence is written using the MIPI_DSI_DCS_LONG_WRITE (0x39) data type. When converting to driver code, you do not need to specify this manually; it will be automatically generated based on the length of the sequence."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"00"})," indicates that after this write operation, the system will sleep for 0ms, which can be implemented using the ",(0,s.jsx)(n.code,{children:"msleep(ms)"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"04"})," marks the length of the write sequence, which will be automatically generated, so you do not need to fill it in."]}),"\n",(0,s.jsx)(n.li,{children:"The remaining data represents the initialization sequence itself."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For displays that require specific power-on-reset timing, you can modify the GPIO behavior in the ",(0,s.jsx)(n.code,{children:"panel_simple_prepare"})," and ",(0,s.jsx)(n.code,{children:"panel_simple_unprepare"})," functions, which correspond to the initialization and de-initialization states respectively."]}),"\n",(0,s.jsx)(n.p,{children:"To apply the changes, modify the following files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"kernel/drivers/gpu/drm/panel/Kconfig"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"kernel/drivers/gpu/drm/panel/Makefile"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Kconfig:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'config DRM_PANEL_JC_050HD134\n\ttristate "JC 050HD134 panel"\n\tdepends on OF\n\tdepends on DRM_MIPI_DSI\n\tdepends on BACKLIGHT_CLASS_DEVICE\n\tselect VIDEOMODE_HELPERS\n\thelp\n\t  Say Y here if you want to enable support for the JC050HD134\n\t  panel with 720x1280 resolution. This panel support\n\t  MIPI DSI interface.\n'})}),"\n",(0,s.jsx)(n.p,{children:"Makefile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"obj-$(CONFIG_DRM_PANEL_JC_050HD134) += panel-jc-050hd134.o\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kernel-device-tree-level",children:"Kernel Device Tree Level"}),"\n",(0,s.jsxs)(n.p,{children:["At the board-level device tree, here we take ",(0,s.jsx)(n.code,{children:"kernel/arch/arm64/boot/dts/hobot/x5-evb.dts"})," as an example."]}),"\n",(0,s.jsxs)(n.p,{children:["Add the following properties to the ",(0,s.jsx)(n.code,{children:"mipi_dsi0"})," node:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'&mipi_dsi0 {\n\n    status = "okay";\n    dsi_panel0@0 {\n        compatible = "jc-050hd134"; // This should match dsi_of_match\n        reg = <0>;\n\n        pinctrl-names = "default";\n        pinctrl-0 = <&lsio_gpio0_14>; // Related to the reset pin\n        reset-gpios = <&ls_gpio0_porta 14 GPIO_ACTIVE_HIGH>; // Related to the reset pin. The active level should be decided based on your screen\'s specifications.\n        backlight = <&dsi_backlight>; // Backlight related\n\n        port {\n            panel_in: endpoint {\n                remote-endpoint =\n                    <&mipi_dsi_out>;\n            };\n        };\n    };\n\n};\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u52a0dsi_backlight\u8282\u70b9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'&dsi_backlight {\n    status = "okay";\n    pwms = <&lpwm1 1 1000000>; // Related to hardware PCB, check where the backlight PWM signal is sourced from. This indicates the backlight signal comes from LPWM1_1.\n    // For other properties and details, please refer to kernel/Documentation/devicetree/bindings/leds/backlight/pwm-backlight.yaml\n};\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"3-compile",children:"3. Compile"}),"\n",(0,s.jsx)(n.p,{children:"Please refer to section 7.2.1 to set up the build environment and successfully compile the image before proceeding with the following steps!"}),"\n",(0,s.jsxs)(n.p,{children:["Execute ",(0,s.jsx)(n.code,{children:"./mk_kernel.sh menuconfig"})," to enter the kernel configuration menu, and follow the path below to enter the Panels compilation options:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Device Drivers  ---\x3e\n    Graphics support  ---\x3e\n        Display Panels  ---\x3e\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find the JC 050HD134 panel, press the spacebar to compile it as a module. Then, save the configuration and exit."}),"\n",(0,s.jsxs)(n.p,{children:["Execute ",(0,s.jsx)(n.code,{children:"./mk_kernel.sh"})," to compile the kernel. After compilation, you can find the corresponding driver file ",(0,s.jsx)(n.code,{children:"panel-jc-050hd134.ko"})," in the ",(0,s.jsx)(n.code,{children:"deploy/kernel/modules/lib/modules/6.1.83/kernel/drivers/gpu/drm/panel"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["Execute the following commands to generate the required ",(0,s.jsx)(n.code,{children:".deb"})," packages:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"./mk_deb.sh hobot-dtb"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"./mk_deb.sh hobot-boot"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"./mk_deb.sh hobot-kernel-headers"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The resulting ",(0,s.jsx)(n.code,{children:".deb"})," packages, such as ",(0,s.jsx)(n.code,{children:"hobot-dtb*.dtb"}),", ",(0,s.jsx)(n.code,{children:"hobot-boot*.dtb"}),", and ",(0,s.jsx)(n.code,{children:"hobot-kernel-headers*.dtb"}),", will be located in the ",(0,s.jsx)(n.code,{children:"deploy/deb_pkgs/"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["These three ",(0,s.jsx)(n.code,{children:".deb"})," packages can be directly transferred to the device to update the device tree, kernel, driver files, and kernel headers. Alternatively, you can execute ",(0,s.jsx)(n.code,{children:"./pack_image.sh"})," to include them in the filesystem."]}),"\n",(0,s.jsx)(n.h2,{id:"4-testing",children:"4. Testing"}),"\n",(0,s.jsxs)(n.p,{children:["After powering on the RDK X5, the display-related drivers will be loaded, and the Ubuntu desktop will appear. To enable the JC-050HD134 panel, you need to edit the ",(0,s.jsx)(n.code,{children:"/etc/init.d/S70loadko"})," script. Add the ",(0,s.jsx)(n.code,{children:"modprobe panel-jc-050hd134"})," command before ",(0,s.jsx)(n.code,{children:"modprobe vio_n2d"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Since the RDK X5 system defaults to HDMI output, you need to switch to the MIPI DSI display mode by executing the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mv /etc/X11/xorg.conf.d/xorg_dsi_ignore.conf /etc/X11/xorg.conf.d/xorg_dsi_ignore.conf.disable\nmv /etc/X11/xorg.conf.d/xorg_hdmi_ignore.conf.disable /etc/X11/xorg.conf.d/xorg_hdmi_ignore.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also choose the display output method using ",(0,s.jsx)(n.code,{children:"raspi-config"}),". For details, refer to the ",(0,s.jsx)(n.a,{href:"../../../System_configuration/srpi-config#display-options",children:"Display Choose DSI or HDMI"})," section."]}),"\n",(0,s.jsx)(n.p,{children:"After rebooting the device, you should see the system desktop on the LCD screen."}),"\n",(0,s.jsx)(n.p,{children:"If the LCD does not display anything, please verify the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check if the screen has backlight or a control chip and whether the corresponding driver has been loaded successfully."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm whether the DRM and MIPI drivers have loaded correctly by running the command:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"root@ubuntu:~# dmesg | grep drm\n[    6.717478] systemd[1]: Starting Load Kernel Module drm...\n[   13.676055] vs-drm 3e000000.disp_apb:display-subsystem: bound 3e080000.vs-sif (ops sif_component_ops [vs_drm])\n[   13.676374] vs-drm 3e000000.disp_apb:display-subsystem: bound 3e000000.dc8000Nano (ops dc_component_ops [vs_drm])\n[   13.676514] vs-drm 3e000000.disp_apb:display-subsystem: bound 3e010000.bt1120 (ops bt1120_component_ops [vs_drm])\n[   13.676553] vs-drm 3e000000.disp_apb:display-subsystem: bound 3e000000.disp_apb:bt1120_bridge (ops bt1120_bridge_component_ops [vs_drm])\n[   13.676595] vs-drm 3e000000.disp_apb:display-subsystem: bound 3e000000.disp_apb:bt1120_bridge_wb (ops bt1120_bridge_component_ops [vs_drm])\n[   13.676710] vs-drm 3e000000.disp_apb:display-subsystem: bound 3e060000.mipi_dsi0 (ops dsi_component_ops [vs_drm])\n[   13.676834] vs-drm 3e000000.disp_apb:display-subsystem: bound 3e000000.disp_apb:dsi-encoder (ops encoder_component_ops [vs_drm])\n[   13.676940] vs-drm 3e000000.disp_apb:display-subsystem: bound 3e000000.disp_apb:hdmi-encoder (ops encoder_component_ops [vs_drm])\n[   13.678810] [drm] Initialized vs-drm 1.0.0 20191101 for 3e000000.disp_apb:display-subsystem on minor 0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["1.The message ",(0,s.jsx)(n.code,{children:"vs-drm 3e000000.disp_apb:display-subsystem: bound 3e060000.mipi_dsi0 (ops dsi_component_ops [vs_drm])"})," indicates that the MIPI DSI interface has been successfully loaded and initialized."]}),"\n",(0,s.jsxs)(n.p,{children:["2.The message ",(0,s.jsx)(n.code,{children:"[drm] Initialized vs-drm 1.0.0 20191101 for 3e000000.disp_apb:display-subsystem on minor 0"})," indicates that the display driver has been successfully loaded."]}),"\n",(0,s.jsxs)(n.p,{children:["3.To check the status of the connectors, run the following command:",(0,s.jsx)(n.code,{children:"modetest -M vs-drm -c"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"root@ubuntu:~# modetest -M vs-drm -c\nConnectors:\nid      encoder status          name            size (mm)       modes   encoders\n73      72      connected       DSI-1           800x480         1       72\n  modes:\n        index name refresh (Hz) hdisp hss hse htot vdisp vss vse vtot\n  #0 800x480 60.00 800 890 892 950 480 487 489 510 29070 flags: nhsync, nvsync; type: preferred, driver\n  props:\n        1 EDID:\n                flags: immutable blob\n                blobs:\n\n                value:\n        2 DPMS:\n                flags: enum\n                enums: On=0 Standby=1 Suspend=2 Off=3\n                value: 0\n        5 link-status:\n                flags: enum\n                enums: Good=0 Bad=1\n                value: 0\n        6 non-desktop:\n                flags: immutable range\n                values: 0 1\n                value: 0\n        4 TILE:\n                flags: immutable blob\n                blobs:\n\n                value:\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["Test with ",(0,s.jsx)(n.code,{children:"modetest"})," command"]})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Use the following command to stop the ",(0,s.jsx)(n.code,{children:"lightdm"})," desktop:",(0,s.jsx)(n.code,{children:"sudo systemctl stop lightdm"})]}),"\n",(0,s.jsxs)(n.p,{children:["Then use the modetest command to perform the test:",(0,s.jsx)(n.code,{children:"modetest -M vs-drm -a -s 73@31:800x480 -P 33@31:800x480@NV12"})]}),"\n",(0,s.jsx)(n.p,{children:"If everything is successful, the connected screen will light up and display the following pattern:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20220518111319607",src:i(59228).A+"",width:"931",height:"595"})}),"\n",(0,s.jsx)(n.h2,{id:"5-remarks",children:"5. Remarks"}),"\n",(0,s.jsxs)(n.p,{children:["Currently, the RDK X5 supports 7 models of Waveshare LCD screens. For usage instructions, refer to the ",(0,s.jsx)(n.a,{href:"../../hardware_development/rdk_x5/display",children:"Display Screen Usage"})," section."]}),"\n",(0,s.jsx)(n.p,{children:"The drivers have been integrated into the kernel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kernel/drivers/gpu/drm/panel/panel-wh-cm480.c\nkernel/drivers/gpu/drm/panel/panel-waveshare-dsi.c\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Device tree modifications are implemented through ",(0,s.jsx)(n.code,{children:"dtoverlay"}),". For more details, refer to ",(0,s.jsx)(n.code,{children:"source/hobot-display"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can also follow this approach to support additional LCD screens."})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},59228:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/screenshot-20241125-162524-34ecbea4845bba87deb3e598ab6d476f.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(96540);const d={},t=s.createContext(d);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);