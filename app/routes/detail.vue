<template lang="html">
  <div class="app">
    <div v-if="currentPuppy">
      <div class="title has-text-centered">
        <span class="dogname">{{ currentPuppy.name }} </span>
        <!--<button class="comics__read" @click="$emit('readmore', comic)">Read More</button>-->
        <a @click="adoptMe" href="#" class="button is-primary" v-bind:class="{ 'is-success': currentPuppy.adopted }">
          <span class="icon is-small fa fa-paw"></span>
          <span v-if="currentPuppy.adopted">I'm Adopted</span>
          <span v-else>I'm available!</span>
        </a>
      </div>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <figure class="image is-100x100 is-square">
            <img v-bind:src="currentPuppy.image_url">
          </figure>
        </div>
      </div> <!--columns-->

      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading has-text-centered">Age</p>
            <p class="title has-text-centered">{{ currentPuppy.age }}</p>
          </div>
        </div>
        <div class="level-item">
          <div>
            <p class="heading has-text-centered">Breed</p>
            <p class="title has-text-centered">{{ currentPuppy.breed }}</p>
          </div>
        </div>
        <div class="level-item">
          <div>
            <p class="heading has-text-centered">Color</p>
            <p class="title has-text-centered">{{ currentPuppy.color }}</p>
          </div>
        </div>
        <div class="level-item">
          <div>
            <p class="heading has-text-centered">Sex</p>
            <p class="title has-text-centered">{{ currentPuppy.sex }}</p>
          </div>
        </div>
      </div>

      <div class="content">
        <h3>About Me</h3>
        <p>{{ currentPuppy.description }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import store from '../store';
import { findOne, toggleAdopted } from '../actions/puppy.js';

export default {
  data() {
    return {
      currentPuppy: null,
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    puppies: 'getPuppy',
    '$route.params.id': 'getPuppy',
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy.id == this.$route.params.id);
    },

    adoptMe() {
      store.dispatch(toggleAdopted(this.currentPuppy));
    }
  },
};
</script>
