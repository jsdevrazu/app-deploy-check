<template>
    <div class="brook-breadcrumb-area bg_image--16 ptb--270 pt_md--190 pb_md--100 pt_sm--190 pb_sm--100 breadcrumb-title-bar" data-black-overlay='8' :style="{ backgroundImage: `url('/img/bg/bg-image-16.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner text-center">
                        <h6 class="heading heading-h6 text-white">SERVICES</h6>
                        <div class="bkseparator--30"></div>
                        <h1 class="heading heading-h1 text-white line-height-1 font-80">What we do</h1>
                        <div class="bkseparator--30"></div>
                        <h5 class="heading heading-h5 text-white line-height-1-95" v-html="contentData?.content"></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchContent } from '../utils/api';

export default {
    data(){
        return {
            contentData: null
        }
    },
    async mounted() {
    const data = await fetchContent();
    const filterData = JSON.parse(
      JSON.stringify(data?.filter((sec) => sec?.section === "tvp-1")[0])
    );
    this.contentData = filterData;
  },
}
</script>