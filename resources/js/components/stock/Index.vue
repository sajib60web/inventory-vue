<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Stock</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">All Stock</h6>
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
                                        <th>Status</th>
                                        <th>Quantity</th>
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
                                        <td
                                            v-if="product.product_quantity >= 1"
                                        >
                                            <span class="badge badge-success"
                                                >Available
                                            </span>
                                        </td>
                                        <td v-else>
                                            <span class="badge badge-danger"
                                                >Stock Out
                                            </span>
                                        </td>
                                        <td>{{ product.product_quantity }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'edit_stock',
                                                    params: { id: product.id },
                                                }"
                                                class="btn btn-success btn-sm"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </router-link>
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
    },
};
</script>
<style>
#em_photo {
    height: 60px;
    width: 60px;
}
</style>
