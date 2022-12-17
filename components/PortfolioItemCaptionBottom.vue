<template>
    <div class="portfolio with-caption">
        <div class="thumb video-with-thumb">
            <n-link :to="`/portfolio/${portfolio.slug}`">
                <img :src="portfolio.media || `https://via.placeholder.com/350x150`" :alt="portfolio.heading">
            </n-link>
        </div>
        <div class="caption-bottom text-left">
            <div class="info">
                <h5 class="heading heading-h5">
                    <n-link :to="`/portfolio/${portfolio.slug}`">
                        {{ portfolio.heading }}
                    </n-link>
                </h5>
                <p class="bk_pra" v-html="portfolio.content"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["portfolio"]
    };
</script>