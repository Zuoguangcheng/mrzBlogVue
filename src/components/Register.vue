<template>
  <div>
    <div class="form-group">
      <label for="exampleInputEmail">用户名</label>
      <input v-model="name" type="text" class="form-control" id="exampleInputEmail"
             placeholder="用户名">
    </div>

    <div class="form-group">
      <label for="exampleInputPassword">密码</label>
      <input v-model="password" type="text" class="form-control" id="exampleInputPassword"
             placeholder="密码">
    </div>

    <div>
      <input @click="onRegister" class="btn btn-default" type="submit" value="注册">
      <input @click="onSign" class="btn btn-default" type="submit" value="登录">
    </div>
  </div>
</template>

<script>
  import fetch from '../lib/server';

  export default {
    name: 'register',
    data() {
      return {
        name: '',
        password: '',
      };
    },
    methods: {
      onRegister() {
        fetch('register', {
          name: this.name,
          password: this.password,
        }, 'POST').then(res => {
          if (String(res.code) === '0') {
            dhtmlx.message({ text: res.msg, type: 'error' });
          }

          if (String(res.code) === '1') {
            dhtmlx.message({ text: res.msg, type: 'success' });
          }

        });
      },
      onSign() {
        fetch('sign', {
          name: this.name,
          password: this.password,
        }, 'POST').then(res => {

          if (String(res.code) === '0') {
            dhtmlx.message({ text: res.msg, type: 'error' });
          }

          if (String(res.code) === '1') {
            dhtmlx.message({ text: res.msg, type: 'success' });
            this.$router.push({ path: '/' });
          }

        });
      },
    },
  };
</script>