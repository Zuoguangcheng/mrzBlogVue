<template>
  <div class="content-body">
    <div class="container">
      <div class="row">
        <main class="col-md-8" id="main">
          <article v-for="(item, index) in data" :key="index" class="post post-1">
            <header class="entry-header">

              <router-link :to="{name:'Single', params:{id:item.id}}">
                <h1 class="entry-title">
                  {{item.title}}
                </h1>
              </router-link>

              <div class="entry-meta">
                <span class="label label-primary">{{text.category[item.category]}}</span>
                <span class="label label-primary">{{item.update_time}}</span>
              </div>

            </header>

            <div class="entry-content clearfix">

              <p class="content" v-html="item.content"></p>

              <div class="read-more cl-effect-14">
                <router-link :to="{name:'Single', params:{id:item.id}}">
                  Continue reading <span class="meta-nav">→</span>
                </router-link>
              </div>

            </div>
          </article>
        </main>
        <AsideList v-on:getCategory="getCategory"></AsideList>
      </div>
    </div>
  </div>
</template>

<script>
  import fetch from '../lib/server';
  import AsideList from './AsideList';
  import text from '../lib/text';

  export default {
    data () {
      return {
        data: [{ title: '1', id: '1', }],
        page: 0,
        text,
        categoryId: '',
      };
    },

    mounted () {
      this.getList();
      this.watch();
    },

    methods: {
      watch() {
        let self = this;
        let windowHeight = $(window).height();
        $(window).on('scroll', function() {
          let contentBodyHeight = $(document.body).height();
          let windowScroll = $(window).scrollTop();

          let difference = Number(contentBodyHeight) - Number(windowHeight) - Number(windowScroll);
          if (difference <= 0) {
            self.page = self.data.length;
            self.getList();
          }
        });
      },

      getCategory(id) {
        this.categoryId = id;
        this.getList();
      },

      getList() {
        let data = {
          page: this.page,
          category_id: this.categoryId,
        };
        fetch('article_list', data).then(res => {
          this.data = res;
        });
      },

    },

    components: {
      AsideList,
    },
  };
</script>

<style scoped>
  .content {
    width: 690px;
    max-height: 10rem;
    position: relative;
    line-height: 1.4em;
    overflow: hidden;
  }

  .content::after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
  }

</style>
