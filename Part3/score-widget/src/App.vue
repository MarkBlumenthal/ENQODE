<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Use the ZeroTrustScoreWidget component and pass JSON data -->
        <ZeroTrustScoreWidget :data="zeroTrustData" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ZeroTrustScoreWidget from './components/ZeroTrustScoreWidget.vue';

export default {
  name: 'App',
  components: {
    ZeroTrustScoreWidget,
  },
  data() {
    return {
      zeroTrustData: {
        companyName: "FinTechSecure Ltd.",
        ZeroTrustScore: 58.5,
        metrics: {
          "Firewall Score": 75,
          "Encryption Score": 65,
          "Access Control Score": 50,
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
};
</script>

