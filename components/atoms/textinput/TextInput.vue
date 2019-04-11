<template>
    <input :class="textinputClasses" />
</template>

<script>
import { STATUS } from '../../../constants/inputStatus';
import { CURVE } from '../../../constants/theme';
import { styleService } from '../../../services/styles.service';

export default {
    props: {
        status: {
            type: String,
            default: () => STATUS.DEFAULT,
        },
    },
    data: function() {
        const textinputClasses = {
            'textinput': true,
            ...styleService.curvatureClass,
            'error': this.status === STATUS.ERROR,
            'warning': this.status === STATUS.WARNING,
            'success': this.status === STATUS.SUCCESS,
        }

        return {
            textinputClasses,
        };
    },
};
</script>

<style scoped>
    .textinput {
        font-family: var(--content-typography);
        font-size: 1em;
        color: var(--grey03-color);
        padding: 10px;
        border: none;
        border: solid 1px;
        border-color: var(--grey09-color);
        width: 100%;
        box-sizing: border-box;
        cursor: default;
    }

    .textinput:focus {
        outline: 0;
        box-shadow: 0 0 5px var(--grey09-color);
    }

    .textinput.error {
        border: 2px solid var(--red01-color);
        background-color: var(--red02-color)
    }
    .textinput.warning {
        border: 2px solid var(--yellow01-color);
        background-color: var(--yellow02-color)
    }
    .textinput.success {
        border: 2px solid var(--green01-color);
        background-color: var(--green02-color)
    }

    .textinput.no-curve {
        border-radius: 0;
    }
    .textinput.weak-curve {
        border-radius: 4px;
    }
    .textinput.strong-curve {
        border-radius: 20px;
    }
</style>
