<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Edit Expense</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">Edit Expense</h6>
                        <hr />
                    </div>
                    <form @submit.prevent="expenseUpdate">
                        <div class="row justify-content-center">
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        v-model="formData.name"
                                        class="form-control"
                                        placeholder="Name"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.name"
                                    >
                                        {{ errors.name[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label>Amount</label>
                                    <input
                                        type="number"
                                        v-model="formData.amount"
                                        class="form-control"
                                        placeholder="Amount"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.amount"
                                    >
                                        {{ errors.amount[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label>Expense Date</label>
                                    <input
                                        type="date"
                                        v-model="formData.expense_date"
                                        class="form-control"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.expense_date"
                                    >
                                        {{ errors.expense_date[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label>Details</label>
                                    <textarea
                                        v-model="formData.details"
                                        class="form-control"
                                        placeholder="Details"
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="text-right">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
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
                name: "",
                amount: "",
                expense_date: "",
                details: "",
            },
            errors: {},
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        let id = this.$route.params.id;
        axios
            .get("/api/auth/expenses/" + id)
            .then((response) => {
                this.formData = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        expenseUpdate() {
            let id = this.$route.params.id;
            axios
                .patch("/api/auth/expenses/" + id, this.formData)
                .then((response) => {
                    Toast.fire({
                        icon: "success",
                        title: "Expense updated successfully",
                    });
                    this.$router.push("/expenses");
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
