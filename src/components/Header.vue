<template>
    <header>
            <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/LogoTop.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Market Updates
            </b-navbar-item>
            <b-navbar-item href="#">
                Latest Content
            </b-navbar-item>
            <b-navbar-dropdown label="Members Area">
                <b-navbar-item href="#">
                    Subscriptions
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                            <a class="button is-primary">
                        <strong>Premium Content</strong>
                    </a>
                    <a class="button is-light">
                        Sign Out
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

</style>