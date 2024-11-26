"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5263],{33135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),o=t(93859),a=t(19365);const i={sidebar_position:5},l="5.2.5 Communication",c={id:"Robot_development/quick_demo/demo_communication",title:"5.2.5 Communication",description:"Zero-copy",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/02_quick_demo/demo_communication.md",sourceDirName:"05_Robot_development/02_quick_demo",slug:"/Robot_development/quick_demo/demo_communication",permalink:"/rdk_doc/en/Robot_development/quick_demo/demo_communication",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/02_quick_demo/demo_communication.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"5.2.4 Image Processing Acceleration",permalink:"/rdk_doc/en/Robot_development/quick_demo/demo_cv"},next:{title:"5.2.6 Model Inference",permalink:"/rdk_doc/en/Robot_development/quick_demo/ai_predict"}},d={},u=[{value:"Zero-copy",id:"zero-copy",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Preparation",id:"preparation",level:3},{value:"RDK",id:"rdk",level:4},{value:"Usage Guide",id:"usage-guide",level:3},{value:"RDK Platform",id:"rdk-platform",level:4},{value:"Result Analysis",id:"result-analysis",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"525-communication",children:"5.2.5 Communication"}),"\n",(0,r.jsx)(n.h2,{id:"zero-copy",children:"Zero-copy"}),"\n","\n",(0,r.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"TogetheROS.Bot provides a flexible and efficient zero-copy function that can significantly reduce the communication latency and CPU usage of large-sized data. By integrating the performance_test tool, tros.b can easily evaluate the performance difference before and after enabling zero-copy. The performance_test tool can configure parameters such as sub count, message size, and QoS to facilitate the evaluation of communication performance in different scenarios. The main performance indicators are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Latency: The time it takes for a message to be transmitted from pub to sub."}),"\n",(0,r.jsx)(n.li,{children:"CPU usage: The percentage of CPU usage by communication activities."}),"\n",(0,r.jsx)(n.li,{children:"Resident memory: Includes heap allocated memory, shared memory, and stack memory used for system internals."}),"\n",(0,r.jsx)(n.li,{children:"Sample statistics: Includes the number of messages sent, received, and lost."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Code repositories: ",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/rclcpp",children:"https://github.com/D-Robotics/rclcpp"}),", ",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/rcl_interfaces",children:"https://github.com/D-Robotics/rcl_interfaces"})]}),"\n",(0,r.jsx)(n.h3,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Platform"}),(0,r.jsx)(n.th,{children:"System"}),(0,r.jsx)(n.th,{children:"Function"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,r.jsx)(n.td,{children:"Show zero-copy performance test results"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"preparation",children:"Preparation"}),"\n",(0,r.jsx)(n.h4,{id:"rdk",children:"RDK"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Before starting the test, adjust the RDK to performance mode to ensure the accuracy of the test results. Use the following commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo performance > /sys/class/devfreq/devfreq0/governor\necho performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor \n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The performance_test package is already installed in RDK. Install it using the command:"}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-performance-test\n"})})}),(0,r.jsx)(a.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-humble-performance-test\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"usage-guide",children:"Usage Guide"}),"\n",(0,r.jsx)(n.h4,{id:"rdk-platform",children:"RDK Platform"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Test the transmission of 4M data without enabling zero-copy. Use the following command:"}),"\n"]}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/setup.bash\nros2 run performance_test perf_test --reliable --keep-last --history-depth 10 -s 1 -m Array4m -r 100 --max-runtime 30\n"})})}),(0,r.jsx)(a.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\nros2 run performance_test perf_test --reliable --keep-last --history-depth 10 -s 1 -m Array4m -r 100 --max-runtime 30\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Test results are shown below"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dotnetcli",children:"run time\n\n+--------------+-----------+--------+----------+\n| T_experiment | 30.982817 | T_loop | 1.000126 |\n+--------------+-----------+--------+----------+\n\nsamples                                              latency\n\n+------+------+------+-----------+---------------+   +----------+----------+----------+----------+\n| recv | sent | lost | data_recv | relative_loss |   | min      | max      | mean     | variance |\n+------+------+------+-----------+---------------+   +----------+----------+----------+----------+\n| 99   | 100  | 0    | 418505326 | 0.000000      |   | 0.004327 | 0.005605 | 0.004546 | 0.000000 |\n+------+------+------+-----------+---------------+   +----------+----------+----------+----------+\n\npublisher loop                                       subscriber loop\n\n+----------+----------+----------+----------+        +----------+----------+----------+----------+\n| min      | max      | mean     | variance |        | min      | max      | mean     | variance |\n+----------+----------+----------+----------+        +----------+----------+----------+----------+\n| 0.007260 | 0.008229 | 0.008057 | 0.000000 |        | 0.000000 | 0.000000 | 0.000000 | 0.000000 |\n+----------+----------+----------+----------+        +----------+----------+----------+----------+\n\nsystem usage\n\n+-------------+-----------+---------+--------+--------+----------+--------+--------+\n| utime       | stime     | maxrss  | ixrss  | idrss  | isrss    | minflt | majflt |\n+-------------+-----------+---------+--------+--------+----------+--------+--------+\n| 23120954000 | 121597000 | 65092   | 0      | 0      | 0        | 11578  | 2      |\n+-------------+-----------+---------+--------+--------+----------+--------+--------+\n| nswap       | inblock   | oublock | msgsnd | msgrcv | nsignals | nvcsw  | nivcsw |\n+-------------+-----------+---------+--------+--------+----------+--------+--------+\n| 0           | 0         | 0       | 0      | 0      | 0        | 9885   | 7193   |\n+-------------+-----------+---------+--------+--------+----------+--------+--------+\n\nMaximum runtime reached. Exiting.\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Start the 4M data transfer test with zero-copy (use --zero-copy parameter), the command is as follows:"}),"\n"]}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/setup.bash\nros2 run performance_test perf_test --zero-copy --reliable --keep-last --history-depth 10 -s 1 -m Array4m -r 100 --max-runtime 30\n"})})}),(0,r.jsx)(a.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\nexport RMW_IMPLEMENTATION=rmw_fastrtps_cpp\nexport FASTRTPS_DEFAULT_PROFILES_FILE=/opt/tros/humble/lib/hobot_shm/config/shm_fastdds.xml\nexport RMW_FASTRTPS_USE_QOS_FROM_XML=1\nexport ROS_DISABLE_LOANED_MESSAGES=0\nros2 run performance_test perf_test --zero-copy --reliable --keep-last --history-depth 10 -s 1 -m Array4m -r 100 --max-runtime 30\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Test results are shown below"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dotnetcli",children:"run time\n\n+--------------+-----------+--------+----------+\n| T_experiment | 30.554773 | T_loop | 1.000084 |\n+--------------+-----------+--------+----------+\n\nsamples                                              latency\n\n+------+------+------+-----------+---------------+   +----------+----------+----------+----------+\n| recv | sent | lost | data_recv | relative_loss |   | min      | max      | mean     | variance |\n+------+------+------+-----------+---------------+   +----------+----------+----------+----------+\n| 99   | 99   | 0    | 418701472 | 0.000000      |   | 0.000146 | 0.000381 | 0.000195 | 0.000000 |\n+------+------+------+-----------+---------------+   +----------+----------+----------+----------+\n\npublisher loop                                       subscriber loop\n\n+----------+----------+----------+----------+        +----------+----------+----------+----------+\n| min      | max      | mean     | variance |        | min      | max      | mean     | variance |\n+----------+----------+----------+----------+        +----------+----------+----------+----------+\n| 0.009812 | 0.009895 | 0.009877 | 0.000000 |        | 0.000000 | 0.000000 | 0.000000 | 0.000000 |\n+----------+----------+----------+----------+        +----------+----------+----------+----------+\n\nsystem usage\n\n+------------+-----------+---------+--------+--------+----------+--------+--------+\n| utime      | stime     | maxrss  | ixrss  | idrss  | isrss    | minflt | majflt |\n+------------+-----------+---------+--------+--------+----------+--------+--------+\n| 8727113000 | 307920000 | 46224   | 0      | 0      | 0        | 6440   | 0      |\n+------------+-----------+---------+--------+--------+----------+--------+--------+\n| nswap      | inblock   | oublock | msgsnd | msgrcv | nsignals | nvcsw  | nivcsw |\n+------------+-----------+---------+--------+--------+----------+--------+--------+\n| 0          | 0         | 0       | 0      | 0      | 0        | 9734   | 2544   |\n+------------+-----------+---------+--------+--------+----------+--------+--------+\n\nMaximum runtime reached. Exiting.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,r.jsx)(n.p,{children:"The performance_test tool can output various types of statistical results. We mainly compare the differences in latency and system usage:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"latency"})}),"\n",(0,r.jsx)(n.p,{children:'The mean latency for communication with "zero-copy" enabled and disabled are 4.546ms and 0.195ms, respectively. It can be seen that "zero-copy" significantly reduces communication latency.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"system usage"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Communication Method"}),(0,r.jsx)(n.th,{children:"Latency"}),(0,r.jsx)(n.th,{children:"utime+stime"}),(0,r.jsx)(n.th,{children:"maxrss"}),(0,r.jsx)(n.th,{children:"minflt"}),(0,r.jsx)(n.th,{children:"majflt"}),(0,r.jsx)(n.th,{children:"nvcsw"}),(0,r.jsx)(n.th,{children:"nivcsw"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'Non-"zero-copy"'}),(0,r.jsx)(n.td,{children:"0.004546"}),(0,r.jsx)(n.td,{children:"23242551000"}),(0,r.jsx)(n.td,{children:"65092"}),(0,r.jsx)(n.td,{children:"11578"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"9885"}),(0,r.jsx)(n.td,{children:"7193"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"zero-copy"'}),(0,r.jsx)(n.td,{children:"0.000381"}),(0,r.jsx)(n.td,{children:"9035033000"}),(0,r.jsx)(n.td,{children:"46224"}),(0,r.jsx)(n.td,{children:"6440"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"9734"}),(0,r.jsx)(n.td,{children:"2544"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Comparing the two methods, we can see that:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'The sum of utime and stime in the "zero-copy" method is significantly lower than in the non-"zero-copy" method, indicating that "zero-copy" consumes less CPU resources.'}),"\n",(0,r.jsx)(n.li,{children:'The maxrss in the "zero-copy" method is lower than in the non-"zero-copy" method, indicating that "zero-copy" occupies less memory.'}),"\n",(0,r.jsx)(n.li,{children:'The minflt and majflt in the "zero-copy" method are significantly lower than in the non-"zero-copy" method, indicating that "zero-copy" communication has less jitter.'}),"\n",(0,r.jsx)(n.li,{children:'The nvcsw and nivcsw in the "zero-copy" method are significantly lower than in the non-"zero-copy" method, indicating that "zero-copy" communication has less jitter.'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Overall, for large data communication, the "zero-copy" method is clearly superior to the non-"zero-copy" method in terms of CPU consumption, memory usage, and communication latency jitter.'})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),s=t(34164),o=t(86641),a=t(56347),i=t(205),l=t(38874),c=t(24035),d=t(82993);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),b=(()=>{const e=c??x;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function _(e){const n=(0,f.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);