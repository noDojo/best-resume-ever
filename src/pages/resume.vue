<template>
<div class="page-wrapper">
  <div class="page" :id="$route.params.resumeid">
    <div class="page-inner">
      <component :is="$route.params.resumeid"></component>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import '../resumes/resumes';
export default Vue.component('resume', {
    name: 'app'
});
</script>

<style scoped>
.page-inner{
  height: 100%;
  width: 100%;
}

.page-wrapper {
  overflow-x: hidden;
  background: #CCCCCC;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  /* prevent section titles from running off on the right */
  width: 95%;
}

.page {
  background: white;
  position: relative;
  /* width: 21cm; */
  /* company name and position don't have to be stacked at this width */
  width: 22cm;
  /* correct height for basic.pdf */
  height: 55cm;
  /* correct height for left-right.pdf */
  /* height: 106cm; */
  /* correct height for side-bar.pdf */
  /* height: 80cm; */
  /* correct height for side-bar-rtl.pdf */
  /* height: 84cm; */
  /* correct height for side-bar-projects.pdf */
  /* height: 78cm; */
  /* correct height for oblique.pdf, oblique-rtl.pdf */
  /* height: 58cm; */
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
</style>
