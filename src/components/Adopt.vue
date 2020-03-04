<template>
    <div>
        <Header />
        <div class="container">
            <div class="content">
                <h1>Welcome Mark</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, assumenda illum nemo itaque, eligendi voluptates, cupiditate ab porro dolores amet minus inventore impedit esse exercitationem vel obcaecati. Soluta, sunt. Voluptates!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit maiores porro et atque voluptatem sit nulla totam distinctio adipisci error tempore facilis sed similique eligendi sapiente quaerat labore, laboriosam quidem.</p>

                <h2>Lets get started</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id quae, odio deserunt cumque modi consectetur consequatur dolores rem quam voluptas quia temporibus esse facere minima debitis natus ipsa maiores!</p>
                <div class="tile is-ancestor">
                    <div class="tile is-6 is-vertical is-parent">
                        <div class="tile is-child box">
                        <p class="title">Content</p>
                        <p>Click here to view your content</p>
                        </div>
                        <div class="tile is-child box">
                        <p class="title">Gurus</p>
                        <p>Click here to talk to a guru</p>
                        </div>
                    </div>
                    <div class="tile is-6 is-vertical is-parent">
                        <div class="tile is-child box">
                        <p class="title">Account</p>
                        <p>Click here to Manage your account</p>
                        </div>
                        <div class="tile is-child box">
                        <p class="title">New Articles</p>
                        <p>Click here to view your new articles</p>
                        </div>
                    </div>
                </div>

                <b-collapse class="card" aria-id="contentIdForA11y3">
                    <div
                        slot="trigger" 
                        slot-scope="props"
                        class="card-header"
                        role="button"
                        aria-controls="contentIdForA11y3">
                        <h2 class="card-header-title">
                            Faq for Starter
                        </h2>
                        <a class="card-header-icon">
                            <b-icon
                                :icon="props.open ? 'menu-down' : 'menu-up'">
                            </b-icon>
                        </a>
                    </div>
                    <div class="card-content">
                        <ul>
                            <li><strong>Faq 1</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, necessitatibus perferendis officiis asperiores neque! Consequuntur magnam ipsum quo magni veniam at? Aliquam, dolorum earum temporibus architecto voluptatibus et quasi?</li><br>
                            <li><strong>Faq 2</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, necessitatibus perferendis officiis asperiores neque! Consequuntur magnam ipsum quo magni veniam at? Aliquam, dolorum earum temporibus architecto voluptatibus et quasi?</li><br>
                            <li><strong>Faq 3</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, necessitatibus perferendis officiis asperiores neque! Consequuntur magnam ipsum quo magni veniam at? Aliquam, dolorum earum temporibus architecto voluptatibus et quasi?</li><br>
                            <li><strong>Faq 4</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, necessitatibus perferendis officiis asperiores neque! Consequuntur magnam ipsum quo magni veniam at? Aliquam, dolorum earum temporibus architecto voluptatibus et quasi?</li><br>
                            <li><strong>Faq 4</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, necessitatibus perferendis officiis asperiores neque! Consequuntur magnam ipsum quo magni veniam at? Aliquam, dolorum earum temporibus architecto voluptatibus et quasi?</li><br>
                            <li><strong>Faq 4</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, necessitatibus perferendis officiis asperiores neque! Consequuntur magnam ipsum quo magni veniam at? Aliquam, dolorum earum temporibus architecto voluptatibus et quasi?</li><br>
                            <li><strong>Faq 4</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, necessitatibus perferendis officiis asperiores neque! Consequuntur magnam ipsum quo magni veniam at? Aliquam, dolorum earum temporibus architecto voluptatibus et quasi?</li><br>
                        </ul>
                    </div>
                </b-collapse>
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
    name: 'Adopt',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>