<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Point Of Sale</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5 col-md-5">
                <div class="card mb-4">
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                    >
                        <h6 class="m-0 font-weight-bold text-primary">
                            Customer Insert
                        </h6>
                        <a class="btn btn-sm btn-info"
                            ><font color="#ffffff">Add Customer</font></a
                        >
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered table-sm">
                            <thead class="thead-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Unit</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="card-box">
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                    >
                        <h6 class="m-0 font-weight-bold text-primary">
                            Products Sold
                        </h6>
                    </div>
                    <!--  Category Wise Product -->
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#home"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                                >All Product
                            </a>
                        </li>
                        <li
                            class="nav-item"
                            v-for="category in categories"
                            :key="category.id"
                        >
                            <a
                                class="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#profile"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                                @click="subProduct(category.id)"
                            >
                                {{ category.category_name }}
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div
                            class="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            <div class="card-body">
                                <div style="margin-bottom: 10px">
                                    <input
                                        type="text"
                                        v-model="searchTerm"
                                        class="form-control"
                                        style="width: 100%"
                                        placeholder="Search Product"
                                    />
                                </div>
                                <div class="row">
                                    <div
                                        class="col-lg-4 col-md-4 col-sm-6 col-6"
                                        v-for="product in filterSearch"
                                        :key="product.id"
                                    >
                                        <button
                                            class="btn btn-sm"
                                            @click.prevent="
                                                addToCart(product.id)
                                            "
                                        >
                                            <div
                                                class="card"
                                                style="
                                                    margin-bottom: 5px;
                                                    min-height: 200px;
                                                    border: 1px solid;
                                                "
                                            >
                                                <div style="text-align: center">
                                                    <img
                                                        :src="product.image"
                                                        class="card-img-top em_photo"
                                                    />
                                                </div>
                                                <div class="card-body">
                                                    <h6>
                                                        {{
                                                            product.product_name
                                                        }}
                                                    </h6>
                                                    <span
                                                        class="badge badge-success"
                                                        v-if="
                                                            product.product_quantity >=
                                                            1
                                                        "
                                                    >
                                                        Available ({{
                                                            product.product_quantity
                                                        }})
                                                    </span>
                                                    <span
                                                        class="badge badge-danger"
                                                        v-else
                                                    >
                                                        Stock Out
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <div class="card-body">
                                <div style="margin-bottom: 10px">
                                    <input
                                        type="text"
                                        v-model="getSearchTerm"
                                        class="form-control"
                                        style="width: 100%"
                                        placeholder="Search Product"
                                    />
                                </div>
                                <div class="row">
                                    <div
                                        class="col-lg-4 col-md-4 col-sm-6 col-6"
                                        v-for="get_product in getFilterSearch"
                                        :key="get_product.id"
                                    >
                                        <button
                                            class="btn btn-sm"
                                            @click.prevent="
                                                addToCart(get_product.id)
                                            "
                                        >
                                            <div
                                                class="card"
                                                style="
                                                    margin-bottom: 5px;
                                                    min-height: 200px;
                                                    border: 1px solid;
                                                "
                                            >
                                                <div style="text-align: center">
                                                    <img
                                                        :src="get_product.image"
                                                        class="card-img-top em_photo"
                                                    />
                                                </div>
                                                <div class="card-body">
                                                    <h6>
                                                        {{
                                                            get_product.product_name
                                                        }}
                                                    </h6>
                                                    <span
                                                        class="badge badge-success"
                                                        v-if="
                                                            get_product.product_quantity >=
                                                            1
                                                        "
                                                    >
                                                        Available ({{
                                                            get_product.product_quantity
                                                        }})
                                                    </span>
                                                    <span
                                                        class="badge badge-danger"
                                                        v-else
                                                    >
                                                        Stock Out
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [],
            categories: [],
            get_products: [],
            searchTerm: "",
            getSearchTerm: "",
            carts: [],
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allProduct();
        this.allCategory();
    },
    computed: {
        filterSearch() {
            return this.products.filter((product) => {
                return product.product_name.match(this.searchTerm);
            });
        },
        getFilterSearch() {
            return this.get_products.filter((get_product) => {
                return get_product.product_name.match(this.getSearchTerm);
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
        allCategory() {
            axios
                .get("/api/auth/categories")
                .then(({ data }) => (this.categories = data))
                .catch();
        },
        subProduct(id) {
            axios
                .get("/api/auth/getting/product/" + id)
                .then(({ data }) => (this.get_products = data))
                .catch();
        },
        addToCart(id) {
            axios
                .get("/api/auth/addToCart/" + id)
                .then(() => {
                    Reload.$emit("AfterAdd");
                    Notification.cart_success();
                })
                .catch();
        },
    },
};
</script>
<style>
.em_photo {
    height: 100px;
    width: 100px;
}
</style>
