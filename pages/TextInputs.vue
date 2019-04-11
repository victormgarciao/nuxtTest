<template>
    <div class='inputsDisplay'>
        <Label>Default text input</Label>
        <TextInput />

        <Label>Input with placeholder</Label>
        <TextInput placeholder='tupi tupi' />

        <Label>Password input</Label>
        <TextInput aver='quepasa' />

        <Label>Error input</Label>
        <TextInput :status='errorStatus' />

        <Label>Warning input</Label>
        <TextInput :status='warningStatus' />
        
        <Label>Success input</Label>
        <TextInput :status='successStatus' />
    </div>
</template>

<script>
import TextInput from '@/components/atoms/textinput/TextInput';
import Label from '@/components/atoms/label/Label';
import { STATUS } from '../constants/inputStatus';

export default {
    components: { TextInput, Label },
    data: function() {
        return {
            warningStatus: STATUS.WARNING,
            errorStatus: STATUS.ERROR,
            successStatus: STATUS.SUCCESS,
        };
    },
};
</script>

<style scoped>
.inputsDisplay {
    display: flex;
    flex-direction: column;
    margin: 10px;
}
</style>
