<template>
  <div class="brook-icon-boxes-area ptb--150 ptb-md--80 ptb-sm--80">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="brook-section-title text-center mb--20">
            <h6 class="heading heading-h6 theme-color font-blod">
              REASONS WHY
            </h6>
            <div class="bkseparator--40"></div>
            <h2 v-html="contentData?.content" class="heading heading-h2 heading-font"></h2>
          </div>
        </div>
      </div>
      <div class="row mt--30">
        <div
          class="col-lg-4 col-sm-6 mt--40 plr--50 plr_sm--5 plr_md--5 wow move-up"
          v-for="service in contentData?.children"
          :key="service.content"
        >
          <IconBoxItemOne :service="service" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data/service.json";
import { fetchContent } from "../../utils/api";

export default {
  components: {
    IconBoxItemOne: () => import("../IconBoxItemOne"),
  },

  data() {
    return {
      data,
      lang: "en",
      contentData:null
    };
  },
  async mounted() {
    this.lang = this.$route?.query?.lan;
    const data = await fetchContent();
    const filterData = JSON.parse(
      JSON.stringify(data?.filter((sec) => sec?.section === "home-5")[0])
    );
    this.contentData = filterData;
  },
};
</script>
