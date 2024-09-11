<template>
  <div class="Banner">
    <div class="slider">
      <button class="slider--btn slider--btn__prev" @click="change(-1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
  
      <div class="slides__wrapper">
        <div class="slides">
          <!-- slide 1 -->
          <div
            v-for="(slide, index) in slides"
            :key="index"
            :class="['slide', getSlideClass(index)]"
            @mousemove="onMouseMove($event, index)"
            @mouseleave="onMouseLeave"
          >
            <div class="slide__inner">
              <div class="slide--image__wrapper">
                <img class="slide--image" :src="slide.image" :alt="slide.alt" />
              </div>
            </div>
          </div>
          <div
            v-for="(slide, index) in slides"
            :key="'bg-' + index"
            :class="['slide__bg', getSlideClass(index)]"
            :style="{ '--bg': `url(${slide.image})` }"
          ></div>
        </div>
        <div class="slides--infos">
          <!-- Slide Info -->
          <div
            v-for="(slide, index) in slides"
            :key="'info-' + index"
            :class="['slide-info', getSlideClass(index)]"
          >
            <div class="slide-info__inner">
              <div class="slide-info--text__wrapper">
                <div data-title class="slide-info--text">
                  <span>{{ slide.title }}</span>
                </div>
                <div data-subtitle class="slide-info--text">
                  <span>{{ slide.subtitle }}</span>
                </div>
                <div data-description class="slide-info--text">
                  <span>{{ slide.description }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <button class="slider--btn slider--btn__next" @click="change(1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
  
      <div class="loader" v-if="loading">
        <span class="loader__text">{{ progressPercent }}%</span>
      </div>
<!--   
      <div class="support">
        <a href="https://twitter.com/DevLoop01" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
            />
          </svg>
        </a>
        <a href="https://github.com/devloop01/voyage-slider" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      </div> -->
    </div>

  </div>
  
    
  </template>
  
  <script>
  import { ref, onMounted, nextTick } from "vue";
  import imagesLoaded from "imagesloaded";
  
  // Utility functions
  const wrap = (n, max) => (n + max) % max;
  const lerp = (a, b, t) => a + (b - a) * t;
  
  export default {
    setup() {
      const slides = ref([
        {
          image:
            "https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg",
          alt: "Image 1",
          title: "Highlands",
          subtitle: "Scotland",
          description: "The mountains are calling",
        },
        {
          image:
            "https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg",
          alt: "Image 2",
          title: "Machu Pichu",
          subtitle: "Peru",
          description: "Adventure is never far away",
        },
        {
          image: "https://devloop01.github.io/voyage-slider/images/chamonix.jpg",
          alt: "Image 3",
          title: "Chamonix",
          subtitle: "France",
          description: "Let your dreams come true",
        },
      ]);
  
      const currentSlideIndex = ref(0);
      const loading = ref(true);
      const progress = ref({ current: 0, target: 0 });
      const progressPercent = ref(0);
  
      onMounted(() => {
        setupLoader();
      });
  
      const setupLoader = () => {
        const images = document.querySelectorAll("img");
        const totalImages = images.length;
        let loadedImages = 0;
  
        images.forEach((image) => {
          imagesLoaded(image, (instance) => {
            if (instance.isComplete) {
              loadedImages++;
              progress.value.target = loadedImages / totalImages;
            }
          });
        });
  
        const updateProgress = () => {
          progress.value.current = lerp(
            progress.value.current,
            progress.value.target,
            0.06
          );
          progressPercent.value = Math.round(progress.value.current * 100);
  
          if (progressPercent.value === 100) {
            loading.value = false;
          } else {
            requestAnimationFrame(updateProgress);
          }
        };
  
        updateProgress();
      };
  
      const change = (direction) => {
        currentSlideIndex.value = wrap(
          currentSlideIndex.value + direction,
          slides.value.length
        );
      };
  
      const getSlideClass = (index) => {
        if (index === currentSlideIndex.value) return "current";
        if (index === wrap(currentSlideIndex.value + 1, slides.value.length))
          return "next";
        if (index === wrap(currentSlideIndex.value - 1, slides.value.length))
          return "previous";
        return "";
      };
  
      const onMouseMove = (event, index) => {
        const slideInner = event.currentTarget.querySelector(".slide__inner");
        const slideInfoInner =
          event.currentTarget.querySelector(".slide-info__inner");
  
        console.log(event.currentTarget);
        console.log(event.currentTarget.querySelector(".slide__inner"));
        console.log(event.currentTarget.querySelector(".slide-info__inner"));
  
        if (slideInner && slideInfoInner) {
          const ox =
            (event.offsetX - slideInner.clientWidth * 0.5) / (Math.PI * 3);
          const oy =
            -(event.offsetY - slideInner.clientHeight * 0.5) / (Math.PI * 4);
  
          slideInner.style.setProperty("--rotX", `${oy.toFixed(2)}deg`);
          slideInner.style.setProperty("--rotY", `${ox.toFixed(2)}deg`);
  
          slideInfoInner.style.setProperty(
            "--bgPosX",
            `${(-ox * 0.3).toFixed(2)}%`
          );
          slideInfoInner.style.setProperty(
            "--bgPosY",
            `${(oy * 0.3).toFixed(2)}%`
          );
        }
      };
  
      const onMouseLeave = (event) => {
        const slideInner = event.currentTarget.querySelector(".slide__inner");
        const slideInfoInner =
          event.currentTarget.querySelector(".slide-info__inner");
  
        if (slideInner && slideInfoInner) {
          slideInner.style.setProperty("--rotX", `${oy.toFixed(2)}deg`);
          slideInner.style.setProperty("--rotY", `${ox.toFixed(2)}deg`);
  
          slideInfoInner.style.setProperty(
            "--bgPosX",
            `${(-ox * 0.3).toFixed(2)}%`
          );
          slideInfoInner.style.setProperty(
            "--bgPosY",
            `${(oy * 0.3).toFixed(2)}%`
          );
        }
      };
  
      return {
        slides,
        currentSlideIndex,
        loading,
        progressPercent,
        change,
        getSlideClass,
        onMouseMove,
        onMouseLeave,
      };
    },
  };
  </script>
  
  <style lang="less" >
  // .Banner{


    
  
  
  
  
  
  
  // @import url("https://api.fontshare.com/v2/css?f[]=archivo@100,200,300,400,500,600,700,800,900&f[]=clash-display@200,300,400,500,600,700&display=swap");
  
  :root {
    --slide-width: min(25vw, 300px);
    --slide-aspect: 2 / 3;
  
    --slide-transition-duration: 800ms;
    --slide-transition-easing: ease;
  
    --font-archivo: "Archivo", sans-serif;
    --font-clash-display: "Clash Display", sans-serif;
  }
  
.Banner{
  margin-top: 200px;


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
  }
  
  body {
    display: grid;
    place-items: center;
    overflow: hidden;
  
    background: rgba(0, 0, 0, 0.787);
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
    &:focus {
      outline: none;
      border: none;
    }
  }
  
  /* ------------------------------------------------ */
  /* -------------------- SLIDER -------------------- */
  /* ------------------------------------------------ */
  
  .slider {
    // width: calc(3 * var(--slide-width));
    height: calc(2 * var(--slide-height));
    display: flex;
    align-items: center;
  }
  
  .slider--btn {
    --size: 40px;
  
    display: inline-flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
    z-index: 999;
  
    & svg {
      width: var(--size);
      height: var(--size);
      stroke: white;
    }
  
    &:hover {
      opacity: 1;
    }
  }
  
  .slides__wrapper {
    width: 100%;
    height: 100%;
  
    display: grid;
    place-items: center;
  
    & > * {
      grid-area: 1 / -1;
    }
  }
  
  .slides,
  .slides--infos {
    width: 100%;
    height: 100%;
  
    pointer-events: none;
  
    display: grid;
    place-items: center;
    & > * {
      grid-area: 1 / -1;
    }
  }
  
  /* ------------------------------------------------ */
  /* -------------------- SLIDE --------------------- */
  /* ------------------------------------------------ */
  
  .slide {
    --slide-tx: 0px;
    --slide-ty: 0vh;
    --padding: 0px;
    --offset: 0;
  
    width: var(--slide-width);
    height: auto;
    aspect-ratio: var(--slide-aspect);
    user-select: none;
    perspective: 800px;
  
    transform: perspective(1000px)
      translate3d(var(--slide-tx), var(--slide-ty), var(--slide-tz, 0))
      rotateY(var(--slide-rotY)) scale(var(--slide-scale));
    transition: transform var(--slide-transition-duration)
      var(--slide-transition-easing);
  }
  
  .slide.current {
    --slide-scale: 1.2;
    --slide-tz: 0px;
    --slide-tx: 0px;
    --slide-rotY: 0;
  
    pointer-events: auto;
  }
  
  .slide.next {
    --slide-tx: calc(1 * var(--slide-width) * 1.07);
    --slide-rotY: -45deg;
  }
  
  .slide.previous {
    --slide-tx: calc(-1 * var(--slide-width) * 1.07);
    --slide-rotY: 45deg;
  }
  
  .slide:not(.current) {
    --slide-scale: 1;
    --slide-tz: 0;
  
    pointer-events: none;
  }
  
  .slide.current {
    & .slide--image {
      filter: brightness(0.8);
    }
  }
  
  .slide:not(.current) {
    & .slide--image {
      filter: brightness(0.5);
    }
  }
  
  .slide__inner {
    --rotX: 0;
    --rotY: 0;
    --bgPosX: 0%;
    --bgPosY: 0%;
  
    position: relative;
    left: calc(var(--padding) / 2);
    top: calc(var(--padding) / 2);
    width: calc(100% - var(--padding));
    height: calc(100% - var(--padding));
    transform-style: preserve-3d;
    transform: rotateX(var(--rotX)) rotateY(var(--rotY));
  }
  
  .slide--image__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .slide--image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%) scale(1.25)
      translate3d(var(--bgPosX), var(--bgPosY), 0);
    transition: filter var(--slide-transition-duration)
      var(--slide-transition-easing);
  }
  
  .slide__bg {
    position: fixed;
    inset: -20%;
    background-image: var(--bg);
    background-size: cover;
    background-position: center center;
  
    z-index: -1;
    pointer-events: none;
  
    transition: opacity var(--slide-transition-duration) ease,
      transform var(--slide-transition-duration) ease;
  
    &::before {
      content: "";
      position: absolute;
      inset: 0;
    }
  
    &::before {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
    }
  
    &:not(.current) {
      opacity: 0;
    }
  
    &.previous {
      transform: translateX(-10%);
    }
  
    &.next {
      transform: translateX(10%);
    }
  }
  
  /* ------------ SLIDE INFO ---------------- */
  
  .slide-info {
    --padding: 0px;
  
    position: relative;
    width: var(--slide-width);
    height: 100%;
    aspect-ratio: var(--slide-aspect);
    user-select: none;
    perspective: 800px;
    z-index: 100;
  }
  
  .slide-info.current {
    & .slide-info--text span {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition-delay: 250ms;
    }
  }
  
  .slide-info:not(.current) {
    & .slide-info--text span {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
      transition-delay: 0ms;
    }
  }
  
  .slide-info__inner {
    position: relative;
    left: calc(var(--padding) / 2);
    top: calc(var(--padding) / 2);
    width: calc(100% - var(--padding));
    height: calc(100% - var(--padding));
    transform-style: preserve-3d;
    transform: rotateX(var(--rotX)) rotateY(var(--rotY));
  }
  
  .slide-info--text__wrapper {
    --z-offset: 45px;
  
    position: absolute;
    height: fit-content;
    left: -15%;
    bottom: 15%;
    transform: translateZ(var(--z-offset));
    z-index: 2;
    pointer-events: none;
  }
  
  .slide-info--text {
    font-family: var(--font-clash-display);
    color: #fff;
    overflow: hidden;
  
    & span {
      display: block;
      white-space: nowrap;
      transition: var(--slide-transition-duration) var(--slide-transition-easing);
      transition-property: opacity, transform;
    }
  
    &[data-title],
    &[data-subtitle] {
      font-size: min(3cqw, 2.4rem);
      font-weight: 800;
      letter-spacing: 0.2cqw;
      white-space: nowrap;
      text-transform: uppercase;
    }
  
    &[data-subtitle] {
      margin-left: 2cqw;
      font-size: min(2.2cqw, 1.8rem);
      font-weight: 600;
    }
  
    &[data-description] {
      margin-left: 1cqw;
      font-size: min(1.5cqw, 0.95rem);
      font-family: var(--font-archivo);
      font-weight: 300;
    }
  }
  
  /* ------------------------------------------------ */
  /* -------------------- LOADER --------------------- */
  /* ------------------------------------------------ */
  
  .loader {
    position: fixed;
    inset: 0;
  
    display: grid;
    place-items: center;
  
    background: #000;
    z-index: 1000;
  
    opacity: 1;
    transition: opacity 0.5s ease-out;
  
    .loader__text {
      font-family: var(--font-clash-display);
      font-size: clamp(2rem, 2vw, 5rem);
      font-weight: 800;
      color: #fff;
    }
  }
  
  /* ------------------------------------------- */
  
  .support {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 10px;
    display: flex;
    a {
      margin: 0 10px;
      color: #fff;
      font-size: 1.8rem;
      backface-visibility: hidden;
      transition: all 150ms ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

}
  
 

  // }

  
  </style>
  