<template>
  <div class="about">
    <h1>About Me</h1>
    <p>
      Hello there, my name is Jaime Garcia a Front-End Web Developer. I am interested in bridging
      the gap between creativity and technology. During my time at California State University,
      Northridge (CSUN), I had the chance to work with talented creatives and software engineers to
      develop simple solutions that everyone can benefits everyone. Feel free to explore my site and
      download my resume.
    </p>
    <button>Download Resume</button>
    <h2>Education</h2>
    <h3>California State University, Northridge (CSUN)</h3>
    <ul>
      <li>Bachelor of Arts (BA), Graphic Design</li>
      <li>Minor in Computer Science</li>
    </ul>
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
    <h2>Work Experience</h2>
    <div class="work-experience-wrapper">
      <div class="work-experience-item">
        <img class="work-experience-wrapper__logo" src="/images/uploads/NASA-logo.svg" alt="" />
        <h3>NASA Ames Research Center</h3>
        <p class="work-experience-wrapper__term">June 2021 &mdash; August 2021</p>
        <p>
          Design and executed internal stakeholder interview campaign. Synthesized and analyzed
          stakeholder interview results for management to make informed decisions. Created
          proof-of-concept technical demos with Grafana and Plotly JS to help inform UI/UX
          decisions. Wrote and maintain Confluence pages to inform team members about design
          decisions, and best practices with implementation details.
        </p>
      </div>
      <div class="work-experience-item">
        <img class="work-experience-wrapper__logo" src="/images/uploads/ixla-logo.png" alt="" />
        <h3>IntersectLA</h3>
        <p class="work-experience-wrapper__term">
          June 2020 &mdash; May 2021, August 2021 &mdash; Present
        </p>
        <p>
          Collaborate with students in different disciplines such as Graphic Design, Marketing, and
          Computer Science. Develop custom WordPress themes with PHP, SCSS, and Gulp. Headed several
          projects with students to benefit the CSUN community.
        </p>
      </div>
      <div class="work-experience-item">
        <img class="work-experience-wrapper__logo" src="/images/uploads/metalab-logo.svg" alt="" />
        <h3>META+LAB</h3>
        <p class="work-experience-wrapper__term">
          June 2016 &mdash; July 2016, January 2018 &mdash; June 2019
        </p>
        <p>
          Started a High School intern designing and developing assets for web application. Then
          returned as full-time student to develop web applications in a agile scrum environment.
          Leveraged Vue and SCSS to build scalable and reusable components for the Front-End side of
          web applications. As well as mentor a high student about the fundamentals of front-end web
          development.
        </p>
      </div>
    </div>
    <div>
      <h2>Projects</h2>
      <div class="blog-collection-wrapper">
        <div v-for="(post, index) in posts" :key="index" class="w-full md:w-1/2 my-4 md:px-4">
          <div class="post">
            <nuxt-link :to="`/blog/${post.slug}`">
              <img
                :alt="post.title"
                class="w-full"
                :src="post.featuredImage || 'https://source.unsplash.com/random/640x340'"
              />
              <div class="p-6 bg-white">
                <h3 class="text-2xl mb-2">{{ post.title }}</h3>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
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

.work-experience-wrapper {
  display: grid;
  column-gap: 1rem;
  &__logo {
    height: 7rem;
    margin-bottom: 0.25rem;
  }
  &__term {
    font-style: oblique;
  }
}

@media screen and (min-width: map-get($break-point , 'md')) {
  .skill-sets-wrapper {
    grid-template-columns: 1.15fr 1fr 1fr;
  }
  .work-experience-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }

  .skill-sets-wrapper-item {
    .skill-sets-wrapper--two-column-list {
      column-count: 2;
    }
    ul {
      padding-left: 1rem;
    }
  }
}

@media screen and (min-width: map-get($break-point , 'lg')) {
  .skill-sets-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }

  .work-experience-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
