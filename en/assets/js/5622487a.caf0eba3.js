"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3657],{11018:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=s(74848),i=s(28453);const t={sidebar_position:1},o="hrut_ps",c={id:"Appendix/rdk-command-manual/cmd_hrut_ps",title:"hrut_ps",description:"The hrut_ps command prints process information that is not supported by the ps command in busybox, including process ID, parent process ID, priority, memory, virtual memory, etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/rdk-command-manual/cmd_hrut_ps.md",sourceDirName:"09_Appendix/rdk-command-manual",slug:"/Appendix/rdk-command-manual/cmd_hrut_ps",permalink:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_hrut_ps",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/09_Appendix/rdk-command-manual/cmd_hrut_ps.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"hrut_boardid \uff08RDK X5\uff09",permalink:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_hrut_boardid_rdkx5"},next:{title:"hrut_socid",permalink:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_hrut_socuid"}},d={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Supported Information",id:"supported-information",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hrut_ps",children:"hrut_ps"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"hrut_ps"})," command prints process information that is not supported by the ",(0,r.jsx)(n.code,{children:"ps"})," command in busybox, including process ID, parent process ID, priority, memory, virtual memory, etc."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"hrut_ps\n"})}),"\n",(0,r.jsx)(n.h2,{id:"supported-information",children:"Supported Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"pid"}),": Process ID. Each process in the operating system has a unique identifier called the process ID (pid). It is used to uniquely identify and identify a process in the system."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ppid"}),": Parent Process ID. It indicates the parent process that created this process."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"state"}),": Running state.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"I"}),": Idle."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"R"}),": Running."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"S"}),": Sleeping."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"D"}),": Disk sleeping."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"T"}),": Stopped."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"X"}),": Dead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Z"}),": Zombie."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"t"}),": Tracing stop."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"P"}),": Parked."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"prio"}),": Priority. It represents the scheduling priority of the process, usually a numerical value. A higher value indicates a higher priority, and the process may be more likely to obtain CPU time slices."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"nice"}),": Scheduling priority. It represents the scheduling priority of the process, usually an integer value. A lower nice value indicates a higher priority, allowing the process to get CPU time more frequently."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rt_prio"}),": Real-time priority. It represents the priority of real-time processes. A lower value indicates a higher real-time priority."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"policy"}),": Scheduling policy. It represents the scheduling policy of the process, usually a scheduling algorithm, such as First-In-First-Out (FIFO), Round Robin, etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"vsize"}),": Virtual memory size. It represents the size of the process's virtual memory, which is the size of the virtual address space that the process can access."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rss"}),": Resident Set Size. It represents the current occupied physical memory size of the process, which is the actual amount of physical RAM allocated to the process."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"comm"}),": Command name. It contains the command name of the process or the name of the executable file, which is used to identify the type or purpose of the process."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);