"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2836],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}},57177:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/web_depth_visual-ad535b8915689297cba81d06e869e1ea.png"},67557:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/image_format-60a198d42995b8f630d2b180a532eba8.png"},70114:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/consume-a497959ec81c5c736d35ffcaac6d2793.png"},75297:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/stereonet_rdk-1234677116fadd715881313c16a11d88.png"},87394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(74848),s=n(28453);const r={sidebar_position:13},o="Stereo Depth Algorithm",l={id:"Robot_development/boxs/function/hobot_stereonet",title:"Stereo Depth Algorithm",description:"Function Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/hobot_stereonet.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hobot_stereonet",permalink:"/rdk_doc/en/Robot_development/boxs/function/hobot_stereonet",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/hobot_stereonet.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"CLIP",permalink:"/rdk_doc/en/Robot_development/boxs/function/hobot_clip"},next:{title:"Segment Anything",permalink:"/rdk_doc/en/Robot_development/boxs/function/mono_mobilesam"}},d={},a=[{value:"Function Introduction",id:"function-introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Materials List",id:"materials-list",level:2},{value:"Usage Instructions",id:"usage-instructions",level:2},{value:"Function Installation",id:"function-installation",level:3},{value:"Start Stereo Image Publishing, Algorithm Inference, and Image Visualization",id:"start-stereo-image-publishing-algorithm-inference-and-image-visualization",level:3},{value:"Interface Description",id:"interface-description",level:2},{value:"Subscribed Topics",id:"subscribed-topics",level:3},{value:"Published Topics",id:"published-topics",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Algorithm Execution Time",id:"algorithm-execution-time",level:2},{value:"Notes",id:"notes",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"stereo-depth-algorithm",children:"Stereo Depth Algorithm"}),"\n",(0,i.jsx)(t.h2,{id:"function-introduction",children:"Function Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["The stereo depth estimation algorithm uses the ",(0,i.jsx)(t.code,{children:"StereoNet"})," model trained on the ",(0,i.jsx)(t.a,{href:"https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html",children:"SceneFlow"})," dataset with the Horizon ",(0,i.jsx)(t.a,{href:"https://developer.horizon.ai/api/v1/fileData/horizon_j5_open_explorer_cn_doc/hat/source/examples/stereonet.html",children:"OpenExplorer"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The algorithm input consists of stereo image data, specifically the left and right views. The algorithm output is the disparity map for the left view."}),"\n",(0,i.jsxs)(t.p,{children:["This example uses a MIPI stereo camera as the image data input source. The algorithm inference is performed using the BPU, and the stereo image left view along with the perception results are published as topic messages. The results are rendered in ",(0,i.jsx)(t.code,{children:"rviz2"})," on the PC side."]}),"\n",(0,i.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Platform"}),(0,i.jsx)(t.th,{children:"Operating Mode"}),(0,i.jsx)(t.th,{children:"Example Functionality"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RDK X5"}),(0,i.jsx)(t.td,{children:"Ubuntu 22.04 (Humble)"}),(0,i.jsx)(t.td,{children:"\xb7 Start stereo cameras, infer depth results, and display on the web"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"materials-list",children:"Materials List"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Stereo Camera"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"usage-instructions",children:"Usage Instructions"}),"\n",(0,i.jsx)(t.h3,{id:"function-installation",children:"Function Installation"}),"\n",(0,i.jsx)(t.p,{children:"Run the following command in the terminal on the RDK system to quickly install the necessary software:"}),"\n",(0,i.jsx)(t.p,{children:"tros humble version"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sudo apt update\n\n# Uninstall the existing package:\nsudo apt-get remove tros-humble-stereonet-model\n\n# If uninstallation fails, use the force removal command:\n# sudo dpkg --remove --force-all tros-humble-stereonet-model\n\n# Install the new package:\nsudo apt install -y tros-humble-hobot-stereonet\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"start-stereo-image-publishing-algorithm-inference-and-image-visualization",children:"Start Stereo Image Publishing, Algorithm Inference, and Image Visualization"}),"\n",(0,i.jsx)(t.p,{children:"Run the following command in the terminal on the RDK system to start:"}),"\n",(0,i.jsx)(t.p,{children:"tros humble version"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'# Configure the tros.b humble environment\nsource /opt/tros/humble/setup.bash\n\n# Launch the stereo model launch file, which includes the startup of the algorithm and stereo camera nodes\nros2 launch hobot_stereonet stereonet_model_web_visual.launch.py \\\nstereo_image_topic:=/image_combine_raw stereo_combine_mode:=1 need_rectify:="True" \\\nheight_min:=0.1 height_max:=1.0 KMean:=10 stdv:=0.01 leaf_size:=0.05\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"Additionally, you can start the nodes using the component method."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'# Configure the tros.b humble environment\nsource /opt/tros/humble/setup.bash\n\n# Terminal 1: Launch the stereo model launch file\nros2 launch hobot_stereonet stereonet_model_component.launch.py \\\nstereo_image_topic:=/image_combine_raw stereo_combine_mode:=1 need_rectify:="True" \\\nheight_min:=0.1 height_max:=1.0 KMean:=10 stdv:=0.01 leaf_size:=0.05\n\n# Terminal 2: Launch the MIPI stereo camera launch file\nros2 launch mipi_cam mipi_cam_dual_channel.launch.py \\\nmipi_image_width:=1280 mipi_image_height:=640\n'})}),"\n",(0,i.jsx)(t.p,{children:"If you want to evaluate the algorithm using local images, you can use the following command to specify the algorithm mode, image data path, and camera parameters. Also, make sure the image data has been undistorted and baseline aligned."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'# Configure tros.b Humble Environment\n\nsource /opt/tros/humble/setup.bash\n\n# Enter the algorithm data directory\n\ncd /opt/tros/humble/share/hobot_stereonet/\n\n# Start the stereo model launch file\nros2 launch hobot_stereonet stereonet_model_web_visual.launch.py \\\nneed_rectify:="False" use_local_image:="True" local_image_path:=`pwd`/data/ \\\ncamera_fx:=505.044342 camera_fy:=505.044342 camera_cx:=605.167053 camera_cy:=378.247009 base_line:=0.069046\n'})}),"\n",(0,i.jsx)(t.p,{children:"The parameters are defined as follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"use_local_image"}),(0,i.jsx)(t.td,{children:"Default: False"}),(0,i.jsx)(t.td,{children:"Whether to enable image injection mode"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"local_image_path"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"The directory path for image injection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"camera_fx"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Camera intrinsic parameter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"camera_fy"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Camera intrinsic parameter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"camera_cx"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Camera intrinsic parameter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"camera_cy"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Camera intrinsic parameter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"base_line"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Baseline distance"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The image format is as shown below. The first left image is named ",(0,i.jsx)(t.code,{children:"left000000.png"}),", the second left image is named ",(0,i.jsx)(t.code,{children:"left000001.png"}),", and so on. The corresponding right images are named ",(0,i.jsx)(t.code,{children:"right000000.png"}),", ",(0,i.jsx)(t.code,{children:"right000001.png"}),", and so on. The algorithm processes the images in sequence until all images are processed."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"stereonet_rdk",src:n(67557).A+"",width:"1234",height:"170"})}),"\n",(0,i.jsx)(t.p,{children:"After a successful start, open RViz2 on the same network computer, subscribe to the relevant topics published by the stereo model node, and you can observe the real-time visual effects of the algorithm:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"stereonet_rdk",src:n(75297).A+"",width:"1836",height:"1009"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also observe the algorithm's running results on the PC through a browser by entering the address of X5's 8000 port. For example, if the X5 IP address is ",(0,i.jsx)(t.code,{children:"192.168.31.111"}),", enter ",(0,i.jsx)(t.code,{children:"192.168.31.111:8000"})," in the browser:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"stereonet_rdk",src:n(57177).A+"",width:"1350",height:"918"})}),"\n",(0,i.jsx)(t.h2,{id:"interface-description",children:"Interface Description"}),"\n",(0,i.jsx)(t.h3,{id:"subscribed-topics",children:"Subscribed Topics"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Message Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/image_combine_raw"}),(0,i.jsx)(t.td,{children:"sensor_msgs::msg::Image"}),(0,i.jsx)(t.td,{children:"Stereo camera node publishes the combined left and right images topic for model depth inference"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"published-topics",children:"Published Topics"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Message Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/StereoNetNode/stereonet_pointcloud2"}),(0,i.jsx)(t.td,{children:"sensor_msgs::msg::PointCloud2"}),(0,i.jsx)(t.td,{children:"Published point cloud depth topic"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/StereoNetNode/stereonet_depth"}),(0,i.jsx)(t.td,{children:"sensor_msgs::msg::Image"}),(0,i.jsx)(t.td,{children:"Published depth image with pixel values in millimeters"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/StereoNetNode/stereonet_visual"}),(0,i.jsx)(t.td,{children:"sensor_msgs::msg::Image"}),(0,i.jsx)(t.td,{children:"Published intuitive visualized render image"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stereo_image_topic"}),(0,i.jsx)(t.td,{children:"Default: /image_combine_raw"}),(0,i.jsx)(t.td,{children:"Topic name to subscribe to stereo image messages"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"need_rectify"}),(0,i.jsx)(t.td,{children:"Default: True"}),(0,i.jsxs)(t.td,{children:["Whether to rectify and undistort stereo data; camera parameters specified in ",(0,i.jsx)(t.code,{children:"config/stereo.yaml"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stereo_combine_mode"}),(0,i.jsx)(t.td,{children:"Default: 1"}),(0,i.jsx)(t.td,{children:"Defines how stereo images are combined: 1 for vertical stitching, 0 for horizontal stitching"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"height_min"}),(0,i.jsx)(t.td,{children:"Default: -0.2"}),(0,i.jsxs)(t.td,{children:["Filter out points with height less than ",(0,i.jsx)(t.code,{children:"height_min"})," in the camera's vertical direction (in meters)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"height_max"}),(0,i.jsx)(t.td,{children:"Default: 999.9"}),(0,i.jsxs)(t.td,{children:["Filter out points with height greater than ",(0,i.jsx)(t.code,{children:"height_max"})," in the camera's vertical direction (in meters)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"KMean"}),(0,i.jsx)(t.td,{children:"Default: 10"}),(0,i.jsx)(t.td,{children:"Number of neighboring points considered for each point when filtering sparse outliers; calculates distance to the 10 nearest points"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stdv"}),(0,i.jsx)(t.td,{children:"Default: 0.01"}),(0,i.jsx)(t.td,{children:"Threshold for determining outliers when filtering sparse points; set as a multiple of the standard deviation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"leaf_size"}),(0,i.jsx)(t.td,{children:"Default: 0.05"}),(0,i.jsx)(t.td,{children:"Sets the unit density of the point cloud; indicates only one point in a 3D sphere with a radius of 0.05 meters"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"algorithm-execution-time",children:"Algorithm Execution Time"}),"\n",(0,i.jsx)(t.p,{children:"When the log level is set to debug, the program will print the execution time for each stage of the algorithm to help users debug performance bottlenecks."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'ros2 launch hobot_stereonet stereonet_model.launch.py \\\nstereo_image_topic:=/image_combine_raw stereo_combine_mode:=1 need_rectify:="True" log_level:=debug\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"stereonet_rdk",src:n(70114).A+"",width:"1593",height:"365"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The input size for the model is width: 1280, height: 640. The resolution of the images published by the camera should be 1280x640."}),"\n",(0,i.jsx)(t.li,{children:"If the stereo camera publishes images in NV12 format, the stereo image stitching must be done vertically (top-down stitching)."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);