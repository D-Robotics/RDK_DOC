"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1384],{19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},23681:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/flamegraph-4d4601bd4f67031ec67d145273a3442a.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}},59791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(74848),a=r(28453);r(93859),r(19365);const o={sidebar_position:4},s="5.5.4 Performance Flame Graph",l={id:"Robot_development/tros_dev/flame_graph",title:"5.5.4 Performance Flame Graph",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/05_tros_dev/flame_graph.md",sourceDirName:"05_Robot_development/05_tros_dev",slug:"/Robot_development/tros_dev/flame_graph",permalink:"/rdk_doc/en/Robot_development/tros_dev/flame_graph",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/05_tros_dev/flame_graph.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"5.5.3 Using Breakpad",permalink:"/rdk_doc/en/Robot_development/tros_dev/breakpad"},next:{title:"5.5.5 Garbage Detection",permalink:"/rdk_doc/en/Robot_development/tros_dev/mono2d_trash_detection"}},i={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"Results Analysis",id:"results-analysis",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"554-performance-flame-graph",children:"5.5.4 Performance Flame Graph"}),"\n","\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"A flame graph is a graphical representation of performance data collected by tools like perf. It provides statistical analysis of the data to identify performance hotspots."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"http-bw",src:r(23681).A+"",title:"flame graph",width:"1240",height:"329"})}),"\n",(0,n.jsx)(t.p,{children:"Each box in the flame graph represents a function, with the length of the box representing its execution time. Therefore, wider boxes indicate longer execution times."}),"\n",(0,n.jsx)(t.p,{children:"The height of the flame graph represents the depth of function calls. The topmost functions are the leaf functions."}),"\n",(0,n.jsxs)(t.p,{children:["Code repository: ",(0,n.jsx)(t.a,{href:"https://github.com/brendangregg/FlameGraph.git",children:"https://github.com/brendangregg/FlameGraph.git"})]}),"\n",(0,n.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Platform"}),(0,n.jsx)(t.th,{children:"System"}),(0,n.jsx)(t.th,{children:"Function"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,n.jsx)(t.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,n.jsx)(t.td,{children:"Demonstrating how to generate a flame graph"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,n.jsx)(t.h3,{id:"rdk",children:"RDK"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'The flamegraph tool consists of two parts. The first part is the executable program "perf". Perf is a software performance analysis tool used to collect and output function call information in the system or a specific process. Perf is already included in the RDK operating system, so it can be used directly.'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The second part of the flamegraph tool is a script used to parse the text output of perf and generate an SVG-formatted flame graph for easy observation and analysis."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Use the perf record tool to sample the function calls in the RDK system and generate a perf.data file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"root@ubuntu:~# perf record -F 99 -a -g -- sleep 60\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Use the perf script tool to parse the perf.data file and generate out.perf."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"root@ubuntu:~# perf script > out.perf\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Clone the FlameGraph repository on your PC or RDK: ",(0,n.jsx)(t.code,{children:"git clone https://github.com/brendangregg/FlameGraph.git"}),'. Navigate to the "flamegraph" directory and copy the out.perf file generated in step 2 to the "flamegraph" directory. Use the stackcollapse-perf.pl script provided in the flamegraph package to unfold the out.perf file and generate out.folded.']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"./stackcollapse-perf.pl out.perf > out.folded\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Generate an SVG flame graph using flamegraph.pl:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"./flamegraph.pl out.folded > flame.svg\n"})}),"\n",(0,n.jsx)(t.p,{children:"Steps 1 and 2 are completed on the RDK, while steps 3 and 4 are completed on either a PC or the RDK."}),"\n",(0,n.jsx)(t.h2,{id:"results-analysis",children:"Results Analysis"}),"\n",(0,n.jsx)(t.p,{children:"After following the workflow in the previous section, the recorded function calls within the RDK system are shown in the following image:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(75386).A+"",width:"1234",height:"334"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75386:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/flame_graph_result-701f7f64f53ad379ed182b94b50351ec.png"},93859:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),a=r(34164),o=r(86641),s=r(56347),l=r(205),i=r(38874),c=r(24035),d=r(82993);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=f({queryString:r,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),a=l[r].value;a!==n&&(c(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function _(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(t))}}}]);