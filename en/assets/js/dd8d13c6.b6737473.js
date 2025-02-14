"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2384],{28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>d});var i=t(96540);const r={},s=i.createContext(r);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(s.Provider,{value:e},n.children)}},83824:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(74848),r=t(28453);const s={sidebar_position:5},a="Interface Usage Examples",d={id:"Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/pydev_api_demo",title:"Interface Usage Examples",description:"The following example code contains multiple unit test cases, covering the usage of interfaces in this chapter. The details are as follows:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3/pydev_api_demo.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3",slug:"/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/pydev_api_demo",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/pydev_api_demo",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3/pydev_api_demo.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Display Object",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_display"},next:{title:"VIO(Camera Input) API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/vio_api"}},p={},c=[];function o(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"interface-usage-examples",children:"Interface Usage Examples"}),"\n",(0,i.jsx)(e.p,{children:"The following example code contains multiple unit test cases, covering the usage of interfaces in this chapter. The details are as follows:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import sys, os, time\n\nimport numpy as np\nimport cv2\nfrom hobot_vio import libsrcampy\n\ndef get_nalu_pos(byte_stream):\n    size = byte_stream.__len__()\n    nals = []\n    retnals = []\n\n    startCodePrefixShort = b"\\x00\\x00\\x01"\n\n    pos = 0\n    while pos < size:\n        is4bytes = False\n        retpos = byte_stream.find(startCodePrefixShort, pos)\n        if retpos == -1:\n            break\n        if byte_stream[retpos - 1] == 0:\n            retpos -= 1\n            is4bytes = True\n        if is4bytes:\n            pos = retpos + 4\n        else:\n            pos = retpos + 3\n        val = hex(byte_stream[pos])\n        val = "{:d}".format(byte_stream[pos], 4)\n        val = int(val)\n        fb = (val >> 7) & 0x1\n        nri = (val >> 5) & 0x3\n        type = val & 0x1f\n        nals.append((pos, is4bytes, fb, nri, type))\n    for i in range(0, len(nals) - 1):\n        start = nals[i][0]\n        if nals[i + 1][1]:\n            end = nals[i + 1][0] - 5\n        else:\n            end = nals[i + 1][0] - 4\n        retnals.append((start, end, nals[i][1], nals[i][2], nals[i][3], nals[i][4]))\n    start = nals[-1][0]\n    end = byte_stream.__len__() - 1\n    retnals.append((start, end, nals[-1][1], nals[-1][2], nals[-1][3], nals[-1][4]))\n    return retnals\n\ndef get_h264_nalu_type(byte_stream):\n    nalu_types = []\n    nalu_pos = get_nalu_pos(byte_stream)\n\n    for idx, (start, end, is4bytes, fb, nri, type) in enumerate(nalu_pos):\n        # print("NAL#%d: %d, %d, %d, %d, %d" % (idx, start, end, fb, nri, type))\n        nalu_types.append(type)\n    \n    return nalu_types\n\ndef test_camera():\n    cam = libsrcampy.Camera()\n    ret = cam.open_cam(0, 1, 30, 1920, 1080)\n    print("Camera open_cam return:%d" % ret)\n    # wait for isp tuning\n    time.sleep(1)\n    img = cam.get_img(2)\n    if img is not None:\n        #save file\n        fo = open("output.img", "wb")\n        fo.write(img)\n        fo.close()\n        print("camera save img file success")\n    else:\n        print("camera save img file failed")\n    cam.close_cam()\n    print("test_camera done!!!")\n\ndef test_camera_vps():\n    #vps start\n    vps = libsrcampy.Camera()\n    ret = vps.open_vps(1, 1, 1920, 1080, 512, 512)\n    print("Camera vps return:%d" % ret)\n\n    fin = open("output.img", "rb")\n    img = fin.read()\n    fin.close()\n    ret = vps.set_img(img)\n    print ("Process set_img return:%d" % ret)\n\n    fo = open("output_vps.img", "wb+")\n    img = vps.get_img()\n    if img is not None:\n        fo.write(img)\n        print("encode write image success")\n    else:\n        print("encode write image failed")\n    fo.close()\n\n    vps.close_cam()\n    print("test_camera_vps done!!!")\n\ndef test_encode():\n    #encode file\n    enc = libsrcampy.Encoder()\n    ret = enc.encode(0, 1, 1920, 1080)\n    print("Encoder encode return:%d" % ret)\n\n    #save file\n    fo = open("encode.h264", "wb+")\n    a = 0\n    fin = open("output.img", "rb")\n    input_img = fin.read()\n    fin.close()\n    while a < 100:\n        ret = enc.encode_file(input_img)\n        print("Encoder encode_file return:%d" % ret)\n        img = enc.get_img()\n        if img is not None:\n            fo.write(img)\n            print("encode write image success count: %d" % a)\n        else:\n            print("encode write image failed count: %d" % a)\n        a = a + 1\n\n    enc.close()\n    print("test_encode done!!!")\n\ndef test_decode():\n    #decode start\n    dec = libsrcampy.Decoder()\n\n    ret = dec.decode("encode.h264", 0, 1, 1920, 1080)\n    print ("Decoder return:%d frame count: %d" %(ret[0], ret[1]))\n\n    img = dec.get_img()\n    if img is not None:\n        #save file\n        fo = open("output.img", "wb")\n        fo.write(img)\n        fo.close()\n        print("decode save img file success")\n    else:\n        print("decode save img file failed")\n\n    dec.close()\n    print("test_decode done!!!")\n    \ndef test_display():\n    disp = libsrcampy.Display()\n    ret = disp.display(0, 1920, 1080, 0, 1)\n    print ("Display display 0 return:%d" % ret)\n    ret = disp.display(2)\n    print ("Display display 2 return:%d" % ret)\n    ret = disp.set_graph_rect(100, 100, 1920, 200, chn = 2, flush = 1,  color = 0xffff00ff)\n    print ("Display set_graph_rect return:%d" % ret)\n    string = "D-Robotics"\n    ret = disp.set_graph_word(300, 300, string.encode(\'gb2312\'), 2, 0, 0xff00ffff)\n    print ("Display set_graph_word return:%d" % ret)\n    \n    fo = open("output.img", "rb")\n    img = fo.read()\n    fo.close()\n    ret = disp.set_img(img)\n    print ("Display set_img return:%d" % ret)\n\n    time.sleep(3)\n\n    disp.close()\n    print("test_display done!!!")\n\ndef test_camera_bind_encode():\n    #camera start\n    cam = libsrcampy.Camera()\n    ret = cam.open_cam(0, 1, 30, [1920, 1280], [1080, 720])\n    print("Camera open_cam return:%d" % ret)\n\n    #encode start\n    enc = libsrcampy.Encoder()\n    ret = enc.encode(0, 1, 1920, 1080)\n    print("Encoder encode return:%d" % ret)\n    ret = libsrcampy.bind(cam, enc)\n    print("libsrcampy bind return:%d" % ret)\n\n    enc1 = libsrcampy.Encoder()\n    ret = enc1.encode(1, 1, 1280, 720)\n    print("Encoder encode return:%d" % ret)\n    ret = libsrcampy.bind(cam, enc1)\n    print("libsrcampy bind return:%d" % ret)\n\n    #save file\n    fo = open("encode.h264", "wb+")\n    fo1 = open("encode1.h264", "wb+")\n    a = 0\n    while a < 100:\n        img = enc.get_img()\n        img1 = enc1.get_img()\n        if img is not None:\n            fo.write(img)\n            fo1.write(img1)\n            print("encode write image success count: %d" % a)\n        else:\n            print("encode write image failed count: %d" % a)\n        a = a + 1\n    fo.close()\n    fo1.close()\n\n    print("save encode file success")\n    ret = libsrcampy.unbind(cam, enc)\n    print("libsrcampy unbind return:%d" % ret)\n    ret = libsrcampy.unbind(cam, enc1)\n    print("libsrcampy unbind return:%d" % ret)\n\n    enc1.close()\n    enc.close()\n    cam.close_cam()\n    print("test_camera_bind_encode done!!!")\n\ndef test_camera_bind_display():\n    #camera start\n    cam = libsrcampy.Camera()\n    ret = cam.open_cam(0, 1, 30, 1280, 720)\n    print("Camera open_cam return:%d" % ret)\n\n    #display start\n    disp = libsrcampy.Display()\n    ret = disp.display(0, 1920, 1080, 0, 1, chn_width = 1280, chn_height = 720)\n    print ("Display display 0 return:%d" % ret)\n    ret = disp.display(2, chn_width = 1280, chn_height = 720)\n    print ("Display display 2 return:%d" % ret)\n    disp.set_graph_rect(100, 100, 1920, 200, chn = 2, flush = 1,  color = 0xffff00ff)\n    string = "D-Robotics"\n    disp.set_graph_word(300, 300, string.encode(\'gb2312\'), 2, 0, 0xff00ffff)\n    ret = libsrcampy.bind(cam, disp)\n    print("libsrcampy bind return:%d" % ret)\n    \n    time.sleep(10)\n\n    ret = libsrcampy.unbind(cam, disp)\n    print("libsrcampy unbind return:%d" % ret)\n    disp.close()\n    cam.close_cam()\n    print("test_camera_bind_display done!!!")\n\ndef test_decode_bind_display():\n    #decode start\n    dec = libsrcampy.Decoder()\n    ret = dec.decode("encode.h264", 0, 1, 1920, 1080)\n    print ("Decoder return:%d frame count: %d" %(ret[0], ret[1]))\n\n    dec1 = libsrcampy.Decoder()\n    ret = dec1.decode("encode1.h264", 1, 1, 1280, 720)\n    print ("Decoder return:%d frame count: %d" %(ret[0], ret[1]))\n\n    #display start\n    disp = libsrcampy.Display()\n    ret = disp.display(0, 1920, 1080, 0, 1)\n    print ("Display display 0 return:%d" % ret)\n    ret = disp.display(2)\n    print ("Display display 2 return:%d" % ret)\n    disp.set_graph_rect(100, 100, 1920, 200, chn = 2, flush = 1,  color = 0xffff00ff)\n    string = "D-Robotics"\n    disp.set_graph_word(300, 300, string.encode(\'gb2312\'), 2, 0, 0xff00ffff)\n    ret = libsrcampy.bind(dec, disp)\n    print("libsrcampy bind return:%d" % ret)\n    \n    time.sleep(5)\n\n    ret = libsrcampy.unbind(dec, disp)\n    print("libsrcampy unbind return:%d" % ret)\n    disp.close()\n    dec1.close()\n    dec.close()\n    print("test_decode_bind_display done!!!")\n\ndef test_cam_bind_encode_decode_bind_display():\n    #camera start\n    cam = libsrcampy.Camera()\n    ret = cam.open_cam(0, 1, 30, [1920, 1280], [1080, 720])\n    print("Camera open_cam return:%d" % ret)\n\n    #encode file\n    enc = libsrcampy.Encoder()\n    ret = enc.encode(0, 1, 1920, 1080)\n    print("Encoder encode return:%d" % ret)\n\n    #decode start\n    dec = libsrcampy.Decoder()\n    ret = dec.decode("", 0, 1, 1920, 1080)\n    print ("Decoder return:%d frame count: %d" %(ret[0], ret[1]))\n\n    #display start\n    disp = libsrcampy.Display()\n    ret = disp.display(0, 1920, 1080, 0, 1)\n    print ("Display display 0 return:%d" % ret)\n\n    ret = libsrcampy.bind(cam, enc)\n    print("libsrcampy bind return:%d" % ret)\n    ret = libsrcampy.bind(dec, disp)\n    print("libsrcampy bind return:%d" % ret)\n\n    a = 0\n    while a < 100:\n        img = enc.get_img()\n        if img is not None:\n            dec.set_img(img)\n            print("encode get image success count: %d" % a)\n        else:\n            print("encode get image failed count: %d" % a)\n        a = a + 1\n\n    ret = libsrcampy.unbind(cam, enc)\n    ret = libsrcampy.unbind(dec, disp)\n    disp.close()\n    dec.close()\n    enc.close()\n    cam.close_cam()\n    print("test_cam_bind_encode_decode_bind_display done!!!")\n\ndef test_cam_vps_display():\n    #camera start\n    cam = libsrcampy.Camera()\n    ret = cam.open_cam(0, 1, 30, [1920, 1280], [1080, 720])\n    print("Camera open_cam return:%d" % ret)\n\n    #vps start\n    vps = libsrcampy.Camera()\n    ret = vps.open_vps(1, 1, 1920, 1080, 512, 512)\n    print("Camera vps return:%d" % ret)\n\n    #display start\n    disp = libsrcampy.Display()\n    ret = disp.display(0, 1920, 1080, 0, 1)\n    print ("Display display 0 return:%d" % ret)\n\n    a = 0\n    while a < 100:\n        img = cam.get_img()\n        if img is not None:\n            vps.set_img(img)\n            print("camera get image success count: %d" % a)\n        else:\n            print("camera get image failed count: %d" % a)\n\n        img = vps.get_img(2, 1920, 1080)\n        if img is not None:\n            disp.set_img(img)\n            print("vps get image success count: %d" % a)\n        else:\n            print("vps get image failed count: %d" % a)\n        a = a + 1\n\n    disp.close()\n    vps.close_cam()\n    cam.close_cam()\n    print("test_cam_vps_display done!!!")\n\ndef test_rtsp_decode_bind_vps_bind_disp(rtsp_url):\n    start_time = time.time()\n    image_count = 0\n    skip_count = 0\n    find_pps_sps = 0\n\n    #rtsp start\n    cap = cv2.VideoCapture(rtsp_url)\n    cap.set(cv2.CAP_PROP_FORMAT, -1) # get stream\n    if not cap.isOpened():\n        print("fail to open rtsp: {}".format(rtsp_url))\n        return -1\n    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))\n    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))\n\n    #decode start\n    dec = libsrcampy.Decoder()\n    ret = dec.decode("", 0, 1, width, height)\n    print ("Decoder return:%d frame count: %d" %(ret[0], ret[1]))\n\n    #camera start\n    vps = libsrcampy.Camera()\n    ret = vps.open_vps(0, 1, width, height, [1920, 512], [1080, 512])\n    print("Camera open_cam return:%d" % ret)\n\n    #display start\n    disp = libsrcampy.Display()\n    ret = disp.display(0, 1920, 1080, 0, 1)\n    print ("Display display 0 return:%d" % ret)\n\n    ret = libsrcampy.bind(dec, vps)\n    print("libsrcampy bind return:%d" % ret)\n    ret = libsrcampy.bind(vps, disp)\n    print("libsrcampy bind return:%d" % ret)\n\n    a = 0\n    while True:\n        ret, stream_frame = cap.read()\n        if not ret:\n            return\n        nalu_types = get_h264_nalu_type(stream_frame.tobytes())\n\n        # \u9001\u5165\u89e3\u7801\u7684\u7b2c\u4e00\u5e27\u9700\u8981\u662f pps\uff0csps, \u5426\u5219\u89e3\u7801\u5668\u4f1a\u62a5 "FAILED TO DEC_PIC_HDR" \u5f02\u5e38\u800c\u9000\u51fa\n        if (nalu_types[0] in [1, 5]) and find_pps_sps == 0:\n            continue\n\n        find_pps_sps = 1\n        if stream_frame is not None:\n            ret = dec.set_img(stream_frame.tobytes(), 0) # \u53d1\u9001\u7801\u6d41, \u5148\u89e3\u7801\u6570\u5e27\u56fe\u50cf\u540e\u518d\u83b7\u53d6\n            if ret != 0:\n                return ret\n            if skip_count < 5:\n                skip_count += 1\n                image_count = 0\n                continue\n\n    ret = libsrcampy.unbind(dec, vps)\n    ret = libsrcampy.unbind(vps, disp)\n    disp.close()\n    dec.close()\n    vps.close_cam()\n    cap.release()\n    print("test_rtsp_decode_bind_vps_bind_disp done!!!")\n\n\ntest_camera()\ntest_camera_vps()\ntest_encode()\ntest_decode()\ntest_display()\ntest_camera_bind_encode()\ntest_camera_bind_display()\ntest_decode_bind_display()\ntest_cam_bind_encode_decode_bind_display()\ntest_cam_vps_display()\n\n# rtsp_url = "rtsp://127.0.0.1/3840x2160.264"\n# test_rtsp_decode_bind_vps_bind_disp(rtsp_url)\n'})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}}}]);