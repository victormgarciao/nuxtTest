<template>
    <div class='inputsDisplay'>
        <Label :theme='theme()'>Default text input</Label>
        <TextInput :theme='theme()'/>

        <Label :theme='theme()'>Input with placeholder</Label>
        <TextInput
            :theme='theme()'
            placeholder='tupi tupi'
        />

        <Label :theme='theme()'>Password input</Label>
        <TextInput
            :theme='theme()'
            aver='quepasa'
        />

        <Label :theme='theme()'>Error input</Label>
        <TextInput
            :status='errorStatus'
            :theme='theme()'
        />

        <Label :theme='theme()'>Warning input</Label>
        <TextInput
            :status='warningStatus'
            :theme='theme()'
        />
        
        <Label :theme='theme()'>Success input</Label>
        <TextInput
            :status='successStatus'
            :theme='theme()'
        />
    </div>
</template>

<script>
import TextInput from '@/components/atoms/textinput/TextInput';
import Label from '@/components/atoms/label/Label';
import { STATUS } from '../constants/inputStatus';
import { theme } from '../themes/testTheme';

export default {
    components: { TextInput, Label },
    data: function() {
        return {
            warningStatus: STATUS.WARNING,
            errorStatus: STATUS.ERROR,
            successStatus: STATUS.SUCCESS,
            theme,
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
