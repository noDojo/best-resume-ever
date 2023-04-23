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
        <div class="bullet-list">
          <div v-for="profile in person.profile" :key="profile.item" class="item">
            <div class="icon bullet-icon">
              <i class="material-icons">chevron_right</i>
            </div>
            <div class="text">{{ profile.item }}</div>
          </div>
        </div>
      </div>
      <!-- SKILLS SUMMARY - ORIGINAL -->
      <!-- <div id="skills-container" v-if="person.skills != []">
        <div class="section-title">SKILLS SUMMARY</div>
        <p id="skill-description">{{ person.knowledge }}</p>
        <ul id="skill-list">
          <li class="skill" v-for="skill in person.skills" :key="skill.name">
            <span class="list-item-black">{{ skill.name }}</span>
          </li>
        </ul>
      </div> -->
      <!-- SKILLS SUMMARY - NEW -->
      <!-- <div id="skills-container">
        <div class="section-title">SKILLS SUMMARY</div> -->
        <!-- todo: these need to loop on an additional layer in the yaml hierarchy -->
        <!-- PROGRAMMING LANGUAGES -->
        <!-- <div class="bullet-list">
          <div class="icon bullet-icon">
            <i class="material-icons">chevron_right</i>
          </div>
          <span class="md-bold-text">Programming Languages:</span>
          <span v-for="language in person.languages" :key="language.item" class="item">
            {{ language.item }}
            <span v-if="language !== person.languages[person.languages.length - 1]">,</span>
          </span>
        </div> -->
        <!-- WEB TECHNOLOGIES -->
        <!-- <div class="bullet-list">
          <div class="icon bullet-icon">
            <i class="material-icons">chevron_right</i>
          </div>
          <span class="md-bold-text">Web Technologies:</span>
          <span v-for="tech in person.webtechnologies" :key="tech.item" class="item">
            {{ tech.item }}
            <span v-if="tech !== person.webtechnologies[person.webtechnologies.length - 1]">,</span>
          </span>
        </div>
      </div> -->
      <!-- APPLICATION SERVERS -->
      <!-- <div class="bullet-list">
        <div class="icon bullet-icon">
          <i class="material-icons">chevron_right</i>
        </div>
        <span class="md-bold-text">Application Servers:</span>
        <span v-for="appserver in person.applicationservers" :key="appserver.item" class="item">
          {{ appserver.item }}
          <span v-if="appserver !== person.applicationservers[person.applicationservers.length - 1]">,</span>
        </span>
      </div> -->
      <!-- DATABASE -->
      <!-- <div class="bullet-list">
        <div class="icon bullet-icon">
          <i class="material-icons">chevron_right</i>
        </div>
        <span class="md-bold-text">Database:</span>
        <span v-for="db in person.database" :key="db.item" class="item">
          {{ db.item }}
          <span v-if="db !== person.database[person.database.length - 1]">,</span>
        </span>
      </div> -->
      <!-- OPERATING SYSTEMS -->
      <!-- <div class="bullet-list">
        <div class="icon bullet-icon">
          <i class="material-icons">chevron_right</i>
        </div>
        <span class="md-bold-text">Operating Systems:</span>
        <span v-for="os in person.operatingsystems" :key="os.item" class="item">
          {{ os.item }}
          <span v-if="os !== person.operatingsystems[person.operatingsystems.length - 1]">,</span>
        </span>
      </div> -->
      <!-- OTHER -->
      <!-- <div class="bullet-list">
        <div class="icon bullet-icon">
          <i class="material-icons">chevron_right</i>
        </div>
        <span class="md-bold-text">Other:</span>
        <span v-for="other in person.other" :key="other.item" class="item">
          {{ other.item }}
          <span v-if="other !== person.other[person.other.length - 1]">,</span>
        </span>
      </div> -->
      <!-- SKILLS SUMMARY - NEW LOOP -->
      
      <!-- PROFESSIONAL EXPERIENCE-->
      <div id="experience-container">
        <div class="section-title">PROFESSIONAL EXPERIENCE</div>
        <div v-for="experience in person.experience" :key="experience.key" class="experience">
          <h2 class="company">{{ experience.company }}</h2>
          <p class="job-info">
            <span class="job-title">{{ experience.position }} | </span>
            <span class="experience-timeperiod">{{ experience.timeperiod }}</span>
          </p>
          <div class="bullet-list">
            <div v-for="item in experience.description" :key="item.bullet" class="item">
              <div class="icon bullet-icon">
                <i class="material-icons">chevron_right</i>
              </div>
              <div class="text">{{ item.bullet }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- EDUCATION AND QUALIFICATION -->
      <div id="education-container">
        <div class="section-title">EDUCATION AND QUALIFICATION</div>
        <div v-for="education in person.education" :key="education.degree" class="education">
          <h2 class="education-description">{{ education.description }}</h2>
          <p>
            <span class="degree">{{ education.degree }} | </span>
            <span class="education-timeperiod">{{ education.timeperiod }}</span>
          </p>
        </div>
      </div>
    </div>
    <div id="resume-footer" class="hidden">
      <div v-if="person.about">
        <h2>{{ lang.about }}</h2>
        <p>{{ person.about }}</p>
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
    color: rgba(0, 0, 0, 0.7);
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
    // height: 136px;
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
    padding: 20px 40px;

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
    }

    .job-info {
      margin-bottom: 5px;
    }

    .job-title,
    .degree {
      font-weight: 700;
      font-size: 16px;
    }

    .experience-timeperiod,
    .education-timeperiod {
      font-weight: 100;
      color: rgba(0, 0, 0, 0.7);
      font-size: 16px;
    }

    .education {
      margin: 10px 0 10px 30px;
    }

    #skill-list {
      column-count: 3;
      list-style-position: inside;

      ul li {
        font-size: 14px;
      }
    }

    #profile-container,
    #education-container,
    #skills-container {
      margin-top: 20px;
    }
  }

  .section-title {
    padding: 2px 4px;
    background-color: lightgray;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.8);
  }

  #resume-footer {
    padding: 40px;
    height: 135px;
    box-shadow: inset 0px 0px 100px #301030;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    width: 100%;

    h2,
    p {
      color: rgba(0, 0, 0, 0.7);
    }
  }
}

.spacer {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  margin: 5px 0 10px;
}

.bullet-list {
  padding-bottom: 10px;
  font-weight: 300;

  .item {
    padding: 4px 0;
  }

  .text {
    overflow: auto;
  }
}

.icon {
  width: 16%;
  float: left;
  margin-left: 0;

  .fa,
  .material-icons {
    text-align: center;
    display: block;
    font-size: 12pt;
  }
}

.icon.bullet-icon {
  width: 6%;
  padding-top: 4px;
}

.headline {
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.3em;
  font-weight: bold;
}
</style>
