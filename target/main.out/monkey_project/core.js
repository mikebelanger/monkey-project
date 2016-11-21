// Compiled by ClojureScript 1.9.229 {}
goog.provide('monkey_project.core');
goog.require('cljs.core');
goog.require('blend4web');
goog.require('monkey_project.engine_interface');
monkey_project.core.spin_the_monkey = (function monkey_project$core$spin_the_monkey(time){
var scenes = monkey_project.engine_interface.load_b4w_module.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var trans = monkey_project.engine_interface.load_b4w_module.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764));
var monkey = scenes.get_object_by_name("Monkey");
return trans.set_rotation_euler(monkey,(0),(2),time);
});
monkey_project.core.start = (function monkey_project$core$start(){
var timeline_sensor = monkey_project.engine_interface.load_b4w_module.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)).create_timeline_sensor();
var sensor_manifold = monkey_project.engine_interface.enter_sensor_manifold_data.call(null,false,"main",monkey_project.engine_interface.load_b4w_module.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)).CT_CONTINUOUS,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline_sensor], null)),monkey_project.core.spin_the_monkey);
var load_data = monkey_project.engine_interface.enter_b4w_data.call(null,"monkey_project.json",document.getElementById("container"));
return monkey_project.engine_interface.init_b4w.call(null,load_data,sensor_manifold);
});
goog.exportSymbol('monkey_project.core.start', monkey_project.core.start);

//# sourceMappingURL=core.js.map