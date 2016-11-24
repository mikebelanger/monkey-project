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
return (function (p1__13247_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__13247_SHARP_),path);
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
var seq__13252 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__13253 = null;
var count__13254 = (0);
var i__13255 = (0);
while(true){
if((i__13255 < count__13254)){
var s = cljs.core._nth.call(null,chunk__13253,i__13255);
var temp__6728__auto___13256 = (sheets[s]);
if(cljs.core.truth_(temp__6728__auto___13256)){
var sheet_13257 = temp__6728__auto___13256;
var temp__6728__auto___13258__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_13257.href,changed);
if(cljs.core.truth_(temp__6728__auto___13258__$1)){
var href_uri_13259 = temp__6728__auto___13258__$1;
sheet_13257.ownerNode.href = href_uri_13259.makeUnique().toString();
} else {
}
} else {
}

var G__13260 = seq__13252;
var G__13261 = chunk__13253;
var G__13262 = count__13254;
var G__13263 = (i__13255 + (1));
seq__13252 = G__13260;
chunk__13253 = G__13261;
count__13254 = G__13262;
i__13255 = G__13263;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__13252);
if(temp__6728__auto__){
var seq__13252__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13252__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__13252__$1);
var G__13264 = cljs.core.chunk_rest.call(null,seq__13252__$1);
var G__13265 = c__8146__auto__;
var G__13266 = cljs.core.count.call(null,c__8146__auto__);
var G__13267 = (0);
seq__13252 = G__13264;
chunk__13253 = G__13265;
count__13254 = G__13266;
i__13255 = G__13267;
continue;
} else {
var s = cljs.core.first.call(null,seq__13252__$1);
var temp__6728__auto___13268__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6728__auto___13268__$1)){
var sheet_13269 = temp__6728__auto___13268__$1;
var temp__6728__auto___13270__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_13269.href,changed);
if(cljs.core.truth_(temp__6728__auto___13270__$2)){
var href_uri_13271 = temp__6728__auto___13270__$2;
sheet_13269.ownerNode.href = href_uri_13271.makeUnique().toString();
} else {
}
} else {
}

var G__13272 = cljs.core.next.call(null,seq__13252__$1);
var G__13273 = null;
var G__13274 = (0);
var G__13275 = (0);
seq__13252 = G__13272;
chunk__13253 = G__13273;
count__13254 = G__13274;
i__13255 = G__13275;
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
var seq__13280 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__13281 = null;
var count__13282 = (0);
var i__13283 = (0);
while(true){
if((i__13283 < count__13282)){
var s = cljs.core._nth.call(null,chunk__13281,i__13283);
var temp__6728__auto___13284 = (images[s]);
if(cljs.core.truth_(temp__6728__auto___13284)){
var image_13285 = temp__6728__auto___13284;
var temp__6728__auto___13286__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_13285.src,changed);
if(cljs.core.truth_(temp__6728__auto___13286__$1)){
var href_uri_13287 = temp__6728__auto___13286__$1;
image_13285.src = href_uri_13287.makeUnique().toString();
} else {
}
} else {
}

var G__13288 = seq__13280;
var G__13289 = chunk__13281;
var G__13290 = count__13282;
var G__13291 = (i__13283 + (1));
seq__13280 = G__13288;
chunk__13281 = G__13289;
count__13282 = G__13290;
i__13283 = G__13291;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__13280);
if(temp__6728__auto__){
var seq__13280__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13280__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__13280__$1);
var G__13292 = cljs.core.chunk_rest.call(null,seq__13280__$1);
var G__13293 = c__8146__auto__;
var G__13294 = cljs.core.count.call(null,c__8146__auto__);
var G__13295 = (0);
seq__13280 = G__13292;
chunk__13281 = G__13293;
count__13282 = G__13294;
i__13283 = G__13295;
continue;
} else {
var s = cljs.core.first.call(null,seq__13280__$1);
var temp__6728__auto___13296__$1 = (images[s]);
if(cljs.core.truth_(temp__6728__auto___13296__$1)){
var image_13297 = temp__6728__auto___13296__$1;
var temp__6728__auto___13298__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_13297.src,changed);
if(cljs.core.truth_(temp__6728__auto___13298__$2)){
var href_uri_13299 = temp__6728__auto___13298__$2;
image_13297.src = href_uri_13299.makeUnique().toString();
} else {
}
} else {
}

