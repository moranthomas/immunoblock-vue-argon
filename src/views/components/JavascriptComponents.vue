<template>
    <section class="section section-components">
        <div class="container">
            <h3 class="h4 text-success font-weight-bold mb-4">Tabs</h3>
            <tabs-section></tabs-section>
            <progress-section></progress-section>
            <!-- Images -->
            <h2 class="mt-lg mb-5">
                <span>Images</span>
            </h2>
            <images></images>
        </div>
    </section>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Modals from "./JavascriptComponents/Modals";
const Tooltips = () => import("./JavascriptComponents/Tooltips");
const DatePickers = () => import("./JavascriptComponents/DatePickers");
import Images from "./JavascriptComponents/Images";
import TabsSection from "./JavascriptComponents/TabsSection";
import ProgressSection from "./JavascriptComponents/ProgressPagination";
import Typography from "./JavascriptComponents/Typography";

export default {
  components: {
    //DatePickers,
    Images,
    //Modals,
    TabPane,
    Tabs,
    TabsSection,
    //ProgressSection,
    //Typography,
    //Tooltips
  }
};
</script>
<style>
</style>
