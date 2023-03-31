<template>
  <section class="blog">
    <div class="project-hero">
      <h1 class="project-hero__heading">My Projects</h1>
    </div>

    <div class="container row-section-separator">
      <div class="blog-collection-wrapper">
        <div v-for="(post, index) in posts" :key="index" class="blog-collection-wrapper-item">
          <nuxt-link :to="`/project/${post.slug}`">
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
    <!-- <Pagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages" /> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

const Pagination = () => import('@/components/commons/pagination.vue');

@Component({
  components: {
    Pagination,
  },

  head(): MetaInfo {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog index',
        },
      ],
    };
  },
})
export default class BlogIndex extends Vue {
  currentPage!: number;

  totalPages!: number;

  posts: Post[] = [];

  async asyncData({ params, store }) {
    const page: number = params.page ? parseInt(params.page, 10) : 1;
    const { perPage }: { perPage: number } = store.state;
    const range = page * perPage;

    const posts = store.state.posts.filter((post, index) => {
      const indexPage = index + 1;
      return range - perPage < indexPage && indexPage <= range;
    });

    return {
      currentPage: page,
      totalPages: Math.ceil(store.state.posts.length / perPage),
      posts: posts || [],
    };
  }
}
</script>

<style lang="scss">
.project-hero {
  background: linear-gradient(0deg, rgba(140, 18, 29, 0.9) 0%, rgba(170, 6, 22, 0.92) 95%),
    url('https://www.whiteheadassoc.com/wp-content/uploads/2018/09/iStock-998993038.jpg');
  height: 15rem;
  text-align: center;
  display: flex;
  place-content: center;
  place-items: center;
  &__heading {
    color: #fff;
  }
}

@media screen and (min-width: map-get($break-point, 'md')) {
  .project-hero {
    height: 20rem;
  }
}
</style>
