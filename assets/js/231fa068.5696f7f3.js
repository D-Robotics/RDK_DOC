"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2854],{45212:(n,e,_)=>{_.r(e),_.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>t,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var i=_(74848),d=_(28453);const c={sidebar_position:8},o="\u6a21\u578b\u63a8\u7406 DEBUG \u65b9\u6cd5",l={id:"Algorithm_Application/cdev_dnn_api/model_debug",title:"\u6a21\u578b\u63a8\u7406 DEBUG \u65b9\u6cd5",description:"\u9519\u8bef\u7801",source:"@site/docs/04_Algorithm_Application/02_cdev_dnn_api/model_debug.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/model_debug",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/model_debug",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/04_Algorithm_Application/02_cdev_dnn_api/model_debug.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6392\u5e03\u53ca\u5bf9\u9f50\u89c4\u5219",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/data_alignment"},next:{title:"4.3.1 ModelZoo\u6982\u8ff0",permalink:"/rdk_doc/Algorithm_Application/model_zoo/model_zoo_intro"}},r={},s=[{value:"\u9519\u8bef\u7801",id:"\u9519\u8bef\u7801",level:2},{value:"\u914d\u7f6e\u4fe1\u606f",id:"configuration_information",level:2},{value:"\u5f00\u53d1\u673a\u6a21\u62df\u5668\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879",id:"\u5f00\u53d1\u673a\u6a21\u62df\u5668\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879",level:2}];function N(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u6a21\u578b\u63a8\u7406-debug-\u65b9\u6cd5",children:"\u6a21\u578b\u63a8\u7406 DEBUG \u65b9\u6cd5"}),"\n",(0,i.jsx)(e.h2,{id:"\u9519\u8bef\u7801",children:"\u9519\u8bef\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"HB_DNN_SUCCESS = 0                              // \u6267\u884c\u6210\u529f\nHB_DNN_INVALID_ARGUMENT = -6000001              // \u975e\u6cd5\u53c2\u6570\nHB_DNN_INVALID_MODEL = -6000002                 // \u975e\u6cd5\u6a21\u578b\nHB_DNN_MODEL_NUMBER_EXCEED_LIMIT = -6000003     // \u6a21\u578b\u4e2a\u6570\u8d85\u8fc7\u9650\u5236\nHB_DNN_INVALID_PACKED_DNN_HANDLE = -6000004     // \u975e\u6cd5packed handle\nHB_DNN_INVALID_DNN_HANDLE = -6000005            // \u975e\u6cd5handle\nHB_DNN_CAN_NOT_OPEN_FILE = -6000006             // \u6587\u4ef6\u4e0d\u5b58\u5728\nHB_DNN_OUT_OF_MEMORY = -6000007                 // \u6ca1\u6709\u8db3\u591f\u7684\u5185\u5b58\nHB_DNN_TIMEOUT = -6000008                       // \u8d85\u65f6\nHB_DNN_TASK_NUM_EXCEED_LIMIT = -6000009         // \u4efb\u52a1\u6570\u91cf\u8d85\u9650\u5236\nHB_DNN_TASK_BATCH_SIZE_EXCEED_LIMIT = -6000010  // \u591a\u4efb\u52a1\u5904\u7406\u6570\u91cf\u8d85\u9650\u5236\nHB_DNN_INVALID_TASK_HANDLE = -6000011           // \u975e\u6cd5task handle\nHB_DNN_RUN_TASK_FAILED = -6000012               // \u4efb\u52a1\u6267\u884c\u5931\u8d25\nHB_DNN_MODEL_IS_RUNNING = -6000013              // \u4efb\u52a1\u6267\u884c\u4e2d\nHB_DNN_INCOMPATIBLE_MODEL = -6000014            // \u4e0d\u517c\u5bb9\u7684\u6a21\u578b\nHB_DNN_API_USE_ERROR = -6000015                 // \u63a5\u53e3\u4f7f\u7528\u9519\u8bef\nHB_DNN_MULTI_PROGRESS_USE_ERROR = -6000016      // \u591a\u8fdb\u7a0b\u4f7f\u7528\u9519\u8bef\n\nHB_SYS_SUCCESS = 0                              // \u6267\u884c\u6210\u529f\nHB_SYS_INVALID_ARGUMENT = -6000129              // \u975e\u6cd5\u53c2\u6570\nHB_SYS_OUT_OF_MEMORY = -6000130                 // \u6ca1\u6709\u8db3\u591f\u7684\u5185\u5b58\nHB_SYS_REGISTER_MEM_FAILED = -6000131           // \u6ce8\u518c\u5185\u5b58\u5931\u8d25\n"})}),"\n",(0,i.jsx)(e.h2,{id:"configuration_information",children:"\u914d\u7f6e\u4fe1\u606f"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u65e5\u5fd7\u7b49\u7ea7\u3002 ",(0,i.jsx)(e.code,{children:"dnn"})," \u4e2d\u7684\u65e5\u5fd7\u4e3b\u8981\u5206\u4e3a4\u4e2a\u7b49\u7ea7\uff0c\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HB_DNN_LOG_NONE = 0"}),"\uff0c\u4e0d\u8f93\u51fa\u65e5\u5fd7\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HB_DNN_LOG_WARNING = 3"}),"\uff0c\u8be5\u7b49\u7ea7\u4e3b\u8981\u7528\u6765\u8f93\u51fa\u4ee3\u7801\u4e2d\u7684\u544a\u8b66\u4fe1\u606f\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HB_DNN_LOG_ERROR = 4"}),"\uff0c\u8be5\u7b49\u7ea7\u4e3b\u8981\u7528\u6765\u8f93\u51fa\u4ee3\u7801\u4e2d\u7684\u62a5\u9519\u4fe1\u606f\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HB_DNN_LOG_FATAL = 5"}),"\uff0c\u8be5\u7b49\u7ea7\u4e3b\u8981\u7528\u6765\u8f93\u51fa\u4ee3\u7801\u4e2d\u7684\u5bfc\u81f4\u9000\u51fa\u7684\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u65e5\u5fd7\u7b49\u7ea7\u8bbe\u7f6e\u89c4\u5219\uff1a"}),"\n",(0,i.jsxs)(e.p,{children:["\u82e5\u53d1\u751f\u7684LOG\u7b49\u7ea7 >= \u8bbe\u7f6e\u7684\u7b49\u7ea7\uff0c\u5219\u8be5LOG\u53ef\u4ee5\u88ab\u6253\u5370\uff0c\u53cd\u4e4b\u88ab\u5c4f\u853d\uff1b\u8bbe\u7f6e\u7684LOG\u7b49\u7ea7\u8d8a\u5c0f\uff0c\u6253\u5370\u4fe1\u606f\u8d8a\u591a\uff08\u7b49\u7ea70\u9664\u5916\uff0c0\u4e0d\u8f93\u51fa\u65e5\u5fd7\uff09\u3002\n\u4f8b\u5982\uff1a\u8bbe\u7f6eLOG\u7b49\u7ea7\u4e3a3\uff0c\u5373\u4e3a ",(0,i.jsx)(e.code,{children:"WARNING"})," \u7ea7\u522b\uff0c\u52193,4,5\u7b49\u7ea7\u7684LOG\u5747\u53ef\u4ee5\u88ab\u6253\u5370\uff1b\n\u9884\u6d4b\u5e93\u9ed8\u8ba4LOG\u7b49\u7ea7\u4e3a ",(0,i.jsx)(e.code,{children:"HB_DNN_LOG_WARNING"})," \uff0c\u5219\u4ee5\u4e0bLOG\u7ea7\u522b\u7684\u4fe1\u606f\u53ef\u4ee5\u88ab\u6253\u5370\uff1a\n",(0,i.jsx)(e.code,{children:"WARNING"})," \u3001 ",(0,i.jsx)(e.code,{children:"ERROR"})," \u3001 ",(0,i.jsx)(e.code,{children:"FATAL"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u65e5\u5fd7\u7b49\u7ea7\u8bbe\u7f6e\u65b9\u5f0f\uff1a\n\u53ef\u901a\u8fc7\u73af\u5883\u53d8\u91cf ",(0,i.jsx)(e.code,{children:"HB_DNN_LOG_LEVEL"})," \u8bbe\u7f6e\u65e5\u5fd7\u7b49\u7ea7\u3002\n\u6bd4\u5982\uff1a ",(0,i.jsx)(e.code,{children:"export HB_DNN_LOG_LEVEL=3"}),"\uff0c\u5219\u8f93\u51fa ",(0,i.jsx)(e.code,{children:"WARNING"})," \u7ea7\u4ee5\u4e0a\u7ea7\u522b\u7684\u65e5\u5fd7\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5e38\u7528\u73af\u5883\u53d8\u91cf"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"HB_DNN_LOG_LEVEL                // \u8bbe\u7f6e\u65e5\u5fd7\u7b49\u7ea7\u3002\nHB_DNN_CONV_MAP_PATH            // \u6a21\u578b\u5377\u79ef\u5c42\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff1b\u7f16\u8bd1\u53c2\u6570layer_out_dump\u4e3atrue\u65f6\u4ea7\u751f\u7684json\u6587\u4ef6\u3002\nHB_DNN_DUMP_PATH                // \u6a21\u578b\u5377\u79ef\u5c42\u7ed3\u679c\u8f93\u51fa\u8def\u5f84\uff0c\u4e0eHB_DNN_CONV_MAP_PATH\u914d\u5408\u4f7f\u7528\u3002\nHB_DNN_PLUGIN_PATH              // \u81ea\u5b9a\u4e49CPU\u7b97\u5b50\u52a8\u6001\u94fe\u63a5\u5e93\u6240\u5728\u76ee\u5f55\u3002\nHB_DNN_PROFILER_LOG_PATH        // \u6a21\u578b\u8fd0\u884c\u5404\u9636\u6bb5\u8017\u65f6\u7edf\u8ba1\u4fe1\u606fdump\u8def\u5f84\u3002\nHB_DNN_SIM_PLATFORM             // x86\u6a21\u62df\u5668\u6a21\u62df\u5e73\u53f0\u8bbe\u7f6e\uff0c\u53ef\u8bbe\u7f6e\u4e3aBERNOULLI\u3001BERNOULLI2\u3001BAYES\u3002\nHB_DNN_SIM_BPU_MEM_SIZE         // x86\u6a21\u62df\u5668\u8bbe\u7f6eBPU\u5185\u5b58\u5927\u5c0f\uff0c\u5355\u4f4dMB\u3002\nHB_DNN_ENABLE_DSP               // \u4f7f\u80fdDSP\u6a21\u5757\uff0c\u4ec5 RDK Ultra \u53ef\u7528\u3002\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5f00\u53d1\u673a\u6a21\u62df\u5668\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879",children:"\u5f00\u53d1\u673a\u6a21\u62df\u5668\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5f00\u53d1\u673a\u6a21\u62df\u5668\u5728\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf ",(0,i.jsx)(e.code,{children:"HB_DNN_SIM_PLATFORM"})," \u6765\u6307\u5b9a\u9700\u8981\u6a21\u62df\u7684\u5904\u7406\u5668\u67b6\u6784\uff0c\u53ef\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"export HB_DNN_SIM_PLATFORM=BERNOULLI"}),"\uff0c\u4e3a ",(0,i.jsx)(e.code,{children:"BERNOULLI"})," \u67b6\u6784\uff0c\u6a21\u62dfD-Robotics  ",(0,i.jsx)(e.code,{children:"xj2"})," \u5e73\u53f0\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"export HB_DNN_SIM_PLATFORM=BERNOULLI2"}),"\uff0c\u4e3a ",(0,i.jsx)(e.code,{children:"BERNOULLI2"})," \u67b6\u6784\uff0c\u6a21\u62dfD-Robotics  ",(0,i.jsx)(e.code,{children:"x3"})," \u5e73\u53f0, ",(0,i.jsx)(e.strong,{children:"RDK X3"})," \u53ef\u4f7f\u7528\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"export HB_DNN_SIM_PLATFORM=BAYES"}),"\uff0c\u4e3a ",(0,i.jsx)(e.code,{children:"BAYES"})," \u67b6\u6784\uff0c\u6a21\u62dfD-Robotics  ",(0,i.jsx)(e.code,{children:"xj5"})," \u5e73\u53f0\uff0c ",(0,i.jsx)(e.strong,{children:"RDK Ultra"})," \u53ef\u4f7f\u7528\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4e0d\u8bbe\u7f6e ",(0,i.jsx)(e.code,{children:"HB_DNN_SIM_PLATFORM"})," \u73af\u5883\u53d8\u91cf\uff0c\u4f1a\u6839\u636e\u7b2c\u4e00\u6b21\u52a0\u8f7d\u7684\u6a21\u578b\u67b6\u6784\u6765\u8bbe\u7f6e\u6a21\u62df\u5668\u5e73\u53f0\uff0c\u4f8b\u5982\uff1a\u7b2c\u4e00\u6b21\u52a0\u8f7d\u7684\u6a21\u578b\u662f ",(0,i.jsx)(e.code,{children:"BERNOULLI2"})," \u67b6\u6784\uff0c\u5219\u7a0b\u5e8f\u9ed8\u8ba4\u8bbe\u7f6e\u7684\u5e73\u53f0\u4e3a ",(0,i.jsx)(e.code,{children:"x3"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5728\u5f00\u53d1\u673a\u6a21\u62df\u5668\u4e2d\u6267\u884c ",(0,i.jsx)(e.code,{children:"resize"})," \u76f8\u5173\u64cd\u4f5c\u4e4b\u524d\uff0c\u9700\u8981\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"HB_DNN_SIM_PLATFORM"})," \u73af\u5883\u53d8\u91cf\u6307\u5b9a\u5e73\u53f0\u3002"]}),"\n"]}),"\n"]})]})}function t(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(N,{...n})}):N(n)}},28453:(n,e,_)=>{_.d(e,{R:()=>o,x:()=>l});var i=_(96540);const d={},c=i.createContext(d);function o(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:o(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);