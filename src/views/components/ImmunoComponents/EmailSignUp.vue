<template>
    <section class="section section-shaped section-lg my-0">

        <div class="shape shape-style-1 shape-primary">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <icon name="ni ni-spaceship" size="lg" class="bg-gradient-white" color="primary" shadow rounded></icon></br></br>
                                <medium>Sign up now for free beta access</medium>
                            </div>
                            <form role="form">
                                <template>
                                <mailchimp-subscribe
                                    url="https://immunoblock.us19.list-manage.com/subscribe/post-json"
                                    user-id="ba81e1fd832901405a429867c"
                                    list-id="183d31cdd6"
                                    @error="onError"
                                    @success="onSuccess"
                                >
                                    <template v-slot="{ subscribe, setEmail, error, success, loading }">
                                    <form @submit.prevent="subscribe">
                                        <!--Has to be of type input (and not base-input) - style it up afterwards -->
                                        <div class="text-center">
                                            <input style="width:100%"
                                                class="mb-3 text-center"
                                                placeholder="Email Address"
                                                addon-left-icon="ni ni-email-83"
                                                @input="setEmail($event.target.value)"
                                                type="email">
                                            </input>
                                        </div>
                                         <div class="text-center">
                                            <button type="submit" class="my-4 btn btn-primary" >Sign Up</button>
                                        </div>
                                        <div class="text-center" v-if="error">{{ error }}</div>
                                        <div class="text-center" v-if="success">Thanks for signing up! </br> Check your inbox for Our Welcome Email </div>
                                        <div class="text-center" v-if="loading">Loading…</div>
                                    </form>
                                    </template>
                                </mailchimp-subscribe>
                                </template>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MailchimpSubscribe from 'vue-mailchimp-subscribe';


    export default {
        components: {
            MailchimpSubscribe,
        },
        methods: {
            onError() {
            // handle error
            console.log('SHeeett')
            },
            onSuccess() {
            // handle success
            console.log('Success mufa')
            },
        },
    }

</script>
<style>
</style>
