<template>
    <section class="section section-components">
        <div class="container">
            <!-- Images -->
            <h2 class="mt-lg mb-5">
                <span>Compliance and Security</span>
            </h2>
            <images></images>

 <tabs fill class="flex-column flex-md-row">
             <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                            american apparel, butcher voluptate nisi qui.</p>
 </tabs>
             <h3 class="h4 text-success font-weight-bold mb-4">Tabs</h3>
            <tabs-section></tabs-section>


        </div>
    </section>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Images from "./JavascriptComponents/Images";
import TabsSection from "./JavascriptComponents/TabsSection";

export default {
  components: {
    Images,
    TabPane,
    Tabs,
    TabsSection,
  }
};
</script>
<style>
</style>
