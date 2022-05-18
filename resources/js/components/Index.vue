<template>
<div>
    <router-link class="btn btn-outline-primary" :to="{name: 'user.index'}">Users</router-link>
    <router-link class="btn btn-outline-primary" :to="{name: 'user.store'}">Add User</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
