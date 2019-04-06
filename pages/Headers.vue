<template>
    <div>
        <Header1 
            :customStyles="customStyles1"
            :theme="theme()"
        >
            I am going to display the base components here
        </Header1>
        <Header1
            :customStyles="customStyles2"
            :theme="theme()"
        >
            Tupitupi
        </Header1>
    </div>
</template>

<script>
import Header1 from '@/components/atoms/headers/Header1';
import { theme } from '../themes/testTheme';

export default {
    components: { Header1 },
    data: function() {
        return {
            customStyles1: {
                color: 'green',
                fontFamily: 'Laila, serif',
                fontSize: '4em',
            },
            customStyles2: {
                textAlign: 'right',
                padding: '50px',
                color: 'red',
                marginTop: '50px',
            },
            theme,
        };
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Laila');
</style>

