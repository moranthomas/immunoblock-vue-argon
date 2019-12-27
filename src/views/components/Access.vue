<template>
    <section class="section section-components">
        <div class="container">

            <h2 class="mt-lg mb-5">
                <span class="">Dynamic Access Control</span>
            </h2>

            <h4 class="h5 flex-column flex-md-row  mb-4">Conditionally grant and revoke access to sensitive data across public networks to an arbitrary numbers of recipients.</h4>

          <ul>
            <li>Proxy Re-encryption (PRE) network provides cryptographic access controls for distributed apps and protocols.</li>
            <li>We use a type of public-key encryption (PKE) that allows a proxy entity to transform or re-encrypt data from one public key to another, without having access to the underlying plaintext or private keys.</li>
            <li>Fully Homomorphic Encryption (FHE) is a form of encryption that allows arbitrary, secure computation on encrypted data (meaning encrypted data can be processed without needing to decrypt it first). </li>
            <li>Operations on the encrypted data are applied as if being performed on the plaintext data.</li>
            <li>Secret Storage - Store encrypted secrets in any storage backend (S3, IPFS, Swarm, etc.).</li>
            <li>Access Provisioning - Conditionally grant and revoke access to secrets (e.g. time-based, behavior-based access).</li>
          </ul>



            <nucypher-images></nucypher-images>
            </br>
            </br>

        </div>


    </section>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import IntroImages from "./JavascriptComponents/IntroImages.vue";
import HippaImages from "./JavascriptComponents/HippaImages.vue";
import NucypherImages from "./JavascriptComponents/NucypherImages.vue";
import TabsSection from "./JavascriptComponents/TabsSection";

export default {
  components: {
    HippaImages,
    IntroImages,
    NucypherImages,
    TabPane,
    Tabs,
    TabsSection,
  }
};
</script>
<style>
</style>
