<template>
  <form @submit.prevent="send" class="text-lg lg:text-2xl space-y-6 lg:space-y-8">
    <p v-show="error" class="text-brand-primary">
      An error occurred. Please try your request again.
    </p>
    <div v-show="success" class="text-green-600 space-y-4">
      <p>Thank you for your interest in the referral program! We will let you know when the candidate has been hired and then we will contact you about receiving the referral award. Word-of-mouth is the most successful way to hire called and qualified candidates, so we appreciation your recommendations. We could not do this without you!</p>
    </div>

    <div>
      <div class="mb-1">
        <label class="font-medium" for="emp_name">Your name? <span class="text-red-600">*</span></label>
      </div>
      <div>
        <AppInput v-model="data.emp_name" id="emp_name" placeholder="Jane Smith" required />
      </div>
    </div>
    <div>
      <div class="mb-1">
        <label class="font-medium" for="emp_email">Your email? <span class="text-red-600">*</span></label>
      </div>
      <div>
        <AppInput v-model="data.emp_email" id="emp_email" type="email" placeholder="jane.smith@lifeplusworldwide.com" required />
      </div>
    </div>
    <div>
      <div class="mb-1">
        <label class="font-medium" for="ref_name">Referred applicant’s name? <span class="text-red-600">*</span></label>
      </div>
      <div>
        <AppInput v-model="data.ref_name" id="ref_name" placeholder="Mike Jones" required />
      </div>
    </div>
    <div>
      <div class="mb-1">
        <label class="font-medium" for="ref_email">Referred applicant’s email? <span class="text-red-600">*</span></label>
      </div>
      <div>
        <AppInput v-model="data.ref_email" id="ref_email" type="email" placeholder="mike@email.com" required />
      </div>
    </div>

    <div>
      <button class="inline-flex items-center space-x-4 group font-bold h-12">
        <span>{{ buttonText }}</span>
        <transition
          leave-active-class="transition-all ease-in-out duration-500"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="translate-x-4 opacity-0"
          @after-leave="buttonText = 'Sending...'"
        >
          <div v-if="!loading" class="flex-1 h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-brand-primary text-white transition-transform group-hover:translate-x-2">
            <ArrowRightIcon class="w-5 h-5 fill-current" />
          </div>
        </transition>
      </button>
    </div>
  </form>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
import AppInput from '../components/forms/AppInput.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'

export default {
  components: {
    AppInput,
    ArrowRightIcon,
  },

  setup () {
    const loading = ref(false)
    const data = reactive({
      emp_name: '',
      emp_email: '',
      ref_name: '',
      ref_email: '',
    })
    const error = ref(false)
    const success = ref(false)
    const buttonText = ref('Submit...')
    const send = async () => {
      error.value = false
      success.value = false
      loading.value = true

      try {
        await axios.post(`/.netlify/functions/submit-referral`, data)
        success.value = true
        data.emp_name = ''
        data.emp_email = ''
        data.ref_name = ''
        data.ref_email = ''
      } catch (e) {
        error.value = true
      }

      loading.value = false
      buttonText.value = 'Submit...'
    }

    return {
      data,
      send,
      loading,
      error,
      success,
      buttonText,
    }
  },
}
</script>