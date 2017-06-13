<template>
  <div>
    <input type="text" class="form-control mb20" placeholder="请输入文章标题" @input="onTitleChange">
    <textarea class="form-control mb20" rows="3" placeholder="请输入文章内容"
              @input="onContentChange"></textarea>


    <div class="btn-group mb20" data-toggle="buttons" @click="onCategoryChange">
      <label class="btn btn-primary active">
        <input type="radio" name="options" value="1" id="option1" autocomplete="off" checked> 前端
      </label>
      <label class="btn btn-primary">
        <input type="radio" name="options" value="2" id="option2" autocomplete="off"> python
      </label>
      <label class="btn btn-primary">
        <input type="radio" name="options" value="3" id="option3" autocomplete="off"> 其它
      </label>
    </div>

    <div>
      <input @click="onSubmit" class="btn btn-default" type="submit" value="Submit">
    </div>
  </div>
</template>

<script>
  import fetch from '../lib/server';

  export default {
    data() {
      return {
        category: '',
        title: '',
        content: '',
      };
    },
    methods: {
      onSubmit() {
        fetch('article_create', {
          category: this.category,
          title: this.title,
          content: this.content,
        }, 'POST').then(res => {
          console.log(res);

          this.data = res;

        });
      },

      onCategoryChange(e) {
        let category = $(e.target).find('input').val();
        this.category = category;
      },

      onTitleChange(e) {
        this.title = e.target.value;
      },
      onContentChange(e) {
        this.content = e.target.value;
      },
    },
  };
</script>

<style>
  .mb20 {
    margin-bottom: 20px;
  }
</style>