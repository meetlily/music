(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"6xdQ":function(a,o,s){"use strict";s.r(o);var t=s("JspL"),e=s("ilaN"),l=s("uhNi"),i=t.a.extend({components:{CreateSmartPlaylistForm:()=>s.e(53).then(s.bind(null,"GWAk")),EditSmartPlaylistForm:()=>s.e(54).then(s.bind(null,"04tD")),AddUserForm:()=>s.e(55).then(s.bind(null,"2LCA")),EditUserForm:()=>s.e(57).then(s.bind(null,"C+sE")),EditSongForm:()=>s.e(36).then(s.bind(null,"oymW")),AboutDialog:()=>s.e(18).then(s.bind(null,"qUoD"))},data:()=>({showingModalName:null,boundData:{}}),methods:{close(){this.showingModalName=null,this.boundData={}}},created(){e.f.on({[l.b.MODAL_SHOW_CREATE_SMART_PLAYLIST_FORM]:()=>{this.showingModalName="create-smart-playlist-form"},[l.b.MODAL_SHOW_EDIT_SMART_PLAYLIST_FORM]:a=>{this.boundData.playlist=a,this.showingModalName="edit-smart-playlist-form"},[l.b.MODAL_SHOW_ADD_USER_FORM]:()=>{this.showingModalName="add-user-form"},[l.b.MODAL_SHOW_EDIT_USER_FORM]:a=>{this.boundData.user=a,this.showingModalName="edit-user-form"},[l.b.MODAL_SHOW_EDIT_SONG_FORM]:(a,o="details")=>{this.boundData.songs=a,this.boundData.initialTab=o,this.showingModalName="edit-song-form"},[l.b.MODAL_SHOW_ABOUT_DIALOG]:()=>{this.showingModalName="about-dialog"}})}}),n=s("KHd+"),d=Object(n.a)(i,(function(){var a=this,o=a.$createElement,s=a._self._c||o;return s("div",{staticClass:"modal-wrapper",class:{overlay:a.showingModalName}},["create-smart-playlist-form"===a.showingModalName?s("create-smart-playlist-form",{on:{close:a.close}}):a._e(),a._v(" "),"edit-smart-playlist-form"===a.showingModalName?s("edit-smart-playlist-form",{attrs:{playlist:a.boundData.playlist},on:{close:a.close}}):a._e(),a._v(" "),"add-user-form"===a.showingModalName?s("add-user-form",{on:{close:a.close}}):a._e(),a._v(" "),"edit-user-form"===a.showingModalName?s("edit-user-form",{attrs:{user:a.boundData.user},on:{close:a.close}}):a._e(),a._v(" "),"edit-song-form"===a.showingModalName?s("edit-song-form",{attrs:{songs:a.boundData.songs,initialTab:a.boundData.initialTab},on:{close:a.close}}):a._e(),a._v(" "),"about-dialog"===a.showingModalName?s("about-dialog",{on:{close:a.close}}):a._e()],1)}),[],!1,null,null,null);o.default=d.exports}}]);