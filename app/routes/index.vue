<template lang="html">
  <div class="app">
  <div class="level">
    <div class="level-left">
      <div class="title level-item">Puppies For Adoption</div>
    </div>
    <div class="level-right">
      <router-link class="nav-item button is-info level-item" :to="{ name: 'new' }">Add A Pupper</router-link>
    </div>
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
          <td><router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link></td>
        </tr>
        <tr>
          <td>Luna</td>
          <td>1</td>
          <td><router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link></td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>1</td>
          <td><router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link></td>
        </tr>
        <tr>
          <td>Luna</td>
          <td>1</td>
          <td><router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link></td>
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
          <td><router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link></td>
        </tr>
        <tr>
          <td>Luna</td>
          <td>1</td>
          <td><router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link></td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>1</td>
          <td><router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link></td>
        </tr>
        <tr>
          <td>Luna</td>
          <td>1</td>
          <td><router-link class="subtitle primary" :to="{ name: 'detail' }">read more</router-link></td>
        </tr>


      </tbody>
    </table>
    </div>
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
