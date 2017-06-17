<template>
  <div>
    <input
        type="text"
        class="form-control mb20"
        placeholder="请输入文章标题"
        :value="title"
    >
    <!--<div id="demo" class="demo"></div>-->

    <div id="editormd">
      <textarea id="markdown" :value="markdown"></textarea>
    </div>
    <form action="http://127.0.0.1:8000/up_pic" method="post" enctype="multipart/form-data"
          name="upload_form">
      <label>选择图片文件</label>
      <input name="imgfile" type="file" @change="onChange" id="uploadFile" />
      <input name="upload" type="submit" value="上传" />
    </form>

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

  import fetchFile from '../lib/api';
  export default {
    data() {
      return {
        id: this.$route.params.id,
        category: '',
        title: '',
        content: '',
        markdown: '',
      };
    },

    mounted() {
      this.getMarkDown();
      if (!!this.id) {
        this.getDetail();
      }
      /* // 初始化插件
       $('#demo').zyUpload({
       width: '650px',                 // 宽度
       height: '400px',                 // 宽度
       itemWidth: '120px',                 // 文件项的宽度
       itemHeight: '100px',                 // 文件项的高度
       url: 'http://127.0.0.1:8000/up_pic',  // 上传文件的路径
       multiple: true,                    // 是否可以多个文件上传
       dragDrop: true,                    // 是否可以拖动上传文件
       del: true,                    // 是否可以删除文件
       finishDel: false,  				  // 是否在上传文件完成后删除预览
       /!* 外部获得的回调接口 *!/
       onSelect: function(files, allFiles) {                    // 选择文件的回调方法
       console.info('当前选择了以下文件：');
       console.info(files);
       console.info('之前没上传的文件：');
       console.info(allFiles);
       },
       onDelete: function(file, surplusFiles) {                     // 删除一个文件的回调方法
       console.info('当前删除了此文件：');
       console.info(file);
       console.info('当前剩余的文件：');
       console.info(surplusFiles);
       },
       onSuccess: function(file) {                    // 文件上传成功的回调方法
       console.info('此文件上传成功：');
       console.info(file);
       },
       onFailure: function(file) {                    // 文件上传失败的回调方法
       console.info('此文件上传失败：');
       console.info(file);
       },
       onComplete: function(responseInfo) {           // 上传完成的回调方法
       console.info('文件上传完成');
       console.info(responseInfo);
       },
       });
       */
    },

    methods: {
      onSubmit() {
        if (!!this.id) {
          fetch('article_edit', {
            id: this.id,
            category: this.category,
            title: this.title,
            content: this.content,
            markdown: this.markdown,
          }, 'POST').then(res => {
            console.log(res);
            this.data = res;
          });
        } else {
          fetch('article_create', {
            category: this.category,
            title: this.title,
            content: this.content,
            markdown: this.markdown,
          }, 'POST').then(res => {
            console.log(res);
            this.data = res;
          });
        }
      },

      onCategoryChange(e) {
        let category = $(e.target).find('input').val();
        this.category = category;
      },

      onChange(e){
        fetchFile('up_pic', e).then(res => {
          console.log('res', res);
        });
      },

      getMarkDown() {
        let self = this;
        this.editor = editormd('editormd', {
          width: '100%',
          height: 640,
          path: '../../static/editor.md/lib/',
          saveHTMLToTextarea: true,
          onchange: function() {
            self.content = self.editor.getHTML();
            self.markdown = self.editor.getMarkdown();
          },
        });
      },

      getDetail() {
        fetch('single', { id: this.id }).then(res => {
          let data = res[0];
          this.category = data.category;
          this.title = data.title;
          this.content = data.content;
          this.markdown = data.markdown;

        });
      },

      /*onChange(e){
       var formData = new FormData();
       formData.append('file', e.target.files[0]);
       formData.append('type', 'test');
       $.ajax({
       url: 'http://127.0.0.1:8000/up_pic',
       type: 'POST',
       dataType: 'json',
       cache: false,
       data: formData,
       processData: false,
       contentType: false,
       success: (res) => {
       console.log(res);
       },
       error: function(err) {
       alert("网络错误");
       }
       });
       }*/
    },
  }
  ;


</script>

<style>
  .mb20 {
    margin-bottom: 20px;
  }

  #editormd {
    z-index: 9999;
  }
</style>