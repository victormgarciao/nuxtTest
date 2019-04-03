<template>
  <div class="inputsDisplay">
    <Label> Default text input </Label>
    <Input />
    <Label> Input with placeholder </Label>
    <Input placeholder="tupi tupi"/>
    <Label> Password input </Label>
    <Input aver="quepasa" type="password" />
    <Label> Error input </Label>
    <Input status="status.ERROR" />
    <Label> Warning input </Label>
    <Input status="status.WARNING" />
  </div>
</template>

<script>
import Input from '@/components/atoms/input/Input';
import Label from '@/components/atoms/label/Label';
import { STATUS } from '../constants/inputStatus'

export default {
  components: { Input, Label },
  data: function () {
    return {
      theme1: {
        color: 'green',
        fontFamily: `'Laila', serif`,
        fontSize:'4em',
      },
      theme2: {
        textAlign: 'right',
        padding: '50px',
      },
      tupi: {
        color: 'red',
        marginTop: '50px',
      },
      status: STATUS,
    }
  }
}
</script>

<style scoped>
  .inputsDisplay {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
</style>
