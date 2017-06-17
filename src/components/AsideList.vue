<template>
  <aside class="col-md-4">
    <div class="widget widget-recent-posts">
      <h3 class="widget-title">最近更新</h3>
      <ul>
        <li v-for="(item, index) in recentData" :key="item.id">
          <router-link :to="{name:'Single', params:{id:item.id}}">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="widget widget-archives">
      <h3 class="widget-title">日期</h3>
      <ul @click="handleMonthClick">
        <li>
          <a href="javascript:;" :month=null>全部</a>
        </li>
        <li v-for="(item, index) in month" :key="index">
          <a href="javascript:;" :month="item">{{item}}</a>
        </li>
      </ul>
    </div>

    <div class="widget widget-category">
      <h3 class="widget-title">类别</h3>
      <ul @click="handleCategoryClick">
        <li>
          <a href="javascript:;" :category=null>全部</a>
        </li>
        <li>
          <a href="javascript:;" :category="1">前端</a>
        </li>
        <li>
          <a href="javascript:;" :category="2">python</a>
        </li>
        <li>
          <a href="javascript:;" :category="3">其它</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import fetch from '../lib/server';

  export default {
    data() {
      return {
        recentData: [],
        month: [],
      };
    },
    mounted() {
      this.getArticleRecent();
      this.getMonth();
    },
    methods: {
      handleCategoryClick(e) {
        let category = $(e.target);
        this.category = $(e.target).attr('category');
        if (category[0].tagName === 'A') {
          this.$emit('getCategory', { id: this.category, month: this.monthStr });
        }
      },

      handleMonthClick(e) {
        let month = $(e.target);
        this.monthStr = month.attr('month');
        if (month[0].tagName === 'A') {
          this.$emit('getCategory', { month: this.monthStr, id: this.category });
        }
      },

      getArticleRecent() {
        fetch('get_article_recent').then(res => {
          this.recentData = res;
        });
      },

      getMonth() {
        fetch('get_month').then(res => {
          this.month = res;
        });
      },
    },
  };
</script>