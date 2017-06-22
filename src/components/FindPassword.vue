<template>
  <div>
    <div class="form-group">
      <label for="exampleInputEmail">绑定邮箱</label>
      <input v-model="email" type="text" class="form-control" id="exampleInputEmail"
             placeholder="请输入绑定邮箱">
    </div>

    <div>
      <input @click="onFindPassword" class="btn btn-default" type="submit" value="找回密码">
    </div>
  </div>
</template>

<script>
  import fetch from '../lib/server';

  export default {
    name: 'register',
    data() {
      return {
        email: '',
      };
    },
    methods: {
      onFindPassword() {
        fetch('find_password', {
          email: this.email,
        }, 'POST').then(res => {

          if (String(res.code) === '0') {
            dhtmlx.message({ text: res.msg, type: 'error' });
          }

          if (String(res.code) === '1') {
            dhtmlx.message({ text: res.msg, type: 'success' });
//            this.$router.push({ path: '/' });
          }

        });
      },
    },
  };
</script>