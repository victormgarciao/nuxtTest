<template>
    <div class='labelDisplay'>
        <Label>Default Label</Label>

        <Label :style='customStyles1'>
            Custom styles 1
        </Label>

        <Label :style='customStyles2'>
            Custom styles 2
        </Label>
    </div>
</template>

<script>
import Label from '@/components/atoms/label/Label';

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


