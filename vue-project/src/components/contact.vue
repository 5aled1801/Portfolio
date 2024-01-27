<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cont" id="contact">
    <b-container>
      <h1>Contact</h1>
      <div class="links">
        <p>01284456019</p>
        <a
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkhaled-hassan-2820b4248%3Ffbclid%3DIwAR2VIGZjBQS5MhgnvC7zC9Y_bNcm7eVOe_TUJKgheIIA69m-8Ow2pRCJ2RY&h=AT3TSgudB4S6TZFyYnwknzBA_Tu-NvUgZThQpKpZQBdzvgBAwsJalLCPjzWUEQopToP4Ue-cRRwYphWIu4XjAPaso_SJKNtWQbvEjaickdrV6BxtRVd40l5Gliz5MPjhxPbL0Q"
          >Linkedin</a
        >
        <a href="mailto:khaled.h.almass@gmail.com">Gmail</a>
        <a href="https://github.com/5aled1801">github</a>
      </div>
      <div class="crea">
        <h3>Credated by: Khaled Hassan</h3>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss">
.cont {
  height: 50vh;
  padding-top: 70px;
  padding-bottom: 200px;

  h1 {
    text-align: center;
    background: var(--linear-color);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: white;
    font-size: 20px;
    margin-top: 50px;
  }
  .links {
    display: flex;
    flex-direction: column;
    a {
      color: white;
      font-size: 20px;
      padding: 10px;
      text-decoration: none;
    }
  }
  .crea {
    padding: 100px 0 20px 0;
    h3 {
      text-align: center;
      background: var(--linear-color);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
