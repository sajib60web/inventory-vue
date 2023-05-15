<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Create Category</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">Create Category</h6>
                        <hr />
                    </div>
                    <form @submit.prevent="categoryCreate">
                        <div class="row justify-content-center">
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label>Category Name</label>
                                    <input
                                        type="text"
                                        v-model="formData.category_name"
                                        class="form-control"
                                        placeholder="Category Name"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.category_name"
                                    >
                                        {{ errors.category_name[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea
                                        v-model="formData.description"
                                        class="form-control"
                                        placeholder="Description"
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="text-right">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                category_name: "",
                description: "",
            },
            errors: {},
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
    },
    methods: {
        categoryCreate() {
            axios
                .post("/api/auth/categories", this.formData)
                .then((response) => {
                    Toast.fire({
                        icon: "success",
                        title: "Category created successfully",
                    });
                    this.$router.push("/categories");
                })
                .catch((error) => {
                    if (error.response.data.errors) {
                        this.errors = error.response.data.errors;
                    } else {
                        this.errors = {};
                        Notification.error();
                    }
                });
        },
    },
};
</script>
