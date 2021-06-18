goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__30312,p__30313){
var map__30314 = p__30312;
var map__30314__$1 = cljs.core.__destructure_map(map__30314);
var svc = map__30314__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30314__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30314__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30314__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__30315 = p__30313;
var map__30315__$1 = cljs.core.__destructure_map(map__30315);
var msg = map__30315__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30315__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30315__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30315__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30315__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__30317,p__30318){
var map__30319 = p__30317;
var map__30319__$1 = cljs.core.__destructure_map(map__30319);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30319__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__30320 = p__30318;
var map__30320__$1 = cljs.core.__destructure_map(map__30320);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30320__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__30321,p__30322){
var map__30323 = p__30321;
var map__30323__$1 = cljs.core.__destructure_map(map__30323);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30323__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30323__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__30324 = p__30322;
var map__30324__$1 = cljs.core.__destructure_map(map__30324);
var msg = map__30324__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30324__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__30325,tid){
var map__30326 = p__30325;
var map__30326__$1 = cljs.core.__destructure_map(map__30326);
var svc = map__30326__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30326__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__30331 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__30332 = null;
var count__30333 = (0);
var i__30334 = (0);
while(true){
if((i__30334 < count__30333)){
var vec__30341 = chunk__30332.cljs$core$IIndexed$_nth$arity$2(null,i__30334);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__30375 = seq__30331;
var G__30376 = chunk__30332;
var G__30377 = count__30333;
var G__30378 = (i__30334 + (1));
seq__30331 = G__30375;
chunk__30332 = G__30376;
count__30333 = G__30377;
i__30334 = G__30378;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30331);
if(temp__5753__auto__){
var seq__30331__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30331__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__30331__$1);
var G__30379 = cljs.core.chunk_rest(seq__30331__$1);
var G__30380 = c__4649__auto__;
var G__30381 = cljs.core.count(c__4649__auto__);
var G__30382 = (0);
seq__30331 = G__30379;
chunk__30332 = G__30380;
count__30333 = G__30381;
i__30334 = G__30382;
continue;
} else {
var vec__30344 = cljs.core.first(seq__30331__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__30386 = cljs.core.next(seq__30331__$1);
var G__30387 = null;
var G__30388 = (0);
var G__30389 = (0);
seq__30331 = G__30386;
chunk__30332 = G__30387;
count__30333 = G__30388;
i__30334 = G__30389;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__30327_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__30327_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__30328_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__30328_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__30329_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__30329_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__30330_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__30330_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__30357){
var map__30358 = p__30357;
var map__30358__$1 = cljs.core.__destructure_map(map__30358);
var svc = map__30358__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30358__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30358__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
