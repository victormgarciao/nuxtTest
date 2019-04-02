<template>
  <div>
    <Header1
      :customTheme="theme1"
    >
      I am going to display the base components here
    </Header1>
    <Header1
      :customTheme="theme2"
      :customStyles="tupi"
    >
      Tupitupi
    </Header1>
  </div>
</template>

<script>
import Header1 from '@/components/atoms/headers/Header1';
export default {
  components: { Header1 },
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
      }
    }
  }
}
</script>


