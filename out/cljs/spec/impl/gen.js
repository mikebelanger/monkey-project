// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10681__auto__,writer__10682__auto__,opt__10683__auto__){
return cljs.core._write.call(null,writer__10682__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13282 = arguments.length;
var i__11213__auto___13283 = (0);
while(true){
if((i__11213__auto___13283 < len__11212__auto___13282)){
args__11219__auto__.push((arguments[i__11213__auto___13283]));

var G__13284 = (i__11213__auto___13283 + (1));
i__11213__auto___13283 = G__13284;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13281){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13281));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13286 = arguments.length;
var i__11213__auto___13287 = (0);
while(true){
if((i__11213__auto___13287 < len__11212__auto___13286)){
args__11219__auto__.push((arguments[i__11213__auto___13287]));

var G__13288 = (i__11213__auto___13287 + (1));
i__11213__auto___13287 = G__13288;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13285){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13285));
});

var g_QMARK__13289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_13290 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13289){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__13289))
,null));
var mkg_13291 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13289,g_13290){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__13289,g_13290))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13289,g_13290,mkg_13291){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13289).call(null,x);
});})(g_QMARK__13289,g_13290,mkg_13291))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13289,g_13290,mkg_13291){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13291).call(null,gfn);
});})(g_QMARK__13289,g_13290,mkg_13291))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13289,g_13290,mkg_13291){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13290).call(null,generator);
});})(g_QMARK__13289,g_13290,mkg_13291))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11296__auto___13310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11296__auto___13310){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13311 = arguments.length;
var i__11213__auto___13312 = (0);
while(true){
if((i__11213__auto___13312 < len__11212__auto___13311)){
args__11219__auto__.push((arguments[i__11213__auto___13312]));

var G__13313 = (i__11213__auto___13312 + (1));
i__11213__auto___13312 = G__13313;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13310))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13310){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13310),args);
});})(g__11296__auto___13310))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11296__auto___13310){
return (function (seq13292){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13292));
});})(g__11296__auto___13310))
;


var g__11296__auto___13314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11296__auto___13314){
return (function cljs$spec$impl$gen$list(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13315 = arguments.length;
var i__11213__auto___13316 = (0);
while(true){
if((i__11213__auto___13316 < len__11212__auto___13315)){
args__11219__auto__.push((arguments[i__11213__auto___13316]));

var G__13317 = (i__11213__auto___13316 + (1));
i__11213__auto___13316 = G__13317;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13314))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13314){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13314),args);
});})(g__11296__auto___13314))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11296__auto___13314){
return (function (seq13293){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13293));
});})(g__11296__auto___13314))
;


var g__11296__auto___13318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11296__auto___13318){
return (function cljs$spec$impl$gen$map(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13319 = arguments.length;
var i__11213__auto___13320 = (0);
while(true){
if((i__11213__auto___13320 < len__11212__auto___13319)){
args__11219__auto__.push((arguments[i__11213__auto___13320]));

var G__13321 = (i__11213__auto___13320 + (1));
i__11213__auto___13320 = G__13321;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13318))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13318){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13318),args);
});})(g__11296__auto___13318))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11296__auto___13318){
return (function (seq13294){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13294));
});})(g__11296__auto___13318))
;


var g__11296__auto___13322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11296__auto___13322){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13323 = arguments.length;
var i__11213__auto___13324 = (0);
while(true){
if((i__11213__auto___13324 < len__11212__auto___13323)){
args__11219__auto__.push((arguments[i__11213__auto___13324]));

var G__13325 = (i__11213__auto___13324 + (1));
i__11213__auto___13324 = G__13325;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13322))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13322){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13322),args);
});})(g__11296__auto___13322))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11296__auto___13322){
return (function (seq13295){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13295));
});})(g__11296__auto___13322))
;


var g__11296__auto___13326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11296__auto___13326){
return (function cljs$spec$impl$gen$set(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13327 = arguments.length;
var i__11213__auto___13328 = (0);
while(true){
if((i__11213__auto___13328 < len__11212__auto___13327)){
args__11219__auto__.push((arguments[i__11213__auto___13328]));

var G__13329 = (i__11213__auto___13328 + (1));
i__11213__auto___13328 = G__13329;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13326))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13326){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13326),args);
});})(g__11296__auto___13326))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11296__auto___13326){
return (function (seq13296){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13296));
});})(g__11296__auto___13326))
;


