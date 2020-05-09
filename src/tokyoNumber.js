export const tokyoNumber = {
  data(){
    return{
      title: "Welcome to Tokyo",
      subTitle:"Tokyo is a greate city",
      number:0
    };
  },
  filters:{
    lowerCase(value){
      return value.toLowerCase();
    }
  },
  created(){
  }
};