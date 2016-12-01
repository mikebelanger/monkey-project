(set-env!
  :source-paths #{"src"}
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/clojure "1.9.0-alpha12"]
                  [org.clojure/clojurescript "1.9.229"]
                  [org.clojure/core.match "0.3.0-alpha4"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  [org.clojure/core.async "0.2.395"]
                  [adzerk/boot-cljs "1.7.228-1"]
                  [adzerk/boot-cljs-repl "0.3.3"]
                  [adzerk/boot-reload "0.4.13" :scope "test"]
                  [cljsjs/blend4web "16.11-1"]
                  [tailrecursion/boot-jetty "0.1.0"]
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [weasel "0.7.0" :scope "test"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[tailrecursion.boot-jetty :refer [serve]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload :refer [reload]])

(deftask uranium
  "Ensure uranium.js and uranium.js.mem are in target directory."
  []
  ;;uranium.js and uranium.js.mem need to both be in the same subdir as b4w's target html.
  (sift :add-jar {'cljsjs/blend4web #"^*/uranium.js*"}
        :move {#"^*cljsjs/blend4web/common/uranium.js"
               "uranium.js"}
        :to-resource #{#"uranium.js*"}))

(deftask b4w-live
  "for live-coding various things.  Edit the actions symbol while watching
  the browser window."
  []
  (comp
    (watch)
    (reload :on-jsload 'monkey-project.live/actions)
    (cljs)
    (uranium)
    (serve :port 8000)))

(deftask deploy
  "For outputting to a website.  Advanced makes it faster, but no
  hot-swapping. Live-coding possible, but really slow."
  []
  (comp
    (watch)
    (cljs :optimizations :advanced)
    (uranium)
    (target)))
