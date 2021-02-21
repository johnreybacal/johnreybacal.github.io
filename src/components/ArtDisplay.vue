<template>
    <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
        <img class="art-img" :src="imageUrl" />
    </div>
</template>

<script>
export default {
    props: ['image'],
    computed: {
        imageUrl() {
            return require('@/assets/img/' + this.image);
        }
    }
}
</script>