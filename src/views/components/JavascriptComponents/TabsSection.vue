<template>
    <div class="row justify-content-center">
        <div class="col-lg-12">

            <tabs fill class="flex-column flex-md-row">
                <card shadow slot-scope="{activeTabIndex}">
                    <tab-pane key="tab1">
                        <template slot="title">
                            <i class="ni mr-2"></i>For Patients
                        </template>

                        <p class="description">A portal that helps patients understand their autoimmune disorders by informing and educating them about the latest advances and treatments available while also giving them the opportunity to participate and get paid for research and clinical trials.</p>
                        <p class="description"> Their health data gets stored in an extremely secure way while allowing the patient full control over who sees their data.</p>
                    </tab-pane>

                    <tab-pane key="tab2">
                        <template slot="title">
                            <i class="ni  mr-2"></i>For Researchers
                        </template>

                       <p class="description">A portal that gives clinicians and medical researchers greater visibility into the incidence and prevalence of specific autoimmune disorders but also into the global trends across all related diseases.</p>
                    </tab-pane>

                    <tab-pane key="tab3">
                        <template slot="title">
                            <i class="ni  mr-2"></i>For Organizations
                        </template>

                        <p class="description">A portal that allows pharmaceutical researchers to find, invite (and incentivize) patients with a specific illness and profile that are interested in participating in upcoming research and clinical trials.</p>
                    </tab-pane>

                    <tab-pane key="tab3">
                        <template slot="title">
                            <i class="ni  mr-2"></i>For Advocates
                        </template>

                        <p class="description">A portal that allows patient advocacy organizations to advertise and reach new patients and get funded directly for specific disorders directly through the platform.</p>
                    </tab-pane>

                </card>
            </tabs>
        </div>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style>
</style>
