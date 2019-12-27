<template>
    <section class="section section-components">

    <!--<div class="container shape-container d-flex align-items-center">-->
        <div class="container">
            <!-- Images -->
            <h2 class="mt-lg mb-5">
                <span class="">Introduction</span>
            </h2>
            <intro-images></intro-images>
        </div>
            </br>
            </br>


        <div class="container">
                <h4 class="h5 flex-column flex-md-row  mb-4">A platform for improving outcomes for patients with autoimmune disorders
                by placing them at the centre of their healthcare data and helping organizations to accelerate research in immune-related chronic diseases.</h4>
        </div>

         </br>
        </br>

    </section>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import IntroImages from "./JavascriptComponents/IntroImages.vue";
import HippaImages from "./JavascriptComponents/HippaImages.vue";
import TabsSection from "./JavascriptComponents/TabsSection";

export default {
  components: {
    HippaImages,
    IntroImages,
    TabPane,
    Tabs,
    TabsSection,
  }
};
</script>
<style>
</style>
