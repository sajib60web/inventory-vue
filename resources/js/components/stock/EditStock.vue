<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Edit Stock</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">Edit Stock</h6>
                        <hr />
                    </div>
                    <form @submit.prevent="stockUpdate">
                        <div class="row justify-content-center">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Product Quantity</label>
                                    <input
                                        type="number"
                                        v-model="formData.product_quantity"
                                        class="form-control"
                                        placeholder="Enter Your Product Quantity"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.product_quantity"
                                    >
                                        {{ errors.product_quantity[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="text-right">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Update
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
                product_quantity: "",
            },
            errors: {},
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        let id = this.$route.params.id;
        axios
            .get("/api/auth/products/" + id)
            .then((response) => {
                this.formData = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        stockUpdate() {
            let id = this.$route.params.id;
            axios
                .post("/api/auth/stock/update/" + id, this.formData)
                .then((response) => {
                    Toast.fire({
                        icon: "success",
                        title: "Stock updated successfully",
                    });
                    this.$router.push("/stocks");
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
