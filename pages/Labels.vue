<template>
    <div class='labelDisplay'>
        <Label 
            :customStyles='customStyles1'
            :theme="theme()"
        >
            I am going to display the base components here
        </Label>

        <Label
            :customStyles='customStyles2'
            :theme="theme()"
        >
            Tupitupi
        </Label>
        
        <Label :theme="theme()">Default Label</Label>
    </div>
</template>

<script>
import Label from '@/components/atoms/label/Label';
import { theme } from '../themes/testTheme';

export default {
    components: { Label },
    data: function() {
        return {
            customStyles1: {
                color: 'green',
                fontFamily: `'Laila', serif`,
                fontSize: '2em',
            },
            customStyles2: {
                textAlign: 'right',
                padding: '20px',
                color: 'red',
                marginTop: '30px',
            },
            theme,
        };
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Laila');

.labelDisplay {
    display: flex;
    flex-direction: column;
}
</style>


