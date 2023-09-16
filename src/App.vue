<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="navbar">
    <div>
      <nav>
        <router-link to="/">Posts</router-link>
        <router-link to="/authors">Authors</router-link>
      </nav>
    </div>
  </header>

  <router-view></router-view>
 
</template>


<style>
.navbar {
  background-color: lightgreen;
  padding: 1.2rem;
}
</style>