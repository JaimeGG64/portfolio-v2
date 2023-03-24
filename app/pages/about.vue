<template>
  <div class="about">
    <div class="container about-me">
      <h1 class="about-me__heading">About Me</h1>
      <img class="about-me__image" src="/images/uploads/headshot.jpg" alt="" />
      <p class="about-me__copy">
        Hello there, my name is Jaime Garcia a Front-End Web Developer. I am interested in bridging
        the gap between creativity and technology. During my time at California State University,
        Northridge (CSUN), I had the chance to work with talented creatives and software engineers
        to develop simple solutions that everyone can benefits everyone. Feel free to explore my
        site and download my resume.
      </p>
      <a
        class="about-me__download"
        target="_blank"
        href="https://drive.google.com/file/d/1Rxtg82DIi12haJZJFf7QmJZ8KqnXBoxI/view?usp=sharing"
      >
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
    <div class="container">
      <h2>Skill Sets</h2>
      <div class="skill-sets-wrapper">
        <div class="skill-sets-wrapper-item">
          <h3>Knowledge</h3>
          <ul>
            <li>Front-End Web Development</li>
            <li>Wireframing</li>
            <li>Web Content Accessibility Guidelines (WCAG)</li>
            <li>Responsive Web Design</li>
            <li>Conducting Stakeholder Interviews</li>
            <li>Content Management System (CMS)</li>
            <li>Design Systems</li>
          </ul>
        </div>
        <div class="skill-sets-wrapper-item">
          <h3>Web Development</h3>
          <ul class="skill-sets-wrapper--two-column-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (ES6)</li>
            <li>Vue</li>
            <li>React</li>
            <li>Node</li>
            <li>SCSS</li>
            <li>PHP</li>
            <li>NPM</li>
            <li>Yarn</li>
            <li>Gulp</li>
            <li>SQL</li>
            <li>Git</li>
            <li>WordPress</li>
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
    <div class="container">
      <h2>Work Experience</h2>
      <div class="work-experience-wrapper">
        <div class="work-experience-item">
          <img class="work-experience-item__logo" src="/images/uploads/turn7io-logo.jpeg" alt="" />
          <h3>Turn7.io</h3>
          <p class="work-experience-item__term">February 2023 &mdash; Present</p>
          <ul>
            <li>Develop custom WordPress themes for various clients</li>
          </ul>
        </div>
        <div class="work-experience-item">
          <img class="work-experience-item__logo" src="/images/uploads/ixla-logo.png" alt="" />
          <h3>IntersectLA</h3>
          <p class="work-experience-item__term">
            June 2020 &mdash; May 2021, August 2021 &mdash; January 2022
          </p>
          <ul>
            <li>
              Mentored more than 12 colleagues on the fundamentals of Interaction Design, WCAG
              standards, and Web Development.
            </li>
            <li>
              Lead the development of a design system which lead to the creation of over 100
              wireframes and counting.
            </li>
            <li>Collaborated with professional creatives with non-technical backgrounds.</li>
          </ul>
        </div>
        <div class="work-experience-item">
          <img class="work-experience-item__logo" src="/images/uploads/arcs-logo.png" alt="" />
          <h3>Autonomy Research Center for STEAHM (ARCS)</h3>
          <p class="work-experience-item__term">February 2022 &mdash; December 2022</p>
          <ul>
            <li>Audit over 1000 video clips featuring people with various disability.</li>
            <li>
              Presented research findings to Human Computer Interaction and NASA researchers.
            </li>
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
            June 2016 &mdash; July 2016, January 2018 &mdash; June 2019
          </p>
          <ul>
            <li>
              Develop custom web applications in a scrum agile environment. Participate in code
              review sessions.
            </li>
            <li>Ensure web applications were WCAG compliant and mobile responsive.</li>
            <li>Mentored a high school student about the fundamental Front-End Web Development.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Projects</h2>
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
    <div class="container">
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
    </div>
  </div>
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
  column-gap: 1rem;
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
    column-gap: 2rem;
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
    grid-template-columns: 1.5fr 1.1fr 1fr;
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
