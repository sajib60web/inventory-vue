<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Employee</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">All Employee</h6>
                        <router-link
                            to="/employees/create"
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
                                        <th>Salary</th>
                                        <th>Joining Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(
                                            employee, index
                                        ) in filterSearch"
                                        :key="employee.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ employee.name }}</td>
                                        <td>
                                            <img
                                                :src="employee.photo"
                                                id="em_photo"
                                            />
                                        </td>
                                        <td>{{ employee.phone_number }}</td>
                                        <td>{{ employee.salary }}</td>
                                        <td>{{ employee.joining_date }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'employees_edit',
                                                    params: { id: employee.id },
                                                }"
                                                class="btn btn-success btn-sm"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                            <button
                                                @click="
                                                    deleteEmployee(employee.id)
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
            employees: [],
            searchTerm: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allEmployee();
    },
    computed: {
        filterSearch() {
            return this.employees.filter((employee) => {
                return employee.name.match(this.searchTerm);
            });
        },
    },
    methods: {
        allEmployee() {
            axios
                .get("/api/auth/employees")
                .then(({ data }) => (this.employees = data))
                .catch();
        },
        deleteEmployee(id) {
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
                        .delete("/api/auth/employees/" + id)
                        .then(() => {
                            this.employees = this.employees.filter(
                                (employee) => {
                                    return employee.id != id;
                                }
                            );
                        })
                        .catch(() => {
                            this.$router.push({ name: "employee" });
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
