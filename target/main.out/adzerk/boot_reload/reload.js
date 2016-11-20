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
return (function (p1__10967_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__10967_SHARP_),path);
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
var seq__10972 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__10973 = null;
var count__10974 = (0);
var i__10975 = (0);
while(true){
if((i__10975 < count__10974)){
var s = cljs.core._nth.call(null,chunk__10973,i__10975);
var temp__6728__auto___10976 = (sheets[s]);
if(cljs.core.truth_(temp__6728__auto___10976)){
var sheet_10977 = temp__6728__auto___10976;
var temp__6728__auto___10978__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10977.href,changed);
if(cljs.core.truth_(temp__6728__auto___10978__$1)){
var href_uri_10979 = temp__6728__auto___10978__$1;
sheet_10977.ownerNode.href = href_uri_10979.makeUnique().toString();
} else {
}
} else {
}

var G__10980 = seq__10972;
var G__10981 = chunk__10973;
var G__10982 = count__10974;
var G__10983 = (i__10975 + (1));
seq__10972 = G__10980;
chunk__10973 = G__10981;
count__10974 = G__10982;
i__10975 = G__10983;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__10972);
if(temp__6728__auto__){
var seq__10972__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10972__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__10972__$1);
var G__10984 = cljs.core.chunk_rest.call(null,seq__10972__$1);
var G__10985 = c__8146__auto__;
var G__10986 = cljs.core.count.call(null,c__8146__auto__);
var G__10987 = (0);
seq__10972 = G__10984;
chunk__10973 = G__10985;
count__10974 = G__10986;
i__10975 = G__10987;
continue;
} else {
var s = cljs.core.first.call(null,seq__10972__$1);
var temp__6728__auto___10988__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6728__auto___10988__$1)){
var sheet_10989 = temp__6728__auto___10988__$1;
var temp__6728__auto___10990__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10989.href,changed);
if(cljs.core.truth_(temp__6728__auto___10990__$2)){
var href_uri_10991 = temp__6728__auto___10990__$2;
sheet_10989.ownerNode.href = href_uri_10991.makeUnique().toString();
} else {
}
} else {
}

var G__10992 = cljs.core.next.call(null,seq__10972__$1);
var G__10993 = null;
var G__10994 = (0);
var G__10995 = (0);
seq__10972 = G__10992;
chunk__10973 = G__10993;
count__10974 = G__10994;
i__10975 = G__10995;
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
var seq__11000 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__11001 = null;
var count__11002 = (0);
var i__11003 = (0);
while(true){
if((i__11003 < count__11002)){
var s = cljs.core._nth.call(null,chunk__11001,i__11003);
var temp__6728__auto___11004 = (images[s]);
if(cljs.core.truth_(temp__6728__auto___11004)){
var image_11005 = temp__6728__auto___11004;
var temp__6728__auto___11006__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_11005.src,changed);
if(cljs.core.truth_(temp__6728__auto___11006__$1)){
var href_uri_11007 = temp__6728__auto___11006__$1;
image_11005.src = href_uri_11007.makeUnique().toString();
} else {
}
} else {
}

var G__11008 = seq__11000;
var G__11009 = chunk__11001;
var G__11010 = count__11002;
var G__11011 = (i__11003 + (1));
seq__11000 = G__11008;
chunk__11001 = G__11009;
count__11002 = G__11010;
i__11003 = G__11011;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__11000);
if(temp__6728__auto__){
var seq__11000__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11000__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__11000__$1);
var G__11012 = cljs.core.chunk_rest.call(null,seq__11000__$1);
var G__11013 = c__8146__auto__;
var G__11014 = cljs.core.count.call(null,c__8146__auto__);
var G__11015 = (0);
seq__11000 = G__11012;
chunk__11001 = G__11013;
count__11002 = G__11014;
i__11003 = G__11015;
continue;
} else {
var s = cljs.core.first.call(null,seq__11000__$1);
var temp__6728__auto___11016__$1 = (images[s]);
if(cljs.core.truth_(temp__6728__auto___11016__$1)){
var image_11017 = temp__6728__auto___11016__$1;
var temp__6728__auto___11018__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_11017.src,changed);
if(cljs.core.truth_(temp__6728__auto___11018__$2)){
var href_uri_11019 = temp__6728__auto___11018__$2;
image_11017.src = href_uri_11019.makeUnique().toString();
} else {
}
} else {
}

