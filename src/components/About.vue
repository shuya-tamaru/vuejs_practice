<template>
<div>
  <p>About</p>
  <input>
</div>
</template>
<script>
export default {
  destroyed() {
    console.log("destroyes");
  },
  deactivated(){
    console.log("deactivated");
  },
  activated(){
    console.log("activated");
  }
}
</script>