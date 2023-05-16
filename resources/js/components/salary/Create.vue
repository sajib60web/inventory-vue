<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Create Salary</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">Create Salary</h6>
                        <hr />
                    </div>
                    <form @submit.prevent="salaryCreate">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Employee</label>
                                    <select
                                        class="form-control"
                                        v-model="formData.employee_id"
                                    >
                                        <option value="">
                                            Select Employee
                                        </option>
                                        <option
                                            :value="employee.id"
                                            v-for="employee in employees"
                                        >
                                            {{ employee.name }}
                                        </option>
                                    </select>
                                    <small
                                        class="text-danger"
                                        v-if="errors.employee_id"
                                    >
                                        {{ errors.employee_id[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Amount</label>
                                    <input
                                        type="number"
                                        v-model="formData.amount"
                                        class="form-control"
                                        placeholder="Enter Your Amount"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.amount"
                                    >
                                        {{ errors.amount[0] }}</small
                                    >
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Salary Month</label>
                                    <select
                                        class="form-control"
                                        v-model="formData.salary_month"
                                    >
                                        <option value="">Select Month</option>
                                        <option value="January">January</option>
                                        <option value="February">
                                            February
                                        </option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="Jun">Jun</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">
                                            September
                                        </option>
                                        <option value="October">October</option>
                                        <option value="November">
                                            November
                                        </option>
                                        <option value="December">
                                            December
                                        </option>
                                    </select>
                                    <small
                                        class="text-danger"
                                        v-if="errors.salary_month"
                                    >
                                        {{ errors.salary_month[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Note</label>
                                    <input
                                        type="text"
                                        v-model="formData.note"
                                        class="form-control"
                                        placeholder="Enter Your Note"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                employee_id: "",
                amount: "",
                salary_month: "",
                note: "",
            },
            errors: {},
            employees: {},
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        axios
            .get("/api/auth/employees")
            .then(({ data }) => (this.employees = data));
    },
    methods: {
        salaryCreate() {
            axios
                .post("/api/auth/salaries", this.formData)
                .then((response) => {
                    Toast.fire({
                        icon: "success",
                        title: "Salary created successfully",
                    });
                    this.$router.push("/salaries");
                })
                .catch((error) => {
                    if (error.response.data.errors) {
                        this.errors = error.response.data.errors;
                    } else {
                        this.errors = {};
                        Notification.error();
                    }
                });
        },
    },
};
</script>
