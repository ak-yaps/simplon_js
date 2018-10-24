<template lang="html">
  <div>
    <ul id="user_list" class="list">
      <li v-for="(user, n) in users" :key="n">
        <router-link :to="{name: 'user-profile', params: {id: user.id}}">
          {{ user.name }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: [
        {
          name: "Yunho",
          id:1
        },
        {
          name: "Mi Hae",
          id:2
        },
        {
          name: "Smith",
          id:3
        },
        {
          name: "Randy",
          id:4
        },
        {
          name: "Ino",
          id:5
        },
      ]
    }
  }
}
</script>
