"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6466],{91339:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=i(74848),o=i(28453);const r={sidebar_position:1},t="top",c={id:"Appendix/linux-command-manual/cmd_top",title:"top",description:"The top command allows you to dynamically view the overall operation of the system in real time. It is a practical tool that combines multiple information monitoring system performance and operational information. It provides a dynamic and interactive real-time view that displays overall performance information of the system and relevant information about running processes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_top.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_top",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_top",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/linux-command-manual/cmd_top.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"tar",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_tar"},next:{title:"zip",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_zip"}},d={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Option Explanation",id:"option-explanation",level:2},{value:"top Interactive Commands",id:"top-interactive-commands",level:2},{value:"Display Information",id:"display-information",level:2},{value:"Common Commands",id:"common-commands",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"top",children:"top"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"top command"})," allows you to dynamically view the overall operation of the system in real time. It is a practical tool that combines multiple information monitoring system performance and operational information. It provides a dynamic and interactive real-time view that displays overall performance information of the system and relevant information about running processes."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -hv | -bcEHiOSs1 -d secs -n max -u|U user -p pid(s) -o field -w [cols]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"option-explanation",children:"Option Explanation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-b"}),": Run in batch mode and directly output the results to a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-c"}),": Display the complete command line without truncation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-d <seconds>"}),": Screen refresh interval time."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-I"}),": Ignore idle processes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-s"}),": Secure mode."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-S"}),": Accumulatively display the CPU usage time of processes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-i"}),": Do not display idle or useless processes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-u <username>"}),": Specify the username."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-p <pid>"}),": Specify the process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-n <number>"}),": Number of times to loop display."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-H"}),": Display resource occupation of all threads."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"top-interactive-commands",children:"top Interactive Commands"}),"\n",(0,s.jsx)(n.p,{children:"Some interactive commands that can be used during the execution of the top command. These commands are single-letter, and if the -s option is used in the command line, some commands may be blocked."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"h"}),": Display the help screen, providing a brief summary of commands."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"k"}),": Terminate a process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"i"}),": Ignore idle and zombie processes (toggle command)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"q"}),": Quit the program."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"r"}),": Reschedule the priority of a process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"S"}),": Switch to cumulative mode."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"}),": Change the delay time between two refreshes, in seconds (if decimals are used, in milliseconds). Entering a value of 0 will continuously refresh the system. The default value is 5 seconds."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f"})," or ",(0,s.jsx)(n.code,{children:"F"}),": Add or remove items from the current display."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"o"})," or ",(0,s.jsx)(n.code,{children:"O"}),": Change the order of displayed items."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"l"}),": Switch to display average load and boot time information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"m"}),": Switch to display memory information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"t"}),": Switch to display process and CPU status information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"c"}),": Switch to display command names and complete command lines."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"M"}),": Sort by resident memory size."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"P"}),": Sort by CPU usage percentage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"T"}),": Sort by time/accumulative time."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"w"}),": Write current settings to the ~/.toprc file."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"display-information",children:"Display Information"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top - 14:55:57 up  1:03,  2 users,  load average: 0.62, 0.55, 0.45\nTasks: 158 total,   1 running, 157 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  3.7 us,  9.3 sy,  0.0 ni, 86.0 id,  0.0 wa,  0.0 hi,  0.9 si,  0.0 st\nMiB Mem :   1982.2 total,    778.4 free,    645.6 used,    558.1 buff/cache\nMiB Swap:      0.0 total,      0.0 free,      0.0 used.   1307.2 avail Mem\n\n    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n   4496 root      20   0   14660   3092   2628 R  23.8   0.2   0:00.13 top\n   3032 root      20   0       0      0      0 S  14.3   0.0   0:26.43 RTW_CMD_THREAD\n      1 root      20   0  167580  10200   7216 S   0.0   0.5   0:03.09 systemd\n      2 root      20   0       0      0      0 S   0.0   0.0   0:00.00 kthreadd\n      4 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/0:0H\n      6 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 mm_percpu_wq\n      7 root      20   0       0      0      0 S   0.0   0.0   0:00.13 ksoftirqd/0\n"})}),"\n",(0,s.jsx)(n.p,{children:"System Information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"uptime: The system's uptime and average load."}),"\n",(0,s.jsx)(n.li,{children:"tasks: The number of running processes and sleeping processes."}),"\n",(0,s.jsx)(n.li,{children:"CPU: The overall CPU usage and usage of each core."}),"\n",(0,s.jsx)(n.li,{children:"Memory: The overall memory usage, free memory, and memory used for buffering and caching."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Process Information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"PID: The process identifier."}),"\n",(0,s.jsx)(n.li,{children:"USER: The username of the running process."}),"\n",(0,s.jsx)(n.li,{children:"PR (Priority): The priority of the process."}),"\n",(0,s.jsx)(n.li,{children:"NI (Nice Value): The priority adjustment value of the process."}),"\n",(0,s.jsx)(n.li,{children:"VIRT (Virtual Memory): The size of the process's virtual memory."}),"\n",(0,s.jsx)(n.li,{children:"RES (Resident Memory): The amount of physical memory actually used by the process."}),"\n",(0,s.jsx)(n.li,{children:"SHR (Shared Memory): The amount of memory shared by the process."}),"\n",(0,s.jsx)(n.li,{children:"%CPU: The percentage of CPU usage by the process."}),"\n",(0,s.jsx)(n.li,{children:"%MEM: The percentage of memory usage by the process."}),"\n",(0,s.jsx)(n.li,{children:"TIME+: The cumulative CPU time of the process."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Features and Interactions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Key Commands: When running top, certain key commands can be used for operations, such as pressing "k" to terminate a process and pressing "h" to display help information.'}),"\n",(0,s.jsx)(n.li,{children:"Sorting: Processes can be sorted by CPU usage, memory usage, process ID, etc."}),"\n",(0,s.jsx)(n.li,{children:"Refresh Rate: The refresh rate of top can be set to dynamically view system information."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"common-commands",children:"Common Commands"}),"\n",(0,s.jsx)(n.p,{children:"Display Process Information"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top\n"})}),"\n",(0,s.jsx)(n.p,{children:"Show the complete command"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -c\n"})}),"\n",(0,s.jsx)(n.p,{children:"Display program information in batch mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -b\n"})}),"\n",(0,s.jsx)(n.p,{children:"Display program information in cumulative mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -S\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set the number of information updates"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -n 2   # means stop updating display after 2 updates\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set the information update interval"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -d 3  # means update every 3 seconds\n"})}),"\n",(0,s.jsx)(n.p,{children:"Display specific process information"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -p 139  # display process information for process number 139, including CPU and memory usage\n"})}),"\n",(0,s.jsx)(n.p,{children:"Exit after 10 updates"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -n 10\n"})}),"\n",(0,s.jsx)(n.p,{children:"Users will not be able to use interactive commands to control processes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"top -s\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(96540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);