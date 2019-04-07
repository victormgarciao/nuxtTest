<template>
    <svg xmlns="http://www.w3.org/2000/svg"
        :width="size ? size : width"
        :height="size ? size : height"
        viewBox="0 0 18 18"
        :aria-labelledby="iconName"
        role="presentation"
    >
        <title
        :id="iconName"
        lang="en"
        >{{ iconName }} icon</title>
        <g :fill="iconColor">
        <slot />
        </g>
    </svg>
</template>

<script>
export const ICON_SIZE = {
    SMALL: 12,
    MEDIUM: 18,
    BIG: 30,
};

export const defaultIconColor = '#1a1a1a';

export default {
    props: {
        iconName: {
            type: String,
            default: 'box',
        },
        width: {
            type: [Number, String],
            default: ICON_SIZE.MEDIUM,
        },
        height: {
            type: [Number, String],
            default: ICON_SIZE.MEDIUM,
        },
        iconColor: {
            type: String,
            default: defaultIconColor,
        },
        size: {
            type: Number,
            required: false,
        },
    },
};
</script>
