(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"FF2/":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,'@charset "UTF-8";\n.playlist[data-v-2477c1e5] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.playlist a[data-v-2477c1e5] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.playlist a span[data-v-2477c1e5] {\n  pointer-events: none;\n}\n.playlist a[data-v-2477c1e5]::before {\n  content: "\\F0F6";\n}\n.playlist.favorites a[data-v-2477c1e5]::before {\n  content: "\\F004";\n  color: #bf2043;\n}\n.playlist.recently-played a[data-v-2477c1e5]::before {\n  content: "\\F1DA";\n  color: #56a052;\n}\n.playlist.smart a[data-v-2477c1e5]::before {\n  content: "\\F069";\n}\n.playlist input[data-v-2477c1e5] {\n  width: calc(100% - 32px);\n  margin: 5px 16px;\n}\n.playlist.editing a[data-v-2477c1e5] {\n  display: none !important;\n}',""])},MbuW:function(t,e,a){"use strict";a.r(e);var n=a("JspL"),i=a("ilaN"),l=a("uhNi"),s=a("2Bgu"),r=a("c8RX");const p=["playlist","favorites","recently-played"];var o=n.a.extend({components:{ContextMenu:()=>a.e(51).then(a.bind(null,"GXMH")),NameEditor:()=>a.e(52).then(a.bind(null,"r2GB"))},props:{playlist:{type:Object,required:!0},type:{type:String,default:"playlist",validator:t=>p.includes(t)}},data:()=>({editing:!1,active:!1}),computed:{url(){switch(this.type){case"playlist":return"#!/playlist/"+this.playlist.id;case"favorites":return"#!/favorites";case"recently-played":return"#!/recently-played";default:throw new Error("Invalid playlist type")}},nameEditable(){return"playlist"===this.type},contentEditable(){return!this.playlist.is_smart&&("playlist"===this.type||"favorites"===this.type)},hasContextMenu(){return"playlist"===this.type}},methods:{makeEditable(){this.nameEditable&&(this.editing=!0)},handleDrop(t){if(!this.contentEditable)return!1;if(!t.dataTransfer||!t.dataTransfer.getData("application/x-koel.text+plain"))return!1;const e=r.k.byIds(t.dataTransfer.getData("application/x-koel.text+plain").split(","));return!!e.length&&("favorites"===this.type?r.d.like(e):"playlist"===this.type&&r.e.addSongs(this.playlist,e),!1)},openContextMenu(t){this.hasContextMenu&&(s.a.go("/playlist/"+this.playlist.id),this.$refs.contextMenu.open(t.pageY,t.pageX))},cancelEditing(){this.editing=!1},onPlaylistNameUpdated(t){this.playlist.name=t.name,this.editing=!1}},created(){i.f.on(l.b.LOAD_MAIN_CONTENT,(t,e)=>{switch(t){case"Favorites":this.active="favorites"===this.type;break;case"RecentlyPlayed":this.active="recently-played"===this.type;break;case"Playlist":this.active=this.playlist===e;break;default:this.active=!1}})}}),c=(a("bu+n"),a("KHd+")),d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:["playlist",t.type,t.editing?"editing":"",t.playlist.is_smart?"smart":""],on:{dblclick:function(e){return e.preventDefault(),t.makeEditable(e)}}},[a("a",{directives:[{name:"koel-droppable",rawName:"v-koel-droppable",value:t.handleDrop,expression:"handleDrop"}],class:{active:t.active},attrs:{href:t.url},on:{contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}}},[t._v(t._s(t.playlist.name))]),t._v(" "),t.nameEditable&&t.editing?a("name-editor",{attrs:{playlist:t.playlist},on:{cancelled:t.cancelEditing,updated:t.onPlaylistNameUpdated}}):t._e(),t._v(" "),a("context-menu",{ref:"contextMenu",attrs:{playlist:t.playlist},on:{edit:t.makeEditable}})],1)}),[],!1,null,"2477c1e5",null);e.default=d.exports},"bu+n":function(t,e,a){"use strict";var n=a("mxkc");a.n(n).a},mxkc:function(t,e,a){var n=a("FF2/");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)}}]);