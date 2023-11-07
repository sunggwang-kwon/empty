<template>
  <v-app>
    
  </v-app>
</template>

<script>
import http from '@/mixin/http'
export default {
  name: 'App',
  mixins: [http],
  data: () => ({

  }),
  created:function(){
    console.log(this.get)
  }
};
</script>
