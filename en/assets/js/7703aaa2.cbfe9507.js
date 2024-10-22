"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1605],{40946:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=i(74848),d=i(28453);const r={sidebar_position:1},s="dpkg-deb",c={id:"Appendix/linux-command-manual/cmd_dpkg-deb",title:"dpkg-deb",description:"The dpkg-deb command is a software package management tool for Debian Linux. It can perform packaging and unpackaging operations on software packages and provide package information.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_dpkg-deb.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_dpkg-deb",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dpkg-deb",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/linux-command-manual/cmd_dpkg-deb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"dmesg",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dmesg"},next:{title:"dpkg",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dpkg"}},t={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Command Description",id:"command-description",level:2},{value:"Option Description",id:"option-description",level:2},{value:"Common Commands",id:"common-commands",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"dpkg-deb",children:"dpkg-deb"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"dpkg-deb command"})," is a software package management tool for Debian Linux. It can perform packaging and unpackaging operations on software packages and provide package information."]}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  dpkg-deb [<option> ...] <command>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"command-description",children:"Command Description"}),"\n",(0,o.jsx)(n.p,{children:"The dpkg-deb command not only has options to set, but also requires a command to execute different functions."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"-b: Create a Debian software package."}),"\n",(0,o.jsx)(n.li,{children:"-c: Display the file list in the package."}),"\n",(0,o.jsx)(n.li,{children:"-e: Extract the control information."}),"\n",(0,o.jsx)(n.li,{children:"-f: Print field contents to standard output."}),"\n",(0,o.jsx)(n.li,{children:"-x: Extract files from the package to the specified directory."}),"\n",(0,o.jsx)(n.li,{children:"-X: Extract files from the package to the specified directory and display the detailed process of extraction."}),"\n",(0,o.jsx)(n.li,{children:"-w: Display package information."}),"\n",(0,o.jsx)(n.li,{children:"-l: Display detailed package information."}),"\n",(0,o.jsx)(n.li,{children:"-R: Extract control information and archive manifest file."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"option-description",children:"Option Description"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-v, --verbose"}),": Enable verbose output."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-D, --debug"}),": Enable debug output.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--showformat=<format>"}),": Use alternative format for ",(0,o.jsx)(n.code,{children:"--show"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--deb-format=<format>"}),": Choose archive format. Allowed values are 0.939000, 2.0 (default)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--nocheck"}),": Disable control file checking (build bad packages)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--root-owner-group"}),": Force file owner and group to be root."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--[no-]uniform-compression"}),": Use compression parameters on all members. If specified, uniform compression parameters will be used."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-z#"}),": Set compression level during build."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-Z<type>"}),": Set compression type to be used during build. Allowed types are gzip, xz, zstd, none."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-S<strategy>"}),": Set compression strategy during build. Allowed values are none, extreme (xz), filtered, huffman, rle, fixed (gzip)."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"common-commands",children:"Common Commands"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Extract program files"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"dpkg-deb -x hobot-configs_2.2.0-20231030133209_arm64.deb\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Extract control files"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"dpkg-deb -e hobot-configs_2.2.0-20231030133209_arm64.deb hobot-configs/DEBIAN\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Query the content of the deb package"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"dpkg-deb -c hobot-configs_2.2.0-20231030133209_arm64.deb\n"})})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var o=i(96540);const d={},r=o.createContext(d);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);