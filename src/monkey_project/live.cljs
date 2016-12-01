(ns monkey-project.live
  (:require [monkey-project.engine-interface :as engine]
            [clojure.core.async :as async]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def scenes (engine/load-b4w-module :scenes))
(def objects (engine/load-b4w-module :objects))
(def transform (engine/load-b4w-module :transform))
(def material (engine/load-b4w-module :material))
(def rgba (engine/load-b4w-module :rgba))

(def actions
  {:expand-shrink (fn [obj time] (do
                                  (match
                                   [(mod (Math.round time) 2)]
                                    [0] (.set-scale transform obj 2.3)
                                    [1] (.set-scale transform obj 0.75))
                                  (.set-rotation-euler transform obj
                                         (* time 1.0)
                                         3
                                         (* time 0.3))
                                  (.set-diffuse-color material obj
                                              "Material"
                                              (.from-values rgba
                                                            120
                                                            100
                                                            200
                                                            1))
                                  (.set-diffuse-intensity material obj
                                              "Material"
                                              (* time 0.0005))))})

(defn continuous-timeline-sensor [time]
  (let [monkey (.get-object-by-name scenes "Monkey")]
       ((:expand-shrink actions) monkey time)))
