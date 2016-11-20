// Compiled by ClojureScript 1.9.229 {}
goog.provide('monkey_project.core');
goog.require('cljs.core');
goog.require('blend4web');
goog.require('monkey_project.engine_interface');
monkey_project.core.start = (function monkey_project$core$start(){
monkey_project.core.load_data = monkey_project.engine_interface.enter_b4w_data.call(null,"monkey_project.json",document.getElementById("container"));

return monkey_project.engine_interface.init_b4w.call(null,monkey_project.core.load_data);
});
goog.exportSymbol('monkey_project.core.start', monkey_project.core.start);

//# sourceMappingURL=core.js.map