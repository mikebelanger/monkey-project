(ns adzerk.boot-reload.init726 (:require [adzerk.boot-reload.client :as client] monkey-project.core))
(client/connect "ws://localhost:52578" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (monkey-project.core/start))})