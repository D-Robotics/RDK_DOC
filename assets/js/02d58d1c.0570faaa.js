"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5552],{25022:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var t=e(74848),s=e(28453);const r={sidebar_position:3},o="3.3.3 PWM\u5e94\u7528",p={id:"Basic_Application/03_40pin_user_guide/pwm",title:"3.3.3 PWM\u5e94\u7528",description:"Hobot.GPIO \u5e93\u4ec5\u5728\u5e26\u6709\u9644\u52a0\u786c\u4ef6 PWM \u63a7\u5236\u5668\u7684\u5f15\u811a\u4e0a\u652f\u6301 PWM\u3002\u4e0e RPi.GPIO \u5e93\u4e0d\u540c\uff0cHobot.GPIO \u5e93\u4e0d\u5b9e\u73b0\u8f6f\u4ef6\u6a21\u62df PWM\u3002RDK X3\u3001RDK X5 \u548c RDK Ultra \u90fd\u652f\u6301 2 \u4e2a PWM \u901a\u9053\u3002",source:"@site/docs/03_Basic_Application/03_40pin_user_guide/pwm.md",sourceDirName:"03_Basic_Application/03_40pin_user_guide",slug:"/Basic_Application/03_40pin_user_guide/pwm",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/pwm",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/03_Basic_Application/03_40pin_user_guide/pwm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"3.3.2 GPIO\u5e94\u7528",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/gpio"},next:{title:"3.3.4 \u4e32\u53e3\u5e94\u7528",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/uart"}},a={},c=[{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:3}];function l(n){const i={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"333-pwm\u5e94\u7528",children:"3.3.3 PWM\u5e94\u7528"}),"\n",(0,t.jsx)(i.p,{children:"Hobot.GPIO \u5e93\u4ec5\u5728\u5e26\u6709\u9644\u52a0\u786c\u4ef6 PWM \u63a7\u5236\u5668\u7684\u5f15\u811a\u4e0a\u652f\u6301 PWM\u3002\u4e0e RPi.GPIO \u5e93\u4e0d\u540c\uff0cHobot.GPIO \u5e93\u4e0d\u5b9e\u73b0\u8f6f\u4ef6\u6a21\u62df PWM\u3002RDK X3\u3001RDK X5 \u548c RDK Ultra \u90fd\u652f\u6301 2 \u4e2a PWM \u901a\u9053\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u8bf7\u53c2\u9605 ",(0,t.jsx)(i.code,{children:"/app/40pin_samples/simple_pwm.py"}),"\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 PWM \u901a\u9053\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"\u6d4b\u8bd5\u4ee3\u7801",children:"\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,t.jsxs)(i.p,{children:["\u6253\u5f00 ",(0,t.jsx)(i.code,{children:"output_pin"})," \u6307\u5b9a\u7684PWM\u901a\u9053\uff0c\u521d\u59cb\u5360\u7a7a\u6bd4 25%\uff0c \u5148\u6bcf0.25\u79d2\u589e\u52a05%\u5360\u7a7a\u6bd4\uff0c\u8fbe\u5230100%\u4e4b\u540e\u518d\u6bcf0.25\u79d2\u51cf\u5c115%\u5360\u7a7a\u6bd4\uff0c\u5728\u6b63\u5e38\u8f93\u51fa\u6ce2\u5f62\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u793a\u6ce2\u5668\u6216\u8005\u903b\u8f91\u5206\u6790\u4eea\u6d4b\u91cf\u8f93\u51fa\u4fe1\u53f7\uff0c\u89c2\u5bdf\u6ce2\u5f62\u3002"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"#!/usr/bin/env python3\nimport sys\nimport signal\nimport Hobot.GPIO as GPIO\nimport time\n\ndef signal_handler(signal, frame):\n    sys.exit(0)\n\n# \u652f\u6301PWM\u7684\u7ba1\u811a: 32 and 33, \u5728\u4f7f\u7528PWM\u65f6\uff0c\u5fc5\u987b\u786e\u4fdd\u8be5\u7ba1\u811a\u6ca1\u6709\u88ab\u5176\u4ed6\u529f\u80fd\u5360\u7528\noutput_pin = 33\n\nGPIO.setwarnings(False)\n\ndef main():\n    # Pin Setup:\n    # Board pin-numbering scheme\n    GPIO.setmode(GPIO.BOARD)\n    # \u652f\u6301\u7684\u9891\u7387\u8303\u56f4\uff1a 48KHz ~ 192MHz\n    p = GPIO.PWM(output_pin, 48000)\n    # \u521d\u59cb\u5360\u7a7a\u6bd4 25%\uff0c \u5148\u6bcf0.25\u79d2\u589e\u52a05%\u5360\u7a7a\u6bd4\uff0c\u8fbe\u5230100%\u4e4b\u540e\u518d\u6bcf0.25\u79d2\u51cf\u5c115%\u5360\u7a7a\u6bd4\n    val = 25\n    incr = 5\n    p.ChangeDutyCycle(val)\n    p.start(val)\n\n    print(\"PWM running. Press CTRL+C to exit.\")\n    try:\n        while True:\n            time.sleep(0.25)\n            if val >= 100:\n                incr = -incr\n            if val <= 0:\n                incr = -incr\n            val += incr\n            p.ChangeDutyCycle(val)\n    finally:\n        p.stop()\n        GPIO.cleanup()\n\nif __name__ == '__main__':\n    signal.signal(signal.SIGINT, signal_handler)\n    main()\n\n"})})]})}function d(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>o,x:()=>p});var t=e(96540);const s={},r=t.createContext(s);function o(n){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function p(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:i},n.children)}}}]);