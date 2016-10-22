// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10610){
var map__10635 = p__10610;
var map__10635__$1 = ((((!((map__10635 == null)))?((((map__10635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10635):map__10635);
var m = map__10635__$1;
var n = cljs.core.get.call(null,map__10635__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10635__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10637_10659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10638_10660 = null;
var count__10639_10661 = (0);
var i__10640_10662 = (0);
while(true){
if((i__10640_10662 < count__10639_10661)){
var f_10663 = cljs.core._nth.call(null,chunk__10638_10660,i__10640_10662);
cljs.core.println.call(null,"  ",f_10663);

var G__10664 = seq__10637_10659;
var G__10665 = chunk__10638_10660;
var G__10666 = count__10639_10661;
var G__10667 = (i__10640_10662 + (1));
seq__10637_10659 = G__10664;
chunk__10638_10660 = G__10665;
count__10639_10661 = G__10666;
i__10640_10662 = G__10667;
continue;
} else {
var temp__6728__auto___10668 = cljs.core.seq.call(null,seq__10637_10659);
if(temp__6728__auto___10668){
var seq__10637_10669__$1 = temp__6728__auto___10668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10637_10669__$1)){
var c__8146__auto___10670 = cljs.core.chunk_first.call(null,seq__10637_10669__$1);
var G__10671 = cljs.core.chunk_rest.call(null,seq__10637_10669__$1);
var G__10672 = c__8146__auto___10670;
var G__10673 = cljs.core.count.call(null,c__8146__auto___10670);
var G__10674 = (0);
seq__10637_10659 = G__10671;
chunk__10638_10660 = G__10672;
count__10639_10661 = G__10673;
i__10640_10662 = G__10674;
continue;
} else {
var f_10675 = cljs.core.first.call(null,seq__10637_10669__$1);
cljs.core.println.call(null,"  ",f_10675);

var G__10676 = cljs.core.next.call(null,seq__10637_10669__$1);
var G__10677 = null;
var G__10678 = (0);
var G__10679 = (0);
seq__10637_10659 = G__10676;
chunk__10638_10660 = G__10677;
count__10639_10661 = G__10678;
i__10640_10662 = G__10679;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10680 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7243__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7243__auto__)){
return or__7243__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10680);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10680)))?cljs.core.second.call(null,arglists_10680):arglists_10680));
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
var seq__10641_10681 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10642_10682 = null;
var count__10643_10683 = (0);
var i__10644_10684 = (0);
while(true){
if((i__10644_10684 < count__10643_10683)){
var vec__10645_10685 = cljs.core._nth.call(null,chunk__10642_10682,i__10644_10684);
var name_10686 = cljs.core.nth.call(null,vec__10645_10685,(0),null);
var map__10648_10687 = cljs.core.nth.call(null,vec__10645_10685,(1),null);
var map__10648_10688__$1 = ((((!((map__10648_10687 == null)))?((((map__10648_10687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10648_10687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10648_10687):map__10648_10687);
var doc_10689 = cljs.core.get.call(null,map__10648_10688__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10690 = cljs.core.get.call(null,map__10648_10688__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10686);

cljs.core.println.call(null," ",arglists_10690);

if(cljs.core.truth_(doc_10689)){
cljs.core.println.call(null," ",doc_10689);
} else {
}

var G__10691 = seq__10641_10681;
var G__10692 = chunk__10642_10682;
var G__10693 = count__10643_10683;
var G__10694 = (i__10644_10684 + (1));
seq__10641_10681 = G__10691;
chunk__10642_10682 = G__10692;
count__10643_10683 = G__10693;
i__10644_10684 = G__10694;
continue;
} else {
var temp__6728__auto___10695 = cljs.core.seq.call(null,seq__10641_10681);
if(temp__6728__auto___10695){
var seq__10641_10696__$1 = temp__6728__auto___10695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10641_10696__$1)){
var c__8146__auto___10697 = cljs.core.chunk_first.call(null,seq__10641_10696__$1);
var G__10698 = cljs.core.chunk_rest.call(null,seq__10641_10696__$1);
var G__10699 = c__8146__auto___10697;
var G__10700 = cljs.core.count.call(null,c__8146__auto___10697);
var G__10701 = (0);
seq__10641_10681 = G__10698;
chunk__10642_10682 = G__10699;
count__10643_10683 = G__10700;
i__10644_10684 = G__10701;
continue;
} else {
var vec__10650_10702 = cljs.core.first.call(null,seq__10641_10696__$1);
var name_10703 = cljs.core.nth.call(null,vec__10650_10702,(0),null);
var map__10653_10704 = cljs.core.nth.call(null,vec__10650_10702,(1),null);
var map__10653_10705__$1 = ((((!((map__10653_10704 == null)))?((((map__10653_10704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10653_10704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10653_10704):map__10653_10704);
var doc_10706 = cljs.core.get.call(null,map__10653_10705__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10707 = cljs.core.get.call(null,map__10653_10705__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10703);

cljs.core.println.call(null," ",arglists_10707);

if(cljs.core.truth_(doc_10706)){
cljs.core.println.call(null," ",doc_10706);
} else {
}

var G__10708 = cljs.core.next.call(null,seq__10641_10696__$1);
var G__10709 = null;
var G__10710 = (0);
var G__10711 = (0);
seq__10641_10681 = G__10708;
chunk__10642_10682 = G__10709;
count__10643_10683 = G__10710;
i__10644_10684 = G__10711;
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

var seq__10655 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10656 = null;
var count__10657 = (0);
var i__10658 = (0);
while(true){
if((i__10658 < count__10657)){
var role = cljs.core._nth.call(null,chunk__10656,i__10658);
var temp__6728__auto___10712__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___10712__$1)){
var spec_10713 = temp__6728__auto___10712__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10713));
} else {
}

var G__10714 = seq__10655;
var G__10715 = chunk__10656;
var G__10716 = count__10657;
var G__10717 = (i__10658 + (1));
seq__10655 = G__10714;
chunk__10656 = G__10715;
count__10657 = G__10716;
i__10658 = G__10717;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__10655);
if(temp__6728__auto____$1){
var seq__10655__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10655__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__10655__$1);
var G__10718 = cljs.core.chunk_rest.call(null,seq__10655__$1);
var G__10719 = c__8146__auto__;
var G__10720 = cljs.core.count.call(null,c__8146__auto__);
var G__10721 = (0);
seq__10655 = G__10718;
chunk__10656 = G__10719;
count__10657 = G__10720;
i__10658 = G__10721;
continue;
} else {
var role = cljs.core.first.call(null,seq__10655__$1);
var temp__6728__auto___10722__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___10722__$2)){
var spec_10723 = temp__6728__auto___10722__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10723));
} else {
}

var G__10724 = cljs.core.next.call(null,seq__10655__$1);
var G__10725 = null;
var G__10726 = (0);
var G__10727 = (0);
seq__10655 = G__10724;
chunk__10656 = G__10725;
count__10657 = G__10726;
i__10658 = G__10727;
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