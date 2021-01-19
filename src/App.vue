<template>
  <navigation-bar></navigation-bar>
  <mast-head></mast-head>
  <portfolio-section></portfolio-section>
  <about-section></about-section>
  <contact-section></contact-section>
  <footer-section></footer-section>
  <copyright-section></copyright-section>
  <scroll-top></scroll-top>
</template>

<script>
import ScrollTop from "./components/ScrollTop.vue";
import AboutSection from "./sections/AboutSection.vue";
import ContactSection from "./sections/ContactSection.vue";
import CopyrightSection from "./sections/CopyrightSection.vue";
import FooterSection from "./sections/FooterSection.vue";
import MastHead from "./sections/MastHead.vue";
import NavigationBar from "./sections/NavigationBar.vue";
import PortfolioSection from "./sections/PortfolioSection.vue";
import $ from 'jquery';
import 'bootstrap';

export default {
  components: {
    ScrollTop,
    AboutSection,
    ContactSection,
    CopyrightSection,
    FooterSection,
    MastHead,
    NavigationBar,
    PortfolioSection
  },
  name: "App",
  provide() {
    return {
      name: this.name,
      toggleMenu: this.toggleMenu
    };
  },
  data() {
    return {
      name: "Johnrey Bacal",
      techLinks: [
        {
          url: "https://v3.vuejs.org/",
          description: "Vue 3",
        },
        {
          url: "https://getbootstrap.com/",
          description: "Bootstrap 5",
        },
        {
          url:
            "https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg",
          description: "This amazing guide on CI for github pages",
        },
        {
          url: "https://pages.github.com/",
          description: "Github pages",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      const navBar = $('#navbarResponsive');
      navBar.toggleClass('show')
    },
    handleScroll() {
      this.navbarCollapse();
      var scrollDistance = $(document).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    },
    navbarCollapse() {
      const mainNav = $("#mainNav");
      if (mainNav.offset().top > 100) {
        mainNav.addClass("navbar-shrink");
      } else {
        mainNav.removeClass("navbar-shrink");
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};

</script>