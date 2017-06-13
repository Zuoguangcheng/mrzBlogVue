<template>
  <div class="content-body">
    <div class="container">
      <div class="row">
        <main class="col-md-24 mb20">
          <article class="post post-1">
            <header class="entry-header">
              <h1 class="entry-title">{{data.title}}</h1>
              <div class="entry-meta">
                <span class="post-category"><a href="#">Web Design</a></span>

                <span class="post-date"><a href="#"><time class="entry-date"
                                                          datetime="2012-11-09T23:15:57+00:00">February 2, 2013</time></a></span>

                <span class="post-author"><a href="#">Albert Einstein</a></span>

                <span class="comments-link"><a href="#">4 Comments</a></span>
              </div>
            </header>
            <div class="entry-content clearfix">
              {{ data.content }}
            </div>
          </article>
        </main>
        <!--<AsideList></AsideList>-->

        <Commit v-bind:id="id"></Commit>
      </div>
    </div>
  </div>
</template>

<script>
  import fetch from '../lib/server';
  import AsideList from './AsideList';
  import Commit from './Commit.vue';

  export default {
    name: 'single',
    data() {
      return {
        data: [],
        id: this.$route.params.id,
      };
    },
    mounted() {
      fetch('single', { id: this.id }).then(res => {
        this.data = res[0];
      });
    },

    components: {
      AsideList,
      Commit,
    },
  };
</script>