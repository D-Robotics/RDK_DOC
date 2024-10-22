"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6869],{59981:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=i(74848),t=i(28453);const r={sidebar_position:2},l="4.3.2 ModelZoo\u5feb\u901f\u4e0a\u624b",s={id:"Algorithm_Application/model_zoo/bpu_infer_lib_intro",title:"4.3.2 ModelZoo\u5feb\u901f\u4e0a\u624b",description:"\u6982\u8ff0",source:"@site/docs/04_Algorithm_Application/03_model_zoo/bpu_infer_lib_intro.md",sourceDirName:"04_Algorithm_Application/03_model_zoo",slug:"/Algorithm_Application/model_zoo/bpu_infer_lib_intro",permalink:"/rdk_doc/Algorithm_Application/model_zoo/bpu_infer_lib_intro",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/04_Algorithm_Application/03_model_zoo/bpu_infer_lib_intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4.3.1 ModelZoo\u6982\u8ff0",permalink:"/rdk_doc/Algorithm_Application/model_zoo/model_zoo_intro"},next:{title:"4.3.3 ModelZoo\u63a8\u7406\u63a5\u53e3",permalink:"/rdk_doc/Algorithm_Application/model_zoo/infer_api"}},d={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5b89\u88c5\u65b9\u5f0f",id:"\u5b89\u88c5\u65b9\u5f0f",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u6a21\u578b\u52a0\u8f7d",id:"\u6a21\u578b\u52a0\u8f7d",level:3},{value:"\u8bfb\u53d6\u8f93\u5165",id:"\u8bfb\u53d6\u8f93\u5165",level:3},{value:"\u6a21\u578b\u63a8\u7406",id:"\u6a21\u578b\u63a8\u7406",level:3},{value:"\u83b7\u53d6\u8f93\u51fa",id:"\u83b7\u53d6\u8f93\u51fa",level:3}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"432-modelzoo\u5feb\u901f\u4e0a\u624b",children:"4.3.2 ModelZoo\u5feb\u901f\u4e0a\u624b"}),"\n",(0,o.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,o.jsxs)(e.p,{children:["ModelZoo\u4f7f\u7528\u7684\u677f\u7aef\u63a8\u7406\u63a5\u53e3\u4e3a",(0,o.jsx)(e.strong,{children:"bpu_infer_lib"}),"\uff0cbpu_infer_lib\u662f\u5bf9\u677f\u7aef\u63a8\u7406C++\u63a5\u53e3libdnn\u7684Python\u5c01\u88c5\u3002\u505a\u5230",(0,o.jsx)(e.strong,{children:"\u5b89\u88c5\u7b80\u6613\u3001\u597d\u5b66\u597d\u7528\u3001\u5feb\u901f\u4e0a\u624b"}),"\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u5b89\u88c5\u65b9\u5f0f",children:"\u5b89\u88c5\u65b9\u5f0f"}),"\n",(0,o.jsx)(e.p,{children:"bpu_infer_lib\u53ef\u4f7f\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"# RDK X5 \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\npip install bpu_infer_lib_x5\n\n# RDK X3 \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\npip install bpu_infer_lib_x3\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u7684\u65b9\u5f0f\u5728RDK\u7cfb\u5217\u5f00\u53d1\u677f\u7aef\u8fdb\u884c\u5b89\u88c5\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,o.jsx)(e.p,{children:"\u672c\u6b21\u5feb\u901f\u4e0a\u624b\u4ee5ModelZoo\u7684\u68c0\u6d4b\u5927\u6a21\u578byoloworld\u4e3a\u4f8b\uff0c\u5411\u5f00\u53d1\u8005\u5c55\u793abpu_infer_lib\u63a8\u7406\u5e93\u7684\u57fa\u7840\u7528\u6cd5\u3002"}),"\n",(0,o.jsx)(e.admonition,{title:"Tip",type:"tip",children:(0,o.jsxs)(e.p,{children:["Yoloworld\u4ed3\u5e93\u94fe\u63a5\uff1a",(0,o.jsx)(e.a,{href:"https://github.com/D-Robotics/rdk_model_zoo/tree/main/demos/llm/yoloworld",children:"https://github.com/D-Robotics/rdk_model_zoo/tree/main/demos/llm/yoloworld"})]})}),"\n",(0,o.jsxs)(e.p,{children:["\u8be5\u4ed3\u5e93\u5df2\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u53ef\u5728RDK\u7cfb\u5217\u5f00\u53d1\u677f\u4e0a\u76f4\u63a5\u90e8\u7f72\u7684\u5730\u74dc\u5f02\u6784\u6a21\u578b",(0,o.jsx)(e.code,{children:"yolo_world.bin"}),"\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u5047\u8bbe\u5f00\u53d1\u8005\u5df2\u5c06\u8be5\u6a21\u578b\u4e0b\u8f7d\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u5bfc\u5165bpu_infer_lib\u63a8\u7406\u5e93\uff0c\u5e76\u4f7f\u7528\u8be5\u5e93\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u7c7b - ",(0,o.jsx)(e.strong,{children:"Infer"}),"\u7c7b\u6765\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Python",children:"import bpu_infer_lib\ninf = bpu_infer_lib.Infer(False)\n"})}),"\n",(0,o.jsxs)(e.p,{children:["inf\u5bf9\u8c61\u5c06\u8d1f\u8d23",(0,o.jsx)(e.strong,{children:"\u6a21\u578b\u52a0\u8f7d\u3001\u8bfb\u53d6\u8f93\u5165\u3001\u6a21\u578b\u63a8\u7406\u3001\u83b7\u53d6\u8f93\u51fa"}),"\u7684\u5168\u94fe\u8def\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u8be5\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u53c2\u6570\u540d\u4e3adebug\uff0c\u7c7b\u578b\u4e3abool\u3002\u5373\u662f\u5426\u5f00\u542fdebug\u6a21\u5f0f\uff0c\u5982\u5f00\u542fdebug\u6a21\u5f0f\uff0c\u5219\u4f1a\u6253\u5370\u66f4\u591a\u8f93\u51fa\u3002"}),"\n",(0,o.jsx)(e.h3,{id:"\u6a21\u578b\u52a0\u8f7d",children:"\u6a21\u578b\u52a0\u8f7d"}),"\n",(0,o.jsx)(e.p,{children:"\u6a21\u578b\u52a0\u8f7d\u6211\u4eec\u5c06\u8c03\u7528inf\u5bf9\u8c61\u7684load_model\u6210\u5458\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u5730\u74dc\u5f02\u6784.bin\u6a21\u578b\u7684\u8def\u5f84\uff0c\u5e76\u5b8c\u6210\u6a21\u578b\u52a0\u8f7d\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Python",children:'inf.load_model("yolo_world.bin")\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u5b8c\u6210\u6a21\u578b\u52a0\u8f7d\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u770b\u8be5\u6a21\u578b\u8981\u6c42\u7684\u8f93\u5165\u3001\u8f93\u51fa\u7684\u76f8\u5173\u5c5e\u6027\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u67e5\u770b\u4ee5\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u6a21\u578b\u7684\u8f93\u5165\u4e2a\u6570"}),"\n",(0,o.jsx)(e.li,{children:"\u6a21\u578b\u6bcf\u4e2a\u8f93\u5165\u8981\u6c42\u7684\u6570\u636e\u6392\u5e03\uff08layout\uff09"}),"\n",(0,o.jsx)(e.li,{children:"\u6a21\u578b\u6bcf\u4e2a\u8f93\u5165\u8981\u6c42\u7684\u6570\u636e\u7c7b\u578b\uff08type\uff09"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Python",children:'print("Number of model\'s inputs:", len(inf.inputs))\nprint("Input[0]\'s tensor layout:", inf.inputs[0].properties.tensorLayout)\nprint("Input[0]\'s tensor type:", inf.inputs[0].properties.tensorType)\nprint("Input[1]\'s tensor layout:", inf.inputs[1].properties.tensorLayout)\nprint("Input[1]\'s tensor type:", inf.inputs[1].properties.tensorType)\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"Number of model's inputs: 2\nInput[0]'s tensor layout: HB_DNN_LAYOUT_NCHW\nInput[0]'s tensor type: HB_DNN_TENSOR_TYPE_F32\nInput[1]'s tensor layout: HB_DNN_LAYOUT_NCHW\nInput[1]'s tensor type: HB_DNN_TENSOR_TYPE_F32\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u540c\u7406\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u67e5\u770b\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u6a21\u578b\u7684\u8f93\u51fa\u4e2a\u6570"}),"\n",(0,o.jsx)(e.li,{children:"\u6a21\u578b\u6bcf\u4e2a\u8f93\u51fa\u8981\u6c42\u7684\u6570\u636e\u6392\u5e03\uff08layout\uff09"}),"\n",(0,o.jsx)(e.li,{children:"\u6a21\u578b\u6bcf\u4e2a\u8f93\u51fa\u8981\u6c42\u7684\u6570\u636e\u7c7b\u578b\uff08type\uff09"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Python",children:'print("Number of model\'s outputs:", len(inf.outputs))\nprint("Output[0]\'s tensor layout:", inf.outputs[0].properties.tensorLayout)\nprint("Output[0]\'s tensor type:", inf.outputs[0].properties.tensorType)\nprint("Output[1]\'s tensor layout:", inf.outputs[1].properties.tensorLayout)\nprint("Output[1]\'s tensor type:", inf.outputs[1].properties.tensorType)\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"Number of model's outputs: 2\nOutput[0]'s tensor layout: HB_DNN_LAYOUT_NCHW\nOutput[0]'s tensor type: HB_DNN_TENSOR_TYPE_F32\nOutput[1]'s tensor layout: HB_DNN_LAYOUT_NCHW\nOutput[1]'s tensor type: HB_DNN_TENSOR_TYPE_F32\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u8bfb\u53d6\u8f93\u5165",children:"\u8bfb\u53d6\u8f93\u5165"}),"\n",(0,o.jsxs)(e.p,{children:["\u8bfb\u53d6\u8f93\u5165\u7684\u63a5\u53e3\u6211\u4eec\u4f7f\u7528",(0,o.jsx)(e.code,{children:"inf.read_input"}),"\u6210\u5458\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u4e0e\u6a21\u578b\u8f93\u5165\u7c7b\u578b\u5339\u914d\u7684numpy array"}),"\n",(0,o.jsx)(e.li,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u8f93\u5165\u7684index\uff0c\u5373\u7b2c\u51e0\u4e2a\u8f93\u5165\uff08\u4ece0\u5f00\u59cb\uff0c\u5bf9\u4e8e\u5355\u8f93\u5165\u6a21\u578b\uff0c\u8fd9\u91cc\u586b\u51650\u5373\u53ef\uff09"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u6211\u4eec\u5c06\u9884\u5904\u7406\u597d\u7684\uff0cyoloworld\u6a21\u578b\u8981\u6c42\u7684\u4e24\u4e2a\u8f93\u5165\uff1a",(0,o.jsx)(e.code,{children:"input_image"}),"\u548c",(0,o.jsx)(e.code,{children:"text_embeddings"}),"\u4f7f\u7528\u8be5\u63a5\u53e3\u5206\u522b\u8bfb\u5165\u6a21\u578b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Python",children:"inf.read_input(input_image, 0)\ninf.read_input(text_embeddings, 1)\n"})}),"\n",(0,o.jsx)(e.admonition,{title:"\u4f60\u77e5\u9053\u5417",type:"tip",children:(0,o.jsx)(e.p,{children:"inf.read_input\u4f1a\u81ea\u52a8\u6821\u9a8c\u5f00\u53d1\u8005\u8f93\u5165numpy array\u7684\u6570\u636e\u7c7b\u578b\u548c\u5c3a\u5bf8\uff0c\u4e0d\u5408\u9002\u7684\u6570\u636e\u7c7b\u578b\u548c\u5c3a\u5bf8\u90fd\u4f1a\u88ab\u6821\u9a8c\u3002\u4ece\u800c\u907f\u514d\u4e0d\u5408\u7406\u7684\u8f93\u5165\u88ab\u6a21\u578b\u8bfb\u53d6\u3002"})}),"\n",(0,o.jsx)(e.h3,{id:"\u6a21\u578b\u63a8\u7406",children:"\u6a21\u578b\u63a8\u7406"}),"\n",(0,o.jsx)(e.p,{children:"\u5728\u5b8c\u6210\u6a21\u578b\u52a0\u8f7d\u3001\u8f93\u5165\u8bfb\u53d6\u540e\uff0c\u4e0b\u4e00\u6b65\uff0c\u6211\u4eec\u5373\u53ef\u8fdb\u884c\u6a21\u578b\u63a8\u7406\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["\u6a21\u578b\u63a8\u7406\u4f7f\u7528",(0,o.jsx)(e.code,{children:"inf.forward"}),"\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u4e0d\u63a5\u6536\u4efb\u4f55\u53c2\u6570\uff0c\u5b8c\u6210\u6a21\u578b\u52a0\u8f7d\u3001\u8f93\u5165\u8bfb\u53d6\u540e\u5373\u53ef\u6267\u884c\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Python",children:"inf.forward()\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u83b7\u53d6\u8f93\u51fa",children:"\u83b7\u53d6\u8f93\u51fa"}),"\n",(0,o.jsxs)(e.p,{children:["\u5f53\u5f02\u6784\u6a21\u578b\u5728BPU\u4e0a\u5b8c\u6210\u63a8\u7406\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,o.jsx)(e.code,{children:"inf.get_output"}),"\u51fd\u6570\u83b7\u53d6\u63a8\u7406\u7ed3\u679c\u3002",(0,o.jsx)(e.code,{children:"inf.get_output"}),"\u51fd\u6570\u4e0d\u63a5\u6536\u4efb\u4f55\u53c2\u6570\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Python",children:"inf.get_output()\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u63a8\u7406\u7ed3\u679c\u4e3anumpy array\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff0c\u5206\u522b\u83b7\u5f97\u4e24\u4e2a\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Python",children:"classes_scores = inf.outputs[0].data\nbboxes = inf.outputs[1].data\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>s});var o=i(96540);const t={},r=o.createContext(t);function l(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);