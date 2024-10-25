"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[854],{76161:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=s(74848),t=s(28453),r=s(93859),a=s(19365);const l={sidebar_position:1},c='5.5.1 Using "zero-copy"',o={id:"Robot_development/tros_dev/zero_copy",title:'5.5.1 Using "zero-copy"',description:"Background",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/05_tros_dev/zero_copy.md",sourceDirName:"05_Robot_development/05_tros_dev",slug:"/Robot_development/tros_dev/zero_copy",permalink:"/rdk_doc/en/Robot_development/tros_dev/zero_copy",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/05_Robot_development/05_tros_dev/zero_copy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"5.4.8 Car Parking Space Search",permalink:"/rdk_doc/en/Robot_development/apps/parking_search"},next:{title:"5.5.2 Model Inference",permalink:"/rdk_doc/en/Robot_development/tros_dev/ai_predict"}},d={},m=[{value:"Background",id:"background",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"1. Create a package",id:"1-create-a-package",level:3},{value:"2. Create a custom message",id:"2-create-a-custom-message",level:3},{value:"2.1 Create a message file",id:"21-create-a-message-file",level:4},{value:"2.2 Dependency Compilation",id:"22-dependency-compilation",level:4},{value:"2.3 Compilation Script",id:"23-compilation-script",level:4},{value:"3. Create Message Publishing Node",id:"3-create-message-publishing-node",level:3},{value:"3.1 Create a New Message Publishing Node File",id:"31-create-a-new-message-publishing-node-file",level:4},{value:"3.2 Compilation Dependencies",id:"32-compilation-dependencies",level:4},{value:"3.3 Compilation Script",id:"33-compilation-script",level:4},{value:"4. Create Message Reception Node",id:"4-create-message-reception-node",level:3},{value:"4.1 Create a New Message Reception Node File",id:"41-create-a-new-message-reception-node-file",level:4},{value:"4.2 Build script",id:"42-build-script",level:4},{value:"5. Build",id:"5-build",level:3},{value:"6. Run",id:"6-run",level:3},{value:"Summary of this section",id:"summary-of-this-section",level:2},{value:"Limitations",id:"limitations",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"551-using-zero-copy",children:'5.5.1 Using "zero-copy"'}),"\n","\n",(0,i.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(n.p,{children:'Communication is a fundamental function of the robot development engine. When using native ROS for large-scale data communication, there may be issues such as high latency and system load. TogetheROS.Bot implements the "zero-copy" feature based on the D-Robotics Systems software library hbmem, which enables zero-copy transmission of data across processes, greatly reducing transmission latency and system resource usage for large data blocks. This section explains how to use the tros.b hbmem interface to create a publisher and subscriber node for large-scale data transmission, and calculate transmission latency.'}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The tros.b Foxy version adds a "zero-copy" function based on ROS2 Foxy.'}),"\n",(0,i.jsxs)(n.li,{children:['The tros.b Humble version uses the "zero-copy" function of ROS2 Humble. For specific usage, please refer to the ROS2 official ',(0,i.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Tutorials/Advanced/FastDDS-Configuration.html#",children:"document"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/ros2/demos/blob/humble/demo_nodes_cpp/src/topics/talker_loaned_message.cpp",children:"code"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["tros.b has been successfully installed following the guide ",(0,i.jsx)(n.a,{href:"/rdk_doc/en/Robot_development/quick_start/install_tros",children:"Installation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Familiarity with ROS2 nodes, topics, QoS, as well as creating packages and using custom messages. For detailed tutorials, please refer to the ",(0,i.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Tutorials.html",children:"official ROS2 documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ROS2 package build system ament_cmake has been installed. Installation command: ",(0,i.jsx)(n.code,{children:"apt update; apt-get install python3-catkin-pkg; pip3 install empy"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Development tools: Compilers and other tools to build ROS packages. ",(0,i.jsx)(n.code,{children:"sudo apt install ros-dev-tools"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"1-create-a-package",children:"1. Create a package"}),"\n",(0,i.jsxs)(n.p,{children:["Open a new terminal and source the tros.b setup script to ensure that the ",(0,i.jsx)(n.code,{children:"ros2"})," command can be run."]}),"\n",(0,i.jsxs)(r.A,{groupId:"tros-distro",children:[(0,i.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/setup.bash\n"})})}),(0,i.jsx)(a.A,{value:"humble",label:"Humble",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Create a workspace using the following command. For detailed instructions, refer to the ROS2 official tutorial ",(0,i.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Tutorials/Workspace/Creating-A-Workspace.html",children:"Creating a workspace"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mkdir -p ~/dev_ws/src\ncd ~/dev_ws/src\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run the following command to create a package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ros2 pkg create --build-type ament_cmake hbmem_pubsub\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-create-a-custom-message",children:"2. Create a custom message"}),"\n",(0,i.jsx)(n.h4,{id:"21-create-a-message-file",children:"2.1 Create a message file"}),"\n",(0,i.jsxs)(n.p,{children:["Run the following command to create a ",(0,i.jsx)(n.code,{children:"msg"})," directory to store the custom message file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd ~/dev_ws/src/hbmem_pubsub\nmkdir msg\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"msg"})," directory, create a new file named ",(0,i.jsx)(n.code,{children:"SampleMessage.msg"})," with the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-idl",children:"int32 index\nuint64 time_stamp\nuint8[4194304] data\n\nuint32 MAX_SIZE=4194304\n"})}),"\n",(0,i.jsx)(n.h4,{id:"22-dependency-compilation",children:"2.2 Dependency Compilation"}),"\n",(0,i.jsxs)(n.p,{children:["Return to the ",(0,i.jsx)(n.code,{children:"~/dev_ws/src/hbmem_pubsub"})," directory and modify ",(0,i.jsx)(n.code,{children:"package.xml"}),". Add the following content under ",(0,i.jsx)(n.code,{children:"<buildtool_depend>ament_cmake</buildtool_depend>"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"  <build_depend>rosidl_default_generators</build_depend>\n  <exec_depend>rosidl_default_runtime</exec_depend>\n  <member_of_group>rosidl_interface_packages</member_of_group>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"23-compilation-script",children:"2.3 Compilation Script"}),"\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"CMakeLists.txt"})," and add the following content under ",(0,i.jsx)(n.code,{children:"# find_package(<dependency> REQUIRED)"})," to compile the msg:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:'find_package(rosidl_default_generators REQUIRED)\nrosidl_generate_interfaces(${PROJECT_NAME}\n  "msg/SampleMessage.msg"\n)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-create-message-publishing-node",children:"3. Create Message Publishing Node"}),"\n",(0,i.jsx)(n.h4,{id:"31-create-a-new-message-publishing-node-file",children:"3.1 Create a New Message Publishing Node File"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"~/dev_ws/src/hbmem_pubsub/src"})," directory, create a new file named ",(0,i.jsx)(n.code,{children:"publisher_hbmem.cpp"}),". This file is used to create the publisher node. The code and explanation are as follows:"]}),"\n",(0,i.jsxs)(r.A,{groupId:"tros-distro",children:[(0,i.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'#include <chrono>\n#include <functional>\n#include <memory>\n#include <string>\n\n#include "rclcpp/rclcpp.hpp"\n#include "hbmem_pubsub/msg/sample_message.hpp"\n\nusing namespace std::chrono_literals;\n\nclass MinimalHbmemPublisher : public rclcpp::Node {\n public:\n  MinimalHbmemPublisher() : Node("minimal_hbmem_publisher"), count_(0) {\n    // Create publisher_hbmem, topic is "topic", QoS is KEEPLAST(10), and default reliability\n    publisher_ = this->create_publisher_hbmem<hbmem_pubsub::msg::SampleMessage>(\n        "topic", 10);\n\n    // Timer, calls timer_callback every 40 milliseconds for message publishing\n    timer_ = this->create_wall_timer(\n        40ms, std::bind(&MinimalHbmemPublisher::timer_callback, this));\n  }\n\n private:\n  // Timer callback function\n  void timer_callback() {\n    // Get the message to send\n    auto loanedMsg = publisher_->borrow_loaned_message();\n    // Check if the message is valid, it may become invalid if borrowing the message fails\n    if (loanedMsg.is_valid()) {\n      // Get the actual message by reference\n      auto& msg = loanedMsg.get();\n      \n      // Get the current time in microseconds\n      auto time_now =\n          std::chrono::duration_cast<std::chrono::microseconds>(\n              std::chrono::steady_clock::now().time_since_epoch()).count();\n      \n      // Assign values to the index and time_stamp of the message\n      msg.index = count_;\n      msg.time_stamp = time_now;\n      \n      // Print the message to be sent\n      RCLCPP_INFO(this->get_logger(), "message: %d", msg.index);\n      publisher_->publish(std::move(loanedMsg));\n      // Note that loanedMsg is no longer valid after publishing\n      // Increment the counter\n      count_++;\n    } else {\n      // Failed to get the message, discard it\n      RCLCPP_INFO(this->get_logger(), "Failed to get LoanMessage!");\n    }\n  }\n  \n  // Timer\n  rclcpp::TimerBase::SharedPtr timer_;\n\n  // Hbmem publisher\n  rclcpp::PublisherHbmem<hbmem_pubsub::msg::SampleMessage>::SharedPtr publisher_;\n\n  size_t count_;\n};\n\nint main(int argc, char * argv[])\n{\n  rclcpp::init(argc, argv);\n  rclcpp::spin(std::make_shared<MinimalHbmemPublisher>());\n  rclcpp::shutdown();\n  return 0;\n}\n\n'})})}),(0,i.jsx)(a.A,{value:"humble",label:"Humble",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'#include <chrono>\n#include <functional>\n#include <memory>\n#include <string>\n\n#include "rclcpp/rclcpp.hpp"\n#include "hbmem_pubsub/msg/sample_message.hpp"\n\nusing namespace std::chrono_literals;\n\nclass MinimalHbmemPublisher  : public rclcpp::Node {\n public:\n  MinimalHbmemPublisher () : Node("minimal_hbmem_publisher"), count_(0) {\n    publisher_ = this->create_publisher<hbmem_pubsub::msg::SampleMessage>(\n        "topic", rclcpp::SensorDataQoS());\n\n    timer_ = this->create_wall_timer(\n        40ms, std::bind(&MinimalHbmemPublisher ::timer_callback, this));\n  }\n\n private:\n  void timer_callback() {\n    auto loanedMsg = publisher_->borrow_loaned_message();\n    if (loanedMsg.is_valid()) {\n      auto& msg = loanedMsg.get();\n      \n      auto time_now =\n          std::chrono::duration_cast<std::chrono::microseconds>(\n              std::chrono::steady_clock::now().time_since_epoch()).count();\n      \n      msg.index = count_;\n      msg.time_stamp = time_now;\n      \n      RCLCPP_INFO(this->get_logger(), "message: %d", msg.index);\n      publisher_->publish(std::move(loanedMsg));\n      count_++;\n    } else {\n      RCLCPP_INFO(this->get_logger(), "Failed to get LoanMessage!");\n    }\n  }\n  \n  rclcpp::TimerBase::SharedPtr timer_;\n  rclcpp::Publisher<hbmem_pubsub::msg::SampleMessage>::SharedPtr publisher_;\n  size_t count_;\n};\n\nint main(int argc, char * argv[])\n{\n  rclcpp::init(argc, argv);\n  rclcpp::spin(std::make_shared<MinimalHbmemPublisher>());\n  rclcpp::shutdown();\n  return 0;\n}\n'})})})]}),"\n",(0,i.jsx)(n.h4,{id:"32-compilation-dependencies",children:"3.2 Compilation Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["Go back to the ",(0,i.jsx)(n.code,{children:"~/dev_ws/src/hbmem_pubsub"})," directory, modify the ",(0,i.jsx)(n.code,{children:"package.xml"}),", and add the ",(0,i.jsx)(n.code,{children:"rclcpp"})," dependency under ",(0,i.jsx)(n.code,{children:"<member_of_group>rosidl_interface_packages</member_of_group>"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"  <depend>rclcpp</depend>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"33-compilation-script",children:"3.3 Compilation Script"}),"\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"CMakeLists.txt"}),", add the following content below the ",(0,i.jsx)(n.code,{children:"rosidl_generate_interfaces"})," statement to complete the publisher compilation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:'find_package(rclcpp REQUIRED)\n\nadd_executable(talker src/publisher_hbmem.cpp)\nament_target_dependencies(talker rclcpp)\nrosidl_target_interfaces(talker\n  ${PROJECT_NAME} "rosidl_typesupport_cpp")\n\ninstall(TARGETS\n  talker\n  DESTINATION lib/${PROJECT_NAME})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"4-create-message-reception-node",children:"4. Create Message Reception Node"}),"\n",(0,i.jsx)(n.h4,{id:"41-create-a-new-message-reception-node-file",children:"4.1 Create a New Message Reception Node File"}),"\n",(0,i.jsxs)(n.p,{children:["Create a new file ",(0,i.jsx)(n.code,{children:"subscriber_hbmem.cpp"})," in the ",(0,i.jsx)(n.code,{children:"~/dev_ws/src/hbmem_pubsub/src"})," directory to establish a subscriber node. The specific code and explanation are as follows:"]}),"\n",(0,i.jsxs)(r.A,{groupId:"tros-distro",children:[(0,i.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'#include <memory>\n\n#include "rclcpp/rclcpp.hpp"\n#include "hbmem_pubsub/msg/sample_message.hpp"\n\n\nclass MinimalHbmemSubscriber  : public rclcpp::Node {\n public:\n  MinimalHbmemSubscriber () : Node("minimal_hbmem_subscriber") {\n    // Create subscription_hbmem with topic "sample", QoS as KEEPLAST(10), and default reliability\n    // Message callback function is topic_callback\n    subscription_ =\n        this->create_subscription_hbmem<hbmem_pubsub::msg::SampleMessage>(\n            "topic", 10,\n            std::bind(&MinimalHbmemSubscriber ::topic_callback, this,\n                      std::placeholders::_1));\n  }\n\n private:\n  // Message callback function\n  void topic_callback(\n      const hbmem_pubsub::msg::SampleMessage::SharedPtr msg) const {\n    // Note that msg can only be used within the callback function, the message will be released after the callback function returns\n    // Get current time\n    auto time_now =\n        std::chrono::duration_cast<std::chrono::microseconds>(\n            std::chrono::steady_clock::now().time_since_epoch())\n            .count();\n    // Calculate delay and print it out\n    RCLCPP_INFO(this->get_logger(), "msg %d, time cost %dus", msg->index,\n                time_now - msg->time_stamp);\n  }\n  \n  // hbmem subscription\n  rclcpp::SubscriptionHbmem<hbmem_pubsub::msg::SampleMessage>::SharedPtr\n      subscription_;\n};\n\n\nint main(int argc, char * argv[])\n{\n  rclcpp::init(argc, argv);\n  rclcpp::spin(std::make_shared<MinimalHbmemSubscriber>());\n  rclcpp::shutdown();\n  return 0;\n}\n\n'})})}),(0,i.jsx)(a.A,{value:"humble",label:"Humble",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'#include <memory>\n\n#include "rclcpp/rclcpp.hpp"\n#include "hbmem_pubsub/msg/sample_message.hpp"\n\nclass MinimalHbmemSubscriber  : public rclcpp::Node {\n public:\n  MinimalHbmemSubscriber () : Node("minimal_hbmem_subscriber") {\n    subscription_ =\n        this->create_subscription<hbmem_pubsub::msg::SampleMessage>(\n            "topic", rclcpp::SensorDataQoS(),\n            std::bind(&MinimalHbmemSubscriber ::topic_callback, this,\n                      std::placeholders::_1));\n  }\n\n private:\n  void topic_callback(\n      const hbmem_pubsub::msg::SampleMessage::SharedPtr msg) const {\n    auto time_now =\n        std::chrono::duration_cast<std::chrono::microseconds>(\n            std::chrono::steady_clock::now().time_since_epoch())\n            .count();\n    RCLCPP_INFO(this->get_logger(), "msg %d, time cost %dus", msg->index,\n                time_now - msg->time_stamp);\n  }\n  \n  // hbmem subscription\n  rclcpp::Subscription<hbmem_pubsub::msg::SampleMessage>::SharedPtr\n      subscription_;\n};\n\n\nint main(int argc, char * argv[])\n{\n  rclcpp::init(argc, argv);\n  rclcpp::spin(std::make_shared<MinimalHbmemSubscriber>());\n  rclcpp::shutdown();\n  return 0;\n}\n'})})})]}),"\n",(0,i.jsx)(n.h4,{id:"42-build-script",children:"4.2 Build script"}),"\n",(0,i.jsxs)(n.p,{children:["Go back to the ",(0,i.jsx)(n.code,{children:"~/dev_ws/src/hbmem_pubsub"})," directory, as we have added the ",(0,i.jsx)(n.code,{children:"rclcpp"})," dependency in the ",(0,i.jsx)(n.code,{children:"package.xml"}),", there is no need to modify it."]}),"\n",(0,i.jsxs)(n.p,{children:["Modify the ",(0,i.jsx)(n.code,{children:"CMakeLists.txt"})," file, add the following content below the ",(0,i.jsx)(n.code,{children:"install"})," statement, to complete the build of the subscriber:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:'add_executable(listener src/subscriber_hbmem.cpp)\nament_target_dependencies(listener rclcpp)\nrosidl_target_interfaces(listener\n  ${PROJECT_NAME} "rosidl_typesupport_cpp")\n\ninstall(TARGETS\n  listener\n  DESTINATION lib/${PROJECT_NAME})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"5-build",children:"5. Build"}),"\n",(0,i.jsx)(n.p,{children:"The directory structure of the entire workspace is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"dev_ws/\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 hbmem_pubsub\n        \u251c\u2500\u2500 CMakeLists.txt\n        \u251c\u2500\u2500 include\n        \u2502   \u2514\u2500\u2500 hbmem_pubsub\n        \u251c\u2500\u2500 msg\n        \u2502   \u2514\u2500\u2500 SampleMessage.msg\n        \u251c\u2500\u2500 package.xml\n        \u2514\u2500\u2500 src\n            \u251c\u2500\u2500 publisher_hbmem.cpp\n            \u2514\u2500\u2500 subscriber_hbmem.cpp\n"})}),"\n",(0,i.jsxs)(n.p,{children:["entire ",(0,i.jsx)(n.code,{children:"package.xml"}),"as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0"?>\n<?xml-model href="http://download.ros.org/schema/package_format3.xsd" schematypens="http://www.w3.org/2001/XMLSchema"?>\n<package format="3">\n  <name>hbmem_pubsub</name>\n  <version>0.0.0</version>\n  <description>TODO: Package description</description>\n  <maintainer email="root@todo.todo">root</maintainer>\n  <license>TODO: License declaration</license>\n\n  <buildtool_depend>ament_cmake</buildtool_depend>\n\n  <build_depend>rosidl_default_generators</build_depend>\n  <exec_depend>rosidl_default_runtime</exec_depend>\n  <member_of_group>rosidl_interface_packages</member_of_group>\n\n  <depend>rclcpp</depend>\n\n  <test_depend>ament_lint_auto</test_depend>\n  <test_depend>ament_lint_common</test_depend>\n\n  <export>\n    <build_type>ament_cmake</build_type>\n  </export>\n</package>\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The complete ",(0,i.jsx)(n.code,{children:"CMakeLists.txt"})," content is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:'cmake_minimum_required(VERSION 3.5)\nproject(hbmem_pubsub)\n\n# Default to C99\nif(NOT CMAKE_C_STANDARD)\n  set(CMAKE_C_STANDARD 99)\nendif()\n\n# Default to C++14\nif(NOT CMAKE_CXX_STANDARD)\n  set(CMAKE_CXX_STANDARD 14)\nendif()\n\nif(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")\n  add_compile_options(-Wall -Wextra -Wpedantic)\nendif()\n\n# find dependencies\nfind_package(ament_cmake REQUIRED)\n# uncomment the following section in order to fill in\n# further dependencies manually.\n# find_package(<dependency> REQUIRED)\nfind_package(rosidl_default_generators REQUIRED)\n\nrosidl_generate_interfaces(${PROJECT_NAME}\n  "msg/SampleMessage.msg"\n)\n\nfind_package(rclcpp REQUIRED)\n\nadd_executable(talker src/publisher_hbmem.cpp)\nament_target_dependencies(talker rclcpp)\nrosidl_target_interfaces(talker\n  ${PROJECT_NAME} "rosidl_typesupport_cpp")\n\ninstall(TARGETS\n  talker\n  DESTINATION lib/${PROJECT_NAME})\n\nadd_executable(listener src/subscriber_hbmem.cpp)\nament_target_dependencies(listener rclcpp)\nrosidl_target_interfaces(listener\n  ${PROJECT_NAME} "rosidl_typesupport_cpp")\n\ninstall(TARGETS\n  listener\n  DESTINATION lib/${PROJECT_NAME})\n\nif(BUILD_TESTING)\n  find_package(ament_lint_auto REQUIRED)\n  # the following line skips the linter which checks for copyrights\n  # uncomment the line when a copyright and license is not present in all source files\n  #set(ament_cmake_copyright_FOUND TRUE)\n  # the following line skips cpplint (only works in a git repo)\n  # uncomment the line when this package is not in a git repo\n  #set(ament_cmake_cpplint_FOUND TRUE)\n  ament_lint_auto_find_test_dependencies()\nendif()\n\nament_package()\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the workspace root directory ",(0,i.jsx)(n.code,{children:"~/dev_ws"}),", build the package:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"colcon build --packages-select hbmem_pubsub\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"colcon"})," command is not installed, use the following command to install it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo apt install ros-dev-tools\n"})}),"\n",(0,i.jsx)(n.h3,{id:"6-run",children:"6. Run"}),"\n",(0,i.jsx)(n.p,{children:"Open a new terminal, cd to the dev_ws directory, source tros.b and the current workspace setup file:"}),"\n",(0,i.jsxs)(r.A,{groupId:"tros-distro",children:[(0,i.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/setup.bash\ncd ~/dev_ws\n. install/setup.bash\nros2 run hbmem_pubsub talker\n"})})}),(0,i.jsx)(a.A,{value:"humble",label:"Humble",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\ncd ~/dev_ws\n. install/setup.bash\nexport RMW_IMPLEMENTATION=rmw_fastrtps_cpp\nexport FASTRTPS_DEFAULT_PROFILES_FILE=/opt/tros/humble/lib/hobot_shm/config/shm_fastdds.xml\nexport RMW_FASTRTPS_USE_QOS_FROM_XML=1\nexport ROS_DISABLE_LOANED_MESSAGES=0\nros2 run hbmem_pubsub talker\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"On the terminal, the following prints will appear:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"[INFO] [1649227473.431381673] [minimal_hbmem_publisher]: message: 0\n[INFO] [1649227473.470746697] [minimal_hbmem_publisher]: message: 1\n[INFO] [1649227473.510923361] [minimal_hbmem_publisher]: message: 2\n[INFO] [1649227473.550886783] [minimal_hbmem_publisher]: message: 3\n[INFO] [1649227473.590664377] [minimal_hbmem_publisher]: message: 4\n[INFO] [1649227473.630857041] [minimal_hbmem_publisher]: message: 5\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Open another terminal and ",(0,i.jsx)(n.code,{children:"cd"})," to the ",(0,i.jsx)(n.code,{children:"dev_ws"})," directory, then source the setup file and run the listener node:"]}),"\n",(0,i.jsxs)(r.A,{groupId:"tros-distro",children:[(0,i.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/setup.bash\ncd ~/dev_ws\n. install/setup.bash\n\nros2 run hbmem_pubsub listener\n"})})}),(0,i.jsx)(a.A,{value:"humble",label:"Humble",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\ncd ~/dev_ws\n. install/setup.bash\nexport RMW_IMPLEMENTATION=rmw_fastrtps_cpp\nexport FASTRTPS_DEFAULT_PROFILES_FILE=/opt/tros/humble/lib/hobot_shm/config/shm_fastdds.xml\nexport RMW_FASTRTPS_USE_QOS_FROM_XML=1\nexport ROS_DISABLE_LOANED_MESSAGES=0\nros2 run hbmem_pubsub listener\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"On the terminal, the following prints will appear, indicating that the subscriber has successfully received the messages sent by the publisher:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"[INFO] [1649227450.387089523] [minimal_hbmem_subscriber]: msg 10, time cost 1663us\n[INFO] [1649227450.427071280] [minimal_hbmem_subscriber]: msg 11, time cost 1713us\n[INFO] [1649227450.466993413] [minimal_hbmem_subscriber]: msg 12, time cost 1622us\n[INFO] [1649227450.507029960] [minimal_hbmem_subscriber]: msg 13, time cost 1666us\n[INFO] [1649227450.546146910] [minimal_hbmem_subscriber]: msg 14, time cost 998us\n[INFO] [1649227450.587002681] [minimal_hbmem_subscriber]: msg 15, time cost 1768us\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"Ctrl+C"})," to end the execution of each node."]}),"\n",(0,i.jsx)(n.h2,{id:"summary-of-this-section",children:"Summary of this section"}),"\n",(0,i.jsxs)(r.A,{groupId:"tros-distro",children:[(0,i.jsxs)(a.A,{value:"foxy",label:"Foxy",children:[(0,i.jsx)(n.p,{children:"If you have learned how to use ROS2 publishers and subscribers, it is easy to switch to using hbmem publishers and subscribers. You just need to make the following changes:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"rclcpp::Publisher"})," to ",(0,i.jsx)(n.strong,{children:"rclcpp::PublisherHbmem"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"create_publisher"})," to ",(0,i.jsx)(n.strong,{children:"create_publisher_hbmem"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"rclcpp::Subscription"})," to ",(0,i.jsx)(n.strong,{children:"rclcpp::SubscriptionHbmem"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"create_subscription"})," to ",(0,i.jsx)(n.strong,{children:"create_subscription_hbmem"})]}),"\n",(0,i.jsxs)(n.li,{children:["In the publisher, call ",(0,i.jsx)(n.strong,{children:"borrow_loaned_message"})," to get the message, then ",(0,i.jsx)(n.strong,{children:"check if the message is available"}),", and if it is, assign the value and send it."]}),"\n",(0,i.jsxs)(n.li,{children:["In the subscriber, process the received message in the callback function, and ",(0,i.jsx)(n.strong,{children:"the received message can only be used in the callback function"}),". Once the callback function is executed, the message will be released."]}),"\n"]}),(0,i.jsx)(n.p,{children:"Note:- Using zero-copy based on hbmem will occupy ion memory. If multiple large messages publishers are created, there may be insufficient ion memory, resulting in creation failure issues."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When creating a publisher, ion memory that is three times the size of KEEPLAST multiplied by the number of messages will be requested at one time (up to 256MB maximum), which is used for message transmission and will not be dynamically allocated afterwards. If there is an error in message handling on the subscriber side or if it is not processed in a timely manner, the message buffer may be fully occupied, causing the publisher to continuously fail to obtain available messages."}),"\n"]})]}),(0,i.jsxs)(a.A,{value:"humble",label:"Humble",children:[(0,i.jsx)(n.p,{children:"If you have mastered how to use ROS2 publisher and subscriber, it is easy to switch to using zero-copy publisher and subscriber. You only need to make the following changes when using it:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"publisher"})," must first call ",(0,i.jsx)(n.strong,{children:"borrow_loaned_message"})," to obtain the message before sending it, and then ",(0,i.jsx)(n.strong,{children:"confirm whether the message is available"}),". If it is available, assign it and send it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"subscription"})," processes the received message in the callback function, and ",(0,i.jsx)(n.strong,{children:"the received message can only be used"})," in the callback function. After the callback function is executed, the message will be released"]}),"\n",(0,i.jsxs)(n.li,{children:["Before ",(0,i.jsx)(n.strong,{children:"running"})," the program, use the export command to configure a zero-copy environment in the running terminal."]}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(n.p,{children:"Compared to the publisher/subscriber data transmission method in ROS2, using zero-copy transmission based on hbmem has the following limitations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"QOS History only supports KEEPLAST and does not support KEEPALL. Additionally, KEEPLAST cannot be set too large due to memory limitations. Currently, it is set to a maximum of 256MB memory usage."}),"\n",(0,i.jsxs)(n.li,{children:["The size of the transmitted message is fixed, meaning the ",(0,i.jsx)(n.code,{children:"sizeof"})," value of the message remains unchanged and cannot include variable-length data types such as strings or dynamic arrays."]}),"\n",(0,i.jsx)(n.li,{children:"It can only be used for inter-process communication on the same device and cannot be transmitted across devices."}),"\n",(0,i.jsx)(n.li,{children:"Publisher messages need to be obtained first and then assigned for sending, and it needs to be checked if the acquisition is successful."}),"\n",(0,i.jsx)(n.li,{children:"The validity period of received messages on the subscriber side is limited to the callback function and cannot be used outside of the callback function."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var i=s(34164);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,a),hidden:s,children:n})}},93859:(e,n,s)=>{s.d(n,{A:()=>y});var i=s(96540),t=s(34164),r=s(86641),a=s(56347),l=s(205),c=s(38874),o=s(24035),d=s(82993);function m(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}}))}(s);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=u(e),[a,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[o,m]=p({queryString:s,groupId:t}),[b,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,d.Dv)(s);return[t,(0,i.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),_=(()=>{const e=o??b;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{_&&c(_)}),[_]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),g(e)}),[m,g,r]),tabValues:r}}var g=s(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(74848);function f(e){let{className:n,block:s,selectedValue:i,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),t=l[s].value;t!==i&&(o(n),a(t))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:m,onClick:d,...r,className:(0,t.A)("tabs__item",_.tabItem,r?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",_.tabList),children:[(0,x.jsx)(f,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:m(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);