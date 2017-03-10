<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left">
        <!--<router-link class="nav-item" :to="{ name: 'index' }">Puppies</router-link>-->
        <a class="nav-item">
            Puppies
          </a>

        <div class="nav-right">
          <!--<router-link class="nav-item" :to="{ name: 'index' }">Puppies</router-link>-->
          <a class="nav-item">
          All Puppies
          </a>

          <!--<router-link class="nav-item" :to="{ name: 'index' }">Puppies</router-link>-->
          <a class="nav-item">
          Add Puppy
          </a>


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
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <div class="image is-64x64">
                    <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Bob</div>
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
                    <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="">
                  </div>
                </div>
                <div class="media-right">
                  <div class="subtitle">Bob</div>
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


        </div> <!--is 1/3-->


      <div class="column is-two-thirds">
        <div class="level">
          <div class="title level-left">Puppies For Adoption</div>
          <a class="button is-info level-right">this doesn't work yet!</a>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th><abbr title="Name">Name</abbr></th>
                <th><abbr title="Age">Age</abbr></th>
                <th><abbr title="Read"></abbr></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Bob</td>
                <td>1</td>
                <td>read more</td>
              </tr>
              <tr>
                <td>Luna</td>
                <td>1</td>
                <td>read more</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>1</td>
                <td>read more</td>
              </tr>
              <tr>
                <td>Luna</td>
                <td>1</td>
                <td>read more</td>
              </tr>


            </tbody>
          </table>
          <div class="title">Adopted Puppers</div>
          <table class="table">
            <thead>
              <tr>
                <th><abbr title="Name">Name</abbr></th>
                <th><abbr title="Age">Age</abbr></th>
                <th><abbr title="Read"></abbr></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Bob</td>
                <td>1</td>
                <td>read more</td>
              </tr>
              <tr>
                <td>Luna</td>
                <td>1</td>
                <td>read more</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>1</td>
                <td>read more</td>
              </tr>
              <tr>
                <td>Luna</td>
                <td>1</td>
                <td>read more</td>
              </tr>


            </tbody>
          </table>
        </div> <!--2/3-->



      </div> <!--columns-->
      </div>
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
