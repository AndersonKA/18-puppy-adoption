<template lang="html">
  <div class="app">
    <div class="title">Found a Pupper? We Can Help</div>
      <label class="label">Name</label>
      <p class="control">
        <input class="input" type="text" v-model="formValues.name">
      </p>
      <label class="label">Age</label>
      <p class="control">
        <input class="input" type="text" v-model="formValues.age">
      </p>
      <label class="label">Sex</label>
      <p class="control">
        <span class="select">
          <select v-model="formValues.sex">
            <option>Female</option>
            <option>Male</option>
          </select>
        </span>
      </p>
      <label class="label">Color</label>
      <p class="control">
        <input class="input" type="text" v-model="formValues.color">
      </p>
      <label class="label">Breed</label>
      <p class="control">
        <input class="input" type="text" v-model="formValues.author">
      </p>
      <label class="label">Image</label>
      <p class="control">
        <input class="input" type="text" v-model="formValues.image_url">
      </p>
      <label class="label">Description</label>
      <p class="control">
        <input class="textarea" type="text" v-model="formValues.description">
      </p>
      <button class="button is-normal">Back</button>
      <button class="button is-info">Submit</button>

  </div> <!--app-->
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image_url: '',
        description: '',
      },
    };
  },

  methods: {

  },
};
</script>
