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
                                    <th style="width: 20%">Qty</th>
                                    <th style="width: 10%">Quantity</th>
                                    <th style="width: 10%">Total</th>
                                    <th style="width: 5%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="cart in carts" :key="cart.id">
                                    <td>{{ cart.pro_name }}</td>
                                    <td>
                                        <button
                                            @click.prevent="decrement(cart.id)"
                                            class="btn btn-sm btn-danger"
                                            v-if="cart.pro_quantity >= 2"
                                        >
                                            -
                                        </button>
                                        <button
                                            class="btn btn-sm btn-danger"
                                            v-else=""
                                            disabled=""
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            readonly=""
                                            style="width: 15px"
                                            :value="cart.pro_quantity"
                                        />
                                        <button
                                            @click.prevent="increment(cart.id)"
                                            class="btn btn-sm btn-success"
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td class="text-right">
                                        {{ cart.product_price }}
                                    </td>
                                    <td class="text-right">
                                        {{ cart.sub_total }}
                                    </td>
                                    <td class="text-center">
                                        <a
                                            @click="removeItem(cart.id)"
                                            class="btn btn-sm btn-danger"
                                            ><i
                                                style="color: white"
                                                class="fa fa-trash"
                                            ></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer">
                        <ul class="list-group">
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center"
                            >
                                Total Quantity:
                                <strong>{{ qty }}</strong>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center"
                            >
                                Sub Total:
                                <strong>{{ subtotal }} $</strong>
                            </li>

                            <li
                                class="list-group-item d-flex justify-content-between align-items-center"
                            >
                                Vat:
                                <strong>{{ vats.vat }} %</strong>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center"
                            >
                                Total :
                                <strong
                                    >{{
                                        (subtotal * vats.vat) / 100 + subtotal
                                    }}
                                    $</strong
                                >
                            </li>
                        </ul>
                        <br />
                        <form @submit.prevent="orderNow">
                            <label>Customer Name</label>
                            <select class="form-control" v-model="customer_id">
                                <option value="">Select Customer</option>
                                <option
                                    :value="customer.id"
                                    v-for="customer in customers"
                                >
                                    {{ customer.name }}
                                </option>
                            </select>
                            <label>Pay</label>
                            <input
                                type="text"
                                class="form-control"
                                required=""
                                v-model="pay"
                            />
                            <label>Due</label>
                            <input
                                type="text"
                                class="form-control"
                                required=""
                                v-model="due"
                            />
                            <label>Payment Method</label>
                            <select
                                class="form-control"
                                v-model="payment_method"
                            >
                                <option value="">Select Payment Method</option>
                                <option value="HandCash">Hand Cash</option>
                                <option value="Cheque">Cheque</option>
                                <option value="GiftCard">Gift Card</option>
                            </select>
                            <br />
                            <button type="submit" class="btn btn-success">
                                Submit
                            </button>
                        </form>
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
            customer_id: "",
            pay: "",
            due: "",
            payment_method: "",

            products: [],
            categories: [],
            get_products: [],
            searchTerm: "",
            getSearchTerm: "",
            customers: "",
            errors: "",
            carts: [],
            vats: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allProduct();
        this.allCategory();
        this.allCustomer();
        this.cartProduct();
        this.vat();
        Reload.$on("AfterAdd", () => {
            this.cartProduct();
        });
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
        qty() {
            let sum = 0;
            for (let i = 0; i < this.carts.length; i++) {
                sum += parseFloat(this.carts[i].pro_quantity);
            }
            return sum;
        },
        subtotal() {
            let sum = 0;
            for (let i = 0; i < this.carts.length; i++) {
                sum +=
                    parseFloat(this.carts[i].pro_quantity) *
                    parseFloat(this.carts[i].product_price);
            }
            return sum;
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

        allCustomer() {
            axios
                .get("/api/auth/customers")
                .then(({ data }) => (this.customers = data))
                .catch();
        },

        subProduct(id) {
            axios
                .get("/api/auth/getting/product/" + id)
                .then(({ data }) => (this.get_products = data))
                .catch();
        },

        // Cart Methods Here
        addToCart(id) {
            axios
                .get("/api/auth/addToCart/" + id)
                .then(() => {
                    Reload.$emit("AfterAdd");
                    Notification.cart_success();
                })
                .catch();
        },

        cartProduct() {
            axios
                .get("/api/auth/cart/product")
                .then(({ data }) => (this.carts = data))
                .catch();
        },

        removeItem(id) {
            axios
                .get("/api/auth/remove/cart/" + id)
                .then(() => {
                    Reload.$emit("AfterAdd");
                    Notification.cart_delete();
                })
                .catch();
        },

        increment(id) {
            axios
                .get("/api/auth/increment/" + id)
                .then(() => {
                    Reload.$emit("AfterAdd");
                    Notification.success();
                })
                .catch();
        },

        decrement(id) {
            axios
                .get("/api/auth/decrement/" + id)
                .then(() => {
                    Reload.$emit("AfterAdd");
                    Notification.success();
                })
                .catch();
        },

        vat() {
            axios
                .get("/api/auth/vats")
                .then(({ data }) => (this.vats = data))
                .catch();
        },
        orderNow() {
            let total = (this.subtotal * this.vats.vat) / 100 + this.subtotal;
            var data = {
                qty: this.qty,
                subtotal: this.subtotal,
                customer_id: this.customer_id,
                payment_method: this.payment_method,
                pay: this.pay,
                due: this.due,
                vat: this.vats.vat,
                total: total,
            };
            axios.post("/api/auth/order_now", data).then(() => {
                Notification.success();
                this.$router.push("/orders");
            });
        },
        // End Cart Methods
    },
};
</script>
<style>
.em_photo {
    height: 100px;
    width: 100px;
}
</style>
