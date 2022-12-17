<template>
  <div class="bk-accordion-style--2">
    <b-card no-body>
      <b-card-header header-tag="header">
        <b-button block v-b-toggle.accordion-1 class="acc-btn">
          Digital strategy
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text v-html="firstContent?.content">
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <b-button block v-b-toggle.accordion-2 class="acc-btn">
          UI/UX design and development
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text v-html="secondContent?.content">
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header header-tag="header">
        <b-button block v-b-toggle.accordion-3 class="acc-btn">
          Brand building
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text v-html="thirdContent?.content">
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
      firstContent: null,
      secondContent: null,
      thirdContent: null,
    };
  },
  async mounted() {
    const data = await fetchContent();
    const filterData = JSON.parse(
      JSON.stringify(data?.filter((sec) => sec?.section === "qa-1")[0])
    );
    this.firstContent = filterData?.children?.filter((sec) => sec?.section === "qa-1-1")[0]
    this.secondContent = filterData?.children?.filter((sec) => sec?.section === "qa-1-2")[0]
    this.thirdContent = filterData?.children?.filter((sec) => sec?.section === "qa-1-3")[0]
  },
};
</script>
