<template>
    <section class="section section-components">


        <div class="container">
            <!-- Images -->
            <h2 class="mt-lg mb-5">
                <span>Compliance and Security</span>
            </h2>

            <h4 class="h5 flex-column flex-md-row  mb-4">
            Immunoblock allows you to comply with health data regulations such as HIPAA, GDPR and CCPA.
            </h4>

            </br>
            </br>

            <hippa-images></hippa-images>

            </br>
            </br>

        </div>


    </section>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import IntroImages from "./JavascriptComponents/IntroImages.vue";
import HippaImages from "./JavascriptComponents/HippaImages.vue";
import NucypherImages from "./JavascriptComponents/NucypherImages.vue";
import TabsSection from "./JavascriptComponents/TabsSection";

export default {
  components: {
    HippaImages,
    IntroImages,
    NucypherImages,
    TabPane,
    Tabs,
    TabsSection,
  }
};
</script>
<style>
</style>