var g__11296__auto___13330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11296__auto___13330){
return (function cljs$spec$impl$gen$vector(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13331 = arguments.length;
var i__11213__auto___13332 = (0);
while(true){
if((i__11213__auto___13332 < len__11212__auto___13331)){
args__11219__auto__.push((arguments[i__11213__auto___13332]));

var G__13333 = (i__11213__auto___13332 + (1));
i__11213__auto___13332 = G__13333;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13330))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13330){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13330),args);
});})(g__11296__auto___13330))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11296__auto___13330){
return (function (seq13297){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13297));
});})(g__11296__auto___13330))
;


var g__11296__auto___13334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11296__auto___13334){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13335 = arguments.length;
var i__11213__auto___13336 = (0);
while(true){
if((i__11213__auto___13336 < len__11212__auto___13335)){
args__11219__auto__.push((arguments[i__11213__auto___13336]));

var G__13337 = (i__11213__auto___13336 + (1));
i__11213__auto___13336 = G__13337;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13334))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13334){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13334),args);
});})(g__11296__auto___13334))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11296__auto___13334){
return (function (seq13298){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13298));
});})(g__11296__auto___13334))
;


var g__11296__auto___13338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11296__auto___13338){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13339 = arguments.length;
var i__11213__auto___13340 = (0);
while(true){
if((i__11213__auto___13340 < len__11212__auto___13339)){
args__11219__auto__.push((arguments[i__11213__auto___13340]));

var G__13341 = (i__11213__auto___13340 + (1));
i__11213__auto___13340 = G__13341;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13338))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13338){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13338),args);
});})(g__11296__auto___13338))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11296__auto___13338){
return (function (seq13299){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13299));
});})(g__11296__auto___13338))
;


var g__11296__auto___13342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11296__auto___13342){
return (function cljs$spec$impl$gen$elements(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13343 = arguments.length;
var i__11213__auto___13344 = (0);
while(true){
if((i__11213__auto___13344 < len__11212__auto___13343)){
args__11219__auto__.push((arguments[i__11213__auto___13344]));

var G__13345 = (i__11213__auto___13344 + (1));
i__11213__auto___13344 = G__13345;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13342))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13342){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13342),args);
});})(g__11296__auto___13342))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11296__auto___13342){
return (function (seq13300){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13300));
});})(g__11296__auto___13342))
;


var g__11296__auto___13346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11296__auto___13346){
return (function cljs$spec$impl$gen$bind(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13347 = arguments.length;
var i__11213__auto___13348 = (0);
while(true){
if((i__11213__auto___13348 < len__11212__auto___13347)){
args__11219__auto__.push((arguments[i__11213__auto___13348]));

var G__13349 = (i__11213__auto___13348 + (1));
i__11213__auto___13348 = G__13349;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13346))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13346){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13346),args);
});})(g__11296__auto___13346))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11296__auto___13346){
return (function (seq13301){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13301));
});})(g__11296__auto___13346))
;


var g__11296__auto___13350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11296__auto___13350){
return (function cljs$spec$impl$gen$choose(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13351 = arguments.length;
var i__11213__auto___13352 = (0);
while(true){
if((i__11213__auto___13352 < len__11212__auto___13351)){
args__11219__auto__.push((arguments[i__11213__auto___13352]));

var G__13353 = (i__11213__auto___13352 + (1));
i__11213__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13350))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13350){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13350),args);
});})(g__11296__auto___13350))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11296__auto___13350){
return (function (seq13302){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13302));
});})(g__11296__auto___13350))
;


var g__11296__auto___13354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11296__auto___13354){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13355 = arguments.length;
var i__11213__auto___13356 = (0);
while(true){
if((i__11213__auto___13356 < len__11212__auto___13355)){
args__11219__auto__.push((arguments[i__11213__auto___13356]));

var G__13357 = (i__11213__auto___13356 + (1));
i__11213__auto___13356 = G__13357;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13354))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13354){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13354),args);
});})(g__11296__auto___13354))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11296__auto___13354){
return (function (seq13303){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13303));
});})(g__11296__auto___13354))
;


