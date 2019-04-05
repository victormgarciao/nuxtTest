<template>
  <div class="inputsDisplay">
    <Label> Default text input </Label>
    <TextInput :theme="theme()" />
    <Label> Input with placeholder </Label>
    <TextInput :theme="theme()" placeholder="tupi tupi"/>
    <Label> Password input </Label>
    <TextInput :theme="theme()" aver="quepasa" type="password" />
    <Label> Error input </Label>
    <TextInput :theme="theme()" :status="errorStatus" />
    <Label> Warning input </Label>
    <TextInput :theme="theme()" :status="warningStatus" />
    <Label> Success input </Label>
    <TextInput :theme="theme()" :status="successStatus" />
  </div>
</template>

<script>
import TextInput from '@/components/atoms/textinput/TextInput';
import Label from '@/components/atoms/label/Label';
import { STATUS } from '../constants/inputStatus'
import { theme } from '../themes/testTheme';

export default {
  components: { TextInput, Label },
  data: function () {
    return {
      warningStatus: STATUS.WARNING,
      errorStatus: STATUS.ERROR,
      successStatus: STATUS.SUCCESS,
      theme,
    }
  },
}
</script>

<style scoped>
  .inputsDisplay {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
</style>
