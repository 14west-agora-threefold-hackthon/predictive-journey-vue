<template>
    <div>
        <Header />
        <div class="container">
            <div class="content">
                <h1>Your Content</h1>
                <h2>Radical Investor Premium</h2>
                <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                        <p class="title">Acticle 1</p>
                        <p class="subtitle">lorem ipsum </p>
                        </article>
                        <article class="tile is-child notification is-warning">
                        <p class="title">Acticle 2</p>
                        <p class="subtitle">lorem ipsum </p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                        <p class="title">Acticle 3</p>
                        <p class="subtitle">lorem ipsum </p>
                        </article>
                    </div>
                    </div>
                    <div class="tile is-parent">
                    <article class="tile is-child notification is-danger">
                        <p class="title">Acticle 4</p>
                        <p class="subtitle">lorem ipsum </p>
                        <div class="content">
                        <!-- Content -->
                        </div>
                    </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">Acticle 5</p>
                        <p class="subtitle">lorem ipsum </p>
                        <div class="content">
                        <!-- Content -->
                        </div>
                    </div>
                    </article>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
//Import Components
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Purchase',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>