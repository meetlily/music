/*! For license information please see 17.683722fb790c128bd7aa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7+hd":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n("fKnl"),i=(a=o)&&a.__esModule?a:{default:a};t.default=function(){var e=new Promise((function(e){var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){t&&t(),e(window.YT)}}));return(0,i.default)("//www.youtube.com/iframe_api"),e}},"8wzF":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".none[data-v-00a6b36b] {\n  color: #a0a0a0;\n  padding: 16px 24px;\n}",""])},GKtT:function(e,t,n){"use strict";n.r(t);var a=n("JspL"),o=n("ilaN"),i=n("uhNi"),r=n("OUsP"),u=n("XOBI"),l=n.n(u);let s;var d=a.a.extend({data:()=>({title:"YouTube Video"}),methods:{initPlayer(){s||(s=l()("player",{width:"100%",height:"100%"}),s.on("stateChange",e=>{1===e.data&&r.g.pause()}))}},created(){o.f.on({[i.b.PLAY_YOUTUBE_VIDEO]:({id:e,title:t})=>{this.title=t,this.initPlayer(),s.loadVideoById(e),s.playVideo()},[i.b.SONG_PLAYED]:()=>{s&&s.pauseVideo()}})}}),c=(n("oM2z"),n("KHd+")),f=Object(c.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:"youtubeWrapper"}},[t("h1",{staticClass:"heading"},[t("span",[this._v(this._s(this.title))])]),this._v(" "),this._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"player"}},[t("p",{staticClass:"none"},[this._v("Your YouTube video will be played here."),t("br"),this._v("\n    You can start a video playback from the right sidebar. When a song is playing, that is."),t("br"),this._v("\n    It might also be worth noting that video’s volume, progress and such are controlled from within\n    the video itself, and not via Koel’s controls.")])])}],!1,null,"00a6b36b",null);t.default=f.exports},XOBI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n("9EAu")),o=u(n("sv3k")),i=u(n("7+hd")),r=u(n("vsQN"));function u(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0;l||(l=(0,i.default)()),n={};var u=(0,o.default)();if(t.events)throw new Error("Event handlers cannot be overwritten.");if(a.default.isString(e)&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=r.default.proxyEvents(u);var s=new Promise((function(n){l.then((function(n){return new n.Player(e,t)})).then((function(e){u.on("ready",(function(){n(e)}))}))}));return(n=r.default.promisifyPlayer(s)).on=u.on,n.off=u.off,n}},fKnl:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},r.type=t.type||"text/javascript",r.charset=t.charset||"utf8",r.async=!("async"in t)||!!t.async,r.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(r,t.attrs),t.text&&(r.text=""+t.text),("onload"in r?n:a)(r,o),r.onload||n(r,o),i.appendChild(r)}},iMKl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange"]},iYKg:function(e,t,n){var a=n("8wzF");"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,o);a.locals&&(e.exports=a.locals)},lvwI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","clearVideo","getVideoBytesLoaded","getVideoBytesTotal","getVideoLoadedFraction","getVideoStartBytes","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","getPlaylistId","loadModule","unloadModule","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getDebugText","getVideoData","addCueRange","removeCueRange","getApiInterface","showVideoInfo","hideVideoInfo","G","C","R","aa","$","Z","getVideoEmbedCode","getOptions","getOption","Y","X","addEventListener","destroy","A","P","J","setSize","getIframe"]},oM2z:function(e,t,n){"use strict";var a=n("iYKg");n.n(a).a},sv3k:function(e,t,n){(function(t){function n(){var e={},t={};return e.on=function(e,n){var a={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(a),a},e.off=function(e){var n=t[e.name].indexOf(e);-1!=n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var a,o=t[e];if(o)for(a=o.length;a--;)o[a].handler(n)},e}t.gajus=t.gajus||{},t.gajus.Sister=n,e.exports=n}).call(this,n("yLpj"))},vsQN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("9EAu")),o=r(n("lvwI")),i=r(n("iMKl"));function r(e){return e&&e.__esModule?e:{default:e}}var u={proxyEvents:function(e){var t={};return a.default.forEach(i.default,(function(n){var o="on"+a.default.upperFirst(n);t[o]=function(t){e.trigger(n,t)}})),t},promisifyPlayer:function(e){var t={};return a.default.forEach(o.default,(function(n){t[n]=function(){for(var t=arguments.length,a=Array(t),o=0;o<t;o++)a[o]=arguments[o];return e.then((function(e){return e[n].apply(e,a)}))}})),t}};t.default=u}}]);