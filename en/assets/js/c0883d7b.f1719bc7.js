"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[624],{55020:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=t(74848),r=t(28453);const i={sidebar_position:1},d="nohup",s={id:"Appendix/linux-command-manual/cmd_nohup",title:"nohup",description:"nohup (short for no hang up) is used to run a command in the background without being affected by terminal closures.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_nohup.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_nohup",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_nohup",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/linux-command-manual/cmd_nohup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"netstat",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_netstat"},next:{title:"ps",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_ps"}},c={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Option explanation",id:"option-explanation",level:2},{value:"Common commands",id:"common-commands",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"nohup",children:"nohup"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"nohup"})," (short for no hang up) is used to run a command in the background without being affected by terminal closures."]}),"\n",(0,o.jsxs)(e.p,{children:["By default (when not redirected), it outputs a file named nohup.out to the current directory. If the nohup.out file in the current directory is not writable, the output will be redirected to the ",(0,o.jsx)(e.code,{children:"$HOME/nohup.out"}),' file. If no file can be created or opened for appending, the specified command in the "command" parameter will not be executable. If the standard error is a terminal, all output from the specified command that is written to the standard error will be redirected to the same file descriptor as the standard output.']}),"\n",(0,o.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"nohup COMMAND [ARG]... [\u3000& ]\nnohup OPTION\n"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"COMMAND"}),": The command to be executed."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"ARG"}),": Any additional parameters that can be used to specify an output file."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"&"}),": Allows the command to be executed in the background, even after the terminal is closed."]}),"\n",(0,o.jsx)(e.h2,{id:"option-explanation",children:"Option explanation"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"--help"}),": Display help information."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"--version"}),": Display version information."]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"common-commands",children:"Common commands"}),"\n",(0,o.jsx)(e.p,{children:"The following command executes the runoob.sh script in the background under the root directory:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"nohup /root/runoob.sh &\n"})}),"\n",(0,o.jsx)(e.p,{children:"To stop the execution, you need to use the following command to find the PID of the running script using nohup, and then use the kill command to delete it:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'ps -aux | grep "runoob.sh" \n'})}),"\n",(0,o.jsx)(e.p,{children:"The following command executes the runoob.sh script in the background under the root directory and redirects the input to the runoob.log file:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"nohup /root/runoob.sh > runoob.log 2>&1 &\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Explanation of ",(0,o.jsx)(e.code,{children:"2>&1"}),":"]}),"\n",(0,o.jsx)(e.p,{children:"Redirect standard error 2 to standard output &1, and then redirect standard output &1 to the runoob.log file."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"0 - stdin (standard input)"}),"\n",(0,o.jsx)(e.li,{children:"1 - stdout (standard output)"}),"\n",(0,o.jsx)(e.li,{children:"2 - stderr (standard error output)"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>s});var o=t(96540);const r={},i=o.createContext(r);function d(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);