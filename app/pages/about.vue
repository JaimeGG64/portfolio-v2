<template>
  <section class="about">
    <div class="about-me">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eius ratione rem totam,
        expedita cupiditate! Expedita tempore, architecto neque et animi alias sunt itaque quidem
        molestiae! Hic illo eveniet eligendi?
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// import settings from '@/content/settings/general.json';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {
      title: 'About',
    };
  },
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
})
export default class About extends Vue {
  get posts(): Post[] {
    return this.$store.state.posts;
  }
}
</script>
