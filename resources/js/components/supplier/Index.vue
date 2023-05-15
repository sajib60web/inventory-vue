<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Supplier</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">All Supplier</h6>
                        <router-link
                            to="/suppliers/create"
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
                                        <th>Shop Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(
                                            supplier, index
                                        ) in filterSearch"
                                        :key="supplier.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ supplier.name }}</td>
                                        <td>
                                            <img
                                                :src="supplier.photo"
                                                id="em_photo"
                                            />
                                        </td>
                                        <td>{{ supplier.phone_number }}</td>
                                        <td>{{ supplier.shop_name }}</td>
                                        <td>{{ supplier.email }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'suppliers_edit',
                                                    params: { id: supplier.id },
                                                }"
                                                class="btn btn-success btn-sm"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                            <button
                                                @click="
                                                    deleteSupplier(supplier.id)
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
            suppliers: [],
            searchTerm: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allSupplier();
    },
    computed: {
        filterSearch() {
            return this.suppliers.filter((supplier) => {
                return supplier.name.match(this.searchTerm);
            });
        },
    },
    methods: {
        allSupplier() {
            axios
                .get("/api/auth/suppliers")
                .then(({ data }) => (this.suppliers = data))
                .catch();
        },
        deleteSupplier(id) {
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
                        .delete("/api/auth/suppliers/" + id)
                        .then(() => {
                            this.suppliers = this.suppliers.filter(
                                (supplier) => {
                                    return supplier.id != id;
                                }
                            );
                        })
                        .catch(() => {
                            this.$router.push({ name: "suppliers" });
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
