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