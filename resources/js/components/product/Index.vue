<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">All Product</h6>
                        <router-link
                            to="/products/create"
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
                                placeholder="Search Name Here"
                            />
                        </div>
                        <div class="table-responsive">
                            <table
                                class="table table-bordered table-striped table-hover table-sm"
                            >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Code</th>
                                        <th>Photo</th>
                                        <th>Category</th>
                                        <th>Buying Price</th>
                                        <th>Selling Price</th>
                                        <th>Root</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="product in filterSearch"
                                        :key="product.id"
                                    >
                                        <td>{{ product.product_name }}</td>
                                        <td>{{ product.product_code }}</td>
                                        <td>
                                            <img
                                                :src="product.image"
                                                id="em_photo"
                                            />
                                        </td>
                                        <td>{{ product.category_name }}</td>
                                        <td>{{ product.buying_price }}</td>
                                        <td>{{ product.selling_price }}</td>
                                        <td>{{ product.root }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'products_edit',
                                                    params: { id: product.id },
                                                }"
                                                class="btn btn-success btn-sm"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                            <button
                                                @click="
                                                    deleteProduct(product.id)
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
            products: [],
            searchTerm: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allProduct();
    },
    computed: {
        filterSearch() {
            return this.products.filter((product) => {
                return product.product_name.match(this.searchTerm);
            });
        },
    },
    methods: {
        allProduct() {
            axios
                .get("/api/auth/products")
                .then(({ data }) => (this.products = data))
                .catch();
        },
        deleteProduct(id) {
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
                        .delete("/api/auth/products/" + id)
                        .then(() => {
                            this.products = this.products.filter((product) => {
                                return product.id != id;
                            });
                        })
                        .catch(() => {
                            this.$router.push({ name: "products" });
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
