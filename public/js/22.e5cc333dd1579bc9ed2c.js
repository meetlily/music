(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3bXq":function(t,e,n){"use strict";var o=n("JspL"),a=n("c8RX");e.a=o.a.extend({props:{songs:{type:Array,required:!0}},methods:{queueSongsAfterCurrent(){a.g.queueAfterCurrent(this.songs),this.close()},queueSongsToBottom(){a.g.queue(this.songs),this.close()},queueSongsToTop(){a.g.queueToTop(this.songs),this.close()},addSongsToFavorite(){a.d.like(this.songs),this.close()},addSongsToExistingPlaylist(t){a.e.addSongs(t,this.songs),this.close()},close:()=>{throw new Error("Unimplemented method.")}}})},knuE:function(t,e,n){var o=n("uTgm");"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,a);o.locals&&(t.exports=o.locals)},uTgm:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,'.add-to[data-v-53902ec3] {\n  font-weight: 300;\n  font-size: 13px;\n  padding: 4px 0;\n  min-width: 144px;\n  color: #fff;\n  background-color: #282828;\n  position: fixed;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  z-index: 1001;\n  align-items: stretch;\n  text-align: left;\n  box-shadow: inset 0 0px 0 rgba(255, 255, 255, 0.6), 0 2px 15px 4px rgba(0, 0, 0, 0.56), 0 0 0 1px rgba(0, 0, 0, 0.3);\n  border: 1px solid #424242;\n  width: 100%;\n  max-width: 225px;\n  position: absolute;\n  padding: 8px;\n  top: 39px;\n  left: 0;\n}\n.add-to input[type=search][data-v-53902ec3], .add-to input[type=text][data-v-53902ec3], .add-to input[type=email][data-v-53902ec3], .add-to input[type=url][data-v-53902ec3] {\n  background: #fff;\n}\n.add-to input[type=search][data-v-53902ec3]:focus, .add-to input[type=text][data-v-53902ec3]:focus, .add-to input[type=email][data-v-53902ec3]:focus, .add-to input[type=url][data-v-53902ec3]:focus {\n  background: #fff5b0;\n}\n.add-to p[data-v-53902ec3] {\n  margin: 4px 0;\n  font-size: 0.9rem;\n}\n.add-to p[data-v-53902ec3]::first-of-type {\n  margin-top: 0;\n}\n.add-to ul[data-v-53902ec3] {\n  max-height: 150px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.add-to li[data-v-53902ec3] {\n  height: 28px;\n  line-height: 28px;\n  padding: 0 8px;\n  margin: 2px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-radius: 3px;\n  background: #3c3c3c;\n  cursor: pointer;\n}\n.add-to li[data-v-53902ec3]:hover {\n  background: #ff7d2e;\n  color: #fff;\n}\n.add-to[data-v-53902ec3]::before {\n  display: block;\n  content: " ";\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #282828;\n  position: absolute;\n  top: -7px;\n  left: calc(50% - 10px);\n}\n.add-to form[data-v-53902ec3] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-to form input[type=text][data-v-53902ec3] {\n  width: 100%;\n  border-radius: 5px 0 0 5px;\n  height: 28px;\n}\n.add-to form button[type=submit][data-v-53902ec3] {\n  margin-top: 0;\n  border-radius: 0 5px 5px 0 !important;\n  height: 28px;\n  line-height: 28px;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left: -2px !important;\n}',""])},up6X:function(t,e,n){"use strict";var o=n("knuE");n.n(o).a},yoyx:function(t,e,n){"use strict";n.r(e);var o=n("mF3K"),a=n("ilaN"),i=n("c8RX"),s=n("2Bgu"),r=n("3bXq"),l=function(t,e,n,o){return new(n||(n=Promise))((function(a,i){function s(t){try{l(o.next(t))}catch(t){i(t)}}function r(t){try{l(o.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,r)}l((o=o.apply(t,e||[])).next())}))},d=Object(o.a)(r.a).extend({components:{Btn:()=>n.e(0).then(n.bind(null,"i0GK"))},props:{showing:{type:Boolean,default:!1},config:Object},filters:{pluralize:a.v},data:()=>({newPlaylistName:"",playlistState:i.e.state}),watch:{songs(){this.songs.length||this.close()}},methods:{createNewPlaylistFromSongs(){return l(this,void 0,void 0,(function*(){if(this.newPlaylistName=this.newPlaylistName.trim(),!this.newPlaylistName)return;const t=yield i.e.store(this.newPlaylistName,this.songs);this.newPlaylistName="",this.$nextTick(()=>s.a.go("playlist/"+t.id)),this.close()}))},close(){this.$emit("closing")}}}),c=(n("up6X"),n("KHd+")),p=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"},{name:"koel-clickaway",rawName:"v-koel-clickaway",value:t.close,expression:"close"}],staticClass:"add-to"},[n("p",[t._v("Add "+t._s(t._f("pluralize")(t.songs.length,"song"))+" to")]),t._v(" "),n("ul",[t.config.queue?[n("li",{staticClass:"after-current",attrs:{role:"button",tabindex:"0"},on:{click:t.queueSongsAfterCurrent}},[t._v("After Current Song")]),t._v(" "),n("li",{staticClass:"bottom-queue",attrs:{role:"button",tabindex:"0"},on:{click:t.queueSongsToBottom}},[t._v("Bottom of Queue")]),t._v(" "),n("li",{staticClass:"top-queue",attrs:{role:"button",tabindex:"0"},on:{click:t.queueSongsToTop}},[t._v("Top of Queue")])]:t._e(),t._v(" "),t.config.favorites?n("li",{staticClass:"favorites",attrs:{role:"button",tabindex:"0"},on:{click:t.addSongsToFavorite}},[t._v("\n      Favorites\n    ")]):t._e(),t._v(" "),t.config.playlists?t._l(t.playlistState.playlists,(function(e){return n("li",{key:e.id,staticClass:"playlist",attrs:{role:"button",tabindex:"0"},on:{click:function(n){return t.addSongsToExistingPlaylist(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})):t._e()],2),t._v(" "),t.config.newPlaylist?[n("p",[t._v("or create a new playlist")]),t._v(" "),n("form",{staticClass:"form-save form-simple form-new-playlist",on:{submit:function(e){return e.preventDefault(),t.createNewPlaylistFromSongs(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newPlaylistName,expression:"newPlaylistName"}],attrs:{required:"",type:"text",placeholder:"Playlist name"},domProps:{value:t.newPlaylistName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.preventDefault(),t.close(e))},input:function(e){e.target.composing||(t.newPlaylistName=e.target.value)}}}),t._v(" "),n("btn",{attrs:{type:"submit",title:"Save"}},[t._v("⏎")])],1)]:t._e()],2)}),[],!1,null,"53902ec3",null);e.default=p.exports}}]);