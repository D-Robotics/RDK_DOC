"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5420],{69672:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=i(74848),s=i(28453);const r={sidebar_position:1},t="dpkg",d={id:"Appendix/linux-command-manual/cmd_dpkg",title:"dpkg",description:"Install, create, and manage software packages on Debian Linux systems.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_dpkg.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_dpkg",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dpkg",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/09_Appendix/linux-command-manual/cmd_dpkg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"dpkg-deb",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dpkg-deb"},next:{title:"find",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_find"}},o={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Command explanations",id:"command-explanations",level:2},{value:"Option explanations",id:"option-explanations",level:2},{value:"Common Commands",id:"common-commands",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"dpkg",children:"dpkg"}),"\n",(0,a.jsx)(n.p,{children:"Install, create, and manage software packages on Debian Linux systems."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"dpkg command"})," is a utility tool used on Debian Linux systems to install, create, and manage software packages."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg [<option> ...] <command>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"command-explanations",children:"Command explanations"}),"\n",(0,a.jsx)(n.p,{children:"The dpkg command has options for setting and requires a command to execute different functionalities."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"-i: Install a software package."}),"\n",(0,a.jsx)(n.li,{children:"-r: Remove a software package."}),"\n",(0,a.jsx)(n.li,{children:"-P: Remove a software package and its configuration files."}),"\n",(0,a.jsx)(n.li,{children:"-L: List files belonging to a specified software package."}),"\n",(0,a.jsx)(n.li,{children:"-l: List software package status concisely."}),"\n",(0,a.jsx)(n.li,{children:"-S: Search for software packages containing specified files."}),"\n",(0,a.jsx)(n.li,{children:"--unpack: Unpack a software package."}),"\n",(0,a.jsx)(n.li,{children:"-c: Show the list of files inside a software package."}),"\n",(0,a.jsx)(n.li,{children:"--configure: Configure a software package."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"option-explanations",children:"Option explanations"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"--admindir= directory: Use directory instead of /var/lib/dpkg."}),"\n",(0,a.jsx)(n.li,{children:"--root= directory: Install to a different root directory."}),"\n",(0,a.jsx)(n.li,{children:"--instdir=directory: Change the installation directory while maintaining the management directory."}),"\n",(0,a.jsx)(n.li,{children:"--path-exclude= expression: Do not install paths that match the shell expression."}),"\n",(0,a.jsx)(n.li,{children:"--path-include= expression: Include an additional pattern after exclusion patterns."}),"\n",(0,a.jsx)(n.li,{children:"-O|--selected-only: Ignore software packages that are not selected for installation or upgrade."}),"\n",(0,a.jsx)(n.li,{children:"-E|--skip-same-version: Ignore software packages with the same version as the installed package."}),"\n",(0,a.jsx)(n.li,{children:"-G|--refuse-downgrade: Ignore software packages with versions earlier than the installed package."}),"\n",(0,a.jsx)(n.li,{children:"-B|--auto-deconfigure: Install even if it affects other software packages."}),"\n",(0,a.jsx)(n.li,{children:"--[no-]triggers: Skip or force the handling of triggers that follow."}),"\n",(0,a.jsx)(n.li,{children:"--verify-format=format: Check the output format ('rpm' is supported)."}),"\n",(0,a.jsx)(n.li,{children:"--no-debsig: Do not attempt to verify the signature of the software package."}),"\n",(0,a.jsx)(n.li,{children:"-D|--debug=octal: Enable debugging (see -Dhelp or --debug=help for more information)."}),"\n",(0,a.jsx)(n.li,{children:"--status-logger=command: Send status updates to the standard input of command."}),"\n",(0,a.jsx)(n.li,{children:"--log=filename: Log status updates and operation information to filename."}),"\n",(0,a.jsx)(n.li,{children:"--ignore-depends=package,...: Ignore all dependencies related to package."}),"\n",(0,a.jsx)(n.li,{children:"--force-...: Ignore encountered problems (see --force-help for more details)."}),"\n",(0,a.jsx)(n.li,{children:"--no-force-...|--refuse-...: Abort execution when encountering problems."}),"\n",(0,a.jsxs)(n.li,{children:["--abort-after ",(0,a.jsx)(n.code,{children:"<n>"}),"         Abort after encountering ",(0,a.jsx)(n.code,{children:"<n>"})," errors."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"common-commands",children:"Common Commands"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Install package"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg -i package.deb\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Remove package"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg -r package\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Remove package (including configuration files)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg -P package\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"List the files associated with the package"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg -L package\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Show the version of the package"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg -l package\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Unpack the contents of a deb package"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg --unpack package.deb\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Search for the package that owns the specified file or keyword"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg -S keyword\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"List all currently installed packages"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg -l\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"List the contents of a deb package"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg -c package.deb\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Configure the package"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dpkg --configure package\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var a=i(96540);const s={},r=a.createContext(s);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);