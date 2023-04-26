<template>
  <div class="resume" id="template">
    <div id="resume-header">
      <div id="header-left">
        <div class="headline">
          {{ person.name.first }} {{ person.name.last }}
        </div>
        <div>{{ person.position }}</div>
        <!-- <div id="info-flex">
          <span id="email">
            <a :href="'mailto:' + person.contact.email">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              {{ person.contact.email }}
            </a>
          </span>
          <span id="phone">
            <i class="fa fa-phone-square" aria-hidden="true"></i>
            {{ person.contact.phone }}
          </span>
          <span v-if="person.contact.linkedin" id="website">
            <a :href="person.contact.linkedinurl">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              {{ person.contact.linkedin }}
            </a>
          </span>
          <span v-if="person.contact.website" id="website">
            <a :href="person.contact.website">
              <i class="fa fa-home" aria-hidden="true"></i>
              {{ person.contact.website }}
            </a>
          </span>
          <span v-if="person.contact.github" id="github">
            <a :href="'https://github.com/' + person.contact.github">
              <i class="fa fa-github" aria-hidden="true"></i>
              {{ person.contact.github }}
            </a>
          </span>
        </div> -->
      </div>
    </div>
    <div id="resume-body">
      <!-- PROFESSIONAL PROFILE -->
      <div id="profile-container" v-if="person.profile != []">
        <div class="section-title">PROFESSIONAL PROFILE</div>
        <ul>
          <li v-for="profile in person.profile" :key="profile.item" class="item">
            <div>{{ profile.item }}</div>
          </li>
        </ul>
      </div>
      <!-- SKILLS SUMMARY -->
      <div id="skills-container" v-if="person.skills != []">
        <div class="section-title">SKILLS SUMMARY</div>
        <ul id="skill-list">
            <li>
              <span class="list-item-black">Programming Languages: </span><span>{{ person.skills[0].languages }}</span>
            </li>
            <li>
              <span class="list-item-black">Web Technologies: </span><span>{{ person.skills[1].webtechnologies }}</span>
            </li>
            <li>
              <span class="list-item-black">Application Servers: </span><span>{{ person.skills[2].applicationservers }}</span>
            </li>
            <li>
              <span class="list-item-black">Database: </span><span>{{ person.skills[3].database }}</span>
            </li>
            <li>
              <span class="list-item-black">Operating Systems: </span><span>{{ person.skills[4].operatingsystems }}</span>
            </li>
            <li>
              <span class="list-item-black">VCS: </span><span>{{ person.skills[5].vsc }}</span>
            </li>
            <li>
              <span class="list-item-black">Other: </span><span>{{ person.skills[6].other }}</span>
            </li>
        </ul>
      </div>
      <!-- PROFESSIONAL EXPERIENCE-->
      <div id="experience-container">
        <div class="section-title">PROFESSIONAL EXPERIENCE</div>
        <div v-for="experience in person.experience" :key="experience.key" class="experience">
          <h2 class="company">{{ experience.company }}</h2>
          <p class="text-timespan">
            <span>{{ experience.position }} | </span>
            <span>{{ experience.timeperiod }}</span>
          </p>
          <ul style="margin-bottom: 10px;">
            <li v-for="item in experience.description" :key="item.bullet" class="item">
              <div class="text">{{ item.bullet }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- EDUCATION AND QUALIFICATION -->
      <div id="education-container">
        <div class="section-title">EDUCATION</div>
        <div v-for="education in person.education" :key="education.degree" class="education">
          <h2 class="education-description">{{ education.description }}</h2>
          <p class="text-timespan">
            <span>{{ education.degree }} | </span>
            <span>{{ education.timeperiod }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { getVueOptions } from "./options";

const name = "basic-iba";
export default Vue.component(name, getVueOptions(name));
</script>

<style lang="less" scoped>
#template {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;

  h1,
  h2 {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
  }

  p {
    margin: 0;
    font-size: 12px;
  }

  ul li {
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
  }

  a {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
  }

  .list-item-black {
    color: black;
  }

  #resume-header {
    color: rgba(0, 0, 0, 0.7);
    height: 60px;
    padding: 20px 40px;

    #header-left {
      width: 100%;
      float: left;

      h1 {
        font-size: 56px;
        color: rgba(0, 0, 0, 0.7);
        text-transform: uppercase;
        line-height: 56px;
      }

      h2 {
        font-size: 22px;
        color: rgba(0, 0, 0, 0.7);
      }

      #info-flex {
        display: flex;
        margin-top: 20px;
        font-size: 14px;

        span {
          margin-right: 25px;
        }

        i {
          margin-right: 5px;
        }
      }
    }
  }

  #resume-body {
    padding: 20px;

    #profile-title {
      padding: 2px 4px;
      background-color: lightgray;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.8);
    }

    #experience-title,
    #education-title,
    #skills-title {
      font-size: 26px;
      text-transform: uppercase;
    }

    .experience {
      ul {
        margin: 5px 0 0 0;
      }
    }

    .company,
    .education-description {
      font-size: 20px;
      padding-left: 4px;
    }

    .text-timespan {
      margin-bottom: 5px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.8);
        padding-left: 4px;
      }
    }

    #profile-container,
    #education-container,
    #skills-container {
      margin-top: 20px;
    }

    .section-title {
      padding: 2px 4px;
      margin: 10px 0;
      background-color: lightgray;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .headline {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.3em;
    font-weight: bold;
  }
}
</style>
