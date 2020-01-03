<template>
    <div>
        <hero></hero>
        <intro></intro>
        <hero2></hero2>
        <problems></problems>
        <researchers></researchers>
        <security></security>
        <advocates2></advocates2>
        <access></access>
        <patients></patients>
    </div>
</template>
<script>
import Hero from "./components/ImmunoComponents/Hero";
import Hero2 from "./components/ImmunoComponents/Hero2";
import Intro from "./components/ImmunoComponents/Intro";
import Security from "./components/ImmunoComponents/Security";
import Researchers from "./components/ImmunoComponents/Researchers";
import Patients from "./components/ImmunoComponents/Patients";
import Access from "./components/ImmunoComponents/Access";
import Problems from "./components/ImmunoComponents/Problems";
import Advocates2 from "./components/ImmunoComponents/Advocates2";

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
    Problems,
    Advocates2,
  }
};
</script>
