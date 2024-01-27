<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="project" id="projects">
    <b-container>
      <h1>Projects</h1>
      <div class="content">
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>E-commerce</h4>
          <div class="con-image">
            <img src="./../assets/images/e-commerce.png" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/E-commerce-Using-vue3/tree/main/vue-project">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://e-commerce-8821b.web.app">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>

        <!-- -->
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>Movies</h4>
          <div class="con-image">
            <img src="./../assets/images/movies.png" class="ss" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/MoviesApp">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://movies-7e7af.web.app">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>

        <!-- -->
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>weather</h4>
          <div class="con-image">
            <img src="./../assets/images/weather.png" class="ss" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/Weather">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://weather-1d634.web.app/">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>
        <!-- -->
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>restaurantt system</h4>
          <div class="con-image">
            <img src="./../assets/images/restaurant.png" class="ss" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/Resturant-system">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://weather-1d634.web.app/">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>
        <!-- -->
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>get repo by username</h4>
          <div class="con-image">
            <img src="./../assets/images/getRepo.png" class="ss" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/Get-repository-using-username">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://get-repo-31fcb.web.app">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>
        <!-- -->
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>yummy</h4>
          <div class="con-image">
            <img src="./../assets/images/yummy.png" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/Yummy">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://5aled1801.github.io/Yummy/">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>
        <!-- -->
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>Extra team</h4>
          <div class="con-image">
            <img src="./../assets/images/extraTeam.png" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/Extra-Team">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://5aled1801.github.io/Extra-Team/">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>
        <!-- -->
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>gym</h4>
          <div class="con-image">
            <img src="./../assets/images/gym.png" class="ss" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/gym">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://5aled1801.github.io/Gym/">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>
        <!---->
        <div class="pro col-12 col-sm-12 col-md-6 col-lg-4">
          <h4>kasper</h4>
          <div class="con-image">
            <img src="./../assets/images/template2.png" />
          </div>
          <div class="action">
            <a href="https://github.com/5aled1801/Kasper-template">
              <button class="btn Demo">Demo</button>
            </a>
            <a href="https://5aled1801.github.io/Kasper-template/">
              <button class="btn live">Live</button>
            </a>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<style lang="scss">
.project {
  padding-top: 30px;
  h1 {
    text-align: center;
    background: var(--linear-color);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    gap: 50px;
    .pro {
      width: 35%;
      min-width: 400px;
      background-color: rgba(44, 44, 44, 0.19);
      box-shadow: inset 0px 0px 18px white;
      text-align: -webkit-center;
      border-radius: 30px;
      padding-top: 10px;
      h4 {
        text-transform: capitalize;
        font-size: 29px;
        color: ghostwhite;
      }
      .con-image {
        width: 90%;
        min-width: 90%;
        max-height: 400px;
        min-height: 400px;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          position: absolute;
          left: 0;
          &:hover {
            animation: animal 2s alternate;
            // animation: name duration timing-function delay iteration-count direction fill-mode;
          }
        }
      }
    }
  }
}
a:nth-last-of-type() {
  color: white !important;
  transition: 0.5s;
  &:hover {
    color: #4ac04a;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background-color: #4ac04a;
    width: 77px;
    color: white;
  }
}
@keyframes animal {
  from {
    bottom: -442%;
  }
  to {
    bottom: 0%;
  }
}
.live {
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background-color: #225a22;
  width: 77px;
  color: white;
}
.Demo {
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background-color: #7d0d0d;
  width: 77px;
  color: white;
}
</style>
