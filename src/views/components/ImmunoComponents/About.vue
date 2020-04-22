<template>
    <div>
        <solutions-hero></solutions-hero>
        <solutions></solutions>
    </div>
</template>
<script>
import SolutionsHero from "./SolutionsHero";
import Solutions from "./Solutions";

export default {
  name: "components",
  components: {
    SolutionsHero,
    Solutions,
  }
};
</script>
