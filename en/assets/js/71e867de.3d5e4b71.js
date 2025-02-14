"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7820],{28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var t=o(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},44274:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(74848),i=o(28453);const s={sidebar_position:1},r="7.2.1 Development Environment Setup and Compilation Instructions",l={id:"Advanced_development/linux_development/environment_build",title:"7.2.1 Development Environment Setup and Compilation Instructions",description:"This chapter introduces the requirements and setup of the cross-compilation development environment, as well as instructions for downloading the source code and compiling the system image.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/environment_build.md",sourceDirName:"07_Advanced_development/02_linux_development",slug:"/Advanced_development/linux_development/environment_build",permalink:"/rdk_doc/en/Advanced_development/linux_development/environment_build",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/environment_build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"7.2. Linux\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/en/linux_development"},next:{title:"7.2.2 Driver Development Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/"}},d={},c=[{value:"Cross-compilation Development Environment",id:"cross-compilation-development-environment",level:2},{value:"RDK OS Development Guide",id:"rdk-os-development-guide",level:2},{value:"Developing RDK X3",id:"developing-rdk-x3",level:3},{value:"Developing RDK X5",id:"developing-rdk-x5",level:3}];function m(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"721-development-environment-setup-and-compilation-instructions",children:"7.2.1 Development Environment Setup and Compilation Instructions"}),"\n",(0,t.jsx)(n.p,{children:"This chapter introduces the requirements and setup of the cross-compilation development environment, as well as instructions for downloading the source code and compiling the system image."}),"\n",(0,t.jsx)(n.h2,{id:"cross-compilation-development-environment",children:"Cross-compilation Development Environment"}),"\n",(0,t.jsx)(n.p,{children:"Cross-compilation is a method of developing and building software on a host machine, with the resulting software deployed to the development board for execution."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Host Characteristics"}),": The host machine typically has higher performance and larger memory capacity, which significantly accelerates the build process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tool Support"}),": The host machine can support more development tools, enhancing development efficiency."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Setting up a cross-compilation environment is an essential step in the development process. The following diagram illustrates the overall framework of the cross-compilation environment:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220329140159441",src:o(82648).A+"",width:"976",height:"560"})}),"\n",(0,t.jsx)(n.h2,{id:"rdk-os-development-guide",children:"RDK OS Development Guide"}),"\n",(0,t.jsx)(n.h3,{id:"developing-rdk-x3",children:"Developing RDK X3"}),"\n",(0,t.jsxs)(n.p,{children:["The source code for RDK X3 is hosted in the ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/rdk-gen",children:"rdk-gen repository"})," on GitHub."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Setting Up the Development Environment"}),": The repository's ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/rdk-gen/blob/main/README_EN.md",children:"README"})," provides detailed instructions for configuring the development environment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"System Compilation Methods"}),": This includes setting up the development environment, building system images, configuring the cross-compilation toolchain, software development methods, and solutions to common issues."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"developing-rdk-x5",children:"Developing RDK X5"}),"\n",(0,t.jsxs)(n.p,{children:["The source code for RDK X5 is hosted in the ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/x5-rdk-gen",children:"x5-rdk-gen repository"})," on GitHub."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Setting Up the Development Environment"}),": The repository's ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/x5-rdk-gen/blob/main/README_EN.md",children:"README"})," provides a comprehensive guide from environment setup to source code compilation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"System Compilation Methods"}),": This includes setting up the development environment, building system images, configuring the cross-compilation toolchain, software development methods, and solutions to common issues."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By following these steps, you can complete the development and compilation of the RDK OS system. For more details, refer to the respective GitHub repository documentation."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},82648:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-20220329140159441-9e45a309ac47ad503fcc2b37f97e6492.png"}}]);