<template>
  <label
    class="label"
    :style="theme"
  >
    <slot></slot>
  </label>
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
      alignSelf: 'left',
      padding: '10px',
      fontFamily: 'inherit',
      fontSize:'1em',
      fontWeight: 'bold',
      width: '100%',
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