var g__11296__auto___13358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11296__auto___13358){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13359 = arguments.length;
var i__11213__auto___13360 = (0);
while(true){
if((i__11213__auto___13360 < len__11212__auto___13359)){
args__11219__auto__.push((arguments[i__11213__auto___13360]));

var G__13361 = (i__11213__auto___13360 + (1));
i__11213__auto___13360 = G__13361;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13358))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13358){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13358),args);
});})(g__11296__auto___13358))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11296__auto___13358){
return (function (seq13304){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13304));
});})(g__11296__auto___13358))
;


var g__11296__auto___13362 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11296__auto___13362){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13363 = arguments.length;
var i__11213__auto___13364 = (0);
while(true){
if((i__11213__auto___13364 < len__11212__auto___13363)){
args__11219__auto__.push((arguments[i__11213__auto___13364]));

var G__13365 = (i__11213__auto___13364 + (1));
i__11213__auto___13364 = G__13365;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13362))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13362){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13362),args);
});})(g__11296__auto___13362))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11296__auto___13362){
return (function (seq13305){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13305));
});})(g__11296__auto___13362))
;


var g__11296__auto___13366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11296__auto___13366){
return (function cljs$spec$impl$gen$sample(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13367 = arguments.length;
var i__11213__auto___13368 = (0);
while(true){
if((i__11213__auto___13368 < len__11212__auto___13367)){
args__11219__auto__.push((arguments[i__11213__auto___13368]));

var G__13369 = (i__11213__auto___13368 + (1));
i__11213__auto___13368 = G__13369;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13366))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13366){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13366),args);
});})(g__11296__auto___13366))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11296__auto___13366){
return (function (seq13306){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13306));
});})(g__11296__auto___13366))
;


var g__11296__auto___13370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11296__auto___13370){
return (function cljs$spec$impl$gen$return(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13371 = arguments.length;
var i__11213__auto___13372 = (0);
while(true){
if((i__11213__auto___13372 < len__11212__auto___13371)){
args__11219__auto__.push((arguments[i__11213__auto___13372]));

var G__13373 = (i__11213__auto___13372 + (1));
i__11213__auto___13372 = G__13373;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13370))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13370){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13370),args);
});})(g__11296__auto___13370))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11296__auto___13370){
return (function (seq13307){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13307));
});})(g__11296__auto___13370))
;


var g__11296__auto___13374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11296__auto___13374){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13375 = arguments.length;
var i__11213__auto___13376 = (0);
while(true){
if((i__11213__auto___13376 < len__11212__auto___13375)){
args__11219__auto__.push((arguments[i__11213__auto___13376]));

var G__13377 = (i__11213__auto___13376 + (1));
i__11213__auto___13376 = G__13377;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13374))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13374){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13374),args);
});})(g__11296__auto___13374))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11296__auto___13374){
return (function (seq13308){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13308));
});})(g__11296__auto___13374))
;


var g__11296__auto___13378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11296__auto___13378){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13379 = arguments.length;
var i__11213__auto___13380 = (0);
while(true){
if((i__11213__auto___13380 < len__11212__auto___13379)){
args__11219__auto__.push((arguments[i__11213__auto___13380]));

var G__13381 = (i__11213__auto___13380 + (1));
i__11213__auto___13380 = G__13381;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11296__auto___13378))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11296__auto___13378){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11296__auto___13378),args);
});})(g__11296__auto___13378))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11296__auto___13378){
return (function (seq13309){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13309));
});})(g__11296__auto___13378))
;

var g__11309__auto___13403 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11309__auto___13403){
return (function cljs$spec$impl$gen$any(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13404 = arguments.length;
var i__11213__auto___13405 = (0);
while(true){
if((i__11213__auto___13405 < len__11212__auto___13404)){
args__11219__auto__.push((arguments[i__11213__auto___13405]));

var G__13406 = (i__11213__auto___13405 + (1));
i__11213__auto___13405 = G__13406;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13403))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13403){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13403);
});})(g__11309__auto___13403))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11309__auto___13403){
return (function (seq13382){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13382));
});})(g__11309__auto___13403))
;


