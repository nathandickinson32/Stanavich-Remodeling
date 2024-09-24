<template>
  <div class="social-links">
    <!-- <a href="https://www.facebook.com/chuck.stanavich/"
          ><img src="../assets/Images/facebook.png" alt="LinkedIn"
        /></a> -->
        <div>
          <span>
            <h2>LET ME HELP YOU <img class="heart-img" src="../assets/Images/heart.png" alt="Heart"
              /> YOUR HOME </h2>
          </span>
          <span>
          <h2>
            GIVE ME A CALL AT 330-720-8623
          </h2>
          </span>
   
  </div>
  </div>
 
</template>

<script>
export default {

}
</script>
<style scoped>
.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.social-links a {
  margin: 10px;
  transition: transform 0.3s ease;
}

.social-links a:hover {
  transform: scale(1.08);
}

.social-links img {
  width: 38px;
  height: 38px;
  margin-top: 7px;
}

.heart-img {
  vertical-align: middle;
  position: relative;
  top: -5px;
}

h1 {
  margin: 0;
  line-height: 1.5;
}
</style>
