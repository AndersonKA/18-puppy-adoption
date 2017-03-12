<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left">
        <router-link class="nav-item is-brand" :to="{ name: 'index' }">Puppies</router-link>

        <div class="nav-right">
          <router-link class="nav-item" :to="{ name: 'index' }">All Puppies</router-link>
          <router-link class="nav-item" :to="{ name: 'new' }">Add A Puppy</router-link>
        </div>
    </nav>

    <div class="container">
      <div class="section">
      <div class="columns">
        <div class="column is-one-third">
          <nav class="panel">
            <p class="panel-heading">
              Adopt A Pupper
            </p>
            <div class="panel-block" v-for="puppy in puppies">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64 is-square">
                    <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Bob</div>
                    <router-link class="subtitle primary" :to="{ name: 'detail', id: puppy.id }">read more</router-link>
                </div>
              </div>
            </div>
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64 is-square">
                    <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Luna</div>
                  <router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link>
                </div>
              </div>
            </div>
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64 is-square">
                    <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Bob</div>
                  <router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link>
                </div>
              </div>
            </div>
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64 is-square">
                    <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Luna</div>
                  <router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link>
                </div>
              </div>
            </div>


        </div> <!--is 1/3-->


      <div class="column is-two-thirds">
        <router-view></router-view>
      </div>



      </div> <!--columns-->
    </div> <!--section-->
    </div> <!--container-->
  </div> <!--app-->
</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy.js';

export default {
  data() {
    return {
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findAll(''));
  },

  methods: {

  },
};
</script>
