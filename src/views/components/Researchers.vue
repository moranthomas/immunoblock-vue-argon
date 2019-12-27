<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">Introduction for Researchers</h1>
                    <p class="lead text-white mt-4">This platform will help match patients with trials.</p>
                    <a href="#"
                       class="btn btn-white mt-4">Learn More</a>
                </div>

                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                    <img src="img/medico_service.png" style="width: 450px;" class="img-fluid">
                        <!--<b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <b-carousel-slide img-src="img/medico_service.png"></b-carousel-slide>
                        </b-carousel>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
