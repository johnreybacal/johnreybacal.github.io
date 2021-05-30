<template>
    <footer>
        <div class="center-div">
            <p><a href="#" @click="scrollToTop">johnrey.<b>bacal</b></a></p>
            <p>Last Updated: 2021/05/30</p>
        </div>
    </footer>
</template>

<script>
export default {
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>