<template>
    <div class="w-50 mt-4">
        <input type="text" class="form-control mt-2" v-model="name" placeholder="name">
        <input type="text" class="form-control mt-2" v-model="email" placeholder="email">
        <input type="text" class="form-control mt-2" v-model="phone" placeholder="phone">
        <input type="file" class="form-control mt-2" @change="onFileSelected">



        <select v-model="position_id" class="form-select mt-2" aria-label="Default select example">
            <template v-for="position in positions">
                <option :value="position.id">{{ position.position }}</option>
            </template>

        </select>
        <input :disabled="!isDisabled" @click.prevent="storeUser" type="text" class="btn btn-primary mt-3" value="Submit">
    </div>
</template>

<script>
export default {
    name: "Store",

    data() {
        return {
            name: null,
            email: null,
            phone: null,
            photo: null,
            position_id: null,
            selectedFile: null,
            positions: null
        }
    },

    mounted() {
        this.getPositions()
    },

    methods: {
        getPositions() {
            axios.get('/api/v1/positions')
                .then(res => {
                    this.positions = res.data.data.positions

                    console.log(this.positions);
                });
        },

        onFileSelected(event) {
            console.log(event.target.files[0]);
                this.selectedFile = event.target.files[0]

        },

        storeUser() {
            const fd = new FormData()
            fd.append('image', this.selectedFile, this.selectedFile.name)
            fd.append('name', this.name)
            fd.append('email', this.email)
            fd.append('phone', this.phone)
            fd.append('position_id', this.position_id)

            axios.post('/api/v1/users', fd)
                .then(res => {
                    this.$router.push({name: 'user.index'})
                })

        }

    },

    computed: {
        isDisabled() {
            return this.name && this.email && this.phone && this.position_id && this.selectedFile
        }

    }
}
</script>

<style scoped>

</style>
