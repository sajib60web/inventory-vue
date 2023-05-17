<template>
    <div class="content">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div class="dash-widget">
                    <div class="dash-widget-info text-right">
                        <h3>Today Sell</h3>
                        <span class="widget-title1"> {{ today_sell }}</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div class="dash-widget">
                    <div class="dash-widget-info text-right">
                        <h3>Today Income</h3>
                        <span class="widget-title2"> {{ income }}</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div class="dash-widget">
                    <div class="dash-widget-info text-right">
                        <h3>Today Due</h3>
                        <span class="widget-title3">{{ due }}</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div class="dash-widget">
                    <div class="dash-widget-info text-right">
                        <h3>Today Expense</h3>
                        <span class="widget-title4">{{ expense }}</span>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                <div class="dash-widget">
                    <table class="table table-bordered table-sm">
                        <thead class="thead-light">
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Buying Price</th>
                                <th>Status</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(product, index) in products"
                                :key="product.id"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ product.product_name }}</td>
                                <td>{{ product.product_code }}</td>
                                <td>{{ product.buying_price }}</td>
                                <td v-if="product.product_quantity >= 1">
                                    <span class="badge badge-success"
                                        >Available
                                    </span>
                                </td>
                                <td v-else=" ">
                                    <span class="badge badge-danger"
                                        >Stock Out
                                    </span>
                                </td>
                                <td>{{ product.product_quantity }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            today_sell: "",
            income: "",
            due: "",
            expense: "",
            products: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }

        this.todaySell();
        this.todayIncome();
        this.todayDue();
        this.todayExpense();
        this.stockOut();
    },
    methods: {
        todaySell() {
            axios
                .get("/api/auth/today/sell")
                .then(({ data }) => (this.today_sell = data))
                .catch();
        },
        todayIncome() {
            axios
                .get("/api/auth/today/income")
                .then(({ data }) => (this.income = data))
                .catch();
        },
        todayDue() {
            axios
                .get("/api/auth/today/due")
                .then(({ data }) => (this.due = data))
                .catch();
        },
        todayExpense() {
            axios
                .get("/api/auth/today/expense")
                .then(({ data }) => (this.expense = data))
                .catch();
        },

        stockOut() {
            axios
                .get("/api/auth/today/stock_out")
                .then(({ data }) => (this.products = data))
                .catch();
        },
    },
};
</script>
