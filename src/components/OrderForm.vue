<template> 
    <section class="form-container">
        <h1>Purchase the “Begin Investing” Package</h1>
        <p>Purchasing this you will get <strong>advice, ideas</strong> and <strong>practical tips</strong> to become an investing powerhouse so that you can <strong>make more money!</strong></p>
  <b-steps v-model="activeStep" :has-navigation="hasNavigation" aria-current-label="2" aria-page-label="2" type="is-success" v-on:change="onChange">
            <b-step-item label="Your Details" ></b-step-item>
            <customer-info v-if="step === 0" />
            <b-step-item label="Shopping Details" ></b-step-item>
            <shipping-details v-if="step === 1" />
            <b-step-item label="Payment" ></b-step-item>
            <payment-details v-if="step === 2"/>
             <template
                v-if="true"
                slot="navigation"
                slot-scope="{previous, next}">
                <b-button
                    type="custom-button"
                    icon-left="arrow-left"
                    :disabled="previous.disabled"
                    @click.prevent="previous.action">
                    Previous
                </b-button>
                <b-button
                    type="custom-button"
                    icon-right="arrow-right"
                    :disabled="next.disabled"
                    @click.prevent="next.action">
                    Next
                </b-button>
            </template>
        </b-steps>

       
    </section>
</template>

<script>
import CustomerInfo from '@/components/CustomerInfo.vue'
import ShippingDetails from '@/components/ShippingDetails.vue'
import PaymentDetails from '@/components/PaymentDetails.vue'
    export default {
        name: 'OrderForm',
        components: {
            CustomerInfo,
            ShippingDetails,
            PaymentDetails
        },
        data() {
            return {
                step: 1,
                showButtons: false,
                activeStep: 1,
                showSocial: false,
                isAnimated: true,
                hasNavigation: false,
                customNavigation: false,
                isStepsClickable: false,
                isProfileSuccess: false
            }
        },
        methods: {
           onChange: function (change){
               this.step = change
           }
        }
    }
</script>

<style lang="scss">
    .form-container {
        margin-top: -4em;
        background: white;
        padding: 1em;
        border-radius: 10px;
    }
    .step-items{
        list-style: none !important;
    }
</style>