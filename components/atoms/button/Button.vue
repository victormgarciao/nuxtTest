<template>
    <button :class="buttonClasses" @click.stop="onClick">
        <slot></slot>
    </button>
</template>
​
<script>
import { curvature } from '../../../themes/testTheme';
import { CURVE } from '../../../constants/theme';
import { styleService, KIND } from '../../../services/styles.service';

export default {
    props: {
        onClick: {
            type: Function,
            required: true,
        },
        kind: {
            type: String,
            default: () => KIND.PRIMARY,
        },
    },
    data: function () {
        const buttonClasses = {
            'button': true,
            ...styleService.getKindClass(this.kind),
            ...styleService.curvatureClass,
        };

        return {
            buttonClasses,
        };
    },
};
</script>

<style scoped>
    .button {
        font-family: var(--content-typography);
        overflow: hidden;
        font-size: 1em;
        outline: 0;
        position: relative;
        text-transform: uppercase;
        font-weight: 600;
        display: inline-block;
        padding: 20 3 20 5;
        text-align: center;
        border-color: transparent;
        border-style: solid;
        border-width: 1;
        margin: 0;
        cursor: pointer;
        transition: var(--opacity-transition);
        width: 100%;
        user-select: none;
    }

    .button.primary {
        background-color: var(--primary-color);
        color: var(--contrast-color);
    }
    .button.secondary {
        background-color: var(--secondary-color);
        color: var(--grey04-color);
    }
    .button.tertiary {
        background-color: var(--white-color);
        color: var(--grey04-color);
        border-color: var(--grey10-color);
    }
    .button.detrimental {
        background-color: var(--detrimental-color);
        color: var(--white-color);
    }
    .button.positive {
        background-color: var(--positive-color);
        color: var(--white-color);
    }

    .button.no-curve {
        border-radius: 0;
    }
    .button.weak-curve {
        border-radius: 4px;
    }
    .button.strong-curve {
        border-radius: 20px;
    }

    .button:disabled,
    .button[disabled],
    .button[disabled]:hover {
        cursor: not-allowed;
        opacity: 0.3;
    }

    .button:hover {
        text-decoration: none;
        opacity: 0.75;
    }

    .button:focus {
        box-shadow:  0 0 10px var(--grey08-color);
    }
</style>
