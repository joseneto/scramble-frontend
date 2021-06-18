goog.provide('shadow.cljs.devtools.client.node');
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__30759){
var map__30760 = p__30759;
var map__30760__$1 = cljs.core.__destructure_map(map__30760);
var msg = map__30760__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30760__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30760__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__30762){
var map__30763 = p__30762;
var map__30763__$1 = cljs.core.__destructure_map(map__30763);
var msg = map__30763__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30763__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30763__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__30765 = info;
var map__30765__$1 = cljs.core.__destructure_map(map__30765);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30765__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30765__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30765__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30774){
var map__30775 = p__30774;
var map__30775__$1 = cljs.core.__destructure_map(map__30775);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30775__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30775__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__30776){
var map__30777 = p__30776;
var map__30777__$1 = cljs.core.__destructure_map(map__30777);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30777__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__30778 = cljs.core.seq(files_to_require);
var chunk__30779 = null;
var count__30780 = (0);
var i__30781 = (0);
while(true){
if((i__30781 < count__30780)){
var src = chunk__30779.cljs$core$IIndexed$_nth$arity$2(null,i__30781);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__30821 = seq__30778;
var G__30822 = chunk__30779;
var G__30823 = count__30780;
var G__30824 = (i__30781 + (1));
seq__30778 = G__30821;
chunk__30779 = G__30822;
count__30780 = G__30823;
i__30781 = G__30824;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30778);
if(temp__5753__auto__){
var seq__30778__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30778__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__30778__$1);
var G__30825 = cljs.core.chunk_rest(seq__30778__$1);
var G__30826 = c__4649__auto__;
var G__30827 = cljs.core.count(c__4649__auto__);
var G__30828 = (0);
seq__30778 = G__30825;
chunk__30779 = G__30826;
count__30780 = G__30827;
i__30781 = G__30828;
continue;
} else {
var src = cljs.core.first(seq__30778__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__30829 = cljs.core.next(seq__30778__$1);
var G__30830 = null;
var G__30831 = (0);
var G__30832 = (0);
seq__30778 = G__30829;
chunk__30779 = G__30830;
count__30780 = G__30831;
i__30781 = G__30832;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__30783,msg){
var map__30784 = p__30783;
var map__30784__$1 = cljs.core.__destructure_map(map__30784);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30784__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__30786){
var map__30787 = p__30786;
var map__30787__$1 = cljs.core.__destructure_map(map__30787);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30787__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30787__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__30788,done,error){
var map__30789 = p__30788;
var map__30789__$1 = cljs.core.__destructure_map(map__30789);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30789__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__30791_30833 = cljs.core.seq(repl_sources);
var chunk__30793_30834 = null;
var count__30794_30835 = (0);
var i__30795_30836 = (0);
while(true){
if((i__30795_30836 < count__30794_30835)){
var map__30799_30837 = chunk__30793_30834.cljs$core$IIndexed$_nth$arity$2(null,i__30795_30836);
var map__30799_30838__$1 = cljs.core.__destructure_map(map__30799_30837);
var src_30839 = map__30799_30838__$1;
var output_name_30840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30799_30838__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30840)))){
shadow.cljs.devtools.client.node.closure_import(output_name_30840);


var G__30841 = seq__30791_30833;
var G__30842 = chunk__30793_30834;
var G__30843 = count__30794_30835;
var G__30844 = (i__30795_30836 + (1));
seq__30791_30833 = G__30841;
chunk__30793_30834 = G__30842;
count__30794_30835 = G__30843;
i__30795_30836 = G__30844;
continue;
} else {
var G__30845 = seq__30791_30833;
var G__30846 = chunk__30793_30834;
var G__30847 = count__30794_30835;
var G__30848 = (i__30795_30836 + (1));
seq__30791_30833 = G__30845;
chunk__30793_30834 = G__30846;
count__30794_30835 = G__30847;
i__30795_30836 = G__30848;
continue;
}
} else {
var temp__5753__auto___30849 = cljs.core.seq(seq__30791_30833);
if(temp__5753__auto___30849){
var seq__30791_30850__$1 = temp__5753__auto___30849;
if(cljs.core.chunked_seq_QMARK_(seq__30791_30850__$1)){
var c__4649__auto___30851 = cljs.core.chunk_first(seq__30791_30850__$1);
var G__30852 = cljs.core.chunk_rest(seq__30791_30850__$1);
var G__30853 = c__4649__auto___30851;
var G__30854 = cljs.core.count(c__4649__auto___30851);
var G__30855 = (0);
seq__30791_30833 = G__30852;
chunk__30793_30834 = G__30853;
count__30794_30835 = G__30854;
i__30795_30836 = G__30855;
continue;
} else {
var map__30801_30856 = cljs.core.first(seq__30791_30850__$1);
var map__30801_30857__$1 = cljs.core.__destructure_map(map__30801_30856);
var src_30858 = map__30801_30857__$1;
var output_name_30859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30801_30857__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30859)))){
shadow.cljs.devtools.client.node.closure_import(output_name_30859);


var G__30860 = cljs.core.next(seq__30791_30850__$1);
var G__30861 = null;
var G__30862 = (0);
var G__30863 = (0);
seq__30791_30833 = G__30860;
chunk__30793_30834 = G__30861;
count__30794_30835 = G__30862;
i__30795_30836 = G__30863;
continue;
} else {
var G__30864 = cljs.core.next(seq__30791_30850__$1);
var G__30865 = null;
var G__30866 = (0);
var G__30867 = (0);
seq__30791_30833 = G__30864;
chunk__30793_30834 = G__30865;
count__30794_30835 = G__30866;
i__30795_30836 = G__30867;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e30790){var e = e30790;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__30802,done,error){
var map__30803 = p__30802;
var map__30803__$1 = cljs.core.__destructure_map(map__30803);
var msg = map__30803__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30803__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30803__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__30805_30868 = cljs.core.seq(sources);
var chunk__30806_30869 = null;
var count__30807_30870 = (0);
var i__30808_30871 = (0);
while(true){
if((i__30808_30871 < count__30807_30870)){
var map__30813_30872 = chunk__30806_30869.cljs$core$IIndexed$_nth$arity$2(null,i__30808_30871);
var map__30813_30873__$1 = cljs.core.__destructure_map(map__30813_30872);
var src_30874 = map__30813_30873__$1;
var provides_30875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30813_30873__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_30876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30813_30873__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4223__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30876)));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_30875);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_30876);
} else {
}


