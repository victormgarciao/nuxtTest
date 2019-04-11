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
        padding: 10px;
        width: 100%;
    }
</style>
