<template>
  <main class="project-post container" :class="post.slug">
    <section>
      <h1 class="blog-header__header">
        {{ post.title }}
      </h1>
      <img class="blog-header__featured-image" :src="post.featuredImage" alt="" />
      <p class="blog-header__desc">
        {{ post.seoDescription }}
      </p>
    </section>
    <aside class="project-post__aside">
      <h2>Project Specification</h2>
      <button v-if="post.liveLink"><a :href="post.liveLink" target="_blank">Live Demo</a></button>

      <h3 v-if="post.teamMembers">Team Members</h3>
      <ul v-if="post.teamMembers">
        <li v-for="(teamMember, index) in post.teamMembers" :key="index">
          <a :href="teamMember.site" target="_blank">
            {{ teamMember.name }}
          </a>
        </li>
      </ul>
    </aside>
    <article v-html="$md.render(post.content)" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.seoDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.seoMetaImage,
        },
      ],
    };
  },
})
export default class BlogPost extends Vue {
  post!: Post;

  async asyncData({ params, payload }): Promise<{ post: Post }> {
    if (payload) {
      return { post: payload };
    }

    try {
      const post = require(`@/content/project/${params.slug}.json`);

      return {
        post,
      };
    } catch (e) {
      throw new Error('Not found');
    }
  }
}
</script>
