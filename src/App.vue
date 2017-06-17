<template>
  <div id="app" class="container">
    <header id="site-header">
      <div class="row">
        <div class="col-md-4 col-sm-5 col-xs-8">
          <div class="logo">
            <h1><a>简约而不简单</a></h1>
          </div>
        </div><!-- col-md-4 -->
        <div class="col-md-8 col-sm-7 col-xs-4">
          <nav class="main-nav" role="navigation">
            <div class="navbar-header">
              <button type="button" id="trigger-overlay" class="navbar-toggle">
                <span class="ion-navicon"></span>
              </button>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li class="cl-effect-11">
                  <router-link :to="{name:'Index'}"><a data-hover="Home">Home</a></router-link>
                </li>
                <li class="cl-effect-11"><a data-hover="Blog">Blog</a></li>
                <li class="cl-effect-11">
                  <router-link :to="{name:'Register'}">登录</router-link>
                </li>

              </ul>
            </div><!-- /.navbar-collapse -->
          </nav>
          <div id="header-search-box">
            <a id="search-menu" href="#"><span id="search-icon"
                                               class="ion-ios-search-strong"></span></a>
            <div id="search-form" class="search-form">
              <form role="search" method="get" id="searchform" action="#">
                <input type="search" placeholder="Search" required>
                <button type="submit"><span class="ion-ios-search-strong"></span></button>
              </form>
            </div>
          </div>
        </div><!-- col-md-8 -->
      </div>
    </header>

    <router-view></router-view>

    <footer id="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!--<p>啦啦啦</p>-->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  @import "style/common.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
