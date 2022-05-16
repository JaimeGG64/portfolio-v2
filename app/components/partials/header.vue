<template>
  <header>
    <div class="container header-nav">
      <div class="header__logo">
        <nuxt-link to="/">
          <img :src="logo" alt="Logo" />
        </nuxt-link>
      </div>

      <!-- <span class="navTrigger">
        <i></i>
        <i></i>
        <i></i>
      </span> -->
      <nav class="nav main_list">
        <ul class="nav-list">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li v-for="(page, index) in pages" :key="index" class="nav-list-item">
            <nuxt-link :to="`/${page.slug}`">{{ page.title }}</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="/blog" class="nav-list-item"> Projects </nuxt-link>
          </li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component
export default class Header extends Vue {
  get pages(): Page[] {
    return this.$store.state.pages;
  }

  logo = settings.logo;
}
</script>

<style lang="scss">
header {
  background: white;
}
.header-nav {
  display: flex;
  height: 5rem;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: white;
}

.header__logo {
  img {
    width: 4rem;
  }
}

.main_list {
  display: flex;
  align-self: center;
}

.main_list ul {
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main_list ul li {
  width: auto;
  padding: 0;
  padding-right: 3rem;
}

.main_list ul li a {
  text-decoration: none;
  color: $dark-gray;
  font-weight: bold;
}

.main_list ul li a:hover {
  color: $primary;
}

@media screen and (max-width: map-get($break-point, 'sm')) {
  .navTrigger i:nth-child(3) {
    -webkit-animation: outBtm 0.8s backwards;
    animation: outBtm 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
  }

  .navTrigger.active i:nth-child(1) {
    -webkit-animation: inT 0.8s forwards;
    animation: inT 0.8s forwards;
  }

  .navTrigger.active i:nth-child(2) {
    -webkit-animation: inM 0.8s forwards;
    animation: inM 0.8s forwards;
  }

  .navTrigger.active i:nth-child(3) {
    -webkit-animation: inBtm 0.8s forwards;
    animation: inBtm 0.8s forwards;
  }

  @-webkit-keyframes inM {
    50% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(45deg);
    }
  }

  @keyframes inM {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @-webkit-keyframes outM {
    50% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(45deg);
    }
  }

  @keyframes outM {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @-webkit-keyframes inT {
    0% {
      -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
      -webkit-transform: translateY(9px) rotate(0deg);
    }
    100% {
      -webkit-transform: translateY(9px) rotate(135deg);
    }
  }

  @keyframes inT {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(9px) rotate(0deg);
    }
    100% {
      transform: translateY(9px) rotate(135deg);
    }
  }

  @-webkit-keyframes outT {
    0% {
      -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
      -webkit-transform: translateY(9px) rotate(0deg);
    }
    100% {
      -webkit-transform: translateY(9px) rotate(135deg);
    }
  }

  @keyframes outT {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(9px) rotate(0deg);
    }
    100% {
      transform: translateY(9px) rotate(135deg);
    }
  }

  @-webkit-keyframes inBtm {
    0% {
      -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
      -webkit-transform: translateY(-9px) rotate(0deg);
    }
    100% {
      -webkit-transform: translateY(-9px) rotate(135deg);
    }
  }

  @keyframes inBtm {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-9px) rotate(0deg);
    }
    100% {
      transform: translateY(-9px) rotate(135deg);
    }
  }

  @-webkit-keyframes outBtm {
    0% {
      -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
      -webkit-transform: translateY(-9px) rotate(0deg);
    }
    100% {
      -webkit-transform: translateY(-9px) rotate(135deg);
    }
  }

  @keyframes outBtm {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-9px) rotate(0deg);
    }
    100% {
      transform: translateY(-9px) rotate(135deg);
    }
  }

  .affix {
    padding: 0;
    background-color: #111;
  }
}
</style>
