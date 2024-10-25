"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5273],{80809:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>x,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var l=s(74848),d=s(28453);const i={sidebar_position:1},c="find",r={id:"Appendix/linux-command-manual/cmd_find",title:"find",description:"find \u547d\u4ee4\u7528\u4e8e\u5728\u6307\u5b9a\u76ee\u5f55\u4e0b\u67e5\u627e\u6587\u4ef6\u548c\u76ee\u5f55\u3002",source:"@site/docs/09_Appendix/linux-command-manual/cmd_find.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_find",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_find",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/09_Appendix/linux-command-manual/cmd_find.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"dpkg",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_dpkg"},next:{title:"grep",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_grep"}},x={},h=[{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u9009\u9879\u8bf4\u660e",id:"\u9009\u9879\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}];function j(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"find",children:"find"}),"\n",(0,l.jsx)(e.p,{children:"find \u547d\u4ee4\u7528\u4e8e\u5728\u6307\u5b9a\u76ee\u5f55\u4e0b\u67e5\u627e\u6587\u4ef6\u548c\u76ee\u5f55\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5b83\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u9009\u9879\u6765\u8fc7\u6ee4\u548c\u9650\u5236\u67e5\u627e\u7684\u7ed3\u679c\u3002\u4efb\u4f55\u4f4d\u4e8e\u53c2\u6570\u4e4b\u524d\u7684\u5b57\u7b26\u4e32\u90fd\u5c06\u88ab\u89c6\u4e3a\u6b32\u67e5\u627e\u7684\u76ee\u5f55\u540d\u3002\u5982\u679c\u4f7f\u7528\u8be5\u547d\u4ee4\u65f6\uff0c\u4e0d\u8bbe\u7f6e\u4efb\u4f55\u53c2\u6570\uff0c\u5219find\u547d\u4ee4\u5c06\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u67e5\u627e\u5b50\u76ee\u5f55\u4e0e\u6587\u4ef6\u3002\u5e76\u4e14\u5c06\u67e5\u627e\u5230\u7684\u5b50\u76ee\u5f55\u548c\u6587\u4ef6\u5168\u90e8\u8fdb\u884c\u663e\u793a\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8bed\u6cd5\u8bf4\u660e",children:"\u8bed\u6cd5\u8bf4\u660e"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"  find [-H] [-L] [-P] [-Olevel] [-D debugopts] [path...] [expression]\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9009\u9879\u8bf4\u660e",children:"\u9009\u9879\u8bf4\u660e"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"path"})," \u662f\u8981\u67e5\u627e\u7684\u76ee\u5f55\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u4e00\u4e2a\u76ee\u5f55\u6216\u6587\u4ef6\u540d\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a\u8def\u5f84\uff0c\u591a\u4e2a\u8def\u5f84\u4e4b\u95f4\u7528\u7a7a\u683c\u5206\u9694\uff0c\u5982\u679c\u672a\u6307\u5b9a\u8def\u5f84\uff0c\u5219\u9ed8\u8ba4\u4e3a\u5f53\u524d\u76ee\u5f55\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"expression"})," \u662f\u53ef\u9009\u53c2\u6570\uff0c\u7528\u4e8e\u6307\u5b9a\u67e5\u627e\u7684\u6761\u4ef6\uff0c\u53ef\u4ee5\u662f\u6587\u4ef6\u540d\u3001\u6587\u4ef6\u7c7b\u578b\u3001\u6587\u4ef6\u5927\u5c0f\u7b49\u7b49\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"expression \u4e2d\u53ef\u4f7f\u7528\u7684\u9009\u9879\u6709\u4e8c\u4e09\u5341\u4e2a\u4e4b\u591a\uff0c\u4ee5\u4e0b\u5217\u51fa\u6700\u5e38\u7528\u7684\u90e8\u4efd\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-name pattern"}),"\uff1a\u6309\u6587\u4ef6\u540d\u67e5\u627e\uff0c\u652f\u6301\u4f7f\u7528\u901a\u914d\u7b26 ",(0,l.jsx)(e.code,{children:"*"})," \u548c ",(0,l.jsx)(e.code,{children:"?"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-iname pattern"}),"\uff1a\u6b64\u53c2\u6570\u7684\u6548\u679c\u548c\u6307\u5b9a",(0,l.jsx)(e.code,{children:"-name"}),"\u53c2\u6570\u7c7b\u4f3c\uff0c\u4f46\u5ffd\u7565\u5b57\u7b26\u5927\u5c0f\u5199\u7684\u5dee\u522b\uff1b"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-type type"}),"\uff1a\u6309\u6587\u4ef6\u7c7b\u578b\u67e5\u627e\uff0c\u53ef\u4ee5\u662f ",(0,l.jsx)(e.code,{children:"f"}),"\uff08\u666e\u901a\u6587\u4ef6\uff09\u3001",(0,l.jsx)(e.code,{children:"d"}),"\uff08\u76ee\u5f55\uff09\u3001",(0,l.jsx)(e.code,{children:"l"}),"\uff08\u7b26\u53f7\u94fe\u63a5\uff09\u7b49\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-size [+-]size[cwbkMG]"}),"\uff1a\u6309\u6587\u4ef6\u5927\u5c0f\u67e5\u627e\uff0c\u652f\u6301\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"+"})," \u6216 ",(0,l.jsx)(e.code,{children:"-"})," \u8868\u793a\u5927\u4e8e\u6216\u5c0f\u4e8e\u6307\u5b9a\u5927\u5c0f\uff0c\u5355\u4f4d\u53ef\u4ee5\u662f ",(0,l.jsx)(e.code,{children:"c"}),"\uff08\u5b57\u8282\uff09\u3001",(0,l.jsx)(e.code,{children:"w"}),"\uff08\u5b57\u6570\uff09\u3001",(0,l.jsx)(e.code,{children:"b"}),"\uff08\u5757\u6570\uff09\u3001",(0,l.jsx)(e.code,{children:"k"}),"\uff08KB\uff09\u3001",(0,l.jsx)(e.code,{children:"M"}),"\uff08MB\uff09\u6216 ",(0,l.jsx)(e.code,{children:"G"}),"\uff08GB\uff09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-mtime days"}),"\uff1a\u6309\u4fee\u6539\u65f6\u95f4\u67e5\u627e\uff0c\u652f\u6301\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"+"})," \u6216 ",(0,l.jsx)(e.code,{children:"-"})," \u8868\u793a\u5728\u6307\u5b9a\u5929\u6570\u524d\u6216\u540e\uff0cdays \u662f\u4e00\u4e2a\u6574\u6570\u8868\u793a\u5929\u6570\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-user username"}),"\uff1a\u6309\u6587\u4ef6\u6240\u6709\u8005\u67e5\u627e\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-group groupname"}),"\uff1a\u6309\u6587\u4ef6\u6240\u5c5e\u7ec4\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"find \u547d\u4ee4\u4e2d\u7528\u4e8e\u65f6\u95f4\u7684\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-amin n"}),"\uff1a\u67e5\u627e\u5728 n \u5206\u949f\u5185\u88ab\u8bbf\u95ee\u8fc7\u7684\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-atime n"}),"\uff1a\u67e5\u627e\u5728 n*24 \u5c0f\u65f6\u5185\u88ab\u8bbf\u95ee\u8fc7\u7684\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-cmin n"}),"\uff1a\u67e5\u627e\u5728 n \u5206\u949f\u5185\u72b6\u6001\u53d1\u751f\u53d8\u5316\u7684\u6587\u4ef6\uff08\u4f8b\u5982\u6743\u9650\uff09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-ctime n"}),"\uff1a\u67e5\u627e\u5728 n*24 \u5c0f\u65f6\u5185\u72b6\u6001\u53d1\u751f\u53d8\u5316\u7684\u6587\u4ef6\uff08\u4f8b\u5982\u6743\u9650\uff09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-mmin n"}),"\uff1a\u67e5\u627e\u5728 n \u5206\u949f\u5185\u88ab\u4fee\u6539\u8fc7\u7684\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"-mtime n"}),"\uff1a\u67e5\u627e\u5728 n*24 \u5c0f\u65f6\u5185\u88ab\u4fee\u6539\u8fc7\u7684\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u8fd9\u4e9b\u53c2\u6570\u4e2d\uff0cn \u53ef\u4ee5\u662f\u4e00\u4e2a\u6b63\u6570\u3001\u8d1f\u6570\u6216\u96f6\u3002\u6b63\u6570\u8868\u793a\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u5185\u4fee\u6539\u6216\u8bbf\u95ee\u8fc7\u7684\u6587\u4ef6\uff0c\u8d1f\u6570\u8868\u793a\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u4e4b\u524d\u4fee\u6539\u6216\u8bbf\u95ee\u8fc7\u7684\u6587\u4ef6\uff0c\u96f6\u8868\u793a\u5728\u5f53\u524d\u65f6\u95f4\u70b9\u4e0a\u4fee\u6539\u6216\u8bbf\u95ee\u8fc7\u7684\u6587\u4ef6\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u4f8b\u5982\uff1a",(0,l.jsx)(e.strong,{children:"-mtime 0"})," \u8868\u793a\u67e5\u627e\u4eca\u5929\u4fee\u6539\u8fc7\u7684\u6587\u4ef6\uff0c",(0,l.jsx)(e.strong,{children:"-mtime -7"})," \u8868\u793a\u67e5\u627e\u4e00\u5468\u4ee5\u524d\u4fee\u6539\u8fc7\u7684\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5173\u4e8e\u65f6\u95f4 n \u53c2\u6570\u7684\u8bf4\u660e\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"+n"}),"\uff1a\u67e5\u627e\u6bd4 n \u5929\u524d\u66f4\u65e9\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"-n"}),"\uff1a\u67e5\u627e\u5728 n \u5929\u5185\u66f4\u6539\u8fc7\u5c5e\u6027\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"n"}),"\uff1a\u67e5\u627e\u5728 n \u5929\u524d\uff08\u6307\u5b9a\u90a3\u4e00\u5929\uff09\u66f4\u6539\u8fc7\u5c5e\u6027\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsx)(e.p,{children:"\u5217\u51fa\u5f53\u524d\u76ee\u5f55\u53ca\u5b50\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u548c\u6587\u4ef6\u5939"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find .\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u627e\u5f53\u524d\u76ee\u5f55\u4e0b\u540d\u4e3a file.txt \u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find . -name file.txt\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5c06\u5f53\u524d\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u540e\u7f00\u4e3a ",(0,l.jsx)(e.strong,{children:".c"})," \u7684\u6587\u4ef6\u5217\u51fa\u6765"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'find . -name "*.c"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u540c\u4e0a\uff0c\u4f46\u5ffd\u7565\u5927\u5c0f\u5199"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . -iname "*.c"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u5f53\u524d\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u5217\u51fa"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find . -type f\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u627e /home \u76ee\u5f55\u4e0b\u5927\u4e8e 1MB \u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find . -size +1M\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u641c\u7d22\u5c0f\u4e8e10KB\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -type f -size -10k\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u641c\u7d22\u7b49\u4e8e10KB\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -type f -size 10k\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6587\u4ef6\u5927\u5c0f\u5355\u5143\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"b"})," \u2014\u2014 \u5757\uff08512\u5b57\u8282\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"c"})," \u2014\u2014 \u5b57\u8282"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"w"})," \u2014\u2014 \u5b57\uff082\u5b57\u8282\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"k"})," \u2014\u2014 \u5343\u5b57\u8282"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"M"})," \u2014\u2014 \u5146\u5b57\u8282"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"G"})," \u2014\u2014 \u5409\u5b57\u8282"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u627e /var/log \u76ee\u5f55\u4e0b\u5728 7 \u5929\u524d\u4fee\u6539\u8fc7\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find /var/log -mtime +7\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u5f53\u524d\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e0b\u6240\u6709\u6700\u8fd1 20 \u5929\u524d\u66f4\u65b0\u8fc7\u7684\u6587\u4ef6\u5217\u51fa\uff0c\u4e0d\u591a\u4e0d\u5c11\u6b63\u597d 20 \u5929\u524d\u7684"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find . -ctime  20\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u5f53\u524d\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e0b\u6240\u6709 20 \u5929\u524d\u53ca\u66f4\u65e9\u66f4\u65b0\u8fc7\u7684\u6587\u4ef6\u5217\u51fa"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find . -ctime  +20\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u5f53\u524d\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e0b\u6240\u6709\u6700\u8fd1 20 \u5929\u5185\u66f4\u65b0\u8fc7\u7684\u6587\u4ef6\u5217\u51fa"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find . -ctime  20\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u627e /var/log \u76ee\u5f55\u4e2d\u66f4\u6539\u65f6\u95f4\u5728 7 \u65e5\u4ee5\u524d\u7684\u666e\u901a\u6587\u4ef6\uff0c\u5e76\u5728\u5220\u9664\u4e4b\u524d\u8be2\u95ee\u5b83\u4eec"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find /var/log -type f -mtime +7 -ok rm {} \\;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u627e\u5f53\u524d\u76ee\u5f55\u4e2d\u6587\u4ef6\u5c5e\u4e3b\u5177\u6709\u8bfb\u3001\u5199\u6743\u9650\uff0c\u5e76\u4e14\u6587\u4ef6\u6240\u5c5e\u7ec4\u7684\u7528\u6237\u548c\u5176\u4ed6\u7528\u6237\u5177\u6709\u8bfb\u6743\u9650\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find . -type f -perm 644 -exec ls -l {} \\;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u627e\u7cfb\u7edf\u4e2d\u6240\u6709\u6587\u4ef6\u957f\u5ea6\u4e3a 0 \u7684\u666e\u901a\u6587\u4ef6\uff0c\u5e76\u5217\u51fa\u5b83\u4eec\u7684\u5b8c\u6574\u8def\u5f84"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"find / -type f -size 0 -exec ls -l {} \\;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u524d\u76ee\u5f55\u53ca\u5b50\u76ee\u5f55\u4e0b\u67e5\u627e\u6240\u6709\u4ee5.txt\u548c.pdf\u7ed3\u5c3e\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . \\( -name "*.txt" -o -name "*.pdf" \\)\n\u6216\nfind . -name "*.txt" -o -name "*.pdf"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5339\u914d\u6587\u4ef6\u8def\u5f84\u6216\u8005\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find /usr/ -path "*local*"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u57fa\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6587\u4ef6\u8def\u5f84"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . -regex ".*\\(\\.txt\\|\\.pdf\\)$"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u540c\u4e0a\uff0c\u4f46\u5ffd\u7565\u5927\u5c0f\u5199"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . -iregex ".*\\(\\.txt\\|\\.pdf\\)$"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5426\u5b9a\u53c2\u6570, \u627e\u51fa/home\u4e0b\u4e0d\u662f\u4ee5.txt\u7ed3\u5c3e\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find /home ! -name "*.txt"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636e\u6587\u4ef6\u7c7b\u578b\u8fdb\u884c\u641c\u7d22"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -type \u7c7b\u578b\u53c2\u6570\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u7c7b\u578b\u53c2\u6570\u5217\u8868\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"f"})," \u666e\u901a\u6587\u4ef6"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"l"})," \u7b26\u53f7\u8fde\u63a5"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"d"})," \u76ee\u5f55"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"c"})," \u5b57\u7b26\u8bbe\u5907"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"b"})," \u5757\u8bbe\u5907"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"s"})," \u5957\u63a5\u5b57"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"p"})," Fifo"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u57fa\u4e8e\u76ee\u5f55\u6df1\u5ea6\u641c\u7d22\uff0c\u5411\u4e0b\u6700\u5927\u6df1\u5ea6\u9650\u5236\u4e3a3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -maxdepth 3 -type f\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u641c\u7d22\u51fa\u6df1\u5ea6\u8ddd\u79bb\u5f53\u524d\u76ee\u5f55\u81f3\u5c112\u4e2a\u5b50\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -mindepth 2 -type f\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5220\u9664\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709",(0,l.jsx)(e.code,{children:".log"}),"\u6587\u4ef6"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . -type f -name "*.log" -delete\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u524d\u76ee\u5f55\u4e0b\u641c\u7d22\u51fa\u6743\u9650\u4e3a777\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -type f -perm 777\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u627e\u51fa\u5f53\u524d\u76ee\u5f55\u4e0b\u6743\u9650\u4e0d\u662f644\u7684",(0,l.jsx)(e.code,{children:".conf"}),"\u6587\u4ef6"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . -type f -name "*.conf" ! -perm 644\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u627e\u51fa\u5f53\u524d\u76ee\u5f55\u7528\u6237",(0,l.jsx)(e.code,{children:"sunrise"}),"\u62e5\u6709\u7684\u6240\u6709\u6587\u4ef6"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -type f -user sunrise\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u627e\u51fa\u5f53\u524d\u76ee\u5f55\u7528\u6237\u7ec4",(0,l.jsx)(e.code,{children:"sunrise"}),"\u62e5\u6709\u7684\u6240\u6709\u6587\u4ef6"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -type f -group sunrise\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u627e\u51fa\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709",(0,l.jsx)(e.code,{children:"root"}),"\u7684\u6587\u4ef6\uff0c\u5e76\u628a\u6240\u6709\u6743\u66f4\u6539\u4e3a\u7528\u6237",(0,l.jsx)(e.code,{children:"sunrise"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find .-type f -user root -exec chown sunrise {} \\;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u4f8b\u4e2d\uff0c ",(0,l.jsx)(e.strong,{})," \u7528\u4e8e\u4e0e ",(0,l.jsx)(e.strong,{children:"-exec"})," \u9009\u9879\u7ed3\u5408\u4f7f\u7528\u6765\u5339\u914d\u6240\u6709\u6587\u4ef6\uff0c\u7136\u540e\u4f1a\u88ab\u66ff\u6362\u4e3a\u76f8\u5e94\u7684\u6587\u4ef6\u540d\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u627e\u51fa",(0,l.jsx)(e.code,{children:"home"}),"\u76ee\u5f55\u4e0b\u6240\u6709\u7684",(0,l.jsx)(e.code,{children:".txt"}),"\u6587\u4ef6\u5e76\u5220\u9664"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find $HOME/. -name "*.txt" -ok rm {} \\;\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u4f8b\u4e2d\uff0c ",(0,l.jsx)(e.strong,{children:"-ok"})," \u548c ",(0,l.jsx)(e.strong,{children:"-exec"})," \u884c\u4e3a\u4e00\u6837\uff0c\u4e0d\u8fc7\u5b83\u4f1a\u7ed9\u51fa\u63d0\u793a\uff0c\u662f\u5426\u6267\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u67e5\u627e\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709",(0,l.jsx)(e.code,{children:".txt"}),"\u6587\u4ef6\u5e76\u628a\u4ed6\u4eec\u62fc\u63a5\u8d77\u6765\u5199\u5165\u5230",(0,l.jsx)(e.code,{children:"all.txt"}),"\u6587\u4ef6\u4e2d"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . -type f -name "*.txt" -exec cat {} \\;> /all.txt\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u627e\u5f53\u524d\u76ee\u5f55\u6216\u8005\u5b50\u76ee\u5f55\u4e0b\u6240\u6709.txt\u6587\u4ef6\uff0c\u4f46\u662f\u8df3\u8fc7\u5b50\u76ee\u5f55sk"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . -path "./sk" -prune -o -name "*.txt" -print\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u26a0\ufe0f ./sk \u4e0d\u80fd\u5199\u6210 ./sk/ \uff0c\u5426\u5219\u6ca1\u6709\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5ffd\u7565\u4e24\u4e2a\u76ee\u5f55"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . \\( -path ./sk -o  -path ./st \\) -prune -o -name "*.txt" -print\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u26a0\ufe0f \u5982\u679c\u5199\u76f8\u5bf9\u8def\u5f84\u5fc5\u987b\u52a0\u4e0a",(0,l.jsx)(e.code,{children:"./"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8981\u5217\u51fa\u6240\u6709\u957f\u5ea6\u4e3a\u96f6\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find . -empty\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7edf\u8ba1\u4ee3\u7801\u884c\u6570"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'find . -name "*.c"|xargs cat|grep -v ^$|wc -l # \u4ee3\u7801\u884c\u6570\u7edf\u8ba1, \u6392\u9664\u7a7a\u884c\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5176\u5b83\u5b9e\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"find ~ -name '*jpg' # \u4e3b\u76ee\u5f55\u4e2d\u627e\u5230\u6240\u6709\u7684 jpg \u6587\u4ef6\u3002 -name \u53c2\u6570\u5141\u8bb8\u4f60\u5c06\u7ed3\u679c\u9650\u5236\u4e3a\u4e0e\u7ed9\u5b9a\u6a21\u5f0f\u5339\u914d\u7684\u6587\u4ef6\u3002\nfind ~ -iname '*jpg' # -iname \u5c31\u50cf -name\uff0c\u4f46\u662f\u4e0d\u533a\u5206\u5927\u5c0f\u5199\nfind ~ ( -iname 'jpeg' -o -iname 'jpg' ) # \u4e00\u4e9b\u56fe\u7247\u53ef\u80fd\u662f .jpeg \u6269\u5c55\u540d\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u6a21\u5f0f\u7528\u201c\u6216\u201d\uff08\u8868\u793a\u4e3a -o\uff09\u6765\u7ec4\u5408\u3002\nfind ~ \\( -iname '*jpeg' -o -iname '*jpg' \\) -type f # \u5982\u679c\u4f60\u6709\u4e00\u4e9b\u4ee5 jpg \u7ed3\u5c3e\u7684\u76ee\u5f55\u5462\uff1f \uff08\u4e3a\u4ec0\u4e48\u4f60\u8981\u547d\u540d\u4e00\u4e2a bucketofjpg \u800c\u4e0d\u662f pictures \u7684\u76ee\u5f55\u5c31\u8d85\u51fa\u4e86\u672c\u6587\u7684\u8303\u56f4\u3002\uff09\u6211\u4eec\u4f7f\u7528 -type \u53c2\u6570\u4fee\u6539\u6211\u4eec\u7684\u547d\u4ee4\u6765\u67e5\u627e\u6587\u4ef6\u3002\nfind ~ \\( -iname '*jpeg' -o -iname '*jpg' \\) -type d # \u4e5f\u8bb8\u4f60\u60f3\u627e\u5230\u90a3\u4e9b\u547d\u540d\u5947\u602a\u7684\u76ee\u5f55\uff0c\u4ee5\u4fbf\u7a0d\u540e\u91cd\u547d\u540d\u5b83\u4eec\n"})})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(j,{...n})}):j(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>r});var l=s(96540);const d={},i=l.createContext(d);function c(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);