goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29299,res){
var map__29300 = p__29299;
var map__29300__$1 = cljs.core.__destructure_map(map__29300);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29300__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29300__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29301 = res;
var G__29301__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29301,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29301);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29301__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29301__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29303 = arguments.length;
switch (G__29303) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29304,msg,handlers,timeout_after_ms){
var map__29305 = p__29304;
var map__29305__$1 = cljs.core.__destructure_map(map__29305);
var runtime = map__29305__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29305__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___29528 = arguments.length;
var i__4830__auto___29530 = (0);
while(true){
if((i__4830__auto___29530 < len__4829__auto___29528)){
args__4835__auto__.push((arguments[i__4830__auto___29530]));

var G__29533 = (i__4830__auto___29530 + (1));
i__4830__auto___29530 = G__29533;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29309,ev,args){
var map__29310 = p__29309;
var map__29310__$1 = cljs.core.__destructure_map(map__29310);
var runtime = map__29310__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29310__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29311 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29314 = null;
var count__29315 = (0);
var i__29316 = (0);
while(true){
if((i__29316 < count__29315)){
var ext = chunk__29314.cljs$core$IIndexed$_nth$arity$2(null,i__29316);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29536 = seq__29311;
var G__29537 = chunk__29314;
var G__29538 = count__29315;
var G__29539 = (i__29316 + (1));
seq__29311 = G__29536;
chunk__29314 = G__29537;
count__29315 = G__29538;
i__29316 = G__29539;
continue;
} else {
var G__29540 = seq__29311;
var G__29541 = chunk__29314;
var G__29542 = count__29315;
var G__29543 = (i__29316 + (1));
seq__29311 = G__29540;
chunk__29314 = G__29541;
count__29315 = G__29542;
i__29316 = G__29543;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29311);
if(temp__5753__auto__){
var seq__29311__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29311__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29311__$1);
var G__29544 = cljs.core.chunk_rest(seq__29311__$1);
var G__29545 = c__4649__auto__;
var G__29546 = cljs.core.count(c__4649__auto__);
var G__29547 = (0);
seq__29311 = G__29544;
chunk__29314 = G__29545;
count__29315 = G__29546;
i__29316 = G__29547;
continue;
} else {
var ext = cljs.core.first(seq__29311__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29549 = cljs.core.next(seq__29311__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__29311 = G__29549;
chunk__29314 = G__29550;
count__29315 = G__29551;
i__29316 = G__29552;
continue;
} else {
var G__29554 = cljs.core.next(seq__29311__$1);
var G__29555 = null;
var G__29556 = (0);
var G__29557 = (0);
seq__29311 = G__29554;
chunk__29314 = G__29555;
count__29315 = G__29556;
i__29316 = G__29557;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29306){
var G__29307 = cljs.core.first(seq29306);
var seq29306__$1 = cljs.core.next(seq29306);
var G__29308 = cljs.core.first(seq29306__$1);
var seq29306__$2 = cljs.core.next(seq29306__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29307,G__29308,seq29306__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29341,p__29342){
var map__29343 = p__29341;
var map__29343__$1 = cljs.core.__destructure_map(map__29343);
var runtime = map__29343__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29343__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29344 = p__29342;
var map__29344__$1 = cljs.core.__destructure_map(map__29344);
var msg = map__29344__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29344__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29345 = cljs.core.deref(state_ref);
var map__29345__$1 = cljs.core.__destructure_map(map__29345);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29354){
var map__29357 = p__29354;
var map__29357__$1 = cljs.core.__destructure_map(map__29357);
var runtime = map__29357__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29357__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29366,msg){
var map__29367 = p__29366;
var map__29367__$1 = cljs.core.__destructure_map(map__29367);
var runtime = map__29367__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29367__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29374,key,p__29375){
var map__29376 = p__29374;
var map__29376__$1 = cljs.core.__destructure_map(map__29376);
var state = map__29376__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29376__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29377 = p__29375;
var map__29377__$1 = cljs.core.__destructure_map(map__29377);
var spec = map__29377__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29377__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29389,key,spec){
var map__29390 = p__29389;
var map__29390__$1 = cljs.core.__destructure_map(map__29390);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29390__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__29398_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__29398_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__29400_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__29400_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__29401_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__29401_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__29402_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__29402_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__29403_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__29403_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__29415,key){
var map__29416 = p__29415;
var map__29416__$1 = cljs.core.__destructure_map(map__29416);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29416__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__29427,msg){
var map__29428 = p__29427;
var map__29428__$1 = cljs.core.__destructure_map(map__29428);
var runtime = map__29428__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29428__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__29433,p__29434){
var map__29436 = p__29433;
var map__29436__$1 = cljs.core.__destructure_map(map__29436);
var runtime = map__29436__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29436__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29437 = p__29434;
var map__29437__$1 = cljs.core.__destructure_map(map__29437);
var msg = map__29437__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29437__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29437__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__29455 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29461 = null;
var count__29462 = (0);
var i__29463 = (0);
while(true){
if((i__29463 < count__29462)){
var map__29503 = chunk__29461.cljs$core$IIndexed$_nth$arity$2(null,i__29463);
var map__29503__$1 = cljs.core.__destructure_map(map__29503);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29503__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29595 = seq__29455;
var G__29596 = chunk__29461;
var G__29597 = count__29462;
var G__29598 = (i__29463 + (1));
seq__29455 = G__29595;
chunk__29461 = G__29596;
count__29462 = G__29597;
i__29463 = G__29598;
continue;
} else {
var G__29599 = seq__29455;
var G__29600 = chunk__29461;
var G__29601 = count__29462;
var G__29602 = (i__29463 + (1));
seq__29455 = G__29599;
chunk__29461 = G__29600;
count__29462 = G__29601;
i__29463 = G__29602;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29455);
if(temp__5753__auto__){
var seq__29455__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29455__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29455__$1);
var G__29603 = cljs.core.chunk_rest(seq__29455__$1);
var G__29604 = c__4649__auto__;
var G__29605 = cljs.core.count(c__4649__auto__);
var G__29606 = (0);
seq__29455 = G__29603;
chunk__29461 = G__29604;
count__29462 = G__29605;
i__29463 = G__29606;
continue;
} else {
var map__29508 = cljs.core.first(seq__29455__$1);
var map__29508__$1 = cljs.core.__destructure_map(map__29508);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29508__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29608 = cljs.core.next(seq__29455__$1);
var G__29609 = null;
var G__29610 = (0);
var G__29611 = (0);
seq__29455 = G__29608;
chunk__29461 = G__29609;
count__29462 = G__29610;
i__29463 = G__29611;
continue;
} else {
var G__29612 = cljs.core.next(seq__29455__$1);
var G__29613 = null;
var G__29614 = (0);
var G__29615 = (0);
seq__29455 = G__29612;
chunk__29461 = G__29613;
count__29462 = G__29614;
i__29463 = G__29615;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
