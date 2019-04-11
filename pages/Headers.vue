<template>
    <div>
        <Header1 >
            Default header
        </Header1>
        <Header1 :style="customStyles1">
            Custom styles 1
        </Header1>
        <Header1 :style="customStyles2">
            Custom styles 2
        </Header1>
    </div>
</template>

<script>
import Header1 from '@/components/atoms/headers/Header1';

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
        };
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Laila');
</style>

