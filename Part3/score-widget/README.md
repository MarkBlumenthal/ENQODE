# Zero-Trust Score Widget

## Overview
This project demonstrates a simple Zero-Trust Score widget built using **Vue.js 3.x** and **Vuetify**. The widget displays:
- The overall Zero-Trust Score.
- Individual security metrics (e.g., Firewall Score, Encryption Score, Access Control Score).
- A visual representation (progress bars) of each metric.
- The risk category based on the Zero-Trust Score.
- A color chart explaining what each bar color represents (e.g., red for low scores, green for high scores).

## How to Run the Project

Follow these steps to set up and run the project:

1. Navigate to the project folder:

cd Part3
cd score-widget

Install project dependencies:
npm install


Run the project:
npm run dev

Open your browser and navigate to the local development server:

http://localhost:5173/
Output
Once the project is running, you should see a widget that displays the Zero-Trust Score and individual metrics with color-coded progress bars. The color chart next to the progress bars explains the meaning of each color:

Red: Scores below 50.
Yellow: Scores between 50 and 70.
Green: Scores above 70.

See available Screenshots of what you should get


# running the app/widget in play.vuetifyjs.com
in this project we created a seperate ZeroTrustScoreWidget.css file for easier readability and maintainability. However, when working with play.vuetifyjs.com, it's limited in how it handles external resources. The playground won't automatically load external CSS files from your local setup. Therefore the style section needs to be hardcoded into the code when using play.vuetify.

Open play.vuetifyjs.com and paste the following code to see the widget:

<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>{{ data.companyName }}</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <h3>Zero-Trust Score: {{ data.ZeroTrustScore }}</h3>
        <div
          class="manual-progress-bar"
          :style="{ width: data.ZeroTrustScore + '%', height: '8px', backgroundColor: getBarColor(data.ZeroTrustScore) }">
        </div>

        <v-row v-for="(value, key) in data.metrics" :key="key">
          <v-col>
            <p>{{ key }}: {{ value }}</p>
            <div
              class="manual-progress-bar"
              :style="{ width: value + '%', height: '8px', backgroundColor: getBarColor(value) }">
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <h3>Color Chart</h3>
        <ul class="color-legend">
          <li>
            <span class="color-box" style="background-color: red;"></span>
            Scores below 50 (Red)
          </li>
          <li>
            <span class="color-box" style="background-color: yellow;"></span>
            Scores between 50 and 70 (Yellow)
          </li>
          <li>
            <span class="color-box" style="background-color: green;"></span>
            Scores above 70 (Green)
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3>Additional Observable Data</h3>
        <div v-for="(value, key) in data.observableData" :key="key">
          <p>{{ key }}: {{ value }}</p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-alert :type="riskColor" outlined>
          Risk Category: {{ data.riskCategory }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ZeroTrustScoreWidget",
  data() {
    return {
      data: {
        companyName: "FinTechSecure Ltd.",
        ZeroTrustScore: 58.5,
        metrics: {
          "Firewall Score": 75,
          "Encryption Score": 65,
          "Access Control Score": 35,
        },
        observableData: {
          averageShannonEntropyScore: 7.8,
          firewallDetected: true,
          DNSsecEnabled: true,
          tlsVersion: "1.2",
          certificateBitStrength: 2048,
          securityHeadersImplemented: ["X-XSS-Protection", "X-Frame-Options"],
          openPortsDetected: 12,
        },
        riskCategory: "Moderate Risk",
      },
    };
  },
  computed: {
    riskColor() {
      switch (this.data.riskCategory) {
        case "Low Risk":
          return "success";
        case "Moderate Risk":
          return "warning";
        case "High Risk":
          return "error";
        default:
          return "info";
      }
    }
  },
  methods: {
    getBarColor(value) {
      if (value < 50) return 'red';
      if (value < 70) return 'yellow';
      return 'green';
    }
  }
};
</script>

<style>
.manual-progress-bar {
    width: 0;
    background-color: green;
    transition: width 0.3s ease;
    border: 1px solid black;
}
.color-legend {
    list-style-type: none;
    padding: 0;
}
.color-legend li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}
.color-box {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 8px;
    border: 1px solid #000;
}
</style>



Technologies Used
Vue.js 3.x
Vuetify (UI framework)
Vite (for fast development)