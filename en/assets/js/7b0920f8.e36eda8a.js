"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9521],{14176:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(74848),s=i(28453);const r={sidebar_position:6},o="4.2.6 Model Pre-processing API",d={id:"Algorithm_Application/cdev_dnn_api/dnn_resize",title:"4.2.6 Model Pre-processing API",description:"hbDNNResize()",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04_Algorithm_Application/02_cdev_dnn_api/dnn_resize.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/dnn_resize",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/dnn_resize",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/04_Algorithm_Application/02_cdev_dnn_api/dnn_resize.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"4.2.5 Model Memory Operation API",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/sys_mem"},next:{title:"4.2.7 Data Types and Data Structures",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/data_struct"}},c={},l=[{value:"hbDNNResize()",id:"hbdnnresize",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"426-model-pre-processing-api",children:"4.2.6 Model Pre-processing API"}),"\n",(0,t.jsx)(n.h2,{id:"hbdnnresize",children:"hbDNNResize()"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"int32_t hbDNNResize(hbDNNTaskHandle_t *taskHandle, hbDNNTensor *output, const hbDNNTensor *input, const hbDNNRoi *roi, hbDNNResizeCtrlParam *resizeCtrlParam)"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u3010Description\u3011"})}),"\n",(0,t.jsx)(n.p,{children:"Resize tasks according to the input parameters."}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(n.p,{children:["This interface is compatible with older versions and will not be maintained in the future. If you need to resize the model input, please refer to the ",(0,t.jsx)(n.code,{children:"hbDNNRoiInfer()"})," function for model inference."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[out] ",(0,t.jsx)(n.code,{children:"taskHandle"}),": Handle pointer to the task."]}),"\n",(0,t.jsxs)(n.li,{children:["[in/out] ",(0,t.jsx)(n.code,{children:"output"}),": Output of the resize task."]}),"\n",(0,t.jsxs)(n.li,{children:["[in] ",(0,t.jsx)(n.code,{children:"input"}),": Input of the resize task."]}),"\n",(0,t.jsxs)(n.li,{children:["[in] ",(0,t.jsx)(n.code,{children:"roi"}),": Roi information of the input."]}),"\n",(0,t.jsxs)(n.li,{children:["[in] ",(0,t.jsx)(n.code,{children:"resizeCtrlParam"}),": Parameters to control the resize task."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Returns ",(0,t.jsx)(n.code,{children:"0"})," if the API is executed successfully, otherwise it fails."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Currently, only resizing with the same ",(0,t.jsx)(n.code,{children:"hbDNNDataType"})," is supported, and it must be of the ",(0,t.jsx)(n.code,{children:"IMG"})," type."]}),"\n",(0,t.jsxs)(n.li,{children:["For inputs of type ",(0,t.jsx)(n.code,{children:"HB_DNN_IMG_TYPE_NV12"})," or ",(0,t.jsx)(n.code,{children:"HB_DNN_IMG_TYPE_NV12_SEPARATE"}),", the width and height must be multiples of 2."]}),"\n",(0,t.jsxs)(n.li,{children:["The scaling range is ",(0,t.jsx)(n.code,{children:"dst / src \u2208 [1/185, 256)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The original image size should satisfy ",(0,t.jsx)(n.code,{children:"1 <= W <= 4080"}),", ",(0,t.jsx)(n.code,{children:"16 <= stride <= 4080"}),", and the ",(0,t.jsx)(n.code,{children:"stride"})," must be a multiple of 16."]}),"\n",(0,t.jsxs)(n.li,{children:["The output size should satisfy ",(0,t.jsx)(n.code,{children:"Wout <= 4080"}),", ",(0,t.jsx)(n.code,{children:"Hout <= 4080"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"roi"})," must be inside the image."]}),"\n",(0,t.jsx)(n.li,{children:"Up to 32 resize tasks can exist simultaneously."}),"\n"]})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);