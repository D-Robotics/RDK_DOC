"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6090],{29622:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=s(74848),r=s(28453);const i={sidebar_position:1},t="ssh",c={id:"Appendix/linux-command-manual/cmd_ssh",title:"ssh",description:"The ssh command is a client connection tool in the openssh suite, which can be used to securely remote login to a server using the ssh encryption protocol.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_ssh.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_ssh",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_ssh",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/09_Appendix/linux-command-manual/cmd_ssh.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"scp",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_scp"},next:{title:"tar",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_tar"}},l={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Option Explanation",id:"option-explanation",level:2},{value:"Common Commands",id:"common-commands",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ssh",children:"ssh"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"ssh command"})," is a client connection tool in the openssh suite, which can be used to securely remote login to a server using the ssh encryption protocol."]}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface]\n           [-b bind_address] [-c cipher_spec] [-D [bind_address:]port]\n           [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]\n           [-i identity_file] [-J [user@]host[:port]] [-L address]\n           [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port]\n           [-Q query_option] [-R address] [-S ctl_path] [-W host:port]\n           [-w local_tun[:remote_tun]] destination [command]\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"destination"}),": Specifies the remote ssh server to connect to."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"command"}),": Specifies the command to execute on the remote ssh server."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"option-explanation",children:"Option Explanation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-4"}),": Force use of IPv4 addresses."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-6"}),": Force use of IPv6 addresses."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-A"}),": Enable authentication agent connection forwarding."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-a"}),": Disable authentication agent connection forwarding."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-B"}),": Bind to ",(0,o.jsx)(n.code,{children:"bind_interface"})," address before attempting to connect to the target host. Useful on systems with multiple addresses."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-b"}),": Use local specified address as the source IP address for corresponding connection."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-C"}),": Request compression of all data."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-F"}),": Specify the configuration file for SSH commands."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-f"}),": Run SSH command in the background."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-g"}),": Allow remote hosts to connect to local forwarded ports."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-i"}),": Specify an identity (private key) file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-l"}),": Specify the login username to connect to the remote server."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-N"}),": Do not execute a remote command."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-o"}),": Specify configuration options."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-p"}),": Specify the port on the remote server."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-q"}),": Quiet mode."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-X"}),": Enable X11 forwarding."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-x"}),": Disable X11 forwarding."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-y"}),": Enable trusted X11 forwarding."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"common-commands",children:"Common Commands"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# ssh username@remote_server_address\nssh sunrise@192.168.1.10\n# Specify port\nssh -p 2211 sunrise@192.168.1.10\n\n# SSH family\nssh -p 22 user@ip  # Default username is the current username, default port is 22\nssh-keygen # Generate ssh public and private keys for the current user\nssh-keygen -f keyfile -i -m key_format -e -m key_format # key_format: RFC4716/SSH2(default) PKCS8 PEM\nssh-copy-id user@ip:port # Copy the public key of the current user to the ~/.ssh/authorized_keys file on the server that needs SSH, enabling passwordless login\n"})}),"\n",(0,o.jsx)(n.p,{children:"Connect to remote server"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ssh username@remote_host\n"})}),"\n",(0,o.jsx)(n.p,{children:"Connect to remote server and specify port"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ssh -p port username@remote_host\n"})}),"\n",(0,o.jsx)(n.p,{children:"Connect to remote server using a key file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ssh -i path/to/private_key username@remote_host\n"})}),"\n",(0,o.jsx)(n.p,{children:"Execute a remote command locally"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'ssh username@remote_host "command"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Forward a local port to a remote server"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ssh -L local_port:remote_host:remote_port username@remote_host\n"})}),"\n",(0,o.jsx)(n.p,{children:"Forward a remote port to the local machine"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ssh -R remote_port:local_host:local_port username@remote_host\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var o=s(96540);const r={},i=o.createContext(r);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);