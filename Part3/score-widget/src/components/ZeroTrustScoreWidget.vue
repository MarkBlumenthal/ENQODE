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
        <!-- Explicit inline style for color -->
        <v-progress-linear :value="data.ZeroTrustScore" max="100" style="background-color: #E3F2FD;" bar-color="#1976D2" />
      </v-col>
    </v-row>

    <!-- Individual Metrics -->
    <v-row v-for="(value, key) in data.metrics" :key="key">
      <v-col>
        <p>{{ key }}: {{ value }}</p>
        <!-- Explicit inline style for color -->
        <v-progress-linear :value="value" max="100" style="background-color: #E8F5E9;" bar-color="#4CAF50" />
      </v-col>
    </v-row>

    <!-- Observable Data (optional display) -->
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
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
v-alert {
  margin-top: 20px;
}
</style>



