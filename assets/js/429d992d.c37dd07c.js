"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2950],{70572:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var s=i(74848),r=i(28453);const d={sidebar_position:6},t="\u6a21\u578b\u524d\u5904\u7406 API",c={id:"Algorithm_Application/cdev_dnn_api/dnn_resize",title:"\u6a21\u578b\u524d\u5904\u7406 API",description:"hbDNNResize()",source:"@site/docs/04_Algorithm_Application/02_cdev_dnn_api/dnn_resize.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/dnn_resize",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/dnn_resize",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/04_Algorithm_Application/02_cdev_dnn_api/dnn_resize.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u578b\u5185\u5b58\u64cd\u4f5c API",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/sys_mem"},next:{title:"\u6570\u636e\u7c7b\u578b\u548c\u6570\u636e\u7ed3\u6784",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/data_struct"}},o={},l=[{value:"hbDNNResize()",id:"hbdnnresize",level:2}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u6a21\u578b\u524d\u5904\u7406-api",children:"\u6a21\u578b\u524d\u5904\u7406 API"}),"\n",(0,s.jsx)(e.h2,{id:"hbdnnresize",children:"hbDNNResize()"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"int32_t hbDNNResize(hbDNNTaskHandle_t *taskHandle, hbDNNTensor *output, const hbDNNTensor *input, const hbDNNRoi *roi, hbDNNResizeCtrlParam *resizeCtrlParam)"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u636e\u8f93\u5165\u53c2\u6570\u8fdb\u884cresize\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(e.admonition,{title:"\u5907\u6ce8",type:"info",children:(0,s.jsxs)(e.p,{children:["\u6b64\u63a5\u53e3\u4e3a\u517c\u5bb9\u8001\u7248\u672c\uff0c\u540e\u7eed\u4e0d\u5728\u7ef4\u62a4\uff0c\u82e5\u9700\u5bf9\u6a21\u578b\u8f93\u5165\u8fdb\u884cResize\uff0c\u8bf7\u53c2\u8003\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"hbDNNRoiInfer()"})," \u51fd\u6570\u8fdb\u884c\u6a21\u578b\u63a8\u7406"]})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["[out]  ",(0,s.jsx)(e.code,{children:"taskHandle"}),"           \u4efb\u52a1\u53e5\u67c4\u6307\u9488\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["[in/out] ",(0,s.jsx)(e.code,{children:"output"}),"             resize\u4efb\u52a1\u7684\u8f93\u51fa\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["[in]   ",(0,s.jsx)(e.code,{children:"input"}),"                resize\u4efb\u52a1\u7684\u8f93\u5165\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["[in]   ",(0,s.jsx)(e.code,{children:"roi"}),"                  \u8f93\u5165\u7684roi\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["[in]   ",(0,s.jsx)(e.code,{children:"resizeCtrlParam"}),"      \u63a7\u5236resize\u4efb\u52a1\u7684\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"0"})," \u5219\u8868\u793aAPI\u6210\u529f\u6267\u884c\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{title:"\u5907\u6ce8",type:"info",children:(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u76ee\u524d\u53ea\u652f\u6301\u76f8\u540c ",(0,s.jsx)(e.code,{children:"hbDNNDataType"})," \u7684resize\uff0c\u5e76\u4e14\u5fc5\u987b\u4e3a ",(0,s.jsx)(e.code,{children:"IMG"})," \u7c7b\u578b\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5bf9\u4e8e ",(0,s.jsx)(e.code,{children:"HB_DNN_IMG_TYPE_NV12"}),"\uff0c ",(0,s.jsx)(e.code,{children:"HB_DNN_IMG_TYPE_NV12_SEPARATE"})," \u7c7b\u578b\u7684\u8f93\u5165\uff0c\u5bbd\u548c\u9ad8\u5fc5\u987b\u4e3a2\u7684\u500d\u6570\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:["\u7f29\u653e\u8303\u56f4\u662f :math:",(0,s.jsx)(e.code,{children:"dst / src \u2208 [1/185, 256)"}),"\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:["\u539f\u56fe\u5c3a\u5bf8\u8981\u6c42\u662f :math:",(0,s.jsx)(e.code,{children:"1 <= W <= 4080"}),", :math:",(0,s.jsx)(e.code,{children:"16 <= stride <= 4080"}),"\uff0c ",(0,s.jsx)(e.code,{children:"stride"})," \u5fc5\u987b\u662f16\u7684\u500d\u6570\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8f93\u51fa\u5c3a\u5bf8\u8981\u6c42\u662f :math:",(0,s.jsx)(e.code,{children:"Wout <= 4080"}),", :math:",(0,s.jsx)(e.code,{children:"Hout <= 4080"}),"\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"roi"})," \u5fc5\u987b\u5728\u56fe\u50cf\u7684\u5185\u90e8\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u6700\u591a\u652f\u6301\u540c\u65f6\u5b58\u572832\u4e2areisze\u4efb\u52a1\u3002"}),"\n"]})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var s=i(96540);const r={},d=s.createContext(r);function t(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);