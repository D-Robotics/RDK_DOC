"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2655],{14675:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var i=d(74848),t=d(28453);const l={sidebar_position:8},r="\u6570\u636e\u6392\u5e03\u53ca\u5bf9\u9f50\u89c4\u5219",s={id:"Algorithm_Application/cdev_dnn_api/data_alignment",title:"\u6570\u636e\u6392\u5e03\u53ca\u5bf9\u9f50\u89c4\u5219",description:"\u6570\u636e\u6392\u5e03",source:"@site/docs/04_Algorithm_Application/02_cdev_dnn_api/data_alignment.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/data_alignment",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/data_alignment",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/04_Algorithm_Application/02_cdev_dnn_api/data_alignment.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7c7b\u578b\u548c\u6570\u636e\u7ed3\u6784",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/data_struct"},next:{title:"\u6a21\u578b\u63a8\u7406 DEBUG \u65b9\u6cd5",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/model_debug"}},c={},h=[{value:"\u6570\u636e\u6392\u5e03",id:"\u6570\u636e\u6392\u5e03",level:2},{value:"BPU\u5bf9\u9f50\u9650\u5236\u89c4\u5219",id:"bpu\u5bf9\u9f50\u9650\u5236\u89c4\u5219",level:2},{value:"\u6a21\u578b\u8f93\u5165\u8981\u6c42",id:"\u6a21\u578b\u8f93\u5165\u8981\u6c42",level:3},{value:"\u5bf9\u9f50\u548c\u6709\u6548\u6570\u636e",id:"\u5bf9\u9f50\u548c\u6709\u6548\u6570\u636e",level:3},{value:"NV12\u4ecb\u7ecd",id:"nv12\u4ecb\u7ecd",level:2},{value:"YUV\u683c\u5f0f",id:"yuv\u683c\u5f0f",level:3},{value:"NV12\u6392\u5e03",id:"nv12\u6392\u5e03",level:3}];function o(n){const e={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u6570\u636e\u6392\u5e03\u53ca\u5bf9\u9f50\u89c4\u5219",children:"\u6570\u636e\u6392\u5e03\u53ca\u5bf9\u9f50\u89c4\u5219"}),"\n",(0,i.jsx)(e.h2,{id:"\u6570\u636e\u6392\u5e03",children:"\u6570\u636e\u6392\u5e03"}),"\n",(0,i.jsx)(e.p,{children:"\u786c\u4ef6\u5185\u90e8\u4e3a\u4e86\u63d0\u9ad8\u8ba1\u7b97\u6548\u7387\uff0c\u5176\u6570\u636e\u4f7f\u7528\u7279\u6b8a\u7684\u6392\u5e03\u65b9\u5f0f\u4ee5\u4f7f\u5f97\u5377\u79ef\u8fd0\u7b97\u4e2d\u540c\u4e00\u6279\u6b21\u4e58\u52a0\u7528\u5230\u7684feature map\u548ckernel\u5728\u5185\u5b58\u4e2d\u76f8\u90bb\u6392\u653e\u3002\n\u4e0b\u9762\u7b80\u8981\u4ecb\u7ecdD-Robotics \u5904\u7406\u5668\u4e2d\u6570\u636e\u6392\u5e03\uff08layout\uff09\u7684\u6982\u5ff5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u795e\u7ecf\u7f51\u7edc\u6a21\u578b\u4e2d\u7684\u53d8\u91cf\u53ef\u4ee5\u7528\u4e00\u4e2a4\u7ef4\u7684\u5f20\u91cf\u8868\u793a\uff0c\u6bcf\u4e2a\u6570\u5b57\u662f\u8fd9\u4e2a\u5f20\u91cf\u4e2d\u7684\u5143\u7d20\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u81ea\u7136\u6392\u5e03\u3002\n\u5c06\u4e0d\u540c\u7ef4\u5ea6\u7684\u4e0d\u540c\u5143\u7d20\u6309\u4e00\u5b9a\u89c4\u5219\u7d27\u5bc6\u6392\u5217\u5728\u4e00\u8d77\uff0c\u5f62\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u5c0f\u5757\uff08block\uff09\uff0c\u7136\u540e\u5c06\u8fd9\u4e9b\u5c0f\u5757\u770b\u6210\u65b0\u7684\u5143\u7d20\uff0c\u7ec4\u6210\u65b0\u76844\u7ef4\u5f20\u91cf\uff0c\n\u6211\u4eec\u79f0\u4e4b\u4e3a\u5e26\u6709\u6570\u636e\u6392\u5e03\u7684\u5f20\u91cf\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u5165\u8f93\u51fa\u6570\u636e\u4f1a\u7528\u5230\u4e0d\u540c\u7684layout\u6570\u636e\u6392\u5e03\uff0c\u7528\u6237\u53ef\u901a\u8fc7API\u83b7\u53d6layout\u63cf\u8ff0\u4fe1\u606f\uff0c\u4e0d\u540c\u7684layout\u6570\u636e\u4e0d\u53ef\u4ee5\u76f4\u63a5\u6bd4\u8f83\u3002"}),"\n",(0,i.jsxs)(e.admonition,{title:"\u5907\u6ce8",type:"info",children:[(0,i.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u8fdb\u884c\u6570\u636e\u6392\u5e03\u8f6c\u6362\u65f6\uff0c\u5982\u679c\u9700\u8981padding\uff0c\u5219padding\u7684\u503c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u96f6\u3002"}),(0,i.jsxs)(e.p,{children:["\u6b64\u5904\u4ecb\u7ecd\u4e24\u79cd\u6570\u636e\u6392\u5e03\uff1a ",(0,i.jsx)(e.code,{children:"NHWC_NATIVE"})," \u548c ",(0,i.jsx)(e.code,{children:"NCHW_NATIVE"})," \uff0c\u4ee5 ",(0,i.jsx)(e.code,{children:"NHWC_NATIVE"})," \u4e3a\u4f8b\uff0c\u5176\u6570\u636e\u6392\u5e03\u5982\u4e0b\uff1a"]})]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"N0H0W0C0"}),(0,i.jsx)(e.td,{children:"N0H0W0C1"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"N0H0W1C0"}),(0,i.jsx)(e.td,{children:"N0H0W1C1"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2026\u2026"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"N0H1W0C0"}),(0,i.jsx)(e.td,{children:"N0H1W0C1"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2026\u2026"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"N1H0W0C0"}),(0,i.jsx)(e.td,{children:"N1H0W0C1"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2026\u2026"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"}),(0,i.jsx)(e.td,{children:"\u2026\u2026"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["\u4e00\u4e2aN",(0,i.jsx)(e.em,{children:"H"}),"W*C\u5927\u5c0f\u7684\u5f20\u91cf\u53ef\u7528\u5982\u4e0b4\u91cd\u5faa\u73af\u8868\u793a\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"\n    for (int32_t n = 0; n < N; n++) {\n        for (int32_t h = 0; h < H; h++) {\n            for (int32_t w = 0; w < W; w++) {\n                for (int32_t c = 0; c < C; c++) {\n                    int32_t native_offset = n*H*W*C + h*W*C + w*C + c;\n                }\n            }\n        }\n    }\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,i.jsx)(e.code,{children:"NCHW_NATIVE"})," \u548c ",(0,i.jsx)(e.code,{children:"NHWC_NATIVE"})," \u76f8\u6bd4\uff0c\u53ea\u662f\u6392\u5e03\u5faa\u73af\u987a\u5e8f\u4e0d\u4e00\u6837\uff0c\u6b64\u5904\u4e0d\u518d\u5355\u72ec\u5217\u51fa\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"caution",children:(0,i.jsx)(e.p,{children:"\u4e0b\u6587\u4e2d\u63d0\u5230\u7684native\u90fd\u7279\u6307\u8be5layout\u3002"})}),"\n",(0,i.jsx)(e.h2,{id:"bpu\u5bf9\u9f50\u9650\u5236\u89c4\u5219",children:"BPU\u5bf9\u9f50\u9650\u5236\u89c4\u5219"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u8282\u5185\u5bb9\u4ecb\u7ecd\u4f7f\u7528BPU\u7684\u5bf9\u9f50\u9650\u5236\u89c4\u5219\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u6a21\u578b\u8f93\u5165\u8981\u6c42",children:"\u6a21\u578b\u8f93\u5165\u8981\u6c42"}),"\n",(0,i.jsx)(e.p,{children:"BPU\u4e0d\u9650\u5236\u6a21\u578b\u8f93\u5165\u5927\u5c0f\u6216\u8005\u5947\u5076\u3002\u65e2\u50cfYOLO\u8fd9\u79cd416x416\u7684\u8f93\u5165\u53ef\u4ee5\u652f\u6301\uff0c\u5bf9\u4e8e\u50cfSqueezeNet\u8fd9\u79cd227x227\u7684\u8f93\u5165\u4e5f\u53ef\u4ee5\u652f\u6301\u3002\n\u5bf9\u4e8eNV12\u8f93\u5165\u6bd4\u8f83\u7279\u522b\uff0c\u8981\u6c42HW\u90fd\u662f\u5076\u6570\uff0c\u662f\u4e3a\u4e86\u6ee1\u8db3UV\u662fY\u7684\u4e00\u534a\u7684\u8981\u6c42\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5bf9\u9f50\u548c\u6709\u6548\u6570\u636e",children:"\u5bf9\u9f50\u548c\u6709\u6548\u6570\u636e"}),"\n",(0,i.jsxs)(e.p,{children:["BPU\u5bf9\u6570\u636e\u6709\u5bf9\u9f50\u9650\u5236\u3002\u5bf9\u9f50\u8981\u6c42\u548c\u771f\u5b9e\u7684\u6570\u636e\u6392\u5e03\u7528 ",(0,i.jsx)(e.code,{children:"hbDNNTensorProperties"})," \u4e2d\u7684 ",(0,i.jsx)(e.code,{children:"validShape"})," , ",(0,i.jsx)(e.code,{children:"alignedShape"})," \u548c ",(0,i.jsx)(e.code,{children:"stride"})," \u8868\u793a\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"validShape"})," \u662f\u6709\u6548\u7684shape\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"alignedShape"})," \u662f\u6ee1\u8db3\u5bf9\u9f50\u8981\u6c42\u7684shape, \u7531\u4e8e\u786c\u4ef6\u7279\u6027\uff0c ",(0,i.jsx)(e.code,{children:"alignedShape"})," \u5747\u7531\u56db\u7ef4\u6570\u636e\u8868\u793a\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"stride"})," \u8868\u793a ",(0,i.jsx)(e.code,{children:"validShape"})," \u5404\u7ef4\u5ea6\u7684\u6b65\u957f\uff0c\u5176\u4e2d\uff0cNV12\u8f93\u5165\u7684\u6a21\u578b\u6bd4\u8f83\u7279\u6b8a\uff0c\u5176 ",(0,i.jsx)(e.code,{children:"stride"})," \u5747\u4e3a0\uff0c\u56e0\u4e3aNV12\u8f93\u5165\u7684\u6a21\u578b\u53ea\u8981\u6c42W 16\u5bf9\u9f50\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u76ee\u524d\u56db\u7ef4\u6a21\u578b\u7684\u5f20\u91cf\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"validShape"})," \u548c ",(0,i.jsx)(e.code,{children:"alignedShape"})," \u83b7\u53d6\u6b63\u786e\u7684\u6570\u636e\u6392\u5e03\uff0c\u82e5\u4f7f\u7528 ",(0,i.jsx)(e.strong,{children:"RDK Ultra"})," \u6a21\u578b\u4e2d\u5927\u4e8e\u56db\u7ef4\u6a21\u578b\u7684\u5f20\u91cf\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"validShape"})," \u548c ",(0,i.jsx)(e.code,{children:"stride"})," \u83b7\u53d6\u6b63\u786e\u7684\u6570\u636e\u6392\u5e03\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"nv12\u4ecb\u7ecd",children:"NV12\u4ecb\u7ecd"}),"\n",(0,i.jsx)(e.h3,{id:"yuv\u683c\u5f0f",children:"YUV\u683c\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"YUV\u683c\u5f0f\u4e3b\u8981\u7528\u4e8e\u4f18\u5316\u5f69\u8272\u89c6\u9891\u4fe1\u53f7\u7684\u4f20\u8f93\u3002\nYUV\u5206\u4e3a\u4e09\u4e2a\u5206\u91cf\uff1aY\u8868\u793a\u660e\u4eae\u5ea6\uff0c\u4e5f\u5c31\u662f\u7070\u5ea6\u503c\uff1b\u800cU\u548cV\u8868\u793a\u7684\u5219\u662f\u8272\u5ea6\uff0c\u4f5c\u7528\u662f\u63cf\u8ff0\u5f71\u50cf\u8272\u5f69\u53ca\u9971\u548c\u5ea6\uff0c\u7528\u4e8e\u6307\u5b9a\u50cf\u7d20\u7684\u989c\u8272\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"nv12\u6392\u5e03",children:"NV12\u6392\u5e03"}),"\n",(0,i.jsx)(e.p,{children:"NV12\u56fe\u50cf\u683c\u5f0f\u5c5e\u4e8eYUV\u989c\u8272\u7a7a\u95f4\u4e2d\u7684YUV420SP\u683c\u5f0f\uff0c\u6bcf\u56db\u4e2aY\u5206\u91cf\u5171\u7528\u4e00\u7ec4U\u5206\u91cf\u548cV\u5206\u91cf\uff0cY\u8fde\u7eed\u6392\u5e8f\uff0cU\u4e0eV\u4ea4\u53c9\u6392\u5e8f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6392\u5217\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nv12_layout",src:d(45292).A+"",width:"312",height:"409"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},45292:(n,e,d)=>{d.d(e,{A:()=>i});const i=d.p+"assets/images/nv12_layout-b018fd490d69f1d83f74c11822b6e662.png"},28453:(n,e,d)=>{d.d(e,{R:()=>r,x:()=>s});var i=d(96540);const t={},l=i.createContext(t);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);