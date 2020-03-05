<template>
<div class="convert">
    <hero />
    <div class="container">
        <div class="content">
            <order-form />
        </div>
    </div>
</div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import OrderForm from '@/components/OrderForm.vue'
export default {
    name: 'Convert',
    components: {
        Hero,
        OrderForm
    }
}
</script>

<style>
.convert{
    background: #DBDBDB;
    height: 100vh;
}
</style>