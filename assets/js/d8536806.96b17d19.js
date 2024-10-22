"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4191],{98176:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=o(74848),i=o(28453);const d={sidebar_position:1},c="7.4.1 \u7b80\u4ecb",r={id:"Advanced_development/toolchain_development/overview",title:"7.4.1 \u7b80\u4ecb",description:"D-Robotics \u7b97\u6cd5\u5de5\u5177\u94fe\u662f\u57fa\u4e8eD-Robotics \u5904\u7406\u5668\u7814\u53d1\u7684\u7b97\u6cd5\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u628a\u6d6e\u70b9\u6a21\u578b\u91cf\u5316\u4e3a\u5b9a\u70b9\u6a21\u578b\uff0c \u5e76\u5728D-Robotics \u5904\u7406\u5668\u4e0a\u5feb\u901f\u90e8\u7f72\u81ea\u7814\u7b97\u6cd5\u6a21\u578b\u3002",source:"@site/docs/07_Advanced_development/04_toolchain_development/overview.md",sourceDirName:"07_Advanced_development/04_toolchain_development",slug:"/Advanced_development/toolchain_development/overview",permalink:"/rdk_doc/Advanced_development/toolchain_development/overview",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/07_Advanced_development/04_toolchain_development/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"7.4 \u7b97\u6cd5\u5de5\u5177\u94fe\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/04_toolchain_development"},next:{title:"7.4.2 \u8fdb\u9636\u6307\u5357",permalink:"/rdk_doc/Advanced_development/toolchain_development/intermediate/"}},s={},l=[{value:"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879",id:"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u6d6e\u70b9\u6a21\u578b(FP32)\u6ce8\u610f\u4e8b\u9879",id:"\u6d6e\u70b9\u6a21\u578bfp32\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u6a21\u578b\u7b97\u5b50\u5217\u8868\u8bf4\u660e",id:"\u6a21\u578b\u7b97\u5b50\u5217\u8868\u8bf4\u660e",level:3}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"741-\u7b80\u4ecb",children:"7.4.1 \u7b80\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"D-Robotics \u7b97\u6cd5\u5de5\u5177\u94fe\u662f\u57fa\u4e8eD-Robotics \u5904\u7406\u5668\u7814\u53d1\u7684\u7b97\u6cd5\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u628a\u6d6e\u70b9\u6a21\u578b\u91cf\u5316\u4e3a\u5b9a\u70b9\u6a21\u578b\uff0c \u5e76\u5728D-Robotics \u5904\u7406\u5668\u4e0a\u5feb\u901f\u90e8\u7f72\u81ea\u7814\u7b97\u6cd5\u6a21\u578b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d\u5728GPU\u4e0a\u8bad\u7ec3\u7684\u6a21\u578b\u5927\u90e8\u5206\u90fd\u662f\u6d6e\u70b9\u6a21\u578b\uff0c\u5373\u53c2\u6570\u4f7f\u7528\u7684\u662ffloat\u7c7b\u578b\u5b58\u50a8\uff1bD-Robotics BPU\u67b6\u6784\u7684\u5904\u7406\u5668\u4f7f\u7528\u7684\u662f  INT8   \u7684\u8ba1\u7b97\u7cbe\u5ea6\uff08\u4e1a\u5185\u5904\u7406\u5668\u7684\u901a\u7528\u7cbe\u5ea6\uff09\uff0c\u53ea\u80fd\u8fd0\u884c\u5b9a\u70b9\u91cf\u5316\u6a21\u578b\u3002\u4ece\u8bad\u7ec3\u51fa\u7684\u6d6e\u70b9\u6a21\u578b\u8f6c\u4e3a\u5b9a\u70b9\u6a21\u578b\u7684\u8fc7\u7a0b\uff0c\u6211\u4eec\u53eb\u505a\u91cf\u5316\uff0c\u4f9d\u636e\u662f\u5426\u8981\u5bf9\u91cf\u5316\u540e\u7684\u53c2\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u91cf\u5316\u65b9\u6cd5\u5206\u4e3aQAT\uff08Quantification Aware Training\uff09\u91cf\u5316\u611f\u77e5\u8bad\u7ec3\u548cPTQ\uff08Post-Training Quantization\uff09\u8bad\u7ec3\u540e\u91cf\u5316\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["D-Robotics \u7b97\u6cd5\u5de5\u5177\u94fe\u4e3b\u8981\u4f7f\u7528\u7684\u662f",(0,t.jsx)("font",{color:"Red",children:"\u8bad\u7ec3\u540e\u91cf\u5316PTQ"}),"\u65b9\u6cd5\uff0c\u53ea\u9700\u4f7f\u7528\u4e00\u6279\u6821\u51c6\u6570\u636e\u5bf9\u8bad\u7ec3\u597d\u7684\u6d6e\u70b9\u6a21\u578b\u8fdb\u884c\u6821\u51c6, \u5c06\u8bad\u7ec3\u8fc7\u7684FP32\u7f51\u7edc\u76f4\u63a5\u8f6c\u6362\u4e3a\u5b9a\u70b9\u8ba1\u7b97\u7684\u7f51\u7edc\uff0c\u6b64\u8fc7\u7a0b\u4e2d\u65e0\u9700\u5bf9\u539f\u59cb\u6d6e\u70b9\u6a21\u578b\u8fdb\u884c\u4efb\u4f55\u8bad\u7ec3\uff0c\u53ea\u5bf9\u51e0\u4e2a\u8d85\u53c2\u6570\u8c03\u6574\u5c31\u53ef\u5b8c\u6210\u91cf\u5316\u8fc7\u7a0b, \u6574\u4e2a\u8fc7\u7a0b\u7b80\u5355\u5feb\u901f, \u76ee\u524d\u5728\u7aef\u4fa7\u548c\u4e91\u4fa7\u573a\u666f\u5df2\u5f97\u5230\u5e7f\u6cdb\u5e94\u7528\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879",children:"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u9002\u7528\u4e8e\u4f7f\u7528D-Robotics \u5904\u7406\u5668\u7684\u5f00\u53d1\u8005\uff0c\u7528\u4e8e\u4ecb\u7ecdD-Robotics \u7b97\u6cd5\u5de5\u5177\u94fe\u7684\u4e00\u4e9b\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u6d6e\u70b9\u6a21\u578bfp32\u6ce8\u610f\u4e8b\u9879",children:"\u6d6e\u70b9\u6a21\u578b(FP32)\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u652f\u6301",(0,t.jsx)("font",{color:"Red",children:"caffe 1.0"})," \u7248\u672c\u7684caffe\u6d6e\u70b9\u6a21\u578b\u548c",(0,t.jsx)("font",{color:"Red",children:"ir_version\u22647"})," \u3001",(0,t.jsx)("font",{color:"Red",children:"opset10"})," \u3001",(0,t.jsx)("font",{color:"Red",children:"opset11"})," \u7248\u672c\u7684onnx\u6d6e\u70b9\u6a21\u578b\u91cf\u5316\u6210D-Robotics \u652f\u6301\u7684\u5b9a\u70b9\u6a21\u578b\uff1b"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5176\u4ed6\u6846\u67b6\u8bad\u7ec3\u7684\u6d6e\u70b9\u6a21\u578b\u9700\u8981\u5148\u5bfc\u51fa\u7b2c1\u70b9\u8981\u6c42\u7b26\u5408\u7248\u672c\u7684onnx\u6d6e\u70b9\u6a21\u578b\u540e\uff0c\u624d\u80fd\u8fdb\u884c\u91cf\u5316\uff1b"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6a21\u578b\u8f93\u5165\u7ef4\u5ea6\u53ea\u652f\u6301",(0,t.jsx)("font",{color:"Red",children:"\u56fa\u5b9a4\u7ef4"})," \u8f93\u5165NCHW\u6216NHWC\uff08N\u7ef4\u5ea6\u53ea\u80fd\u4e3a1\uff09\uff0c\u4f8b\u5982\uff1a1x3x224x224\u62161x224x224x3\uff0c \u4e0d\u652f\u6301\u52a8\u6001\u7ef4\u5ea6\u53ca\u975e4\u7ef4\u8f93\u5165\uff1b"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6d6e\u70b9\u6a21\u578b\u4e2d\u4e0d\u8981\u5305\u542b\u6709",(0,t.jsx)("font",{color:"Red",children:"\u540e\u5904\u7406\u7b97\u5b50"})," ,\u4f8b\u5982\uff1anms\u8ba1\u7b97\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6a21\u578b\u7b97\u5b50\u5217\u8868\u8bf4\u660e",children:"\u6a21\u578b\u7b97\u5b50\u5217\u8868\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u76ee\u524d\u63d0\u4f9b\u4e86D-Robotics \u5904\u7406\u5668\u53ef\u652f\u6301\u7684\u6240\u6709Caffe\u548cONNX\u7b97\u5b50\u60c5\u51b5\uff0c\u5176\u4ed6\u672a\u5217\u51fa\u7684\u7b97\u5b50\u56e0",(0,t.jsx)("font",{color:"Red",children:"D-Robotics \u5904\u7406\u5668 bpu\u786c\u4ef6\u9650\u5236"})," \uff0c",(0,t.jsx)("font",{color:"Red",children:"\u6682\u4e0d\u652f\u6301"})," \u3002\u5177\u4f53\u7b97\u5b50\u652f\u6301\u5217\u8868\uff0c\u8bf7\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"./intermediate/supported_op_list",children:(0,t.jsx)(n.strong,{children:"\u6a21\u578b\u7b97\u5b50\u652f\u6301\u5217\u8868"})})," \u7ae0\u8282\u5185\u5bb9\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var t=o(96540);const i={},d=t.createContext(i);function c(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);