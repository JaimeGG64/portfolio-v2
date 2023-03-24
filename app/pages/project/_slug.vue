<template>
  <article class="post" :class="post.slug">
    <div class="blog-header">
      <div class="blog-container">
        <h1 class="blog-header__header">
          {{ post.title }}
        </h1>
        <p class="blog-header__desc">
          {{ post.seoDescription }}
        </p>
        <img class="blog-header__featured-image" :src="post.featuredImage" alt="" />
      </div>
    </div>

    <div v-html="$md.render(post.content)" class="blog-container" />
  </article>
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
