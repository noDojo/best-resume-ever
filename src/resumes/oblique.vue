<template>
  <div id="resume3" class="resume">
    <div class="resume-header">
      <div class="triangle"></div>
      <div class="person-header">
        <div class="person-wrapper">
          <div class="person">
            <div class="name">
              {{ person.name.first }} {{ person.name.last }}
            </div>
            <div class="position">{{ person.position }}</div>
          </div>
          <div class="img"></div>
        </div>
      </div>
    </div>
    <div class="resume-content">
      <div class="about">{{ person.about }}</div>
      <div class="experience">
        <h3>{{ lang.experience }}</h3>
        <div
          class="experience-block"
          v-for="experience in person.experience"
          :key="experience.key"
        >
          <div class="row">
            <span class="job-title">{{ experience.position }} </span>
            <i class="material-icons">details</i>
            <span class="company">{{ experience.company }} </span>
          </div>

          <div class="row">
            <span class="time-period">{{ experience.timeperiod }}</span>
            <div class="bullet-list">
              <div
                v-for="item in experience.description"
                :key="item.bullet"
                class="item"
              >
                <div class="icon bullet-icon">
                  <i class="material-icons">chevron_right</i>
                </div>
                <div class="text">{{ item.bullet }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="education">
        <h3>{{ lang.education }}</h3>
        <div
          class="education-block"
          v-for="education in person.education"
          :key="education.degree"
        >
          <div class="row">
            <span class="degree">{{ education.degree }}</span>
          </div>
          <div class="row">
            <span class="degree-description">{{ education.description }}</span>
          </div>
        </div>
      </div>
      <div class="skill-section">
        <h3>{{ lang.skills }}</h3>
        <div class="skills" v-for="skill in person.skills" :key="skill.name">
          <div class="skill-block">
            <i class="material-icons">keyboard_arrow_right</i>
            <span class="skill">{{ skill.name }}</span>
          </div>
        </div>
      </div>
      <div class="skills-other">
        <span>{{ person.knowledge }} </span>
      </div>
      <div class="contact">
        <h3>{{ lang.contact }}</h3>
        <a :href="contactLinks.email"> {{ person.contact.email }}</a>
        <span v-if="person.contact.phone" class="bold-text"> | </span>
        <a v-if="person.contact.phone" :href="contactLinks.phone">{{ person.contact.phone }}</a>
        <span class="bold-text"> | </span>
        <a v-if="person.contact.website" :href="person.contact.website">
          {{ person.contact.website }}</a
        >
        <span class="bold-text"> | </span>
        <a v-if="person.contact.github" :href="contactLinks.github">
          {{ contactLinks.github }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { getVueOptions } from "./options";

const name = "oblique";
export default Vue.component(name, getVueOptions(name));
</script>

<style lang="less" scoped>
#resume3 {
  font-family: "Open Sans Condensed", sans-serif;
  padding-bottom: 50px;

  a,
  a:focus,
  a:hover {
    color: black;
    text-decoration: none;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 22px;
  }

  .resume-header .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 600px 0 0 1500px;
    border-color: #006064 transparent transparent transparent;
    position: absolute;
    left: -600px;
    top: -200px;
  }

  .resume-header .person-header {
    position: absolute;
    z-index: 20;
    right: 15%;
    top: 50px;

    .person-wrapper {
      overflow: hidden;
      position: relative;
    }

    .img {
      height: 100%;
      width: 100px;
      float: left;
      position: absolute;
      top: 0;
      right: 0;
      background: url("../../resume/id.jpg");
      background-position: center;
      background-size: cover;
    }

    .person {
      float: right;
      color: white;
      margin-right: 120px;
    }

    .name {
      text-transform: uppercase;
      font-size: 50px;
      display: table-caption;
      text-align: right;
      line-height: 1;
      font-weight: bold;
    }

    .position {
      font-size: 20px;
      display: table-caption;
      text-align: right;
      line-height: 1;
      margin-top: 10px;
    }
  }

  .company {
    font-weight: bold;
  }

  .resume-content {
    margin-top: 435px;
    margin-left: 15%;
    width: 70%;

    .about {
      font-size: 20px;
      font-weight: 350;
      top: -200px;
      margin-top: -200px;
      width: 375px;
    }

    .experience .experience-block {
      line-height: 1;
      margin-bottom: 10px;

      .row:first-child {
        font-size: 18px;
        text-transform: uppercase;

        i {
          font-size: 17px;
        }
      }
    }
  }

  .education-block {
    line-height: 1;
    margin-bottom: 10px;

    .row:first-child {
      font-size: 20px;
      text-transform: uppercase;
    }
  }

  .skill-section .skills {
    width: 100%;

    .skill-block {
      width: 50%;
      float: left;

      i {
        font-size: 17px;
        margin-right: 15px;
      }

      .skill {
        font-size: 20px;
      }
    }
  }

  .skills-other {
    display: inline-block;
    font-size: 20px;
    margin-top: 10px;
    line-height: 1;
  }

  .contact {
    margin-top: 40px;

    a,
    span {
      display: inline-block;
      font-size: 20px;
      list-style: none;
      margin-top: 0;
      line-height: 1;
      padding-left: 0;
      margin-left: 0;
    }
  }

  div.bullet-list .text {
    overflow: visible;
  }

  .contact .contact-row.dots {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 10px;
    color: rgba(153, 153, 153, 0.6);
  }
}
</style>
