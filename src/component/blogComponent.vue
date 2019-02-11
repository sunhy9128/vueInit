<template>
  <div id="blog-post-demo">
    <div v-bind:style="{ fontSize: postFontSize + 'em' }">
      <blog-post v-for="post in posts"  v-bind:post="post" v-on:enlarge="enlarge"></blog-post>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    data() {
      return {
        posts: [{
          id: 1,
          title: 'My journey with Vue',
          content: '...content...'
        },
          {
            id: 2,
            title: 'Blogging with Vue',
            content: '..content...'
          },
          {
            id: 3,
            title: 'Why Vue is so fun',
            content: '...content...'
          }
        ],
        postFontSize: 1
      }
    },
    methods: {
      enlarge: function (amount) {
        this.postFontSize += amount;
      }
    }
  };
  Vue.component('blog-post', {
    props: ['post'],
    template: ` <div class="blog-post" >
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge',0.1)">Enlarge text</button>
      <div v-html="post.content"></div>
    </div>`
  });
</script>

<style scoped>

</style>
