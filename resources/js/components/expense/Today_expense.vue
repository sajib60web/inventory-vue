<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Expense</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">Today Expense</h6>
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
                                        <th>Amount</th>
                                        <th>Expense Date</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(expense, index) in filterSearch"
                                        :key="expense.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ expense.name }}</td>
                                        <td>{{ expense.amount }}</td>
                                        <td>{{ expense.expense_date }}</td>
                                        <td>{{ expense.details }}</td>
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
            expenses: [],
            searchTerm: "",
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        this.allExpense();
    },
    computed: {
        filterSearch() {
            return this.expenses.filter((expense) => {
                return expense.name.match(this.searchTerm);
            });
        },
    },
    methods: {
        allExpense() {
            axios
                .get("/api/auth/today/expenses")
                .then(({ data }) => (this.expenses = data))
                .catch();
        },
    },
};
</script>
