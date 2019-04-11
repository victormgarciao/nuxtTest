<template>
    <div class='labelDisplay'>
        <div class='labelDisplay'>
            <v-button :onClick="button1click">
                Default Button
            </v-button>
        </div>

        <div class='labelDisplay'>
            <v-button :onClick="button1click" disabled>
                Disabled Button
            </v-button>
        </div>

        <div class='labelDisplay'>
            <v-button :onClick="button2click" :kind="KIND.SECONDARY">
                Secondary Button
            </v-button>
        </div>

        <div class='labelDisplay'>
            <v-button :onClick="button3click" :kind="KIND.TERTIARY">
                Tertiary Button
            </v-button>
        </div>

        <div class='labelDisplay'>
            <v-button :onClick="button4click" :kind="KIND.DETRIMENTAL">
                Detrimental Button
            </v-button>
        </div>

        <div class='labelDisplay'>
            <v-button :onClick="button5click" :kind="KIND.POSITIVE">
                Positive Button
            </v-button>
        </div>
    </div>
</template>

<script>
import Button from '../components/atoms/button/Button';
import { KIND } from '../services/styles.service';

export default {
    components: { 'v-button': Button },
    data: function() {
        return {
            KIND,
        };
    },
    methods: {
        button1click() {
            console.log('Button 1 clicked');
        },
        button2click() {
            console.log('Button 2 clicked');
        },
        button3click() {
            console.log('Button 3 clicked');
        },
        button4click() {
            console.log('Button 4 clicked');
        },
        button5click() {
            console.log('Button 5 clicked');
        },
    },
};
</script>

<style scoped>
    .labelDisplay {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
</style>
