(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{fypd:function(e,t,s){"use strict";s.r(t);var l=s("JspL"),i=s("ilaN"),a=s("uhNi"),n=l.a.extend({components:{BaseContextMenu:()=>s.e(3).then(s.bind(null,"fgFo"))},methods:{open(e,t){this.$refs.base.open(e,t)},close(){this.$refs.base.close()},createPlaylist(){this.$emit("createPlaylist"),this.close()},createSmartPlaylist(){i.f.emit(a.b.MODAL_SHOW_CREATE_SMART_PLAYLIST_FORM),this.close()}}}),c=s("KHd+"),o=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("base-context-menu",{ref:"base",attrs:{"extra-class":"playlist-menu"}},[t("li",{on:{click:this.createPlaylist}},[this._v("New Playlist")]),this._v(" "),t("li",{on:{click:this.createSmartPlaylist}},[this._v("New Smart Playlist")])])}),[],!1,null,null,null);t.default=o.exports}}]);