var g__11309__auto___13407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11309__auto___13407){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13408 = arguments.length;
var i__11213__auto___13409 = (0);
while(true){
if((i__11213__auto___13409 < len__11212__auto___13408)){
args__11219__auto__.push((arguments[i__11213__auto___13409]));

var G__13410 = (i__11213__auto___13409 + (1));
i__11213__auto___13409 = G__13410;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13407))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13407){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13407);
});})(g__11309__auto___13407))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11309__auto___13407){
return (function (seq13383){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13383));
});})(g__11309__auto___13407))
;


var g__11309__auto___13411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11309__auto___13411){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13412 = arguments.length;
var i__11213__auto___13413 = (0);
while(true){
if((i__11213__auto___13413 < len__11212__auto___13412)){
args__11219__auto__.push((arguments[i__11213__auto___13413]));

var G__13414 = (i__11213__auto___13413 + (1));
i__11213__auto___13413 = G__13414;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13411))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13411){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13411);
});})(g__11309__auto___13411))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11309__auto___13411){
return (function (seq13384){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13384));
});})(g__11309__auto___13411))
;


var g__11309__auto___13415 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11309__auto___13415){
return (function cljs$spec$impl$gen$char(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13416 = arguments.length;
var i__11213__auto___13417 = (0);
while(true){
if((i__11213__auto___13417 < len__11212__auto___13416)){
args__11219__auto__.push((arguments[i__11213__auto___13417]));

var G__13418 = (i__11213__auto___13417 + (1));
i__11213__auto___13417 = G__13418;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13415))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13415){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13415);
});})(g__11309__auto___13415))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11309__auto___13415){
return (function (seq13385){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13385));
});})(g__11309__auto___13415))
;


var g__11309__auto___13419 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11309__auto___13419){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13420 = arguments.length;
var i__11213__auto___13421 = (0);
while(true){
if((i__11213__auto___13421 < len__11212__auto___13420)){
args__11219__auto__.push((arguments[i__11213__auto___13421]));

var G__13422 = (i__11213__auto___13421 + (1));
i__11213__auto___13421 = G__13422;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13419))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13419){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13419);
});})(g__11309__auto___13419))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11309__auto___13419){
return (function (seq13386){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13386));
});})(g__11309__auto___13419))
;


var g__11309__auto___13423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11309__auto___13423){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13424 = arguments.length;
var i__11213__auto___13425 = (0);
while(true){
if((i__11213__auto___13425 < len__11212__auto___13424)){
args__11219__auto__.push((arguments[i__11213__auto___13425]));

var G__13426 = (i__11213__auto___13425 + (1));
i__11213__auto___13425 = G__13426;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13423))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13423){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13423);
});})(g__11309__auto___13423))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11309__auto___13423){
return (function (seq13387){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13387));
});})(g__11309__auto___13423))
;


var g__11309__auto___13427 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11309__auto___13427){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13428 = arguments.length;
var i__11213__auto___13429 = (0);
while(true){
if((i__11213__auto___13429 < len__11212__auto___13428)){
args__11219__auto__.push((arguments[i__11213__auto___13429]));

var G__13430 = (i__11213__auto___13429 + (1));
i__11213__auto___13429 = G__13430;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13427))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13427){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13427);
});})(g__11309__auto___13427))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11309__auto___13427){
return (function (seq13388){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13388));
});})(g__11309__auto___13427))
;


var g__11309__auto___13431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11309__auto___13431){
return (function cljs$spec$impl$gen$double(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13432 = arguments.length;
var i__11213__auto___13433 = (0);
while(true){
if((i__11213__auto___13433 < len__11212__auto___13432)){
args__11219__auto__.push((arguments[i__11213__auto___13433]));

var G__13434 = (i__11213__auto___13433 + (1));
i__11213__auto___13433 = G__13434;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13431))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13431){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13431);
});})(g__11309__auto___13431))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11309__auto___13431){
return (function (seq13389){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13389));
});})(g__11309__auto___13431))
;


