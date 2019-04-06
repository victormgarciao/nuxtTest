<template>
    <input
        class="input"
        :style="style"
        @mouseover="changeHoverState()"
        @mouseleave="changeHoverState()"
        @focus="changeFocusState()"
        @blur="changeFocusState()"
    >
</template>

<script>
import { STATUS } from '../../../constants/inputStatus';
import { CURVE } from '../../../constants/theme';

export default {
    props: {
        theme: {
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
        },
    },
    data: function() {
        return {
            isHover: false,
            isFocus: false,
        };
    },
    computed: {
        style() {
            const palette = this.theme.palette;
            const curvature = this.theme.curvature;
            const typography = this.theme.typography;

            const cornerStyle = this.getBorderRadius(curvature);

            const inputStyles = {
                fontFamily: typography.content,
                fontSize: '1em',
                color: palette.grey03,
                padding: '10px',
                border: 'none',
                border: 'solid 1px',
                borderColor: palette.grey09,
                width: '100%',
                boxSizing: 'border-box',
                cursor: 'default',

                ...cornerStyle,
            };

            const defaultStyle = {
                ...inputStyles,
                ...this.customStyles,
            };

            const hoverStyle = {
                // background: '#eee',
                ...this.customHoverStyle,
            };

            const focusStyle = {
                outline: 0,
                boxShadow: `0 0 5px ${palette.grey09}`,
                ...this.customFocusStyle,
            };

            const errorStyle = {
                border: '2px solid',
                borderColor: palette.red01,
                ...this.customErrorStyle,
            };
            const warningStyle = {
                border: '2px solid',
                borderColor: palette.yellow01,
                ...this.warningStyle,
            };
            const successStyle = {
                border: '2px solid',
                borderColor: palette.green01,
                ...this.successStyle,
            };

            const renderedStyles = {
                ...defaultStyle,
                ...(this.isFocus === true ? focusStyle : {}),
                ...(this.isHover === true ? hoverStyle : {}),
                ...(this.status === STATUS.WARNING ? warningStyle : {}),
                ...(this.status === STATUS.ERROR ? errorStyle : {}),
                ...(this.status === STATUS.SUCCESS ? successStyle : {}),
            };

            return renderedStyles;
        },
    },
    methods: {
        changeHoverState() {
            this.isHover = !this.isHover;
        },
        changeFocusState() {
            this.isFocus = !this.isFocus;
        },
        getBorderRadius(curvature) {
            const curvatureStyle = {
                [CURVE.OFF]: { borderRadius: 0 },
                [CURVE.WEAK]: { borderRadius: '10px' },
                [CURVE.STRONG]: { borderRadius: '20px' },
            };

            return curvatureStyle[curvature];
        },
    },
};
</script>
