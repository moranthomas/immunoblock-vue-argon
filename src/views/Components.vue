<template>
    <div>
        <hero></hero>
        <javascript-components></javascript-components>
        <carousel></carousel>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";

export default {
  name: "components",
  components: {
    Hero,
    JavascriptComponents,
    Carousel,
  }
};
</script>
