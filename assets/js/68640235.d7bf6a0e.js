"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2797],{69925:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var l=e(74848),s=e(28453);const r={sidebar_position:1},c="rsync",d={id:"Appendix/linux-command-manual/cmd_rsync",title:"rsync",description:"Rsync \u662f\u4e00\u4e2a\u5feb\u901f\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u6587\u4ef6\u590d\u5236\u5de5\u5177\u3002\u5b83\u53ef\u4ee5\u5728\u672c\u5730\u590d\u5236\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4efb\u4f55\u8fdc\u7a0b shell \u4ece\u53e6\u4e00\u53f0\u4e3b\u673a\u590d\u5236\u6587\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u4e0e\u8fdc\u7a0b\u7684 rsync \u5b88\u62a4\u7a0b\u5e8f\u8fdb\u884c\u6587\u4ef6\u590d\u5236\u3002\u5b83\u63d0\u4f9b\u4e86\u5927\u91cf\u9009\u9879\uff0c\u53ef\u4ee5\u63a7\u5236\u5176\u884c\u4e3a\u7684\u5404\u4e2a\u65b9\u9762\uff0c\u5e76\u5141\u8bb8\u975e\u5e38\u7075\u6d3b\u5730\u6307\u5b9a\u8981\u590d\u5236\u7684\u6587\u4ef6\u96c6\u5408\u3002Rsync \u4ee5\u5176\u589e\u91cf\u4f20\u8f93\u7b97\u6cd5\u800c\u95fb\u540d\uff0c\u8be5\u7b97\u6cd5\u901a\u8fc7\u4ec5\u53d1\u9001\u6e90\u6587\u4ef6\u4e0e\u76ee\u6807\u4e2d\u73b0\u6709\u6587\u4ef6\u4e4b\u95f4\u7684\u5dee\u5f02\u6765\u51cf\u5c11\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u7684\u6570\u636e\u91cf\u3002Rsync \u5e7f\u6cdb\u7528\u4e8e\u5907\u4efd\u548c\u955c\u50cf\u64cd\u4f5c\uff0c\u540c\u65f6\u4e5f\u4f5c\u4e3a\u65e5\u5e38\u4f7f\u7528\u7684\u6539\u8fdb\u578b\u590d\u5236\u547d\u4ee4\u3002",source:"@site/docs/09_Appendix/linux-command-manual/cmd_rsync.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_rsync",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_rsync",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/09_Appendix/linux-command-manual/cmd_rsync.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"route",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_route"},next:{title:"scp",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_scp"}},h={},x=[{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u9009\u9879\u8bf4\u660e",id:"\u9009\u9879\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}];function j(n){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"rsync",children:"rsync"}),"\n",(0,l.jsx)(i.p,{children:"Rsync \u662f\u4e00\u4e2a\u5feb\u901f\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u6587\u4ef6\u590d\u5236\u5de5\u5177\u3002\u5b83\u53ef\u4ee5\u5728\u672c\u5730\u590d\u5236\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4efb\u4f55\u8fdc\u7a0b shell \u4ece\u53e6\u4e00\u53f0\u4e3b\u673a\u590d\u5236\u6587\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u4e0e\u8fdc\u7a0b\u7684 rsync \u5b88\u62a4\u7a0b\u5e8f\u8fdb\u884c\u6587\u4ef6\u590d\u5236\u3002\u5b83\u63d0\u4f9b\u4e86\u5927\u91cf\u9009\u9879\uff0c\u53ef\u4ee5\u63a7\u5236\u5176\u884c\u4e3a\u7684\u5404\u4e2a\u65b9\u9762\uff0c\u5e76\u5141\u8bb8\u975e\u5e38\u7075\u6d3b\u5730\u6307\u5b9a\u8981\u590d\u5236\u7684\u6587\u4ef6\u96c6\u5408\u3002Rsync \u4ee5\u5176\u589e\u91cf\u4f20\u8f93\u7b97\u6cd5\u800c\u95fb\u540d\uff0c\u8be5\u7b97\u6cd5\u901a\u8fc7\u4ec5\u53d1\u9001\u6e90\u6587\u4ef6\u4e0e\u76ee\u6807\u4e2d\u73b0\u6709\u6587\u4ef6\u4e4b\u95f4\u7684\u5dee\u5f02\u6765\u51cf\u5c11\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u7684\u6570\u636e\u91cf\u3002Rsync \u5e7f\u6cdb\u7528\u4e8e\u5907\u4efd\u548c\u955c\u50cf\u64cd\u4f5c\uff0c\u540c\u65f6\u4e5f\u4f5c\u4e3a\u65e5\u5e38\u4f7f\u7528\u7684\u6539\u8fdb\u578b\u590d\u5236\u547d\u4ee4\u3002"}),"\n",(0,l.jsx)(i.p,{children:'Rsync \u901a\u8fc7\u9ed8\u8ba4\u7684"\u5feb\u901f\u68c0\u67e5"\u7b97\u6cd5\u67e5\u627e\u9700\u8981\u4f20\u8f93\u7684\u6587\u4ef6\uff0c\u8be5\u7b97\u6cd5\u67e5\u627e\u5927\u5c0f\u6216\u6700\u540e\u4fee\u6539\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u6587\u4ef6\u3002\u5f53\u5feb\u901f\u68c0\u67e5\u8868\u660e\u6587\u4ef6\u7684\u6570\u636e\u4e0d\u9700\u8981\u66f4\u65b0\u65f6\uff0c\u5bf9\u76ee\u6807\u6587\u4ef6\u4e0a\u7684\u5176\u4ed6\u4fdd\u7559\u5c5e\u6027\uff08\u6839\u636e\u9009\u9879\u8bf7\u6c42\uff09\u7684\u4efb\u4f55\u66f4\u6539\u5c06\u76f4\u63a5\u5e94\u7528\u4e8e\u76ee\u6807\u6587\u4ef6\u3002'}),"\n",(0,l.jsx)(i.h2,{id:"\u8bed\u6cd5\u8bf4\u660e",children:"\u8bed\u6cd5\u8bf4\u660e"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-shell",children:"Usage: rsync [OPTION]... SRC [SRC]... DEST\n  or   rsync [OPTION]... SRC [SRC]... [USER@]HOST:DEST\n  or   rsync [OPTION]... SRC [SRC]... [USER@]HOST::DEST\n  or   rsync [OPTION]... SRC [SRC]... rsync://[USER@]HOST[:PORT]/DEST\n  or   rsync [OPTION]... [USER@]HOST:SRC [DEST]\n  or   rsync [OPTION]... [USER@]HOST::SRC [DEST]\n  or   rsync [OPTION]... rsync://[USER@]HOST[:PORT]/SRC [DEST]\n  \nThe ':' usages connect via remote shell, while '::' & 'rsync://' usages connect\nto an rsync daemon, and require SRC or DEST to start with a module name.\n"})}),"\n",(0,l.jsx)(i.p,{children:"\u7b80\u6613\u5199\u6cd5:"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"rsync [OPTION...] SRC... [DEST]\n"})}),"\n",(0,l.jsx)(i.h2,{id:"\u9009\u9879\u8bf4\u660e",children:"\u9009\u9879\u8bf4\u660e"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["-v, --verbose\uff1a\u589e\u52a0\u8be6\u7ec6\u4fe1\u606f\u8f93\u51fa","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--info=FLAGS\uff1a\u6307\u5b9a\u8be6\u7ec6\u4fe1\u606f\u8f93\u51fa\u7684\u6807\u5fd7"}),"\n",(0,l.jsx)(i.li,{children:"--debug=FLAGS\uff1a\u6307\u5b9a\u8c03\u8bd5\u8be6\u7ec6\u4fe1\u606f\u8f93\u51fa\u7684\u6807\u5fd7"}),"\n",(0,l.jsx)(i.li,{children:"--msgs2stderr\uff1a\u4e3a\u8c03\u8bd5\u8f93\u51fa\u7279\u6b8a\u5904\u7406"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["-q, --quiet\uff1a\u6291\u5236\u975e\u9519\u8bef\u6d88\u606f\u7684\u8f93\u51fa","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--no-motd\uff1a\u6291\u5236\u5b88\u62a4\u7a0b\u5e8f\u6a21\u5f0f\u4e0b\u7684MOTD\uff08\u8bf7\u53c2\u9605man\u9875\u6ce8\u610f\u4e8b\u9879\uff09"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-c, --checksum\uff1a\u57fa\u4e8e\u6821\u9a8c\u548c\u800c\u4e0d\u662f\u4fee\u6539\u65f6\u95f4\u548c\u6587\u4ef6\u5927\u5c0f\u8fdb\u884c\u8df3\u8fc7"}),"\n",(0,l.jsxs)(i.li,{children:["-a, --archive\uff1a\u5b58\u6863\u6a21\u5f0f\uff1b\u7b49\u540c\u4e8e -rlptgoD\uff08\u4e0d\u5305\u62ec -H\u3001-A\u3001-X\uff09","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--no-OPTION\uff1a\u5173\u95ed\u9690\u542b\u7684OPTION\uff08\u4f8b\u5982\uff0c--no-D\uff09"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-r, --recursive\uff1a\u9012\u5f52\u5904\u7406\u76ee\u5f55"}),"\n",(0,l.jsxs)(i.li,{children:["-R, --relative\uff1a\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\u540d","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--no-implied-dirs\uff1a\u4e0d\u968f --relative \u4e00\u8d77\u53d1\u9001\u9690\u542b\u76ee\u5f55"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["-b, --backup\uff1a\u521b\u5efa\u5907\u4efd\u6587\u4ef6\uff08\u53c2\u89c1 --suffix \u548c --backup-dir\uff09","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--backup-dir=DIR\uff1a\u5c06\u5907\u4efd\u6587\u4ef6\u653e\u5165\u57fa\u4e8eDIR\u7684\u5c42\u6b21\u7ed3\u6784\u4e2d"}),"\n",(0,l.jsx)(i.li,{children:"--suffix=SUFFIX\uff1a\u8bbe\u7f6e\u5907\u4efd\u6587\u4ef6\u7684\u540e\u7f00\uff08\u9ed8\u8ba4\u4e3a~\uff0c\u5982\u679c\u6ca1\u6709 --backup-dir\uff09"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["-u, --update\uff1a\u8df3\u8fc7\u63a5\u6536\u7aef\u4e0a\u66f4\u65b0\u7684\u6587\u4ef6","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--inplace\uff1a\u5728\u539f\u5730\u66f4\u65b0\u76ee\u6807\u6587\u4ef6\uff08\u8bf7\u53c2\u9605man\u9875\uff09"}),"\n",(0,l.jsx)(i.li,{children:"--append\uff1a\u5c06\u6570\u636e\u9644\u52a0\u5230\u8f83\u77ed\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--append-verify\uff1a\u7c7b\u4f3c\u4e8e --append\uff0c\u4f46\u9644\u52a0\u7684\u6587\u4ef6\u6709\u65e7\u6570\u636e\u7684\u6587\u4ef6\u6821\u9a8c\u548c"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-d, --dirs\uff1a\u4f20\u8f93\u76ee\u5f55\u800c\u4e0d\u9012\u5f52"}),"\n",(0,l.jsx)(i.li,{children:"-l, --links\uff1a\u590d\u5236\u7b26\u53f7\u94fe\u63a5\u4f5c\u4e3a\u7b26\u53f7\u94fe\u63a5"}),"\n",(0,l.jsxs)(i.li,{children:["-L, --copy-links\uff1a\u5c06\u7b26\u53f7\u94fe\u63a5\u8f6c\u6362\u4e3a\u6240\u6307\u5b9a\u7684\u6587\u4ef6/\u76ee\u5f55","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:'--copy-unsafe-links\uff1a\u4ec5\u8f6c\u6362"\u4e0d\u5b89\u5168"\u7684\u7b26\u53f7\u94fe\u63a5'}),"\n",(0,l.jsx)(i.li,{children:"--safe-links\uff1a\u5ffd\u7565\u6307\u5411\u6e90\u6811\u5916\u90e8\u7684\u7b26\u53f7\u94fe\u63a5"}),"\n",(0,l.jsx)(i.li,{children:"--munge-links\uff1a\u6df7\u6dc6\u7b26\u53f7\u94fe\u63a5\u4ee5\u4f7f\u5176\u66f4\u5b89\u5168\uff08\u4f46\u4e0d\u53ef\u7528\uff09"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-k, --copy-dirlinks\uff1a\u5c06\u76ee\u6807\u76ee\u5f55\u7684\u7b26\u53f7\u94fe\u63a5\u8f6c\u6362\u4e3a\u6240\u6307\u5b9a\u7684\u76ee\u5f55"}),"\n",(0,l.jsx)(i.li,{children:"-K, --keep-dirlinks\uff1a\u5c06\u63a5\u6536\u7aef\u4e0a\u7684\u7b26\u53f7\u94fe\u63a5\u76ee\u5f55\u89c6\u4e3a\u76ee\u5f55"}),"\n",(0,l.jsx)(i.li,{children:"-H, --hard-links\uff1a\u4fdd\u7559\u786c\u94fe\u63a5"}),"\n",(0,l.jsx)(i.li,{children:"-p, --perms\uff1a\u4fdd\u7559\u6743\u9650"}),"\n",(0,l.jsxs)(i.li,{children:["-E, --executability\uff1a\u4fdd\u7559\u6587\u4ef6\u7684\u53ef\u6267\u884c\u6027","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--chmod=CHMOD\uff1a\u5f71\u54cd\u6587\u4ef6\u548c/\u6216\u76ee\u5f55\u7684\u6743\u9650"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-A, --acls\uff1a\u4fdd\u7559ACL\uff08\u9690\u542b --perms\uff09"}),"\n",(0,l.jsx)(i.li,{children:"-X, --xattrs\uff1a\u4fdd\u7559\u6269\u5c55\u5c5e\u6027"}),"\n",(0,l.jsx)(i.li,{children:"-o, --owner\uff1a\u4fdd\u7559\u6240\u6709\u8005\uff08\u4ec5\u8d85\u7ea7\u7528\u6237\uff09"}),"\n",(0,l.jsxs)(i.li,{children:["-g, --group\uff1a\u4fdd\u7559\u7ec4","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--devices\uff1a\u4fdd\u7559\u8bbe\u5907\u6587\u4ef6\uff08\u4ec5\u8d85\u7ea7\u7528\u6237\uff09"}),"\n",(0,l.jsx)(i.li,{children:"--copy-devices\uff1a\u5c06\u8bbe\u5907\u5185\u5bb9\u590d\u5236\u4e3a\u666e\u901a\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--specials\uff1a\u4fdd\u7559\u7279\u6b8a\u6587\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-D\uff1a\u7b49\u540c\u4e8e --devices --specials"}),"\n",(0,l.jsx)(i.li,{children:"-t, --times\uff1a\u4fdd\u7559\u4fee\u6539\u65f6\u95f4"}),"\n",(0,l.jsx)(i.li,{children:"-O, --omit-dir-times\uff1a\u4ece --times \u4e2d\u7701\u7565\u76ee\u5f55"}),"\n",(0,l.jsxs)(i.li,{children:["-J, --omit-link-times\uff1a\u4ece --times \u4e2d\u7701\u7565\u7b26\u53f7\u94fe\u63a5","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--super\uff1a\u63a5\u6536\u7aef\u5c1d\u8bd5\u8d85\u7ea7\u7528\u6237\u6d3b\u52a8"}),"\n",(0,l.jsx)(i.li,{children:"--fake-super\uff1a\u4f7f\u7528xattrs\u5b58\u50a8/\u6062\u590d\u7279\u6743\u5c5e\u6027"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["-S, --sparse\uff1a\u5c06\u8fde\u7eed\u7684\u7a7a\u5757\u8f6c\u6362\u4e3a\u7a00\u758f\u5757","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--preallocate\uff1a\u5728\u5199\u5165\u6587\u4ef6\u4e4b\u524d\u5206\u914d\u76ee\u6807\u6587\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-n, --dry-run\uff1a\u6267\u884c\u8bd5\u8fd0\u884c\uff0c\u4e0d\u8fdb\u884c\u5b9e\u9645\u66f4\u6539"}),"\n",(0,l.jsxs)(i.li,{children:["-W, --whole-file\uff1a\u6574\u4e2a\u6587\u4ef6\u4f20\u8f93\uff08\u4e0d\u4f7f\u7528\u589e\u91cf\u4f20\u8f93\u7b97\u6cd5\uff09","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--checksum-choice=STR\uff1a\u9009\u62e9\u6821\u9a8c\u548c\u7b97\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-x, --one-file-system\uff1a\u4e0d\u8de8\u8d8a\u6587\u4ef6\u7cfb\u7edf\u8fb9\u754c"}),"\n",(0,l.jsx)(i.li,{children:"-B, --block-size=SIZE\uff1a\u5f3a\u5236\u4f7f\u7528\u56fa\u5b9a\u7684\u6821\u9a8c\u5757\u5927\u5c0f"}),"\n",(0,l.jsxs)(i.li,{children:["-e, --rsh=COMMAND\uff1a\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fdc\u7a0b shell","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--rsync-path=PROGRAM\uff1a\u6307\u5b9a\u5728\u8fdc\u7a0b\u673a\u5668\u4e0a\u8fd0\u884c\u7684rsync"}),"\n",(0,l.jsx)(i.li,{children:"--existing\uff1a\u8df3\u8fc7\u5728\u63a5\u6536\u7aef\u521b\u5efa\u65b0\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--ignore-existing\uff1a\u8df3\u8fc7\u5df2\u7ecf\u5b58\u5728\u4e8e\u63a5\u6536\u7aef\u7684\u6587\u4ef6\u7684\u66f4\u65b0"}),"\n",(0,l.jsx)(i.li,{children:"--remove-source-files\uff1a\u53d1\u9001\u7aef\u5220\u9664\u5df2\u540c\u6b65\u7684\u6587\u4ef6\uff08\u975e\u76ee\u5f55\uff09"}),"\n",(0,l.jsx)(i.li,{children:"--del\uff1a--delete-during \u7684\u522b\u540d"}),"\n",(0,l.jsx)(i.li,{children:"--delete\uff1a\u4ece\u76ee\u6807\u76ee\u5f55\u4e2d\u5220\u9664\u591a\u4f59\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--delete-before\uff1a\u5728\u4f20\u8f93\u671f\u95f4\u63a5\u6536\u7aef\u5220\u9664"}),"\n",(0,l.jsx)(i.li,{children:"--delete-during\uff1a\u5728\u4f20\u8f93\u671f\u95f4\u63a5\u6536\u7aef\u5220\u9664"}),"\n",(0,l.jsx)(i.li,{children:"--delete-delay\uff1a\u627e\u5230\u5220\u9664\u64cd\u4f5c\u540e\u624d\u5220\u9664"}),"\n",(0,l.jsx)(i.li,{children:"--delete-after\uff1a\u5728\u4f20\u8f93\u540e\u63a5\u6536\u7aef\u5220\u9664"}),"\n",(0,l.jsx)(i.li,{children:"--delete-excluded\uff1a\u4e5f\u4ece\u76ee\u6807\u76ee\u5f55\u4e2d\u5220\u9664\u88ab\u6392\u9664\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--ignore-missing-args\uff1a\u5ffd\u7565\u7f3a\u5931\u7684\u6e90\u53c2\u6570\u800c\u4e0d\u62a5\u9519"}),"\n",(0,l.jsx)(i.li,{children:"--delete-missing-args\uff1a\u4ece\u76ee\u6807\u4e2d\u5220\u9664\u7f3a\u5931\u7684\u6e90\u53c2\u6570"}),"\n",(0,l.jsx)(i.li,{children:"--ignore-errors\uff1a\u5373\u4f7f\u51fa\u73b0I/O\u9519\u8bef\u4e5f\u8fdb\u884c\u5220\u9664"}),"\n",(0,l.jsx)(i.li,{children:"--force\uff1a\u5373\u4f7f\u4e0d\u4e3a\u7a7a\u4e5f\u5f3a\u5236\u5220\u9664\u76ee\u5f55"}),"\n",(0,l.jsx)(i.li,{children:"--max-delete=NUM\uff1a\u6700\u591a\u5220\u9664 NUM \u4e2a\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--max-size=SIZE\uff1a\u4e0d\u4f20\u8f93\u5927\u4e8e SIZE \u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--min-size=SIZE\uff1a\u4e0d\u4f20\u8f93\u5c0f\u4e8e SIZE \u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--partial\uff1a\u4fdd\u7559\u90e8\u5206\u4f20\u8f93\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--partial-dir=DIR\uff1a\u5c06\u90e8\u5206\u4f20\u8f93\u7684\u6587\u4ef6\u653e\u5165 DIR"}),"\n",(0,l.jsx)(i.li,{children:"--delay-updates\uff1a\u5728\u4f20\u8f93\u7ed3\u675f\u65f6\u5c06\u6240\u6709\u66f4\u65b0\u7684\u6587\u4ef6\u653e\u5728\u6307\u5b9a\u4f4d\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["-m, --prune-empty-dirs\uff1a\u4ece\u6587\u4ef6\u5217\u8868\u4e2d\u526a\u9664\u7a7a\u76ee\u5f55\u94fe","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--numeric-ids\uff1a\u4e0d\u901a\u8fc7\u7528\u6237\u540d/\u7ec4\u540d\u6620\u5c04uid/gid\u503c"}),"\n",(0,l.jsx)(i.li,{children:"--usermap=STRING\uff1a\u81ea\u5b9a\u4e49\u7528\u6237\u540d\u6620\u5c04"}),"\n",(0,l.jsx)(i.li,{children:"--groupmap=STRING\uff1a\u81ea\u5b9a\u4e49\u7ec4\u540d\u6620\u5c04"}),"\n",(0,l.jsxs)(i.li,{children:["--chown=USER",":GROUP","\uff1a\u7b80\u5355\u7684\u7528\u6237\u540d/\u7ec4\u540d\u6620\u5c04"]}),"\n",(0,l.jsx)(i.li,{children:"--timeout=SECONDS\uff1a\u8bbe\u7f6eI/O\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09"}),"\n",(0,l.jsx)(i.li,{children:"--contimeout=SECONDS\uff1a\u8bbe\u7f6e\u5b88\u62a4\u7a0b\u5e8f\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-I, --ignore-times\uff1a\u4e0d\u8df3\u8fc7\u5927\u5c0f\u548c\u4fee\u6539\u65f6\u95f4\u5339\u914d\u7684\u6587\u4ef6"}),"\n",(0,l.jsxs)(i.li,{children:["-M, --remote-option=OPTION\uff1a\u4ec5\u5c06\u9009\u9879\u53d1\u9001\u5230\u8fdc\u7a0b\u7aef","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--size-only\uff1a\u8df3\u8fc7\u5927\u5c0f\u5339\u914d\u7684\u6587\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"@, --modify-window=NUM\uff1a\u8bbe\u7f6e\u4fee\u6539\u65f6\u95f4\u6bd4\u8f83\u7684\u7cbe\u5ea6"}),"\n",(0,l.jsx)(i.li,{children:"-T, --temp-dir=DIR\uff1a\u5728\u76ee\u5f55DIR\u4e2d\u521b\u5efa\u4e34\u65f6\u6587\u4ef6"}),"\n",(0,l.jsxs)(i.li,{children:["-y, --fuzzy\uff1a\u5728\u6ca1\u6709\u76ee\u6807\u6587\u4ef6\u7684\u60c5\u51b5\u4e0b\u67e5\u627e\u76f8\u4f3c\u7684\u6587\u4ef6\u4f5c\u4e3a\u57fa\u51c6","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--compare-dest=DIR\uff1a\u76f8\u5bf9\u4e8eDIR\uff0c\u4e5f\u6bd4\u8f83\u76ee\u6807\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--copy-dest=DIR\uff1a\u5e76\u5305\u62ec\u672a\u66f4\u6539\u7684\u6587\u4ef6\u7684\u526f\u672c"}),"\n",(0,l.jsx)(i.li,{children:"--link-dest=DIR\uff1a\u5728\u672a\u66f4\u6539\u65f6\u5c06\u6587\u4ef6\u786c\u94fe\u63a5\u5230DIR\u4e2d"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["-z, --compress\uff1a\u5728\u4f20\u8f93\u671f\u95f4\u538b\u7f29\u6587\u4ef6\u6570\u636e","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--compress-level=NUM\uff1a\u660e\u786e\u8bbe\u7f6e\u538b\u7f29\u7ea7\u522b"}),"\n",(0,l.jsx)(i.li,{children:"--skip-compress=LIST\uff1a\u8df3\u8fc7\u5177\u6709LIST\u4e2d\u540e\u7f00\u7684\u6587\u4ef6\u7684\u538b\u7f29"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-C, --cvs-exclude\uff1a\u81ea\u52a8\u5ffd\u7565\u4e0eCVS\u76f8\u540c\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"-f, --filter=RULE\uff1a\u6dfb\u52a0\u6587\u4ef6\u8fc7\u6ee4\u89c4\u5219"}),"\n",(0,l.jsxs)(i.li,{children:["-F\uff1a\u4e0e --filter='dir-merge /.rsync-filter' \u76f8\u540c","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--exclude=PATTERN\uff1a\u6392\u9664\u4e0ePATTERN\u5339\u914d\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--exclude-from=FILE\uff1a\u4eceFILE\u4e2d\u8bfb\u53d6\u6392\u9664\u6a21\u5f0f"}),"\n",(0,l.jsx)(i.li,{children:"--include=PATTERN\uff1a\u4e0d\u6392\u9664\u4e0ePATTERN\u5339\u914d\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--include-from=FILE\uff1a\u4eceFILE\u4e2d\u8bfb\u53d6\u5305\u542b\u6a21\u5f0f"}),"\n",(0,l.jsx)(i.li,{children:"--files-from=FILE\uff1a\u4eceFILE\u4e2d\u8bfb\u53d6\u6e90\u6587\u4ef6\u540d\u7684\u5217\u8868"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-0, --from0\uff1a\u6240\u6709 *-from/filter \u6587\u4ef6\u4ee50\u5206\u9694"}),"\n",(0,l.jsxs)(i.li,{children:["-s, --protect-args\uff1a\u4e0d\u5bf9\u7a7a\u683c\u8fdb\u884c\u62c6\u5206\uff0c\u53ea\u5bf9\u901a\u914d\u7b26\u7279\u6b8a\u5b57\u7b26\u8fdb\u884c\u62c6\u5206","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--trust-sender\uff1a\u4fe1\u4efb\u8fdc\u7a0b\u53d1\u9001\u65b9\u7684\u6587\u4ef6\u5217\u8868"}),"\n",(0,l.jsx)(i.li,{children:"--address=ADDRESS\uff1a\u5c06\u4f20\u51fa\u5957\u63a5\u5b57\u7ed1\u5b9a\u5230\u5b88\u62a4\u7a0b\u5e8f\u7684\u5730\u5740"}),"\n",(0,l.jsx)(i.li,{children:"--port=PORT\uff1a\u6307\u5b9a\u53cc\u5192\u53f7\u7684\u5907\u7528\u7aef\u53e3\u53f7"}),"\n",(0,l.jsx)(i.li,{children:"--sockopts=OPTIONS\uff1a\u6307\u5b9a\u81ea\u5b9a\u4e49TCP\u9009\u9879"}),"\n",(0,l.jsx)(i.li,{children:"--blocking-io\uff1a\u4f7f\u7528\u963b\u585eI/O\u8fdb\u884c\u8fdc\u7a0bshell\u64cd\u4f5c"}),"\n",(0,l.jsx)(i.li,{children:"--stats\uff1a\u63d0\u4f9b\u4e00\u4e9b\u6587\u4ef6\u4f20\u8f93\u7edf\u8ba1\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-8, --8-bit-output\uff1a\u5728\u8f93\u51fa\u4e2d\u4fdd\u7559\u9ad8\u4f4d\u5b57\u7b26"}),"\n",(0,l.jsxs)(i.li,{children:["-h, --human-readable\uff1a\u4ee5\u4eba\u7c7b\u53ef\u8bfb\u7684\u683c\u5f0f\u8f93\u51fa\u6570\u5b57","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--progress\uff1a\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u663e\u793a\u8fdb\u5ea6"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-P\uff1a\u4e0e --partial --progress \u76f8\u540c"}),"\n",(0,l.jsxs)(i.li,{children:["-i, --itemize-changes\uff1a\u8f93\u51fa\u6240\u6709\u66f4\u65b0\u7684\u53d8\u66f4\u6458\u8981","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--out-format=FORMAT\uff1a\u4f7f\u7528\u6307\u5b9a\u7684\u683c\u5f0f\u8f93\u51fa\u66f4\u65b0"}),"\n",(0,l.jsx)(i.li,{children:"--log-file=FILE\uff1a\u5c06\u64cd\u4f5c\u8bb0\u5f55\u5230\u6307\u5b9a\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--log-file-format=FMT\uff1a\u4f7f\u7528\u6307\u5b9a\u7684FMT\u8bb0\u5f55\u66f4\u65b0"}),"\n",(0,l.jsx)(i.li,{children:"--password-file=FILE\uff1a\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u5b88\u62a4\u7a0b\u5e8f\u8bbf\u95ee\u5bc6\u7801"}),"\n",(0,l.jsx)(i.li,{children:"--list-only\uff1a\u4ec5\u5217\u51fa\u6587\u4ef6\uff0c\u4e0d\u590d\u5236\u5b83\u4eec"}),"\n",(0,l.jsx)(i.li,{children:"--bwlimit=RATE\uff1a\u9650\u5236\u5957\u63a5\u5b57I/O\u5e26\u5bbd"}),"\n",(0,l.jsxs)(i.li,{children:["--stop-at=y-m-dTh",":m","\uff1a\u5728\u5e74-\u6708-\u65e5Thour",":minute","\u65f6\u505c\u6b62rsync"]}),"\n",(0,l.jsx)(i.li,{children:"--time-limit=MINS\uff1a\u5728MINS\u5206\u949f\u540e\u505c\u6b62rsync"}),"\n",(0,l.jsx)(i.li,{children:"--outbuf=N|L|B\uff1a\u5c06\u8f93\u51fa\u7f13\u51b2\u8bbe\u7f6e\u4e3a\u65e0\u3001\u884c\u6216\u5757"}),"\n",(0,l.jsx)(i.li,{children:"--write-batch=FILE\uff1a\u5c06\u6279\u5904\u7406\u66f4\u65b0\u5199\u5165\u6587\u4ef6"}),"\n",(0,l.jsx)(i.li,{children:"--only-write-batch=FILE\uff1a\u7c7b\u4f3c\u4e8e --write-batch\uff0c\u4f46\u4e0d\u66f4\u65b0\u76ee\u6807"}),"\n",(0,l.jsx)(i.li,{children:"--read-batch=FILE\uff1a\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6279\u5904\u7406\u66f4\u65b0"}),"\n",(0,l.jsx)(i.li,{children:"--protocol=NUM\uff1a\u5f3a\u5236\u4f7f\u7528\u65e7\u7684\u534f\u8bae\u7248\u672c"}),"\n",(0,l.jsx)(i.li,{children:"--iconv=CONVERT_SPEC\uff1a\u8bf7\u6c42\u5bf9\u6587\u4ef6\u540d\u8fdb\u884c\u5b57\u7b26\u96c6\u8f6c\u6362"}),"\n",(0,l.jsx)(i.li,{children:"--checksum-seed=NUM\uff1a\u8bbe\u7f6e\u5757/\u6587\u4ef6\u6821\u9a8c\u548c\u79cd\u5b50\uff08\u9ad8\u7ea7\u9009\u9879\uff09"}),"\n",(0,l.jsx)(i.li,{children:"--noatime\uff1a\u5728\u6253\u5f00\u6e90\u6587\u4ef6\u65f6\u4e0d\u6539\u53d8atime"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"-4, --ipv4\uff1a\u4f18\u5148\u4f7f\u7528IPv4"}),"\n",(0,l.jsxs)(i.li,{children:["-6, --ipv6\uff1a\u4f18\u5148\u4f7f\u7528IPv6","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"--version\uff1a\u663e\u793a\u7248\u672c\u53f7"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"(-h) --help\uff1a\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\uff08\u53ea\u6709\u5728\u5355\u72ec\u4f7f\u7528 -h \u65f6\u624d\u662f --help\uff09"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u62f7\u8d1d\u672c\u5730\u6587\u4ef6\uff0c\u5c06/app\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u62f7\u8d1d\u5230/userdata\u76ee\u5f55\u4e0b"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"rsync -avSH /app/ /userdata/\n"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u62f7\u8d1d\u672c\u5730\u673a\u5668\u7684\u5185\u5bb9\u5230\u8fdc\u7a0b\u673a\u5668"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"rsync -av /app 192.168.1.12:/app\n"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u62f7\u8d1d\u8fdc\u7a0b\u673a\u5668\u7684\u5185\u5bb9\u5230\u672c\u5730\u673a\u5668"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"rsync -av 192.168.1.12:/app /app\n"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u62f7\u8d1d\u8fdc\u7a0brsync\u670d\u52a1\u5668(daemon\u5f62\u5f0f\u8fd0\u884crsync)\u7684\u6587\u4ef6\u5230\u672c\u5730\u673a\u3002"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"rsync -av root@192.168.1.12::www /userdata\n"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u62f7\u8d1d\u672c\u5730\u673a\u5668\u6587\u4ef6\u5230\u8fdc\u7a0brsync\u670d\u52a1\u5668(daemon\u5f62\u5f0f\u8fd0\u884crsync)\u4e2d\u3002\u5f53DST\u8def\u5f84\u4fe1\u606f\u5305\u542b\u201d::\u201d\u5206\u9694\u7b26\u65f6\u542f\u52a8\u8be5\u6a21\u5f0f\u3002"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"rsync -av /userdata root@192.168.1.12::www\n"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u663e\u793a\u8fdc\u7a0b\u673a\u7684\u6587\u4ef6\u5217\u8868\u3002\u8fd9\u7c7b\u4f3c\u4e8ersync\u4f20\u8f93\uff0c\u4e0d\u8fc7\u53ea\u8981\u5728\u547d\u4ee4\u4e2d\u7701\u7565\u6389\u672c\u5730\u673a\u4fe1\u606f\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"rsync -v rsync://192.168.1.12/app\n"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u6307\u5b9a\u5bc6\u7801\u5b58\u653e\u6587\u4ef6\uff0c\u65e0\u9700\u8f93\u5165\u5bc6\u7801\uff0c\u76f4\u63a5\u6267\u884crsync\u4f20\u8f93"}),"\n"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"rsync -rvzP --password-file=/etc/rsync.password rsync@$192.168.1.12::app/ /app\n"})})]})}function o(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,l.jsx)(i,{...n,children:(0,l.jsx)(j,{...n})}):j(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>c,x:()=>d});var l=e(96540);const s={},r=l.createContext(s);function c(n){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function d(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(r.Provider,{value:i},n.children)}}}]);