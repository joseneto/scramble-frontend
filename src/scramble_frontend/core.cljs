(ns scramble-frontend.core
    (:require
      [reagent.dom :as d]
      [scramble-frontend.components.scramble :as scramble]))

;; -------------------------
;; Views

(defn title []
  [:div [:h2 "Scramble Challenge"]])

(defn index []
  [:div
   [title]
   [scramble/component]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [index] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
