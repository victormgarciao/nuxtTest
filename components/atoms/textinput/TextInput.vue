<template>
  <input
    class="input"
    :style="style"
    @mouseover="changeHoverState()"
    @mouseleave="changeHoverState()"
    @focus="changeFocusState()"
    @blur="changeFocusState()"
  />
</template>

<script>
import { STATUS } from '../../../constants/inputStatus'

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
    customHoverStyle: {
      type: Object,
      default: () => {},
    },
    customFocusStyle: {
      type: Object,
      default: () => {},
    },
    customErrorStyle: {
      type: Object,
      default: () => {},
    },
    customWarningStyle: {
      type: Object,
      default: () => {},
    },
    customSuccessStyle: {
      type: Object,
      default: () => {},
    },
    status: {
      type: String,
      default: () => STATUS.DEFAULT,
    }
  },
  data: function () {
    // https://stackoverflow.com/questions/42872002/in-vue-js-component-how-to-use-props-in-css
    return {
      isHover: false,
      isFocus: false,
    };
  },
  computed: {
    style () {
      const inputStyles = {
        color: '#333',
        padding: '10px',
        border: 'none',
        borderRadius: '10px',
        border: 'solid 1px #ccc',
        fontFamily: 'inherit',
        fontSize:'1em',
        width: '100%',
        boxSizing: 'border-box',
        cursor: 'default',
      };

      const defaultStyle = {
        ...inputStyles,
        ...this.customTheme,
        ...this.customStyles,
      };

      const defaultHoverStyle = {
        // background: '#eee',
      };

      const defaultFocusStyle = {
        outline: 0,
        boxShadow: '0 0 5px #aaa',
      };

      const defaultErrorStyle = {
        border: '2px solid red',
      };
      const defaultWarningStyle = {
        border: '2px solid orange',
      };
      const defaultSuccessStyle = {
        border: '2px solid green',
      };

      const hoverStyle = {
        ...defaultHoverStyle,
        ...this.customHoverStyle,
      };

      const focusStyle = {
        ...defaultFocusStyle,
        ...this.customFocusStyle,
      };

      const errorStyle = {
        ...defaultErrorStyle,
        ...this.customErrorStyle,
      };

      const warningStyle = {
        ...defaultWarningStyle,
        ...this.customWarningStyle,
      };

      const successStyle = {
        ...defaultSuccessStyle,
        ...this.customSuccessStyle,
      };

      const renderedStyles = {
        ...defaultStyle,
        ...(this.isFocus === true) ? focusStyle : {},
        ...(this.isHover === true) ? hoverStyle : {},
        ...(this.status === STATUS.WARNING) ? warningStyle : {},
        ...(this.status === STATUS.ERROR) ? errorStyle : {},
        ...(this.status === STATUS.SUCCESS) ? successStyle : {},
      };

      return renderedStyles;
    },
  },
  methods: {
    changeHoverState () {
      this.isHover = !this.isHover;
    },
    changeFocusState () {
      this.isFocus = !this.isFocus;
    },
  },
}
</script>
