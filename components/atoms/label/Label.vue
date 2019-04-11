<template>
    <label class="label">
        <slot></slot>
    </label>
</template>

<style scoped>
    .label {
        font-family: var(--content-typography);
        font-size: 1em;
        font-weight: bold;
        text-align: left;
        color: var(--grey03-color);
        margin: 10px;
        padding: 10px;
        padding-left: 0;
        width: 100%;
    }
</style>
