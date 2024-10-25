"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3177],{77304:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>_,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=o(74848),t=o(28453);const r={sidebar_position:9},l="4.2.9 Model Inference DEBUG Method",s={id:"Algorithm_Application/cdev_dnn_api/model_debug",title:"4.2.9 Model Inference DEBUG Method",description:"Error Codes",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04_Algorithm_Application/02_cdev_dnn_api/model_debug.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/model_debug",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/model_debug",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/04_Algorithm_Application/02_cdev_dnn_api/model_debug.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"4.2.8 Data Layout and Alignment Rules",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/data_alignment"},next:{title:"4.3.1 ModelZoo\u6982\u8ff0",permalink:"/rdk_doc/en/Algorithm_Application/model_zoo/model_zoo_intro"}},d={},c=[{value:"Error Codes",id:"error-codes",level:2},{value:"Configuration Information",id:"configuration-information",level:2},{value:"Considerations for Development Machine Simulator",id:"considerations-for-development-machine-simulator",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"429-model-inference-debug-method",children:"4.2.9 Model Inference DEBUG Method"}),"\n",(0,i.jsx)(n.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,i.jsx)(n.p,{children:"HB_DNN_SUCCESS = 0                              // Execution succeeded\nHB_DNN_INVALID_ARGUMENT = -6000001              // Invalid argument\nHB_DNN_INVALID_MODEL = -6000002                 // Invalid model\nHB_DNN_MODEL_NUMBER_EXCEED_LIMIT = -6000003     // Number of models exceeds limit\nHB_DNN_INVALID_PACKED_DNN_HANDLE = -6000004     // Invalid packed handle\nHB_DNN_INVALID_DNN_HANDLE = -6000005            // Invalid handle\nHB_DNN_CAN_NOT_OPEN_FILE = -6000006             // File does not exist\nHB_DNN_OUT_OF_MEMORY = -6000007                 // Not enough memory\nHB_DNN_TIMEOUT = -6000008                       // Timeout\nHB_DNN_TASK_NUM_EXCEED_LIMIT = -6000009         // Number of tasks exceeds limit\nHB_DNN_TASK_BATCH_SIZE_EXCEED_LIMIT = -6000010  // Number of tasks exceeds batch size limit\nHB_DNN_INVALID_TASK_HANDLE = -6000011           // Invalid task handle\nHB_DNN_RUN_TASK_FAILED = -6000012               // Failed to execute task\nHB_DNN_MODEL_IS_RUNNING = -6000013              // Model is running\nHB_DNN_INCOMPATIBLE_MODEL = -6000014            // Incompatible model\nHB_DNN_API_USE_ERROR = -6000015                 // API usage error\nHB_DNN_MULTI_PROGRESS_USE_ERROR = -6000016      // Multi-process usage error"}),"\n",(0,i.jsx)(n.p,{children:"HB_SYS_SUCCESS = 0                              // Execution succeeded\nHB_SYS_INVALID_ARGUMENT = -6000129              // Invalid argument\nHB_SYS_OUT_OF_MEMORY = -6000130                 // Not enough memory\nHB_SYS_REGISTER_MEM_FAILED = -6000131           // Failed to register memory"}),"\n",(0,i.jsx)(n.h2,{id:"configuration-information",children:"Configuration Information"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log levels. The logs in ",(0,i.jsx)(n.code,{children:"dnn"})," are divided into four levels:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HB_DNN_LOG_NONE = 0"}),", no log output;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HB_DNN_LOG_WARNING = 3"}),", used to output warning messages in the code;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HB_DNN_LOG_ERROR = 4"}),", used to output error messages in the code;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HB_DNN_LOG_FATAL = 5"}),", used to output fatal error messages that cause program termination."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log level setting rules:"}),"\n",(0,i.jsxs)(n.p,{children:["If the log level that occurs is greater than or equal to the set level, the log can be printed; otherwise, it is blocked. The smaller the set log level, the more print information there is (except for level 0, which does not output logs). For example, if the log level is set to 3, which is the ",(0,i.jsx)(n.code,{children:"WARNING"})," level, logs of level 3, 4, and 5 can be printed. The default log level of the prediction library is ",(0,i.jsx)(n.code,{children:"HB_DNN_LOG_WARNING"}),", so log information of the following levels can be printed: ",(0,i.jsx)(n.code,{children:"WARNING"}),", ",(0,i.jsx)(n.code,{children:"ERROR"}),", ",(0,i.jsx)(n.code,{children:"FATAL"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log level setting method:\nThe log level can be set using the environment variable ",(0,i.jsx)(n.code,{children:"HB_DNN_LOG_LEVEL"}),". For example :",(0,i.jsx)(n.code,{children:"export HB_DNN_LOG_LEVEL=3"}),", output logs at or above the level of ",(0,i.jsx)(n.code,{children:"Warning"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Common Environment Variables"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"HB_DNN_LOG_LEVEL                 // Set the log level.\nHB_DNN_CONV_MAP_PATH             // Path to the model convolution layer configuration file; generated json file when the compilation parameter layer_out_dump is true.\nHB_DNN_DUMP_PATH                 // Path to output the model convolution layer results, used in conjunction with HB_DNN_CONV_MAP_PATH.\nHB_DNN_PLUGIN_PATH               // Directory where the custom CPU operator dynamic link libraries are located.\nHB_DNN_PROFILER_LOG_PATH         // Path to dump the timing statistics of each stage during model running.\nHB_DNN_SIM_PLATFORM              // Setting for the x86 simulator simulation platform, can be set to BERNOULLI, BERNOULLI2, BAYES.\nHB_DNN_SIM_BPU_MEM_SIZE          // Setting for the x86 simulator BPU memory size, in MB.\nHB_DNN_ENABLE_DSP                // Enables the DSP module, only available for RDK Ultra.\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"considerations-for-development-machine-simulator",children:"Considerations for Development Machine Simulator"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When using the development machine simulator, you can specify the simulated processor architecture by setting the environment variable ",(0,i.jsx)(n.code,{children:"HB_DNN_SIM_PLATFORM"}),". You can execute the following commands:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"export HB_DNN_SIM_PLATFORM=BERNOULLI2"})," for the ",(0,i.jsx)(n.code,{children:"BERNOULLI2"})," architecture, simulating the D-Robotics ",(0,i.jsx)(n.code,{children:"x3"})," platform, ",(0,i.jsx)(n.strong,{children:"RDK X3"})," can be used;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"export HB_DNN_SIM_PLATFORM=BAYES"})," for the ",(0,i.jsx)(n.code,{children:"BAYES"})," architecture, simulating the D-Robotics ",(0,i.jsx)(n.code,{children:"x5"})," platform, ",(0,i.jsx)(n.strong,{children:"RDK X5"})," can be used."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"HB_DNN_SIM_PLATFORM"})," environment variable is not set, the simulator platform will be set based on the architecture of the first loaded model. For example, if the first loaded model is of ",(0,i.jsx)(n.code,{children:"BERNOULLI2"})," architecture, the program will default to the ",(0,i.jsx)(n.code,{children:"x3"})," platform."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Before executing any operations related to ",(0,i.jsx)(n.code,{children:"resize"})," in the development machine simulator, you need to specify the platform by using the ",(0,i.jsx)(n.code,{children:"HB_DNN_SIM_PLATFORM"})," environment variable."]}),"\n"]}),"\n"]})]})}function _(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>s});var i=o(96540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);