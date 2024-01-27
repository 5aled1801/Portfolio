<template>
  <header>
    <b-container>
      <div class="div">
        <BNavbar toggleable="lg">
          <BNavbarBrand id="logoP" href="#">Portfolio</BNavbarBrand>
          <BNavbarToggle target="nav-collapse" style="" />
          <BCollapse id="nav-collapse" is-nav>
            <BNavbarNav>
              <BNavItem class="links"><a href="#">Home</a></BNavItem>
              <BNavItem class="links"> <a href="#about">About</a></BNavItem>
              <BNavItem class="links"> <a href="#skills">Skilss</a></BNavItem>
              <BNavItem class="links"> <a href="#projects">Projects</a></BNavItem>
              <BNavItem class="links"> <a href="#contact">Contact</a></BNavItem>
            </BNavbarNav>
            <!-- Right aligned nav items -->
            <BNavbarNav class="me-auto mb-2 mb-lg-0"> </BNavbarNav>
          </BCollapse>
        </BNavbar>
      </div>
    </b-container>
    <RouterView />
  </header>
  <landing />
  <aboutVue />
  <skillsVue />
  <projects />
  <contact />
</template>
<script>
import landing from './components/landing.vue'
import skillsVue from './components/skills.vue'
import aboutVue from './components/about.vue'
import projects from './components/projects.vue'
import contact from './components/contact.vue'
export default {
  components: { landing, skillsVue, aboutVue, projects, contact }
}
</script>
<style scoped lang="scss">
button {
  box-shadow: inset 0px 0px 20px 20px white;
}
button:hover {
  box-shadow: inset 0px 0px 20px 8px white;
}
header {
  position: absolute;
  width: 100%;
}
#logoP {
  font-size: 30px !important;
  font-weight: 500;
  background: linear-gradient(#ffffff, #171717);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.links a {
  text-decoration-line: none;
  color: gray;
}
.links a:hover {
  color: var(--main-color);
}
ul {
  position: absolute;
  left: 80%;
  transform: translateX(-50%);
}
@media (max-width: 992px) {
  ul {
    position: absolute;
    width: 100%;
    left: 50%;
  }
}
</style>
