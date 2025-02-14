"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1511],{28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>d});var t=n(96540);const i={},s=t.createContext(i);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:o},e.children)}},99836:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=n(74848),i=n(28453);const s={sidebar_position:1},r="7.4.1 Introduction",d={id:"Advanced_development/toolchain_development/overview",title:"7.4.1 Introduction",description:"The D-Robotics Algorithm Toolchain is an algorithm solution developed based on the D-Robotics processor. It can help you quantize floating-point models into fixed-point models and quickly deploy self-developed algorithm models on the D-Robotics processor.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/04_toolchain_development/overview.md",sourceDirName:"07_Advanced_development/04_toolchain_development",slug:"/Advanced_development/toolchain_development/overview",permalink:"/rdk_doc/en/Advanced_development/toolchain_development/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/04_toolchain_development/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"7.4 \u7b97\u6cd5\u5de5\u5177\u94fe\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/en/04_toolchain_development"},next:{title:"7.4.3.3 Advanced guide",permalink:"/rdk_doc/en/Advanced_development/toolchain_development/intermediate/"}},a={},l=[{value:"Instructions for Use",id:"instructions-for-use",level:2},{value:"Instructions for Floating-Point Models (FP32)",id:"instructions-for-floating-point-models-fp32",level:3},{value:"Explanation of Model Operators List",id:"explanation-of-model-operators-list",level:3}];function c(e){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"741-introduction",children:"7.4.1 Introduction"}),"\n",(0,t.jsx)(o.p,{children:"The D-Robotics Algorithm Toolchain is an algorithm solution developed based on the D-Robotics processor. It can help you quantize floating-point models into fixed-point models and quickly deploy self-developed algorithm models on the D-Robotics processor."}),"\n",(0,t.jsx)(o.p,{children:"Currently, most models trained on GPUs are floating-point models, which means that the parameters are stored using the float data type. The D-Robotics BPU architecture processor uses INT8 as the computing precision (the general precision of processors in the industry) and can only run quantized fixed-point models. The process of converting a trained floating-point model to a fixed-point model is called quantization. Depending on whether the quantized parameters need to be adjusted, we can divide the quantization methods into Quantization Aware Training (QAT) and Post-Training Quantization (PTQ)."}),"\n",(0,t.jsx)(o.p,{children:"The D-Robotics Algorithm Toolchain mainly uses the Post-Training Quantization (PTQ) method, which only requires using a batch of calibration data to calibrate the trained floating-point model, converting the trained FP32 network directly into a network that performs fixed-point calculations. During this process, there is no need to train the original floating-point model, only a few hyperparameters need to be adjusted to complete the quantization process. The whole process is simple and fast and has been widely used in edge computing and cloud scenarios."}),"\n",(0,t.jsx)(o.h2,{id:"instructions-for-use",children:"Instructions for Use"}),"\n",(0,t.jsx)(o.p,{children:"This section is applicable to developers using the D-Robotics processor and is used to introduce some instructions for using the D-Robotics Algorithm Toolchain."}),"\n",(0,t.jsx)(o.h3,{id:"instructions-for-floating-point-models-fp32",children:"Instructions for Floating-Point Models (FP32)"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Support quantizing caffe floating-point models of caffe version 1.0 and onnx floating-point models with ir_version\u22647, opset10, and opset11 into fixed-point models supported by Horizon."}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Floating-point models trained with other frameworks need to be exported as onnx floating-point models that meet the requirements of the first point before quantization can be performed."}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"The model input dimensions only support fixed 4 dimensions in the format of NCHW or NHWC (the N dimension can only be 1), for example, 1x3x224x224 or 1x224x224x3. Dynamic dimensions and non-4-dimensional inputs are not supported."}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Do not include post-processing operators, such as NMS calculations, in the floating-point models."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"explanation-of-model-operators-list",children:"Explanation of Model Operators List"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Currently, all Caffe and ONNX operators supported by the D-Robotics processor are provided. Other operators that are not listed are not supported due to hardware limitations of the D-Robotics processor. For the specific supported operator list, please refer to the chapter ",(0,t.jsx)(o.a,{href:"./intermediate/supported_op_list",children:(0,t.jsx)(o.strong,{children:"Supported Operator List"})}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);