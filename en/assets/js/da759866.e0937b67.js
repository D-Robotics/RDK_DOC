"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8185],{41453:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var c=r(74848),s=r(28453);const i={sidebar_position:1},d="Camera\u5bf9\u8c61",l={id:"Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_camera",title:"Camera\u5bf9\u8c61",description:"Camera\u5bf9\u8c61\u7528\u4e8e\u5b8c\u6210MIPI Camera\u7684\u56fe\u50cf\u91c7\u96c6\u548c\u5904\u7406\u529f\u80fd\uff0c\u5305\u542b\u4e86opencam\u3001openvps\u3001getframe\u3001sendframe\u3001close\u7b49\u51e0\u79cd\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra/object_camera.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra",slug:"/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_camera",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_camera",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra/object_camera.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"4.6 RDK Ultra \u591a\u5a92\u4f53\u63a5\u53e3\u8bf4\u660e",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/"},next:{title:"Encoder\u5bf9\u8c61",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_encoder"}},t={},a=[{value:"open_cam",id:"open_cam",level:2},{value:"open_vps",id:"open_vps",level:2},{value:"get_frame",id:"get_frame",level:2},{value:"send_frame",id:"send_frame",level:2},{value:"close",id:"close",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"camera\u5bf9\u8c61",children:"Camera\u5bf9\u8c61"}),"\n",(0,c.jsxs)(n.p,{children:["Camera\u5bf9\u8c61\u7528\u4e8e\u5b8c\u6210MIPI Camera\u7684\u56fe\u50cf\u91c7\u96c6\u548c\u5904\u7406\u529f\u80fd\uff0c\u5305\u542b\u4e86",(0,c.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,c.jsx)(n.code,{children:"open_vps"}),"\u3001",(0,c.jsx)(n.code,{children:"get_frame"}),"\u3001",(0,c.jsx)(n.code,{children:"send_frame"}),"\u3001",(0,c.jsx)(n.code,{children:"close"}),"\u7b49\u51e0\u79cd\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.h2,{id:"open_cam",children:"open_cam"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u6253\u5f00\u6307\u5b9a\u901a\u9053\u7684MIPI\u6444\u50cf\u5934\uff0c\u5e76\u8bbe\u7f6e\u6444\u50cf\u5934\u8f93\u51fa\u5e27\u7387\u3001\u5206\u8fa8\u7387\u683c\u5f0f\u3002"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Camera.open_cam(video_index, [width, height])\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,c.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"video_index"}),(0,c.jsx)(n.td,{children:"camera\u5bf9\u5e94\u7684host\u7f16\u53f7\uff0c-1\u8868\u793a\u81ea\u52a8\u63a2\u6d4b\uff0c\u7f16\u53f7\u53ef\u4ee5\u67e5\u770b /etc/board_config.json \u914d\u7f6e\u6587\u4ef6"}),(0,c.jsx)(n.td,{children:"\u53d6\u503c -1, 0 , 1, 2,3"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"fps"}),(0,c.jsx)(n.td,{children:"camera\u56fe\u50cf\u8f93\u51fa\u5e27\u7387"}),(0,c.jsx)(n.td,{children:"\u4f9d\u636ecamera\u578b\u53f7\u800c\u5b9a\uff0c\u9ed8\u8ba4\u503c30"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"width"}),(0,c.jsx)(n.td,{children:"camera\u6700\u7ec8\u56fe\u50cf\u8f93\u51fa\u5bbd\u5ea6"}),(0,c.jsx)(n.td,{children:"\u89c6camera\u578b\u53f7\u800c\u5b9a\uff0c\u9ed8\u8ba4\u503c1920\uff08GC4663\u4e3a2560\uff09"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"height"}),(0,c.jsx)(n.td,{children:"camera\u6700\u7ec8\u56fe\u50cf\u8f93\u51fa\u9ad8\u5ea6"}),(0,c.jsx)(n.td,{children:"\u89c6camera\u578b\u53f7\u800c\u5b9a\uff0c\u9ed8\u8ba4\u503c1080\uff08GC4663\u4e3a1440\uff09"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"#create camera object\ncamera = libsrcampy.Camera()\n\n#open MIPI Camera, fps: 30, solution: 1080p\nret = camera.open_cam(-1,  [1920, 1080])\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u5206\u8fa8\u7387\u8f93\u51fa\u90e8\u5206\u652f\u6301\u4e8c\u7ef4",(0,c.jsx)(n.code,{children:"list"}),"\u7c7b\u578b\u8f93\u5165\uff0c\u8868\u793a\u4f7f\u80fdcamera\u591a\u7ec4\u4e0d\u540c\u5206\u8fa8\u7387\u8f93\u51fa\u3002",(0,c.jsx)(n.code,{children:"list"}),"\u6700\u591a\u652f\u63014\u7ec4\u7f29\u5c0f\uff0c1\u7ec4\u653e\u5927\uff0c\u7f29\u653e\u533a\u95f4\u4e3acamera\u539f\u59cb\u5206\u8fa8\u7387\u7684",(0,c.jsx)(n.code,{children:"1/8~1.5"}),"\u500d\u4e4b\u95f4\u3002\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"ret = cam.open_cam(0, -1, 30, [[1920, 1080], [1280, 720]])\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)(n.h2,{id:"open_vps",children:"open_vps"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u80fd\u6307\u5b9acamera\u901a\u9053\u7684vps(video process)\u56fe\u50cf\u5904\u7406\u529f\u80fd\uff0c\u652f\u6301\u5bf9\u8f93\u5165\u56fe\u50cf\u5b8c\u6210\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u88c1\u526a\u7b49\u529f\u80fd\u3002"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Camera.open_vps([src_width, src_height], [dst_width, dst_height], crop_rect, rotate)\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,c.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"src_width"}),(0,c.jsx)(n.td,{children:"\u56fe\u50cf\u8f93\u5165\u5bbd\u5ea6"}),(0,c.jsx)(n.td,{children:"\u89c6camera\u8f93\u51fa\u5bbd\u5ea6\u800c\u5b9a"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"src_height"}),(0,c.jsx)(n.td,{children:"\u56fe\u50cf\u8f93\u5165\u9ad8\u5ea6"}),(0,c.jsx)(n.td,{children:"\u89c6camera\u8f93\u51fa\u9ad8\u5ea6\u800c\u5b9a"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"dst_width"}),(0,c.jsx)(n.td,{children:"\u56fe\u50cf\u8f93\u51fa\u5bbd\u5ea6"}),(0,c.jsxs)(n.td,{children:["\u8f93\u5165\u5bbd\u5ea6\u7684",(0,c.jsx)(n.code,{children:"1/8~1.5"}),"\u500d"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"dst_height"}),(0,c.jsx)(n.td,{children:"\u56fe\u50cf\u8f93\u51fa\u9ad8\u5ea6"}),(0,c.jsxs)(n.td,{children:["\u8f93\u5165\u9ad8\u5ea6\u7684",(0,c.jsx)(n.code,{children:"1/8~1.5"}),"\u500d"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"crop_rect"}),(0,c.jsx)(n.td,{children:"\u88c1\u526a\u533a\u57df\u7684\u5bbd\u9ad8\uff0c\u8f93\u5165\u683c\u5f0f[x, y]"}),(0,c.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc7\u8f93\u5165\u56fe\u50cf\u5c3a\u5bf8"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"rotate"}),(0,c.jsx)(n.td,{children:"\u65cb\u8f6c\u89d2\u5ea6\uff0c\u6700\u591a\u652f\u6301\u4e24\u4e2a\u901a\u9053\u65cb\u8f6c"}),(0,c.jsxs)(n.td,{children:["\u8303\u56f40~3\uff0c\u5206\u522b\u8868\u793a",(0,c.jsx)(n.code,{children:"\u4e0d\u65cb\u8f6c"}),"\u3001",(0,c.jsx)(n.code,{children:"90\u5ea6"})," ",(0,c.jsx)(n.code,{children:"180\u5ea6"}),"\u3001",(0,c.jsx)(n.code,{children:"270\u5ea6"})]})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"#create camera object\ncamera = libsrcampy.Camera()\n\n#enable vps function\nret = camera.open_vps([1920, 1080],[ 512, 512])\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u56fe\u50cf\u88c1\u526a\u529f\u80fd\u4ee5\u56fe\u50cf\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9\uff0c\u6309\u7167\u914d\u7f6e\u5c3a\u5bf8\u8fdb\u884c\u88c1\u526a"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u56fe\u50cf\u88c1\u526a\u4f1a\u5728\u7f29\u653e\u3001\u65cb\u8f6c\u64cd\u4f5c\u4e4b\u524d\u8fdb\u884c\uff0c\u591a\u901a\u9053\u914d\u7f6e\u901a\u8fc7\u8f93\u5165\u53c2\u6570",(0,c.jsx)(n.code,{children:"list"}),"\u4f20\u9012\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)(n.h2,{id:"get_frame",children:"get_frame"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u83b7\u53d6camera\u5bf9\u8c61\u7684\u56fe\u50cf\u8f93\u51fa\uff0c\u9700\u8981\u5728",(0,c.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,c.jsx)(n.code,{children:"open_vps"}),"\u4e4b\u540e\u8c03\u7528"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Camera.get_frame(module, [width, height])\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,c.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"module"}),(0,c.jsx)(n.td,{children:"\u9700\u8981\u83b7\u53d6\u56fe\u50cf\u7684\u6a21\u5757"}),(0,c.jsx)(n.td,{children:"\u9ed8\u8ba4\u4e3a2"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"width"}),(0,c.jsx)(n.td,{children:"\u9700\u8981\u83b7\u53d6\u56fe\u50cf\u7684\u5bbd\u5ea6"}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,c.jsx)(n.code,{children:"open_vps"}),"\u8bbe\u7f6e\u7684\u8f93\u51fa\u5bbd\u5ea6"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"height"}),(0,c.jsx)(n.td,{children:"\u9700\u8981\u83b7\u53d6\u56fe\u50cf\u7684\u9ad8\u5ea6"}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,c.jsx)(n.code,{children:"open_vps"}),"\u8bbe\u7f6e\u7684\u8f93\u51fa\u9ad8\u5ea6"]})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"cam = libsrcampy.Camera()\n\n#create camera object\ncamera = libsrcampy.Camera()\n\n#enable vps function\nret = camera.open_vps([1920, 1080],[ 512, 512])\n\n#get one image from camera\nimg = cam.get_frame(2,[512,512])\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u9700\u8981\u5728",(0,c.jsx)(n.code,{children:"open_cam"}),"\u3001",(0,c.jsx)(n.code,{children:"open_vps"}),"\u4e4b\u540e\u8c03\u7528"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'import sys, os, time\n\nfrom hobot_spdev import libsppydev as srcampy\n\ndef test_camera():\n    cam = srcampy.Camera()\n\n    #open MIPI camera, fps: 30, solution: 1080p\n    ret = cam.open_cam(-1, [1920, 1080])\n    print("Camera open_cam return:%d" % ret)\n\n    # wait for 1s\n    time.sleep(1)\n\n    #get one image from camera   \n    img = cam.get_frame(2,1920, 1080)\n    if img is not None:\n        #save file\n        fo = open("output.img", "wb")\n        fo.write(img)\n        fo.close()\n        print("camera save img file success")\n    else:\n        print("camera save img file failed")\n    \n    #close MIPI camera\n    cam.close()\n    print("test_camera done!!!")\n\ntest_camera()\n'})}),"\n",(0,c.jsx)(n.h2,{id:"send_frame",children:"send_frame"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u5411",(0,c.jsx)(n.code,{children:"vps"}),"\u6a21\u5757\u8f93\u5165\u56fe\u50cf\uff0c\u5e76\u89e6\u53d1\u56fe\u50cf\u5904\u7406\u64cd\u4f5c"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Camera.send_frame(img)\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,c.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"img"}),(0,c.jsx)(n.td,{children:"\u9700\u8981\u5904\u7406\u7684\u56fe\u50cf\u6570\u636e"}),(0,c.jsx)(n.td,{children:"\u8ddfvps\u8f93\u5165\u5c3a\u5bf8\u4fdd\u6301\u4e00\u81f4"})]})})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'camera = libsrcampy.Camera()\n\n#enable vps function, input: 1080p, output: 512x512\nret = camera.open_vps( [1920, 1080], [512, 512])\nprint("Camera vps return:%d" % ret)\n\nfin = open("output.img", "rb")\nimg = fin.read()\nfin.close()\n\n#send image to vps module\nret = vps.send_frame(img)\n'})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728",(0,c.jsx)(n.code,{children:"open_vps"}),"\u4e4b\u540e\u8c03\u7528"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'import sys, os, time\n\nimport numpy as np\nimport cv2\nfrom hobot_spdev import libsppydev as srcampy\n\ndef test_camera_vps():\n    vps = srcampy.Camera()\n\n    #enable vps function, input: 1080p, output: 512x512\n    ret = vps.open_vps( [1920, 1080], [512, 512])\n    print("Camera vps return:%d" % ret)\n\n    fin = open("output.img", "rb")\n    img = fin.read()\n    fin.close()\n\n    #send image data to vps\n    ret = vps.send_frame(img)\n    print ("Process send_frame return:%d" % ret)\n\n    fo = open("output_vps.img", "wb+")\n\n    #get image data from vps\n    img = vps.get_frame()\n    if img is not None:\n        fo.write(img)\n        print("encode write image success")\n    else:\n        print("encode write image failed")\n    fo.close()\n\n    #close vps function\n    vps.close()\n    print("test_camera_vps done!!!")\n\ntest_camera_vps():\n'})}),"\n",(0,c.jsx)(n.h2,{id:"close",children:"close"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u5173\u95ed\u4f7f\u80fd\u7684MIPI camera\u6444\u50cf\u5934"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Camera.close()\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'cam = libsrcampy.Camera()\n\n#open MIPI camera, fps: 30, solution: 1080p\nret = cam.open_cam(-1,[1920, 1080])\nprint("Camera open_cam return:%d" % ret)\n\n#close MIPI camera\ncam.close()\n'})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var c=r(96540);const s={},i=c.createContext(s);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);