var g__11309__auto___13435 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11309__auto___13435){
return (function cljs$spec$impl$gen$int(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13436 = arguments.length;
var i__11213__auto___13437 = (0);
while(true){
if((i__11213__auto___13437 < len__11212__auto___13436)){
args__11219__auto__.push((arguments[i__11213__auto___13437]));

var G__13438 = (i__11213__auto___13437 + (1));
i__11213__auto___13437 = G__13438;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13435))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13435){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13435);
});})(g__11309__auto___13435))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11309__auto___13435){
return (function (seq13390){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13390));
});})(g__11309__auto___13435))
;


var g__11309__auto___13439 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11309__auto___13439){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13440 = arguments.length;
var i__11213__auto___13441 = (0);
while(true){
if((i__11213__auto___13441 < len__11212__auto___13440)){
args__11219__auto__.push((arguments[i__11213__auto___13441]));

var G__13442 = (i__11213__auto___13441 + (1));
i__11213__auto___13441 = G__13442;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13439))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13439){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13439);
});})(g__11309__auto___13439))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11309__auto___13439){
return (function (seq13391){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13391));
});})(g__11309__auto___13439))
;


var g__11309__auto___13443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11309__auto___13443){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13444 = arguments.length;
var i__11213__auto___13445 = (0);
while(true){
if((i__11213__auto___13445 < len__11212__auto___13444)){
args__11219__auto__.push((arguments[i__11213__auto___13445]));

var G__13446 = (i__11213__auto___13445 + (1));
i__11213__auto___13445 = G__13446;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13443))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13443){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13443);
});})(g__11309__auto___13443))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11309__auto___13443){
return (function (seq13392){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13392));
});})(g__11309__auto___13443))
;


var g__11309__auto___13447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11309__auto___13447){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13448 = arguments.length;
var i__11213__auto___13449 = (0);
while(true){
if((i__11213__auto___13449 < len__11212__auto___13448)){
args__11219__auto__.push((arguments[i__11213__auto___13449]));

var G__13450 = (i__11213__auto___13449 + (1));
i__11213__auto___13449 = G__13450;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13447))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13447){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13447);
});})(g__11309__auto___13447))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11309__auto___13447){
return (function (seq13393){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13393));
});})(g__11309__auto___13447))
;


var g__11309__auto___13451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11309__auto___13451){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13452 = arguments.length;
var i__11213__auto___13453 = (0);
while(true){
if((i__11213__auto___13453 < len__11212__auto___13452)){
args__11219__auto__.push((arguments[i__11213__auto___13453]));

var G__13454 = (i__11213__auto___13453 + (1));
i__11213__auto___13453 = G__13454;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13451))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13451){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13451);
});})(g__11309__auto___13451))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11309__auto___13451){
return (function (seq13394){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13394));
});})(g__11309__auto___13451))
;


var g__11309__auto___13455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11309__auto___13455){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13456 = arguments.length;
var i__11213__auto___13457 = (0);
while(true){
if((i__11213__auto___13457 < len__11212__auto___13456)){
args__11219__auto__.push((arguments[i__11213__auto___13457]));

var G__13458 = (i__11213__auto___13457 + (1));
i__11213__auto___13457 = G__13458;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13455))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13455){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13455);
});})(g__11309__auto___13455))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11309__auto___13455){
return (function (seq13395){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13395));
});})(g__11309__auto___13455))
;


var g__11309__auto___13459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11309__auto___13459){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13460 = arguments.length;
var i__11213__auto___13461 = (0);
while(true){
if((i__11213__auto___13461 < len__11212__auto___13460)){
args__11219__auto__.push((arguments[i__11213__auto___13461]));

var G__13462 = (i__11213__auto___13461 + (1));
i__11213__auto___13461 = G__13462;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13459))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13459){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13459);
});})(g__11309__auto___13459))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11309__auto___13459){
return (function (seq13396){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13396));
});})(g__11309__auto___13459))
;


