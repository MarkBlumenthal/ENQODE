<template>
  <!-- The root component of the application -->
  <v-app>
    <!-- v-main: This is the main content area of the Vuetify app layout -->
    <v-main>
      <!-- v-container: Used to center and give some padding around the content -->
      <v-container>
        <!-- Use the ZeroTrustScoreWidget component -->
        <!-- Passing in the zeroTrustData object as a prop to the ZeroTrustScoreWidget component -->
        <!-- This allows the widget to access and display the Zero-Trust Score, metrics, and risk category -->
        <ZeroTrustScoreWidget :data="zeroTrustData" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// Import the ZeroTrustScoreWidget component, which is located in the components folder
// This allows us to use the widget in this App component
import ZeroTrustScoreWidget from './components/ZeroTrustScoreWidget.vue';

export default {
  name: 'App', // The name of the root component of the Vue.js application

  components: {
    // Register the ZeroTrustScoreWidget component so it can be used within this component
    ZeroTrustScoreWidget,
  },

  // Data function that defines the data model for this component
  data() {
    return {
      // Defining the zeroTrustData object which contains all the data that the ZeroTrustScoreWidget component will need
      zeroTrustData: {
        companyName: "FinTechSecure Ltd.", // Name of the company being evaluated
        ZeroTrustScore: 58.5, // The overall Zero-Trust Score for the company
        metrics: {
          // The security-related metrics, each with a score between 0 and 100
          "Firewall Score": 75, // How secure the company's firewall is (out of 100)
          "Encryption Score": 65, // How secure their encryption methods are (out of 100)
          "Access Control Score": 50, // The strength of their access control (out of 100)
        },
        // Additional security-related data points or "observable data"
        observableData: {
          averageShannonEntropyScore: 7.8, // A metric related to the randomness in the data (higher is more secure)
          firewallDetected: true, // Whether a firewall is detected in the company's infrastructure
          DNSsecEnabled: true, // Whether DNS security extensions are enabled
          tlsVersion: "1.2", // The version of the TLS protocol used (for secure communications)
          certificateBitStrength: 2048, // The bit strength of the company's SSL certificate (higher is more secure)
          securityHeadersImplemented: ["X-XSS-Protection", "X-Frame-Options"], // List of implemented security headers
          openPortsDetected: 12, // Number of open network ports detected (fewer is typically better for security)
        },
        // The risk category assigned to the company based on the Zero-Trust Score and metrics
        // Categories could include "Low Risk", "Moderate Risk", or "High Risk"
        riskCategory: "Moderate Risk",
      },
    };
  },
};
</script>


