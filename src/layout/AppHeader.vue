<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/IMMUNOBLOCK-NO-TEXT.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/IMMUNOBLOCK-NO-TEXT.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">About</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white"> </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">What is ImmunoBlock?</h6>
                                <p class="description d-none d-md-inline-block mb-0">ImmunoBlock is the world's first fully secure health data sharing platform</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Compliance and Data Security</h5>
                                <p class="description d-none d-md-inline-block mb-0">Our state of the art health wallet solution means that your healthcare data is secured and private</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Consent Management Platform</h5>
                                <p class="description d-none d-md-inline-block mb-0">Using our platform you own your health data and share it only  with who you decide</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-success rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-success mb-md-1">Targeted Marketplace</h5>
                                <p class="description d-none d-md-inline-block mb-0">Dedicated portals for Patients, Researchers, Providers and Advocates</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                 <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Problems</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white"> </div>
                            <div class="media-body ml-3">
                                <!--<h6 class="heading text-primary mb-md-1">People have limited access to their own data.</h6>
                                <p class="description d-none d-md-inline-block mb-0">People have limited access to their own data.</p>-->
                                <p class="text-dark">People have limited access to their health data</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-warning mb-md-1">Health data lives in silos</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Health data lives in silos, with little or no integration to other data sources.</p>-->
                                <p class="text-dark">Health data lives in silos</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-primary mb-md-1">Its hard to share health data</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Data Privacy regulations make it extremely hard to share data between people who need it</p>-->
                                <p class="text-dark">It's hard to share health data</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-success rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-dark mb-md-1">Autoimmune Diseases are an epidemic</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Autoimmunity is now one of the most common disease categories, ahead of cancer and heart disease</p>-->
                                <p class="text-dark">Autoimmune Disease is an Epidemic</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>

                <base-dropdown class="nav-item" menu-classes="dropdown-menu-lg">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Our Solutions</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white"> </div>
                            <div class="media-body ml-3">
                                <!--<h6 class="heading text-primary mb-md-1">People have limited access to their own data.</h6>
                                <p class="description d-none d-md-inline-block mb-0">People have limited access to their own data.</p>-->
                                <p class="text-dark">Health Wallet</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-warning mb-md-1">Health data lives in silos</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Health data lives in silos, with little or no integration to other data sources.</p>-->
                                <p class="text-dark">Consent Management</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-primary mb-md-1">Its hard to share health data</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Data Privacy regulations make it extremely hard to share data between people who need it</p>-->
                                <p class="text-dark">Research Marketplace</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-success rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-dark mb-md-1">Autoimmune Diseases are an epidemic</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Autoimmunity is now one of the most common disease categories, ahead of cancer and heart disease</p>-->
                                <p class="text-dark">Analytics and Trends</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>


                <base-dropdown class="nav-item" menu-classes="dropdown-menu-med">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Learn More</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white"> </div>
                            <div class="media-body ml-3">
                                <!--<h6 class="heading text-primary mb-md-1">People have limited access to their own data.</h6>
                                <p class="description d-none d-md-inline-block mb-0">People have limited access to their own data.</p>-->
                                <p class="text-dark">For Patients</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-warning mb-md-1">Health data lives in silos</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Health data lives in silos, with little or no integration to other data sources.</p>-->
                                <p class="text-dark">For Providers</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-primary mb-md-1">Its hard to share health data</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Data Privacy regulations make it extremely hard to share data between people who need it</p>-->
                                <p class="text-dark">For Researchers</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-success rounded-circle text-white"></div>
                            <div class="media-body ml-3">
                                <!--<h5 class="heading text-dark mb-md-1">Autoimmune Diseases are an epidemic</h5>-->
                                <!--<p class="description d-none d-md-inline-block mb-0">Autoimmunity is now one of the most common disease categories, ahead of cancer and heart disease</p>-->
                                <p class="text-dark">For Patient Advocates</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>



                <!-- <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Our Solutions</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">Health Wallet</router-link>
                    <router-link to="/landing" class="dropdown-item">Consent Management</router-link>
                    <router-link to="/profile" class="dropdown-item">Research Marketplace</router-link>
                    <router-link to="/register" class="dropdown-item">Analytics and Trends</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Learn More</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Patients</router-link>
                    <router-link to="/profile" class="dropdown-item">Providers</router-link>
                    <router-link to="/login" class="dropdown-item">Researchers</router-link>
                    <router-link to="/register" class="dropdown-item">Patient Advocates</router-link>
                </base-dropdown> -->



            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Connect</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
