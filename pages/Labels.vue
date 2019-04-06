<template>
    <div class='labelDisplay'>
        <Label :customTheme='theme1'>
            I am going to display the base components here
        </Label>
        <Label
            :customStyles='tupi'
            :customTheme='theme2'
            tupi='tupitupi'
        >
            Tupitupi
        </Label>
        <Label>Default Label</Label>
    </div>
</template>

<script>
import Label from '@/components/atoms/label/Label';
export default {
    components: { Label },
    data: function() {
        return {
            theme1: {
                color: 'green',
                fontFamily: `'Laila', serif`,
                fontSize: '2em',
            },
            theme2: {
                textAlign: 'right',
                padding: '20px',
            },
            tupi: {
                color: 'red',
                marginTop: '30px',
            },
        };
    },
};
</script>

<style scoped>
.labelDisplay {
    display: flex;
    flex-direction: column;
}
</style>


