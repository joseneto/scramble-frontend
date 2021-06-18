(ns scramble-frontend.components.scramble
  (:require
   [reagent.core :as r]
   [ajax.core :refer [POST]]))

;; State variables
(defonce words (r/atom {:str1 "" :str2 ""}))
(defonce data-result (r/atom ""))
(defonce fetching (r/atom false))

(defn title [] 
  [:div [:h4 "Check if a portion of a word characters can be rearranged to match the another word "]])

;; Input text
(defn base-input [label-input keyword]
  [:input.text-box {:type "text"
           :placeholder label-input
           :value (keyword @words)
           :on-change (fn [event] ((swap! words assoc keyword (.-value (.-target event)))))}]) ; change value from input field

(defn not-empty-field [value1 value2]
  (and value1 (not= value1 "")
       value2 (not= value2 "")))

(defn only-letters[value1 value2 ]
  (and (boolean (re-matches #"[a-zA-Z]+" value1))
       (boolean (re-matches #"[a-zA-Z]+" value2))))

;; Change result using response from the server
(defn handler-response [response]
  (reset! data-result (:message response))
  (reset! fetching false))

;; Check any errors
(defn handler-error [{:keys [status status-text]}]
  (reset! fetching false)
  (js/alert (str "something bad happened: " status " " status-text)))

;; Handle all logic to send the data
(defn post-data []
  (if-not @fetching ((if (and (not-empty-field (:str1 @words) (:str2 @words)) ; validations
                              (only-letters (:str1 @words) (:str2 @words)))
                       ((reset! fetching true) ; set to fetching data
                        (POST "http://localhost:3000/scramble" ; post to server
                          {:params {:str1 (:str1 @words)
                                    :str2 (:str2 @words)}
                           :handler handler-response
                           :error-handler handler-error
                           :format :json
                           :response-format :json
                           :keywords? true}))
                       (js/alert "Please fill the fields with letters")))
          (.log js/console "Already fetching data!")))

(defn button []
  [:input.button 
   {:type "button"
           :value "Check words"
           :on-click #(post-data)}])

(defn result []
  [:div [:h3
         {:style {
            :color "#db5151"      
         }}
         @data-result]])

(defn spinner-loading []
  [:div {:style {:height "70px"}} (if @fetching [:div.lds-dual-ring] [:div])])

;; Build all ui components
(defn component []
  [:div.vertical-align
   [title]
   [:div.center-div
    [base-input "Word 1" :str1]
    [base-input "Word 2" :str2]
    [button]]
   [:div.center-div
    [result]]
   [:div.center-div 
    [spinner-loading]]])