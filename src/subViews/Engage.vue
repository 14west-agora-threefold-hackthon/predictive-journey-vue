<template>
    <div>
        <Header />
        <div class="container">
            <div class="content">
                <h1>Welcome back to the club Mark</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, assumenda illum nemo itaque, eligendi voluptates, cupiditate ab porro dolores amet minus inventore impedit esse exercitationem vel obcaecati. Soluta, sunt. Voluptates!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit maiores porro et atque voluptatem sit nulla totam distinctio adipisci error tempore facilis sed similique eligendi sapiente quaerat labore, laboriosam quidem.</p>
                <chat-bot />
                <getting-started />

                <faq />
                
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
//Import Components
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Faq from '@/components/Faq.vue'
import GettingStarted from '@/components/GettingStarted.vue'
import ChatBot from '@/components/ChatBot.vue'
export default {
    name: 'Engage',
    components: {
        Header,
        Footer,
        Faq,
        GettingStarted,
        ChatBot
    }
}
</script>

<style>

</style>