var g__11309__auto___13463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11309__auto___13463){
return (function cljs$spec$impl$gen$string(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13464 = arguments.length;
var i__11213__auto___13465 = (0);
while(true){
if((i__11213__auto___13465 < len__11212__auto___13464)){
args__11219__auto__.push((arguments[i__11213__auto___13465]));

var G__13466 = (i__11213__auto___13465 + (1));
i__11213__auto___13465 = G__13466;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13463))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13463){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13463);
});})(g__11309__auto___13463))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11309__auto___13463){
return (function (seq13397){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13397));
});})(g__11309__auto___13463))
;


var g__11309__auto___13467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11309__auto___13467){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13468 = arguments.length;
var i__11213__auto___13469 = (0);
while(true){
if((i__11213__auto___13469 < len__11212__auto___13468)){
args__11219__auto__.push((arguments[i__11213__auto___13469]));

var G__13470 = (i__11213__auto___13469 + (1));
i__11213__auto___13469 = G__13470;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13467))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13467){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13467);
});})(g__11309__auto___13467))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11309__auto___13467){
return (function (seq13398){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13398));
});})(g__11309__auto___13467))
;


var g__11309__auto___13471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11309__auto___13471){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13472 = arguments.length;
var i__11213__auto___13473 = (0);
while(true){
if((i__11213__auto___13473 < len__11212__auto___13472)){
args__11219__auto__.push((arguments[i__11213__auto___13473]));

var G__13474 = (i__11213__auto___13473 + (1));
i__11213__auto___13473 = G__13474;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13471))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13471){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13471);
});})(g__11309__auto___13471))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11309__auto___13471){
return (function (seq13399){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13399));
});})(g__11309__auto___13471))
;


var g__11309__auto___13475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11309__auto___13475){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13476 = arguments.length;
var i__11213__auto___13477 = (0);
while(true){
if((i__11213__auto___13477 < len__11212__auto___13476)){
args__11219__auto__.push((arguments[i__11213__auto___13477]));

var G__13478 = (i__11213__auto___13477 + (1));
i__11213__auto___13477 = G__13478;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13475))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13475){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13475);
});})(g__11309__auto___13475))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11309__auto___13475){
return (function (seq13400){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13400));
});})(g__11309__auto___13475))
;


var g__11309__auto___13479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11309__auto___13479){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13480 = arguments.length;
var i__11213__auto___13481 = (0);
while(true){
if((i__11213__auto___13481 < len__11212__auto___13480)){
args__11219__auto__.push((arguments[i__11213__auto___13481]));

var G__13482 = (i__11213__auto___13481 + (1));
i__11213__auto___13481 = G__13482;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13479))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13479){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13479);
});})(g__11309__auto___13479))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11309__auto___13479){
return (function (seq13401){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13401));
});})(g__11309__auto___13479))
;


var g__11309__auto___13483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11309__auto___13483){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13484 = arguments.length;
var i__11213__auto___13485 = (0);
while(true){
if((i__11213__auto___13485 < len__11212__auto___13484)){
args__11219__auto__.push((arguments[i__11213__auto___13485]));

var G__13486 = (i__11213__auto___13485 + (1));
i__11213__auto___13485 = G__13486;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});})(g__11309__auto___13483))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11309__auto___13483){
return (function (args){
return cljs.core.deref.call(null,g__11309__auto___13483);
});})(g__11309__auto___13483))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11309__auto___13483){
return (function (seq13402){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13402));
});})(g__11309__auto___13483))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__11219__auto__ = [];
var len__11212__auto___13489 = arguments.length;
var i__11213__auto___13490 = (0);
while(true){
if((i__11213__auto___13490 < len__11212__auto___13489)){
args__11219__auto__.push((arguments[i__11213__auto___13490]));

var G__13491 = (i__11213__auto___13490 + (1));
i__11213__auto___13490 = G__13491;
continue;
} else {
}
break;
}

var argseq__11220__auto__ = ((((0) < args__11219__auto__.length))?(new cljs.core.IndexedSeq(args__11219__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__11220__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13487_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13487_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13488){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13488));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13492_SHARP_){
return (new Date(p1__13492_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map