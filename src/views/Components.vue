<template>
    <div>
        <hero></hero>
        <intro></intro>
        <hero2></hero2>
        <security></security>
        <researchers></researchers>
        <access></access>
        <patients></patients>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Intro from "./components/Intro";
import Security from "./components/Security";
import Researchers from "./components/Researchers";
import Patients from "./components/Patients";
import Access from "./components/Access";

export default {
  name: "components",
  components: {
    Hero,
    Intro,
    Hero2,
    Security,
    Researchers,
    Access,
    Patients,
  }
};
</script>
