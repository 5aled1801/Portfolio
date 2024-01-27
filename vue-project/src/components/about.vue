<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="about" id="about">
    <b-container>
      <h1>About</h1>
      <p>
        I’m an undergraduate student at FCI_ZU, specializing in Information Technology. And junior
        front-end developer vue.js. I am excited about the prospect of contributing my skills to a
        dynamic development team. Eager to further expand my proficiency in frontend technologies
        and learn from experienced professionals in the field, I am confident in my ability to adapt
        quickly and deliver high-quality results.
      </p>
    </b-container>
  </div>
</template>
<style lang="scss">
.about {
  position: relative;
  padding-top: 30px;
  height: 100vh;

  h1 {
    text-align: center;
    background: var(--linear-color);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: white;
    position: absolute;
    min-height: 400px;
    width: 80%;
    font-size: 20px;
    line-height: 2;
    top: 36%;
  }
}
@media (max-width: 766px) {
  p {
    width: 90%;
    font-size: 20px;
    line-height: 2;
    top: 23%;
  }
}
@media (max-width: 636px) {
  p {
    font-size: 17px !important;
    line-height: 1.8 !important;
    top: 24% !important;
    width: 90% !important;
  }
}
</style>
