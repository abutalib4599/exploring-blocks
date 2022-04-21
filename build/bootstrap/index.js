!function(){"use strict";var e,t={19:function(){var e=window.wp.blocks,t=JSON.parse('{"apiVersion":2,"name":"exploring-blocks/bootstrap","version":"0.1.0","title":"Bootstrap Block","category":"exploring-blocks","icon":"smiley","description":"Example block written with ESNext standard and JSX support build step required.","supports":{"html":false},"attributes":{"content":{"type":"string","default":"Hello World!"},"color":{"type":"string","default":"#00ff00"}},"textdomain":"exploring-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),o=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.components;const{__:__}=wp.i18n;var i=[{name:__("Black","exploring_blocks"),color:"#000000"},{name:__("White","exploring_blocks"),color:"#ffffff"},{name:__("Red","exploring_blocks"),color:"#ff0000"},{name:__("Green","exploring_blocks"),color:"#00ff00"},{name:__("Blue","exploring_blocks"),color:"#0000ff"},{name:__("Yellow","exploring_blocks"),color:"#ffff00"}];const{Fragment:c}=wp.element;(0,e.registerBlockType)(t,{edit:function(e){let{attributes:t,setAttributes:s}=e;const{content:a,color:p}=t;return(0,o.createElement)(c,null,(0,o.createElement)(r.InspectorControls,null,(0,o.createElement)(l.PanelBody,{title:(0,n.__)("Settings","exploring_blocks"),initialOpen:!0},(0,o.createElement)("p",{className:"custom__editor__label"},(0,n.__)("Text Color","exploring_blocks")),(0,o.createElement)(l.ColorPalette,{colors:i,value:p,onChange:e=>s({color:e})}))),(0,o.createElement)("div",(0,r.useBlockProps)(),(0,o.createElement)(r.RichText,{tagName:"h4",value:a,onChange:e=>s({content:e}),style:{color:p}})))},save:function(e){let{attributes:t}=e;const{content:n,color:l}=t;return(0,o.createElement)("div",r.useBlockProps.save(),(0,o.createElement)(r.RichText.Content,{tagName:"h4",value:n,style:{color:l}}))}})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,o,r,l){if(!o){var i=1/0;for(p=0;p<e.length;p++){o=e[p][0],r=e[p][1],l=e[p][2];for(var c=!0,s=0;s<o.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,l<i&&(i=l));if(c){e.splice(p--,1);var a=r();void 0!==a&&(t=a)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[o,r,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={155:0,681:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,l,i=o[0],c=o[1],s=o[2],a=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var p=s(n)}for(t&&t(o);a<i.length;a++)l=i[a],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},o=self.webpackChunkexploring_blocks=self.webpackChunkexploring_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var r=n.O(void 0,[681],(function(){return n(19)}));r=n.O(r)}();