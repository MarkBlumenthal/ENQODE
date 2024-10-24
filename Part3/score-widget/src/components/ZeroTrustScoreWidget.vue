<template>
  <v-container>
    <!-- Company Name -->
    <v-row>
      <v-col>
        <h2>{{ data.companyName }}</h2>
      </v-col>
    </v-row>

    <!-- Overall Zero-Trust Score -->
    <v-row>
      <v-col>
        <h3>Zero-Trust Score: {{ data.ZeroTrustScore }}</h3>
        <!-- Manual Progress Bar for Zero-Trust Score -->
        <div 
          class="manual-progress-bar" 
          :style="{ width: data.ZeroTrustScore + '%', height: '8px', backgroundColor: getBarColor(data.ZeroTrustScore) }">
        </div>
      </v-col>
    </v-row>

    <!-- Individual Metrics -->
    <v-row v-for="(value, key) in data.metrics" :key="key">
      <v-col>
        <p>{{ key }}: {{ value }}</p>
        <!-- Manual Progress Bar for each metric -->
        <div 
          class="manual-progress-bar" 
          :style="{ width: value + '%', height: '8px', backgroundColor: getBarColor(value) }">
        </div>
      </v-col>
    </v-row>

    <!-- Observable Data -->
    <v-row>
      <v-col>
        <h3>Additional Observable Data</h3>
        <div v-for="(value, key) in data.observableData" :key="key">
          <p>{{ key }}: {{ value }}</p>
        </div>
      </v-col>
    </v-row>

    <!-- Risk Category -->
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
  props: {
    data: {
      type: Object,
      required: true,
    },
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
    },
  },
  methods: {
    // Dynamically assign color based on value ranges
    getBarColor(value) {
      if (value < 50) return 'red';   // Red for values below 50
      if (value < 70) return 'yellow'; // Yellow for values between 50 and 70
      return 'green';                 // Green for values 70 and above
    },
  },
};
</script>

<style scoped>
.manual-progress-bar {
  width: 0;
  background-color: green;
  transition: width 0.3s ease;
}
h2 {
  margin-bottom: 20px;
}
v-alert {
  margin-top: 20px;
}
</style>

















