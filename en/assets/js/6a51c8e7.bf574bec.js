"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5251],{57418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>_,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(74848),s=t(28453);const r={sidebar_position:7},a="SPI Debugging Guide",d={id:"Advanced_development/linux_development/driver_development/driver_spi_dev",title:"SPI Debugging Guide",description:"Driver Code",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/driver_development/driver_spi_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_spi_dev",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_spi_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/07_Advanced_development/02_linux_development/driver_development/driver_spi_dev.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"IO-DOMAIN Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_io_domain_dev"},next:{title:"PWM Drive Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_pwm_dev"}},o={},l=[{value:"Driver Code",id:"driver-code",level:2},{value:"Code Path",id:"code-path",level:3},{value:"Kernel Configuration",id:"kernel-configuration",level:3},{value:"DTS Device Node Configuration",id:"dts-device-node-configuration",level:3},{value:"SPI Driver",id:"spi-driver",level:2},{value:"SPI master/slave configuration",id:"spi-masterslave-configuration",level:3},{value:"SPI Registration",id:"spi-registration",level:3},{value:"Hardware initialization",id:"hardware-initialization",level:3},{value:"Debug parameters",id:"debug-parameters",level:3},{value:"SPI Testing",id:"spi-testing",level:2},{value:"Hardware Loopback Test",id:"hardware-loopback-test",level:3},{value:"Test Code",id:"test-code",level:3},{value:"Appendix",id:"appendix",level:2},{value:"spidev_tc.c Test Code",id:"spidev_tcc-test-code",level:3},{value:"SPI Timing",id:"spi-timing",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"spi-debugging-guide",children:"SPI Debugging Guide"}),"\n",(0,i.jsx)(n.h2,{id:"driver-code",children:"Driver Code"}),"\n",(0,i.jsx)(n.h3,{id:"code-path",children:"Code Path"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"drivers/spi/spidev.c # Generate character device node for user space operations\ndrivers/spi/spi.c # SPI framework layer code\ndrivers/spi/spi-hobot.c # SPI driver layer code\n"})}),"\n",(0,i.jsx)(n.h3,{id:"kernel-configuration",children:"Kernel Configuration"}),"\n",(0,i.jsx)(n.p,{children:"CONFIG_SPI_SPIDEV=y # Configuration option for spidev.c"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220322212001661",src:t(29035).A+"",width:"778",height:"185"})}),"\n",(0,i.jsx)(n.p,{children:"CONFIG_SPI_SLAVE=y # Configuration option that CONFIG_SPI_SPIDEV depends on"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220322212021521",src:t(78398).A+"",width:"793",height:"201"})}),"\n",(0,i.jsx)(n.p,{children:"CONFIG_SPI_HOBOT=y # Configuration option for spi-hobot.c driver layer"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220322212038265",src:t(90079).A+"",width:"793",height:"188"})}),"\n",(0,i.jsx)(n.h3,{id:"dts-device-node-configuration",children:"DTS Device Node Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Add the appropriate device node in the following file and compile the kernel.\nFile path: arch/arm64/boot/dts/hobot/hobot-xj3.dtsi"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'spi0: spi@0xA5004000 {\n    compatible = "hobot,hobot-spi";\n    reg = <0 0xA5004000 0 0x1000>;\n    clocks = <&spi0_mclk>;\n    clock-names = "spi_mclk";\n    interrupt-parent = <&gic>;\n    interrupts = <0 33 4>;\n    resets = <&rst 0x50 4>;\n    reset-names = "spi0";\n    pinctrl-names = "default";\n    pinctrl-0 = <&spi0_func>;\n    status = "disabled";\n    #address-cells = <1>;\n    #size-cells = <0>;\n'})}),"\n",(0,i.jsx)(n.p,{children:"File path: arch/arm64/boot/dts/hobot/hobot-x3-sdb.dts"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'/* Configure as master */\n&spi0 {\n    status = "okay";\n    spidev@0x00 {\n        compatible = "rohm,dh2228fv";\n        spi-max-frequency = <20000000>;\n        reg = <0>;\n    };\n};\n/* Configure as slave */\n&spi2 {\n    status = "okay";\n    slave = <1>;\n    slave@0x00 {\n        compatible = "rohm,dh2228fv";\n        spi-max-frequency = <20000000>;\n        reg = <0>;\n    };\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:"Using spi0 and spi2 configurations as examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The nodes in hobot-x3.dtsi are shared nodes and generally do not need to be modified. For different hardware, modifications will be made in the corresponding dts files."}),"\n",(0,i.jsx)(n.li,{children:"spi0 is configured as spi master and spi2 is configured as spi slave. The attribute isslave = <1> in spi2 represents that it is configured as a slave."}),"\n",(0,i.jsx)(n.li,{children:"The nodes spidev@0x00 and slave@0x00 in both nodes will be recognized as /dev/spidev0.0 and /dev/spidev2.0 devices in spidev.c and can be accessed by user space."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"spi-driver",children:"SPI Driver"}),"\n",(0,i.jsx)(n.p,{children:"The driver is located at: drivers/spi/spi-hobot.c"}),"\n",(0,i.jsx)(n.h3,{id:"spi-masterslave-configuration",children:"SPI master/slave configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'static int hb_spi_probe(struct platform_device *pdev)\n{\n    ...\n    /* master or slave mode select */\n    isslave = of_property_read_bool(pdev->dev.of_node, "slave");\n    if (isslave == MASTER_MODE) {\n        ctlr = spi_alloc_master(&pdev->dev, sizeof(*hbspi));\n        if (!ctlr) {\n            dev_err(&pdev->dev, "failed to alloc spi master\\n");\n            return -ENOMEM;\n        }\n    } else if (isslave == SLAVE_MODE) {\n        ctlr = spi_alloc_slave(&pdev->dev, sizeof(*hbspi));\n        if (!ctlr) {\n            dev_err(&pdev->dev, "failed to alloc spi slave, try master\\n");\n            return -ENOMEM;\n        }\n    }\n    ...\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"spi-registration",children:"SPI Registration"}),"\n",(0,i.jsx)(n.p,{children:"Register SPI controller with the kernel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'static int hb_spi_probe(struct platform_device *pdev)\n{\n    ...\n    if (isslave == MASTER_MODE) {\n        hbspi->isslave = MASTER_MODE;\n        snprintf(ctrl_mode, sizeof(ctrl_mode), "%s", "master");\n        ctlr->bus_num = pdev->id;\n        // ctlr->num_chipselect = HB_SPI_MAX_CS;\n        ctlr->mode_bits = SPI_CPOL | SPI_CPHA | SPI_LSB_FIRST | SPI_CS_HIGH |\n            SPI_NO_CS;\n        ctlr->setup = hb_spi_setup;\n        ctlr->prepare_transfer_hardware = hb_spi_prepare_xfer_hardware;\n        ctlr->transfer_one = hb_spi_transfer_one;\n        ctlr->unprepare_transfer_hardware = hb_spi_unprepare_xfer_hardware;\n        ctlr->set_cs = hb_spi_chipselect;\n        ctlr->dev.of_node = pdev->dev.of_node;\n    } else if (isslave == SLAVE_MODE) {\n        hbspi->isslave = SLAVE_MODE;\n        snprintf(ctrl_mode, sizeof(ctrl_mode), "%s", "slave");\n        ctlr->mode_bits = SPI_CPOL | SPI_CPHA | SPI_LSB_FIRST;\n        ctlr->setup = hb_spi_slave_setup;\n        ctlr->prepare_message = hb_spi_slave_prepare_message;\n        ctlr->transfer_one = hb_spi_slave_transfer_one;\n        ctlr->slave_abort = hb_spi_slave_abort;\n    }\n    /* register spi controller */\n        ret = devm_spi_register_controller(&pdev->dev, ctlr);\n    if (ret) {\n        dev_err(&pdev->dev, "failed to register %s controller(%d)\\n",\n                ctrl_mode, ret);\n        goto clk_dis_mclk;\n    }\n    \xb7\xb7\xb7\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"hardware-initialization",children:"Hardware initialization"}),"\n",(0,i.jsx)(n.p,{children:"The hardware initialization function is as follows. The meaning of the registers can be confirmed by checking with the D-Robotics related information."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'/* spi hw init */\nstatic void hb_spi_init_hw(struct hb_spi *hbspi)\n{\n    u32 val = 0;\n    /* First, should reset the whole controller */\n    hb_spi_reset(hbspi);\n    hb_spi_en_ctrl(hbspi, HB_SPI_OP_CORE_DIS, HB_SPI_OP_NONE,\n            HB_SPI_OP_NONE);\n    hb_spi_wr(hbspi, HB_SPI_INTSETMASK_REG, HB_SPI_INT_ALL);\n    /* clear all interrupt pending */\n    hb_spi_wr(hbspi, HB_SPI_SRCPND_REG, HB_SPI_INT_ALL);\n    /* init rfto */\n    hb_spi_wr(hbspi, HB_SPI_RFTO_REG, 0x27F);\n    /* no instruction */\n    hb_spi_wr(hbspi, HB_SPI_INST_REG, 0x0);\n    hb_spi_wr(hbspi, HB_SPI_INST_MASK_REG, 0xFFFFFFFF);\n    /* spi master mode */\n    val = hb_spi_rd(hbspi, HB_SPI_CTRL_REG);\n    if (hbspi->isslave == SLAVE_MODE)\n        val |= HB_SPI_SLAVE_MODE;\n    else\n        val &= (~HB_SPI_SLAVE_MODE);\n    if (hbspi->isslave == MASTER_MODE)\n        val &= (~HB_SPI_SAMP_SEL);\n    hb_spi_wr(hbspi, HB_SPI_CTRL_REG, val);\n    if (debug)\n        dev_err(hbspi->dev, "%s CTRL=%08X\\n",\n                __func__, hb_spi_rd(hbspi, HB_SPI_CTRL_REG));\n    hb_spi_config(hbspi);\n    hb_spi_en_ctrl(hbspi, HB_SPI_OP_CORE_EN, 0, 0);\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"debug-parameters",children:"Debug parameters"}),"\n",(0,i.jsx)(n.p,{children:"The following are the debug parameters outputted in the spi driver:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'static int debug;\nstatic int slave_tout = 2000;\nstatic int master_tout = 1000;\n```module_param(debug, int, 0644);\nMODULE_PARM_DESC(debug, "spi: 0 close debug, other open debug");\nmodule_param(slave_tout, int, 0644);\nMODULE_PARM_DESC(slave_tout, "spi: slave timeout(sec), default 10 s");\nmodule_param(master_tout, int, 0644);\nMODULE_PARM_DESC(master_tout, "spi: master timeout(sec), default 2 s");\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The debug level can be set to 0, 1, or 2, with a default value of 0."}),"\n",(0,i.jsx)(n.li,{children:"The default timeout for slave is 2s, and the maximum valid value is 100s."}),"\n",(0,i.jsx)(n.li,{children:"The default timeout for master is 1s, and the maximum valid value is 10s."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To modify the parameters using sysfs in the kernel command line, follow the steps below. The units in sysfs are all in milliseconds.\nFind the available parameters, which include 3 parameters."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls /sys/module/spi_hobot/parameters/\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output should be as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@x3dvbj3-hynix2G-2666:~# ls /sys/module/spi_hobot/parameters/\ndebug master_tout slave_tout\n"})}),"\n",(0,i.jsx)(n.p,{children:"Get the current value of the debug parameter. The default value is 0, which means debug is not enabled."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /sys/module/spi_hobot/parameters/debug\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output should be as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@x3dvbj3-hynix2G-2666:~# cat /sys/module/spi_hobot/parameters/debug\n0\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set the debug parameter value to 1 and confirm the setting is successful:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo 1 > /sys/module/spi_hobot/parameters/debug\ncat /sys/module/spi_hobot/parameters/debug\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output should be as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@x3dvbj3-hynix2G-2666:~# echo 1 > /sys/module/spi_hobot/parameters/debugroot@x3dvbj3-hynix2G-2666:~# cat /sys/module/spi_hobot/parameters/debug\n1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Get the current master_tout parameter, which is the value of the master timeout: default is 2s"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /sys/module/spi_hobot/parameters/master_tout\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following should be printed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@x3dvbj3-hynix2G-2666:~# cat /sys/module/spi_hobot/parameters/master_tout\n1000\n"})}),"\n",(0,i.jsx)(n.p,{children:"Get the current slave_tout parameter, which is the value of the slave timeout: default is 1s"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /sys/module/spi_hobot/parameters/slave_tout\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following should be printed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@x3dvbj3-hynix2G-2666:~# cat /sys/module/spi_hobot/parameters/slave_tout\n2000\n"})}),"\n",(0,i.jsx)(n.h2,{id:"spi-testing",children:"SPI Testing"}),"\n",(0,i.jsx)(n.h3,{id:"hardware-loopback-test",children:"Hardware Loopback Test"}),"\n",(0,i.jsx)(n.p,{children:"Kernel dts enables spi0 as master mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'/* Configure as master */\n&spi0 {\n    status = "okay";\n    spidev@0x00 {\n        compatible = "rohm,dh2228fv";\n        spi-max-frequency = <20000000>;\n        reg = <0>;\n    };\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can observe the spidev0.0 device node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# ls /dev/spidev0.0 \n/dev/spidev0.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"Connect the MOSI and MISO pins of the SPI using a connector."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220322222747547",src:t(70246).A+"",width:"413",height:"304"})}),"\n",(0,i.jsx)(n.h3,{id:"test-code",children:"Test Code"}),"\n",(0,i.jsx)(n.p,{children:"Compile the spidev_tc.c code, the specific code is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/opt/gcc-ubuntu-9.3.0-2020.03-x86_64-aarch64-linux-gnu/bin/aarch64-linux-gnu-gcc -o spidev_tc spidev_tc.c -lpthread\n"})}),"\n",(0,i.jsx)(n.p,{children:"Loopback test command: open /dev/spidev0.0, set the speed to 12MHz, perform read and write operations simultaneously, read and write 1000 bytes each time, test 50 rounds."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# ./spidev_tc -D /dev/spidev0.0 -s 12000000 -m 3 -e 1000 -t 50\nspi mode: 0x0\nbits per word: 8\nmax speed: 12000000 Hz (12000 KHz)\nuserspace spi read and write test, len=1000 times=50\ntest: OK, times=0\ntest: OK, times=1\n...\ntest: OK, times=49\n"})}),"\n",(0,i.jsx)(n.p,{children:"The spidev_tc command is a command set for testing SPI, and you can read its help information for more usage methods."}),"\n",(0,i.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,i.jsx)(n.h3,{id:"spidev_tcc-test-code",children:"spidev_tc.c Test Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'/*\n * SPI testing utility (using spidev driver)\n *\n * Copyright (c) 2007  MontaVista Software, Inc.\n * Copyright (c) 2007  Anton Vorontsov <avorontsov@ru.mvista.com>\n *\n * This program is free software; you can redistribute it and/or modify\n * it under the terms of the GNU General Public License as published by\n * the Free Software Foundation; either version 2 of the License.\n *\n * Cross-compile with cross-gcc -I/path/to/cross-kernel/include\n */\n#include <stdint.h>\n#include <unistd.h>\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <getopt.h>\n#include <fcntl.h>\n#include <time.h>\n#include <sys/ioctl.h>\n#include <linux/ioctl.h>\n#include <sys/stat.h>\n#include <linux/types.h>\n#include <linux/spi/spidev.h>\n\n#define ARRAY_SIZE(a) (sizeof(a) / sizeof((a)[0]))\n\nstatic void pabort(const char *s)\n{\n    perror(s);\n    abort();\n}\n\nstatic const char *device = "/dev/spidev0.0";\nstatic uint32_t mode;\nstatic uint8_t bits = 8;\nstatic char *input_file;\nstatic char *output_file;\nstatic uint32_t speed = 500000;\nstatic uint16_t delay;\nstatic int verbose;\nstatic int transfer_size;\nstatic int iterations;\nstatic int interval = 5; /* interval in seconds for showing transfer rate */\nstatic int rw_mode = 0; //1: read, 2: write, 3: write and read\nstatic int rw_len = 4;\nstatic int rw_times = 5;\n\nuint8_t default_tx[] = {\n    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,\n    0x40, 0x00, 0x00, 0x00, 0x00, 0x95,\n    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,\n    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,\n    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,\n    0xF0, 0x0D,\n};\n\nuint8_t default_rx[ARRAY_SIZE(default_tx)] = {0, };\nchar *input_tx;\n\nstatic void hex_dump(const void *src, size_t length, size_t line_size,\n        char *prefix)\n{\n    int i = 0;\n    const unsigned char *address = src;\n    const unsigned char *line = address;\n    unsigned char c;\n\n    printf("%s | ", prefix);\n    while (length-- > 0) {\n        printf("%02X ", *address++);\n        if (!(++i % line_size) || (length == 0 && i % line_size)) {\n            if (length == 0) {\n                while (i++ % line_size)\n                    printf("__ ");\n            }\n            printf(" | ");  /* right close */\n            while (line < address) {\n                c = *line++;\n                printf("%c", (c < 33 || c == 255) ? 0x2E : c);\n            }\n            printf("\\n");\n            if (length > 0)\n                printf("%s | ", prefix);\n        }\n    }\n}\n\nstatic void hex_dump2(const void *src, size_t length, size_t line_size,\n        char *prefix)\n{\n    int i = 0;\n    const unsigned char *address = src;\n    const unsigned char *line = address;\n    unsigned char c;\n\n    printf("%s | ", prefix);\n    while (length-- > 0) {\n        printf("%02X ", *address++);\n        if (!(++i % line_size) || (length == 0 && i % line_size)) {\n            if (length == 0) {\n                while (i++ % line_size)\n                    printf("__ ");\n            }\n            printf("\\n");\n            if (length > 0)\n                printf("%s | ", prefix);\n        }\n    }\n    printf("\\n");\n}/*\n *  Unescape - process hexadecimal escape character\n *      converts shell input "\\x23" -> 0x23\n */\nstatic int unescape(char *_dst, char *_src, size_t len)\n{\n    int ret = 0;\n    int match;\n    char *src = _src;\n    char *dst = _dst;\n    unsigned int ch;\n\n    while (*src) {\n        if (*src == \'\\\\\' && *(src+1) == \'x\') {\n            match = sscanf(src + 2, "%2x", &ch);\n            if (!match)\n                pabort("malformed input string");\n\n            src += 4;\n            *dst++ = (unsigned char)ch;\n        } else {\n            *dst++ = *src++;\n        }\n        ret++;\n    }\n    return ret;\n}\n\nstatic void transfer(int fd, uint8_t const *tx, uint8_t const *rx, size_t len)\n{\n    int ret;\n    int out_fd;\n    struct spi_ioc_transfer tr = {\n        .tx_buf = (unsigned long)tx,\n        .rx_buf = (unsigned long)rx,\n        .len = len,\n        .delay_usecs = delay,\n        .speed_hz = speed,\n        .bits_per_word = bits,\n    };\n\n    if (mode & SPI_TX_QUAD)\n        tr.tx_nbits = 4;\n    else if (mode & SPI_TX_DUAL)\n        tr.tx_nbits = 2;\n    if (mode & SPI_RX_QUAD)\n        tr.rx_nbits = 4;\n    else if (mode & SPI_RX_DUAL)\n        tr.rx_nbits = 2;\n}\n\ntr.rx_nbits = 2;\n    if (!(mode & SPI_LOOP)) {\n        if (mode & (SPI_TX_QUAD | SPI_TX_DUAL))\n            tr.rx_buf = 0;\n        else if (mode & (SPI_RX_QUAD | SPI_RX_DUAL))\n            tr.tx_buf = 0;\n    }\n\n    ret = ioctl(fd, SPI_IOC_MESSAGE(1), &tr);\n    if (ret < 1)\n        pabort("can\'t send spi message");\n\n    if (verbose)\n        hex_dump(tx, len, 32, "TX");\n\n    if (output_file) {\n        out_fd = open(output_file, O_WRONLY | O_CREAT | O_TRUNC, 0666);\n        if (out_fd < 0)\n            pabort("could not open output file");\n\n        ret = write(out_fd, rx, len);\n        if (ret != len)\n            pabort("not all bytes written to output file");\n\n        close(out_fd);\n    }\n\n    if (verbose)\n        hex_dump(rx, len, 32, "RX");\n}\n\nstatic void transfer2(int fd, uint8_t const *tx, uint8_t const *rx, size_t len)\n{\n    int ret;\n    int out_fd;\n    struct spi_ioc_transfer tr = {\n        .tx_buf = (unsigned long)tx,\n        .rx_buf = (unsigned long)rx,\n        .len = len,\n        .delay_usecs = delay,\n        .speed_hz = speed,\n        .bits_per_word = bits,\n    };\n\n    if (mode & SPI_TX_QUAD)\n        tr.tx_nbits = 4;\n    else if (mode & SPI_TX_DUAL)\n        tr.tx_nbits = 2;\n    if (mode & SPI_RX_QUAD)\n        tr.rx_nbits = 4;else if (mode & SPI_RX_DUAL)\n        tr.rx_nbits = 2;\n    if (!(mode & SPI_LOOP)) {\n        if (mode & (SPI_TX_QUAD | SPI_TX_DUAL))\n            tr.rx_buf = 0;\n        else if (mode & (SPI_RX_QUAD | SPI_RX_DUAL))\n            tr.tx_buf = 0;\n    }\n\n    if (verbose && rw_mode >> 1)\n        hex_dump2(tx, len, 32, "TX");\n\n    ret = ioctl(fd, SPI_IOC_MESSAGE(1), &tr);\n    if (ret < 1) {\n        //pabort("can\'t send spi message");\n        printf("can\'t send spi message");\n    } else {\n        if (output_file) {\n            out_fd = open(output_file, O_WRONLY | O_CREAT | O_TRUNC, 0666);\n            if (out_fd < 0)\n                pabort("could not open output file");\n\n            ret = write(out_fd, rx, len);\n            if (ret != len)\n                pabort("not all bytes written to output file");\n\n            close(out_fd);\n        }\n\n        if (verbose && rw_mode&0x01)\n            hex_dump2(rx, len, 32, "RX");\n    }\n\n}\n\nstatic void print_usage(const char *prog)\n{\n    printf("Usage: %s [-DsbdlHOLC3vpNR24SImet]\\n", prog);\n    puts("  -D --device   \u8bbe\u5907\u4f7f\u7528\u5730\u5740\uff08\u9ed8\u8ba4 /dev/spidev1.1\uff09\\n"\n            "  -s --speed    \u6700\u5927\u901f\u5ea6\uff08Hz\uff09\\n"\n            "  -d --delay    \u5ef6\u8fdf\u65f6\u95f4\uff08\u5fae\u79d2\uff09\\n"\n            "  -b --bpw      \u5b57\u957f\\n"\n            "  -i --input    \u4ece\u6587\u4ef6\u4e2d\u8f93\u5165\u6570\u636e\uff08\u4f8b\u5982 \\"test.bin\\"\uff09\\n"\n            "  -o --output   \u8f93\u51fa\u6570\u636e\u5230\u6587\u4ef6\uff08\u4f8b\u5982 \\"results.bin\\"\uff09\\n"\n            "  -l --loop     \u73af\u56de\u6d4b\u8bd5\\n"\n            "  -H --cpha     \u65f6\u949f\u76f8\u4f4d\\n"\n            "  -O --cpol     \u65f6\u949f\u6781\u6027\\n"\n            "  -L --lsb      \u6700\u4f4e\u6709\u6548\u4f4d\\n"\n            "  -C --cs-high  \u7247\u9009\u4fe1\u53f7\u6fc0\u6d3b\u9ad8\u7535\u5e73\\n"\n            "  -3 --3wire    SI/SO\u4fe1\u53f7\u5171\u7528\\n""  -v --verbose  Verbose (show tx buffer)\\n" -> "-v --verbose  \u8be6\u7ec6\u4fe1\u606f\uff08\u663e\u793a\u53d1\u9001\u7f13\u51b2\u533a\uff09\\n"\n            "  -p            Send data (e.g. \\"1234\\\\xde\\\\xad\\")\\n" -> "  -p            \u53d1\u9001\u6570\u636e\uff08\u4f8b\u5982\\"1234\\\\xde\\\\xad\\"\uff09\\n"\n            "  -N --no-cs    no chip select\\n" -> "  -N --no-cs    \u4e0d\u4f7f\u7528\u82af\u7247\u9009\u62e9\\n"\n            "  -R --ready    slave pulls low to pause\\n" -> "  -R --ready    \u4ece\u673a\u62c9\u4f4e\u4ee5\u6682\u505c\\n"\n            "  -2 --dual     dual transfer\\n" -> "  -2 --dual     \u53cc\u901a\u9053\u4f20\u8f93\\n"\n            "  -4 --quad     quad transfer\\n" -> "  -4 --quad     \u56db\u901a\u9053\u4f20\u8f93\\n"\n            "  -S --size     transfer size\\n" -> "  -S --size     \u4f20\u8f93\u5927\u5c0f\\n"\n            "  -I --iter     iterations\\n" -> "  -I --iter     \u8fed\u4ee3\u6b21\u6570\\n"\n            "  -m --rw-mode  1 read, 2 write, 3 write and read\\n" -> "  -m --rw-mode  1 \u8bfb\u53d6\uff0c 2 \u5199\u5165\uff0c 3 \u5199\u5165\u548c\u8bfb\u53d6\\n"\n            "  -e --rw-len   read or write len\\n" -> "  -e --rw-len   \u8bfb\u53d6\u6216\u5199\u5165\u957f\u5ea6\\n"\n            "  -t --rw-times read or write times\\n" -> "  -t --rw-times \u8bfb\u53d6\u6216\u5199\u5165\u6b21\u6570\\n");\n    exit(1);\n}\n\nstatic void parse_opts(int argc, char *argv[])\n{\n    while (1) {\n        static const struct option lopts[] = {\n            { "device",  1, 0, \'D\' },\n            { "speed",   1, 0, \'s\' },\n            { "delay",   1, 0, \'d\' },\n            { "bpw",     1, 0, \'b\' },\n            { "input",   1, 0, \'i\' },\n            { "output",  1, 0, \'o\' },\n            { "loop",    0, 0, \'l\' },\n            { "cpha",    0, 0, \'H\' },\n            { "cpol",    0, 0, \'O\' },\n            { "lsb",     0, 0, \'L\' },\n            { "cs-high", 0, 0, \'C\' },\n            { "3wire",   0, 0, \'3\' },\n            { "no-cs",   0, 0, \'N\' },\n            { "ready",   0, 0, \'R\' },\n            { "dual",    0, 0, \'2\' },\n            { "verbose", 0, 0, \'v\' },\n            { "quad",    0, 0, \'4\' },\n            { "size",    1, 0, \'S\' },\n            { "iter",    1, 0, \'I\' },\n            { "rw-mode",    1, 0, \'m\' },\n            { "rw-len",    1, 0, \'e\' },\n            { "rw-times",    1, 0, \'t\' },\n            { NULL, 0, 0, 0 },\n        };\n        int c;\n\n        c = getopt_long(argc, argv, "D:s:d:b:i:o:lHOLC3NR24p:vS:I:m:e:t:",\n        lopts, NULL);\n        //printf("optind: %d\\n", optind);\n        //printf("optarg: %s\\n", optarg);\n        //printf("option: %c\\n", c);\n        if (c == -1)\n            break;\n\n        switch (c) {\n        case \'D\':\n            device = optarg;\n            break;\n        case \'s\':\n            speed = atoi(optarg);\n            break;\n        case \'d\':\n            delay = atoi(optarg);\n            break;\n        case \'b\':\n            bits = atoi(optarg);\n            break;\n        case \'i\':\n            input_file = optarg;\n            break;\n        case \'o\':\n            output_file = optarg;\n            break;\n        case \'l\':\n            mode |= SPI_LOOP;\n            break;\n        case \'H\':\n            mode |= SPI_CPHA;\n            break;\n        case \'O\':\n            mode |= SPI_CPOL;\n            break;\n        case \'L\':\n            mode |= SPI_LSB_FIRST;\n            break;\n        case \'C\':\n            mode |= SPI_CS_HIGH;\n            break;\n        case \'3\':\n            mode |= SPI_3WIRE;\n            break;\n        case \'N\':\n            mode |= SPI_NO_CS;\n            break;\n        case \'v\':\n            verbose = 1;\n            break;\n        case \'R\':\n            mode |= SPI_READY;\n            break;\n        case \'p\':input_tx = optarg;\n            break;\n        case \'2\':\n            mode |= SPI_TX_DUAL;\n            break;\n        case \'4\':\n            mode |= SPI_TX_QUAD;\n            break;\n        case \'S\':\n            transfer_size = atoi(optarg);\n            break;\n        case \'I\':\n            iterations = atoi(optarg);\n            break;\n        case \'m\':\n            rw_mode = atoi(optarg);\n            break;\n        case \'e\':\n            rw_len = atoi(optarg);\n            break;\n        case \'t\':\n            rw_times = atoi(optarg);\n            break;\n        default:\n            print_usage(argv[0]);\n            break;\n        }\n    }\n    if (mode & SPI_LOOP) {\n        if (mode & SPI_TX_DUAL)\n            mode |= SPI_RX_DUAL;\n        if (mode & SPI_TX_QUAD)\n            mode |= SPI_RX_QUAD;\n    }\n}\n\nstatic void transfer_escaped_string(int fd, char *str)\n{\n    size_t size = strlen(str);\n    uint8_t *tx;\n    uint8_t *rx;\n\n    tx = malloc(size);\n    if (!tx)\n        pabort("can\'t allocate tx buffer");\n\n    rx = malloc(size);\n    if (!rx)\n        pabort("can\'t allocate rx buffer");\n\n    size = unescape((char *)tx, str, size);\n    printf("size: %d\\n", size);\n    transfer(fd, tx, rx, size);\n    free(rx);\n    free(tx);\n}\n\nstatic void transfer_file(int fd, char *filename)\n{\n    ssize_t bytes;\n    struct stat sb;\n    int tx_fd;\n    uint8_t *tx;\n    uint8_t *rx;\n\n    if (stat(filename, &sb) == -1)\n        pabort("can\'t stat input file");\n\n    tx_fd = open(filename, O_RDONLY);\n    if (tx_fd < 0)\n        pabort("can\'t open input file");\n\n    tx = malloc(sb.st_size);\n    if (!tx)\n        pabort("can\'t allocate tx buffer");\n\n    rx = malloc(sb.st_size);\n    if (!rx)\n        pabort("can\'t allocate rx buffer");\n\n    bytes = read(tx_fd, tx, sb.st_size);\n    if (bytes != sb.st_size)\n        pabort("failed to read input file");\n\n    transfer(fd, tx, rx, sb.st_size);\n    free(rx);\n    free(tx);\n    close(tx_fd);\n}\n\nstatic uint64_t _read_count;\nstatic uint64_t _write_count;\n\nstatic void show_transfer_rate(void)\n{\n    static uint64_t prev_read_count, prev_write_count;\n    double rx_rate, tx_rate;\n\n    rx_rate = ((_read_count - prev_read_count) * 8) / (interval*1000.0);\n    tx_rate = ((_write_count - prev_write_count) * 8) / (interval*1000.0);printf("rate: tx %.1fkbps, rx %.1fkbps\\n", rx_rate, tx_rate);\n\nprev_read_count = _read_count;\nprev_write_count = _write_count;\n}\n\nstatic void transfer_buf(int fd, int len)\n{\n    uint8_t *tx;\n    uint8_t *rx;\n    int i;\n\n    tx = malloc(len);\n    if (!tx)\n        pabort("can\'t allocate tx buffer");\n    for (i = 0; i < len; i++)\n        tx[i] = random();\n\n    rx = malloc(len);\n    if (!rx)\n        pabort("can\'t allocate rx buffer");\n\n    transfer(fd, tx, rx, len);\n\n    _write_count += len;\n    _read_count += len;\n\n    if (mode & SPI_LOOP) {\n        if (memcmp(tx, rx, len)) {\n            fprintf(stderr, "transfer error !\\n");\n            hex_dump(tx, len, 32, "TX");\n            hex_dump(rx, len, 32, "RX");\n            exit(1);\n        }\n    }\n\n    free(rx);\n    free(tx);\n}\n\nstatic void transfer_read_write(int fd)\n{\n    uint8_t *tx;\n    uint8_t *rx;\n    int i, j;\n    int len, times;\n    char str[64] = {0};\n\n    len = rw_len > 0 ? rw_len : 4;times = rw_times > 0 ? rw_times : 4;\n    if (rw_mode == 2)\n        sprintf(str, "write");\n    else if (rw_mode == 3)\n        sprintf(str, "read and write");\n    else {\n        rw_mode = 1;\n        sprintf(str, "read");\n    }\n\n    printf("userspace spi %s test, len=%d times=%d\\n", str, len, times);\n\n    tx = malloc(len + 4);\n    if (!tx)\n        pabort("can\'t allocate tx buffer");\n    rx = malloc(len + 4);\n    if (!rx)\n        pabort("can\'t allocate rx buffer");\n\n    for (j = 0; j < rw_times; j++) {\n        memset(tx, 0 ,len);\n        memset(rx, 0, len);\n\n        if (rw_mode >> 1) {\n            for (i = 0; i < len; i++)\n                tx[i] = random();\n        } else {\n            for (i = 0; i < len; i++)\n                tx[i] = i << 2;\n        }\n        transfer2(fd, tx, rx, len);\n        printf("test: %s, times=%d\\n", strncmp(tx, rx, len) == 0 ? "OK" : "Failed", j);\n        //sleep(2);\n    }\n}\n\nint main(int argc, char *argv[])\n{\n    int ret = 0;\n    int fd;\n\n    parse_opts(argc, argv);\n\n    fd = open(device, O_RDWR);\n    if (fd < 0)\n        pabort("can\'t open device");\n\n    /*\n     * spi mode\n     */\nret = ioctl(fd, SPI_IOC_WR_MODE32, &mode);\nif (ret == -1)\n    pabort("can\'t set spi mode");\n\nret = ioctl(fd, SPI_IOC_RD_MODE32, &mode);\nif (ret == -1)\n    pabort("can\'t get spi mode");\n\n/*\n * bits per word\n */\nret = ioctl(fd, SPI_IOC_WR_BITS_PER_WORD, &bits);\nif (ret == -1)\n    pabort("can\'t set bits per word");\n\nret = ioctl(fd, SPI_IOC_RD_BITS_PER_WORD, &bits);\nif (ret == -1)\n    pabort("can\'t get bits per word");\n\n/*\n * max speed hz\n */\nret = ioctl(fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed);\nif (ret == -1)\n    pabort("can\'t set max speed hz");\n\nret = ioctl(fd, SPI_IOC_RD_MAX_SPEED_HZ, &speed);\nif (ret == -1)\n    pabort("can\'t get max speed hz");\n\nprintf("spi mode: 0x%x\\n", mode);\nprintf("bits per word: %d\\n", bits);\nprintf("max speed: %d Hz (%d KHz)\\n", speed, speed/1000);\n\nif (input_tx && input_file)\n    pabort("only one of -p and --input may be selected");\n\nif (input_tx)\n    transfer_escaped_string(fd, input_tx);\nelse if (input_file)\n    transfer_file(fd, input_file);\nelse if (transfer_size) {\n    struct timespec last_stat;\n\n    clock_gettime(CLOCK_MONOTONIC, &last_stat);\n\n    while (iterations-- > 0) {\n        struct timespec current;\n\n        transfer_buf(fd, transfer_size);```c\nclock_gettime(CLOCK_MONOTONIC, &current);\nif (current.tv_sec - last_stat.tv_sec > interval) {\n    show_transfer_rate();\n    last_stat = current;\n}\n}\nprintf("total: tx %.1fKB, rx %.1fKB\\n",\n_write_count/1024.0, _read_count/1024.0);\n} else if (rw_mode) {\ntransfer_read_write(fd);\n} else\ntransfer(fd, default_tx, default_rx, sizeof(default_tx));\n\nclose(fd);\n\nreturn ret;\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"spi-timing",children:"SPI Timing"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(34464).A+"",width:"821",height:"724"})})]})}function _(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},34464:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/a91efe6c59515b2b9d38b106a7e066a5-c5606aec6483fbfa914fa3e9561d87de.png"},29035:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20220322212001661-30eff57234a987da6657ebc50f5582e5.png"},78398:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20220322212021521-96f8c98243be1419a47e179fc0194e10.png"},90079:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20220322212038265-1b9f687d5ca84627b3e680a97f325009.png"},70246:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20220322222747547-dec0595ecf3224fe97f2cb182d551b36.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);