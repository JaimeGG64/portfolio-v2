<template>
  <div class="about">
    <h1>About Me</h1>
    <p>
      Hello there, my name is Jaime Garcia a Front-End Web Developer. I am interested in bridging
      the gap between creativity and technology. During my time at California State University,
      Northridge (CSUN) I had the chance to work with talented creatives and software engineers to
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
    <h3>Knowledge</h3>
    <ul>
      <li>Front-End Development</li>
      <li>Wireframing</li>
      <li>Conducting Stakeholder Interviews</li>
      <li>Responsive Web Design</li>
      <li>Design Systems</li>
      <li>Content Management System (CMS)</li>
    </ul>
    <h3>Web Development Tools</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Vue</li>
      <li>React</li>
      <li>Node</li>
      <li>SCSS</li>
      <li>PHP</li>
      <li>NPM</li>
      <li>Gulp</li>
      <li>SQL</li>
      <li>Git</li>
      <li>WordPress</li>
    </ul>
    <h3>Design Tools</h3>
    <ul>
      <li>Figma</li>
      <li>XD</li>
      <li>Illustrator</li>
      <li>InDesign</li>
      <li>Photoshop</li>
    </ul>
    <section>
      <div>
        <h2>Work Experience</h2>
        <div>
          <div>
            <h3>NASA Ames Research Center</h3>
            <p>June 2021 – August 2021</p>
            <p>
              Design and executed internal stakeholder interview campaign. Synthesized and analyzed
              stakeholder interview results for management to make informed decisions. Created
              proof-of-concept technical demos with Grafana and Plotly JS to help inform UI/UX
              decisions. Wrote and maintain Confluence pages to inform team members about design
              decisions, and best practices with implementation details.
            </p>
          </div>
          <div>
            <h3>IntersectLA</h3>
            <p>June 2020 – May 2021, August 2021 – Present</p>
            <p>
              Collaborate with students in different disciplines such as Graphic Design, Marketing,
              and Computer Science. Develop custom WordPress themes with PHP, SCSS, and Gulp. Headed
              several projects with students to benefit the CSUN community.
            </p>
          </div>
          <div>
            <h3>META+LAB</h3>
            <p>June 2016 – July 2016, January 2018 – June 2019</p>
            <p>
              Started a High School intern designing and developing assets for web application. Then
              returned as full-time student to develop web applications in a agile scrum
              environment. Leveraged Vue and SCSS to build scalable and reusable components for the
              Front-End side of web applications. As well as mentor a high student about the
              fundamentals of front-end web development.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h3>Projects</h3>
      </div>
    </section>
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
.container {
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 60rem;
}
</style>
