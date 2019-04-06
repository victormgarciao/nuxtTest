<template>
    <label
        class="label"
        :style="style"
    >
        <slot></slot>
    </label>
</template>

<script>
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
    },
    computed: {
        style() {
            const palette = this.theme.palette;
            const typography = this.theme.typography;

            const defaultStyles = {
                fontFamily: typography.content,
                fontSize: '1em',
                fontWeight: 'bold',
                textAlign: 'left',
                color: palette.grey03,
                padding: '10px',
                width: '100%',
            };

            const renderedStyles = {
                ...defaultStyles,
                ...this.customStyles,
            };

            return renderedStyles;
        },
    },
};
</script>



