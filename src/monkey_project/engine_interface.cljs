(ns monkey-project.engine-interface
  (:require [blend4web]
            [monkey-project.control-sensors :refer [control-types]]))

(def b4w-modules
  {:anchors "anchors"
   :app "app"
   :armature "armature"
   :assets "assets"
   :camera "camera"
   :camera_anim "camera_anim"
   :config "config"
   :constraints "constraints"
   :container "container"
   :controls "controls"
   :data "data"
   :debug "debug"
   :geometry "geometry"
   :gp-conf "gp_conf"
   :gyroscope "gyroscope"
   :hmd "hmd"
   :hmd-conf "hmd_conf"
   :hud "hud"
   :input "input"
   :lights "lights"
   :logic-nodes "logic_nodes"
   :main "main"
   :mat3 "mat3"
   :mat4 "mat4"
   :material "material"
   :math "math"
   :mixer "mixer"
   :mouse "mouse"
   :nla "nla"
   :npc-ai "npc_ai"
   :ns-compat "ns_compat"
   :objects "objects"
   :particles "particles"
   :physics "physics"
   :preloader "preloader"
   :quat "quat"
   :rgb "rgb"
   :scenes "scenes"
   :screenshooter "screenshooter"
   :sfx "sfx"
   :storage "storage"
   :textures "textures"
   :time "time"
   :transform "transform"
   :tsr "tsr"
   :util "util"
   :vec3 "vec3"
   :vec4 "vec4"
   :version "version"})

(defrecord b4wData [json canvas])
(defrecord SensorManifold [one-obj? id control-type fn-arr custom-fn])

(defn enter-b4w-data [json canvas]
  "Will create b4w's entry point into the DOM:
  json = path to exported json file relative to html container.
  canvas = DOM node you want b4w to run inside of."
  (->b4wData json canvas))

(defn enter-sensor-manifold-data [one-obj? id control-type fn-arr custom-fn]
  "Define the ability to update the state of a b4w scene.
  one-obj? = (boolean) do you want the manifold on one object or not.
  id = (string) of whatever you want it to be called
  control type = one of the control-types in control_sensors.cljs
  fn-arr = array of function callbacks to use.
  custom-fn = custom function to manipulate b4w scene."
  (->SensorManifold one-obj? id control-type fn-arr custom-fn))

(defn load-b4w-module [m-name]
  (let [mod (m-name b4w-modules)]
    (if mod
      (.require js/b4w mod)
      (throw (js/Error (str "B4w module " m-name " does not exist."))))))

(defn init-b4w
  ([] (throw
        (js/Error. "load a b4w scene: b4wData record needed for minimal start.")))

  ([load-data
    & sensors-arg] (when (and (:json load-data)
                              (:canvas load-data))
                         (let [data (load-b4w-module :data)
                               main (load-b4w-module :main)]

                          (if (> (count sensors-arg) 0)
                            (letfn [(stageload-cb [data-id success]
                                                  (when (.is-primary-loaded data)
                                                    (let [sensor (first sensors-arg)
                                                          manifold
                                                          (.create-sensor-manifold (load-b4w-module :controls)
                                                            (:one-obj? sensor)
                                                            (:id sensor)
                                                            (:control-type sensor)
                                                            (:fn-arr sensor)
                                                            (:custom-fn sensor))]))
                                                  data-id success)
                                    (loaded-cb [data-id success] () data-id success)]
                                   (do (.load data (:json load-data) loaded-cb stageload-cb true false)
                                       (.init main (:canvas load-data))))

                           (do (.load data (:json load-data))
                               (.init main (:canvas load-data))))))))


; (defn stageload-cb [data-id success]
;  (when (.is-primary-loaded (load-b4w-module :data))
;       ;;Minimal setup to create a continuous, simple object animation.
;       ;;timeline-sensor will feed the rotate-cube callback the global time(s)
;        (let [timeline-sensor (.create-timeline-sensor (load-b4w-module :controls))]
;                           ;;it looks like you need to throw sensor values in a manifold if
;                           ;;you want to grab their data, even if it's just one sensor.
;             manifold  (.create-sensor-manifold
;                                         (load-b4w-module :controls)
;                                         nil ;;only specify if its one object you want
;                                         "main" ;;manifold id -- can be basically anything
;                                         (.-CT_CONTINUOUS (load-b4w-module :controls));;play forever
;                                         ;;you have to add all sensors to the manifold's
;                                         ;;array.
;                                         (clj->js [timeline-sensor])
;                                         custom-fn))))
;
; (defn loaded-cb [data-id success]
;  "Needed for basic scene loading.
;   Data-id seems to be the thread the data is loaded. Success is a boolean for
;   whether or not the scene loading was successful.")
;
; (defn b4w-load-dispatch [main data canvas]
;   "Takes the main canvas, json file and data and loads it."
;   (.load data loaded-cb stageload-cb true false))
