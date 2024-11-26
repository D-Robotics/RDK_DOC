"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8972],{90983:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var s=i(74848),d=i(28453);const r={sidebar_position:2},c="ENCODER\uff08Encoding Module\uff09API",t={id:"Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api",title:"ENCODER\uff08Encoding Module\uff09API",description:"The ENCODER module provides interfaces for handling video encoding tasks. The available functions are as follows:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra",slug:"/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"VIO (Video Input/Output) API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/vio_api"},next:{title:"DECODER\uff08Decoding Module\uff09API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/decoder_api"}},o={},l=[{value:"sp_init_encoder_module",id:"sp_init_encoder_module",level:2},{value:"sp_release_encoder_module",id:"sp_release_encoder_module",level:2},{value:"sp_start_encode",id:"sp_start_encode",level:2},{value:"sp_stop_encode",id:"sp_stop_encode",level:2},{value:"sp_encoder_set_frame",id:"sp_encoder_set_frame",level:2},{value:"sp_encoder_get_stream",id:"sp_encoder_get_stream",level:2}];function h(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"encoderencoding-moduleapi",children:"ENCODER\uff08Encoding Module\uff09API"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ENCODER"})," module provides interfaces for handling video encoding tasks. The available functions are as follows:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Function"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_init_encoder_module"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Initialize the encoder module object"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_release_encoder_module"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Destroy the encoder module object"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_start_encode"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Create a video encoding channel"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_stop_encode"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Close the video encoding channel"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_encoder_set_frame"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Send image frames to the encoding channel"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sp_encoder_get_stream"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Retrieve encoded stream data from the encoding channel"})})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": RDK Ultra ",(0,s.jsx)(n.strong,{children:"does not support H264 encoding/decoding"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sp_init_encoder_module",children:"sp_init_encoder_module"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Declaration"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"void *sp_init_encoder_module()"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),(0,s.jsx)(n.br,{}),"\n","Initializes the encoder module and creates an operation handle. This function must be called before using the encoding module."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),(0,s.jsx)(n.br,{}),"\n","None"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Type"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Returns a pointer to the ",(0,s.jsx)(n.code,{children:"ENCODER"})," object on success."]}),"\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"NULL"})," on failure."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sp_release_encoder_module",children:"sp_release_encoder_module"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Declaration"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"void sp_release_encoder_module(void *obj)"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),(0,s.jsx)(n.br,{}),"\n","Releases the encoder module object."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"obj"}),": The pointer to the ",(0,s.jsx)(n.code,{children:"ENCODER"})," object obtained from initialization."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Return Type"}),(0,s.jsx)(n.br,{}),"\n","None"]}),"\n",(0,s.jsx)(n.h2,{id:"sp_start_encode",children:"sp_start_encode"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Declaration"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"int32_t sp_start_encode(void *obj, int32_t type, int32_t width, int32_t height, int32_t bits)"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),(0,s.jsx)(n.br,{}),"\n","Creates a video encoding channel. It supports up to ",(0,s.jsx)(n.code,{children:"32"})," encoding channels, with encoding types including ",(0,s.jsx)(n.code,{children:"H264"}),", ",(0,s.jsx)(n.code,{children:"H265"}),", and ",(0,s.jsx)(n.code,{children:"MJPEG"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"obj"}),": The pointer to the initialized ",(0,s.jsx)(n.code,{children:"ENCODER"})," object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": The encoding type, which can be ",(0,s.jsx)(n.code,{children:"SP_ENCODER_H264"}),", ",(0,s.jsx)(n.code,{children:"SP_ENCODER_H265"}),", or ",(0,s.jsx)(n.code,{children:"SP_ENCODER_MJPEG"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"width"}),": The input image width for encoding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"height"}),": The input image height for encoding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bits"}),": The encoding bitrate in Mbps (common values: 512, 1024, 2048, 4096, 8192, 16384, etc.)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Type"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"0"})," on success."]}),"\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"-1"})," on failure."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sp_stop_encode",children:"sp_stop_encode"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Declaration"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"int32_t sp_stop_encode(void *obj)"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),(0,s.jsx)(n.br,{}),"\n","Closes the opened encoding channel."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"obj"}),": The pointer to the initialized ",(0,s.jsx)(n.code,{children:"ENCODER"})," object."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Type"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"0"})," on success."]}),"\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"-1"})," on failure."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sp_encoder_set_frame",children:"sp_encoder_set_frame"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Declaration"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"int32_t sp_encoder_set_frame(void *obj, char *frame_buffer, int32_t size)"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),(0,s.jsx)(n.br,{}),"\n","Sends image frame data to the encoding channel. The frame data must be in the ",(0,s.jsx)(n.code,{children:"NV12"})," format."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"obj"}),": The pointer to the initialized ",(0,s.jsx)(n.code,{children:"ENCODER"})," object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"frame_buffer"}),": The image frame data to be encoded, which must be in the ",(0,s.jsx)(n.code,{children:"NV12"})," format. The resolution should match the one specified in ",(0,s.jsx)(n.code,{children:"sp_start_encode"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"size"}),": The size of the image frame data, calculated as ",(0,s.jsx)(n.code,{children:"width * height * 3 / 2"})," for ",(0,s.jsx)(n.code,{children:"NV12"})," format."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Type"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"0"})," on success."]}),"\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"-1"})," on failure."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sp_encoder_get_stream",children:"sp_encoder_get_stream"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Function Declaration"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"int32_t sp_encoder_get_stream(void *obj, char *stream_buffer)"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),(0,s.jsx)(n.br,{}),"\n","Retrieves the encoded stream data from the encoding channel."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"obj"}),": The pointer to the initialized ",(0,s.jsx)(n.code,{children:"ENCODER"})," object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stream_buffer"}),": The buffer where the encoded stream data will be stored. The size of this buffer must be adjusted based on the encoding resolution and bitrate."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Type"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns the size of the encoded stream data on success."}),"\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"-1"})," on failure."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var s=i(96540);const d={},r=s.createContext(d);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);