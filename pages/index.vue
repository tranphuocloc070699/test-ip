<template>
  <div>
    <h1>Welcome to my Vue app!</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
// import { ip, ipv6, mac } from "address";
// var macaddress = require("macaddress");
var ip = require("ip");
import getMAC, { isMAC } from "getmac";

export default {
  data() {
    return {
      message: "Hello, world!",
    };
  },
  asyncData() {
    console.log(getMAC());
    console.log(ip.address());
  },
  mounted() {
    console.log(ip.address());
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("location");
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
