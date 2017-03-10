<template lang="html">
  <div class="app">
    <div class="title">Found a Pupper? We Can Help</div>
      <label class="label">Name</label>
      <p class="control">
        <input class="input" type="text">
      </p>
      <label class="label">Age</label>
      <p class="control">
        <input class="input" type="text">
      </p>
      <label class="label">Sex</label>
      <p class="control">
        <span class="select">
          <select>
            <option>Select an option</option>
            <option>Female</option>
            <option>Male</option>
          </select>
        </span>
      </p>
      <label class="label">Color</label>
      <p class="control">
        <input class="input" type="text">
      </p>
      <label class="label">Breed</label>
      <p class="control">
        <input class="input" type="text">
      </p>
      <label class="label">Image URL</label>
      <p class="control">
        <input class="input" type="text">
      </p>
      <label class="label">Description</label>
      <p class="control">
        <input class="textarea" type="text">
      </p>
      <button class="button is-normal">Back</button>
      <button class="button is-info">Submit</button>

  </div> <!--app-->
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
