// Compiled by ClojureScript 1.9.229 {}
goog.provide('monkey_project.core');
goog.require('cljs.core');
goog.require('blend4web');
monkey_project.core.m_version = b4w.require("version");
console.log("Using Blend4Web Version",monkey_project.core.m_version.version());
monkey_project.core.json_file = cljs.core.atom.call(null,"");
monkey_project.core.start = (function monkey_project$core$start(){
var m_main = b4w.require("main");
var m_data = b4w.require("data");
var m_config = b4w.require("config");
var m_trans = b4w.require("transform");
var m_scenes = b4w.require("scenes");
var m_time = b4w.require("time");
var m_controls = b4w.require("controls");
var canvas = document.getElementById("container");
monkey_project.core.rotate_cube = ((function (m_main,m_data,m_config,m_trans,m_scenes,m_time,m_controls,canvas){
return (function monkey_project$core$start_$_rotate_cube(val){
monkey_project.core.monkey = m_scenes.get_object_by_name("Monkey");

m_trans.set_rotation_euler(monkey_project.core.monkey,0.25,(0),(val * (1)));

m_trans.set_scale(monkey_project.core.monkey,1.75);

return m_trans.set_translation(monkey_project.core.monkey,(-1),1.5,(0));
});})(m_main,m_data,m_config,m_trans,m_scenes,m_time,m_controls,canvas))
;

monkey_project.core.stageload_cb = ((function (m_main,m_data,m_config,m_trans,m_scenes,m_time,m_controls,canvas){
return (function monkey_project$core$start_$_stageload_cb(data_id,success){
if(cljs.core.truth_(m_data.is_primary_loaded())){
var timeline_sensor = m_controls.create_timeline_sensor();
var cube_manifold = m_controls.create_sensor_manifold(null,"m_main",m_controls.CT_CONTINUOUS,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline_sensor], null)),monkey_project.core.rotate_cube);
return null;
} else {
return null;
}
});})(m_main,m_data,m_config,m_trans,m_scenes,m_time,m_controls,canvas))
;

monkey_project.core.loaded_cb = ((function (m_main,m_data,m_config,m_trans,m_scenes,m_time,m_controls,canvas){
return (function monkey_project$core$start_$_loaded_cb(data_id,success){
return "Needed for basic scene loading.\n    Data-id seems to be the thread the data is loaded. Success is a boolean for\n    whether or not the scene loading was successful.";
});})(m_main,m_data,m_config,m_trans,m_scenes,m_time,m_controls,canvas))
;

m_config.set("console_verbose",true);

m_data.load([cljs.core.str(cljs.core.deref.call(null,monkey_project.core.json_file))].join(''),monkey_project.core.loaded_cb,monkey_project.core.stageload_cb,true,false);

return m_main.init(canvas);
});
goog.exportSymbol('monkey_project.core.start', monkey_project.core.start);
monkey_project.core.add_json_file = (function monkey_project$core$add_json_file(filename){
cljs.core.reset_BANG_.call(null,monkey_project.core.json_file,filename);

return monkey_project.core.start.call(null);
});

//# sourceMappingURL=core.js.map