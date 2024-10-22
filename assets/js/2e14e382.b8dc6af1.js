"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9561],{39666:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var i=s(74848),r=s(28453);const c={sidebar_position:1},l="scp",d={id:"Appendix/linux-command-manual/cmd_scp",title:"scp",description:"Linux scp \u547d\u4ee4\u7528\u4e8e Linux \u4e4b\u95f4\u590d\u5236\u6587\u4ef6\u548c\u76ee\u5f55\u3002",source:"@site/docs/09_Appendix/linux-command-manual/cmd_scp.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_scp",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_scp",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/linux-command-manual/cmd_scp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"rsync",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_rsync"},next:{title:"ssh",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_ssh"}},o={},t=[{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u9009\u9879\u8bf4\u660e",id:"\u9009\u9879\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"scp",children:"scp"}),"\n",(0,i.jsx)(n.p,{children:"Linux scp \u547d\u4ee4\u7528\u4e8e Linux \u4e4b\u95f4\u590d\u5236\u6587\u4ef6\u548c\u76ee\u5f55\u3002"}),"\n",(0,i.jsx)(n.p,{children:"scp \u662f secure copy \u7684\u7f29\u5199, scp \u662f linux \u7cfb\u7edf\u4e0b\u57fa\u4e8e ssh \u767b\u9646\u8fdb\u884c\u5b89\u5168\u7684\u8fdc\u7a0b\u6587\u4ef6\u62f7\u8d1d\u547d\u4ee4\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["scp \u662f\u52a0\u5bc6\u7684\uff0c",(0,i.jsx)(n.a,{href:"https://www.runoob.com/linux/linux-comm-rcp.html",children:"rcp"})," \u662f\u4e0d\u52a0\u5bc6\u7684\uff0cscp \u662f rcp \u7684\u52a0\u5f3a\u7248\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5\u8bf4\u660e",children:"\u8bed\u6cd5\u8bf4\u660e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"scp [-346BCpqrTv] [-c cipher] [-F ssh_config] [-i identity_file]\n            [-J destination] [-l limit] [-o ssh_option] [-P port]\n            [-S program] source ... target\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7b80\u6613\u5199\u6cd5:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"scp [option] file_source file_target \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"file_source"}),"\uff1a\u6307\u5b9a\u8981\u590d\u5236\u7684\u6e90\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"file_target"}),"\uff1a\u76ee\u6807\u6587\u4ef6\u3002\u683c\u5f0f\u4e3a",(0,i.jsx)(n.code,{children:"user@host\uff1afilename"}),"\uff08\u6587\u4ef6\u540d\u4e3a\u76ee\u6807\u6587\u4ef6\u7684\u540d\u79f0\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9009\u9879\u8bf4\u660e",children:"\u9009\u9879\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"-3\uff1a\u901a\u8fc7\u672c\u5730\u4e3b\u673a\u4f20\u8f93\u4e24\u4e2a\u8fdc\u7a0b\u4e3b\u673a\u4e4b\u95f4\u7684\u6587\u4ef6\u3002\u5982\u679c\u4e0d\u4f7f\u7528\u6b64\u9009\u9879\uff0c\u6570\u636e\u5c06\u76f4\u63a5\u5728\u4e24\u4e2a\u8fdc\u7a0b\u4e3b\u673a\u4e4b\u95f4\u4f20\u8f93\u3002\u8bf7\u6ce8\u610f\uff0c\u6b64\u9009\u9879\u4f1a\u7981\u7528\u4f20\u8f93\u8fdb\u5ea6\u663e\u793a\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-4\uff1a \u5f3a\u5236scp\u547d\u4ee4\u53ea\u4f7f\u7528IPv4\u5bfb\u5740"}),"\n",(0,i.jsx)(n.li,{children:"-6\uff1a \u5f3a\u5236scp\u547d\u4ee4\u53ea\u4f7f\u7528IPv6\u5bfb\u5740"}),"\n",(0,i.jsx)(n.li,{children:"-B\uff1a \u9009\u62e9\u6279\u5904\u7406\u6a21\u5f0f\uff08\u9632\u6b62\u8be2\u95ee\u5bc6\u7801\u6216\u5bc6\u7801\u77ed\u8bed\uff09"}),"\n",(0,i.jsx)(n.li,{children:"-C\uff1a \u5141\u8bb8\u538b\u7f29\u3002\uff08\u5c06-C\u6807\u5fd7\u4f20\u9012\u7ed9ssh\uff0c\u4ece\u800c\u6253\u5f00\u538b\u7f29\u529f\u80fd\uff09"}),"\n",(0,i.jsx)(n.li,{children:"-p\uff1a\u4fdd\u7559\u539f\u6587\u4ef6\u7684\u4fee\u6539\u65f6\u95f4\uff0c\u8bbf\u95ee\u65f6\u95f4\u548c\u8bbf\u95ee\u6743\u9650\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-q\uff1a \u9759\u9ed8\u6a21\u5f0f\uff1a\u7981\u7528\u8fdb\u5ea6\u8868\u4ee5\u53ca\u6765\u81eassh(1)\u7684\u8b66\u544a\u548c\u8bca\u65ad\u6d88\u606f\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-r\uff1a \u9012\u5f52\u5730\u590d\u5236\u6574\u4e2a\u76ee\u5f55\u3002\u8bf7\u6ce8\u610f\uff0cscp\u4f1a\u9075\u5faa\u6811\u904d\u5386\u4e2d\u9047\u5230\u7684\u7b26\u53f7\u94fe\u63a5\u3002\u3001"}),"\n",(0,i.jsx)(n.li,{children:"-T\uff1a\u7981\u7528\u4e25\u683c\u7684\u6587\u4ef6\u540d\u68c0\u67e5\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u4ece\u8fdc\u7a0b\u4e3b\u673a\u590d\u5236\u6587\u4ef6\u5230\u672c\u5730\u76ee\u5f55\u65f6\uff0cscp\u4f1a\u68c0\u67e5\u63a5\u6536\u7684\u6587\u4ef6\u540d\u662f\u5426\u4e0e\u547d\u4ee4\u884c\u4e0a\u8bf7\u6c42\u7684\u6587\u4ef6\u540d\u5339\u914d\uff0c\u4ee5\u9632\u6b62\u8fdc\u7a0b\u7aef\u53d1\u9001\u610f\u5916\u6216\u4e0d\u9700\u8981\u7684\u6587\u4ef6\u3002\u7531\u4e8e\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u548cShell\u89e3\u91ca\u6587\u4ef6\u540d\u901a\u914d\u7b26\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u8fd9\u4e9b\u68c0\u67e5\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e0c\u671b\u7684\u6587\u4ef6\u88ab\u62d2\u7edd\u3002\u6b64\u9009\u9879\u7981\u7528\u8fd9\u4e9b\u68c0\u67e5\uff0c\u4f46\u9700\u8981\u5b8c\u5168\u4fe1\u4efb\u670d\u52a1\u5668\u4e0d\u4f1a\u53d1\u9001\u610f\u5916\u7684\u6587\u4ef6\u540d\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-v\uff1a\u8be6\u7ec6\u6a21\u5f0f\u3002\u5bfc\u81f4scp\u548cssh(1)\u6253\u5370\u5173\u4e8e\u5b83\u4eec\u7684\u8fdb\u5c55\u7684\u8c03\u8bd5\u6d88\u606f\u3002\u8fd9\u5728\u8c03\u8bd5\u8fde\u63a5\u3001\u8eab\u4efd\u9a8c\u8bc1\u548c\u914d\u7f6e\u95ee\u9898\u65f6\u5f88\u6709\u5e2e\u52a9\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-c cipher\uff1a \u9009\u62e9\u7528\u4e8e\u52a0\u5bc6\u6570\u636e\u4f20\u8f93\u7684\u5bc6\u7801\u3002\u6b64\u9009\u9879\u76f4\u63a5\u4f20\u9012\u7ed9ssh(1)\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-F ssh_config\uff1a \u6307\u5b9a\u7528\u4e8essh\u7684\u66ff\u4ee3\u6bcf\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u3002\u6b64\u9009\u9879\u76f4\u63a5\u4f20\u9012\u7ed9ssh(1)\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-i identity_file\uff1a \u9009\u62e9\u7528\u4e8e\u516c\u94a5\u8eab\u4efd\u9a8c\u8bc1\u7684\u8eab\u4efd\uff08\u79c1\u94a5\uff09\u6587\u4ef6\u3002\u6b64\u9009\u9879\u76f4\u63a5\u4f20\u9012\u7ed9ssh(1)\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-l limit\uff1a \u9650\u5236\u4f7f\u7528\u7684\u5e26\u5bbd\uff0c\u4ee5Kbit/s\u4e3a\u5355\u4f4d\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-o ssh_option\uff1a \u53ef\u4ee5\u7528\u4e8e\u4ee5ssh_config(5)\u4e2d\u4f7f\u7528\u7684\u683c\u5f0f\u4f20\u9012\u9009\u9879\u7ed9ssh\u3002\u8fd9\u5bf9\u4e8e\u6307\u5b9a\u6ca1\u6709\u5355\u72ec\u7684scp\u547d\u4ee4\u884c\u6807\u5fd7\u7684\u9009\u9879\u975e\u5e38\u6709\u7528\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-P port\uff1a\u6307\u5b9a\u8981\u8fde\u63a5\u5230\u8fdc\u7a0b\u4e3b\u673a\u7684\u7aef\u53e3\u3002\u8bf7\u6ce8\u610f\uff0c\u6b64\u9009\u9879\u4f7f\u7528\u5927\u5199\u7684 'P'\uff0c\u56e0\u4e3a\u5c0f\u5199\u7684 '-p' \u5df2\u7ecf\u88ab\u4fdd\u7559\u7528\u4e8e\u4fdd\u7559\u6587\u4ef6\u7684\u4fee\u6539\u65f6\u95f4\u548c\u6a21\u5f0f\u3002"}),"\n",(0,i.jsx)(n.li,{children:"-S program\uff1a \u7528\u4e8e\u52a0\u5bc6\u8fde\u63a5\u7684\u7a0b\u5e8f\u540d\u79f0\u3002\u8be5\u7a0b\u5e8f\u5fc5\u987b\u7406\u89e3ssh(1)\u9009\u9879\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u4ece\u672c\u5730\u590d\u5236\u5230\u8fdc\u7a0b"})}),"\n",(0,i.jsx)(n.p,{children:"\u547d\u4ee4\u683c\u5f0f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"scp local_file remote_username@remote_ip:remote_folder \n\u6216\u8005 \nscp local_file remote_username@remote_ip:remote_file \n\u6216\u8005 \nscp local_file remote_ip:remote_folder \n\u6216\u8005 \nscp local_file remote_ip:remote_file \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7b2c1,2\u4e2a\u6307\u5b9a\u4e86\u7528\u6237\u540d\uff0c\u547d\u4ee4\u6267\u884c\u540e\u9700\u8981\u518d\u8f93\u5165\u5bc6\u7801\uff0c\u7b2c1\u4e2a\u4ec5\u6307\u5b9a\u4e86\u8fdc\u7a0b\u7684\u76ee\u5f55\uff0c\u6587\u4ef6\u540d\u5b57\u4e0d\u53d8\uff0c\u7b2c2\u4e2a\u6307\u5b9a\u4e86\u6587\u4ef6\u540d\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u7b2c3,4\u4e2a\u6ca1\u6709\u6307\u5b9a\u7528\u6237\u540d\uff0c\u547d\u4ee4\u6267\u884c\u540e\u9700\u8981\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u7b2c3\u4e2a\u4ec5\u6307\u5b9a\u4e86\u8fdc\u7a0b\u7684\u76ee\u5f55\uff0c\u6587\u4ef6\u540d\u5b57\u4e0d\u53d8\uff0c\u7b2c4\u4e2a\u6307\u5b9a\u4e86\u6587\u4ef6\u540d\uff1b"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5e94\u7528\u5b9e\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"scp /home/sunrise/test.c root@192.168.1.10:/userdata \nscp /home/sunrise/test.c root@192.168.1.10:/userdata/test_01.c\nscp /home/sunrise/test.c 192.168.1.10:/userdata\nscp /home/sunrise/test.c 192.168.1.10:/userdata/test_01.c\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u590d\u5236\u76ee\u5f55\u547d\u4ee4\u683c\u5f0f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"scp -r local_folder remote_username@remote_ip:remote_folder \n\u6216\u8005 \nscp -r local_folder remote_ip:remote_folder \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7b2c1\u4e2a\u6307\u5b9a\u4e86\u7528\u6237\u540d\uff0c\u547d\u4ee4\u6267\u884c\u540e\u9700\u8981\u518d\u8f93\u5165\u5bc6\u7801\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u7b2c2\u4e2a\u6ca1\u6709\u6307\u5b9a\u7528\u6237\u540d\uff0c\u547d\u4ee4\u6267\u884c\u540e\u9700\u8981\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\uff1b"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5e94\u7528\u5b9e\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"scp -r /home/sunrise/app/ root@192.168.1.10:/userdata/app/ \nscp -r /home/sunrise/app/ 192.168.1.10:/userdata/app/ \n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u5c06\u672c\u5730 ",(0,i.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u590d\u5236\u5230\u8fdc\u7a0b",(0,i.jsx)(n.code,{children:"/userdata/app/"}),"\u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u4ece\u8fdc\u7a0b\u590d\u5236\u5230\u672c\u5730"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u8fdc\u7a0b\u590d\u5236\u5230\u672c\u5730\u7684scp\u547d\u4ee4\u4e0e\u4e0a\u9762\u7684\u547d\u4ee4\u96f7\u540c\uff0c\u53ea\u8981\u5c06\u4ece\u672c\u5730\u590d\u5236\u5230\u8fdc\u7a0b\u7684\u547d\u4ee4\u540e\u97622\u4e2a\u53c2\u6570\u4e92\u6362\u987a\u5e8f\u5c31\u884c\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u8fdc\u7a0b\u673a\u5668\u590d\u5236\u6587\u4ef6\u5230\u672c\u5730\u76ee\u5f55"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"scp sunrise@192.168.1.10:/userdata/log.log /home/sunrise/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece192.168.1.10\u673a\u5668\u4e0a\u7684",(0,i.jsx)(n.code,{children:"/userdata/"}),"\u7684\u76ee\u5f55\u4e2d\u4e0b\u8f7d",(0,i.jsx)(n.code,{children:"log.log"})," \u6587\u4ef6\u5230\u672c\u5730",(0,i.jsx)(n.code,{children:"/home/sunrise/"}),"\u76ee\u5f55\u4e2d\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(96540);const r={},c=i.createContext(r);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);