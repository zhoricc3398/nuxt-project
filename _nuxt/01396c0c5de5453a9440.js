(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("8e833814",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n(67),n(24),n(19),n(16),n(42);var o=n(31);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{post:{type:Object,required:!1}},data:function(){return{editedPost:this.post?c({},this.post):{author:"",title:"",thumbnail:"",content:"",previewText:""}}},methods:{onSave:function(){this.$emit("submit",this.editedPost)},onCancel:function(){this.$router.push("/admin")}}},d=n(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[n("AppControlInput",{model:{value:t.editedPost.author,callback:function(e){t.$set(t.editedPost,"author",e)},expression:"editedPost.author"}},[t._v("Author Name")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}},[t._v("Title")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.thumbnail,callback:function(e){t.$set(t.editedPost,"thumbnail",e)},expression:"editedPost.thumbnail"}},[t._v("Thumbnail Link")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.content,callback:function(e){t.$set(t.editedPost,"content",e)},expression:"editedPost.content"}},[t._v("Content")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.previewText,callback:function(e){t.$set(t.editedPost,"previewText",e)},expression:"editedPost.previewText"}},[t._v("Preview Text")]),t._v(" "),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("Cancel")])],1)}),[],!1,null,null,null);e.a=component.exports},226:function(t,e,n){"use strict";var o=n(212);n.n(o).a},227:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".update-form[data-v-86284a42]{width:90%;margin:20px auto}@media (min-width:768px){.update-form[data-v-86284a42]{width:500px}}",""])},236:function(t,e,n){"use strict";n.r(e);n(67),n(24),n(19),n(16),n(42);var o=n(31);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={layout:"admin",components:{AdminPostForm:n(215).a},asyncData:function(t){return t.app.$axios.$get("/posts/"+t.params.postId+".json").then((function(data){return{loadedPost:c({},data,{id:t.params.postId})}})).catch((function(e){return t.error(e)}))},methods:{onSubmitted:function(t){var e=this;this.$store.dispatch("editPost",t).then((function(){e.$router.push("/admin")}))}}},d=(n(226),n(2)),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin-post-page"},[e("section",{staticClass:"update-form"},[e("AdminPostForm",{attrs:{post:this.loadedPost},on:{submit:this.onSubmitted}})],1)])}),[],!1,null,"86284a42",null);e.default=component.exports}}]);