(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CD7N:function(t,e,a){"use strict";a.r(e);var n=a("+IMN"),r=a.n(n),i=a("JspL"),s=a("ilaN"),o=a("uhNi"),l=a("c8RX"),u=a("OUsP"),c=function(t,e,a,n){return new(a||(a=Promise))((function(r,i){function s(t){try{l(n.next(t))}catch(t){i(t)}}function o(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(s,o)}l((n=n.apply(t,e||[])).next())}))};var b=i.a.extend({components:{LyricsPane:()=>a.e(39).then(a.bind(null,"eiEA")),ArtistInfo:()=>a.e(7).then(a.bind(null,"oIb4")),AlbumInfo:()=>a.e(6).then(a.bind(null,"kNsj")),YouTubeVideoList:()=>a.e(45).then(a.bind(null,"Igwh"))},data:()=>({song:null,state:l.f.state,sharedState:l.j.state,currentTab:"Lyrics"}),computed:{artist(){return this.song?this.song.artist:null},album(){return this.song?this.song.album:null}},watch:{"state.showExtraPanel":t=>{t&&!r.a.any?s.a.addClass(document.documentElement,"with-extra-panel"):s.a.removeClass(document.documentElement,"with-extra-panel")}},methods:{resetState(){this.currentTab="Lyrics",this.song=l.k.stub},fetchSongInfo(t){return c(this,void 0,void 0,(function*(){try{this.song=yield u.i.fetch(t)}catch(e){throw this.song=t,e}}))}},created(){s.f.on({[o.b.SONG_PLAYED]:t=>c(this,void 0,void 0,(function*(){return yield this.fetchSongInfo(t)})),[o.b.LOAD_MAIN_CONTENT]:()=>{r.a.any||s.a.addClass(document.documentElement,"with-extra-panel"),r.a.phone&&(this.state.showExtraPanel=!1)}})}}),d=(a("UsuQ"),a("KHd+")),h=Object(d.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:{showing:t.state.showExtraPanel},attrs:{id:"extra"}},[a("div",{staticClass:"tabs"},[a("div",{staticClass:"clear",attrs:{role:"tablist"}},[a("button",{attrs:{"aria-selected":"Lyrics"===t.currentTab,"aria-controls":"extraPanelLyrics",id:"extraTabLyrics",role:"tab"},on:{click:function(e){e.preventDefault(),t.currentTab="Lyrics"}}},[t._v("\n        Lyrics\n      ")]),t._v(" "),a("button",{attrs:{"aria-selected":"Artist"===t.currentTab,"aria-controls":"extraPanelArtist",id:"extraTabArtist",role:"tab"},on:{click:function(e){e.preventDefault(),t.currentTab="Artist"}}},[t._v("\n        Artist\n      ")]),t._v(" "),a("button",{attrs:{"aria-selected":"Album"===t.currentTab,"aria-controls":"extraPanelAlbum",id:"extraTabAlbum",role:"tab"},on:{click:function(e){e.preventDefault(),t.currentTab="Album"}}},[t._v("\n        Album\n      ")]),t._v(" "),t.sharedState.useYouTube?a("button",{attrs:{"aria-selected":"YouTube"===t.currentTab,"aria-controls":"extraPanelYouTube",id:"extraTabYouTube",role:"tab",title:"YouTube"},on:{click:function(e){e.preventDefault(),t.currentTab="YouTube"}}},[a("i",{staticClass:"fa fa-youtube-play"})]):t._e()]),t._v(" "),a("div",{staticClass:"panes"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"Lyrics"===t.currentTab,expression:"currentTab === 'Lyrics'"}],attrs:{"aria-labelledby":"extraTabLyrics",id:"extraPanelLyrics",role:"tabpanel",tabindex:"0"}},[a("lyrics-pane",{attrs:{song:t.song}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"Artist"===t.currentTab,expression:"currentTab === 'Artist'"}],attrs:{"aria-labelledby":"extraTabArtist",id:"extraPanelArtist",role:"tabpanel",tabindex:"0"}},[t.artist?a("artist-info",{attrs:{artist:t.artist,mode:"sidebar"}}):t._e()],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"Album"===t.currentTab,expression:"currentTab === 'Album'"}],attrs:{"aria-labelledby":"extraTabAlbum",id:"extraPanelAlbum",role:"tabpanel",tabindex:"0"}},[t.album?a("album-info",{attrs:{album:t.album,mode:"sidebar"}}):t._e()],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"YouTube"===t.currentTab,expression:"currentTab === 'YouTube'"}],attrs:{"aria-labelledby":"extraTabAlbum",id:"extraPanelAlbum",role:"tabpanel",tabindex:"0"}},[t.sharedState.useYouTube&&t.song?a("you-tube-video-list",{attrs:{song:t.song}}):t._e()],1)])])])}),[],!1,null,null,null);e.default=h.exports},TI0p:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"#extra {\n  flex: 0 0 334px;\n  padding: 24px 16px;\n  background: #212121;\n  display: none;\n  color: #a0a0a0;\n  overflow: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\nhtml.touchevents #extra {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n#extra.showing {\n  display: block;\n}\n#extra h1 {\n  font-weight: 100;\n  font-size: 2.2rem;\n  margin-bottom: 16px;\n  line-height: 2.8rem;\n}\n@media only screen and (max-width: 1024px) {\n#extra {\n    position: fixed;\n    height: calc(100vh - 48px);\n    width: 334px;\n    z-index: 5;\n    top: 48px;\n    right: -100%;\n    transition: right 0.3s ease-in;\n}\n#extra.showing {\n    right: 0;\n}\n}\n@media only screen and (max-width: 667px) {\n#extra {\n    width: 100%;\n}\n}",""])},UsuQ:function(t,e,a){"use strict";var n=a("iPjZ");a.n(n).a},iPjZ:function(t,e,a){var n=a("TI0p");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)}}]);