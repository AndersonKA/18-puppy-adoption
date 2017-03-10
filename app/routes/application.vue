<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left">
        <!--<router-link v-bind:to="{ name: 'index' }">Puppies</router-link>-->
        <a class="nav-item">
            Puppies
          </a>




        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div class="nav-right">
          <!--<router-link v-bind:to="{ name: 'index' }">All Puppies</router-link>-->
          <a class="nav-item">
          All Puppies
          </a>

          <!--<router-link v-bind:to="{ name: 'new' }">Add Puppy</router-link>-->
          <a class="nav-item">
          Add Puppy
          </a>


        </div>
    </nav>
    <div class="container">
      <div class="column">
        <div class="column is-4">
          <nav class="panel">
            <p class="panel-heading">
              Adopt A Pupper
            </p>
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64">
                    <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Luna</div>
                  <div class="subtitle">read more
                    <!--<a href="#"></a>-->
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64">
                    <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Luna</div>
                  <div class="subtitle">read more
                    <!--<a href="#"></a>-->
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64">
                    <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Luna</div>
                  <div class="subtitle">read more
                    <!--<a href="#"></a>-->
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64">
                    <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Luna</div>
                  <div class="subtitle">read more
                    <!--<a href="#"></a>-->
                  </div>
                </div>
              </div>
            </div>

          </nav>
        </div> <!--is 4-->

      <div class="column is-8">
        <div class="title has-text-centered">Luna</div>



      </div>


      </div> <!--column-->
    </div> <!--container-->
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
