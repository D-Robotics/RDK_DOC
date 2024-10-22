"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5537],{47637:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>_});var s=i(74848),d=i(28453);const r={sidebar_position:5},t="BPU\uff08\u7b97\u6cd5\u63a8\u7406\u6a21\u5757\uff09API",l={id:"Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/bpu_api",title:"BPU\uff08\u7b97\u6cd5\u63a8\u7406\u6a21\u5757\uff09API",description:"BPU API\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u7684\u63a5\u53e3\uff1a",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3/bpu_api.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3",slug:"/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/bpu_api",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/bpu_api",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3/bpu_api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"DISPLAY\uff08\u663e\u793a\u6a21\u5757\uff09API",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/display_api"},next:{title:"SYS\uff08\u6a21\u5757\u7ed1\u5b9a\uff09API",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/sys_api"}},c={},_=[{value:"sp_init_bpu_module",id:"sp_init_bpu_module",level:2},{value:"sp_bpu_start_predict",id:"sp_bpu_start_predict",level:2},{value:"sp_init_bpu_tensors",id:"sp_init_bpu_tensors",level:2},{value:"sp_deinit_bpu_tensor",id:"sp_deinit_bpu_tensor",level:2},{value:"sp_release_bpu_module",id:"sp_release_bpu_module",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bpu\u7b97\u6cd5\u63a8\u7406\u6a21\u5757api",children:"BPU\uff08\u7b97\u6cd5\u63a8\u7406\u6a21\u5757\uff09API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BPU"})," API\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u7684\u63a5\u53e3\uff1a"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u51fd\u6570"}),(0,s.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_init_bpu_module"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\u521d\u59cb\u5316\u7b97\u6cd5\u63a8\u7406\u6a21\u5757\u5bf9\u8c61\uff0c\u521b\u5efa\u7b97\u6cd5\u63a8\u7406\u4efb\u52a1"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_bpu_start_predict"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\u8fdb\u884cAI\u7b97\u6cd5\u63a8\u7406\uff0c\u83b7\u5f97\u63a8\u7406\u7ed3\u679c"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_release_bpu_module"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\u5173\u95ed\u7b97\u6cd5\u63a8\u7406\u4efb\u52a1"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_init_bpu_tensors"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\u5206\u914dtensor\u5185\u5b58"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_deinit_bpu_tensor"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\u9500\u6bc1tensor\u5185\u5b58"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"sp_init_bpu_module",children:"sp_init_bpu_module"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"bpu_module *sp_init_bpu_module(const char *model_file_name)"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u5f00",(0,s.jsx)(n.code,{children:"model_file_name"}),"\u7b97\u6cd5\u6a21\u578b\uff0c\u521d\u59cb\u5316\u4e00\u4e2a\u7b97\u6cd5\u63a8\u7406\u4efb\u52a1\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model_file_name"}),"\uff1a \u7b97\u6cd5\u6a21\u578b\u6587\u4ef6\uff0c\u9700\u8981\u662f\u7ecf\u8fc7D-Robotics AI\u7b97\u6cd5\u5de5\u5177\u94fe\u8f6c\u6362\u7684\u6216\u8005\u8bad\u7ec3\u5f97\u5230\u7684\u5b9a\u70b9\u6a21\u578b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:"AI\u7b97\u6cd5\u63a8\u7406\u4efb\u52a1\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"sp_bpu_start_predict",children:"sp_bpu_start_predict"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"int32_t sp_bpu_start_predict(bpu_module *bpu_handle, char *addr)"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f20\u5165\u56fe\u50cf\u6570\u636e\u5b8c\u6210AI\u7b97\u6cd5\u63a8\u7406\uff0c\u8fd4\u56de\u7b97\u6cd5\u7ed3\u679c\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bpu_handle"}),"\uff1a \u7b97\u6cd5\u63a8\u7406\u4efb\u52a1\u5bf9\u8c61"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"addr"}),"\uff1a\u56fe\u50cf\u6570\u636e\u8f93\u5165"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"sp_init_bpu_tensors",children:"sp_init_bpu_tensors"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:" int32_t sp_init_bpu_tensors(bpu_module *bpu_handle, hbDNNTensor *output_tensors)"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsxs)(n.p,{children:["\u521d\u59cb\u5316\u5e76\u5206\u914d\u5185\u5b58\u7ed9\u4f20\u5165\u7684",(0,s.jsx)(n.code,{children:"tensor"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bpu_handle"}),"\uff1a \u7b97\u6cd5\u63a8\u7406\u4efb\u52a1\u5bf9\u8c61"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output_tensors"}),"\uff1a",(0,s.jsx)(n.code,{children:"tensor"}),"\u5730\u5740"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"sp_deinit_bpu_tensor",children:"sp_deinit_bpu_tensor"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:" int32_t sp_deinit_bpu_tensor(hbDNNTensor *tensor, int32_t len)"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u4f20\u5165\u7684",(0,s.jsx)(n.code,{children:"tensor"}),"\u91ca\u653e\u5e76\u56de\u6536\u5185\u5b58\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tensor"}),"\uff1a \u5e26\u51fa\u6765",(0,s.jsx)(n.code,{children:"tensor"}),"\u6307\u9488"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output_tensors"}),"\uff1a",(0,s.jsx)(n.code,{children:"tensor"}),"\u5730\u5740"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"sp_release_bpu_module",children:"sp_release_bpu_module"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"int32_t sp_release_bpu_module(bpu_module *bpu_handle)"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsx)(n.p,{children:"\u5173\u95ed\u7b97\u6cd5\u63a8\u7406\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bpu_handle"}),"\uff1a \u7b97\u6cd5\u63a8\u7406\u4efb\u52a1\u5bf9\u8c61"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(n.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(96540);const d={},r=s.createContext(d);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);