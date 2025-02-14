"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[598],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},64756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const s={sidebar_position:4},a="3.3.4 UART_usage",o={id:"Basic_Application/03_40pin_user_guide/uart",title:"3.3.4 UART_usage",description:"RDK X3 enables UART3 by default on the 40-pin connector, with physical pin numbers 8 and 10, and IO voltage of 3.3V.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/03_40pin_user_guide/uart.md",sourceDirName:"03_Basic_Application/03_40pin_user_guide",slug:"/Basic_Application/03_40pin_user_guide/uart",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/uart",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/03_40pin_user_guide/uart.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3.3.3 Use PWM",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/pwm"},next:{title:"3.3.5 Using I2C",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/i2c"}},d={},c=[{value:"Loopback test",id:"loopback-test",level:2},{value:"Hardware connection",id:"hardware-connection",level:3},{value:"Test procedure",id:"test-procedure",level:3},{value:"Test code",id:"test-code",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"334-uart_usage",children:"3.3.4 UART_usage"}),"\n",(0,r.jsx)(t.p,{children:"RDK X3 enables UART3 by default on the 40-pin connector, with physical pin numbers 8 and 10, and IO voltage of 3.3V."}),"\n",(0,r.jsx)(t.p,{children:"RDK Ultra enables UART2 by default on the 40-pin connector, with physical pin numbers 8 and 10, and IO voltage of 3.3V."}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.code,{children:"/app/40pin_samples/test_serial.py"})," for detailed information on how to use the serial port."]}),"\n",(0,r.jsx)(t.h2,{id:"loopback-test",children:"Loopback test"}),"\n",(0,r.jsx)(t.p,{children:"Connect TXD and RXD in hardware, then run the test program to perform write and read operations. The expected result is that the read data should be exactly the same as the written data."}),"\n",(0,r.jsx)(t.h3,{id:"hardware-connection",children:"Hardware connection"}),"\n",(0,r.jsx)(t.p,{children:"Connect TXD and RXD together directly on the hardware using a jumper cap."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image-20220512101820743",src:n(73921).A+"",width:"379",height:"181"})}),"\n",(0,r.jsx)(t.h3,{id:"test-procedure",children:"Test procedure"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"python3 /app/40pin_samples/test_serial.py"})]}),"\n",(0,r.jsxs)(t.li,{children:["From the printed serial devices (where ",(0,r.jsx)(t.code,{children:"/dev/ttyS0"})," is the system debugging port and it is not recommended to test it unless you fully understand its purpose), select the bus number and the chip number as input options. For example, select ",(0,r.jsx)(t.code,{children:"/dev/ttyS3"})," for testing, press Enter to confirm, and enter the baud rate parameter:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"List of enabled UART:\n/dev/ttyS0  /dev/ttyS1  /dev/ttyS3  /dev/ttyUSB0\n\nPlease enter the name of the serial port to be tested:/dev/ttyS3\nPlease enter the baud rate (9600,19200,38400,57600,115200,921600):921600\nSerial<id=0x7f819dcac0, open=True>(port='/dev/ttyS3', baudrate=921600, bytesize=8, parity='N', stopbits=1, timeout=1, xonxoff=False, rtscts=False, dsrdtr=False)\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["After the program runs correctly, it will continuously print ",(0,r.jsx)(t.code,{children:"Send: AA55"})," and ",(0,r.jsx)(t.code,{children:"Recv: AA55"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Starting demo now! Press CTRL+C to exit\nSend: AA55\nRecv: AA55\n"})}),"\n",(0,r.jsx)(t.h2,{id:"test-code",children:"Test code"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'#!/usr/bin/env python3\n\nimport sys\nimport os\nimport time\n\n# Import Python serial library\nimport serial\nimport serial.tools.list_ports\n\ndef serialTest():\n    print("List of enabled UART:")\n    os.system(\'ls /dev/tty[a-zA-Z]*\')\n    uart_dev = input("Please enter the name of the serial port device to test:")\n\n    baudrate = input("Please enter the baud rate (9600,19200,38400,57600,115200,921600):")\n    try:\n        ser = serial.Serial(uart_dev, int(baudrate), timeout=1) # 1s timeout\n    except Exception as e:\n        print("Open serial failed!\\n")\n\n    print(ser)\n\n    print("Starting demo now! Press CTRL+C to exit")\n\n    while True:\n        test_data = "AA55"\n        write_num = ser.write(test_data.encode(\'UTF-8\'))\n        print("Send: ", test_data)\n\n        received_data = ser.read(write_num).decode(\'UTF-8\')\n        print("Recv: ", received_data)\n\n        time.sleep(1)\n\n    ser.close()\n    return 0\n\nif __name__ == \'__main__\':\n    if serialTest() != 0:\n        print("Serial test failed!")\n    else:\n        print("Serial test success!")\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},73921:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-20220512101820743-f05a8489fa19f40ddd73c5c59bbd1979.png"}}]);