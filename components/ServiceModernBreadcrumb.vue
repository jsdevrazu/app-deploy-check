<template>
  <div
    class="breadcrumb-area bg_image--15 ptb--270 pt_md--190 pb_md--100 pt_sm--190 pb_sm--100 breadcrumb-title-bar breadcrumb-title-white"
    data-overlay="8"
    :style="{ backgroundImage: `url('/img/bg/bg-image-15.jpg')` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-inner text-center">
            <h1 class="heading heading-h1 text-white" v-html="contentData?.content">
            </h1>
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
      JSON.stringify(data?.filter((sec) => sec?.section === "bud-1")[0])
    );
    this.contentData = filterData;
  },
};
</script>
