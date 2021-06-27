<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li v-if="!$auth.loggedIn">
        <nuxt-link to="/login">Login</nuxt-link>
      </li>
      <li v-else>
        <button @click="$auth.logout()">Logout</button>
      </li>
    </ul>
  </div>
</template>
