<template>
  <h1
    class="header1"
    :style="theme"
  >
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    customTheme: {
      type: Object,
      default: () => {},
    },
    customStyles: {
      type: Object,
      default: () => {},
    },
  },
  data: function () {
    const defaultStyles = {
      color: '#333',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'inherit',
      fontSize:'3em',
    };

    return {
      theme : {
        ...defaultStyles,
        ...this.customTheme,
        ...this.customStyles,
      }
    };
  },
}
</script>



