<template>
    <section class="section section-components">
        <div class="container">

            <h2 class="mt-lg mb-5">
                <span class="">Our Solutions</span>
            </h2>

          <h4 class="h5 flex-column flex-md-row  mb-4">1 - Health Wallet</h4>

          <ul>
            <li>A single view into all of your relevant health data, and the ability to share, sell or use this data as you see fit.</li>
            <li>The platform leverages technology to enable data from disparate sources to be brought together in a single unified way.</li>
            <li>With your consent your data can be used to provide you with insights into the latest research on your conditions.</li>
            <li>Our health wallet can be used and to share your health data quickly and easily while still maintaining HIPAA compliance.</li>
          </ul>

            <solution-images></solution-images>

            </br>
            </br>

          <h4 class="h5 flex-column flex-md-row  mb-4">2 - Consent Management Platform</h4>

          <ul>
            <li>The platform is built on a permission-based architecture which allows varying access levels.</li>
            <li>letting users control who can view their records, how much they see and for what length of time.</li>
            <li>The patient grants access of personal health data to researchers in return for incentivisation with tokens.</li>
          </ul>

            </br>
            </br>


            <div class="row justify-content-center align-items-center">
              <div class="col-lg-7 text-center pt-lg">
                  <img v-lazy="'img/setl/timeline.svg'" alt="Raised image" style="width: 600px;" class="img-fluid">
              </div>
            </div>

            </br>
            </br>

          <h4 class="h5 flex-column flex-md-row  mb-4">3 - Targeted Research Marketplace </h4>
          <ul>
            <li>The platform provides the ability for researchers and companies to intelligently identify potential clinical trial participants.</li>
            <li>It also gives the ability to solicit client participation or provide incentivisation without compromising the individual’s anonymity.</li>
            <li>This allows researchers to target their recruitment efforts specifically to individuals who fit a certain medical history or profile.</li>
            <li>By eliminating the dependency on intermediaries this reduces risk and increases efficacy of trials by tailoring recruitment.</li>
          </ul>

            </br>
            </br>

          <h4 class="h5 flex-column flex-md-row  mb-4">4 - Advanced Insights & Analytics </h4>
          <ul>
            <li>Researchers and patients  benefit from increased visibility into the incidence and prevalence of specific autoimmune disorders.</li>
            <li>Access to global trends across all autoimmune related diseases.</li>
          </ul>

            </br>
            </br>





        </div>


    </section>
</template>
<script>
import SolutionImages from "../ImageComponents/SolutionImages.vue";

export default {
  components: {
    SolutionImages,
  }
};
</script>
<style>
</style>
