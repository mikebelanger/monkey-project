// Compiled by ClojureScript 1.9.229 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__6728__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__10950_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__10950_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__6728__auto__)){
var changed__$1 = temp__6728__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__10955 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__10956 = null;
var count__10957 = (0);
var i__10958 = (0);
while(true){
if((i__10958 < count__10957)){
var s = cljs.core._nth.call(null,chunk__10956,i__10958);
var temp__6728__auto___10959 = (sheets[s]);
if(cljs.core.truth_(temp__6728__auto___10959)){
var sheet_10960 = temp__6728__auto___10959;
var temp__6728__auto___10961__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10960.href,changed);
if(cljs.core.truth_(temp__6728__auto___10961__$1)){
var href_uri_10962 = temp__6728__auto___10961__$1;
sheet_10960.ownerNode.href = href_uri_10962.makeUnique().toString();
} else {
}
} else {
}

var G__10963 = seq__10955;
var G__10964 = chunk__10956;
var G__10965 = count__10957;
var G__10966 = (i__10958 + (1));
seq__10955 = G__10963;
chunk__10956 = G__10964;
count__10957 = G__10965;
i__10958 = G__10966;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__10955);
if(temp__6728__auto__){
var seq__10955__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10955__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__10955__$1);
var G__10967 = cljs.core.chunk_rest.call(null,seq__10955__$1);
var G__10968 = c__8146__auto__;
var G__10969 = cljs.core.count.call(null,c__8146__auto__);
var G__10970 = (0);
seq__10955 = G__10967;
chunk__10956 = G__10968;
count__10957 = G__10969;
i__10958 = G__10970;
continue;
} else {
var s = cljs.core.first.call(null,seq__10955__$1);
var temp__6728__auto___10971__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6728__auto___10971__$1)){
var sheet_10972 = temp__6728__auto___10971__$1;
var temp__6728__auto___10973__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10972.href,changed);
if(cljs.core.truth_(temp__6728__auto___10973__$2)){
var href_uri_10974 = temp__6728__auto___10973__$2;
sheet_10972.ownerNode.href = href_uri_10974.makeUnique().toString();
} else {
}
} else {
}

var G__10975 = cljs.core.next.call(null,seq__10955__$1);
var G__10976 = null;
var G__10977 = (0);
var G__10978 = (0);
seq__10955 = G__10975;
chunk__10956 = G__10976;
count__10957 = G__10977;
i__10958 = G__10978;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__10983 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__10984 = null;
var count__10985 = (0);
var i__10986 = (0);
while(true){
if((i__10986 < count__10985)){
var s = cljs.core._nth.call(null,chunk__10984,i__10986);
var temp__6728__auto___10987 = (images[s]);
if(cljs.core.truth_(temp__6728__auto___10987)){
var image_10988 = temp__6728__auto___10987;
var temp__6728__auto___10989__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_10988.src,changed);
if(cljs.core.truth_(temp__6728__auto___10989__$1)){
var href_uri_10990 = temp__6728__auto___10989__$1;
image_10988.src = href_uri_10990.makeUnique().toString();
} else {
}
} else {
}

var G__10991 = seq__10983;
var G__10992 = chunk__10984;
var G__10993 = count__10985;
var G__10994 = (i__10986 + (1));
seq__10983 = G__10991;
chunk__10984 = G__10992;
count__10985 = G__10993;
i__10986 = G__10994;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__10983);
if(temp__6728__auto__){
var seq__10983__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10983__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__10983__$1);
var G__10995 = cljs.core.chunk_rest.call(null,seq__10983__$1);
var G__10996 = c__8146__auto__;
var G__10997 = cljs.core.count.call(null,c__8146__auto__);
var G__10998 = (0);
seq__10983 = G__10995;
chunk__10984 = G__10996;
count__10985 = G__10997;
i__10986 = G__10998;
continue;
} else {
var s = cljs.core.first.call(null,seq__10983__$1);
var temp__6728__auto___10999__$1 = (images[s]);
if(cljs.core.truth_(temp__6728__auto___10999__$1)){
var image_11000 = temp__6728__auto___10999__$1;
var temp__6728__auto___11001__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_11000.src,changed);
if(cljs.core.truth_(temp__6728__auto___11001__$2)){
var href_uri_11002 = temp__6728__auto___11001__$2;
image_11000.src = href_uri_11002.makeUnique().toString();
} else {
}
} else {
}

