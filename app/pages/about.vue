<template>
  <div class="about">
    <div class="container row-section-separator about-me">
      <h1 class="about-me__heading">About Me</h1>
      <img class="about-me__image" src="/images/uploads/headshot.jpg" alt="" />
      <p class="about-me__copy">
        {{ welcomeText }}
      </p>
      <a class="about-me__download" target="_blank" :href="linkToResume">
        <button>Download Resume</button>
      </a>
      <div class="about-me__education">
        <h2>Education</h2>
        <h3>California State University, Northridge (CSUN)</h3>
        <ul>
          <li>Bachelor of Arts (BA), Graphic Design</li>
          <li>Minor in Computer Science</li>
        </ul>
      </div>
    </div>
    <div class="container row-section-separator">
      <h2>Skill Sets</h2>
      <div class="skill-sets-wrapper">
        <div class="skill-sets-wrapper-item">
          <h3>Knowledge</h3>
          <ul>
            <li>Front-End Web Development</li>
            <li>Content Management System (CMS)</li>
            <li>Responsive Web Design</li>
            <li>Web Content Accessibility Guidelines (WCAG)</li>
            <li>Wireframe Prototyping</li>
            <li>Client-side Form Validation</li>
            <li>Design Systems</li>
            <li>Conducting Stakeholder Interviews</li>
          </ul>
        </div>
        <div class="skill-sets-wrapper-item">
          <h3>Web Development</h3>
          <ul class="skill-sets-wrapper--two-column-list">
            <li>HTML & CSS</li>
            <li>JavaScript (ES6)</li>
            <li>Command-Line Interface (CLI)</li>
            <li>WordPress</li>
            <li>Shopify</li>
            <li>Git</li>
            <li>SCSS</li>
            <li>Vue</li>
            <li>React</li>
            <li>Node</li>
            <li>NPM</li>
            <li>Handlebars.js</li>
            <li>PHP</li>
            <li>Yarn</li>
            <li>Gulp</li>
            <li>SQL</li>
          </ul>
        </div>
        <div class="skill-sets-wrapper-item">
          <h3>Design Tools</h3>
          <ul>
            <li>Figma</li>
            <li>XD</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container row-section-separator">
      <h2>Work Experience</h2>
      <div class="work-experience-wrapper">
        <div class="work-experience-item">
          <img class="work-experience-item__logo" src="/images/uploads/turn7io-logo.jpeg" alt="" />
          <h3><a href="https://turn7.io/" target="_blank">Turn7.io</a></h3>
          <p class="work-experience-item__term">January 2023 &mdash; Present</p>
          <ul>
            <li>
              Translate wireframe prototypes into production level WordPress and Shopify websites.
            </li>
            <li>
              Proposed and implemented a CI/CD workflow for delivering high quality bespoke Shopify
              sites.
            </li>
            <li>
              Wrote and maintained technical documentation that benefits the organization.
            </li>
          </ul>
        </div>
        <div class="work-experience-item">
          <img class="work-experience-item__logo" src="/images/uploads/ixla-logo.png" alt="" />
          <h3><a href="https://intersect.la/" target="_blank">IntersectLA</a></h3>
          <p class="work-experience-item__term">
            August 2021 &mdash; January 2022 <br />
            June 2020 &mdash; May 2021
          </p>
          <ul>
            <li>
              Lead the development of a design system which lead to the creation of over 100
              wireframes and counting.
            </li>
            <li>
              Mentored more than 12 colleagues on the fundamentals of Interaction Design, Web
              Content Accessibility Guidelines (WCAG) standards, and Web Development.
            </li>
            <li>
              Rewrote over 50 CSUN web pages to meet high HTML semantic standards. Leading to
              improved web accessibility and SEO rankings.
            </li>
            <li>Collaborated with professional creatives with non-technical backgrounds.</li>
          </ul>
        </div>
        <div class="work-experience-item">
          <img class="work-experience-item__logo" src="/images/uploads/arcs-logo.png" alt="" />
          <h3>
            <a href="https://arcs.center/" target="_blank"
              >Autonomy Research Center for
              <abbr title="Science Technology Entrepreneurship Arts Humanities Mathematics"
                >STEAHM</abbr
              >
              (ARCS)</a
            >
          </h3>
          <p class="work-experience-item__term">February 2022 &mdash; December 2022</p>
          <ul>
            <li>
              Develop a research framework to find the most common issues that people with
              disability face in their daily lives.
            </li>
            <li>Audit over 1000 video clips featuring people with various disability.</li>
            <li>Presented research findings to Human Computer Interaction and NASA researchers.</li>
          </ul>
        </div>
        <div class="work-experience-item">
          <img class="work-experience-item__logo" src="/images/uploads/NASA-logo.svg" alt="" />
          <h3>NASA Ames Research Center</h3>
          <p class="work-experience-item__term">June 2021 &mdash; August 2021</p>
          <ul>
            <li>
              Design and executed internal stakeholder interview campaign. Synthesized and analyzed
              stakeholder interview results for management to make informed decisions.
            </li>
            <li>
              Created proof-of-concepts technical demos with Grafana and Plotly JS to help
              informative UI/UX decisions.
            </li>
            <li>
              Wrote and maintain Confluence pages to inform team members about design decisions and
              best practices with implementation details.
            </li>
          </ul>
        </div>
        <div class="work-experience-item">
          <img class="work-experience-item__logo" src="/images/uploads/metalab-logo.svg" alt="" />
          <h3>META+LAB</h3>
          <p class="work-experience-item__term">
            January 2018 &mdash; June 2019 <br />
            June 2016 &mdash; July 2016
          </p>
          <ul>
            <li>Develop custom web applications in a scrum agile environment.</li>
            <li>
              Participate in code review sessions to ensure team members were delivering a high
              quality product.
            </li>
            <li>Ensure web applications were WCAG compliant and mobile responsive.</li>
            <li>Leverage Vue and SCSS to build scalable and reusable Application components.</li>
            <li>
              Mentored a high school student about the fundamental skills of Front-End Web
              Development.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container row-section-separator">
      <h2>Projects</h2>
      <div class="blog-collection-wrapper">
        <div v-for="(post, index) in posts" :key="index" class="blog-collection-wrapper-item">
          <template v-if="index < 3">
            <nuxt-link :to="`/project/${post.slug}`">
              <img
                :alt="post.title"
                class="blog-collection-wrapper-item__img"
                :src="post.featuredImage || 'https://source.unsplash.com/random/640x340'"
              />
              <h3 class="blog-collection-wrapper-item__title">{{ post.title }}</h3>
              <p v-if="post.projectType">{{ post.projectType }}</p>
            </nuxt-link>
          </template>
        </div>
      </div>
      <nuxt-link to="/project" class="blog-collection-wrapper__btn">
        <button>View All Projects</button>
      </nuxt-link>
    </div>
    <!-- <div class="container">
      <h2>Favorite Resources</h2>
      <h3>Books</h3>
      <ul>
        <li>Don't Make me Think</li>
        <li>Interaction Design</li>
        <li>The Design of Everyday Things</li>
      </ul>
      <h3>Websites</h3>
      <ul>
        <li>Front-End Masters</li>
        <li>Interaction Design Foundation</li>
        <li>CSS Tricks</li>
      </ul>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';
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

  welcomeText = settings.welcomeText;

  linkToResume = settings.linkToResume;
}
</script>

