"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7191],{43146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(74848),d=t(28453);const s={sidebar_position:3},o="4.2.3 Model Information Retrieval API",r={id:"Algorithm_Application/cdev_dnn_api/get_model_info",title:"4.2.3 Model Information Retrieval API",description:"hbDNNGetModelNameList()",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04_Algorithm_Application/02_cdev_dnn_api/get_model_info.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/get_model_info",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/get_model_info",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/04_Algorithm_Application/02_cdev_dnn_api/get_model_info.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"4.2.2 Model Load/Unload API",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/initialize_and_release"},next:{title:"4.2.4 Model Inference API",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/dnn_infer"}},l={},c=[{value:"hbDNNGetModelNameList()",id:"hbdnngetmodelnamelist",level:2},{value:"hbDNNGetModelHandle()",id:"hbdnngetmodelhandle",level:2},{value:"hbDNNGetInputCount()<strong>[Function Prototype]</strong>",id:"hbdnngetinputcountfunction-prototype",level:2},{value:"hbDNNGetInputName()",id:"hbdnngetinputname",level:2},{value:"hbDNNGetInputTensorProperties()",id:"hbdnngetinputtensorproperties",level:2},{value:"hbDNNGetOutputCount()",id:"hbdnngetoutputcount",level:2},{value:"hbDNNGetOutputName()",id:"hbdnngetoutputname",level:2},{value:"hbDNNGetOutputTensorProperties()",id:"hbdnngetoutputtensorproperties",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"423-model-information-retrieval-api",children:"4.2.3 Model Information Retrieval API"}),"\n",(0,i.jsx)(n.h2,{id:"hbdnngetmodelnamelist",children:"hbDNNGetModelNameList()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbDNNGetModelNameList(const char ***modelNameList, int32_t *modelNameCount, hbPackedDNNHandle_t packedDNNHandle)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsxs)(n.p,{children:["Retrieve the list of names and the count of models pointed to by ",(0,i.jsx)(n.code,{children:"packedDNNHandle"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"modelNameList"})," : List of model names."]}),"\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"modelNameCount"})," : Number of model names."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"packedDNNHandle"}),"   : D-Robotics DNN handle that points to multiple models."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"0"})," for a successful execution of the API, otherwise, it fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbdnngetmodelhandle",children:"hbDNNGetModelHandle()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbDNNGetModelHandle(hbDNNHandle_t *dnnHandle, hbPackedDNNHandle_t packedDNNHandle, const char *modelName)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsxs)(n.p,{children:["Get a handle to a model from the list of models pointed to by ",(0,i.jsx)(n.code,{children:"packedDNNHandle"}),". The returned ",(0,i.jsx)(n.code,{children:"dnnHandle"})," can be used across functions and threads by the caller."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"dnnHandle"})," : DNN handle that points to a model."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"packedDNNHandle"})," : DNN handle that points to multiple models."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"modelName"})," : Model name."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"0"})," for a successful execution of the API, otherwise, it fails."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hbdnngetinputcountfunction-prototype",children:["hbDNNGetInputCount()",(0,i.jsx)(n.strong,{children:"[Function Prototype]"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbDNNGetInputCount(int32_t *inputCount, hbDNNHandle_t dnnHandle)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsxs)(n.p,{children:["Get the number of input tensors for the model pointed by ",(0,i.jsx)(n.code,{children:"dnnHandle"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"inputCount"}),": The number of input tensors for the model."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"dnnHandle"}),": DNN handle pointing to a model."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"0"})," if the API is executed successfully, otherwise it fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbdnngetinputname",children:"hbDNNGetInputName()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbDNNGetInputName(const char **name, hbDNNHandle_t dnnHandle, int32_t inputIndex)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsxs)(n.p,{children:["Get the name of the input tensor for the model pointed by ",(0,i.jsx)(n.code,{children:"dnnHandle"})," at the specified index."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"name"}),": The name of the input tensor."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"dnnHandle"}),": DNN handle pointing to a model."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"inputIndex"}),": The index of the input tensor."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"0"})," if the API is executed successfully, otherwise it fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbdnngetinputtensorproperties",children:"hbDNNGetInputTensorProperties()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbDNNGetInputTensorProperties(hbDNNTensorProperties *properties, hbDNNHandle_t dnnHandle, int32_t inputIndex)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsxs)(n.p,{children:["Get the properties of the specific input tensor for the model pointed by ",(0,i.jsx)(n.code,{children:"dnnHandle"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"properties"}),": The properties of the input tensor."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"dnnHandle"}),": DNN handle pointing to a model."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"inputIndex"}),": The index of the input tensor."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Return ",(0,i.jsx)(n.code,{children:"0"})," indicates successful execution of the API, otherwise it fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbdnngetoutputcount",children:"hbDNNGetOutputCount()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[FunctionPrototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbDNNGetOutputCount(int32_t *outputCount, hbDNNHandle_t dnnHandle)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsxs)(n.p,{children:["Get the number of output tensors in the model pointed by ",(0,i.jsx)(n.code,{children:"dnnHandle"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"outputCount"}),"  Number of output tensors in the model."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"dnnHandle"}),"    DNN handle pointing to a model."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Return ",(0,i.jsx)(n.code,{children:"0"})," indicates successful execution of the API, otherwise it fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbdnngetoutputname",children:"hbDNNGetOutputName()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbDNNGetOutputName(const char **name, hbDNNHandle_t dnnHandle, int32_t outputIndex)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsxs)(n.p,{children:["Get the name of the output tensor in the model pointed by ",(0,i.jsx)(n.code,{children:"dnnHandle"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"name"}),"        Name of the output tensor."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"dnnHandle"}),"   DNN handle pointing to a model."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"outputIndex"}),"  Index of the output tensor in the model."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Return ",(0,i.jsx)(n.code,{children:"0"})," indicates successful execution of the API, otherwise it fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbdnngetoutputtensorproperties",children:"hbDNNGetOutputTensorProperties()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbDNNGetOutputTensorProperties(hbDNNTensorProperties *properties, hbDNNHandle_t dnnHandle, int32_t outputIndex)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Function Description\u3011"})}),"\n",(0,i.jsxs)(n.p,{children:["Get the properties of the output tensor specified by ",(0,i.jsx)(n.code,{children:"dnnHandle"})," in the model."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"properties"}),"    Information of the output tensor."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"dnnHandle"}),"     DNN handle pointing to a model."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"outputIndex"}),"   Index of the model's output tensor."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsx)(n.code,{children:"0"})," if the API is executed successfully, otherwise it fails."]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const d={},s=i.createContext(d);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);