var G__30877 = seq__30805_30868;
var G__30878 = chunk__30806_30869;
var G__30879 = count__30807_30870;
var G__30880 = (i__30808_30871 + (1));
seq__30805_30868 = G__30877;
chunk__30806_30869 = G__30878;
count__30807_30870 = G__30879;
i__30808_30871 = G__30880;
continue;
} else {
var temp__5753__auto___30881 = cljs.core.seq(seq__30805_30868);
if(temp__5753__auto___30881){
var seq__30805_30882__$1 = temp__5753__auto___30881;
if(cljs.core.chunked_seq_QMARK_(seq__30805_30882__$1)){
var c__4649__auto___30883 = cljs.core.chunk_first(seq__30805_30882__$1);
var G__30884 = cljs.core.chunk_rest(seq__30805_30882__$1);
var G__30885 = c__4649__auto___30883;
var G__30886 = cljs.core.count(c__4649__auto___30883);
var G__30887 = (0);
seq__30805_30868 = G__30884;
chunk__30806_30869 = G__30885;
count__30807_30870 = G__30886;
i__30808_30871 = G__30887;
continue;
} else {
var map__30814_30888 = cljs.core.first(seq__30805_30882__$1);
var map__30814_30889__$1 = cljs.core.__destructure_map(map__30814_30888);
var src_30890 = map__30814_30889__$1;
var provides_30891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30814_30889__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_30892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30814_30889__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4223__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30892)));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_30891);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_30892);
} else {
}


var G__30893 = cljs.core.next(seq__30805_30882__$1);
var G__30894 = null;
var G__30895 = (0);
var G__30896 = (0);
seq__30805_30868 = G__30893;
chunk__30806_30869 = G__30894;
count__30807_30870 = G__30895;
i__30808_30871 = G__30896;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e30804){var e = e30804;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__30815){
var map__30816 = p__30815;
var map__30816__$1 = cljs.core.__destructure_map(map__30816);
var env = map__30816__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__30817){
var map__30818 = p__30817;
var map__30818__$1 = cljs.core.__destructure_map(map__30818);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30818__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30818__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__30819){
var map__30820 = p__30819;
var map__30820__$1 = cljs.core.__destructure_map(map__30820);
var svc = map__30820__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30820__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
