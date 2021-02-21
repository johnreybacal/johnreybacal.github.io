<template>
    <div id="more-container" class="row mb-5">
        <div class="col-md-12">
            <div class="center-div">
                <h2 class="mx-auto center-paragraph">More?</h2>
                <p class="center-paragraph">You want to know more about me?</p>
            </div>
        </div>
    </div>
    <div class="row mb-5 center-div">
        <ul class="mx-auto" v-if="showMore">
            <li>Hello, fellow human. You can contact me thru:</li>
            <li><i class="fa fa-envelope fa-fw"></i>&nbsp; johnrey.bacal@yahoo.com</li>
            <li>
                <i class="fa fa-mobile-alt fa-fw"></i>&nbsp; +639 770110623
                <span class="badge badge-danger">
                    Please don't call me. Just text, thanks.
                </span>
            </li>
            <li><i class="fab fa-facebook fa-fw"></i><a href="https://www.facebook.com/people/Bacal-Johnrey/100003054690993">&nbsp; Let's chat!</a></li>
            <li><i class="fab fa-instagram fa-fw"></i><a href="https://instagram.com/johnreybacal">&nbsp; See my arts for 2019 <small>(and me singing lol)</small></a></li>
            <li><i class="fab fa-twitter fa-fw"></i><a href="https://twitter.com/johnreybacal">&nbsp; I rarely use my twitter <small>(and it's private, contains horrible puns)</small></a></li>
            <li><i class="fab fa-github fa-fw"></i><a href="https://github.com/johnreybacal">&nbsp; My old projects</a></li>
        </ul>
        <div class="mx-auto" v-else>  
            <button class="btn btn-warning" @click="recaptcha">I must not be a robot to know!</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMore: false
        }
    },
    methods: {
        async recaptcha() {
            // (optional) Wait until recaptcha has been loaded.
            await this.$recaptchaLoaded()
        
            // Execute reCAPTCHA with action "login".
            const token = await this.$recaptcha('login')
        
            // Do stuff with the received token.
            const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=verify_me&response=' + token;
            fetch(verifyUrl, {
                method: 'POST', 
                mode: 'no-cors',
            }).then(response => {
                console.log(response);
                if (response.success == true) {
                    this.showMore = true;
                }
            });
        }
    }
}
</script>