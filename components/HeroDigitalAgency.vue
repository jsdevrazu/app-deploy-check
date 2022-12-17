<template>
  <div class="brook-hero-number-slider-area position-relative">
    <div class="brook-element-carousel number-dot">
      <swiper :options="swiperOption">
        <div
          class="swiper-slide"
          v-for="slider in contentData?.children"
          :key="slider.content"
        >
          <div
            class="hero-item bg-image"
            :style="{ backgroundImage: `url(${slider.media})` }"
          >
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="hero-content-2 center">
                    <h3 v-html="slider?.content"></h3>
                    <n-link to="/about-us-01" class="bk-btn theme-btn"
                      >Explore Now</n-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { fetchContent } from "../utils/api";

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 20,
        loop: false,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      },
      lang: "en",
      contentData: null,
    };
  },
  async mounted() {
    const data = await fetchContent();
    const filterData = JSON.parse(
      JSON.stringify(data?.filter((sec) => sec?.section === "home-1")[0])
    );
    this.contentData = filterData;
  },
};
</script>
