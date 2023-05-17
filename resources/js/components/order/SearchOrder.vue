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
                        <h6 class="card-title text-bold">Search Order</h6>
                        <form class="user" @submit.prevent="searchDate">
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="col-sm-6">
                                        <label>From Date</label>
                                        <input
                                            type="date"
                                            class="form-control"
                                            required=""
                                            v-model="form.form_date"
                                        />
                                    </div>
                                    <div class="col-sm-6">
                                        <label>To Date</label>
                                        <input
                                            type="date"
                                            class="form-control"
                                            required=""
                                            v-model="form.to_date"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
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
                                    <tr v-for="order in orders" :key="order.id">
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
            form: {
                form_date: "",
                to_date: "",
            },
            orders: [],
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
    },
    methods: {
        searchDate() {
            axios
                .post("/api/auth/search/order", this.form)
                .then(({ data }) => {
                    this.orders = data;
                })
                .catch();
        },
    },
};
</script>
