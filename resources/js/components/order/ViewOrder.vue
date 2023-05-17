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
                        <h6 class="card-title text-bold">Order Details</h6>
                        <router-link
                            to="/orders"
                            style="float: right; margin-top: -40px"
                            class="btn btn-warning btn-sm"
                        >
                            Back To Order
                        </router-link>
                        <div class="row mb-4">
                            <div class="col-sm-6">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <b>Name :</b> {{ order.name }}
                                    </li>
                                    <li class="list-group-item">
                                        <b>Phone :</b> {{ order.phone_number }}
                                    </li>
                                    <li class="list-group-item">
                                        <b>Address :</b> {{ order.address }}
                                    </li>
                                    <li class="list-group-item">
                                        <b>Date :</b> {{ order.order_date }}
                                    </li>
                                    <li class="list-group-item">
                                        <b>Pay Through :</b>
                                        {{ order.payment_method }}
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <b>Sub Total :</b>
                                        {{ order.sub_total }} $
                                    </li>
                                    <li class="list-group-item">
                                        <b>Vat :</b> {{ order.vat }} $
                                    </li>
                                    <li class="list-group-item">
                                        <b>Total :</b> {{ order.total }} $
                                    </li>
                                    <li class="list-group-item">
                                        <b>Pay Amount :</b> {{ order.pay }} $
                                    </li>
                                    <li class="list-group-item">
                                        <b>Due Amount :</b> {{ order.due }} $
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product Code</th>
                                        <th>Image</th>
                                        <th>Qty</th>
                                        <th>Unit Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="detail in order_details">
                                        <td>{{ detail.product_name }}</td>
                                        <td>{{ detail.product_code }}</td>
                                        <td>
                                            <img
                                                :src="'/' + detail.image"
                                                id="em_photo"
                                            />
                                        </td>
                                        <td>{{ detail.pro_quantity }}</td>
                                        <td>{{ detail.product_price }} $</td>
                                        <td>{{ detail.sub_total }} $</td>
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
            order: [],
            order_details: [],
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        let id = this.$route.params.id;
        axios
            .get("/api/auth/order/details/" + id)
            .then((response) => {
                this.order = response.data.order;
                this.order_details = response.data.order_details;
            })
            .catch();
    },
};
</script>
