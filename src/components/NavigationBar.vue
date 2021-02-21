<template>
    <div class="row mb-5 center-div">
        <div class="col-md-8">
            <ul class="nav flex-column">
                <li v-for="navigation in navigations" :key="navigation">
                    <router-link :to="navigation.path">{{ navigation.name }}</router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-4" id="breadcrumbs">
            <p>johnrey.bacal | <b>{{ pageName }}</b></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigations: [
                { path: '/', name: 'Home'},
                { path: '/arts', name: 'Arts'},
                { path: '/tips', name: 'Tips'},
                { path: '/more', name: 'More'},
            ]
        }
    },
    computed: {
        pageName() {
            let path = this.$route.path.replace('/', '');
            if (path === '') {
                return 'HOME';
            } else {
                return path.toUpperCase();
            }
        }
    }
}
</script>