<style lang="scss">
.skill-sets-wrapper {
  display: grid;
  column-gap: 1rem;
}

.skill-sets-wrapper-item {
  .skill-sets-wrapper--two-column-list {
    column-count: 2;
  }
}

.work-experience-wrapper {
  display: grid;
  gap: 1.5rem;
}

.work-experience-item {
  border-bottom: 1px solid $dark;
  &__logo {
    height: 6rem;
    margin-bottom: 0.25rem;
  }
  &__term {
    font-style: oblique;
    margin: 0;
  }
}

.about-me {
  &__image {
    width: 80%;
    margin: 0.5rem 0;
  }
}

@media screen and (min-width: map-get($break-point , 'md')) {
  .skill-sets-wrapper {
    grid-template-columns: 1.5fr 1fr 1fr;
    column-gap: 2.75rem;
  }
  .work-experience-wrapper {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    row-gap: 2rem;
  }
  .about-me {
    display: grid;
    grid-template-areas:
      'heading image'
      'copy image'
      'download image'
      'education education';
    grid-template-columns: 1.75fr 1fr;
    column-gap: 1rem;
    &__heading {
      grid-area: heading;
    }
    &__copy {
      grid-area: copy;
    }
    &__download {
      grid-area: download;
    }
    &__image {
      grid-area: image;
      width: 100%;
      margin: 0.75rem;
    }
    &__education {
      grid-area: education;
    }
  }
}

@media screen and (min-width: map-get($break-point , 'lg')) {
  .skill-sets-wrapper {
    grid-template-columns: 10fr 10fr 4fr;
  }

  .about-me {
    grid-template-areas:
      'heading image'
      'copy image'
      'download image'
      'education image';
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
  }
}
</style>
