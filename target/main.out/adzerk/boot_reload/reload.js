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
return (function (p1__10983_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__10983_SHARP_),path);
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
var seq__10988 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__10989 = null;
var count__10990 = (0);
var i__10991 = (0);
while(true){
if((i__10991 < count__10990)){
var s = cljs.core._nth.call(null,chunk__10989,i__10991);
var temp__6728__auto___10992 = (sheets[s]);
if(cljs.core.truth_(temp__6728__auto___10992)){
var sheet_10993 = temp__6728__auto___10992;
var temp__6728__auto___10994__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10993.href,changed);
if(cljs.core.truth_(temp__6728__auto___10994__$1)){
var href_uri_10995 = temp__6728__auto___10994__$1;
sheet_10993.ownerNode.href = href_uri_10995.makeUnique().toString();
} else {
}
} else {
}

var G__10996 = seq__10988;
var G__10997 = chunk__10989;
var G__10998 = count__10990;
var G__10999 = (i__10991 + (1));
seq__10988 = G__10996;
chunk__10989 = G__10997;
count__10990 = G__10998;
i__10991 = G__10999;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__10988);
if(temp__6728__auto__){
var seq__10988__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10988__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__10988__$1);
var G__11000 = cljs.core.chunk_rest.call(null,seq__10988__$1);
var G__11001 = c__8146__auto__;
var G__11002 = cljs.core.count.call(null,c__8146__auto__);
var G__11003 = (0);
seq__10988 = G__11000;
chunk__10989 = G__11001;
count__10990 = G__11002;
i__10991 = G__11003;
continue;
} else {
var s = cljs.core.first.call(null,seq__10988__$1);
var temp__6728__auto___11004__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6728__auto___11004__$1)){
var sheet_11005 = temp__6728__auto___11004__$1;
var temp__6728__auto___11006__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_11005.href,changed);
if(cljs.core.truth_(temp__6728__auto___11006__$2)){
var href_uri_11007 = temp__6728__auto___11006__$2;
sheet_11005.ownerNode.href = href_uri_11007.makeUnique().toString();
} else {
}
} else {
}

var G__11008 = cljs.core.next.call(null,seq__10988__$1);
var G__11009 = null;
var G__11010 = (0);
var G__11011 = (0);
seq__10988 = G__11008;
chunk__10989 = G__11009;
count__10990 = G__11010;
i__10991 = G__11011;
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
var seq__11016 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__11017 = null;
var count__11018 = (0);
var i__11019 = (0);
while(true){
if((i__11019 < count__11018)){
var s = cljs.core._nth.call(null,chunk__11017,i__11019);
var temp__6728__auto___11020 = (images[s]);
if(cljs.core.truth_(temp__6728__auto___11020)){
var image_11021 = temp__6728__auto___11020;
var temp__6728__auto___11022__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_11021.src,changed);
if(cljs.core.truth_(temp__6728__auto___11022__$1)){
var href_uri_11023 = temp__6728__auto___11022__$1;
image_11021.src = href_uri_11023.makeUnique().toString();
} else {
}
} else {
}

var G__11024 = seq__11016;
var G__11025 = chunk__11017;
var G__11026 = count__11018;
var G__11027 = (i__11019 + (1));
seq__11016 = G__11024;
chunk__11017 = G__11025;
count__11018 = G__11026;
i__11019 = G__11027;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__11016);
if(temp__6728__auto__){
var seq__11016__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11016__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__11016__$1);
var G__11028 = cljs.core.chunk_rest.call(null,seq__11016__$1);
var G__11029 = c__8146__auto__;
var G__11030 = cljs.core.count.call(null,c__8146__auto__);
var G__11031 = (0);
seq__11016 = G__11028;
chunk__11017 = G__11029;
count__11018 = G__11030;
i__11019 = G__11031;
continue;
} else {
var s = cljs.core.first.call(null,seq__11016__$1);
var temp__6728__auto___11032__$1 = (images[s]);
if(cljs.core.truth_(temp__6728__auto___11032__$1)){
var image_11033 = temp__6728__auto___11032__$1;
var temp__6728__auto___11034__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_11033.src,changed);
if(cljs.core.truth_(temp__6728__auto___11034__$2)){
var href_uri_11035 = temp__6728__auto___11034__$2;
image_11033.src = href_uri_11035.makeUnique().toString();
} else {
}
} else {
}

