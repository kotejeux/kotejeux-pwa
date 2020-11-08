<template>
  <div class="gameList">
    <ul>
      <div class="item" v-for="game in games" :key="game.id">
        <li>{{ game.name }}</li>
      </div>
    </ul>
  </div>
</template>

<script scoped>
export default {
  name: "gameList",
  data() {
    return {
      games: [
        {
          id: 1,
          name: "Galérapagos"
        },
        { id: 2, name: "Dominion" },
        {
          id: 3,
          name: "Bang"
        }
      ]
    };
  }
};
</script>

<style scoped>
.item {
  background: cornflowerblue;
  margin: 5px;
  margin-left: 0px;
  width: 90%;
  text-align: left;
  font-size: 20px;
  padding: 10px;
  border: 2px solid grey;
  border-radius: 5px;
}

ul {
  list-style-position: inside;
  list-style-type: none;
}
</style>
