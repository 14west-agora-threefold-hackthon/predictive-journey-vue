<template>
    
    <div class="aquire">
        <signup-box />
    </div>

</template>

<script>
import SignupBox from '@/components/SignupBox.vue'
export default {
    name: 'Aquire',
    components: {
        SignupBox
    }
}
</script>

<style lang="scss" scoped>
.aquire{
    background-image: linear-gradient(297.24deg, #FBAB7E 0%, #F7CE68 100%);
    height: 100vh;
}
</style>