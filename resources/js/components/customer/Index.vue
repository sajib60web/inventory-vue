<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Customer</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">All Customer</h6>
                        <router-link
                            to="/customers/create"
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
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Photo</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(
                                            customer, index
                                        ) in filterSearch"
                                        :key="customer.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ customer.name }}</td>
                                        <td>
                                            <img
                                                :src="customer.photo"
                                                id="em_photo"
                                            />
                                        </td>
                                        <td>{{ customer.phone_number }}</td>
                                        <td>{{ customer.email }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'customers_edit',
                                                    params: { id: customer.id },
                                                }"
                                                class="btn btn-success btn-sm"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                            <button
                                                @click="
                                                    deleteCustomer(customer.id)
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
            customers: [],
            searchTerm: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allCustomer();
    },
    computed: {
        filterSearch() {
            return this.customers.filter((customer) => {
                return customer.name.match(this.searchTerm);
            });
        },
    },
    methods: {
        allCustomer() {
            axios
                .get("/api/auth/customers")
                .then(({ data }) => (this.customers = data))
                .catch();
        },
        deleteCustomer(id) {
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
                        .delete("/api/auth/customers/" + id)
                        .then(() => {
                            this.customers = this.customers.filter(
                                (customer) => {
                                    return customer.id != id;
                                }
                            );
                        })
                        .catch(() => {
                            this.$router.push({ name: "customers" });
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
