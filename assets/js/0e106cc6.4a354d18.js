"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3111],{28453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>s});var t=o(96540);const d={},r=t.createContext(d);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(r.Provider,{value:e},n.children)}},51453:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var t=o(74848),d=o(28453);const r={sidebar_position:1},i="mount",s={id:"Appendix/linux-command-manual/cmd_mount",title:"mount",description:"mount \u7528\u4e8e\u6302\u8f7d\u6587\u4ef6\u7cfb\u7edf\u7684\u547d\u4ee4\u3002",source:"@site/docs/09_Appendix/linux-command-manual/cmd_mount.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_mount",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_mount",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/09_Appendix/linux-command-manual/cmd_mount.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ip",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_ip"},next:{title:"netstat",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_netstat"}},c={},m=[{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u9009\u9879\u8bf4\u660e",id:"\u9009\u9879\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"mount",children:"mount"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"mount"})," \u7528\u4e8e\u6302\u8f7d\u6587\u4ef6\u7cfb\u7edf\u7684\u547d\u4ee4\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5\u8bf4\u660e",children:"\u8bed\u6cd5\u8bf4\u660e"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mount [-l|-h|-V]\nmount -a [-fFnrsvw] [-t fstype] [-O optlist]\nmount [-fnrsvw] [-o options] device|dir\nmount [-fnrsvw] [-t fstype] [-o options] device dir\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9009\u9879\u8bf4\u660e",children:"\u9009\u9879\u8bf4\u660e"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"-V\uff1a\u663e\u793a\u7a0b\u5e8f\u7248\u672c\n-h\uff1a\u663e\u793a\u8f85\u52a9\u8baf\u606f\n-v\uff1a\u663e\u793a\u8f83\u8baf\u606f\uff0c\u901a\u5e38\u548c -f \u7528\u6765\u9664\u9519\u3002\n-a\uff1a\u5c06 /etc/fstab \u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u6863\u6848\u7cfb\u7edf\u6302\u4e0a\u3002\n-F\uff1a\u8fd9\u4e2a\u547d\u4ee4\u901a\u5e38\u548c -a \u4e00\u8d77\u4f7f\u7528\uff0c\u5b83\u4f1a\u4e3a\u6bcf\u4e00\u4e2a mount \u7684\u52a8\u4f5c\u4ea7\u751f\u4e00\u4e2a\u884c\u7a0b\u8d1f\u8d23\u6267\u884c\u3002\u5728\u7cfb\u7edf\u9700\u8981\u6302\u4e0a\u5927\u91cf NFS \u6863\u6848\u7cfb\u7edf\u65f6\u53ef\u4ee5\u52a0\u5feb\u6302\u4e0a\u7684\u52a8\u4f5c\u3002\n-f\uff1a\u901a\u5e38\u7528\u5728\u9664\u9519\u7684\u7528\u9014\u3002\u5b83\u4f1a\u4f7f mount \u5e76\u4e0d\u6267\u884c\u5b9e\u9645\u6302\u4e0a\u7684\u52a8\u4f5c\uff0c\u800c\u662f\u6a21\u62df\u6574\u4e2a\u6302\u4e0a\u7684\u8fc7\u7a0b\u3002\u901a\u5e38\u4f1a\u548c -v \u4e00\u8d77\u4f7f\u7528\u3002\n-n\uff1a\u4e00\u822c\u800c\u8a00\uff0cmount \u5728\u6302\u4e0a\u540e\u4f1a\u5728 /etc/mtab \u4e2d\u5199\u5165\u4e00\u7b14\u8d44\u6599\u3002\u4f46\u5728\u7cfb\u7edf\u4e2d\u6ca1\u6709\u53ef\u5199\u5165\u6863\u6848\u7cfb\u7edf\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u7528\u8fd9\u4e2a\u9009\u9879\u53d6\u6d88\u8fd9\u4e2a\u52a8\u4f5c\u3002\n-s-r\uff1a\u7b49\u4e8e -o ro\n-w\uff1a\u7b49\u4e8e -o rw\n-L\uff1a\u5c06\u542b\u6709\u7279\u5b9a\u6807\u7b7e\u7684\u786c\u76d8\u5206\u5272\u6302\u4e0a\u3002\n-U\uff1a\u5c06\u6863\u6848\u5206\u5272\u5e8f\u53f7\u4e3a \u7684\u6863\u6848\u7cfb\u7edf\u6302\u4e0b\u3002-L \u548c -U \u5fc5\u987b\u5728/proc/partition \u8fd9\u79cd\u6863\u6848\u5b58\u5728\u65f6\u624d\u6709\u610f\u4e49\u3002\n-t\uff1a\u6307\u5b9a\u6863\u6848\u7cfb\u7edf\u7684\u578b\u6001\uff0c\u901a\u5e38\u4e0d\u5fc5\u6307\u5b9a\u3002mount \u4f1a\u81ea\u52a8\u9009\u62e9\u6b63\u786e\u7684\u578b\u6001\u3002\n-o async\uff1a\u6253\u5f00\u975e\u540c\u6b65\u6a21\u5f0f\uff0c\u6240\u6709\u7684\u6863\u6848\u8bfb\u5199\u52a8\u4f5c\u90fd\u4f1a\u7528\u975e\u540c\u6b65\u6a21\u5f0f\u6267\u884c\u3002\n-o sync\uff1a\u5728\u540c\u6b65\u6a21\u5f0f\u4e0b\u6267\u884c\u3002\n-o atime\u3001-o noatime\uff1a\u5f53 atime \u6253\u5f00\u65f6\uff0c\u7cfb\u7edf\u4f1a\u5728\u6bcf\u6b21\u8bfb\u53d6\u6863\u6848\u65f6\u66f4\u65b0\u6863\u6848\u7684\u300e\u4e0a\u4e00\u6b21\u8c03\u7528\u65f6\u95f4\u300f\u3002\u5f53\u6211\u4eec\u4f7f\u7528 flash \u6863\u6848\u7cfb\u7edf\u65f6\u53ef\u80fd\u4f1a\u9009\u9879\u628a\u8fd9\u4e2a\u9009\u9879\u5173\u95ed\u4ee5\u51cf\u5c11\u5199\u5165\u7684\u6b21\u6570\u3002\n-o auto\u3001-o noauto\uff1a\u6253\u5f00/\u5173\u95ed\u81ea\u52a8\u6302\u4e0a\u6a21\u5f0f\u3002\n-o defaults:\u4f7f\u7528\u9884\u8bbe\u7684\u9009\u9879 rw, suid, dev, exec, auto, nouser, and async.\n-o dev\u3001-o nodev-o exec\u3001-o noexec\u5141\u8bb8\u6267\u884c\u6863\u88ab\u6267\u884c\u3002\n-o suid\u3001-o nosuid\uff1a\u5141\u8bb8\u6267\u884c\u6863\u5728 root \u6743\u9650\u4e0b\u6267\u884c\u3002\n-o user\u3001-o nouser\uff1a\u4f7f\u7528\u8005\u53ef\u4ee5\u6267\u884c mount/umount \u7684\u52a8\u4f5c\u3002\n-o remount\uff1a\u5c06\u4e00\u4e2a\u5df2\u7ecf\u6302\u4e0b\u7684\u6863\u6848\u7cfb\u7edf\u91cd\u65b0\u7528\u4e0d\u540c\u7684\u65b9\u5f0f\u6302\u4e0a\u3002\u4f8b\u5982\u539f\u5148\u662f\u552f\u8bfb\u7684\u7cfb\u7edf\uff0c\u73b0\u5728\u7528\u53ef\u8bfb\u5199\u7684\u6a21\u5f0f\u91cd\u65b0\u6302\u4e0a\u3002\n-o ro\uff1a\u7528\u552f\u8bfb\u6a21\u5f0f\u6302\u4e0a\u3002\n-o rw\uff1a\u7528\u53ef\u8bfb\u5199\u6a21\u5f0f\u6302\u4e0a\u3002\n-o loop=\uff1a\u4f7f\u7528 loop \u6a21\u5f0f\u7528\u6765\u5c06\u4e00\u4e2a\u6863\u6848\u5f53\u6210\u786c\u76d8\u5206\u5272\u6302\u4e0a\u7cfb\u7edf\u3002\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,t.jsx)(e.p,{children:"\u5c06 /dev/hda1 \u6302\u5728 /mnt \u4e4b\u4e0b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mount /dev/hda1 /mnt\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5c06 /dev/hda1 \u7528\u53ea\u8bfb\u6a21\u5f0f\u6302\u5728 /mnt \u4e4b\u4e0b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mount -o ro /dev/hda1 /mnt\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5c06 / \u6839\u76ee\u5f55\u91cd\u65b0\u6302\u8f7d\u4e3a\u8bfb\u5199\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mount -o remount,rw /\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6302\u8f7dnfs\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mount -t nfs -o nolock 192.168.1.20:/home/ /tmp/nfs\n"})})]})}function a(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}}}]);