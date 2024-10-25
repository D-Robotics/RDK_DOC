"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4199],{49143:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=i(74848),s=i(28453);const t={sidebar_position:6},r="5.1.6 Version Release Notes",d={id:"Robot_development/quick_start/changelog",title:"5.1.6 Version Release Notes",description:"tros-humble",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/01_quick_start/changelog.md",sourceDirName:"05_Robot_development/01_quick_start",slug:"/Robot_development/quick_start/changelog",permalink:"/rdk_doc/en/Robot_development/quick_start/changelog",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/05_Robot_development/01_quick_start/changelog.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5.1.5 Using ROS2 package",permalink:"/rdk_doc/en/Robot_development/quick_start/ros_pkg"},next:{title:"5.2.1 Image Capture",permalink:"/rdk_doc/en/Robot_development/quick_demo/demo_sensor"}},l={},c=[{value:"tros-humble",id:"tros-humble",level:2},{value:"Version: 2.2.0",id:"version-220",level:3},{value:"tros-foxy",id:"tros-foxy",level:2},{value:"Version: 2.1.3",id:"version-213",level:3},{value:"Version: 2.1.2",id:"version-212",level:3},{value:"Version: 2.1.1",id:"version-211",level:3},{value:"Version: 2.1.0",id:"version-210",level:3},{value:"Version: 2.0.2",id:"version-202",level:3},{value:"Version: 2.0-Release (2.0.1)",id:"version-20-release-201",level:3},{value:"Version: 2.0-Beta (2.0.0)",id:"version-20-beta-200",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"516-version-release-notes",children:"5.1.6 Version Release Notes"}),"\n",(0,o.jsx)(n.h2,{id:"tros-humble",children:"tros-humble"}),"\n",(0,o.jsx)(n.h3,{id:"version-220",children:"Version: 2.2.0"}),"\n",(0,o.jsx)(n.p,{children:"Functionality changes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Based on TROS Foxy 2.1.3 version, adapted to Ubuntu 22.04 system and ROS2 Humble."}),"\n",(0,o.jsxs)(n.li,{children:["The installation path of TROS has been changed from ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/opt/tros"})})," to ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/opt/tros/humble"})}),", which is consistent with the installation path level and naming of ROS2."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"tros-ros-base"})," installation package (including ROS2 basic function packages such as rclcpp, rclpy, ros2cli, etc.) is no longer provided. The standard ROS2 distribution package is used. The dependent ROS2 Humble is automatically installed when installing TROS Humble."]}),"\n",(0,o.jsx)(n.li,{children:"Use the zero-copy communication function of ROS2 fastdds, which involves data collection, image encoding and decoding, algorithm examples and other modules that use image data."}),"\n",(0,o.jsxs)(n.li,{children:["The Reliability of QoS used in zero-copy communication has been changed from ",(0,o.jsx)(n.code,{children:"RMW_QOS_POLICY_RELIABILITY_RELIABLE"})," (rclcpp::QoS()) to ",(0,o.jsx)(n.code,{children:"RMW_QOS_POLICY_RELIABILITY_BEST_EFFORT"})," (rclcpp::SensorDataQoS()) to avoid potential stability risks when using zero-copy."]}),"\n",(0,o.jsxs)(n.li,{children:["Refactor ",(0,o.jsx)(n.code,{children:"hobot_dnn"})," to use the lower-level board-side inference framework ",(0,o.jsx)(n.code,{children:"libdnn"})," instead of ",(0,o.jsx)(n.code,{children:"easydnn"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hobot_audio"})," upgrades the speech algorithm SDK and uses the lower-level board-side inference framework ",(0,o.jsx)(n.code,{children:"libdnn"})," instead of ",(0,o.jsx)(n.code,{children:"easydnn"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hobot_trigger"})," adapts to ROS2 Humble version rosbag2."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"New features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"robot_dev_config"})," adds bloom compilation and packaging scripts, which are used to compile and package TROS for the ARM platform."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hobot_mipi_cam"})," node adds frame_ts_type configuration item, which supports realtime (used to calculate communication delay) and sensor (default, used for sensor timestamp synchronization) configuration parameters."]}),"\n",(0,o.jsxs)(n.li,{children:["Added ",(0,o.jsx)(n.code,{children:"hobot_shm"})," node for configuring ROS2 zero-copy environment."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Fixed compatibility issues introduced by compiler upgrade."}),"\n",(0,o.jsx)(n.li,{children:"Fixed the path dependency problem in the ROS2 pkg compiled on the board end."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tros-foxy",children:"tros-foxy"}),"\n",(0,o.jsx)(n.h3,{id:"version-213",children:"Version: 2.1.3"}),"\n",(0,o.jsx)(n.p,{children:"Functionality changes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The data type used for jpeg compressed images has been changed from ",(0,o.jsx)(n.code,{children:"sensor_msgs::msg::Image"})," to the standard ",(0,o.jsx)(n.code,{children:"sensor_msgs::msg::CompressedImage"}),". It supports using tools such as foxglove and ros2 rqt to view jpeg format images released by TROS. Involving the hobot_websocket, hobot_codec, hobot_image_publisher, hobot_usb_cam modules."]}),"\n",(0,o.jsx)(n.li,{children:"Unify the use of jpeg/mjpeg configuration items to specify publishing/subscribing of jpeg compressed format images, and delete the jpeg-compressed/mjpeg-compressed configuration items, which involve the hobot_codec and hobot_usb_cam modules."}),"\n",(0,o.jsxs)(n.li,{children:["The environment variable TROS_DISTRO representing the TROS distribution is introduced. After executing the ",(0,o.jsx)(n.code,{children:"source /opt/tros/setup.bash"}),"/",(0,o.jsx)(n.code,{children:"source /opt/tros/local_setup.bash"})," command, the value of the environment variable ",(0,o.jsx)(n.code,{children:"TROS_DISTRO"})," is empty. The configuration file path used by hobot_codec, hobot_audio, hobot_mipi_cam, hobot_usb_cam and other modules has been changed from ",(0,o.jsx)(n.code,{children:"/opt/tros/lib"})," to ",(0,o.jsx)(n.code,{children:"/opt/tros/${TROS_DISTRO}/lib"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"version-212",children:"Version: 2.1.2"}),"\n",(0,o.jsx)(n.p,{children:"New features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Refactored hobot_usb_cam to support more format configurations and transcoding."}),"\n",(0,o.jsx)(n.li,{children:"Updated hobot_audio to support both 2-mic and 4-mic microphone boards; added microphone_name configuration for device ID."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Fixed an issue in the hobot_rgbd_cam node where the step field of the data message was set incorrectly."}),"\n",(0,o.jsx)(n.li,{children:"Updated the audio playback function call in hobot_tts to fix playback failure on the new version of the system."}),"\n",(0,o.jsx)(n.li,{children:"Deleted the config device tree file in hobot_llm, and updated README; the new version of the system can now set the size of ION memory through command tools."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"version-211",children:"Version: 2.1.1"}),"\n",(0,o.jsx)(n.p,{children:"New features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Added hobot_chatbot node, which calls intelligent speech, large language model, and text-to-speech modules to implement on-board voice chatting."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Fixed an issue in the text-to-speech hobot_tts node where certain characters caused the application to exit."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"version-210",children:"Version: 2.1.0"}),"\n",(0,o.jsx)(n.p,{children:"Functionality changes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Updated tros-ros-base to the latest ROS2 foxy source code, making it compatible with the latest ROS2 foxy packages."}),"\n",(0,o.jsxs)(n.li,{children:["To use the ROS2 foxy packages, simply run ",(0,o.jsx)(n.code,{children:"source /opt/tros/setup.bash"}),". There is no longer a need to use the script to create symbolic links."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"New features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Added a parameter to the text-to-speech hobot_tts node to specify the audio playback device."}),"\n",(0,o.jsx)(n.li,{children:"Added a new large language model hobot_llm node for on-device LLM experience."}),"\n",(0,o.jsx)(n.li,{children:'Added the "jpeg-compressed" configuration option to the in_format parameter of the hobot_codec node for image encoding and decoding. The data type of the subscribed topics is now selected based on the configuration option.'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Fixed an issue in the MIPI image acquisition hobot_mipi_cam node where the step field of the RGB format data message was set incorrectly."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"version-202",children:"Version: 2.0.2"}),"\n",(0,o.jsxs)(n.p,{children:["Functionality changes:- Configured ROS2 source (",(0,o.jsx)(n.code,{children:"/etc/apt/sources.list.d/ros2.list"}),") during the installation of tros.b has been changed to the Tsinghua mirror source, resolving the issue of slow and failed installation of ROS2 packages."]}),"\n",(0,o.jsx)(n.p,{children:"New features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Added a permission check function during the configuration of the environment in the tros.b script (",(0,o.jsx)(n.code,{children:"source /opt/tros/setup.bash"})," and ",(0,o.jsx)(n.code,{children:"source /opt/tros/local_setup.bash"}),"). If the current account does not have root privileges, it will automatically switch to the root account, resolving the issue of tros.b failing to be used due to insufficient privileges."]}),"\n",(0,o.jsxs)(n.li,{children:["Added a parameter configuration function for the audio device number in the intelligent speech algorithm ",(0,o.jsx)(n.code,{children:"hobot_audio"})," node, facilitating secondary development."]}),"\n",(0,o.jsxs)(n.li,{children:["Added the functionality to send tasks to the Trigger module through std_msg topics in the event-triggered ",(0,o.jsx)(n.code,{children:"hobot_trigger"})," node, standardizing the Trigger configuration method."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fixed the issue where image processing failed when performing crop&resize processing of images in the accelerated image processing ",(0,o.jsx)(n.code,{children:"hobot_cv"})," node."]}),"\n",(0,o.jsxs)(n.li,{children:["Fixed the issue where error logs were output during the startup of the MIPI image acquisition ",(0,o.jsx)(n.code,{children:"hobot_mipi_cam"})," node."]}),"\n",(0,o.jsxs)(n.li,{children:["Fixed the issue where the launch file configuration of the data visualization message conversion ",(0,o.jsx)(n.code,{children:"hobot_visualization"})," node was invalid."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"version-20-release-201",children:"Version: 2.0-Release (2.0.1)"}),"\n",(0,o.jsx)(n.p,{children:"Function changes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Upgraded the speech algorithm to optimize the ASR (Automatic Speech Recognition) performance."}),"\n",(0,o.jsxs)(n.li,{children:["Optimized the ",(0,o.jsx)(n.code,{children:"model_name"})," configuration item in the algorithm example, automatically parsing the ",(0,o.jsx)(n.code,{children:"model_name"})," configuration from the model file to resolve the issue of loading model failure caused by parameter configuration errors, improving the usability for algorithm development."]}),"\n",(0,o.jsx)(n.li,{children:"The tros.b package no longer includes the nav2 package. Users can directly install the latest version of the nav2 package in ROS2 using the apt command, resolving the stability issues in the older versions of nav2."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"New features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Added support for the ",(0,o.jsx)(n.code,{children:"RDK Ultra"})," platform."]}),"\n",(0,o.jsxs)(n.li,{children:["Added the ",(0,o.jsx)(n.code,{children:"hobot_trigger"})," and ",(0,o.jsx)(n.code,{children:"hobot_visualization"})," nodes for triggering events, capturing and visualizing rosbag data. These nodes help users locate, reproduce, and visualize perception and control issues in robot scenes. Users can also develop custom features for data triggering, recording, and real-time feedback."]}),"\n",(0,o.jsx)(n.li,{children:"The USB image acquisition node now adapts to the device number of the USB camera, reducing the threshold for using USB cameras."}),"\n",(0,o.jsx)(n.li,{children:"Added the Visual Inertial Odometry (VIO) algorithm node, a low-cost and robust robot high-precision localization algorithm based on vision."}),"\n",(0,o.jsxs)(n.li,{children:["Added the ",(0,o.jsx)(n.code,{children:"hobot_tts"})," node for text-to-speech conversion, enabling speech synthesis from text."]}),"\n",(0,o.jsxs)(n.li,{children:["Added the laser-based object detection algorithm ",(0,o.jsx)(n.code,{children:"hobot_centerpoint"})," node."]}),"\n",(0,o.jsxs)(n.li,{children:["Added the Bird's Eye View (BEV) perception algorithm ",(0,o.jsx)(n.code,{children:"hobot_bev"})," node."]}),"\n",(0,o.jsxs)(n.li,{children:["Added the stereo depth estimation algorithm ",(0,o.jsx)(n.code,{children:"hobot_stereonet"})," node."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Upgraded easydnn (version 1.6.1) and dnn (version 1.18.4) for RDK X3, fixing operator crash issues and supporting more operators."}),"\n",(0,o.jsx)(n.li,{children:"Fixed the issue where the depth data published by the RGBD image acquisition node was incorrect."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Other updates:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Optimized the human detection and tracking algorithm nodes to support adaptive output of algorithm perception results based on the input image resolution."}),"\n",(0,o.jsx)(n.li,{children:"Fixed the compilation failure issue caused by incorrect path in the orb_slam3 algorithm compilation script."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"version-20-beta-200",children:"Version: 2.0-Beta (2.0.0)"}),"\n",(0,o.jsx)(n.p,{children:"2.0-Beta (2.0.0) is the first 2.x version of tros.b, and it is recommended for users of the 1.x version of tros.b to upgrade to the 2.x version.Changes in Functionality:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The code hosting platform has been changed from Gitlab to GitHub, making it easier for more developers to contribute to the project."}),"\n",(0,o.jsx)(n.li,{children:"Integration of a more efficient package management mechanism to accelerate version upgrades and make installation of robot applications more convenient."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"New Features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Support for the new RDK X3 Module development kit for core boards."}),"\n",(0,o.jsx)(n.li,{children:"Added voice ASR recognition result output to hobot_audio, facilitating the development of voice applications."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bug Fixes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Fixed a crash issue with the MobileNet_SSD model post-processing in dnn_node when running in multi-threaded scenarios."}),"\n",(0,o.jsx)(n.li,{children:"Fixed a model inference failure issue in dnn_node on X86 platforms when using DDR inputs."}),"\n",(0,o.jsx)(n.li,{children:"Fixed compilation failures of hobot_codec and hobot_image_publisher on X86 platforms."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Other Updates:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Updated the launch script for examples to reference dependency modules' launch scripts and configure parameters."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var o=i(96540);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);