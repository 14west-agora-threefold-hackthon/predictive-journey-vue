<template>
    <div>
        <convert v-if="fakeData === 'convert'"/>
        <adopt v-if="fakeData === 'adopt'"/>
        <engage v-if="fakeData === 'engage'"/>
        <aquire v-if="fakeData === 'aquire'"/>
    </div>
</template>

<script>
import Convert from '@/components/Convert.vue'
import Adopt from '@/components/Adopt.vue'
import Engage from '@/components/Engage.vue'
import Aquire from '@/components/Aquire.vue'
export default {
    name: 'Home',
    components: {
        Convert,
        Adopt,
        Engage,
        Aquire
    },
    data () {
    return {
      fakeData: 'adopt'
    }
  },
}
</script>

<style>

</style>