<template>
    <div class="bk-accordion">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-11 class="acc-btn">
                    Digital strategy
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-11" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text v-html="fourContent?.content">
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-22 class="acc-btn">
                    UI/UX design and development
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-22" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text v-html="fiveContent?.content">
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-33 class="acc-btn">
                    Brand building 
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-33" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text v-html="sixContent?.content">
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
import { fetchContent } from '../utils/api';

export default {
  data() {
    return {
      fourContent: null,
      fiveContent: null,
      sixContent: null,
    };
  },
  async mounted() {
    const data = await fetchContent();
    const filterData = JSON.parse(
      JSON.stringify(data?.filter((sec) => sec?.section === "qa-1")[0])
    );
    this.fourContent = filterData?.children?.filter((sec) => sec?.section === "qa-4")[0]
    this.fiveContent = filterData?.children?.filter((sec) => sec?.section === "qa-1-5")[0]
    this.sixContent = filterData?.children?.filter((sec) => sec?.section === "qa-1-6")[0]
  },
};
</script>