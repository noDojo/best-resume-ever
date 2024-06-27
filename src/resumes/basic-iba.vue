<template>
  <div class="resume" id="template">
    <div id="resume-header">
      <div id="header-left">
        <div class="headline">
          {{ person.name.first }} {{ person.name.last }}
        </div>
        <div>{{ person.position }}</div>
        <!-- <div>
            <span class="headline">{{ person.name.first }} {{ person.name.last }} | </span>
            <span>{{ person.position }}</span>
        </div> -->
        <div id="info-flex">
          <span id="email">
            <a :href="'mailto:' + person.contact.email">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              {{ person.contact.email }}
            </a>
          </span>
          <span v-if="person.contact.phone" id="phone">
            <i class="fa fa-phone-square" aria-hidden="true"></i>
            {{ person.contact.phone }}
          </span>
          <span v-if="person.contact.linkedin" id="website">
            <a :href="person.contact.linkedinurl">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              {{ person.contact.linkedin }}
            </a>
          </span>
          <!-- <span v-if="person.contact.github" id="github">
            <a :href="'https://github.com/' + person.contact.github">
              <i class="fa fa-github" aria-hidden="true"></i>
              {{ person.contact.github }}
            </a>
          </span> -->
          <span v-if="person.contact.github2" id="github">
            <a :href="'https://github.com/' + person.contact.github2">
              <i class="fa fa-github" aria-hidden="true"></i>
              {{ person.contact.github2 }}
            </a>
          </span>
          <span v-if="person.contact.website" id="website">
            <a :href="person.contact.websiteurl" target="_blank">
              <!-- <i class="fa fa-home" aria-hidden="true"></i> -->
              <span class="with-icon--before">
                <svg style="height: 16px; width: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
                {{ person.contact.website }}
              </span>
              <!-- {{ person.contact.website }} -->
            </a>
          </span>
        </div>
      </div>
    </div>
    <div id="resume-body">
      <!-- PROFESSIONAL PROFILE -->
      <!-- <div v-if="person.profile != []">
        <div class="section-title">PROFESSIONAL PROFILE</div>
        <ul class="item-list">
          <li v-for="profile in person.profile" :key="profile.item">
            <div>{{ profile.item }}</div>
          </li>
        </ul>
      </div> -->
      <!-- PROFESSIONAL PROFILE -->
      <div class="bottom-space" style="margin-top: 10px;">
        <div class="section-title">PROFESSIONAL PROFILE</div>
        <!-- <span>{{ person.about }}</span> -->
        <ul style="list-style-type: none; padding-left: 30px;">
          <li>
            <div class="text">{{ person.about }}</div>
          </li>
        </ul>
      </div>
      <!-- SKILLS SUMMARY -->
      <div v-if="person.skills != []">
        <div class="section-title">SKILLS SUMMARY</div>
        <ul class="item-list">
            <li>
              <span class="bold-text">Programming Languages: </span><span>{{ person.skills[0].languages }}</span>
            </li>
            <li>
              <span class="bold-text">Web Technologies: </span><span>{{ person.skills[1].webtechnologies }}</span>
            </li>
            <li>
              <span class="bold-text">Database: </span><span>{{ person.skills[2].database }}</span>
            </li>
            <li>
              <span class="bold-text">CI/CD Tools: </span><span>{{ person.skills[3].cicdtools }}</span>
            </li>
            <li>
              <span class="bold-text">Monitoring & Analytics: </span><span>{{ person.skills[4].analytics }}</span>
            </li>
            <li>
              <span class="bold-text">Other: </span><span>{{ person.skills[5].other }}</span>
            </li>
        </ul>
      </div>
      <!-- PROFESSIONAL EXPERIENCE-->
      <div class="bottom-space">
        <div class="section-title">PROFESSIONAL EXPERIENCE</div>
        <div v-for="experience in person.experience" :key="experience.key" class="experience">
          <h2 class="company">{{ experience.company }}</h2>
          <p class="text-timespan">
            <span>{{ experience.position }} | </span>
            <span>{{ experience.timeperiod }}</span>
          </p>
          <ul class="bottom-space">
            <li v-for="item in experience.description" :key="item.bullet">
              <div class="text">{{ item.bullet }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- EDUCATION AND QUALIFICATION -->
      <div>
        <div class="section-title">EDUCATION</div>
        <div v-for="education in person.education" :key="education.degree">
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
        // margin-top: 20px;
        margin-top: 14px;
        font-size: 14px;

        span {
          margin-right: 25px;
        }

        i {
          margin-right: 5px;
        }
      }
    }

    .headline {
      color: rgba(0, 0, 0, 0.8);
      font-size: 1.3em;
      font-weight: bold;
    }
  }

  #resume-body {
    padding: 20px;

    .experience {
      ul {
        margin: 5px 0 0 0;
      }
    }

    .company,
    .education-description {
      font-size: 20px;
      padding-left: 4px;
      margin-top: 10px;
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

    .section-title {
      padding: 2px 4px;
      background-color: lightgray;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.8);
    }
    
    .item-list {
      margin: 10px 0;
    }

    .bottom-space {
      margin-bottom: 10px;
    }
  }
}
</style>
