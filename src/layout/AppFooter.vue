<template>
    <footer class="footer has-cards">
        <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/register" title="Landing Page">
                            <img v-lazy="'img/setl/workflow.svg'" class="card-img" style="height: 424px;">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/register" title="Profile Page">
                            <img v-lazy="'img/patient2.png'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h4 class="text-primary font-weight-light mb-2">Thank you for your interest!</h4>
                    <h5 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h5>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">

                    <a target="_blank" rel="noopener" href="https://twitter.com/BlockImmuno"
                         data-toggle="tooltip" data-original-title="Follow us"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://medium.com/@immunoblock"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us on Medium">
                        <i class="fa fa-medium"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/immuno_block/"
                       class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/moranthomas/ImmunoBlock"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                         <img src="img/Imblock Trans Logo 1.png" style="width: 150px;">
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                    </div>
                </div>

                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="#" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://medium.com/@immunoblock" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
