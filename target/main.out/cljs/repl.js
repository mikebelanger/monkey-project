// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10627){
var map__10652 = p__10627;
var map__10652__$1 = ((((!((map__10652 == null)))?((((map__10652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10652):map__10652);
var m = map__10652__$1;
var n = cljs.core.get.call(null,map__10652__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10652__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10654_10676 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10655_10677 = null;
var count__10656_10678 = (0);
var i__10657_10679 = (0);
while(true){
if((i__10657_10679 < count__10656_10678)){
var f_10680 = cljs.core._nth.call(null,chunk__10655_10677,i__10657_10679);
cljs.core.println.call(null,"  ",f_10680);

var G__10681 = seq__10654_10676;
var G__10682 = chunk__10655_10677;
var G__10683 = count__10656_10678;
var G__10684 = (i__10657_10679 + (1));
seq__10654_10676 = G__10681;
chunk__10655_10677 = G__10682;
count__10656_10678 = G__10683;
i__10657_10679 = G__10684;
continue;
} else {
var temp__6728__auto___10685 = cljs.core.seq.call(null,seq__10654_10676);
if(temp__6728__auto___10685){
var seq__10654_10686__$1 = temp__6728__auto___10685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10654_10686__$1)){
var c__8146__auto___10687 = cljs.core.chunk_first.call(null,seq__10654_10686__$1);
var G__10688 = cljs.core.chunk_rest.call(null,seq__10654_10686__$1);
var G__10689 = c__8146__auto___10687;
var G__10690 = cljs.core.count.call(null,c__8146__auto___10687);
var G__10691 = (0);
seq__10654_10676 = G__10688;
chunk__10655_10677 = G__10689;
count__10656_10678 = G__10690;
i__10657_10679 = G__10691;
continue;
} else {
var f_10692 = cljs.core.first.call(null,seq__10654_10686__$1);
cljs.core.println.call(null,"  ",f_10692);

var G__10693 = cljs.core.next.call(null,seq__10654_10686__$1);
var G__10694 = null;
var G__10695 = (0);
var G__10696 = (0);
seq__10654_10676 = G__10693;
chunk__10655_10677 = G__10694;
count__10656_10678 = G__10695;
i__10657_10679 = G__10696;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10697 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7243__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7243__auto__)){
return or__7243__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10697);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10697)))?cljs.core.second.call(null,arglists_10697):arglists_10697));
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
var seq__10658_10698 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10659_10699 = null;
var count__10660_10700 = (0);
var i__10661_10701 = (0);
while(true){
if((i__10661_10701 < count__10660_10700)){
var vec__10662_10702 = cljs.core._nth.call(null,chunk__10659_10699,i__10661_10701);
var name_10703 = cljs.core.nth.call(null,vec__10662_10702,(0),null);
var map__10665_10704 = cljs.core.nth.call(null,vec__10662_10702,(1),null);
var map__10665_10705__$1 = ((((!((map__10665_10704 == null)))?((((map__10665_10704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10665_10704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10665_10704):map__10665_10704);
var doc_10706 = cljs.core.get.call(null,map__10665_10705__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10707 = cljs.core.get.call(null,map__10665_10705__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10703);

cljs.core.println.call(null," ",arglists_10707);

if(cljs.core.truth_(doc_10706)){
cljs.core.println.call(null," ",doc_10706);
} else {
}

var G__10708 = seq__10658_10698;
var G__10709 = chunk__10659_10699;
var G__10710 = count__10660_10700;
var G__10711 = (i__10661_10701 + (1));
seq__10658_10698 = G__10708;
chunk__10659_10699 = G__10709;
count__10660_10700 = G__10710;
i__10661_10701 = G__10711;
continue;
} else {
var temp__6728__auto___10712 = cljs.core.seq.call(null,seq__10658_10698);
if(temp__6728__auto___10712){
var seq__10658_10713__$1 = temp__6728__auto___10712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10658_10713__$1)){
var c__8146__auto___10714 = cljs.core.chunk_first.call(null,seq__10658_10713__$1);
var G__10715 = cljs.core.chunk_rest.call(null,seq__10658_10713__$1);
var G__10716 = c__8146__auto___10714;
var G__10717 = cljs.core.count.call(null,c__8146__auto___10714);
var G__10718 = (0);
seq__10658_10698 = G__10715;
chunk__10659_10699 = G__10716;
count__10660_10700 = G__10717;
i__10661_10701 = G__10718;
continue;
} else {
var vec__10667_10719 = cljs.core.first.call(null,seq__10658_10713__$1);
var name_10720 = cljs.core.nth.call(null,vec__10667_10719,(0),null);
var map__10670_10721 = cljs.core.nth.call(null,vec__10667_10719,(1),null);
var map__10670_10722__$1 = ((((!((map__10670_10721 == null)))?((((map__10670_10721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10670_10721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10670_10721):map__10670_10721);
var doc_10723 = cljs.core.get.call(null,map__10670_10722__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10724 = cljs.core.get.call(null,map__10670_10722__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10720);

cljs.core.println.call(null," ",arglists_10724);

if(cljs.core.truth_(doc_10723)){
cljs.core.println.call(null," ",doc_10723);
} else {
}

var G__10725 = cljs.core.next.call(null,seq__10658_10713__$1);
var G__10726 = null;
var G__10727 = (0);
var G__10728 = (0);
seq__10658_10698 = G__10725;
chunk__10659_10699 = G__10726;
count__10660_10700 = G__10727;
i__10661_10701 = G__10728;
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

var seq__10672 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10673 = null;
var count__10674 = (0);
var i__10675 = (0);
while(true){
if((i__10675 < count__10674)){
var role = cljs.core._nth.call(null,chunk__10673,i__10675);
var temp__6728__auto___10729__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___10729__$1)){
var spec_10730 = temp__6728__auto___10729__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10730));
} else {
}

var G__10731 = seq__10672;
var G__10732 = chunk__10673;
var G__10733 = count__10674;
var G__10734 = (i__10675 + (1));
seq__10672 = G__10731;
chunk__10673 = G__10732;
count__10674 = G__10733;
i__10675 = G__10734;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__10672);
if(temp__6728__auto____$1){
var seq__10672__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10672__$1)){
var c__8146__auto__ = cljs.core.chunk_first.call(null,seq__10672__$1);
var G__10735 = cljs.core.chunk_rest.call(null,seq__10672__$1);
var G__10736 = c__8146__auto__;
var G__10737 = cljs.core.count.call(null,c__8146__auto__);
var G__10738 = (0);
seq__10672 = G__10735;
chunk__10673 = G__10736;
count__10674 = G__10737;
i__10675 = G__10738;
continue;
} else {
var role = cljs.core.first.call(null,seq__10672__$1);
var temp__6728__auto___10739__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___10739__$2)){
var spec_10740 = temp__6728__auto___10739__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10740));
} else {
}

var G__10741 = cljs.core.next.call(null,seq__10672__$1);
var G__10742 = null;
var G__10743 = (0);
var G__10744 = (0);
seq__10672 = G__10741;
chunk__10673 = G__10742;
count__10674 = G__10743;
i__10675 = G__10744;
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