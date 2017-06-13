<template>
  <aside class="col-md-4">
    <div class="widget widget-recent-posts">
      <h3 class="widget-title">Recent Posts</h3>
      <ul>
        <li>
          <a href="#">Adaptive Vs. Responsive Layouts And Optimal Text Readability</a>
        </li>
        <li>
          <a href="#">Web Design is 95% Typography</a>
        </li>
        <li>
          <a href="#">Paper by FiftyThree</a>
        </li>
      </ul>
    </div>
    <div class="widget widget-archives">
      <h3 class="widget-title">Archives</h3>
      <ul>
        <li>
          <a href="#">November 2014</a>
        </li>
        <li>
          <a href="#">September 2014</a>
        </li>
        <li>
          <a href="#">January 2013</a>
        </li>
      </ul>
    </div>

    <div class="widget widget-category">
      <h3 class="widget-title">Category</h3>
      <ul @click="onCategoryClick">
        <li>
          <a href="javascript:;" category="1">前端</a>
        </li>
        <li>
          <a href="javascript:;" category="2">python</a>
        </li>
        <li>
          <a href="javascript:;" category="3">其它</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      onCategoryClick(e) {
        if (!!$(e.target).attr('category')) {
          let id = $(e.target).attr('category');
          this.$emit('getCategory', id);
        }
      },
    },
  };
</script>