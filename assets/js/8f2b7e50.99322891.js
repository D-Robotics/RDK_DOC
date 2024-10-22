"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5434],{37781:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=r(74848),l=r(28453);const i={sidebar_position:3},s="4.3.3 ModelZoo\u63a8\u7406\u63a5\u53e3",d={id:"Algorithm_Application/model_zoo/infer_api",title:"4.3.3 ModelZoo\u63a8\u7406\u63a5\u53e3",description:"\u6982\u8ff0",source:"@site/docs/04_Algorithm_Application/03_model_zoo/infer_api.md",sourceDirName:"04_Algorithm_Application/03_model_zoo",slug:"/Algorithm_Application/model_zoo/infer_api",permalink:"/rdk_doc/Algorithm_Application/model_zoo/infer_api",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/04_Algorithm_Application/03_model_zoo/infer_api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"4.3.2 ModelZoo\u5feb\u901f\u4e0a\u624b",permalink:"/rdk_doc/Algorithm_Application/model_zoo/bpu_infer_lib_intro"},next:{title:"5. \u673a\u5668\u4eba\u5e94\u7528\u5f00\u53d1",permalink:"/rdk_doc/Robot_development"}},o={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Infer\u5bf9\u8c61",id:"infer\u5bf9\u8c61",level:2},{value:"Infer",id:"infer",level:3},{value:"load_model",id:"load_model",level:3},{value:"read_input",id:"read_input",level:3},{value:"forward",id:"forward",level:3},{value:"get_output",id:"get_output",level:3}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"433-modelzoo\u63a8\u7406\u63a5\u53e3",children:"4.3.3 ModelZoo\u63a8\u7406\u63a5\u53e3"}),"\n",(0,t.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,t.jsxs)(e.p,{children:["ModelZoo\u4f7f\u7528\u7684\u677f\u7aef\u63a8\u7406\u63a5\u53e3\u4e3a",(0,t.jsx)(e.strong,{children:"bpu_infer_lib"}),"\u3002\u5728\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u8bb2\u8ff0\u4e86bpu_infer_lib\u7684\u5b89\u88c5\u65b9\u5f0f\u3001\u5feb\u901f\u4e0a\u624b\u65b9\u6cd5\u3001\u548c\u4f7f\u7528\u6307\u5357\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u672c\u5c0f\u8282\uff0c\u6211\u4eec\u5c06\u5177\u4f53\u4ecb\u7ecdbpu_infer_lib\u4e2d\uff0c\u5404\u4e2aapi\u63a5\u53e3\u7684\u5177\u4f53\u7ec6\u8282\u548c\u4f7f\u7528\u65b9\u5f0f\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"infer\u5bf9\u8c61",children:"Infer\u5bf9\u8c61"}),"\n",(0,t.jsxs)(e.p,{children:["Infer\u5bf9\u8c61\u662f\u4e32\u8054\u6574\u4e2a\u63a8\u7406\u6d41\u7a0b\u7684\u5bf9\u8c61\u3002\u6784\u5efa\u4e00\u4e2aInfer\u5bf9\u8c61\uff0c\u5b83\u5c06\u8d1f\u8d23",(0,t.jsx)(e.strong,{children:"\u6a21\u578b\u52a0\u8f7d\u3001\u8bfb\u53d6\u8f93\u5165\u3001\u6a21\u578b\u63a8\u7406\u3001\u83b7\u53d6\u8f93\u51fa"}),"\u7684\u5168\u94fe\u8def\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"infer",children:"Infer"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4e3aInfer\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\uff0c\u4e00\u822c\u7528\u4e8ebpu_infer_lib\u7684\u5bfc\u5165\u8bed\u53e5\u4e4b\u540e\u3002"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,t.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"debug"}),(0,t.jsx)(e.td,{children:"bool"}),(0,t.jsx)(e.td,{children:"\u662f\u5426\u4e3a\u540e\u7eed\u63a8\u7406\u94fe\u8def\u63d0\u4f9bdebug\u6253\u5370"})]})})]}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Python",children:"import bpu_infer_lib\ninf = bpu_infer_lib.Infer(True)\n"})}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Infer"}),(0,t.jsx)(e.td,{children:"\u8fd4\u56de\u4e00\u4e2aInfer\u7c7b\u7684\u5bf9\u8c61\uff0c\u5e76\u63d0\u4f9b\u540e\u7eed\u53ef\u4f7f\u7528\u7684\u63a5\u53e3"})]})})]}),"\n",(0,t.jsx)(e.h3,{id:"load_model",children:"load_model"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,t.jsx)(e.p,{children:"load_model\u51fd\u6570\u4e3aInfer\u5bf9\u8c61\u7684\u4e00\u4e2a\u6210\u5458\u51fd\u6570\uff0c\u7528\u4e8e\u52a0\u8f7d\u5730\u74dcbpu\u5f02\u6784\u6a21\u578b\u3002"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,t.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"model_path"}),(0,t.jsx)(e.td,{children:"string"}),(0,t.jsx)(e.td,{children:"\u5730\u74dcbpu\u5f02\u6784\u6a21\u578b.bin\u6587\u4ef6\u7684\u50a8\u5b58\u8def\u5f84"})]})})]}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Python",children:'inf.load_model("yolo_world.bin")\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5b8c\u6210\u6a21\u578b\u52a0\u8f7d\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u770b\u8be5\u6a21\u578b\u8981\u6c42\u7684\u8f93\u5165\u3001\u8f93\u51fa\u7684\u76f8\u5173\u5c5e\u6027\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u67e5\u770b\u4ee5\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6a21\u578b\u7684\u8f93\u5165\u4e2a\u6570"}),"\n",(0,t.jsx)(e.li,{children:"\u6a21\u578b\u6bcf\u4e2a\u8f93\u5165\u8981\u6c42\u7684\u6570\u636e\u6392\u5e03\uff08layout\uff09"}),"\n",(0,t.jsx)(e.li,{children:"\u6a21\u578b\u6bcf\u4e2a\u8f93\u5165\u8981\u6c42\u7684\u6570\u636e\u7c7b\u578b\uff08type\uff09"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Python",children:'print("Number of model\'s inputs:", len(inf.inputs))\nprint("Input[0]\'s tensor layout:", inf.inputs[0].properties.tensorLayout)\nprint("Input[0]\'s tensor type:", inf.inputs[0].properties.tensorType)\nprint("Input[1]\'s tensor layout:", inf.inputs[1].properties.tensorLayout)\nprint("Input[1]\'s tensor type:", inf.inputs[1].properties.tensorType)\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Number of model's inputs: 2\nInput[0]'s tensor layout: HB_DNN_LAYOUT_NCHW\nInput[0]'s tensor type: HB_DNN_TENSOR_TYPE_F32\nInput[1]'s tensor layout: HB_DNN_LAYOUT_NCHW\nInput[1]'s tensor type: HB_DNN_TENSOR_TYPE_F32\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u540c\u7406\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u67e5\u770b\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6a21\u578b\u7684\u8f93\u51fa\u4e2a\u6570"}),"\n",(0,t.jsx)(e.li,{children:"\u6a21\u578b\u6bcf\u4e2a\u8f93\u51fa\u8981\u6c42\u7684\u6570\u636e\u6392\u5e03\uff08layout\uff09"}),"\n",(0,t.jsx)(e.li,{children:"\u6a21\u578b\u6bcf\u4e2a\u8f93\u51fa\u8981\u6c42\u7684\u6570\u636e\u7c7b\u578b\uff08type\uff09"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Python",children:'print("Number of model\'s outputs:", len(inf.outputs))\nprint("Output[0]\'s tensor layout:", inf.outputs[0].properties.tensorLayout)\nprint("Output[0]\'s tensor type:", inf.outputs[0].properties.tensorType)\nprint("Output[1]\'s tensor layout:", inf.outputs[1].properties.tensorLayout)\nprint("Output[1]\'s tensor type:", inf.outputs[1].properties.tensorType)\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Number of model's outputs: 2\nOutput[0]'s tensor layout: HB_DNN_LAYOUT_NCHW\nOutput[0]'s tensor type: HB_DNN_TENSOR_TYPE_F32\nOutput[1]'s tensor layout: HB_DNN_LAYOUT_NCHW\nOutput[1]'s tensor type: HB_DNN_TENSOR_TYPE_F32\n"})}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"bool"}),(0,t.jsx)(e.td,{children:"\u8fd4\u56de\u6a21\u578b\u662f\u5426\u52a0\u8f7d\u6210\u529f"})]})})]}),"\n",(0,t.jsx)(e.h3,{id:"read_input",children:"read_input"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,t.jsx)(e.p,{children:"read_input\u51fd\u6570\u4e3aInfer\u5bf9\u8c61\u7684\u4e00\u4e2a\u6210\u5458\u51fd\u6570\uff0c\u7528\u4e8e\u8bfb\u53d6\u4e00\u4e2a\u9884\u5904\u7406\u540e\u7684numpy array\u8f93\u5165\u3002"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,t.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"input"}),(0,t.jsx)(e.td,{children:"np.array"}),(0,t.jsx)(e.td,{children:"\u5bf9\u5e94\u8f93\u5165\u7684numpy array"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"index"}),(0,t.jsx)(e.td,{children:"int"}),(0,t.jsx)(e.td,{children:"\u5bf9\u5e94\u8f93\u5165numpy array\u7684\u7d22\u5f15\u3002\u5728load_model\u540e\uff0c\u53ef\u4ee5\u6253\u5f00debug\u67e5\u770b\u591a\u4e2ainputs\u7684\u987a\u5e8f\u3002\u5bf9\u4e8e\u5355\u8f93\u5165\u6a21\u578b\uff0c\u8f93\u5165index=0\u5373\u53ef"})]})]})]}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Python",children:"inf.read_input(input_image, 0)\ninf.read_input(text_embeddings, 1)\n"})}),"\n",(0,t.jsx)(e.admonition,{title:"\u4f60\u77e5\u9053\u5417",type:"tip",children:(0,t.jsx)(e.p,{children:"inf.read_input\u4f1a\u81ea\u52a8\u6821\u9a8c\u5f00\u53d1\u8005\u8f93\u5165numpy array\u7684\u6570\u636e\u7c7b\u578b\u548c\u5c3a\u5bf8\uff0c\u4e0d\u5408\u9002\u7684\u6570\u636e\u7c7b\u578b\u548c\u5c3a\u5bf8\u90fd\u4f1a\u88ab\u6821\u9a8c\u3002\u4ece\u800c\u907f\u514d\u4e0d\u5408\u7406\u7684\u8f93\u5165\u88ab\u6a21\u578b\u8bfb\u53d6\u3002"})}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"bool"}),(0,t.jsx)(e.td,{children:"\u8fd4\u56de\u5bf9\u5e94\u7d22\u5f15\u7684numpy array\u662f\u5426\u6b63\u786e\u88abInfer\u5bf9\u8c61\u6240\u8bfb\u5165"})]})})]}),"\n",(0,t.jsx)(e.h3,{id:"forward",children:"forward"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,t.jsx)(e.p,{children:"forward\u51fd\u6570\u4e3aInfer\u5bf9\u8c61\u7684\u4e00\u4e2a\u6210\u5458\u51fd\u6570\uff0c\u4e00\u822c\u7528\u4e8e\u8bfb\u53d6\u6a21\u578b\u8f93\u5165\u540e\u8fdb\u884c\u5730\u74dcbpu\u5f02\u6784\u6a21\u578b\u7684\u63a8\u7406\u73af\u8282\u3002"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,t.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"more"}),(0,t.jsx)(e.td,{children:"bool"}),(0,t.jsx)(e.td,{children:"\uff08\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3aFalse\uff09\u5728\u8be5\u6b21\u63a8\u7406\u5b8c\u6210\u540e\uff0c\u540e\u7eed\u4ecd\u9700\u4f7f\u7528\u8be5\u63a5\u53e3\u8fdb\u884c\u591a\u6b21\u63a8\u7406\u65f6\uff0c\u53ef\u5c06\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3aTrue\u3002"})]})})]}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Python",children:"inf.forward()\n"})}),"\n",(0,t.jsx)(e.h3,{id:"get_output",children:"get_output"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,t.jsx)(e.p,{children:"get_output\u51fd\u6570\u4e3aInfer\u5bf9\u8c61\u7684\u4e00\u4e2a\u6210\u5458\u51fd\u6570\uff0c\u4e00\u822c\u7528\u4e8eInfer\u5bf9\u8c61\u5728\u5b8c\u6210forward\u51fd\u6570\u540e\uff0c\u83b7\u53d6\u63a8\u7406\u7ed3\u679c\u65f6\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Python",children:"inf.get_output()\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u63a8\u7406\u7ed3\u679c\u4e3anumpy array\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff0c\u5206\u522b\u83b7\u5f97\u4e24\u4e2a\u8f93\u51fa\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Python",children:"classes_scores = inf.outputs[0].data\nbboxes = inf.outputs[1].data\n"})}),"\n",(0,t.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"bool"}),(0,t.jsx)(e.td,{children:"\u8fd4\u56deInfer\u5bf9\u8c61\u662f\u5426\u80fd\u6210\u529f\u83b7\u53d6\u6a21\u578b\u7684\u63a8\u7406\u7ed3\u679c"})]})})]})]})}function p(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>d});var t=r(96540);const l={},i=t.createContext(l);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);