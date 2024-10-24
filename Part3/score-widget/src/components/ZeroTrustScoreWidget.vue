<template>
  <v-container>
    <!-- Display the Company Name -->
    <v-row>
      <v-col>
        <!-- Using Vue interpolation to display the company name from the zeroTrustData object -->
        <h2>{{ zeroTrustData.companyName }}</h2>
      </v-col>
    </v-row>

    <!-- Overall Zero-Trust Score and Color Chart Side by Side -->
    <v-row>
      <!-- Left Column: Progress Bars for Zero-Trust Score and Individual Metrics -->
      <v-col cols="8">
        <!-- Display the overall Zero-Trust Score -->
        <h3>Zero-Trust Score: {{ zeroTrustData.ZeroTrustScore }}</h3>

        <!-- Display the progress bar for the Zero-Trust Score -->
        <!-- The width of the bar is set dynamically using the score (percentage) and the color is set by getBarColor() method -->
        <div 
          class="manual-progress-bar" 
          :style="{ width: zeroTrustData.ZeroTrustScore + '%', height: '8px', backgroundColor: getBarColor(zeroTrustData.ZeroTrustScore) }">
        </div>

        <!-- Loop over each metric in the metrics object to display progress bars for individual metrics -->
        <!-- v-for: This is a Vue directive for iterating over the metrics object -->
        <v-row v-for="(value, key) in zeroTrustData.metrics" :key="key">
          <v-col>
            <!-- Display each metric's name and value -->
            <p>{{ key }}: {{ value }}</p>

            <!-- Progress bar for each metric: the width is set according to the metric's value -->
            <!-- The color of the bar is determined by the getBarColor() method based on the metric value -->
            <div 
              class="manual-progress-bar" 
              :style="{ width: value + '%', height: '8px', backgroundColor: getBarColor(value) }">
            </div>
          </v-col>
        </v-row>
      </v-col>

      <!-- Right Column: Color Legend (for explaining what the colors represent) -->
      <v-col cols="4">
        <h3>Color Chart</h3>
        <!-- List that shows what each color in the progress bars represents -->
        <!-- Red, Yellow, and Green correspond to different score ranges -->
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

    <!-- Additional Observable Data Section -->
    <v-row>
      <v-col>
        <h3>Additional Observable Data</h3>
        <!-- Iterate over the observableData object and display each key-value pair -->
        <!-- This section displays more technical data related to security, like TLS version, open ports, etc. -->
        <div v-for="(value, key) in zeroTrustData.observableData" :key="key">
          <p>{{ key }}: {{ value }}</p>
        </div>
      </v-col>
    </v-row>

    <!-- Risk Category Section (Displays the Risk Category with a specific alert type) -->
    <v-row>
      <v-col>
        <!-- The v-alert component is styled based on the riskColor computed property -->
        <!-- The risk category could be "Low Risk", "Moderate Risk", or "High Risk", and the color of the alert changes accordingly -->
        <v-alert :type="riskColor" outlined>
          Risk Category: {{ zeroTrustData.riskCategory }}
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
      // Mock data representing the company's Zero-Trust Score and its metrics
      zeroTrustData: {
        companyName: "FinTechSecure Ltd.", // Company name
        ZeroTrustScore: 58.5, // Overall Zero-Trust Score
        metrics: {
          "Firewall Score": 75, // Example security metrics with scores
          "Encryption Score": 65,
          "Access Control Score": 35,
        },
        // Additional technical data related to security, represented as key-value pairs
        observableData: {
          averageShannonEntropyScore: 7.8,
          firewallDetected: true,
          DNSsecEnabled: true,
          tlsVersion: "1.2",
          certificateBitStrength: 2048,
          securityHeadersImplemented: ["X-XSS-Protection", "X-Frame-Options"],
          openPortsDetected: 12,
        },
        // Risk category based on the overall security assessment
        riskCategory: "Moderate Risk",
      },
    };
  },
  computed: {
    // Compute the color of the v-alert based on the risk category
    // This function maps risk levels to Vuetify alert types (success, warning, error, etc.)
    riskColor() {
      switch (this.zeroTrustData.riskCategory) {
        case "Low Risk":
          return "success"; // Green for Low Risk
        case "Moderate Risk":
          return "warning"; // Yellow for Moderate Risk
        case "High Risk":
          return "error"; // Red for High Risk
        default:
          return "info"; // Default color for unknown risk
      }
    },
  },
  methods: {
    // Function to return the color of the progress bar based on the value (score)
    // This method assigns:
    // - Red for scores below 50,
    // - Yellow for scores between 50 and 70,
    // - Green for scores above 70.
    getBarColor(value) {
      if (value < 50) return 'red';   // Red for low scores
      if (value < 70) return 'yellow'; // Yellow for mid-range scores
      return 'green';                 // Green for high scores
    },
  },
};
</script>

<style scoped>
/* CSS for the progress bar, with a transition to animate the width changes */
.manual-progress-bar {
  width: 0;
  background-color: green;
  transition: width 0.3s ease; /* Smooth transition of width over 0.3s */
}

/* CSS for the color legend section */
.color-legend {
  list-style-type: none; /* Removes bullet points from list */
  padding: 0;
}

/* Each item in the legend has a small color box */
.color-legend li {
  display: flex;
  align-items: center; /* Vertically aligns the color box and text */
  margin-bottom: 8px; /* Adds some space between items */
}

/* The small color box to represent the score color */
.color-box {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 8px; /* Space between the color box and the label */
  border: 1px solid #000; /* Adds a border around the color box */
}
</style>





















