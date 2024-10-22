"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7017],{39686:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var d=i(74848),s=i(28453);const r={sidebar_position:4},c="\u6a21\u578b\u63a8\u7406 API",l={id:"Algorithm_Application/cdev_dnn_api/dnn_infer",title:"\u6a21\u578b\u63a8\u7406 API",description:"hbDNNInfer()",source:"@site/docs/04_Algorithm_Application/02_cdev_dnn_api/dnn_infer.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/dnn_infer",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/dnn_infer",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/04_Algorithm_Application/02_cdev_dnn_api/dnn_infer.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u578b\u4fe1\u606f\u83b7\u53d6 API",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/get_model_info"},next:{title:"\u6a21\u578b\u5185\u5b58\u64cd\u4f5c API",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/sys_mem"}},h={},t=[{value:"hbDNNInfer()",id:"hbdnninfer",level:2},{value:"hbDNNRoiInfer()",id:"hbdnnroiinfer",level:2},{value:"hbDNNWaitTaskDone()",id:"hbdnnwaittaskdone",level:2},{value:"hbDNNReleaseTask()",id:"hbdnnreleasetask",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{id:"\u6a21\u578b\u63a8\u7406-api",children:"\u6a21\u578b\u63a8\u7406 API"}),"\n",(0,d.jsx)(e.h2,{id:"hbdnninfer",children:"hbDNNInfer()"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"int32_t hbDNNInfer(hbDNNTaskHandle_t *taskHandle, hbDNNTensor **output, const hbDNNTensor *input, hbDNNHandle_t dnnHandle, hbDNNInferCtrlParam *inferCtrlParam)"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsxs)(e.p,{children:["\u6839\u636e\u8f93\u5165\u53c2\u6570\u6267\u884c\u63a8\u7406\u4efb\u52a1\u3002\u8c03\u7528\u65b9\u53ef\u4ee5\u8de8\u51fd\u6570\u3001\u8de8\u7ebf\u7a0b\u4f7f\u7528\u8fd4\u56de\u7684 ",(0,d.jsx)(e.code,{children:"taskHandle"}),"\u3002"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["[out]     ",(0,d.jsx)(e.code,{children:"taskHandle"}),"          \u4efb\u52a1\u53e5\u67c4\u6307\u9488\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in/out]  ",(0,d.jsx)(e.code,{children:"output"}),"              \u63a8\u7406\u4efb\u52a1\u7684\u8f93\u51fa\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]      ",(0,d.jsx)(e.code,{children:"input"}),"               \u63a8\u7406\u4efb\u52a1\u7684\u8f93\u5165\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]      ",(0,d.jsx)(e.code,{children:"dnnHandle"}),"           DNN\u53e5\u67c4\u6307\u9488\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]      ",(0,d.jsx)(e.code,{children:"inferCtrlParam"}),"      \u63a7\u5236\u63a8\u7406\u4efb\u52a1\u7684\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u8fd4\u56de ",(0,d.jsx)(e.code,{children:"0"})," \u5219\u8868\u793aAPI\u6210\u529f\u6267\u884c\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.admonition,{title:"\u5907\u6ce8",type:"info",children:[(0,d.jsxs)(e.p,{children:["\u4f7f\u7528\u8be5\u63a5\u53e3\u63d0\u4ea4\u4efb\u52a1\u65f6\u5e94\u63d0\u524d\u5c06 ",(0,d.jsx)(e.code,{children:"taskHandle"})," \u7f6e\u4e3a ",(0,d.jsx)(e.code,{children:"nullptr"}),"\uff0c\u9664\u975e\u662f\u7ed9\u6307\u5b9a ",(0,d.jsx)(e.code,{children:"taskHandle"})," \u8ffd\u52a0\u4efb\u52a1\uff08\u5373\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"inferCtrlParam::more"})," \u529f\u80fd\uff09\u3002"]}),(0,d.jsx)(e.p,{children:"\u6700\u591a\u652f\u6301\u540c\u65f6\u5b58\u572832\u4e2a\u6a21\u578b\u4efb\u52a1\u3002"}),(0,d.jsxs)(e.p,{children:["\u5bf9\u4e8ebatch\u6a21\u578b\uff0c\u5141\u8bb8\u5206\u5f00\u8bbe\u7f6e\u8f93\u5165\u5f20\u91cf\u7684\u5185\u5b58\u5730\u5740\u3002\u4f8b\u5982\uff1a\u6a21\u578b\u7684\u8f93\u5165validShape/alignedShape\u4e3a[4, 3, 224, 224], \u53ef\u4ee5\u7533\u8bf7\u56db\u4e2ahbDNNTensor\uff0c \u6bcf\u4e2ahbDNNTensor\u7684validShape/alignedShape\u90fd\u8bbe\u7f6e\u4e3a[1, 3, 224, 224],\u5b58\u653e\u6bcf\u4e2abatch\u7684\u6570\u636e\u3002\u5f53\u6a21\u578b\u6709\u591a\u4e2a\u8f93\u5165\u65f6\uff0c ",(0,d.jsx)(e.code,{children:"input"})," \u7684\u987a\u5e8f\u5e94\u4e3ainput0[batch0], input0[batch1], ..., inputn[batch0], inputn[batch1], ...\u3002"]})]}),"\n",(0,d.jsx)(e.h2,{id:"hbdnnroiinfer",children:"hbDNNRoiInfer()"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"int32_t hbDNNRoiInfer(hbDNNTaskHandle_t *taskHandle, hbDNNTensor **output, const hbDNNTensor *input, hbDNNRoi *rois, int32_t roiCount, hbDNNHandle_t dnnHandle, hbDNNInferCtrlParam *inferCtrlParam)"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsxs)(e.p,{children:["\u6839\u636e\u8f93\u5165\u53c2\u6570\u6267\u884cROI\u63a8\u7406\u4efb\u52a1\u3002\u6839\u636e\u8f93\u5165\u53c2\u6570\u6267\u884cROI\u63a8\u7406\u4efb\u52a1\u3002\u8c03\u7528\u65b9\u53ef\u4ee5\u8de8\u51fd\u6570\u3001\u8de8\u7ebf\u7a0b\u4f7f\u7528\u8fd4\u56de\u7684 ",(0,d.jsx)(e.code,{children:"taskHandle"}),"\u3002"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["[out]     ",(0,d.jsx)(e.code,{children:"taskHandle"}),"       \u4efb\u52a1\u53e5\u67c4\u6307\u9488\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in/out]  ",(0,d.jsx)(e.code,{children:"output"}),"           \u63a8\u7406\u4efb\u52a1\u7684\u8f93\u51fa\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]      ",(0,d.jsx)(e.code,{children:"input"}),"            \u63a8\u7406\u4efb\u52a1\u7684\u8f93\u5165\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]      ",(0,d.jsx)(e.code,{children:"rois"}),"             Roi\u6846\u4fe1\u606f\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]      ",(0,d.jsx)(e.code,{children:"roiCount"}),"         Roi\u6846\u6570\u91cf\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]      ",(0,d.jsx)(e.code,{children:"dnnHandle"}),"        dnn\u53e5\u67c4\u6307\u9488\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]      ",(0,d.jsx)(e.code,{children:"inferCtrlParam"}),"   \u63a7\u5236\u63a8\u7406\u4efb\u52a1\u7684\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u8fd4\u56de ",(0,d.jsx)(e.code,{children:"0"})," \u5219\u8868\u793aAPI\u6210\u529f\u6267\u884c\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.admonition,{title:"\u5907\u6ce8",type:"info",children:[(0,d.jsxs)(e.p,{children:["\u82e5\u4f7f\u7528 ",(0,d.jsx)(e.strong,{children:"RDK X3"})," ,\u8bf7\u9075\u5faa\u5982\u4e0b\u89c4\u5219\uff1a\n| \u8be5\u63a5\u53e3\u652f\u6301\u6279\u5904\u7406\u64cd\u4f5c\uff0c\u5047\u8bbe\u9700\u8981\u63a8\u7406\u7684\u6570\u636e\u6279\u6570\u4e3a ",(0,d.jsx)(e.code,{children:"batch"}),"\uff0c\u6a21\u578b\u8f93\u5165\u4e2a\u6570\u4e3a ",(0,d.jsx)(e.code,{children:"input_count"}),"\uff0c\u5176\u4e2dresizer\u8f93\u5165\u6e90\u7684\u6570\u91cf\u4e3a ",(0,d.jsx)(e.code,{children:"resizer_count"}),"\u3002\n| \u51c6\u5907\u8f93\u5165\u53c2\u6570 ",(0,d.jsx)(e.code,{children:"input"}),"\uff1a\u7b2ci\u4e2a ",(0,d.jsx)(e.code,{children:"batch"})," \u5bf9\u5e94\u7684 ",(0,d.jsx)(e.code,{children:"input"})," \u6570\u7ec4\u4e0b\u6807\u8303\u56f4\u662f :math:",(0,d.jsx)(e.code,{children:"[i * input\\_count"}),", :math:",(0,d.jsx)(e.code,{children:"(i + 1) * input\\_count)\uff0ci=[0,batch)"}),";\n| \u51c6\u5907\u8f93\u5165\u53c2\u6570 ",(0,d.jsx)(e.code,{children:"rois"}),"\uff1a\u6bcf\u4e2aresizer\u8f93\u5165\u6e90\u7684\u8f93\u5165\u90fd\u5e94\u5339\u914d\u4e00\u4e2aroi\uff0c\u7b2ci\u4e2a ",(0,d.jsx)(e.code,{children:"batch"})," \u5bf9\u5e94\u7684 ",(0,d.jsx)(e.code,{children:"rois"})," \u6570\u7ec4\u4e0b\u6807\u8303\u56f4\u662f :math:",(0,d.jsx)(e.code,{children:"[i * resizer\\_count"}),", :math:",(0,d.jsx)(e.code,{children:"(i + 1) * resizer\\_count)\uff0ci=[0,batch)"}),"; \u6bcf\u4e2abatch\u7684roi\u987a\u5e8f\u5e94\u548c\u8f93\u5165\u7684\u987a\u5e8f\u4fdd\u6301\u4e00\u81f4\uff1b\n| \u5173\u4e8e ",(0,d.jsx)(e.code,{children:"batch"})," \u6570\u91cf\u9650\u5236\uff1a\u5176\u8303\u56f4\u5e94\u8be5\u5728[1, 255];"]}),(0,d.jsxs)(e.p,{children:["\u6a21\u578b\u9650\u5236\uff1a\u6a21\u578b\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u5c06\u7f16\u8bd1\u53c2\u6570 ",(0,d.jsx)(e.code,{children:"input_source"})," \u8bbe\u7f6e\u4e3a ",(0,d.jsx)(e.code,{children:"resizer"}),", \u6a21\u578b\u7684 h*w \u8981\u5c0f\u4e8e18432;"]}),(0,d.jsxs)(e.p,{children:["\u4f7f\u7528\u8be5\u63a5\u53e3\u63d0\u4ea4\u4efb\u52a1\u65f6\u5e94\u63d0\u524d\u5c06 ",(0,d.jsx)(e.code,{children:"taskHandle"})," \u7f6e\u4e3a ",(0,d.jsx)(e.code,{children:"nullptr"}),"\uff0c\u9664\u975e\u662f\u7ed9\u6307\u5b9a ",(0,d.jsx)(e.code,{children:"taskHandle"})," \u8ffd\u52a0\u4efb\u52a1\uff08\u5373\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"inferCtrlParam::more"})," \u529f\u80fd\uff09\u3002"]}),(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.code,{children:"roi"})," \u7684 ",(0,d.jsx)(e.code,{children:"left"})," \u548c ",(0,d.jsx)(e.code,{children:"top"})," \u5fc5\u987b\u662f\u5076\u6570\uff0c ",(0,d.jsx)(e.code,{children:"right"})," \u548c ",(0,d.jsx)(e.code,{children:"bottom"})," \u5fc5\u987b\u662f\u5947\u6570\u3002"]}),(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.code,{children:"roi"})," \u5927\u5c0f\u8981\u6c42\u662f :math:",(0,d.jsx)(e.code,{children:"16 <= width < 256"}),", :math:",(0,d.jsx)(e.code,{children:"16 <= height < 256"}),"\u3002"]}),(0,d.jsxs)(e.p,{children:["\u7f29\u653e\u8303\u56f4\u662f :math:",(0,d.jsx)(e.code,{children:"0.5 < roi / src <=8"}),"\u3002"]}),(0,d.jsx)(e.p,{children:"\u6700\u591a\u652f\u6301\u540c\u65f6\u5b58\u572832\u4e2a\u6a21\u578b\u4efb\u52a1\u3002"}),(0,d.jsxs)(e.p,{children:["API\u793a\u4f8b\uff1a \u53ef\u53c2\u8003",(0,d.jsx)(e.a,{href:"../../07_Advanced_development/04_toolchain_development/intermediate/runtime_sample#%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86dnn-api%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B%E8%AF%B4%E6%98%8E",children:"\u6a21\u578b\u63a8\u7406DNN API\u4f7f\u7528\u793a\u4f8b\u8bf4\u660e\u6587\u6863"}),"\u7684 ",(0,d.jsx)(e.code,{children:"roi_infer.sh"})," \u8bf4\u660e\u3002"]}),(0,d.jsxs)(e.p,{children:["\u6a21\u578b\u9650\u5236\uff1a\u5728\u6a21\u578b\u8f6c\u6362\u65f6\uff0c\u5c06\u7f16\u8bd1\u53c2\u6570 ",(0,d.jsx)(e.code,{children:"input_source"})," \u8bbe\u7f6e\u4e3a ",(0,d.jsx)(e.code,{children:"{`input_name`: `resizer`}"})," \u5373\u53ef\u751f\u6210resizer\u6a21\u578b\uff0c\u5177\u4f53\u53c2\u6570\u914d\u7f6e\u7ec6\u8282\u53ef\u53c2\u8003",(0,d.jsx)(e.a,{href:"../../07_Advanced_development/04_toolchain_development/intermediate/ptq_process#model_conversion",children:"PTQ\u91cf\u5316\u539f\u7406\u53ca\u6b65\u9aa4\u8bf4\u660e\u7684\u8f6c\u6362\u6a21\u578b"}),"\u4e2d\u7684\u4ecb\u7ecd\u3002"]}),(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{alt:"resizer",src:i(76024).A+"",width:"1066",height:"275"})}),(0,d.jsx)(e.p,{children:"\u76ee\u524d\u4e5f\u652f\u6301\u591a\u8f93\u5165\u7684nv12\u6570\u636e\uff0cresizer\u5e38\u7528\u7684\u8f93\u51fa\u5c3a\u5bf8(HxW)\uff1a128x128\u3001128x64\u300164x128\u3001160x96"})]}),"\n",(0,d.jsxs)(e.admonition,{title:"\u5907\u6ce8",type:"info",children:[(0,d.jsxs)(e.p,{children:["\u82e5\u4f7f\u7528 ",(0,d.jsx)(e.strong,{children:"RDK Ultra"})," ,\u8bf7\u9075\u5faa\u5982\u4e0b\u89c4\u5219\uff1a"]}),(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"input_count"})," : \u6a21\u578b\u8f93\u5165\u5206\u652f\u6570\u91cf"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"output_count"})," : \u6a21\u578b\u8f93\u51fa\u5206\u652f\u6570\u91cf"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"resizer_count"})," : \u6a21\u578b\u8f93\u5165\u6e90\u4e3a resizer \u7684\u5206\u652f\u6570\u91cf\uff08\u2264input_count\uff09\uff0c\u6a21\u578b\u5904\u7406\u4e00\u6279\u6570\u636e\u65f6\uff0c\u4e00\u4e2a resizer \u8f93\u5165\u6e90\u5206\u652f\u5904\u7406\u4e00\u4e2a roi"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"roiCount"})," : roi \u603b\u6570\uff0c\u5176\u6570\u503c\u4e3a ",(0,d.jsx)(e.code,{children:"batch * resizer_count"})]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"data_batch"})," : \u6a21\u578b\u9700\u8981\u63a8\u7406\u7684\u6570\u636e\u6279\u6570\uff0c\u5176\u6570\u503c\u4e3a ",(0,d.jsx)(e.code,{children:"roiCount / resizer_count"})]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"model_batch"})," : \u6a21\u578b\u5185\u90e8\u7684 batch \u6570\u91cf\u3002\u5373\u6a21\u578b\u5b9e\u9645\u63a8\u7406\u65f6\uff0c\u8f93\u5165\u7ed9\u6a21\u578b\u7684 batch_size\u3002D-Robotics \u5de5\u5177\u94fe\u652f\u6301\u5c06\u6a21\u578b\u7f16\u8bd1\u4e3a batch model"]}),"\n"]}),(0,d.jsx)(e.p,{children:"\u8f93\u5165/\u8f93\u51fa\u793a\u4f8b\u8bf4\u660e\uff1a"}),(0,d.jsxs)(e.p,{children:["\u4ee5\u8f83\u4e3a\u590d\u6742\u7684\u591a\u8f93\u5165\u6a21\u578b\u4e3a\u4f8b\uff0c\u5047\u8bbe\u6a21\u578b\u6709 3 \u4e2a\u8f93\u5165\u5206\u652f\uff082\u4e2aresizer\u8f93\u5165\u6e90\uff0c1\u4e2addr\u8f93\u5165\u6e90\uff09\u548c 1 \u4e2a\u8f93\u51fa\u5206\u652f\uff0c\u5e76\u4ee5 ",(0,d.jsx)(e.code,{children:"batch=2"})," \u7f16\u8bd1\uff0c\u6a21\u578b\u5171\u9700\u5904\u7406 3 \u6279\u6570\u636e\u5171 6 \u4e2a roi\uff08\u5373\u6bcf\u6279\u6570\u636e\u67092\u4e2aroi\uff09\uff0c\u90a3\u4e48\u73b0\u6709\u5982\u4e0b\u4fe1\u606f\uff1a"]}),(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"input_count"})," = 3"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"output_count"})," = 1"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"resizer_count"})," = 2"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"roiCount"})," = 6"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"data_batch"})," = 3"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"model_batch"})," = 2"]}),"\n"]}),(0,d.jsxs)(e.p,{children:["\u6240\u4ee5\u6a21\u578b\u63a8\u7406\u8fd9 3 \u6279\u6570\u636e\u9700\u8981\u51c6\u5907\u72ec\u7acb\u5730\u5740\u7684 input_tensor \u6570\u91cf\u4e3a ",(0,d.jsx)(e.code,{children:"input_count * data_batch = 9"}),"\u3002"]}),(0,d.jsx)(e.p,{children:"\u53e6\u5047\u8bbe\u6a21\u578b\u8f93\u5165/\u8f93\u51fa\u7684\u9759\u6001\u4fe1\u606f\u5982\u4e0b\uff1a"}),(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u6a21\u578b\u8f93\u5165\uff08model_info\uff09\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"tensor_0_resizer: [2, 3, 128, 128]"}),"\n",(0,d.jsx)(e.li,{children:"tensor_1_resizer: [2, 3, 256, 256]"}),"\n",(0,d.jsx)(e.li,{children:"tensor_2_ddr: [2, 80, 1, 100]"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u6a21\u578b\u8f93\u51fa\uff08model_info\uff09\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"tensor_out\uff1a[2, 100, 1, 56]"}),"\n"]}),"\n"]}),"\n"]}),(0,d.jsx)(e.p,{children:"\u90a3\u4e48\u6a21\u578b\u5728\u63a8\u7406\u65f6\u7684\u52a8\u6001\u4fe1\u606f\u5219\u4e3a\uff1a"}),(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u6a21\u578b\u8f93\u5165\uff08input_tensors\uff09\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"[1x3x128x128, 1x3x256x256, 1x80x1x100, 1x3x128x128, 1x3x256x256, 1x80x1x100, 1x3x128x128, 1x3x256x256, 1x80x1x100]"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u6a21\u578b\u8f93\u51fa\uff08output_tensors\uff09\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"[4x100x1x56]"}),"\n"]}),"\n"]}),"\n"]}),(0,d.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c\u56e0\u4e3a ",(0,d.jsx)(e.code,{children:"model_batch = 2"}),"\uff0c\u6240\u4ee5\u5e95\u5c42 BPU \u5355\u6b21\u6267\u884c\u53ef\u5904\u7406 2 \u6279\u6570\u636e\uff1b\u53c8\u56e0\u4e3a ",(0,d.jsx)(e.code,{children:"data_batch = 3"}),"\uff0c\u6240\u4ee5 output_tensor \u6700\u9ad8\u7ef4\u7684\u8ba1\u7b97\u516c\u5f0f\u4e3a ",(0,d.jsx)(e.code,{children:"ceil[(data_batch) / model_batch] * model_batch"}),"\uff0c\u53ef\u89c1\u5176\u4e00\u5b9a\u4e3a ",(0,d.jsx)(e.code,{children:"model_batch"})," \u7684\u6574\u6570\u500d\uff0c\u8fd9\u4e5f\u662f BPU \u786c\u4ef6\u6307\u4ee4\u8981\u6c42\uff0c\u7f3a\u5c11\u7684\u8f93\u5165\u4f1a\u81ea\u52a8\u5ffd\u7565\u8ba1\u7b97\u3002"]}),(0,d.jsx)(e.p,{children:"\u63a5\u53e3\u9650\u5236\u8bf4\u660e\uff1a"}),(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u5173\u4e8e ",(0,d.jsx)(e.code,{children:"batch"})," \u6570\u91cf\u9650\u5236\uff1a\u5176\u8303\u56f4\u5e94\u8be5\u5728[1, 255]\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u4f7f\u7528\u8be5\u63a5\u53e3\u63d0\u4ea4\u4efb\u52a1\u65f6\u5e94\u63d0\u524d\u5c06 ",(0,d.jsx)(e.code,{children:"taskHandle"})," \u7f6e\u4e3a ",(0,d.jsx)(e.code,{children:"nullptr"}),"\uff0c\u9664\u975e\u662f\u7ed9\u6307\u5b9a ",(0,d.jsx)(e.code,{children:"taskHandle"})," \u8ffd\u52a0\u4efb\u52a1\uff08\u5373\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"inferCtrlParam::more"})," \u529f\u80fd\uff09\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"roi"})," \u5927\u5c0f\u8981\u6c42\u662f :math:",(0,d.jsx)(e.code,{children:"2 <= width <= 4096"}),", :math:",(0,d.jsx)(e.code,{children:"2 <= height <= 4096"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u539f\u56fe\u5c3a\u5bf8\u8981\u6c42\u662f :math:",(0,d.jsx)(e.code,{children:"1 <= W <= 4096"}),", :math:",(0,d.jsx)(e.code,{children:"16 <= stride <= 131072"}),"\uff0c ",(0,d.jsx)(e.code,{children:"stride"})," \u5fc5\u987b\u662f16\u7684\u500d\u6570\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u8f93\u51fa\u5c3a\u5bf8\u8981\u6c42\u662f :math:",(0,d.jsx)(e.code,{children:"2 <= Wout"}),", :math:",(0,d.jsx)(e.code,{children:"2 <= Hout"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["roi\u7f29\u653e\u500d\u6570\u9650\u5236 :math:",(0,d.jsx)(e.code,{children:"0 <= step <= 262143"}),"\uff0cstep\u8ba1\u7b97\u516c\u5f0f :math:",(0,d.jsx)(e.code,{children:"step = ((src\\_len - 1)*65536 + (dst\\_len - 1)/2)/(dst\\_len - 1)"}),"\uff0c\u5176\u4e2dsrc_len\u4e3aroi\u7684W\u6216H\uff0cdst_len\u4e3a\u6a21\u578b\u8981\u6c42\u7684W\u6216H\u3002"]}),"\n",(0,d.jsx)(e.li,{children:"\u6700\u591a\u652f\u6301\u540c\u65f6\u5b58\u572832\u4e2a\u6a21\u578b\u4efb\u52a1\u3002"}),"\n"]})]}),"\n",(0,d.jsx)(e.h2,{id:"hbdnnwaittaskdone",children:"hbDNNWaitTaskDone()"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"int32_t hbDNNWaitTaskDone(hbDNNTaskHandle_t taskHandle, int32_t timeout)"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsx)(e.p,{children:"\u7b49\u5f85\u4efb\u52a1\u5b8c\u6210\u6216\u8d85\u65f6\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["[in]  ",(0,d.jsx)(e.code,{children:"taskHandle"}),"         \u4efb\u52a1\u53e5\u67c4\u6307\u9488\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["[in]  ",(0,d.jsx)(e.code,{children:"timeout"}),"            \u8d85\u65f6\u914d\u7f6e\uff08\u5355\u4f4d\uff1a\u6beb\u79d2\uff09\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u8fd4\u56de ",(0,d.jsx)(e.code,{children:"0"})," \u5219\u8868\u793aAPI\u6210\u529f\u6267\u884c\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.admonition,{title:"\u5907\u6ce8",type:"info",children:(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"timeout > 0"})," \u8868\u793a\u7b49\u5f85\u65f6\u95f4\uff1b"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"timeout <= 0"})," \u8868\u793a\u4e00\u76f4\u7b49\u5f85\uff0c\u76f4\u5230\u4efb\u52a1\u5b8c\u6210\u3002"]}),"\n"]})}),"\n",(0,d.jsx)(e.h2,{id:"hbdnnreleasetask",children:"hbDNNReleaseTask()"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"int32_t hbDNNReleaseTask(hbDNNTaskHandle_t taskHandle)"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsx)(e.p,{children:"\u91ca\u653e\u4efb\u52a1\uff0c\u5982\u679c\u4efb\u52a1\u672a\u6267\u884c\u5219\u4f1a\u76f4\u63a5\u53d6\u6d88\u5e76\u91ca\u653e\u4efb\u52a1\uff0c\u5982\u679c\u5df2\u7ecf\u6267\u884c\u5219\u4f1a\u5728\u8fd0\u884c\u5230\u67d0\u4e9b\u8282\u70b9\u540e\u53d6\u6d88\u5e76\u91ca\u653e\u4efb\u52a1\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["[in]  ",(0,d.jsx)(e.code,{children:"taskHandle"}),"         \u4efb\u52a1\u53e5\u67c4\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u8fd4\u56de ",(0,d.jsx)(e.code,{children:"0"})," \u5219\u8868\u793aAPI\u6210\u529f\u6267\u884c\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},76024:(n,e,i)=>{i.d(e,{A:()=>d});const d=i.p+"assets/images/resizer-940b38d4287ce03b7100e53745da8855.png"},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var d=i(96540);const s={},r=d.createContext(s);function c(n){const e=d.useContext(r);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),d.createElement(r.Provider,{value:e},n.children)}}}]);