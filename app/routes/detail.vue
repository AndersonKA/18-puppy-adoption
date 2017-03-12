<template lang="html">
  <div class="app">
    <div class="title has-text-centered">
      <span class="dogname">Dodger</span>
      <a href="#" class="button is-primary">
        <span class="icon is-small fa fa-paw"></span>
        <span>I'm Adopted</span>
      </a>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <figure class="image is-100x100 is-square">
          <img src="https://www.what-dog.net/Images/faces2/scroll0015.jpg">
        </figure>
      </div>
    </div> <!--columns-->

    <div class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading has-text-centered">Age</p>
          <p class="title has-text-centered">2</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading has-text-centered">Breed</p>
          <p class="title has-text-centered">Golden Retriever</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading has-text-centered">Color</p>
          <p class="title has-text-centered">golden</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading has-text-centered">Sex</p>
          <p class="title has-text-centered">male</p>
        </div>
      </div>
    </div>

    <div class="content">
      <h3>About Me</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illum illo facilis harum ipsa sunt dolore provident nemo expedita, corporis minus ducimus, molestias fuga, delectus officiis cupiditate consequuntur dolorum! Repellendus.</p>
    </div>


  </div>
</template>

<script>
import store from '../store';
import { findOne } from '../actions/puppy.js';

export default {
  data() {
    return {
      formValues: {
        currentPuppy: '',
      },
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    puppies: 'getPuppy',
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy._id === this.$route.params.id);
    },
  },
};
</script>
