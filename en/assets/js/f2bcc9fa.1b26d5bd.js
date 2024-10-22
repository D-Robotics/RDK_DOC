"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4573],{82742:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var s=r(74848),c=r(28453);const i={sidebar_position:1},d="Camera\u5bf9\u8c61",l={id:"Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_camera",title:"Camera\u5bf9\u8c61",description:"Camera\u5bf9\u8c61\u7528\u4e8e\u5b8c\u6210MIPI Camera\u7684\u56fe\u50cf\u91c7\u96c6\u548c\u5904\u7406\u529f\u80fd\uff0c\u5305\u542b\u4e86opencam\u3001openvps\u3001getimg\u3001setimg\u3001close_cam\u7b49\u51e0\u79cd\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3/object_camera.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3",slug:"/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_camera",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_camera",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3/object_camera.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3.4.3 RDK X3/X5\u591a\u5a92\u4f53\u63a5\u53e3\u8bf4\u660e",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/"},next:{title:"Encoder\u5bf9\u8c61",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_encoder"}},t={},h=[{value:"open_cam",id:"open_cam",level:2},{value:"open_vps",id:"open_vps",level:2},{value:"get_img",id:"get_img",level:2},{value:"set_img",id:"set_img",level:2},{value:"close_cam",id:"close_cam",level:2}];function o(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"camera\u5bf9\u8c61",children:"Camera\u5bf9\u8c61"}),"\n",(0,s.jsxs)(n.p,{children:["Camera\u5bf9\u8c61\u7528\u4e8e\u5b8c\u6210MIPI Camera\u7684\u56fe\u50cf\u91c7\u96c6\u548c\u5904\u7406\u529f\u80fd\uff0c\u5305\u542b\u4e86",(0,s.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,s.jsx)(n.code,{children:"open_vps"}),"\u3001",(0,s.jsx)(n.code,{children:"get_img"}),"\u3001",(0,s.jsx)(n.code,{children:"set_img"}),"\u3001",(0,s.jsx)(n.code,{children:"close_cam"}),"\u7b49\u51e0\u79cd\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.h2,{id:"open_cam",children:"open_cam"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u6253\u5f00\u6307\u5b9a\u901a\u9053\u7684MIPI\u6444\u50cf\u5934\uff0c\u5e76\u8bbe\u7f6e\u6444\u50cf\u5934\u8f93\u51fa\u5e27\u7387\u3001\u5206\u8fa8\u7387\u683c\u5f0f\u3002"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Camera.open_cam(pipe_id, video_index, fps, width, height, raw_height, raw_width)\n"})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,s.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pipe_id"}),(0,s.jsx)(n.td,{children:"camera\u5bf9\u5e94\u7684pipeline\u901a\u9053\u53f7"}),(0,s.jsx)(n.td,{children:"\u9ed8\u8ba4\u4ece0\u5f00\u59cb\uff0c\u8303\u56f40~7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"video_index"}),(0,s.jsx)(n.td,{children:"camera\u5bf9\u5e94\u7684host\u7f16\u53f7\uff0c-1\u8868\u793a\u81ea\u52a8\u63a2\u6d4b\uff0c\u7f16\u53f7\u53ef\u4ee5\u67e5\u770b /etc/board_config.json \u914d\u7f6e\u6587\u4ef6"}),(0,s.jsx)(n.td,{children:"\u53d6\u503c -1, 0 , 1, 2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fps"}),(0,s.jsx)(n.td,{children:"camera\u56fe\u50cf\u8f93\u51fa\u5e27\u7387"}),(0,s.jsx)(n.td,{children:"\u4f9d\u636ecamera\u578b\u53f7\u800c\u5b9a\uff0c\u9ed8\u8ba4\u503c30"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"width"}),(0,s.jsx)(n.td,{children:"camera\u6700\u7ec8\u56fe\u50cf\u8f93\u51fa\u5bbd\u5ea6"}),(0,s.jsx)(n.td,{children:"\u89c6camera\u578b\u53f7\u800c\u5b9a\uff0c\u9ed8\u8ba4\u503c1920\uff08GC4663\u4e3a2560\uff09"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"height"}),(0,s.jsx)(n.td,{children:"camera\u6700\u7ec8\u56fe\u50cf\u8f93\u51fa\u9ad8\u5ea6"}),(0,s.jsx)(n.td,{children:"\u89c6camera\u578b\u53f7\u800c\u5b9a\uff0c\u9ed8\u8ba4\u503c1080\uff08GC4663\u4e3a1440\uff09"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"raw_height"}),(0,s.jsx)(n.td,{children:"camera\u539f\u59cbRAW\u56fe\u50cf\u8f93\u51fa\u5bbd\u5ea6"}),(0,s.jsx)(n.td,{children:"\u89c6camera\u578b\u53f7\u800c\u5b9a\uff0c\u9ed8\u8ba4\u503c1920\uff08GC4663\u4e3a2560\uff09"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"raw_width"}),(0,s.jsx)(n.td,{children:"camera\u539f\u59cbRAW\u56fe\u50cf\u8f93\u51fa\u9ad8\u5ea6"}),(0,s.jsx)(n.td,{children:"\u89c6camera\u578b\u53f7\u800c\u5b9a\uff0c\u9ed8\u8ba4\u503c1080\uff08GC4663\u4e3a1440\uff09"})]})]})]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"#create camera object\ncamera = libsrcampy.Camera()\n\n#open MIPI Camera, fps: 30, solution: 1080p\nret = camera.open_cam(0, -1, 30, 1920, 1080)\n"})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"width"}),"\uff0c",(0,s.jsx)(n.code,{children:"height"}),"\u53c2\u6570\u652f\u6301",(0,s.jsx)(n.code,{children:"list"}),"\u7c7b\u578b\u8f93\u5165\uff0c\u8868\u793a\u4f7f\u80fdcamera\u591a\u7ec4\u4e0d\u540c\u5206\u8fa8\u7387\u8f93\u51fa\u3002",(0,s.jsx)(n.code,{children:"list"}),"\u6700\u591a\u652f\u63014\u7ec4\u7f29\u5c0f\uff0c1\u7ec4\u653e\u5927\uff0c\u7f29\u653e\u533a\u95f4\u4e3acamera\u539f\u59cb\u5206\u8fa8\u7387\u7684",(0,s.jsx)(n.code,{children:"1/8~1.5"}),"\u500d\u4e4b\u95f4\u3002\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"ret = cam.open_cam(0, -1, 30, [1920, 1280], [1080, 720])\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"raw_height"}),"\uff0c",(0,s.jsx)(n.code,{children:"raw_width"})," \u53ea\u6709\u5728\u9700\u8981\u6444\u50cf\u5934\u4e0d\u662f\u9ed8\u8ba4\u5206\u8fa8\u7387\u7684\u60c5\u51b5\u4e0b\u624d\u8bbe\u7f6e\uff0c\u6bd4\u5982\u5728\u4f7f\u7528",(0,s.jsx)(n.code,{children:"IMX477"}),"\u6444\u50cf\u5934\u65f6\uff0c\u82e5\u60f3\u540c\u65f6\u8f93\u51fa4k\u5206\u8fa8\u7387\uff083840x2160\uff09\u548c1080P\u5206\u8fa8\u7387\uff081920x1080\uff09\uff0c\u5219\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"cam.open_cam(0, -1, 10, [3840, 1920], [2160, 1080], 3000, 4000)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u652f\u6301\u7684\u6444\u50cf\u5934\u5206\u8fa8\u7387\u89c1\u4e0b\u8868\uff1a"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"camera"}),(0,s.jsx)(n.th,{children:"\u5206\u8fa8\u7387"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IMX219"}),(0,s.jsx)(n.td,{children:"1920x1080@30fps(default), 640x480@30fps, 1632x1232@30fps, 3264x2464@15fps(max)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IMX477"}),(0,s.jsx)(n.td,{children:"1920x1080@50fps(default), 1280x960@120fps, 2016x1520@40fps, 4000x3000@10fps(max)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OV5647"}),(0,s.jsx)(n.td,{children:"1920x1080@30fps(default), 640x480@60fps, 1280x960@30fps, 2592x1944@15fps(max)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"F37"}),(0,s.jsx)(n.td,{children:"1920x1080@30fps(default)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GC4663"}),(0,s.jsx)(n.td,{children:"2560x1440@30fps(default)"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f\uff01",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"IMX477"}),"\u4ece",(0,s.jsx)(n.code,{children:"1080P"}),"\u7684\u5206\u8fa8\u7387\u5207\u6362\u81f3\u5176\u5b83\u5206\u8fa8\u7387\u9700\u8981\u8fdb\u884c\u624b\u52a8\u590d\u4f4d\uff0c\u53ef\u4ee5\u5728\u677f\u7aef\u6267\u884c",(0,s.jsx)(n.code,{children:"hobot_reset_camera.py"}),"\u5b8c\u6210\u590d\u4f4d\u64cd\u4f5c\u3002"]})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f\uff01",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X3"}),"\u82af\u7247\u5bf9\u4e8e",(0,s.jsx)(n.code,{children:"VPS"}),"\u8f93\u51fa\u7684\u5bbd\u5ea6\u662f\u6709\u5bf9\u9f50\u9700\u6c42\u7684\uff0c\u5982\u679c\u60a8\u8bbe\u7f6e\u7684\u5bbd\u5ea6\u4e0d\u6ee1\u8db3",(0,s.jsx)(n.strong,{children:"32"}),"\u5bf9\u9f50\uff0c\u5219\u4f1a\u81ea\u52a8\u5411\u4e0a\u53d6\u6574\u3002\u4f8b\u5982\u60a8\u8bbe\u7f6e\u4e86",(0,s.jsx)(n.br,{}),"\n","\u5bbd\u5ea6\u4e3a",(0,s.jsx)(n.code,{children:"720"}),"\uff0c\u9ad8\u5ea6\u4e3a",(0,s.jsx)(n.code,{children:"480"}),"\u7684\u8f93\u51fa\uff0c\u5b9e\u9645",(0,s.jsx)(n.code,{children:"VPS"}),"\u8f93\u51fa\u7684\u5bbd\u5ea6\u4f1a\u662f",(0,s.jsx)(n.code,{children:"736"}),"\u3002",(0,s.jsx)(n.strong,{children:"\u7ed1\u5b9a\u60c5\u51b5"}),"\u4e0b\u8fd9\u79cd\u60c5\u51b5\u4f1a\u5728\u8c03\u7528\u5e93\u91cc\u9762",(0,s.jsx)(n.strong,{children:"\u81ea\u52a8"}),"\u5904\u7406",(0,s.jsx)(n.br,{}),"\n","\u5bf9\u4e8e",(0,s.jsx)(n.strong,{children:"\u975e\u7ed1\u5b9a\u60c5\u51b5"}),"\u4e0b\u624b\u52a8\u5904\u7406\u5e27buffer\u65f6\u5c31\u8981\u6ce8\u610f\u5bbd\u5ea6\u5bf9\u9f50\u95ee\u9898\uff0c\u4ee5\u53ca\u5728\u8fd9\u79cd\u975e\u5bf9\u9f50\u60c5\u51b5\u4e0b\u5c06\u5e27\u4f20\u7ed9\u663e\u793a\u6a21\u5757\u65f6\u4f1a\u51fa\u73b0",(0,s.jsx)(n.strong,{children:"\u82b1\u5c4f\u3001\u7eff\u7ebf"}),"\u7684\u60c5\u51b5\u3002"]})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.h2,{id:"open_vps",children:"open_vps"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u80fd\u6307\u5b9acamera\u901a\u9053\u7684vps(video process)\u56fe\u50cf\u5904\u7406\u529f\u80fd\uff0c\u652f\u6301\u5bf9\u8f93\u5165\u56fe\u50cf\u5b8c\u6210\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u88c1\u526a\u7b49\u529f\u80fd\u3002"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Camera.open_vps(pipe_id, proc_mode, src_width, src_height, dst_width, dst_height, crop_rect, rotate, src_size, dst_size)\n"})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,s.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pipe_id"}),(0,s.jsx)(n.td,{children:"camera\u5bf9\u5e94\u7684pipeline\u901a\u9053\u53f7"}),(0,s.jsx)(n.td,{children:"\u9ed8\u8ba4\u4ece0\u5f00\u59cb\uff0c\u8303\u56f40~7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proc_mode"}),(0,s.jsx)(n.td,{children:"\u56fe\u50cf\u5904\u7406\u6a21\u5f0f\u914d\u7f6e\uff0c\u652f\u6301\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u88c1\u526a"}),(0,s.jsxs)(n.td,{children:["\u8303\u56f41~4\uff0c\u5206\u522b\u8868\u793a",(0,s.jsx)(n.code,{children:"\u7f29\u653e"}),"\u3001",(0,s.jsx)(n.code,{children:"\u7f29\u653e+\u88c1\u526a"}),"\u3001",(0,s.jsx)(n.code,{children:"\u7f29\u653e+\u65cb\u8f6c"}),"\u3001",(0,s.jsx)(n.code,{children:"\u7f29\u653e+\u88c1\u526a+\u65cb\u8f6c"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src_width"}),(0,s.jsx)(n.td,{children:"\u56fe\u50cf\u8f93\u5165\u5bbd\u5ea6"}),(0,s.jsx)(n.td,{children:"\u89c6camera\u8f93\u51fa\u5bbd\u5ea6\u800c\u5b9a"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src_height"}),(0,s.jsx)(n.td,{children:"\u56fe\u50cf\u8f93\u5165\u9ad8\u5ea6"}),(0,s.jsx)(n.td,{children:"\u89c6camera\u8f93\u51fa\u9ad8\u5ea6\u800c\u5b9a"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dst_width"}),(0,s.jsx)(n.td,{children:"\u56fe\u50cf\u8f93\u51fa\u5bbd\u5ea6"}),(0,s.jsxs)(n.td,{children:["\u8f93\u5165\u5bbd\u5ea6\u7684",(0,s.jsx)(n.code,{children:"1/8~1.5"}),"\u500d"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dst_height"}),(0,s.jsx)(n.td,{children:"\u56fe\u50cf\u8f93\u51fa\u9ad8\u5ea6"}),(0,s.jsxs)(n.td,{children:["\u8f93\u5165\u9ad8\u5ea6\u7684",(0,s.jsx)(n.code,{children:"1/8~1.5"}),"\u500d"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"crop_rect"}),(0,s.jsx)(n.td,{children:"\u88c1\u526a\u533a\u57df\u7684\u5bbd\u9ad8\uff0c\u8f93\u5165\u683c\u5f0f[x, y]"}),(0,s.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc7\u8f93\u5165\u56fe\u50cf\u5c3a\u5bf8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rotate"}),(0,s.jsx)(n.td,{children:"\u65cb\u8f6c\u89d2\u5ea6\uff0c\u6700\u591a\u652f\u6301\u4e24\u4e2a\u901a\u9053\u65cb\u8f6c"}),(0,s.jsxs)(n.td,{children:["\u8303\u56f40~3\uff0c\u5206\u522b\u8868\u793a",(0,s.jsx)(n.code,{children:"\u4e0d\u65cb\u8f6c"}),"\u3001",(0,s.jsx)(n.code,{children:"90\u5ea6"})," ",(0,s.jsx)(n.code,{children:"180\u5ea6"}),"\u3001",(0,s.jsx)(n.code,{children:"270\u5ea6"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"src_size"}),(0,s.jsx)(n.td,{children:"\u4fdd\u7559\u53c2\u6570"}),(0,s.jsx)(n.td,{children:"\u9ed8\u8ba4\u4e0d\u9700\u8981\u914d\u7f6e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dst_size"}),(0,s.jsx)(n.td,{children:"\u4fdd\u7559\u53c2\u6570"}),(0,s.jsx)(n.td,{children:"\u9ed8\u8ba4\u4e0d\u9700\u8981\u914d\u7f6e"})]})]})]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"#create camera object\ncamera = libsrcampy.Camera()\n\n#enable vps function\nret = camera.open_vps(1, 1, 1920, 1080, 512, 512)\n"})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f\uff01",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["vps\u5904\u7406\u529f\u80fd\u6700\u591a\u652f\u63016\u4e2a\u901a\u9053\u8f93\u51fa\uff0c5\u8def\u7f29\u5c0f\uff0c1\u8def\u653e\u5927\uff0c\u7f29\u653e\u533a\u95f4\u4e3a\u539f\u59cb\u5206\u8fa8\u7387\u7684",(0,s.jsx)(n.code,{children:"1/8~1.5"}),"\u500d\u4e4b\u95f4\uff0c\u591a\u901a\u9053\u914d\u7f6e\u901a\u8fc7\u8f93\u5165\u53c2\u6570",(0,s.jsx)(n.code,{children:"list"}),"\u4f20\u9012\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u56fe\u50cf\u88c1\u526a\u529f\u80fd\u4ee5\u56fe\u50cf\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9\uff0c\u6309\u7167\u914d\u7f6e\u5c3a\u5bf8\u8fdb\u884c\u88c1\u526a"}),"\n",(0,s.jsxs)(n.li,{children:["\u56fe\u50cf\u88c1\u526a\u4f1a\u5728\u7f29\u653e\u3001\u65cb\u8f6c\u64cd\u4f5c\u4e4b\u524d\u8fdb\u884c\uff0c\u591a\u901a\u9053\u914d\u7f6e\u901a\u8fc7\u8f93\u5165\u53c2\u6570",(0,s.jsx)(n.code,{children:"list"}),"\u4f20\u9012\u3002"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f\uff01",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X3"}),"\u82af\u7247\u5bf9\u4e8e",(0,s.jsx)(n.code,{children:"VPS"}),"\u8f93\u51fa\u7684\u5bbd\u5ea6\u662f\u6709\u5bf9\u9f50\u9700\u6c42\u7684\uff0c\u5982\u679c\u60a8\u8bbe\u7f6e\u7684\u5bbd\u5ea6\u4e0d\u6ee1\u8db3",(0,s.jsx)(n.strong,{children:"32"}),"\u5bf9\u9f50\uff0c\u5219\u4f1a\u81ea\u52a8\u5411\u4e0a\u53d6\u6574\u3002\u4f8b\u5982\u60a8\u8bbe\u7f6e\u4e86",(0,s.jsx)(n.br,{}),"\n","\u5bbd\u5ea6\u4e3a",(0,s.jsx)(n.code,{children:"720"}),"\uff0c\u9ad8\u5ea6\u4e3a",(0,s.jsx)(n.code,{children:"480"}),"\u7684\u8f93\u51fa\uff0c\u5b9e\u9645",(0,s.jsx)(n.code,{children:"VPS"}),"\u8f93\u51fa\u7684\u5bbd\u5ea6\u4f1a\u662f",(0,s.jsx)(n.code,{children:"736"}),"\u3002",(0,s.jsx)(n.strong,{children:"\u7ed1\u5b9a\u60c5\u51b5"}),"\u4e0b\u8fd9\u79cd\u60c5\u51b5\u4f1a\u5728\u8c03\u7528\u5e93\u91cc\u9762",(0,s.jsx)(n.strong,{children:"\u81ea\u52a8"}),"\u5904\u7406",(0,s.jsx)(n.br,{}),"\n","\u5bf9\u4e8e",(0,s.jsx)(n.strong,{children:"\u975e\u7ed1\u5b9a\u60c5\u51b5"}),"\u4e0b\u624b\u52a8\u5904\u7406\u5e27buffer\u65f6\u5c31\u8981\u6ce8\u610f\u5bbd\u5ea6\u5bf9\u9f50\u95ee\u9898\uff0c\u4ee5\u53ca\u5728\u8fd9\u79cd\u975e\u5bf9\u9f50\u60c5\u51b5\u4e0b\u5c06\u5e27\u4f20\u7ed9\u663e\u793a\u6a21\u5757\u65f6\u4f1a\u51fa\u73b0",(0,s.jsx)(n.strong,{children:"\u82b1\u5c4f\u3001\u7eff\u7ebf"}),"\u7684\u60c5\u51b5\u3002"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"#creat camera object\ncamera = libsrcampy.Camera()\n\n#enable vps function\n#input: 4k, output0: 1080p, output1: 720p\n#ouput0 croped by [2560, 1440]\nret = camera.open_vps(0, 1, 3840, 2160, [1920, 1280], [1080, 720], [2560, 1440])\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),(0,s.jsx)(n.br,{}),"\n","\u65e0"]}),"\n",(0,s.jsx)(n.h2,{id:"get_img",children:"get_img"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,s.jsxs)(n.p,{children:["\u83b7\u53d6camera\u5bf9\u8c61\u7684\u56fe\u50cf\u8f93\u51fa\uff0c\u9700\u8981\u5728",(0,s.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,s.jsx)(n.code,{children:"open_vps"}),"\u4e4b\u540e\u8c03\u7528"]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Camera.get_img(module, width, height)\n"})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,s.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"module"}),(0,s.jsx)(n.td,{children:"\u9700\u8981\u83b7\u53d6\u56fe\u50cf\u7684\u6a21\u5757"}),(0,s.jsx)(n.td,{children:"\u9ed8\u8ba4\u4e3a2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"width"}),(0,s.jsx)(n.td,{children:"\u9700\u8981\u83b7\u53d6\u56fe\u50cf\u7684\u5bbd\u5ea6"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,s.jsx)(n.code,{children:"open_vps"}),"\u8bbe\u7f6e\u7684\u8f93\u51fa\u5bbd\u5ea6"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"height"}),(0,s.jsx)(n.td,{children:"\u9700\u8981\u83b7\u53d6\u56fe\u50cf\u7684\u9ad8\u5ea6"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,s.jsx)(n.code,{children:"open_vps"}),"\u8bbe\u7f6e\u7684\u8f93\u51fa\u9ad8\u5ea6"]})]})]})]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"cam = libsrcampy.Camera()\n\n#open MIPI Camera, fps: 30, solution: 1080p\nret = cam.open_cam(0, 1, 30, 1920, 1080)\n\n#wait for 1s\ntime.sleep(1)\n\n#get one image from camera\nimg = cam.get_img(2)\n"})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u9700\u8981\u5728",(0,s.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,s.jsx)(n.code,{children:"open_vps"}),"\u4e4b\u540e\u8c03\u7528"]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import sys, os, time\n\nfrom hobot_vio import libsrcampy\n\ndef test_camera():\n    cam = libsrcampy.Camera()\n\n    #open MIPI camera, fps: 30, solution: 1080p\n    ret = cam.open_cam(0, 1, 30, 1920, 1080)\n    print("Camera open_cam return:%d" % ret)\n\n    # wait for 1s\n    time.sleep(1)\n\n    #get one image from camera   \n    img = cam.get_img(2)\n    if img is not None:\n        #save file\n        fo = open("output.img", "wb")\n        fo.write(img)\n        fo.close()\n        print("camera save img file success")\n    else:\n        print("camera save img file failed")\n    \n    #close MIPI camera\n    cam.close_cam()\n    print("test_camera done!!!")\n\ntest_camera()\n'})}),"\n",(0,s.jsx)(n.h2,{id:"set_img",children:"set_img"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,s.jsxs)(n.p,{children:["\u5411",(0,s.jsx)(n.code,{children:"vps"}),"\u6a21\u5757\u8f93\u5165\u56fe\u50cf\uff0c\u5e76\u89e6\u53d1\u56fe\u50cf\u5904\u7406\u64cd\u4f5c"]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Camera.set_img(img)\n"})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,s.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"img"}),(0,s.jsx)(n.td,{children:"\u9700\u8981\u5904\u7406\u7684\u56fe\u50cf\u6570\u636e"}),(0,s.jsx)(n.td,{children:"\u8ddfvps\u8f93\u5165\u5c3a\u5bf8\u4fdd\u6301\u4e00\u81f4"})]})})]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'camera = libsrcampy.Camera()\n\n#enable vps function, input: 1080p, output: 512x512\nret = camera.open_vps(1, 1, 1920, 1080, 512, 512)\nprint("Camera vps return:%d" % ret)\n\nfin = open("output.img", "rb")\nimg = fin.read()\nfin.close()\n\n#send image to vps module\nret = vps.set_img(img)\n'})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,s.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728",(0,s.jsx)(n.code,{children:"open_vps"}),"\u4e4b\u540e\u8c03\u7528"]}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import sys, os, time\n\nimport numpy as np\nimport cv2\nfrom hobot_vio import libsrcampy\n\ndef test_camera_vps():\n    vps = libsrcampy.Camera()\n\n    #enable vps function, input: 1080p, output: 512x512\n    ret = vps.open_vps(1, 1, 1920, 1080, 512, 512)\n    print("Camera vps return:%d" % ret)\n\n    fin = open("output.img", "rb")\n    img = fin.read()\n    fin.close()\n\n    #send image data to vps\n    ret = vps.set_img(img)\n    print ("Process set_img return:%d" % ret)\n\n    fo = open("output_vps.img", "wb+")\n\n    #get image data from vps\n    img = vps.get_img()\n    if img is not None:\n        fo.write(img)\n        print("encode write image success")\n    else:\n        print("encode write image failed")\n    fo.close()\n\n    #close vps function\n    vps.close_cam()\n    print("test_camera_vps done!!!")\n\ntest_camera_vps()\n'})}),"\n",(0,s.jsx)(n.h2,{id:"close_cam",children:"close_cam"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u5173\u95ed\u4f7f\u80fd\u7684MIPI camera\u6444\u50cf\u5934"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Camera.close_cam()\n"})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'cam = libsrcampy.Camera()\n\n#open MIPI camera, fps: 30, solution: 1080p\nret = cam.open_cam(0, 1, 30, 1920, 1080)\nprint("Camera open_cam return:%d" % ret)\n\n#close MIPI camera\ncam.close_cam()\n'})}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(96540);const c={},i=s.createContext(c);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);