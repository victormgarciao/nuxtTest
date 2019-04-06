<template>
    <div class='labelDisplay'>
        <div class='labelDisplay'>
            <v-button
                :theme="theme()"
                :onClick="button1click"
            >
                Default Button
            </v-button>
        </div>
        <div class='labelDisplay'>
            <v-button
                :theme="theme()"
                :onClick="button1click"
                :isDisabled="true"
            >
                Disabled Button
            </v-button>
        </div>
        <div class='labelDisplay'>
            <v-button
                :theme="theme()"
                :onClick="button2click"
                :kind="Kind.SECONDARY"
            >
                Default Button
            </v-button>
        </div>
        <div class='labelDisplay'>
            <v-button
                :theme="theme()"
                :onClick="button3click"
                :kind="Kind.TERTIARY"
            >
                Default Button
            </v-button>
        </div>
        <div class='labelDisplay'>
            <v-button
                :theme="theme()"
                :onClick="button4click"
                :kind="Kind.DETRIMENTAL"
            >
                Default Button
            </v-button>
        </div>
        <div class='labelDisplay'>
            <v-button
                :theme="theme()"
                :onClick="button5click"
                :kind="Kind.POSITIVE"
            >
                Default Button
            </v-button>
        </div>
    </div>
</template>

<script>
import { theme } from '../themes/testTheme';
import Button, { Kind } from '../components/atoms/button/Button';

export default {
    components: { 'v-button': Button },
    data: function() {
        return {
            customStyles1: {
                color: 'green',
                fontFamily: `'Laila', serif`,
                fontSize: '2em',
            },
            theme,
            Kind,
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
@import url('https://fonts.googleapis.com/css?family=Laila');

.labelDisplay {
    display: flex;
    flex-direction: column;
    margin: 10px;
}
</style>
