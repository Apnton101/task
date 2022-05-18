<template>
<div>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Position</th>
            <th scope="col">Position_id</th>
            <th scope="col">photo</th>
            <th scope="col">registration</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users">
            <th scope="row">{{ user.id}}</th>
            <td>
                <router-link :to="{name: 'user.show', params: {id: user.id}}">{{ user.name}}</router-link>
            </td>
            <td>{{ user.email}}</td>
            <td>{{ user.position}}</td>
            <td>{{ user.position_id}}</td>
            <td ><img style="height: 70px; width: 70px" :src=" user.photo" alt=""></td>
            <td>{{ user.registration_timestamp}}</td>
        </tr>
        </tbody>
    </table>
    <nav v-if="pagination" aria-label="Page navigation example">
        <ul  class="pagination">
            <li :class="{ disabled: ! pagination.prev_url }"
                @click.prevent="getUsers(pagination.prev_url)"
                class="page-item"><a class="page-link" href="">Назад</a></li>

            <li :class="{ disabled: ! pagination.next_url }"
                @click.prevent="getUsers(pagination.next_url)"
                class="page-item"><a class="page-link" href="#">Следующая</a></li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name: "Index",

    data(){
        return {
            users: null,
            positions: null,
            pagination: null

        }

    },

    mounted() {
        this.getUsers()
    },

    methods: {
        getUsers(page_url){
            page_url = page_url || '/api/v1/users'
            console.log(page_url);
            axios.get(page_url)
            .then(res => {
                this.users = res.data.users
                this.makePagination(res.data.pagination)
            })
            .catch(error => {
                console.log(error);
            })

        },

        makePagination(res) {

            let pagination = {
                page: res.count,
                next_url: res.links.next_url,
                prev_url: res.links.prev_url

            }

            this.pagination = pagination

            console.log(this.pagination.next_url);


        }

    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
