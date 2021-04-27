<template>
  <div class="resume" id="template">
    <div id="resume-header">
      <div id="header-left">
        <h2 id="position">{{ person.position }}</h2>
        <h1 id="name">{{ person.name.first }} {{ person.name.last }}</h1>
        <div id="info-flex">
          <span id="email"
            ><a :href="'mailto:' + person.contact.email">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              {{ person.contact.email }}</a
            ></span
          >
          <span id="phone"
            ><i class="fa fa-phone-square" aria-hidden="true"></i>
            {{ person.contact.phone }}</span
          >
          <span v-if="person.contact.website" id="website"
            ><a :href="person.contact.website"
              ><i class="fa fa-home" aria-hidden="true"></i>
              {{ person.contact.website }}</a
            ></span
          >
          <span v-if="person.contact.github" id="github"
            ><a :href="contactLinks.github"
              ><i class="fa fa-github" aria-hidden="true"></i>
              {{ person.contact.github }}</a
            ></span
          >
        </div>
      </div>
      <div id="header-right">
        <div id="headshot"></div>
      </div>
    </div>
    <div id="resume-body">
      <div id="experience-container">
        <h2 id="experience-title">{{ lang.experience }}</h2>
        <div class="spacer"></div>
        <div
          class="experience"
          v-for="experience in person.experience"
          :key="experience.company"
        >
          <h2 class="company">{{ experience.company }}</h2>
          <p class="job-info">
            <span class="job-title">{{ experience.position }} | </span
            ><span class="experience-timeperiod">{{
              experience.timeperiod
            }}</span>
          </p>
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
          <ul v-if="experience.list">
            <li v-for="(item, index) in experience.list" :key="index">
              <span class="list-item-black">
                {{ item }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div id="education-container">
        <h2 id="education-title">{{ lang.education }}</h2>
        <div class="spacer"></div>
        <div
          class="education"
          v-for="education in person.education"
          :key="education.degree"
        >
          <h2 class="education-description">{{ education.description }}</h2>
          <p>
            <span class="degree">{{ education.degree }} | </span
            ><span class="education-timeperiod">{{
              education.timeperiod
            }}</span>
          </p>
        </div>
      </div>
      <div id="skills-container" v-if="person.skills != []">
        <h2 id="skills-title">{{ lang.skills }}</h2>
        <div class="spacer"></div>
        <p id="skill-description">{{ person.knowledge }}</p>
        <ul id="skill-list">
          <li class="skill" v-for="skill in person.skills" :key="skill.name">
            <span class="list-item-black">
              {{ skill.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div id="resume-footer">
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

const name = "purple";
export default Vue.component(name, getVueOptions(name));
</script>

<style lang="less" scoped>
@text-purple: #680568;

#template {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;

  h1,
  h2 {
    margin: 0;
    color: @text-purple;
  }

  p {
    margin: 0;
    font-size: 12px;
  }

  ul li {
    color: @text-purple;
    font-size: 12px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  .list-item-black {
    color: black;
  }

  #resume-header {
    color: white;
    height: 136px;
    background-color: purple;
    box-shadow: inset 0px 0px 200px #301030;
    padding: 40px;
    // padding: 40px 100px 25px;

    #header-left {
      /*width: 465px;*/
      width: 100%;
      float: left;

      h1 {
        font-size: 56px;
        color: white;
        text-transform: uppercase;
        line-height: 56px;
      }

      h2 {
        font-size: 22px;
        color: white;
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
    // padding: 40px;
    padding: 40px 40px 20px;
    // padding: 40px 100px;

    #experience-title,
    #education-title,
    #skills-title {
      font-size: 26px;
      text-transform: uppercase;
    }

    .experience {
      margin: 10px 0 10px;
      // margin: 10px 0 10px 50px;

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
      color: @text-purple;
      font-size: 16px;
    }

    .experience-timeperiod,
    .education-timeperiod {
      font-weight: 100;
      color: @text-purple;
      font-size: 16px;
    }

    .education {
      margin: 10px 0 10px;
      // margin: 10px 0 10px 50px;
    }

    #skill-list {
      column-count: 3;
      list-style-position: inside;

      ul li {
        font-size: 14px;
      }
    }

    #education-container,
    #skills-container {
      margin-top: 20px;
    }
  }

  #resume-footer {
    // padding: 20px 100px;
    padding: 20px;
    height: 135px;
    background-color: purple;
    box-shadow: inset 0px 0px 100px #301030;
    box-sizing: border-box;
    // position: absolute;
    // bottom: 0px;
    width: 100%;

    h2,
    p {
      color: white;
    }
  }
}

.spacer {
  width: 100%;
  border-bottom: 1px solid @text-purple;
  margin: 5px 0 10px;
}
</style>
