// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12296){
var map__12321 = p__12296;
var map__12321__$1 = ((((!((map__12321 == null)))?((((map__12321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12321):map__12321);
var m = map__12321__$1;
var n = cljs.core.get.call(null,map__12321__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6728__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6728__auto__)){
var ns = temp__6728__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12323_12345 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12324_12346 = null;
var count__12325_12347 = (0);
var i__12326_12348 = (0);
while(true){
if((i__12326_12348 < count__12325_12347)){
var f_12349 = cljs.core._nth.call(null,chunk__12324_12346,i__12326_12348);
cljs.core.println.call(null,"  ",f_12349);

var G__12350 = seq__12323_12345;
var G__12351 = chunk__12324_12346;
var G__12352 = count__12325_12347;
var G__12353 = (i__12326_12348 + (1));
seq__12323_12345 = G__12350;
chunk__12324_12346 = G__12351;
count__12325_12347 = G__12352;
i__12326_12348 = G__12353;
continue;
} else {
var temp__6728__auto___12354 = cljs.core.seq.call(null,seq__12323_12345);
if(temp__6728__auto___12354){
var seq__12323_12355__$1 = temp__6728__auto___12354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12323_12355__$1)){
var c__10932__auto___12356 = cljs.core.chunk_first.call(null,seq__12323_12355__$1);
var G__12357 = cljs.core.chunk_rest.call(null,seq__12323_12355__$1);
var G__12358 = c__10932__auto___12356;
var G__12359 = cljs.core.count.call(null,c__10932__auto___12356);
var G__12360 = (0);
seq__12323_12345 = G__12357;
chunk__12324_12346 = G__12358;
count__12325_12347 = G__12359;
i__12326_12348 = G__12360;
continue;
} else {
var f_12361 = cljs.core.first.call(null,seq__12323_12355__$1);
cljs.core.println.call(null,"  ",f_12361);

var G__12362 = cljs.core.next.call(null,seq__12323_12355__$1);
var G__12363 = null;
var G__12364 = (0);
var G__12365 = (0);
seq__12323_12345 = G__12362;
chunk__12324_12346 = G__12363;
count__12325_12347 = G__12364;
i__12326_12348 = G__12365;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12366 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10029__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10029__auto__)){
return or__10029__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12366);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12366)))?cljs.core.second.call(null,arglists_12366):arglists_12366));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12327_12367 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12328_12368 = null;
var count__12329_12369 = (0);
var i__12330_12370 = (0);
while(true){
if((i__12330_12370 < count__12329_12369)){
var vec__12331_12371 = cljs.core._nth.call(null,chunk__12328_12368,i__12330_12370);
var name_12372 = cljs.core.nth.call(null,vec__12331_12371,(0),null);
var map__12334_12373 = cljs.core.nth.call(null,vec__12331_12371,(1),null);
var map__12334_12374__$1 = ((((!((map__12334_12373 == null)))?((((map__12334_12373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12334_12373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12334_12373):map__12334_12373);
var doc_12375 = cljs.core.get.call(null,map__12334_12374__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12376 = cljs.core.get.call(null,map__12334_12374__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12372);

cljs.core.println.call(null," ",arglists_12376);

if(cljs.core.truth_(doc_12375)){
cljs.core.println.call(null," ",doc_12375);
} else {
}

var G__12377 = seq__12327_12367;
var G__12378 = chunk__12328_12368;
var G__12379 = count__12329_12369;
var G__12380 = (i__12330_12370 + (1));
seq__12327_12367 = G__12377;
chunk__12328_12368 = G__12378;
count__12329_12369 = G__12379;
i__12330_12370 = G__12380;
continue;
} else {
var temp__6728__auto___12381 = cljs.core.seq.call(null,seq__12327_12367);
if(temp__6728__auto___12381){
var seq__12327_12382__$1 = temp__6728__auto___12381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12327_12382__$1)){
var c__10932__auto___12383 = cljs.core.chunk_first.call(null,seq__12327_12382__$1);
var G__12384 = cljs.core.chunk_rest.call(null,seq__12327_12382__$1);
var G__12385 = c__10932__auto___12383;
var G__12386 = cljs.core.count.call(null,c__10932__auto___12383);
var G__12387 = (0);
seq__12327_12367 = G__12384;
chunk__12328_12368 = G__12385;
count__12329_12369 = G__12386;
i__12330_12370 = G__12387;
continue;
} else {
var vec__12336_12388 = cljs.core.first.call(null,seq__12327_12382__$1);
var name_12389 = cljs.core.nth.call(null,vec__12336_12388,(0),null);
var map__12339_12390 = cljs.core.nth.call(null,vec__12336_12388,(1),null);
var map__12339_12391__$1 = ((((!((map__12339_12390 == null)))?((((map__12339_12390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12339_12390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12339_12390):map__12339_12390);
var doc_12392 = cljs.core.get.call(null,map__12339_12391__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12393 = cljs.core.get.call(null,map__12339_12391__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12389);

cljs.core.println.call(null," ",arglists_12393);

if(cljs.core.truth_(doc_12392)){
cljs.core.println.call(null," ",doc_12392);
} else {
}

var G__12394 = cljs.core.next.call(null,seq__12327_12382__$1);
var G__12395 = null;
var G__12396 = (0);
var G__12397 = (0);
seq__12327_12367 = G__12394;
chunk__12328_12368 = G__12395;
count__12329_12369 = G__12396;
i__12330_12370 = G__12397;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6728__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6728__auto__)){
var fnspec = temp__6728__auto__;
cljs.core.print.call(null,"Spec");

var seq__12341 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12342 = null;
var count__12343 = (0);
var i__12344 = (0);
while(true){
if((i__12344 < count__12343)){
var role = cljs.core._nth.call(null,chunk__12342,i__12344);
var temp__6728__auto___12398__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___12398__$1)){
var spec_12399 = temp__6728__auto___12398__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12399));
} else {
}

var G__12400 = seq__12341;
var G__12401 = chunk__12342;
var G__12402 = count__12343;
var G__12403 = (i__12344 + (1));
seq__12341 = G__12400;
chunk__12342 = G__12401;
count__12343 = G__12402;
i__12344 = G__12403;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__12341);
if(temp__6728__auto____$1){
var seq__12341__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12341__$1)){
var c__10932__auto__ = cljs.core.chunk_first.call(null,seq__12341__$1);
var G__12404 = cljs.core.chunk_rest.call(null,seq__12341__$1);
var G__12405 = c__10932__auto__;
var G__12406 = cljs.core.count.call(null,c__10932__auto__);
var G__12407 = (0);
seq__12341 = G__12404;
chunk__12342 = G__12405;
count__12343 = G__12406;
i__12344 = G__12407;
continue;
} else {
var role = cljs.core.first.call(null,seq__12341__$1);
var temp__6728__auto___12408__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___12408__$2)){
var spec_12409 = temp__6728__auto___12408__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12409));
} else {
}

var G__12410 = cljs.core.next.call(null,seq__12341__$1);
var G__12411 = null;
var G__12412 = (0);
var G__12413 = (0);
seq__12341 = G__12410;
chunk__12342 = G__12411;
count__12343 = G__12412;
i__12344 = G__12413;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map