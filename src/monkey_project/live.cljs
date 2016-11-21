(ns monkey-project.live
  (:require [monkey-project.engine-interface :as engine]))

(defn rotate-stuff [time]
  "takes in time and returns two new vars"
  {:x (* 1.0 time)
   :y (* 1.5 time)})
