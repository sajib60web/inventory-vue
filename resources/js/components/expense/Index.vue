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
                        <h6 class="card-title text-bold">All Expense</h6>
                        <router-link
                            to="/expenses/create"
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
                                        <th>Amount</th>
                                        <th>Expense Date</th>
                                        <th>Details</th>
                                        <th>Action</th>
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
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'expenses_edit',
                                                    params: { id: expense.id },
                                                }"
                                                class="btn btn-success btn-sm"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </router-link>
                                            <button
                                                @click="
                                                    deleteExpense(expense.id)
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
                .get("/api/auth/expenses")
                .then(({ data }) => (this.expenses = data))
                .catch();
        },
        deleteExpense(id) {
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
                        .delete("/api/auth/expenses/" + id)
                        .then(() => {
                            this.expenses = this.expenses.filter((expense) => {
                                return expense.id != id;
                            });
                        })
                        .catch(() => {
                            this.$router.push({ name: "expenses" });
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
