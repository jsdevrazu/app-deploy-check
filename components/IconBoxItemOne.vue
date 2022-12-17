<template>
    <div class="icon-box text-center no-border" :class="addClass">
        <div class="inner">
            <div v-if="service.media"  class="icon">
                <i :class="service.media"></i>
            </div>
            <p v-else>placeholder</p>
            <div class="content">
                <h5 class="heading heading-h5">{{ service.heading }}</h5>
                <p class="bk_pra" v-html="service?.content"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service', 'addClass']
    };
</script>