var G__13300 = cljs.core.next.call(null,seq__13280__$1);
var G__13301 = null;
var G__13302 = (0);
var G__13303 = (0);
seq__13280 = G__13300;
chunk__13281 = G__13301;
count__13282 = G__13302;
i__13283 = G__13303;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__13306){
var map__13309 = p__13306;
var map__13309__$1 = ((((!((map__13309 == null)))?((((map__13309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13309):map__13309);
var on_jsload = cljs.core.get.call(null,map__13309__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__13309,map__13309__$1,on_jsload){
return (function (p1__13304_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__13304_SHARP_,".js");
});})(map__13309,map__13309__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__13309,map__13309__$1,on_jsload){
return (function (p1__13305_SHARP_){
return goog.Uri.parse(p1__13305_SHARP_).makeUnique();
});})(js_files,map__13309,map__13309__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__13309,map__13309__$1,on_jsload){
return (function() { 
var G__13311__delegate = function (_){
return on_jsload.call(null);
};
var G__13311 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13312__i = 0, G__13312__a = new Array(arguments.length -  0);
while (G__13312__i < G__13312__a.length) {G__13312__a[G__13312__i] = arguments[G__13312__i + 0]; ++G__13312__i;}
  _ = new cljs.core.IndexedSeq(G__13312__a,0);
} 
return G__13311__delegate.call(this,_);};
G__13311.cljs$lang$maxFixedArity = 0;
G__13311.cljs$lang$applyTo = (function (arglist__13313){
var _ = cljs.core.seq(arglist__13313);
return G__13311__delegate(_);
});
G__13311.cljs$core$IFn$_invoke$arity$variadic = G__13311__delegate;
return G__13311;
})()
;})(js_files,map__13309,map__13309__$1,on_jsload))
,((function (js_files,map__13309,map__13309__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__13309,map__13309__$1,on_jsload))
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

var seq__13318_13322 = cljs.core.seq.call(null,things_to_log);
var chunk__13319_13323 = null;
var count__13320_13324 = (0);
var i__13321_13325 = (0);
while(true){
if((i__13321_13325 < count__13320_13324)){
var t_13326 = cljs.core._nth.call(null,chunk__13319_13323,i__13321_13325);
console.log(t_13326);

var G__13327 = seq__13318_13322;
var G__13328 = chunk__13319_13323;
var G__13329 = count__13320_13324;
var G__13330 = (i__13321_13325 + (1));
seq__13318_13322 = G__13327;
chunk__13319_13323 = G__13328;
count__13320_13324 = G__13329;
i__13321_13325 = G__13330;
continue;
} else {
var temp__6728__auto___13331 = cljs.core.seq.call(null,seq__13318_13322);
if(temp__6728__auto___13331){
var seq__13318_13332__$1 = temp__6728__auto___13331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13318_13332__$1)){
var c__8146__auto___13333 = cljs.core.chunk_first.call(null,seq__13318_13332__$1);
var G__13334 = cljs.core.chunk_rest.call(null,seq__13318_13332__$1);
var G__13335 = c__8146__auto___13333;
var G__13336 = cljs.core.count.call(null,c__8146__auto___13333);
var G__13337 = (0);
seq__13318_13322 = G__13334;
chunk__13319_13323 = G__13335;
count__13320_13324 = G__13336;
i__13321_13325 = G__13337;
continue;
} else {
var t_13338 = cljs.core.first.call(null,seq__13318_13332__$1);
console.log(t_13338);

var G__13339 = cljs.core.next.call(null,seq__13318_13332__$1);
var G__13340 = null;
var G__13341 = (0);
var G__13342 = (0);
seq__13318_13322 = G__13339;
chunk__13319_13323 = G__13340;
count__13320_13324 = G__13341;
i__13321_13325 = G__13342;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__13343_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__13343_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__13345 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__13345);

adzerk.boot_reload.reload.reload_css.call(null,G__13345);

adzerk.boot_reload.reload.reload_img.call(null,G__13345);

return G__13345;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map