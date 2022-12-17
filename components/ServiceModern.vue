<template>
    <div class="brook-service-modern ptb--150 ptb-md--80 ptb-sm--60 bg_color--1">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5">
                    <div class="modern-service">
                        <h3 class="heading heading-h3 line-height-1-42 wow move-up" v-html="contentData?.content"></h3>
                    </div>
                </div>
                <div class="col-xl-7 offset-xl-1 col-lg-7 mt_md--30 mt_sm--30">
                    <div class="modern-service wow move-up">
                        <h5 class="heading heading-h5">Creative services</h5>
                        <div class="bkseparator--20"></div>
                        <h5 class="heading heading-h5 body-color line-height-1-62" v-html="contentData?.children[0]?.content"></h5>
                        <div class="bkseparator--30"></div>
                        <p class="bk_pra" v-html="contentData?.children[1]?.content"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchContent } from '../utils/api';

export default {
  data() {
    return {
        contentData: null
    }
  },

  async mounted() {
    const data = await fetchContent();
    const filterData = JSON.parse(
      JSON.stringify(data?.filter((sec) => sec?.section === "bud-2")[0])
    );
    this.contentData = filterData;
  },
};
</script>
