<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">Userページに行く</button>
  </div>
</template>

<script>
export default{
  methods: {
    toUsers(){
      this.$router.push({path:'users'});
    }
  }
}

</script>