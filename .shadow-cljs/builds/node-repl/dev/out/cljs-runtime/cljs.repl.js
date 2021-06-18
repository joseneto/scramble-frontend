goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29664){
var map__29665 = p__29664;
var map__29665__$1 = cljs.core.__destructure_map(map__29665);
var m = map__29665__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29665__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29666_29936 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29667_29937 = null;
var count__29668_29938 = (0);
var i__29669_29939 = (0);
while(true){
if((i__29669_29939 < count__29668_29938)){
var f_29940 = chunk__29667_29937.cljs$core$IIndexed$_nth$arity$2(null,i__29669_29939);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29940], 0));


var G__29941 = seq__29666_29936;
var G__29942 = chunk__29667_29937;
var G__29943 = count__29668_29938;
var G__29944 = (i__29669_29939 + (1));
seq__29666_29936 = G__29941;
chunk__29667_29937 = G__29942;
count__29668_29938 = G__29943;
i__29669_29939 = G__29944;
continue;
} else {
var temp__5753__auto___29945 = cljs.core.seq(seq__29666_29936);
if(temp__5753__auto___29945){
var seq__29666_29946__$1 = temp__5753__auto___29945;
if(cljs.core.chunked_seq_QMARK_(seq__29666_29946__$1)){
var c__4649__auto___29947 = cljs.core.chunk_first(seq__29666_29946__$1);
var G__29948 = cljs.core.chunk_rest(seq__29666_29946__$1);
var G__29949 = c__4649__auto___29947;
var G__29950 = cljs.core.count(c__4649__auto___29947);
var G__29951 = (0);
seq__29666_29936 = G__29948;
chunk__29667_29937 = G__29949;
count__29668_29938 = G__29950;
i__29669_29939 = G__29951;
continue;
} else {
var f_29952 = cljs.core.first(seq__29666_29946__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29952], 0));


var G__29954 = cljs.core.next(seq__29666_29946__$1);
var G__29955 = null;
var G__29956 = (0);
var G__29957 = (0);
seq__29666_29936 = G__29954;
chunk__29667_29937 = G__29955;
count__29668_29938 = G__29956;
i__29669_29939 = G__29957;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29958 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29958], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29958)))?cljs.core.second(arglists_29958):arglists_29958)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29671_29968 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29672_29969 = null;
var count__29673_29970 = (0);
var i__29674_29971 = (0);
while(true){
if((i__29674_29971 < count__29673_29970)){
var vec__29684_29972 = chunk__29672_29969.cljs$core$IIndexed$_nth$arity$2(null,i__29674_29971);
var name_29973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29684_29972,(0),null);
var map__29687_29974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29684_29972,(1),null);
var map__29687_29975__$1 = cljs.core.__destructure_map(map__29687_29974);
var doc_29976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29687_29975__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29687_29975__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29973], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29977], 0));

if(cljs.core.truth_(doc_29976)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29976], 0));
} else {
}


var G__29983 = seq__29671_29968;
var G__29984 = chunk__29672_29969;
var G__29985 = count__29673_29970;
var G__29986 = (i__29674_29971 + (1));
seq__29671_29968 = G__29983;
chunk__29672_29969 = G__29984;
count__29673_29970 = G__29985;
i__29674_29971 = G__29986;
continue;
} else {
var temp__5753__auto___29987 = cljs.core.seq(seq__29671_29968);
if(temp__5753__auto___29987){
var seq__29671_29988__$1 = temp__5753__auto___29987;
if(cljs.core.chunked_seq_QMARK_(seq__29671_29988__$1)){
var c__4649__auto___29990 = cljs.core.chunk_first(seq__29671_29988__$1);
var G__29991 = cljs.core.chunk_rest(seq__29671_29988__$1);
var G__29992 = c__4649__auto___29990;
var G__29993 = cljs.core.count(c__4649__auto___29990);
var G__29994 = (0);
seq__29671_29968 = G__29991;
chunk__29672_29969 = G__29992;
count__29673_29970 = G__29993;
i__29674_29971 = G__29994;
continue;
} else {
var vec__29688_29995 = cljs.core.first(seq__29671_29988__$1);
var name_29996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688_29995,(0),null);
var map__29691_29997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688_29995,(1),null);
var map__29691_29998__$1 = cljs.core.__destructure_map(map__29691_29997);
var doc_29999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29691_29998__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29691_29998__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29996], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30000], 0));

if(cljs.core.truth_(doc_29999)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29999], 0));
} else {
}


var G__30006 = cljs.core.next(seq__29671_29988__$1);
var G__30007 = null;
var G__30008 = (0);
var G__30009 = (0);
seq__29671_29968 = G__30006;
chunk__29672_29969 = G__30007;
count__29673_29970 = G__30008;
i__29674_29971 = G__30009;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__29693 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29694 = null;
var count__29695 = (0);
var i__29696 = (0);
while(true){
if((i__29696 < count__29695)){
var role = chunk__29694.cljs$core$IIndexed$_nth$arity$2(null,i__29696);
var temp__5753__auto___30011__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30011__$1)){
var spec_30012 = temp__5753__auto___30011__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30012)], 0));
} else {
}


