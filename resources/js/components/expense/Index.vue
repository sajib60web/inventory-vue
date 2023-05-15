<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Category</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">All Category</h6>
                        <router-link
                            to="/categories/create"
                            style="float: right; margin-top: -40px"
                            class="btn btn-success btn-sm"
                        >
                            Create
                        </router-link>
                        <div style="margin-bottom: 10px">
                            <input
                                type="text"
                                v-model="searchTerm"
                                class="form-control"
                                style="width: 300px"
                                placeholder="Search Category Name Here"
                            />
                        </div>
                        <div class="table-responsive">
                            <table
                                class="table table-bordered table-striped table-hover table-sm"
                            >
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Category Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(
                                            category, index
                                        ) in filterSearch"
                                        :key="category.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ category.category_name }}</td>
                                        <td>{{ category.description }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'categories_edit',
                                                    params: { id: category.id },
                                                }"
                                                class="btn btn-success btn-sm"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                            <button
                                                @click="
                                                    deleteCategory(category.id)
                                                "
                                                class="btn btn-danger btn-sm"
                                            >
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            categories: [],
            searchTerm: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allCategory();
    },
    computed: {
        filterSearch() {
            return this.categories.filter((category) => {
                return category.category_name.match(this.searchTerm);
            });
        },
    },
    methods: {
        allCategory() {
            axios
                .get("/api/auth/categories")
                .then(({ data }) => (this.categories = data))
                .catch();
        },
        deleteCategory(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    axios
                        .delete("/api/auth/categories/" + id)
                        .then(() => {
                            this.categories = this.categories.filter(
                                (category) => {
                                    return category.id != id;
                                }
                            );
                        })
                        .catch(() => {
                            this.$router.push({ name: "categories" });
                        });
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    );
                }
            });
        },
    },
};
</script>
<style>
#em_photo {
    height: 60px;
    width: 60px;
}
</style>
