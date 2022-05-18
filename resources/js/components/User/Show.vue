<template>
    <div>


    <table class="table w-50">
        <tbody>
        <tr v-if="user">
            <td>id</td>
            <th scope="row">{{ user.id }}</th>
        </tr>
        <tr>
            <td>Name</td>
            <th scope="row">{{ user.name }}</th>
        </tr>
        <tr>
            <td>Email</td>
            <th scope="row">{{ user.email }}</th>
        </tr>
        <tr>
            <td>Phone</td>
            <th scope="row">{{ user.phone }}</th>
        </tr>
        <tr>
            <td>Position</td>
            <th scope="row">{{ user.position }}</th>
        </tr>
        <tr>
            <td>Photo</td>
            <th><img style="height: 70px; width: 70px" :src=" user.photo" alt=""></th>
        </tr>

        </tbody>
    </table>
        <router-link class="btn btn-primary" :to="{name: 'user.index'}">Back</router-link>

    </div>
</template>

<script>
export default {
    name: "Show",

    data() {
        return {
            user: null
        }
    },

    mounted() {
        this.getUser()
    },

    methods: {
        getUser() {
            axios.get(`/api/v1/users/${this.$route.params.id}`)
                .then(res => {
                    console.log(res.data.user);
                    this.user = res.data.user
                })
        },
    }


}
</script>

<style scoped>

</style>
