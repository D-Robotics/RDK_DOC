"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8133],{52175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(74848),a=n(28453),o=n(93859),l=n(19365);const s={sidebar_position:6},i="5.2.6 \u6a21\u578b\u63a8\u7406",c={id:"Robot_development/quick_demo/ai_predict",title:"5.2.6 \u6a21\u578b\u63a8\u7406",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/02_quick_demo/ai_predict.md",sourceDirName:"05_Robot_development/02_quick_demo",slug:"/Robot_development/quick_demo/ai_predict",permalink:"/rdk_doc/Robot_development/quick_demo/ai_predict",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/05_Robot_development/02_quick_demo/ai_predict.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5.2.5 \u6570\u636e\u901a\u4fe1",permalink:"/rdk_doc/Robot_development/quick_demo/demo_communication"},next:{title:"5.2.7 \u5de5\u5177",permalink:"/rdk_doc/Robot_development/quick_demo/demo_tool"}},d={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"526-\u6a21\u578b\u63a8\u7406",children:"5.2.6 \u6a21\u578b\u63a8\u7406"}),"\n","\n",(0,r.jsx)(t.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u6a21\u578b\u63a8\u7406\u529f\u80fd\u7684\u4f7f\u7528\uff0c\u8f93\u5165\u4e00\u5f20\u672c\u5730\u56fe\u7247\u8fdb\u884c\u63a8\u7406\uff0c\u5f97\u5230\u6e32\u67d3\u540e\u7684\u56fe\u7247\u5e76\u4fdd\u5b58\u5728\u672c\u5730\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a",(0,r.jsx)(t.a,{href:"https://github.com/D-Robotics/hobot_dnn",children:"https://github.com/D-Robotics/hobot_dnn"})]}),"\n",(0,r.jsx)(t.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5e73\u53f0"}),(0,r.jsx)(t.th,{children:"\u8fd0\u884c\u65b9\u5f0f"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,r.jsx)(t.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"X86"}),(0,r.jsx)(t.td,{children:"Ubuntu 20.04 (Foxy)"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["RDK Ultra\u6a21\u578b\u63a8\u7406\u529f\u80fd\u4f53\u9a8c\u53c2\u8003",(0,r.jsx)(t.a,{href:"/rdk_doc/Robot_development/boxs/detection/yolo",children:"Boxs\u7b97\u6cd5\u4ed3\u5e93"}),"\u3002"]})}),"\n",(0,r.jsx)(t.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(t.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"x86\u5e73\u53f0",children:"X86\u5e73\u53f0"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u786e\u8ba4X86\u5e73\u53f0\u7cfb\u7edf\u4e3aUbuntu 20.04\uff0c\u4e14\u5df2\u6210\u529f\u5b89\u88c5tros.b\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528hobot_dnn\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u672c\u5730JPEG\u683c\u5f0f\u56fe\u7247\u548c\u6a21\u578b\uff08FCOS\u76ee\u6807\u68c0\u6d4b\u6a21\u578b\uff0c\u652f\u6301\u7684\u76ee\u6807\u68c0\u6d4b\u7c7b\u578b\u5305\u62ec\u4eba\u3001\u52a8\u7269\u3001\u6c34\u679c\u3001\u4ea4\u901a\u5de5\u5177\u7b49\u517180\u79cd\u7c7b\u578b\uff09\uff0c\u901a\u8fc7\u56de\u704c\u8fdb\u884c\u63a8\u7406\uff0c\u5e76\u5b58\u50a8\u6e32\u67d3\u540e\u7684\u56fe\u7247\u3002"}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(l.A,{value:"humble",label:"Humble",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002config\u4e2d\u4e3aexample\u4f7f\u7528\u7684\u6a21\u578b\uff0c\u56de\u704c\u4f7f\u7528\u7684\u672c\u5730\u56fe\u7247\ncp -r /opt/tros/${TROS_DISTRO}/lib/dnn_node_example/config/ .\n\n# \u4f7f\u7528\u672c\u5730jpg\u683c\u5f0f\u56fe\u7247\u8fdb\u884c\u56de\u704c\u9884\u6d4b\uff0c\u5e76\u5b58\u50a8\u6e32\u67d3\u540e\u7684\u56fe\u7247\nros2 launch dnn_node_example dnn_node_example_feedback.launch.py dnn_example_config_file:=config/fcosworkconfig.json dnn_example_image:=config/target.jpg\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd0\u884c\u6210\u529f\u540e\uff0c\u5728\u8fd0\u884c\u8def\u5f84\u4e0b\u81ea\u52a8\u4fdd\u5b58\u6e32\u67d3\u540e\u7684\u56fe\u7247\uff0c\u547d\u540d\u65b9\u5f0f\u4e3arender_feedback_0_0.jpeg\uff0c\u4f7f\u7528ctrl+c\u9000\u51fa\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u8fd0\u884c\u547d\u4ee4\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\uff0c\u4ee5\u53ca\u5982\u4f55\u8ba2\u9605\u5e76\u4f7f\u7528\u4ececamera\u53d1\u5e03\u7684\u56fe\u7247\u8fdb\u884c\u7b97\u6cd5\u63a8\u7406\u7684\u8fd0\u884c\u65b9\u6cd5\u53c2\u8003dnn_node_example package\u6e90\u7801\u4e2d\u7684README.md\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"[example-1] [INFO] [1679901151.612290039] [ImageUtils]: target size: 6\n[example-1] [INFO] [1679901151.612314489] [ImageUtils]: target type: couch, rois.size: 1\n[example-1] [INFO] [1679901151.612326734] [ImageUtils]: roi.type: couch, x_offset: 83 y_offset: 265 width: 357 height: 139\n[example-1] [INFO] [1679901151.612412454] [ImageUtils]: target type: potted plant, rois.size: 1\n[example-1] [INFO] [1679901151.612426522] [ImageUtils]: roi.type: potted plant, x_offset: 379 y_offset: 173 width: 131 height: 202\n[example-1] [INFO] [1679901151.612472961] [ImageUtils]: target type: book, rois.size: 1\n[example-1] [INFO] [1679901151.612497709] [ImageUtils]: roi.type: book, x_offset: 167 y_offset: 333 width: 67 height: 22\n[example-1] [INFO] [1679901151.612522859] [ImageUtils]: target type: vase, rois.size: 1\n[example-1] [INFO] [1679901151.612533487] [ImageUtils]: roi.type: vase, x_offset: 44 y_offset: 273 width: 26 height: 45\n[example-1] [INFO] [1679901151.612557172] [ImageUtils]: target type: couch, rois.size: 1\n[example-1] [INFO] [1679901151.612567740] [ImageUtils]: roi.type: couch, x_offset: 81 y_offset: 265 width: 221 height: 106\n[example-1] [INFO] [1679901151.612606444] [ImageUtils]: target type: potted plant, rois.size: 1\n[example-1] [INFO] [1679901151.612617518] [ImageUtils]: roi.type: potted plant, x_offset: 138 y_offset: 314 width: 45 height: 38\n[example-1] [WARN] [1679901151.612652352] [ImageUtils]: Draw result to file: render_feedback_0_0.jpeg\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8f93\u51falog\u663e\u793a\uff0c\u7b97\u6cd5\u4f7f\u7528\u8f93\u5165\u7684\u56fe\u7247\u63a8\u7406\u51fa6\u4e2a\u76ee\u6807\uff0c\u5e76\u8f93\u51fa\u4e86\u6bcf\u4e2a\u76ee\u6807\u7684\u7c7b\u522b\uff08target type\uff09\u548c\u68c0\u6d4b\u6846\u5750\u6807\uff08\u68c0\u6d4b\u6846\u5de6\u4e0a\u4f4d\u7f6e\u7684x\u5750\u6807x_offset\u548cy\u5750\u6807y_offset\uff0c\u68c0\u6d4b\u6846\u7684\u5bbdwidth\u548c\u9ad8height\uff09\u3002\u5b58\u50a8\u7684\u6e32\u67d3\u56fe\u7247\u6587\u4ef6\u540d\u4e3arender_feedback_0_0.jpeg\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u6e32\u67d3\u540e\u7684\u56fe\u7247render_feedback_0_0.jpeg\uff1a"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(19889).A+"",width:"512",height:"512"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},93859:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),o=n(86641),l=n(56347),s=n(205),i=n(38874),c=n(24035),d=n(82993);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),x=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function _(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=s[n].value;a!==r&&(c(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(_,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(t))}},19889:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/render1-e81c8fecfefab08621e46a49b23cdbae.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);