<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Salary</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">All Salary</h6>
                        <router-link
                            to="/salaries/create"
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
                                        <th>Employee</th>
                                        <th>Salary Date</th>
                                        <th>Salary Month</th>
                                        <th>Salary Year</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(salary, index) in filterSearch"
                                        :key="salary.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>
                                            <span v-if="salary.employee.name">
                                                {{ salary.employee.name }}
                                            </span>
                                        </td>
                                        <td>{{ salary.salary_date }}</td>
                                        <td>{{ salary.salary_month }}</td>
                                        <td>{{ salary.salary_year }}</td>
                                        <td>{{ salary.amount }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'view_salary',
                                                    params: { id: salary.id },
                                                }"
                                                class="btn btn-info btn-sm"
                                            >
                                                <i class="fa fa-eye"></i>
                                            </router-link>
                                            <router-link
                                                :to="{
                                                    name: 'salaries_edit',
                                                    params: { id: salary.id },
                                                }"
                                                class="btn btn-success btn-sm"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                            <button
                                                @click="deleteSalary(salary.id)"
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
            salaries: [],
            searchTerm: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allSalary();
    },
    computed: {
        filterSearch() {
            return this.salaries.filter((salary) => {
                return salary.salary_date.match(this.searchTerm);
            });
        },
    },
    methods: {
        allSalary() {
            axios
                .get("/api/auth/salaries")
                .then(({ data }) => {
                    this.salaries = data;
                })
                .catch();
        },
        deleteSalary(id) {
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
                        .delete("/api/auth/salaries/" + id)
                        .then(() => {
                            this.salaries = this.salaries.filter((salary) => {
                                return salary.id != id;
                            });
                        })
                        .catch(() => {
                            this.$router.push({ name: "salaries" });
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
