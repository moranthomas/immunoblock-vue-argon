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
            <blockquote class="blockquote">
                <p class="lead">"A platform for improving outcomes for patients with autoimmune disorders
                by placing them at the centre of their healthcare data and helping organizations to accelerate research in immune-related chronic diseases."
                </p>
            </blockquote>
        </div>

         </br>
        </br>

    </section>
</template>
<script>
import IntroImages from "../ImageComponents/IntroImages.vue";


export default {
  components: {
    IntroImages,
  }
};
</script>
<style>
</style>
