<template>
  <form @submit.prevent="send" class="text-lg lg:text-2xl space-y-6 lg:space-y-8">
    <p v-show="error" class="text-brand-primary">{
      An error occurred. Please try your request again.
    </p>
    <div v-show="success" class="text-green-600 space-y-4">
      <p>Thank you for your interest in LifePlus. We have received your enquiry and we will be in touch with you soon.</p>
      <p>If you have submitted an employment application, then we will contact you directly if you have been selected for the next stage of the application process.</p>
    </div>
    <div>
      <p class="font-medium mb-2">What would you like to contact us about? <span class="text-red-600">*</span></p>
      <div class="text-gray-700 space-y-2 mb-6">
        <div class="flex items-center">
          <input v-model="data.question" value="Career opportunities" id="enquiries" name="question" type="radio" class="focus:ring-brand-purple h-4 w-4 text-brand-purple border-gray-300" />
          <label for="enquiries" class="ml-3 block text-black">
            Career opportunities
          </label>
        </div>
        <div class="flex items-center">
          <input v-model="data.question" value="Making a donation" id="opps" name="question" type="radio" class="focus:ring-brand-purple h-4 w-4 text-brand-purple border-gray-300" />
          <label for="opps" class="ml-3 block text-black">
            Making a donation
          </label>
        </div>
        <!-- <div class="flex items-center">
          <input v-model="data.question" value="US Employment" id="us-emp" name="question" type="radio" class="focus:ring-brand-purple h-4 w-4 text-brand-purple border-gray-300" />
          <label for="us-emp" class="ml-3 block text-black">
            US Employment
          </label>
        </div> -->
        <div class="flex items-center">
          <input v-model="data.question" value="Partner with LifePlus" id="other-details" name="question" type="radio" class="focus:ring-brand-purple h-4 w-4 text-brand-purple border-gray-300" />
          <label for="other-details" class="ml-3 block text-black">
            Partner with LifePlus
          </label>
        </div>
      </div>
    </div>

    <div>
      <div class="mb-1">
        <label class="font-medium" for="name">Your name? <span class="text-red-600">*</span></label>
      </div>
      <div>
        <AppInput v-model="data.name" id="name" placeholder="Jane Smith" required />
      </div>
    </div>
    <div>
      <div class="mb-1">
        <label class="font-medium" for="email">Your email? <span class="text-red-600">*</span></label>
      </div>
      <div>
        <AppInput v-model="data.email" type="email" id="email" placeholder="jane@gmail.com" required />
      </div>
    </div>
    <div>
      <div class="mb-1">
        <label class="font-medium" for="phone">Your phone number (including country code)</label>
      </div>
      <div>
        <AppInput v-model="data.phone" type="tel" id="phone" placeholder="########" />
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
      question: '',
      name: '',
      email: '',
      phone: '',
    })
    const error = ref(false)
    const success = ref(false)
    const buttonText = ref('Send enquiry...')
    const send = async () => {
      error.value = false
      success.value = false
      loading.true = false

      try {
        await axios.post(`/.netlify/functions/submit-contact`, data)
        success.value = true
        data.question = ''
        data.name = ''
        data.email = ''
        data.phone = ''
      } catch (e) {
        error.value = true
      }

      loading.value = false
      buttonText.value = 'Send enquiry...'
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