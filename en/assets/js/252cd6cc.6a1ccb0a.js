"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5849],{53940:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var c=d(74848),r=d(28453);const i={sidebar_position:2},l="Encoder\u5bf9\u8c61",t={id:"Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_encoder",title:"Encoder\u5bf9\u8c61",description:"Encoder\u5bf9\u8c61\u5b9e\u73b0\u4e86\u5bf9\u89c6\u9891\u6570\u636e\u7684\u7f16\u7801\u538b\u7f29\u529f\u80fd\uff0c\u5305\u542b\u4e86encode\u3001sendframe\u3001getframe\u3001close\u7b49\u51e0\u79cd\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra/object_encoder.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra",slug:"/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_encoder",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_encoder",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra/object_encoder.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Camera\u5bf9\u8c61",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_camera"},next:{title:"Decoder\u5bf9\u8c61",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_decoder"}},s={},o=[{value:"encode",id:"encode",level:2},{value:"send_frame",id:"send_frame",level:2},{value:"get_frame",id:"get_frame",level:2},{value:"close",id:"close",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"encoder\u5bf9\u8c61",children:"Encoder\u5bf9\u8c61"}),"\n",(0,c.jsxs)(n.p,{children:["Encoder\u5bf9\u8c61\u5b9e\u73b0\u4e86\u5bf9\u89c6\u9891\u6570\u636e\u7684\u7f16\u7801\u538b\u7f29\u529f\u80fd\uff0c\u5305\u542b\u4e86",(0,c.jsx)(n.code,{children:"encode"}),"\u3001",(0,c.jsx)(n.code,{children:"send_frame"}),"\u3001",(0,c.jsx)(n.code,{children:"get_frame"}),"\u3001",(0,c.jsx)(n.code,{children:"close"}),"\u7b49\u51e0\u79cd\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.h2,{id:"encode",children:"encode"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u914d\u7f6e\u5e76\u4f7f\u80fdencode\u7f16\u7801\u6a21\u5757"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Encoder.encode(encode_type , [width, height], bits)\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,c.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"encode_type"}),(0,c.jsx)(n.td,{children:"\u89c6\u9891\u7f16\u7801\u7c7b\u578b"}),(0,c.jsxs)(n.td,{children:["\u8303\u56f42~3\uff0c\u5206\u522b\u5bf9\u5e94",(0,c.jsx)(n.code,{children:"H265"}),"\u3001",(0,c.jsx)(n.code,{children:"MJPEG"})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"width"}),(0,c.jsx)(n.td,{children:"\u8f93\u5165\u7f16\u7801\u6a21\u5757\u7684\u56fe\u50cf\u5bbd\u5ea6"}),(0,c.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc74096"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"height"}),(0,c.jsx)(n.td,{children:"\u8f93\u5165\u7f16\u7801\u6a21\u5757\u7684\u56fe\u50cf\u9ad8\u5ea6"}),(0,c.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc74096"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"bits"}),(0,c.jsx)(n.td,{children:"\u7f16\u7801\u6a21\u5757\u7684\u6bd4\u7279\u7387"}),(0,c.jsx)(n.td,{children:"\u9ed8\u8ba48000kbps"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"#create encode object\nencode = libsrcampy.Encoder()\n\n#enable encode channel 0, solution: 1080p, format: H265\nret = encode.encode(2, [1920, 1080])\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)(n.h2,{id:"send_frame",children:"send_frame"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u5411\u4f7f\u80fd\u7684\u7f16\u7801\u901a\u9053\u8f93\u5165\u56fe\u50cf\u6587\u4ef6\uff0c\u6309\u9884\u5b9a\u683c\u5f0f\u8fdb\u884c\u7f16\u7801"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Encoder.send_frame(img)\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,c.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"img"}),(0,c.jsx)(n.td,{children:"\u9700\u8981\u7f16\u7801\u7684\u56fe\u50cf\u6570\u636e\uff0c\u9700\u8981\u4f7f\u7528NV12\u683c\u5f0f"}),(0,c.jsx)(n.td,{children:"\u65e0"})]})})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'fin = open("output.img", "rb")\ninput_img = fin.read()\nfin.close()\n\n#input image data to encode\nret = encode.send_frame(input_img)\n'})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)(n.h2,{id:"get_frame",children:"get_frame"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u83b7\u53d6\u7f16\u7801\u540e\u7684\u6570\u636e"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Encoder.get_frame()\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728\u8c03\u7528",(0,c.jsx)(n.code,{children:"Encoder.encode()"}),"\u521b\u5efa\u7f16\u7801\u901a\u9053\u540e\u4f7f\u7528"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'import sys, os, time\n\nimport numpy as np\nimport cv2\nfrom hobot_vio import libsrcampy\n\ndef test_encode():\n    #create encode object\n    enc = libsrcampy.Encoder()\n    ret = enc.encode(2, [1920, 1080])\n    print("Encoder encode return:%d" % ret)\n\n    #save encoded data to file\n    fo = open("encode.h264", "wb+")\n    a = 0\n    fin = open("output.img", "rb")\n    input_img = fin.read()\n    fin.close()\n    while a < 100:\n        #send image data to encoder\n        ret = enc.send_frame(input_img)\n        print("Encoder send_frame return:%d" % ret)\n        #get encoded data\n        img = enc.get_frame()\n        if img is not None:\n            fo.write(img)\n            print("encode write image success count: %d" % a)\n        else:\n            print("encode write image failed count: %d" % a)\n        a = a + 1\n\n    enc.close()\n    print("test_encode done!!!")\n\ntest_encode()\n'})}),"\n",(0,c.jsx)(n.h2,{id:"close",children:"close"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u5173\u95ed\u4f7f\u80fd\u7684\u7f16\u7801\u901a\u9053\u3002"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Encoder.close()\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728\u8c03\u7528",(0,c.jsx)(n.code,{children:"Encoder.encode()"}),"\u521b\u5efa\u7f16\u7801\u901a\u9053\u540e\u4f7f\u7528"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>t});var c=d(96540);const r={},i=c.createContext(r);function l(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);