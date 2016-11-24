(ns monkey-project.live
  (:require [monkey-project.engine-interface :as engine]
            [clojure.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def scenes (engine/load-b4w-module :scenes))
(def objects (engine/load-b4w-module :objects))
(def transform (engine/load-b4w-module :transform))
(def material (engine/load-b4w-module :material))
(def rgba (engine/load-b4w-module :rgba))

(def some-symbol {:a 1})

(def fn-map
  {:change (fn [obj time] (doall (.set-rotation-euler transform obj
                                   (* 0 time)
                                   (* 0 time)
                                   (* 2 time))
                                 (.set-diffuse-color material obj "Material"
                                          (.from-values rgba
                                            100 2 10 1))))})

(defn update-loop [time]
  (let [monkey (.get-object-by-name scenes "Monkey")]
       ((:change fn-map) monkey time)))
