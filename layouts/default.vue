<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { THEME, curvature } from '../themes/testTheme';
import { styleService } from '../services/styles.service';

export default {
    created: function() {
        styleService.initTheme(THEME, curvature);
    },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

html {
    font-family: 'Open Sans', serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>