var G__30013 = seq__29693;
var G__30014 = chunk__29694;
var G__30015 = count__29695;
var G__30016 = (i__29696 + (1));
seq__29693 = G__30013;
chunk__29694 = G__30014;
count__29695 = G__30015;
i__29696 = G__30016;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__29693);
if(temp__5753__auto____$1){
var seq__29693__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29693__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29693__$1);
var G__30017 = cljs.core.chunk_rest(seq__29693__$1);
var G__30018 = c__4649__auto__;
var G__30019 = cljs.core.count(c__4649__auto__);
var G__30020 = (0);
seq__29693 = G__30017;
chunk__29694 = G__30018;
count__29695 = G__30019;
i__29696 = G__30020;
continue;
} else {
var role = cljs.core.first(seq__29693__$1);
var temp__5753__auto___30021__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30021__$2)){
var spec_30022 = temp__5753__auto___30021__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30022)], 0));
} else {
}


var G__30023 = cljs.core.next(seq__29693__$1);
var G__30024 = null;
var G__30025 = (0);
var G__30026 = (0);
seq__29693 = G__30023;
chunk__29694 = G__30024;
count__29695 = G__30025;
i__29696 = G__30026;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__30028 = cljs.core.ex_cause(t);
via = G__30027;
t = G__30028;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29734 = datafied_throwable;
var map__29734__$1 = cljs.core.__destructure_map(map__29734);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29734__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29734__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29734__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29735 = cljs.core.last(via);
var map__29735__$1 = cljs.core.__destructure_map(map__29735);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29735__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29735__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29736 = data;
var map__29736__$1 = cljs.core.__destructure_map(map__29736);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29736__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29736__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29736__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29737 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29737__$1 = cljs.core.__destructure_map(map__29737);
var top_data = map__29737__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29737__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29738 = phase;
var G__29738__$1 = (((G__29738 instanceof cljs.core.Keyword))?G__29738.fqn:null);
switch (G__29738__$1) {
case "read-source":
var map__29739 = data;
var map__29739__$1 = cljs.core.__destructure_map(map__29739);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29739__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29739__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29740 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29740__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29740,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29740);
var G__29740__$2 = (cljs.core.truth_((function (){var fexpr__29742 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29742.cljs$core$IFn$_invoke$arity$1 ? fexpr__29742.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29742.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29740__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29740__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29740__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29740__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29745 = top_data;
var G__29745__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29745,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29745);
var G__29745__$2 = (cljs.core.truth_((function (){var fexpr__29746 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29746.cljs$core$IFn$_invoke$arity$1 ? fexpr__29746.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29746.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29745__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29745__$1);
var G__29745__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29745__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29745__$2);
var G__29745__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29745__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29745__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29745__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29745__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29748 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(3),null);
var G__29753 = top_data;
var G__29753__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29753,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29753);
var G__29753__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29753__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29753__$1);
var G__29753__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29753__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29753__$2);
var G__29753__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29753__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29753__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29753__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29753__$4;
}

break;
case "execution":
var vec__29766 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29766,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29766,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29766,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29766,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29730_SHARP_){
var or__4223__auto__ = (p1__29730_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__29779 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29779.cljs$core$IFn$_invoke$arity$1 ? fexpr__29779.cljs$core$IFn$_invoke$arity$1(p1__29730_SHARP_) : fexpr__29779.call(null,p1__29730_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__29780 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29780__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29780,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29780);
var G__29780__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29780__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29780__$1);
var G__29780__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29780__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29780__$2);
var G__29780__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29780__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29780__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29780__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29780__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29738__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29784){
var map__29785 = p__29784;
var map__29785__$1 = cljs.core.__destructure_map(map__29785);
var triage_data = map__29785__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29785__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29785__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29785__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29785__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29785__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29785__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29785__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29785__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29830 = phase;
var G__29830__$1 = (((G__29830 instanceof cljs.core.Keyword))?G__29830.fqn:null);
switch (G__29830__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29831 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29832 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29833 = loc;
var G__29834 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29845_30071 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29846_30072 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29847_30073 = true;
var _STAR_print_fn_STAR__temp_val__29848_30074 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29847_30073);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29848_30074);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29782_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29782_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29846_30072);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29845_30071);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29831,G__29832,G__29833,G__29834) : format.call(null,G__29831,G__29832,G__29833,G__29834));

break;
case "macroexpansion":
var G__29867 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29868 = cause_type;
var G__29869 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29870 = loc;
var G__29871 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29867,G__29868,G__29869,G__29870,G__29871) : format.call(null,G__29867,G__29868,G__29869,G__29870,G__29871));

break;
case "compile-syntax-check":
var G__29875 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29876 = cause_type;
var G__29877 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29878 = loc;
var G__29879 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29875,G__29876,G__29877,G__29878,G__29879) : format.call(null,G__29875,G__29876,G__29877,G__29878,G__29879));

break;
case "compilation":
var G__29880 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29881 = cause_type;
var G__29882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29883 = loc;
var G__29884 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29880,G__29881,G__29882,G__29883,G__29884) : format.call(null,G__29880,G__29881,G__29882,G__29883,G__29884));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29896 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29897 = symbol;
var G__29898 = loc;
var G__29899 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29903_30078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29904_30079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29905_30080 = true;
var _STAR_print_fn_STAR__temp_val__29906_30081 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29905_30080);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29906_30081);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29783_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29783_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29904_30079);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29903_30078);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29896,G__29897,G__29898,G__29899) : format.call(null,G__29896,G__29897,G__29898,G__29899));
} else {
var G__29918 = "Execution error%s at %s(%s).\n%s\n";
var G__29919 = cause_type;
var G__29920 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29921 = loc;
var G__29922 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29918,G__29919,G__29920,G__29921,G__29922) : format.call(null,G__29918,G__29919,G__29920,G__29921,G__29922));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29830__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
