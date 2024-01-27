<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="skills" id="skills">
    <b-container>
      <h1>Skills</h1>
      <div class="content-skills">
        <img
          src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
          alt=""
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
          alt=""
        /><img
          src="https://cdn.freebiesupply.com/logos/thumbs/2x/bootstrap-4-logo.png"
          alt=""
        /><img
          src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          alt=""
        /><img src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png" alt="" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Pinialogo.svg"
          alt=""
          srcset=""
        />
      </div>
    </b-container>
  </div>
</template>
<style lang="scss">
.skills {
  height: 70vh;
  padding-top: 50px;
  position: relative;
  h1 {
    text-align: center;
    background: var(--linear-color);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content-skills {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    justify-content: space-around;
    position: absolute;
    top: 34%;
    left: 0%;
    width: 100%;
    padding-top: 50px;
    img {
      filter: drop-shadow(0px 0px 5px white);
      width: 151px;
      margin-top: 20px;
      height: 74px;
    }
  }
}
</style>
