<template>
    <h1
        class="header1"
        :style="style"
    >
        <slot></slot>
    </h1>
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
                fontSize: '3em',
                color: palette.grey03,
                textAlign: 'center',
                padding: '20px',
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



