<template>
  <div id="app">
    <router-link to="/">
      <header>
        <span>Ludothèque KEJ</span>
      </header>
    </router-link>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA" />
      <router-view></router-view>
    </main>
    <nav>
      <router-link tag="button" to="gameList">Liste des jeux</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

button {
  background-color: #008bca; /* Blue */
  border: none;
  color: white;
  padding: 15px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 6px;
}

nav {
  text-align: center;
}
</style>
