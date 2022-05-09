<template>
  <section class="home">
    <div class="intro-sec">
      <div class="container">
        <h1 class="intro-sec__heading">Jaime Garcia</h1>
        <p class="intro-sec__profession">Front-End Developer/UX Engineer</p>
      </div>
    </div>
    <div class="container">
      <h2>About Me</h2>
      <p>
        Hello there, my name is Jaime Garcia a Front-End Web Developer. I am interested in bridging
        the gap between creativity and technology. During my time at California State University,
        Northridge (CSUN) I had the chance to work with talented creatives and software engineers to
        develop simple solutions that everyone can benefits everyone. Feel free to explore my site
        and download my resume.
      </p>
      <button>Learn About Me</button>
      <button>Download Resume</button>
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
  background: $primary;
  height: calc(100vh - 14rem);
  &__heading {
    color: $content-background;
  }
  &__profession {
    color: #e3e3e3;
    font-size: 1.2rem;
  }
}
</style>
