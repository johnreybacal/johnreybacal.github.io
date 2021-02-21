<template>
    <div id="art-container" class="row mb-5">
    <art-display v-for="artWork in artWorks" :key="artWork" :image="artWork"></art-display>
</div>
<div class="row mb-5 center-div">
    <div class="col-md-12">
        <div class="center-div">
            <h4 class="mx-auto center-paragraph">Wanna see more of my art? Check these out!</h4>
            <p class="center-paragraph">
                <a href="https://facebook.com/jb.artdump"><i class="fab fa-facebook-square fa-fw"></i>/jb.artdump</a>
                &nbsp; | &nbsp;<a href="https://instagram.com/johnreybacal"><i class="fab fa-instagram-square fa-fw"></i>/johnreybacal</a>
            </p>
        </div>
    </div>
</div>
</template>

<script>
import ArtDisplay from '../components/ArtDisplay.vue';

export default {
    components: {
        ArtDisplay
    },
    data() {
        return {
            artWorks: [
                "cherry blowwson.png",
                "deep space hunting.png",
                "hmmmm_scaled.png",
                "i like living.png",
                "sasmurai.png",
                "slippp.png",
                "star warssssssssss.png",
                "tempest_scaled.jpg",
                "umbrella.png",
                "young.png",
                "ano ba ito.png",
                "dalawa.png"
            ]
        }
    }
}
</script>