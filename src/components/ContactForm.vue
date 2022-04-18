<template>
  <form @submit.prevent="send" class="text-lg lg:text-2xl space-y-6 lg:space-y-8">
    <div>
      <p class="font-medium mb-2">Who can best help you with your question? <span class="text-red-600">*</span></p>
      <div class="text-gray-700 space-y-2 mb-6">
        <div class="flex items-center">
          <input v-model="data.question" value="Employment Inquiries" id="enquiries" name="question" type="radio" class="focus:ring-brand-purple h-4 w-4 text-brand-purple border-gray-300" />
          <label for="enquiries" class="ml-3 block text-black">
            Employment Inquiries
          </label>
        </div>
        <div class="flex items-center">
          <input v-model="data.question" value="Donor Opportunities" id="opps" name="question" type="radio" class="focus:ring-brand-purple h-4 w-4 text-brand-purple border-gray-300" />
          <label for="opps" class="ml-3 block text-black">
            Donor Opportunities
          </label>
        </div>
        <div class="flex items-center">
          <input v-model="data.question" value="US Employment" id="us-emp" name="question" type="radio" class="focus:ring-brand-purple h-4 w-4 text-brand-purple border-gray-300" />
          <label for="us-emp" class="ml-3 block text-black">
            US Employment
          </label>
        </div>
        <div class="flex items-center">
          <input v-model="data.question" value="Other Details Needed" id="other-details" name="question" type="radio" class="focus:ring-brand-purple h-4 w-4 text-brand-purple border-gray-300" />
          <label for="other-details" class="ml-3 block text-black">
            Other Details Needed
          </label>
        </div>
      </div>
    </div>

    <div>
      <div class="mb-1">
        <label class="font-medium" for="name">What's your name? <span class="text-red-600">*</span></label>
      </div>
      <div>
        <AppInput v-model="data.name" id="name" placeholder="Jane Smith" />
      </div>
    </div>
    <div>
      <div class="mb-1">
        <label class="font-medium" for="email">What's your email? <span class="text-red-600">*</span></label>
      </div>
      <div>
        <AppInput v-model="data.email" type="email" id="email" placeholder="jane@gmail.com" />
      </div>
    </div>
    <div>
      <div class="mb-1">
        <label class="font-medium" for="phone">What's your phone number?</label>
      </div>
      <div>
        <AppInput v-model="data.phone" type="tel" id="phone" placeholder="########" />
      </div>
    </div>

    <div>
      <button class="inline-flex items-center space-x-4 group font-bold">
        <span>Send enquiry...</span>
        <div class="flex-1 h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-brand-primary text-white transition-transform group-hover:translate-x-2">
          <ArrowRightIcon class="w-5 h-5 fill-current" />
        </div>
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
    const send = async () => {

    }

    return {
      data,
      send,
      loading,
    }
  },
}
</script>