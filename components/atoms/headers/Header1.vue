<template>
    <h1 class="header1">
        <slot></slot>
    </h1>
</template>

<style scoped>
    .header1 {
        font-family: var(--content-typography);
        font-size: 3em;
        color: var(--grey03-color);
        text-align: center;
        padding: 20px;
    }
</style>
