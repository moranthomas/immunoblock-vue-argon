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
        <input type="email" @input="setEmail($event.target.value)" />
        <button type="submit">Submit</button>
        <div v-if="error">{{ error }}</div>
        <div v-if="success">Yay!</div>
        <div v-if="loading">Loading…</div>
      </form>
    </template>
  </mailchimp-subscribe>
</template>

<script>
    import MailchimpSubscribe from 'vue-mailchimp-subscribe'

    export default {
        components: {
            MailchimpSubscribe,
        },
    }
</script>
