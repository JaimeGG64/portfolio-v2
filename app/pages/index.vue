<template>
  <section class="home">
    <div class="intro-sec">
      <div class="container">
        <div class="intro-sec-wrapper">
          <img class="intro-sec__logo" src="/images/uploads/logo--white.svg" alt="" />
          <h1 class="intro-sec__heading">Jaime Garcia</h1>
          <p class="intro-sec__profession">Front-End Developer/UX Engineer</p>
        </div>
      </div>
    </div>
    <div class="container quick-about-me">
      <img class="quick-about-me__image" src="/images/uploads/headshot.jpg" alt="" />
      <div class="quick-about-me__content-wrapper">
        <h2>About Me</h2>
        <p>
          Hello there, my name is Jaime Garcia a Front-End Web Developer. I am interested in
          bridging the gap between creativity and technology. During my time at California State
          University, Northridge (CSUN) I had the chance to work with talented creatives and
          software engineers to develop simple solutions that everyone can benefits everyone. Feel
          free to explore my site and download my resume.
        </p>
        <div class="quick-about-me__btn-wrapper">
          <nuxt-link to="/about">
            <button>Learn About Me</button>
          </nuxt-link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1Rxtg82DIi12haJZJFf7QmJZ8KqnXBoxI/view?usp=sharing"
          >
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Projects</h2>
      <div>
        <div class="blog-collection-wrapper">
          <div v-for="(post, index) in posts" :key="index" class="blog-collection-wrapper-item">
            <nuxt-link :to="`/blog/${post.slug}`">
              <img
                :alt="post.title"
                class="blog-collection-wrapper-item__img"
                :src="post.featuredImage || 'https://source.unsplash.com/random/640x340'"
              />
              <h3 class="blog-collection-wrapper-item__title">{{ post.title }}</h3>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
})
export default class Home extends Vue {
  get posts(): Post[] {
    return this.$store.state.posts;
  }
}
</script>

<style lang="scss">
.intro-sec {
  background: linear-gradient(0deg, rgba(140, 18, 29, 0.9) 0%, rgba(170, 6, 22, 0.92) 95%),
    url('https://www.whiteheadassoc.com/wp-content/uploads/2018/09/iStock-998993038.jpg');
  height: calc(100vh - 10rem);
  .intro-sec-wrapper {
    display: flex;
    flex-direction: column;
    height: 60vh;
    align-items: center;
    justify-content: center;
  }
  &__heading {
    color: $content-background;
  }
  &__profession {
    color: #e3e3e3;
    font-size: 1.2rem;
  }
  &__logo {
    width: 7rem;
    margin-bottom: 0.75rem;
  }
}

@media screen and (min-width: map-get($break-point, 'md')) {
  .intro-sec {
    max-height: 30rem;
    .intro-sec-wrapper {
      display: grid;
      height: inherit;
      grid-template-areas:
        'name logo'
        'profession logo';
      grid-template-columns: 5fr 1fr;
      column-gap: 2rem;
      align-items: center;
      padding-top: 10rem;
    }
    &__heading {
      grid-area: name;
    }
    &__profession {
      grid-area: profession;
    }
    &__logo {
      grid-area: logo;
      margin: 0;
      width: 100%;
    }
  }
  .quick-about-me {
    display: grid;
    grid-template-areas: 'content-wrapper image';
    column-gap: 1rem;
    &__image {
      grid-area: image;
      margin: 0.5rem 0;
    }
    &__content-wrapper {
      height: fit-content;
      align-self: center;
      grid-area: content-wrapper;
    }
  }
}

@media screen and (min-width: map-get($break-point, 'lg')) {
  .quick-about-me {
    column-gap: 5rem;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
