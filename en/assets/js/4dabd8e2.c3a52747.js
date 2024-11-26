"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4179],{95958:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var s=n(74848),d=n(28453);const l={sidebar_position:4},r="DISPLAY API",t={id:"Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/display_api",title:"DISPLAY API",description:"The DISPLAY API provides the following interfaces:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3/display_api.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3",slug:"/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/display_api",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/display_api",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3/display_api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DECODER API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/decoder_api"},next:{title:"BPU (Algorithm Inference Module) API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/bpu_api"}},c={},o=[{value:"sp_init_display_module",id:"sp_init_display_module",level:2},{value:"sp_release_display_module",id:"sp_release_display_module",level:2},{value:"sp_start_display",id:"sp_start_display",level:2},{value:"sp_stop_display",id:"sp_stop_display",level:2},{value:"sp_display_set_image",id:"sp_display_set_image",level:2},{value:"sp_display_draw_rect",id:"sp_display_draw_rect",level:2},{value:"sp_display_draw_string",id:"sp_display_draw_string",level:2},{value:"sp_get_display_resolution",id:"sp_get_display_resolution",level:2}];function a(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"display-api",children:"DISPLAY API"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"DISPLAY"})," API provides the following interfaces:"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Function"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_init_display_module"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Initialize the display module object"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_release_display_module"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Destroy the display module object"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_start_display"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Create a video display channel"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_stop_display"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Close the video display channel"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_display_set_image"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Pass an image to the video display channel"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_display_draw_rect"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Draw a rectangle on the display channel"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_display_draw_string"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Draw a string on the display channel"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_get_display_resolution"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Get the resolution of the display"})})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"sp_init_display_module",children:"sp_init_display_module"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Function prototype\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"void *sp_init_display_module()"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Description\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["Initialize the display module object. This module supports displaying video image data on a display connected to the ",(0,s.jsx)(i.code,{children:"HDMI"})," interface, and provides functions to draw rectangles and text on the display."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"None"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Return type\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["Returns a pointer to the ",(0,s.jsx)(i.code,{children:"DISPLAY"})," object if successful, or NULL if failed."]}),"\n",(0,s.jsx)(i.h2,{id:"sp_release_display_module",children:"sp_release_display_module"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Function prototype\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"void sp_release_display_module(void *obj)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Description\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["Destroy the ",(0,s.jsx)(i.code,{children:"DISPLAY"})," object."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),": Pointer to the initialized ",(0,s.jsx)(i.code,{children:"DISPLAY"})," object."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"None"}),"\n",(0,s.jsx)(i.h2,{id:"sp_start_display",children:"sp_start_display"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_start_display(void *obj, int32_t chn, int32_t width, int32_t height)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Function Description\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["Create a display channel. The RDK X3 development board supports 4 channels, including 2 video layers and 2 graphic layers. The maximum supported resolution is ",(0,s.jsx)(i.code,{children:"1920 x 1080"})," with a maximum frame rate of ",(0,s.jsx)(i.code,{children:"60fps"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),": Initialized ",(0,s.jsx)(i.code,{children:"DISPLAY"})," object pointer"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"chn"}),": Channel number, supports 0-3. If using a desktop system, channel 0 is used for the graphical system, so applications should use channel 1. Channels 2 and 3 are generally used to draw rectangles or overlay text information."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"width"}),": Display output resolution - width"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"height"}),": Display output resolution - height"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"Successful: 0, Failure: -1"}),"\n",(0,s.jsx)(i.h2,{id:"sp_stop_display",children:"sp_stop_display"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_stop_display(void *obj)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Function Description\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"Stop the display channel."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),": Initialized ",(0,s.jsx)(i.code,{children:"DISPLAY"})," object pointer"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"Successful: 0, Failure: -1"}),"\n",(0,s.jsx)(i.h2,{id:"sp_display_set_image",children:"sp_display_set_image"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_display_set_image(void *obj, char *addr, int32_t size, int32_t chn)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Function Description]"})}),"\n",(0,s.jsxs)(i.p,{children:["Display image data in ",(0,s.jsx)(i.code,{children:"addr"})," on display channel ",(0,s.jsx)(i.code,{children:"chn"}),". The image format only supports ",(0,s.jsx)(i.code,{children:"NV12"})," YUV images."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Parameters]"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),": Initialized ",(0,s.jsx)(i.code,{children:"DISPLAY"})," object pointer"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"addr"}),": Image data, image format only supports ",(0,s.jsx)(i.code,{children:"NV12"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"size"}),": Image data size, calculated by: width * height * 3 / 2"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"chn"}),": Display channel corresponding to the channel number used by the ",(0,s.jsx)(i.code,{children:"sp_start_display"})," interface."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Return Type]"})}),"\n",(0,s.jsx)(i.p,{children:"Returns 0 on success, -1 on failure."}),"\n",(0,s.jsx)(i.h2,{id:"sp_display_draw_rect",children:"sp_display_draw_rect"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Function Prototype]"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_display_draw_rect(void *obj, int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t chn, int32_t flush, int32_t color, int32_t line_width)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Function Description]"})}),"\n",(0,s.jsx)(i.p,{children:"Draws a rectangle in the graphics layer of the display module."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Parameters]"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),": Initialized ",(0,s.jsx)(i.code,{children:"DISPLAY"})," object pointer"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"x0"}),": x value of the first coordinate of the rectangle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"y0"}),": y value of the first coordinate of the rectangle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"x1"}),": x value of the second coordinate of the rectangle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"y1"}),": y value of the second coordinate of the rectangle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"chn"}),": display output layer, 2~3 for graphics layer"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"flush"}),": whether to clear the current graphic layer buffer"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"color"}),": color of the rectangle (color format is ARGB8888)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line_width"}),": line width of the rectangle"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Return Type]"})}),"\n",(0,s.jsx)(i.p,{children:"Returns 0 on success, -1 on failure."}),"\n",(0,s.jsx)(i.h2,{id:"sp_display_draw_string",children:"sp_display_draw_string"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Function Prototype]"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_display_draw_string(void *obj, int32_t x, int32_t y, char *str, int32_t chn, int32_t flush, int32_t color, int32_t line_width)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"[Function Description]"})}),"\n",(0,s.jsxs)(i.p,{children:["Draws a string in the graphics layer of the display module.",(0,s.jsx)(i.strong,{children:"\u3010Parameters\u3011"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),": Initialized ",(0,s.jsx)(i.code,{children:"DISPLAY"})," object pointer"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"x"}),": x-value of the starting coordinate for drawing the string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"y"}),": y-value of the starting coordinate for drawing the string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"str"}),": String to be drawn (encoded in GB2312)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"chn"}),": Display output layer, 2~3 for graphic layers"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"flush"}),": Whether to clear the current graphic layer buffer"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"color"}),": Color of the rectangle (color format in ARGB8888)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line_width"}),": Line width of the text"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"Returns 0 if successful, -1 if failed"}),"\n",(0,s.jsx)(i.h2,{id:"sp_get_display_resolution",children:"sp_get_display_resolution"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"void sp_get_display_resolution(int32_t *width, int32_t *height)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Description\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"Gets the resolution of the connected display."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"width"}),": Width of the resolution to be obtained"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"height"}),": Height of the resolution to be obtained"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"None."})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>t});var s=n(96540);const d={},l=s.createContext(d);function r(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);