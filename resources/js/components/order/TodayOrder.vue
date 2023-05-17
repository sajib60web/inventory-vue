<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Order</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">Today Order</h6>
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
                                        <th>Total Amount</th>
                                        <th>Pay</th>
                                        <th>Due</th>
                                        <th>Payment Method</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="order in filterSearch"
                                        :key="order.id"
                                    >
                                        <td>{{ order.name }}</td>
                                        <td>{{ order.total }} $</td>
                                        <td>{{ order.pay }} $</td>
                                        <td>{{ order.due }} $</td>
                                        <td>{{ order.payment_method }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'view-order',
                                                    params: { id: order.id },
                                                }"
                                                class="btn btn-sm btn-primary"
                                            >
                                                View
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
            orders: [],
            searchTerm: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allOrder();
    },
    computed: {
        filterSearch() {
            return this.orders.filter((order) => {
                return order.name.match(this.searchTerm);
            });
        },
    },
    methods: {
        allOrder() {
            axios
                .get("/api/auth/today/orders")
                .then(({ data }) => (this.orders = data))
                .catch();
        },
    },
};
</script>
