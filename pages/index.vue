<template>
  <section class=container>
    <div class="box text-center">
      <div class=box-wrapper>
        <div class=image-box>
          <img src=https://d33wubrfki0l68.cloudfront.net/08e8052685bf16c955a582db518225d98d5c8dbf/0d139/img/siarie.jpg alt="Sri Aspari">
        </div>
        <div class=text>
            <h2>Sri Aspari<br><span>Web Developer</span></h2>
        </div>
        <div class=m-1>
            <nuxt-link :to="'/'" class="btn btn-default">Story</nuxt-link>
            <nuxt-link :to="'/'" class="btn btn-default">About</nuxt-link>
            <nuxt-link :to="'/projects'" class="btn btn-default">Portofolio</nuxt-link>
            <!-- <a href=/ class="btn btn-default">Friends</a> -->
        </div>
        <hr class=hrline>
        <div class=links>
            <ul class=social>
                <li><a href=//twitter.com/siarie_><twitter-icon size="3x"></twitter-icon></a></li>
                <li><a href=//github.com/siarie><github-icon size="3x"></github-icon></a></li>
                <li><a href=//t.me/siarie><send-icon size="3x"></send-icon></a></li>
                <li><a href=mailto:mail@siarie.me><mail-icon size="3x"></mail-icon></a></li>
                <li><a href=/index.xml><rss-icon size="3x"></rss-icon></a></li>
            </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as icons from 'vue-feather-icons'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
    ...icons
  }
}
</script>

<style>
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: calc(100vh - 50px);
}
.content-wrapper {
  flex: 1;
}
.box {
  position: fixed;
  padding: 0 125px;
  height: auto;
  background: #FFFFFF;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 3px;
  box-shadow: 0 .4rem 1rem rgba(0, 0, 0, .05), 0 0 .1rem rgba(0, 0, 0, .1); }
  @media only screen and (max-width: 60em){
    .box {
      width: 100%;
      padding: 0;
      height: 100vh;
    }
    .box-wrapper {
      margin-top: 5%;
    }
  }
.image-box {
  margin: 25px auto;
  width: 280px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
}
.image-box img {
  width: 100%;
  height: auto;
}
.text {
  line-height: 3.3rem;
}
.text h2{
  font-size: 3.5rem;
	font-weight:700;
	margin:0;
}
.text span {
  font-size: 1.7rem;
  background: #DC143C;
  padding: .2rem .7rem;
  border-radius: 15px;
  color: #FFFFFF;
  text-transform: none
}
.hrline {
  width: 280px;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
}
.links ul {
  list-style: none;
  padding: 0;
}
.links ul li {
  display: inline-block;
}
.links ul li:not(:first-child) {
  margin-left: 20px;
}
.links .social li a {
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #DC143C;
}
/* -BUTTON */
.btn{
	border-radius: 3px;
	margin: 3px;
	padding: 8px;
	font-size: 2rem;
	text-decoration: none;
  cursor: pointer;
  transition: all .2s ease;
}
.btn-default {
	background: #ECECEC;
	color: #000000;
}
.btn-default:hover {
	background: #DC143C;
	color: #FFFFFF;
}
.btn-primary {
	background: #DC143C;
	color: #FFFFFF;
}
/* .m-0 {margin: 0} */
.m-1 {margin: 15px}
/* .m-2 {margin: 20px;} */
/* .m-3 {margin: 30px;}
.m-4 {margin: 40px;}
.m-5 {margin: 50px;} */
</style>
