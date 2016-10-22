(ns monkey-project.core
  (:require blend4web))

(def m-version (.require js/b4w "version"))

(.log js/console "Using Blend4Web Version" (.version m-version))

(def json-file (atom ""))

(defn ^:export start
  []
  (let [m-main      (.require js/b4w "main")
        m-data      (.require js/b4w "data")
        m-config    (.require js/b4w "config")
        m-trans     (.require js/b4w "transform")
        m-scenes    (.require js/b4w "scenes")
        m-time      (.require js/b4w "time")
        m-controls  (.require js/b4w "controls")
        canvas      (.getElementById js/document "container")]

  (defn rotate-cube [val]
    (def monkey (.get-object-by-name m-scenes "Monkey"))
    (.set-rotation-euler m-trans
                         monkey
                         0.2
                         0
                         (* val 1))
    (.set-scale m-trans monkey 1.75)
    (.set-translation m-trans monkey -1 1.5 0))

  (defn stageload-cb [data-id success]
    (when (.is-primary-loaded m-data)
          ;;Minimal setup to create a continuous, simple object animation.
          ;;timeline-sensor will feed the rotate-cube callback the global time(s)
          (let [timeline-sensor (.create-timeline-sensor m-controls)
                ;;it looks like you need to throw sensor values in a manifold if
                ;;you want to grab their data, even if it's just one sensor.
                cube-manifold   (.create-sensor-manifold
                            m-controls
                            nil ;;only specify if its one object you want
                            "m_main" ;;manifold id -- can be basically anything
                            (.-CT_CONTINUOUS m-controls) ;;play forever
                            ;;you have to add all sensors to the manifold's
                            ;;array.
                            (clj->js [timeline-sensor])
                            rotate-cube)])))

  (defn loaded-cb [data-id success]
    "Needed for basic scene loading.
    Data-id seems to be the thread the data is loaded. Success is a boolean for
    whether or not the scene loading was successful.")

  (.set m-config "console_verbose" true) ;;get diagnostic info into js console
  (.load m-data
         (str @json-file)   ;;process the argument you gave in the embedded javascript
         loaded-cb    ;;needed to kickoff the B4W engine
         stageload-cb ;;this is where you start manipulating the scenes
         true         ;;Wait until all resources are loaded
         false)       ;;Hide loaded objects and disable physics-objects

  ;; start this bad-boy up.  Note we're hooking up the canvas node here
  (.init m-main canvas)))

(defn add-json-file [filename]
  (reset! json-file filename)
  (start))
