"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7728],{78810:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var i=n(74848),l=n(28453);const d={sidebar_position:1},c="ssh",r={id:"Appendix/linux-command-manual/cmd_ssh",title:"ssh",description:"ssh\u547d\u4ee4 \u662fopenssh\u5957\u4ef6\u4e2d\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u5de5\u5177\uff0c\u53ef\u4ee5\u7ed9\u4e88ssh\u52a0\u5bc6\u534f\u8bae\u5b9e\u73b0\u5b89\u5168\u7684\u8fdc\u7a0b\u767b\u5f55\u670d\u52a1\u5668\u3002",source:"@site/docs/09_Appendix/linux-command-manual/cmd_ssh.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_ssh",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_ssh",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/linux-command-manual/cmd_ssh.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"scp",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_scp"},next:{title:"tar",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_tar"}},o={},h=[{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u9009\u9879\u8bf4\u660e",id:"\u9009\u9879\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}];function t(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"ssh",children:"ssh"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"ssh\u547d\u4ee4"})," \u662fopenssh\u5957\u4ef6\u4e2d\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u5de5\u5177\uff0c\u53ef\u4ee5\u7ed9\u4e88ssh\u52a0\u5bc6\u534f\u8bae\u5b9e\u73b0\u5b89\u5168\u7684\u8fdc\u7a0b\u767b\u5f55\u670d\u52a1\u5668\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u8bed\u6cd5\u8bf4\u660e",children:"\u8bed\u6cd5\u8bf4\u660e"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface]\n           [-b bind_address] [-c cipher_spec] [-D [bind_address:]port]\n           [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]\n           [-i identity_file] [-J [user@]host[:port]] [-L address]\n           [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port]\n           [-Q query_option] [-R address] [-S ctl_path] [-W host:port]\n           [-w local_tun[:remote_tun]] destination [command]\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"destination"}),"\uff1a\u6307\u5b9a\u8981\u8fde\u63a5\u7684\u8fdc\u7a0bssh\u670d\u52a1\u5668\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"command"}),"\uff1a\u8981\u5728\u8fdc\u7a0bssh\u670d\u52a1\u5668\u4e0a\u6267\u884c\u7684\u6307\u4ee4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u9009\u9879\u8bf4\u660e",children:"\u9009\u9879\u8bf4\u660e"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-4"}),"\uff1a\u5f3a\u5236\u4f7f\u7528IPv4\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-6"}),"\uff1a\u5f3a\u5236\u4f7f\u7528IPv6\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-A"}),"\uff1a\u5f00\u542f\u8ba4\u8bc1\u4ee3\u7406\u8fde\u63a5\u8f6c\u53d1\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-a"}),"\uff1a\u5173\u95ed\u8ba4\u8bc1\u4ee3\u7406\u8fde\u63a5\u8f6c\u53d1\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-B"}),"\uff1a\u5728\u5c1d\u8bd5\u8fde\u63a5\u5230\u76ee\u6807\u4e3b\u673a\u4e4b\u524d\uff0c\u7ed1\u5b9a\u5230",(0,i.jsx)(s.code,{children:"bind_interface"}),"\u7684\u5730\u5740\u3002\u8fd9\u5728\u5177\u6709\u591a\u4e2a\u5730\u5740\u7684\u7cfb\u7edf\u4e0a\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-b"}),"\uff1a\u4f7f\u7528\u672c\u5730\u6307\u5b9a\u5730\u5740\u4f5c\u4e3a\u5bf9\u5e94\u8fde\u63a5\u7684\u6e90IP\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-C"}),"\uff1a\u8bf7\u6c42\u538b\u7f29\u6240\u6709\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-F"}),"\uff1a\u6307\u5b9aSSH\u6307\u4ee4\u7684\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-f"}),"\uff1a\u5728\u540e\u53f0\u6267\u884cSSH\u6307\u4ee4\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-g"}),"\uff1a\u5141\u8bb8\u8fdc\u7a0b\u4e3b\u673a\u8fde\u63a5\u4e3b\u673a\u7684\u8f6c\u53d1\u7aef\u53e3\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-i"}),"\uff1a\u6307\u5b9a\u8eab\u4efd\uff08\u79c1\u94a5\uff09\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-l"}),"\uff1a\u6307\u5b9a\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u767b\u5f55\u7528\u6237\u540d\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-N"}),"\uff1a\u4e0d\u6267\u884c\u8fdc\u7a0b\u6307\u4ee4\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-o"}),"\uff1a\u6307\u5b9a\u914d\u7f6e\u9009\u9879\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-p"}),"\uff1a\u6307\u5b9a\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u7aef\u53e3\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-q"}),"\uff1a\u9759\u9ed8\u6a21\u5f0f\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-X"}),"\uff1a\u5f00\u542fX11\u8f6c\u53d1\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-x"}),"\uff1a\u5173\u95edX11\u8f6c\u53d1\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-y"}),"\uff1a\u5f00\u542f\u4fe1\u4efbX11\u8f6c\u53d1\u529f\u80fd\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"# ssh \u7528\u6237\u540d@\u8fdc\u7a0b\u670d\u52a1\u5668\u5730\u5740\nssh sunrise@192.168.1.10\n# \u6307\u5b9a\u7aef\u53e3\nssh -p 2211 sunrise@192.168.1.10\n\n# ssh \u5927\u5bb6\u65cf\nssh -p 22 user@ip  # \u9ed8\u8ba4\u7528\u6237\u540d\u4e3a\u5f53\u524d\u7528\u6237\u540d\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a 22\nssh-keygen # \u4e3a\u5f53\u524d\u7528\u6237\u751f\u6210 ssh \u516c\u94a5 + \u79c1\u94a5\nssh-keygen -f keyfile -i -m key_format -e -m key_format # key_format: RFC4716/SSH2(default) PKCS8 PEM\nssh-copy-id user@ip:port # \u5c06\u5f53\u524d\u7528\u6237\u7684\u516c\u94a5\u590d\u5236\u5230\u9700\u8981 ssh \u7684\u670d\u52a1\u5668\u7684 ~/.ssh/authorized_keys\uff0c\u4e4b\u540e\u53ef\u4ee5\u514d\u5bc6\u767b\u5f55\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"ssh username@remote_host\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\u5e76\u6307\u5b9a\u7aef\u53e3"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"ssh -p port username@remote_host\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u4f7f\u7528\u5bc6\u94a5\u6587\u4ef6\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"ssh -i path/to/private_key username@remote_host\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u672c\u5730\u6267\u884c\u8fdc\u7a0b\u547d\u4ee4"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:'ssh username@remote_host "command"\n'})}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u672c\u5730\u7aef\u53e3\u8f6c\u53d1\u5230\u8fdc\u7a0b\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"ssh -L local_port:remote_host:remote_port username@remote_host\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u7aef\u53e3\u8f6c\u53d1\u5230\u672c\u5730"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"ssh -R remote_port:local_host:local_port username@remote_host\n"})})]})}function a(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var i=n(96540);const l={},d=i.createContext(l);function c(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);