// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10643){
var map__10668 = p__10643;
var map__10668__$1 = ((((!((map__10668 == null)))?((((map__10668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10668):map__10668);
var m = map__10668__$1;
var n = cljs.core.get.call(null,map__10668__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10668__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10670_10692 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10671_10693 = null;
var count__10672_10694 = (0);
var i__10673_10695 = (0);
while(true){
if((i__10673_10695 < count__10672_10694)){
var f_10696 = cljs.core._nth.call(null,chunk__10671_10693,i__10673_10695);
cljs.core.println.call(null,"  ",f_10696);

var G__10697 = seq__10670_10692;
var G__10698 = chunk__10671_10693;
var G__10699 = count__10672_10694;
var G__10700 = (i__10673_10695 + (1));
seq__10670_10692 = G__10697;
chunk__10671_10693 = G__10698;
count__10672_10694 = G__10699;
i__10673_10695 = G__10700;
continue;
} else {
var temp__6728__auto___10701 = cljs.core.seq.call(null,seq__10670_10692);
if(temp__6728__auto___10701){
var seq__10670_10702__$1 = temp__6728__auto___10701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10670_10702__$1)){
var c__8146__auto___10703 = cljs.core.chunk_first.call(null,seq__10670_10702__$1);
var G__10704 = cljs.core.chunk_rest.call(null,seq__10670_10702__$1);
var G__10705 = c__8146__auto___10703;
var G__10706 = cljs.core.count.call(null,c__8146__auto___10703);
var G__10707 = (0);
seq__10670_10692 = G__10704;
chunk__10671_10693 = G__10705;
count__10672_10694 = G__10706;
i__10673_10695 = G__10707;
continue;
} else {
var f_10708 = cljs.core.first.call(null,seq__10670_10702__$1);
cljs.core.println.call(null,"  ",f_10708);

var G__10709 = cljs.core.next.call(null,seq__10670_10702__$1);
var G__10710 = null;
var G__10711 = (0);
var G__10712 = (0);
seq__10670_10692 = G__10709;
chunk__10671_10693 = G__10710;
count__10672_10694 = G__10711;
i__10673_10695 = G__10712;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10713 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7243__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7243__auto__)){
return or__7243__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10713);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10713)))?cljs.core.second.call(null,arglists_10713):arglists_10713));
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
var seq__10674_10714 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10675_10715 = null;
var count__10676_10716 = (0);
var i__10677_10717 = (0);
while(true){
if((i__10677_10717 < count__10676_10716)){
var vec__10678_10718 = cljs.core._nth.call(null,chunk__10675_10715,i__10677_10717);
var name_10719 = cljs.core.nth.call(null,vec__10678_10718,(0),null);
var map__10681_10720 = cljs.core.nth.call(null,vec__10678_10718,(1),null);
var map__10681_10721__$1 = ((((!((map__10681_10720 == null)))?((((map__10681_10720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10681_10720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10681_10720):map__10681_10720);
var doc_10722 = cljs.core.get.call(null,map__10681_10721__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10723 = cljs.core.get.call(null,map__10681_10721__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10719);

cljs.core.println.call(null," ",arglists_10723);

if(cljs.core.truth_(doc_10722)){
cljs.core.println.call(null," ",doc_10722);
} else {
}

var G__10724 = seq__10674_10714;
var G__10725 = chunk__10675_10715;
var G__10726 = count__10676_10716;
var G__10727 = (i__10677_10717 + (1));
seq__10674_10714 = G__10724;
chunk__10675_10715 = G__10725;
count__10676_10716 = G__10726;
i__10677_10717 = G__10727;
continue;
} else {
var temp__6728__auto___10728 = cljs.core.seq.call(null,seq__10674_10714);
if(temp__6728__auto___10728){
var seq__10674_10729__$1 = temp__6728__auto___10728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10674_10729__$1)){
var c__8146__auto___10730 = cljs.core.chunk_first.call(null,seq__10674_10729__$1);
var G__10731 = cljs.core.chunk_rest.call(null,seq__10674_10729__$1);
var G__10732 = c__8146__auto___10730;
var G__10733 = cljs.core.count.call(null,c__8146__auto___10730);
var G__10734 = (0);
seq__10674_10714 = G__10731;
chunk__10675_10715 = G__10732;
count__10676_10716 = G__10733;
i__10677_10717 = G__10734;
continue;
} else {
var vec__10683_10735 = cljs.core.first.call(null,seq__10674_10729__$1);
var name_10736 = cljs.core.nth.call(null,vec__10683_10735,(0),null);
var map__10686_10737 = cljs.core.nth.call(null,vec__10683_10735,(1),null);
var map__10686_10738__$1 = ((((!((map__10686_10737 == null)))?((((map__10686_10737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10686_10737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10686_10737):map__10686_10737);
var doc_10739 = cljs.core.get.call(null,map__10686_10738__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10740 = cljs.core.get.call(null,map__10686_10738__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10736);

cljs.core.println.call(null," ",arglists_10740);

if(cljs.core.truth_(doc_10739)){
cljs.core.println.call(null," ",doc_10739);
} else {
}

var G__10741 = cljs.core.next.call(null,seq__10674_10729__$1);
var G__10742 = null;
var G__10743 = (0);
var G__10744 = (0);
seq__10674_10714 = G__10741;
chunk__10675_10715 = G__10742;
count__10676_10716 = G__10743;
i__10677_10717 = G__10744;
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

var seq__10688 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10689 = null;
var count__10690 = (0);
var i__10691 = (0);
while(true){
if((i__10691 < count__10690)){
var role = cljs.core._nth.call(null,chunk__10689,i__10691);
var temp__6728__auto___10745__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___10745__$1)){
var spec_10746 = temp__6728__auto___10745__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10746));
} else {
}

var G__10747 = seq__10688;
var G__10748 = chunk__10689;
var G__10749 = count__10690;
var G__10750 = (i__10691 + (1));
seq__10688 = G__10747;
chunk__10689 = G__10748;
count__10690 = G__10749;
i__10691 = G__10750;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__10688);
if(temp__6728__auto____$1){
var seq__10688__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10688__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__10688__$1);
var G__10751 = cljs.core.chunk_rest.call(null,seq__10688__$1);
var G__10752 = c__8146__auto__;
var G__10753 = cljs.core.count.call(null,c__8146__auto__);
var G__10754 = (0);
seq__10688 = G__10751;
chunk__10689 = G__10752;
count__10690 = G__10753;
i__10691 = G__10754;
continue;
} else {
var role = cljs.core.first.call(null,seq__10688__$1);
var temp__6728__auto___10755__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___10755__$2)){
var spec_10756 = temp__6728__auto___10755__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10756));
} else {
}

var G__10757 = cljs.core.next.call(null,seq__10688__$1);
var G__10758 = null;
var G__10759 = (0);
var G__10760 = (0);
seq__10688 = G__10757;
chunk__10689 = G__10758;
count__10690 = G__10759;
i__10691 = G__10760;
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