var G__11003 = cljs.core.next.call(null,seq__10983__$1);
var G__11004 = null;
var G__11005 = (0);
var G__11006 = (0);
seq__10983 = G__11003;
chunk__10984 = G__11004;
count__10985 = G__11005;
i__10986 = G__11006;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__11009){
var map__11012 = p__11009;
var map__11012__$1 = ((((!((map__11012 == null)))?((((map__11012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11012):map__11012);
var on_jsload = cljs.core.get.call(null,map__11012__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__11012,map__11012__$1,on_jsload){
return (function (p1__11007_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__11007_SHARP_,".js");
});})(map__11012,map__11012__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__11012,map__11012__$1,on_jsload){
return (function (p1__11008_SHARP_){
return goog.Uri.parse(p1__11008_SHARP_).makeUnique();
});})(js_files,map__11012,map__11012__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__11012,map__11012__$1,on_jsload){
return (function() { 
var G__11014__delegate = function (_){
return on_jsload.call(null);
};
var G__11014 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__11015__i = 0, G__11015__a = new Array(arguments.length -  0);
while (G__11015__i < G__11015__a.length) {G__11015__a[G__11015__i] = arguments[G__11015__i + 0]; ++G__11015__i;}
  _ = new cljs.core.IndexedSeq(G__11015__a,0);
} 
return G__11014__delegate.call(this,_);};
G__11014.cljs$lang$maxFixedArity = 0;
G__11014.cljs$lang$applyTo = (function (arglist__11016){
var _ = cljs.core.seq(arglist__11016);
return G__11014__delegate(_);
});
G__11014.cljs$core$IFn$_invoke$arity$variadic = G__11014__delegate;
return G__11014;
})()
;})(js_files,map__11012,map__11012__$1,on_jsload))
,((function (js_files,map__11012,map__11012__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__11012,map__11012__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__11021_11025 = cljs.core.seq.call(null,things_to_log);
var chunk__11022_11026 = null;
var count__11023_11027 = (0);
var i__11024_11028 = (0);
while(true){
if((i__11024_11028 < count__11023_11027)){
var t_11029 = cljs.core._nth.call(null,chunk__11022_11026,i__11024_11028);
console.log(t_11029);

var G__11030 = seq__11021_11025;
var G__11031 = chunk__11022_11026;
var G__11032 = count__11023_11027;
var G__11033 = (i__11024_11028 + (1));
seq__11021_11025 = G__11030;
chunk__11022_11026 = G__11031;
count__11023_11027 = G__11032;
i__11024_11028 = G__11033;
continue;
} else {
var temp__6728__auto___11034 = cljs.core.seq.call(null,seq__11021_11025);
if(temp__6728__auto___11034){
var seq__11021_11035__$1 = temp__6728__auto___11034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11021_11035__$1)){
var c__8146__auto___11036 = cljs.core.chunk_first.call(null,seq__11021_11035__$1);
var G__11037 = cljs.core.chunk_rest.call(null,seq__11021_11035__$1);
var G__11038 = c__8146__auto___11036;
var G__11039 = cljs.core.count.call(null,c__8146__auto___11036);
var G__11040 = (0);
seq__11021_11025 = G__11037;
chunk__11022_11026 = G__11038;
count__11023_11027 = G__11039;
i__11024_11028 = G__11040;
continue;
} else {
var t_11041 = cljs.core.first.call(null,seq__11021_11035__$1);
console.log(t_11041);

var G__11042 = cljs.core.next.call(null,seq__11021_11035__$1);
var G__11043 = null;
var G__11044 = (0);
var G__11045 = (0);
seq__11021_11025 = G__11042;
chunk__11022_11026 = G__11043;
count__11023_11027 = G__11044;
i__11024_11028 = G__11045;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__11046_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__11046_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__11048 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__11048);

adzerk.boot_reload.reload.reload_css.call(null,G__11048);

adzerk.boot_reload.reload.reload_img.call(null,G__11048);

return G__11048;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map