var G__11020 = cljs.core.next.call(null,seq__11000__$1);
var G__11021 = null;
var G__11022 = (0);
var G__11023 = (0);
seq__11000 = G__11020;
chunk__11001 = G__11021;
count__11002 = G__11022;
i__11003 = G__11023;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__11026){
var map__11029 = p__11026;
var map__11029__$1 = ((((!((map__11029 == null)))?((((map__11029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11029):map__11029);
var on_jsload = cljs.core.get.call(null,map__11029__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__11029,map__11029__$1,on_jsload){
return (function (p1__11024_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__11024_SHARP_,".js");
});})(map__11029,map__11029__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__11029,map__11029__$1,on_jsload){
return (function (p1__11025_SHARP_){
return goog.Uri.parse(p1__11025_SHARP_).makeUnique();
});})(js_files,map__11029,map__11029__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__11029,map__11029__$1,on_jsload){
return (function() { 
var G__11031__delegate = function (_){
return on_jsload.call(null);
};
var G__11031 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__11032__i = 0, G__11032__a = new Array(arguments.length -  0);
while (G__11032__i < G__11032__a.length) {G__11032__a[G__11032__i] = arguments[G__11032__i + 0]; ++G__11032__i;}
  _ = new cljs.core.IndexedSeq(G__11032__a,0);
} 
return G__11031__delegate.call(this,_);};
G__11031.cljs$lang$maxFixedArity = 0;
G__11031.cljs$lang$applyTo = (function (arglist__11033){
var _ = cljs.core.seq(arglist__11033);
return G__11031__delegate(_);
});
G__11031.cljs$core$IFn$_invoke$arity$variadic = G__11031__delegate;
return G__11031;
})()
;})(js_files,map__11029,map__11029__$1,on_jsload))
,((function (js_files,map__11029,map__11029__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__11029,map__11029__$1,on_jsload))
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

var seq__11038_11042 = cljs.core.seq.call(null,things_to_log);
var chunk__11039_11043 = null;
var count__11040_11044 = (0);
var i__11041_11045 = (0);
while(true){
if((i__11041_11045 < count__11040_11044)){
var t_11046 = cljs.core._nth.call(null,chunk__11039_11043,i__11041_11045);
console.log(t_11046);

var G__11047 = seq__11038_11042;
var G__11048 = chunk__11039_11043;
var G__11049 = count__11040_11044;
var G__11050 = (i__11041_11045 + (1));
seq__11038_11042 = G__11047;
chunk__11039_11043 = G__11048;
count__11040_11044 = G__11049;
i__11041_11045 = G__11050;
continue;
} else {
var temp__6728__auto___11051 = cljs.core.seq.call(null,seq__11038_11042);
if(temp__6728__auto___11051){
var seq__11038_11052__$1 = temp__6728__auto___11051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11038_11052__$1)){
var c__8146__auto___11053 = cljs.core.chunk_first.call(null,seq__11038_11052__$1);
var G__11054 = cljs.core.chunk_rest.call(null,seq__11038_11052__$1);
var G__11055 = c__8146__auto___11053;
var G__11056 = cljs.core.count.call(null,c__8146__auto___11053);
var G__11057 = (0);
seq__11038_11042 = G__11054;
chunk__11039_11043 = G__11055;
count__11040_11044 = G__11056;
i__11041_11045 = G__11057;
continue;
} else {
var t_11058 = cljs.core.first.call(null,seq__11038_11052__$1);
console.log(t_11058);

var G__11059 = cljs.core.next.call(null,seq__11038_11052__$1);
var G__11060 = null;
var G__11061 = (0);
var G__11062 = (0);
seq__11038_11042 = G__11059;
chunk__11039_11043 = G__11060;
count__11040_11044 = G__11061;
i__11041_11045 = G__11062;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__11063_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__11063_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__11065 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__11065);

adzerk.boot_reload.reload.reload_css.call(null,G__11065);

adzerk.boot_reload.reload.reload_img.call(null,G__11065);

return G__11065;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map