var G__11036 = cljs.core.next.call(null,seq__11016__$1);
var G__11037 = null;
var G__11038 = (0);
var G__11039 = (0);
seq__11016 = G__11036;
chunk__11017 = G__11037;
count__11018 = G__11038;
i__11019 = G__11039;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__11042){
var map__11045 = p__11042;
var map__11045__$1 = ((((!((map__11045 == null)))?((((map__11045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11045):map__11045);
var on_jsload = cljs.core.get.call(null,map__11045__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__11045,map__11045__$1,on_jsload){
return (function (p1__11040_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__11040_SHARP_,".js");
});})(map__11045,map__11045__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__11045,map__11045__$1,on_jsload){
return (function (p1__11041_SHARP_){
return goog.Uri.parse(p1__11041_SHARP_).makeUnique();
});})(js_files,map__11045,map__11045__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__11045,map__11045__$1,on_jsload){
return (function() { 
var G__11047__delegate = function (_){
return on_jsload.call(null);
};
var G__11047 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__11048__i = 0, G__11048__a = new Array(arguments.length -  0);
while (G__11048__i < G__11048__a.length) {G__11048__a[G__11048__i] = arguments[G__11048__i + 0]; ++G__11048__i;}
  _ = new cljs.core.IndexedSeq(G__11048__a,0);
} 
return G__11047__delegate.call(this,_);};
G__11047.cljs$lang$maxFixedArity = 0;
G__11047.cljs$lang$applyTo = (function (arglist__11049){
var _ = cljs.core.seq(arglist__11049);
return G__11047__delegate(_);
});
G__11047.cljs$core$IFn$_invoke$arity$variadic = G__11047__delegate;
return G__11047;
})()
;})(js_files,map__11045,map__11045__$1,on_jsload))
,((function (js_files,map__11045,map__11045__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__11045,map__11045__$1,on_jsload))
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

var seq__11054_11058 = cljs.core.seq.call(null,things_to_log);
var chunk__11055_11059 = null;
var count__11056_11060 = (0);
var i__11057_11061 = (0);
while(true){
if((i__11057_11061 < count__11056_11060)){
var t_11062 = cljs.core._nth.call(null,chunk__11055_11059,i__11057_11061);
console.log(t_11062);

var G__11063 = seq__11054_11058;
var G__11064 = chunk__11055_11059;
var G__11065 = count__11056_11060;
var G__11066 = (i__11057_11061 + (1));
seq__11054_11058 = G__11063;
chunk__11055_11059 = G__11064;
count__11056_11060 = G__11065;
i__11057_11061 = G__11066;
continue;
} else {
var temp__6728__auto___11067 = cljs.core.seq.call(null,seq__11054_11058);
if(temp__6728__auto___11067){
var seq__11054_11068__$1 = temp__6728__auto___11067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11054_11068__$1)){
var c__8146__auto___11069 = cljs.core.chunk_first.call(null,seq__11054_11068__$1);
var G__11070 = cljs.core.chunk_rest.call(null,seq__11054_11068__$1);
var G__11071 = c__8146__auto___11069;
var G__11072 = cljs.core.count.call(null,c__8146__auto___11069);
var G__11073 = (0);
seq__11054_11058 = G__11070;
chunk__11055_11059 = G__11071;
count__11056_11060 = G__11072;
i__11057_11061 = G__11073;
continue;
} else {
var t_11074 = cljs.core.first.call(null,seq__11054_11068__$1);
console.log(t_11074);

var G__11075 = cljs.core.next.call(null,seq__11054_11068__$1);
var G__11076 = null;
var G__11077 = (0);
var G__11078 = (0);
seq__11054_11058 = G__11075;
chunk__11055_11059 = G__11076;
count__11056_11060 = G__11077;
i__11057_11061 = G__11078;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__11079_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__11079_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__11081 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__11081);

adzerk.boot_reload.reload.reload_css.call(null,G__11081);

adzerk.boot_reload.reload.reload_img.call(null,G__11081);

return G__11081;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map