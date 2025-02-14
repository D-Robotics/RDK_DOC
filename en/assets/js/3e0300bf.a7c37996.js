"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3636],{28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},60598:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(74848),r=o(28453);const s={sidebar_position:3},i="8.3 Applications and Examples",a={id:"FAQ/applications_and_examples",title:"8.3 Applications and Examples",description:"Installation/Cross-compilation and Usage of Third-party Libraries on RDK",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/08_FAQ/03_applications_and_examples.md",sourceDirName:"08_FAQ",slug:"/FAQ/applications_and_examples",permalink:"/rdk_doc/en/FAQ/applications_and_examples",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/08_FAQ/03_applications_and_examples.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"8.2 Interface Class",permalink:"/rdk_doc/en/FAQ/interface"},next:{title:"8.4 Multimedia Class",permalink:"/rdk_doc/en/FAQ/multimedia"}},l={},c=[{value:"Installation/Cross-compilation and Usage of Third-party Libraries on RDK",id:"installationcross-compilation-and-usage-of-third-party-libraries-on-rdk",level:2},{value:"How to Resolve &quot;Compilation Process Killed&quot; Error during Large Program Compilation?",id:"how-to-resolve-compilation-process-killed-error-during-large-program-compilation",level:2},{value:"How to Run the Camera Example?",id:"how-to-run-the-camera-example",level:2},{value:"Unable to View RGB888 RAW Images Published by RDK Using rqt_image_view?",id:"unable-to-view-rgb888-raw-images-published-by-rdk-using-rqt_image_view",level:2},{value:"Can Board Compilation be Supported on the Linux Image?",id:"can-board-compilation-be-supported-on-the-linux-image",level:2},{value:"How to Run Examples on the Linux Image?",id:"how-to-run-examples-on-the-linux-image",level:2},{value:"How to find the path of the launch script",id:"how-to-find-the-path-of-the-launch-script",level:2},{value:"Slow speed when cross-compiling the TogetheROS.Bot source code",id:"slow-speed-when-cross-compiling-the-togetherosbot-source-code",level:2},{value:"Do you support installing and using other versions of ROS?",id:"do-you-support-installing-and-using-other-versions-of-ros",level:2},{value:"Colcon compilation error",id:"colcon-compilation-error",level:2},{value:"How to check the tros.b version",id:"how-to-check-the-trosb-version",level:2},{value:"Failed to open the webpage in a web browser",id:"failed-to-open-the-webpage-in-a-web-browser",level:2},{value:"Only image is displayed in the web browser, no perception result rendering",id:"only-image-is-displayed-in-the-web-browser-no-perception-result-rendering",level:2},{value:"TROS Humble version uses zero copy",id:"tros-humble-version-uses-zero-copy",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"83-applications-and-examples",children:"8.3 Applications and Examples"}),"\n",(0,t.jsx)(n.h2,{id:"installationcross-compilation-and-usage-of-third-party-libraries-on-rdk",children:"Installation/Cross-compilation and Usage of Third-party Libraries on RDK"}),"\n",(0,t.jsxs)(n.p,{children:["For cross-compilation and deployment, please refer to ",(0,t.jsx)(n.a,{href:"https://developer.d-robotics.cc/forumDetail/112555549341653662",children:"Cross-Compilation Environment Setup"})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-resolve-compilation-process-killed-error-during-large-program-compilation",children:'How to Resolve "Compilation Process Killed" Error during Large Program Compilation?'}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://developer.d-robotics.cc/forumDetail/98129467158916281",children:"Swap Usage Tutorial"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo mkdir -p /swapfile \ncd /swapfile \nsudo dd if=/dev/zero of=swap bs=1M count=1024 \nsudo chmod 0600 swap \nsudo mkswap -f swap \nsudo swapon swap \nfree\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-run-the-camera-example",children:"How to Run the Camera Example?"}),"\n",(0,t.jsx)(n.p,{children:"Python provides examples for the FCOS algorithm based on F37 and GC4663 cameras, which will automatically detect the camera and perform algorithm inference."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /app/ai_inference/03_mipi_camera_sample\nsudo python3 mipi_camera.py\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, connect an HDMI monitor to render the images and display the algorithm results."}),"\n",(0,t.jsx)(n.h2,{id:"unable-to-view-rgb888-raw-images-published-by-rdk-using-rqt_image_view",children:"Unable to View RGB888 RAW Images Published by RDK Using rqt_image_view?"}),"\n",(0,t.jsx)(n.p,{children:"FastDDS does not implement MTU fragmentation at the UDP protocol layer, resulting in IP layer fragmentation. When UDP data is too large, routers and NICs cannot buffer a large number of fragments, and the loss of a single fragment will cause all fragments to be retransmitted, resulting in IP fragmentation attack. This leads to network congestion in the same subnet. To solve this, you can switch to cycloneDDS (command: export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp), or send images with lower resolution in JPEG format to reduce the amount of data transmitted."}),"\n",(0,t.jsx)(n.h2,{id:"can-board-compilation-be-supported-on-the-linux-image",children:"Can Board Compilation be Supported on the Linux Image?"}),"\n",(0,t.jsx)(n.p,{children:"The Linux image rootfs has been minimized and does not support board-side compilation."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-run-examples-on-the-linux-image",children:"How to Run Examples on the Linux Image?"}),"\n",(0,t.jsx)(n.p,{children:"The examples in the manual are introduced using the Ubuntu system as an example. The examples rely on Python for execution, and these examples can also be run on the RDK with the Linux image (without Python)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Instructions for Booting Ubuntu System and Linux Image Examples.Launching an example on Ubuntu system requires three steps:"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the ",(0,t.jsx)(n.code,{children:"tros.b"})," environment by using the command ",(0,t.jsx)(n.code,{children:"source /opt/tros/setup.bash"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy the necessary configuration files to the execution path."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Launch the package in ",(0,t.jsx)(n.code,{children:"tros.b"})," using either ",(0,t.jsx)(n.code,{children:"ros2 run"})," or ",(0,t.jsx)(n.code,{children:"ros2 launch"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"On a Linux image, these three steps are as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the ",(0,t.jsx)(n.code,{children:"tros.b"})," environment by using the command ",(0,t.jsx)(n.code,{children:"export LD_LIBRARY_PATH"}),", and use the ",(0,t.jsx)(n.code,{children:"export ROS_LOG_DIR"})," command to modify the path to store the log file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy the necessary configuration files to the execution path."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the example program and specify the launch parameters. For packages written in C++, each package corresponds to an executable program."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Taking the algorithm reasoning example as an example, let's explain how to convert the launch script content into commands on a Linux image. The example takes a local image as input for reasoning, generates a rendered image, and saves it locally."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launch command on Ubuntu system:"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The command is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n\n# Copy the necessary configuration files needed for running the example from the installation path of tros.b. Config contains the model used by the example, and the local image used for the feedback.\ncp -r /opt/tros/lib/dnn_node_example/config/ .\n\n# Perform feedback prediction using a local jpg format image and save the rendered image\nros2 launch dnn_node_example dnn_node_example_feedback.launch.py\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launch script path:"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This example uses ",(0,t.jsx)(n.code,{children:"ros2 launch"})," to launch the ",(0,t.jsx)(n.code,{children:"dnn_node_example package"}),". The launch script ",(0,t.jsx)(n.code,{children:"dnn_node_example_feedback.launch.py"})," can be found in the installation path of ",(0,t.jsx)(n.code,{children:"tros.b"})," on RDK:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# find /opt/tros/ -name dnn_node_example_feedback.launch.py\n/opt/tros/share/dnn_node_example/launch/dnn_node_example_feedback.launch.py\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launch script content:"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The main content of the launch script ",(0,t.jsx)(n.code,{children:"dnn_node_example_feedback.launch.py"})," is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def generate_launch_description():\n    config_file_launch_arg = DeclareLaunchArgument(\n        "dnn_example_config_file", default_value=TextSubstitution(text="config/fcosworkconfig.json")\n```img_file_launch_arg = DeclareLaunchArgument(\n        "dnn_example_image", default_value=TextSubstitution(text="config/test.jpg")\n    )\n\n    # Copy files in the config folder\n    dnn_node_example_path = os.path.join(\n        get_package_prefix(\'dnn_node_example\'),\n        "lib/dnn_node_example")\n    print("dnn_node_example_path is ", dnn_node_example_path)\n    cp_cmd = "cp -r " + dnn_node_example_path + "/config ."\n    print("cp_cmd is ", cp_cmd)\n    os.system(cp_cmd)\n\n    return LaunchDescription([\n        config_file_launch_arg,\n        img_file_launch_arg,\n        # Launch the package for single RGB human, head, face, hand bounding box and body keypoint detection\n        Node(\n            package=\'dnn_node_example\',\n            executable=\'example\',\n            output=\'screen\',\n            parameters=[\n                {"feed_type": 0},\n                {"config_file": LaunchConfiguration(\n                    \'dnn_example_config_file\')},\n                {"image": LaunchConfiguration(\'dnn_example_image\')},\n                {"image_type": 0},\n                {"dump_render_img": 1}\n            ],\n            arguments=[\'--ros-args\', \'--log-level\', \'info\']\n        )\n    ])\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Launch Script Description\nThe launch script supports selecting the algorithm to run through the configuration file specified by the parameter ",(0,t.jsx)(n.code,{children:"dnn_example_config_file"}),", and the parameter ",(0,t.jsx)(n.code,{children:"dnn_example_image"})," specifies the image used for algorithm inference. The example was not specified at startup, using the default configuration."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The package parameter in the launch script specifies that the package to be launched is named ",(0,t.jsx)(n.code,{children:"dnn_node_example"}),",the ",(0,t.jsx)(n.code,{children:"executable"})," specifies that the executable program is named ",(0,t.jsx)(n.code,{children:"example"}),", and the ",(0,t.jsx)(n.code,{children:"parameters"})," specifies the parameters to be passed to the executable program. For detailed instructions on using ROS2 launch, please refer to the ROS2 manual(",(0,t.jsx)(n.a,{href:"http://docs.ros.org/en/foxy/Tutorials/Intermediate/Launch/Launch-Main.html",children:"http://docs.ros.org/en/foxy/Tutorials/Intermediate/Launch/Launch-Main.html"}),")."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Package and executable program path"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Find in the tros. b in path /opt/tros/of RDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# find /opt/tros/ -name dnn_node_example -type d\n/opt/tros/lib/dnn_node_example\n/opt/tros/share/dnn_node_example\n\n# ls /opt/tros/lib/dnn_node_example\nconfig  example\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The executable program ",(0,t.jsx)(n.code,{children:"example"})," can be found in the path ",(0,t.jsx)(n.code,{children:"/opt/tros/lib/dnn_node_example"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Running the executable program on the Linux image"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Execute the previously found executable program and include the ",(0,t.jsx)(n.code,{children:"parameters"})," parameter from the launch script: ",(0,t.jsx)(n.code,{children:"/opt/tros/lib/dnn_node_example/example --ros-args -p feed_type:=0 -p image_type:=0 -p dump_render_img:=1"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Running the example on the complete Linux image"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Configure the tros.b environment\nexport LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/opt/tros/lib/\nexport ROS_LOG_DIR=/userdata/\n\n# Copy the configuration files needed to run the example from the tros.b installation path. The config directory contains the model used by example and the local images used for backtracking\ncp -r /opt/tros/lib/dnn_node_example/config/ .\n\n# Perform backtracking prediction using local jpg format images and store the rendered images\n/opt/tros/lib/dnn_node_example/example --ros-args -p feed_type:=0 -p image_type:=0 -p dump_render_img:=1\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Note",type:"tip",children:[(0,t.jsxs)(n.p,{children:["In addition to using the environment variable ",(0,t.jsx)(n.code,{children:"ROS_LOG_DIR"})," to set the log path, you can also use the startup parameter ",(0,t.jsx)(n.code,{children:"--ros-args --disable-external-lib-logs"})," to prevent the node from outputting logs to\ndocument."]}),(0,t.jsx)(n.p,{children:"Usage examples:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/opt/tros/lib/\ncp -r /opt/tros/${TROS_DISTRO}/lib/dnn_node_example/config/ .\n/opt/tros/lib/dnn_node_example/example --ros-args --disable-external-lib-logs --ros-args -p feed_type:=0 -p image_type:=0 -p dump_render_img:=1\n"})}),(0,t.jsxs)(n.p,{children:["Detailed description reference",(0,t.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Concepts/Intermediate/About-Logging.html",children:"About-Logging"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-find-the-path-of-the-launch-script",children:"How to find the path of the launch script"}),"\n",(0,t.jsxs)(n.p,{children:["The examples in the manual are launched using ",(0,t.jsx)(n.code,{children:"ros2 launch"}),", for example, in the section ",(0,t.jsx)(n.strong,{children:"Boxs Algorithm Repository"}),", the subsection on ",(0,t.jsx)(n.strong,{children:"Toolchain Reference Algorithm"})," uses the launch script file ",(0,t.jsx)(n.code,{children:"dnn_node_example.launch.py"}),". When modifications such as log level configurations are needed, it is necessary to first find the path of this script file in the ",(0,t.jsx)(n.code,{children:"tros.b"})," installation path ",(0,t.jsx)(n.code,{children:"/opt/tros/"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To find the path of the launch script ",(0,t.jsx)(n.code,{children:"dnn_node_example.launch.py"}),", use the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# find /opt/tros/ -name dnn_node_example.launch.py\n/opt/tros/share/dnn_node_example/launch/dnn_node_example.launch.py\n"})}),"\n",(0,t.jsx)(n.h2,{id:"slow-speed-when-cross-compiling-the-togetherosbot-source-code",children:"Slow speed when cross-compiling the TogetheROS.Bot source code"}),"\n",(0,t.jsx)(n.p,{children:"Due to the large number of packages in tros.b, compiling the source code takes some time (approximately 20 minutes on an 8-core CPU with 32GB of memory). There are two methods to speed up the process:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Minimal compilation"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The compilation script provides two options: ",(0,t.jsx)(n.code,{children:"all_build.sh"})," for complete compilation (the default compilation method in the cross-compilation section of the manual) and ",(0,t.jsx)(n.code,{children:"minimal_build.sh"})," for minimal compilation. Minimal compilation does not compile algorithm examples and test cases, resulting in faster compilation speed."]}),"\n",(0,t.jsxs)(n.p,{children:["To use minimal compilation, replace the command ",(0,t.jsx)(n.code,{children:"./robot_dev_config/all_build.sh"})," with ",(0,t.jsx)(n.code,{children:"./robot_dev_config/minimal_build.sh"})," in the configuration compilation options in the cross-compilation section of the manual."]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Manually ignore unnecessary package compilation"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the package source code directory, create a file named ",(0,t.jsx)(n.code,{children:"COLCON_IGNORE"}),". During compilation, this package will be ignored."]}),"\n",(0,t.jsxs)(n.p,{children:["The downloaded package source code directory is specified in ",(0,t.jsx)(n.code,{children:"robot_dev_config/ros2_release.repos"}),". For example, when downloading ",(0,t.jsx)(n.code,{children:"google_benchmark_vendor"}),", configure it as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"  ament/google_benchmark_vendor:\n    type: git\n    url: https://github.com/ament/google_benchmark_vendor.git\n    version: 0.0.7\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The code of the ",(0,t.jsx)(n.code,{children:"google_benchmark_vendor"})," was downloaded in the path of ",(0,t.jsx)(n.code,{children:"src/ament/google_benchmark_vendor"}),". Therefore, executing the command ",(0,t.jsx)(n.code,{children:"touch src/ament/google_benchmark_vendor/COLCON_IGNORE"})," ignores the compilation of the ",(0,t.jsx)(n.code,{children:"google_benchmark_vendor"})," package."]}),"\n",(0,t.jsx)(n.h2,{id:"do-you-support-installing-and-using-other-versions-of-ros",children:"Do you support installing and using other versions of ROS?"}),"\n",(0,t.jsx)(n.p,{children:"Yes, after installing tros.b on RDK, other versions of ROS, including ROS1, can also be installed and used."}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:"caution"})}),(0,t.jsx)(n.p,{children:"A terminal can only source one version of ROS. For example, after sourcing tros.b, you cannot source ROS2 Foxy or ROS1, or after sourcing ROS2 Foxy or ROS1, you cannot source tros.b again."})]}),"\n",(0,t.jsx)(n.p,{children:"In addition, the interface between tros.b and ROS2 foxy is fully compatible, and ROS2 rich toolkits can be reused without the need to install ROS2 foxy."}),"\n",(0,t.jsx)(n.h2,{id:"colcon-compilation-error",children:"Colcon compilation error"}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"colcon build"})," command is used to compile pkg, the following error is reported:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~/hobot_cam# colcon build\n[4.933s] ERROR:colcon.colcon_core.package_identification:Exception in package identification extension 'ros' in 'hobot_cam': module 'pyparsing' has no attribute 'operatorPrecedence'\nTraceback (most recent call last):\n  File \"/usr/lib/python3/dist-packages/catkin_pkg/condition.py\", line 23, in evaluate_condition\n    expr = _get_condition_expression()\n  File \"/usr/lib/python3/dist-packages/catkin_pkg/condition.py\", line 44, in _get_condition_expression\n    _condition_expression = pp.operatorPrecedence(\nAttributeError: module 'pyparsing' has no attribute 'operatorPrecedence'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Perhaps the version of ",(0,t.jsx)(n.code,{children:"python3-catkin-pkg"})," is lower and the condition function support is incomplete."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Solution"})}),"\n",(0,t.jsxs)(n.p,{children:["Upgrade the version of ",(0,t.jsx)(n.code,{children:"python3-catkin-pkg"})," as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# Add ROS apt source\nsudo apt update && sudo apt install curl gnupg2 lsb-release\nsudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key  -o /usr/share/keyrings/ros-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null\n\n# Delete old version\nsudo apt remove python3-catkin-pkg\n\n# Install old version\nsudo apt update\nsudo apt install python3-catkin-pkg\n'})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-check-the-trosb-version",children:"How to check the tros.b version"}),"\n",(0,t.jsxs)(n.p,{children:["After installing tros.b, log in to the system and use the command ",(0,t.jsx)(n.code,{children:"apt show tros"})," to check the tros.b version."]}),"\n",(0,t.jsx)(n.p,{children:"Taking 2.0.0 version as an example, the tros.b information is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~# apt show tros\nPackage: tros\nVersion: 2.0.0-20230523223852\nMaintainer: kairui.wang <kairui.wang@horizon.ai>\nInstalled-Size: unknown\nDepends: hobot-models-basic, tros-ros-base, tros-ai-msgs, tros-audio-control, tros-audio-msg, tros-audio-tracking, tros-body-tracking, tros-dnn-benchmark-example, tros-dnn-node, tros-dnn-node-example, tros-dnn-node-sample, tros-elevation-net, tros-gesture-control, tros-hand-gesture-detection, tros-hand-lmk-detection, tros-hbm-img-msgs, tros-hobot-app-xrrobot-body-tracking, tros-hobot-app-xrrobot-gesture-control, tros-hobot-codec, tros-hobot-cv, tros-hobot-falldown-detection, tros-hobot-hdmi, tros-hobot-image-publisher, tros-hobot-mot, tros-hobot-usb-cam, tros-image-subscribe-example, tros-img-msgs, tros-imu-sensor, tros-line-follower-model, tros-line-follower-perception, tros-mipi-cam, tros-mono2d-body-detection, tros-mono2d-trash-detection, tros-mono3d-indoor-detection, tros-parking-perception, tros-parking-search, tros-rgbd-sensor, tros-websocket, tros-xrrobot, tros-xrrobot-msgs\nDownload-Size: 980 B\nAPT-Manual-Installed: yes\nAPT-Sources: http://archive.d-robotics.cc/ubuntu-rdk focal/main arm64 Packages\nDescription: TogetheROS Bot\n\nroot@ubuntu:~#\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"failed-to-open-the-webpage-in-a-web-browser",children:"Failed to open the webpage in a web browser"}),"\n",(0,t.jsxs)(n.p,{children:["Symptom: After entering the URL ",(0,t.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," (IP is the IP address of RDK) in the web browser, the webpage fails to open. The possible reasons are as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"nginx service is already running"})}),"\n",(0,t.jsxs)(n.p,{children:["Cause: If the nginx service has already been started on RDK, for example, when running the web display example in RDK (without a port number, in which case entering ",(0,t.jsx)(n.a,{href:"http://IP",children:"http://IP"})," address in the browser can open the webpage), starting the web display example of tros.b again will not start the nginx service, therefore specifying the port number will result in the webpage failing to open."]}),"\n",(0,t.jsx)(n.p,{children:"Solution: Kill the running nginx process on RDK or restart RDK."}),"\n",(0,t.jsx)(n.h2,{id:"only-image-is-displayed-in-the-web-browser-no-perception-result-rendering",children:"Only image is displayed in the web browser, no perception result rendering"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check if the rendering perception result feature is enabled in the web node startup command. For detailed parameter explanation, refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_websocket#%E5%8F%82%E6%95%B0",children:"README of hobot_websocket"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check if there are any error logs outputted in the web node startup terminal. If there are any, follow the prompt to troubleshoot."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the command ",(0,t.jsx)(n.code,{children:"ros2 topic echo [topic name]"})," to confirm if perception result data is present."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the command ",(0,t.jsx)(n.code,{children:"ps -x"})," to check if multiple web nodes are running. If there are any, use the ",(0,t.jsx)(n.code,{children:"kill"})," command to stop all web node processes before restarting."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tros-humble-version-uses-zero-copy",children:"TROS Humble version uses zero copy"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Ubuntu system"})}),"\n",(0,t.jsxs)(n.p,{children:["Reference ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_shm/blob/develop/README_cn.md",children:"hobot_shm"})," instructions for use."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Linux system"})}),"\n",(0,t.jsx)(n.p,{children:"Set up a zero-copy environment using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export RMW_IMPLEMENTATION=rmw_fastrtps_cpp\nexport FASTRTPS_DEFAULT_PROFILES_FILE=/opt/tros/humble/lib/hobot_shm/config/shm_fastdds.xml\nexport RMW_FASTRTPS_USE_QOS_FROM_XML=1\nexport ROS_DISABLE_LOANED_MESSAGES=0\n"})}),"\n",(0,t.jsx)(n.p,{children:"The above commands also apply to Ubuntu systems."}),"\n",(0,t.jsxs)(n.p,{children:["For the description of environment variables, please refer to ",(0,t.jsx)(n.a,{href:"https://fast-dds.docs.eprosima.com/en/latest/fastdds/ros2/ros2.html",children:"ROS 2 using Fast DDS middleware"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Check if zero copy is used to transfer data"})}),"\n",(0,t.jsx)(n.p,{children:"After starting the program, use the command to check whether a memory mapped file is generated. If there is, it means that zero copy has been used to transfer data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ll -thr /dev/shm/fast_datasharing* /dev/shm/fastrtps_*\n"})}),"\n",(0,t.jsx)(n.p,{children:"Usage examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set up a zero-copy environment"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# source /opt/tros/humble/setup.bash\nroot@ubuntu:~# export RMW_IMPLEMENTATION=rmw_fastrtps_cpp\nroot@ubuntu:~# export FASTRTPS_DEFAULT_PROFILES_FILE=/opt/tros/humble/lib/hobot_shm/config/shm_fastdds.xml\nroot@ubuntu:~# export RMW_FASTRTPS_USE_QOS_FROM_XML=1\nroot@ubuntu:~# export ROS_DISABLE_LOANED_MESSAGES=0\nroot@ubuntu:~# ll -thr /dev/shm/fast_datasharing* /dev/shm/fastrtps_*\nls: cannot access '/dev/shm/fast_datasharing*': No such file or directory\nls: cannot access '/dev/shm/fastrtps_*': No such file or directory\n"})}),"\n",(0,t.jsx)(n.p,{children:"It can be seen that no memory mapped file is generated when only a zero-copy environment is set, because the memory mapped file needs to be created by the program."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Run mipi_cam node to publish data through zero copy"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\nros2 launch mipi_cam mipi_cam.launch.py mipi_video_device:=F37\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View memory mapped files again"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# ll -thr /dev/shm/fast_datasharing* /dev/shm/fastrtps_*\n-rw-r--r-- 1 root root 0 Mar 26 14:01 /dev/shm/fastrtps_311b4cf8328b77f9_el\n-rw-r--r-- 1 root root 537K Mar 26 14:01 /dev/shm/fastrtps_311b4cf8328b77f9\n-rw-r--r-- 1 root root 36M Mar 26 14:01 /dev/shm/fast_datasharing_01.0f.1d.90.d8.ac.a8.ff.01.00.00.00_0.0.1f.3\n-rw-r--r-- 1 root root 0 Mar 26 14:17 /dev/shm/fastrtps_eef6d2045292439c_el\n-rw-r--r-- 1 root root 537K Mar 26 14:17 /dev/shm/fastrtps_eef6d2045292439c\n-rw-r--r-- 1 root root 0 Mar 26 14:17 /dev/shm/fastrtps_port17913_el\n-rw-r--r-- 1 root root 52K Mar 26 14:17 /dev/shm/fastrtps_port17913\n-rw-r--r-- 1 root root 36M Mar 26 14:17 /dev/shm/fast_datasharing_01.0f.1d.90.21.42.cb.90.01.00.00.00_0.0.1f.3\n"})}),"\n",(0,t.jsx)(n.p,{children:"The above log shows that after enabling the zero-copy function and running mipi_cam node, multiple files appear in the /dev/shm directory, indicating that mipi_cam node** supports the use of zero-copy** to publish data."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Start zero-copy message subscription"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\nros2 launch hobot_codec hobot_codec.launch.py codec_in_mode:=shared_mem codec_in_format:=nv12 codec_out_mode:=ros codec_out_format:=jpeg codec_sub_topic:=/hbmem_img codec_pub_topic:=/image_jpeg\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View memory mapped files again"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# ll -thr /dev/shm/fast_datasharing* /dev/shm/fastrtps_*\n-rw-r--r-- 1 root root 0 Mar 26 14:01 /dev/shm/fastrtps_311b4cf8328b77f9_el\n-rw-r--r-- 1 root root 537K Mar 26 14:01 /dev/shm/fastrtps_311b4cf8328b77f9\n-rw-r--r-- 1 root root 36M Mar 26 14:01 /dev/shm/fast_datasharing_01.0f.1d.90.d8.ac.a8.ff.01.00.00.00_0.0.1f.3\n-rw-r--r-- 1 root root 0 Mar 26 14:17 /dev/shm/fastrtps_eef6d2045292439c_el\n-rw-r--r-- 1 root root 537K Mar 26 14:17 /dev/shm/fastrtps_eef6d2045292439c\n-rw-r--r-- 1 root root 0 Mar 26 14:17 /dev/shm/fastrtps_port17913_el\n-rw-r--r-- 1 root root 52K Mar 26 14:17 /dev/shm/fastrtps_port17913\n-rw-r--r-- 1 root root 36M Mar 26 14:17 /dev/shm/fast_datasharing_01.0f.1d.90.21.42.cb.90.01.00.00.00_0.0.1f.3\n-rw-r--r-- 1 root root 0 Mar 26 14:19 /dev/shm/fastrtps_dbda9faf3f77dee0_el\n-rw-r--r-- 1 root root 537K Mar 26 14:19 /dev/shm/fastrtps_dbda9faf3f77dee0\n-rw-r--r-- 1 root root 0 Mar 26 14:19 /dev/shm/fastrtps_port17915_el\n-rw-r--r-- 1 root root 52K Mar 26 14:19 /dev/shm/fastrtps_port17915\n-rw-r--r-- 1 root root 22K Mar 26 14:19 /dev/shm/fast_datasharing_01.0f.1d.90.23.5d.bd.63.01.00.00.00_0.0.1e.4\nroot@ubuntu:~#\nroot@ubuntu:~# lsof /dev/shm/fast_datasharing*\nCOMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME\nmipi_cam 2507297 root mem REG 0,17 37327756 18131245 /dev/shm/fast_datasharing_01.0f.1d.90.21.42.cb.90.01.00.00.00_0.0.1f.3\nmipi_cam 2507297 root mem REG 0,17 21656 18149313 /dev/shm/fast_datasharing_01.0f.1d.90.23.5d.bd.63.01.00.00.00_0.0.1e.4\nhobot_cod 2514211 root mem REG 0,17 37327756 18131245 /dev/shm/fast_datasharing_01.0f.1d.90.21.42.cb.90.01.00.00.00_0.0.1f.3\nhobot_cod 2514211 root mem REG 0,17 21656 18149313 /dev/shm/fast_datasharing_01.0f.1d.90.23.5d.bd.63.01.00.00.00_0.0.1e.4\n"})}),"\n",(0,t.jsx)(n.p,{children:"It can be seen that new memory mapped files have appeared in the /dev/shm directory, and these files are occupied by the mipi_cam and hobot_codec processes, indicating that the hobot_codec node is subscribing to the data published by the mipi_cam node through zero copy."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Disable zero copy functionality"})}),"\n",(0,t.jsxs)(n.p,{children:["Disable the zero-copy function through the environment variable ",(0,t.jsx)(n.code,{children:"ROS_DISABLE_LOANED_MESSAGES"}),", which has the highest control priority:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export ROS_DISABLE_LOANED_MESSAGES=1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For detailed instructions on disabling the zero-copy function configuration, refer to ",(0,t.jsx)(n.a,{href:"https://docs.ros.org/en/humble/How-To-Guides/Configure-ZeroCopy-loaned-messages.html#how-to-disable-loaned-messages",children:"how-to-disable-loaned-messages"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);