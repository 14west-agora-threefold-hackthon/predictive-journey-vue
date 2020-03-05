<template>
    <div class="getting-started">
        <h2>Lets get started</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id quae, odio deserunt cumque modi consectetur consequatur dolores rem quam voluptas quia temporibus esse facere minima debitis natus ipsa maiores!</p>
        <div class="tile is-ancestor">
            <div class="tile is-6 is-vertical  is-parent">
                <div class="tile is-child box notification is-primary">
                <p class="title">Content</p>
                <p>Click here to view your content</p>
                </div>
                <div class="tile is-child box notification is-info">
                <p class="title">Gurus</p>
                <p>Click here to talk to a guru</p>
                </div>
            </div>
            <div class="tile is-6 is-vertical  is-parent">
                <div class="tile is-child box notification is-warning">
                <p class="title">Account</p>
                <p>Click here to Manage your account</p>
                </div>
                <div class="tile is-child box notification is-danger">
                <p class="title">New Articles</p>
                <p>Click here to view your new articles</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.getting-started{
    padding: 2.5em 0;
}
</style>