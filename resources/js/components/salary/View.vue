<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">View Salary</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">View Salary</h6>
                        <router-link
                            to="/salaries"
                            style="float: right; margin-top: -40px"
                            class="btn btn-warning btn-sm"
                        >
                            Back To Salary
                        </router-link>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered table-sm">
                            <tr>
                                <th style="width: 25%">Employee</th>
                                <td style="width: 25%">
                                    <span v-if="salary.employee.name">
                                        {{ salary.employee.name }}
                                    </span>
                                </td>
                                <th style="width: 25%">Salary Date</th>
                                <td style="width: 25%">
                                    {{ salary.salary_date }}
                                </td>
                            </tr>
                            <tr>
                                <th>Salary Month</th>
                                <td>{{ salary.salary_month }}</td>
                                <th>Salary Year</th>
                                <td>{{ salary.salary_year }}</td>
                            </tr>
                            <tr>
                                <th>Amount</th>
                                <td>{{ salary.amount }}</td>
                                <th>Note</th>
                                <td>{{ salary.note }}</td>
                            </tr>
                        </table>
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
            salary: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        let id = this.$route.params.id;
        axios
            .get("/api/auth/salaries/" + id)
            .then((response) => {
                this.salary = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>
