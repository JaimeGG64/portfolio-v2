<template>
  <section class="home">
    <div class="container">
      <h1>Jaime Garcia</h1>
      <p>Front-End Developer/UX Engineer</p>
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
    <div class="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
      <div class="mb-12 xl:mb-0">
        <p v-if="isSignedUp">Thank you - we'll be in touch shortly.</p>
        <form
          v-else
          @submit.prevent="handleSubmit"
          name="signups"
          netlify
          class="flex items-center border-b border-b-2 border-blue-400 py-2"
        >
          <input
            ref="emailInput"
            v-model="form.email"
            type="text"
            name="email"
            placeholder="your@email.com"
            aria-label="Email address"
          />

          <button type="submit">Submit</button>
        </form>
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

  isSignedUp = false;

  form = {
    email: '',
  };

  encode(data): string {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  validEmail(email): boolean {
    // eslint-disable-next-line
    const re =
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    return re.test(email);
  }

  async handleSubmit(): Promise<void> {
    if (!this.validEmail(this.form.email)) {
      this.$refs.emailInput.focus();
      return;
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'signups', ...this.form }),
      });

      this.isSignedUp = true;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
