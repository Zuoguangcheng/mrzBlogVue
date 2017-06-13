<template>
  <div>
    <h3>评论：</h3>

    <textarea class="form-control" @input="textareaChange"></textarea>

    <div class="clearfix mb40 mt20">
      <button type="button" class="btn btn-primary pull-right" @click="handleSubmit">提交评论</button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in data" :key="index">{{item.content}}</li>
    </ul>

  </div>
</template>

<script>
  import fetch from '../lib/server';

  export default {
    data() {
      return {
        content: '',
        data: [],
      };
    },
    props: ['id'],
    mounted() {
      this.getCommitList();
    },
    methods: {
      getCommitList() {
        fetch('get_article_commit', { article_id: this.id }).then(res => {
          console.log('res', res);
          this.data = res;
        });
      },

      handleSubmit() {
        fetch('article_commit_create', { article_id: this.id, content: this.content }, 'POST').
          then(res => {
            this.getCommitList();
          });
      },

      textareaChange(e) {
        this.content = e.target.value;
      },
    },
    watch: {
      id: function() {

      },
    },
  };
</script>