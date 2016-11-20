(ns monkey-project.core
  (:require [blend4web]
            [monkey-project.engine-interface :as engine]))

(defn ^:export start
  []
  (def load-data (engine/enter-b4w-data "monkey_project.json"
                  (.getElementById js/document "container")))

  (engine/init-b4w load-data))

; (defn rotate-cube [val]
;   (def monkey (.get-object-by-name m-scenes "Monkey"))
;   (.set-rotation-euler m-trans
;                        monkey
;                        0
;                        0
;                        (* val 2));;Note how its spinning faster
;   (.set-scale m-trans monkey 1.2)
;   (.set-translation m-trans monkey 1 1.0 0)
;   (.set-diffuse-color m-material monkey
;                       "Material"
;                       (.from-values m-rgba
;                                     (/ val 255)
;                                     10;;Now, change color
;                                     50
;                                     20)))
