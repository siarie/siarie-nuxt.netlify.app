<template>
  <div>
    <nuxt />
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i,600,600i,700,700i|Poiret+One&display=swap');

* {
  box-sizing: border-box;
}
html {
  margin: 0;
  padding: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 10px;
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: #f7f8fb;
}
.flex {
  display: flex;
}
.container {
  width: 95%;
}
@media only screen and (min-width: 48em) {
  .container {
    width: 87% !important;
  }
}  
@media only screen and (min-width: 62em) {
  .container {
    width: 87% !important;
  }
}
@media only screen and (min-width: 75em) {
  .container {
    width: 80% !important;
  }
}
.row {
	margin: 0 !important;
}
/* --TEXT-ALIGN */
.text-left {text-align: left !important;}
.text-center {text-align: center !important;}
.text-right { text-align: right !important;}
</style>
