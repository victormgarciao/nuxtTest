<template>
    <button 
        class="Button"
        :style="style"
        :disabled="isDisabled"
        @click="onClick"
        @mouseover="changeHoverState()"
        @mouseleave="changeHoverState()"
        @focus="changeFocusState()"
        @blur="changeFocusState()"
    >
        <slot></slot>
    </button>
</template>
​
<script>
import Label from '../../atoms/label/Label';
import { CURVE } from '../../../constants/theme';

export const Kind = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    TERTIARY: 'TERTIARY',
    DETRIMENTAL: 'DETRIMENTAL',
    POSITIVE: 'POSITIVE',
};

export default {
    components: { Label },
    props: {
        onClick: {
            type: Function,
            required: true,
        },
        theme: {
            type: Object,
            required: true,
        },
        kind: {
            type: String,
            default: () => Kind.PRIMARY,
        },
        isDisabled: {
            type: Boolean,
            default: () => false,
        },
        customDisabledStyle: {
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

            const kindStyle = this.getStylesFromKind(this.kind, palette);
            const cornerStyle = this.getBorderRadius(curvature);

            const disableStyle = {
                cursor: 'not-allowed',
                opacity: 0.3,
                ...this.customDisabledStyle,
            };

            const hoverStyle = {
                textDecoration: 'none',
                opacity: 0.75,
                ...this.customHoverStyle,
            };

            const focusStyle = {
                boxShadow: `0 0 10px ${palette.grey09}`,
                ...this.customFocusStyle,
            };

            const defaultStyles = {
                fontFamily: typography.content,
                overflow: 'hidden',
                fontSize: '1em',
                outline: 0,
                position: 'relative',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'inline-block',
                paddingTop: 3,
                paddingRight: 20,
                paddingBottom: 5,
                paddingLeft: 20,
                textAlign: 'center',
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 1,
                margin: 0,
                cursor: 'pointer',
                transition: 'opacity 0.2s ease-in-out',
                width: '100%',

                ...kindStyle,
                ...cornerStyle,
            };

            const renderedStyles = {
                ...defaultStyles,
                ...this.customStyles,
                ...(this.isDisabled === true ? disableStyle : {}),
                ...(this.isFocus === true ? focusStyle : {}),
                ...(this.isHover === true ? hoverStyle : {}),
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
        getStylesFromKind(kind, palette) {
            const kindStyles = {
                [Kind.PRIMARY]: {
                    backgroundColor: palette.primary,
                    color: palette.contrast,
                },
                [Kind.SECONDARY]: {
                    backgroundColor: palette.grey09,
                    color: palette.grey04,
                },
                [Kind.TERTIARY]: {
                    backgroundColor: palette.white,
                    color: palette.grey04,
                    borderColor: palette.grey10,
                },
                [Kind.DETRIMENTAL]: {
                    backgroundColor: palette.detrimental,
                    color: palette.white,
                },
                [Kind.POSITIVE]: {
                    backgroundColor: palette.positive,
                    color: palette.white,
                },
            };

            return kindStyles[kind];
        },
        getBorderRadius(curvature) {
            const curvatureStyle = {
                [CURVE.OFF]: { borderRadius: 0 },
                [CURVE.WEAK]: { borderRadius: '4px' },
                [CURVE.STRONG]: { borderRadius: '20px' },
            };

            return curvatureStyle[curvature];
        },
    },
};
</script>