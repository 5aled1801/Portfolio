<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home" style="height: 100vh">
    <b-container class="dd">
      <div class="textforme col-6">
        <h1>Hello</h1>
        <h2>I`m Khaled Hassan</h2>
        <p class="con">Front-end <span class="caller"></span></p>
      </div>
      <div class="right-part col-6">
        <img src="../components/icons/photo_2023-08-13_20-35-41.jpg" alt="" />
      </div>
    </b-container>
    <i class="fa-solid fa-angles-down"></i>
  </div>
</template>
<script>
export default {
  mounted() {
    document.addEventListener('DOMContentLoaded', function () {
      const text = document.querySelector('.caller')

      const textload = () => {
        setTimeout(() => {
          text.textContent = 'Developer'
        }, 0)
        setTimeout(() => {
          text.textContent = 'Freelancer'
        }, 7000)
        setTimeout(() => {
          text.textContent = 'Designer'
        }, 13000)
      }

      textload()

      setInterval(textload, 19000)
    })
  }
}
</script>
<style scoped lang="scss">
.home {
  display: flex;
}

.textforme {
  display: flex;
  flex-direction: column;
  align-self: center;
  color: white;
}

.con {
  display: flex;
}
.caller {
  border-right: 1px solid;
  background: var(--linear-color);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: Textcall 6s 1s both infinite;
  margin-left: 5px;
}
@keyframes Textcall {
  0% {
    width: 0;
  }
  50% {
    width: 150px;
  }
  100% {
    width: 0;
  }
}
p {
  font-size: 30px;
}
.dd {
  display: flex;
}
img {
  max-width: 300px;
  max-height: 500px;
  border-radius: 15px;
  transform: translateY(25%);
}
.right-part {
  display: flex;
  justify-content: center;
}
@media (max-width: 766px) {
  .home {
    overflow: visible;
  }
  .dd {
    flex-direction: column-reverse !important;
    align-content: center;
    align-self: center;
  }
  .right-part {
    align-self: center;
  }
  .textforme {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-left: 61px;
    position: absolute;
    top: 67%;
  }
  p {
    margin: 0;
    max-width: 291px;
  }
  img {
    max-height: 307px;
    transform: translateY(-28%);
  }
}
i {
  position: absolute;
  bottom: 10px;
  color: white;
  font-size: 27px;
  left: 50%;
  animation: arrow infinite 0.8s 0.5s normal;
}

@keyframes arrow {
  50% {
    bottom: 40px;
  }
  100% {
    bottom: 10px;
  }
}
</style>
