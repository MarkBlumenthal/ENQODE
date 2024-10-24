1) run this in the terminal: npm install -g @vue/cli

2) run this in the terminal: vue create score-widget

3) Navigate to the project folder: cd score-widget

4) Install Vuetify: vue add vuetify
(Make sure to select the default preset in the setup
Make sure to select Vuetify 3 - Vite (preview)
DO NOT install  install Vuetify 3 nightly build)

5)  Inside your src/components/ folder, create a new file named ZeroTrustScoreWidget.vue

6) Open src/App.vue, and import the ZeroTrustScoreWidget component.
Pass in the sample JSON structure as a prop.

7) once all done run in terminal - npm run dev
you should see the following in the terminal: > zero-trust-score-widget@0.1.0 dev
> vite


  VITE v3.2.11  ready in 2638 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose

  8) copy http://localhost:5173/ into your browser and you should see the widget
