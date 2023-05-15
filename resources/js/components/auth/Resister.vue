<template>
    <div class="main-wrapper account-wrapper">
        <div class="account-page">
            <div class="account-center">
                <div class="account-box">
                    <form @submit.prevent="resister" class="form-signin">
                        <div class="account-logo">
                            <a href="index.html"
                                ><img
                                    src="assets/backend/img/logo-dark.png"
                                    alt=""
                            /></a>
                        </div>
                        <div class="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                v-model="formData.name"
                                class="form-control"
                                placeholder="Name"
                            />
                            <small class="text-danger" v-if="errors.name">
                                {{ errors.name[0] }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input
                                type="text"
                                v-model="formData.email"
                                name="email"
                                class="form-control"
                                placeholder="Email Address"
                            />
                            <small class="text-danger" v-if="errors.email">
                                {{ errors.email[0] }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                v-model="formData.password"
                                class="form-control"
                                placeholder="Password"
                            />
                            <small class="text-danger" v-if="errors.password">
                                {{ errors.password[0] }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                v-model="formData.password_confirmation"
                                class="form-control"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div class="form-group text-center">
                            <button
                                class="btn btn-primary account-btn"
                                type="submit"
                            >
                                Resister
                            </button>
                        </div>
                        <div class="text-center login-link">
                            Already have an account?
                            <router-link to="/">Login</router-link>
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
                email: "",
                password: "",
                password_confirmation: "",
            },
            errors: {},
        };
    },
    mounted() {
        if (User.isLoggedIn()) {
            this.$router.push("/dashboard");
        }
    },
    methods: {
        resister() {
            axios
                .post("/api/auth/register", this.formData)
                .then((response) => {
                    this.errors = {};
                    // console.log(response.data);
                    User.responseAfterLogin(response);
                    Toast.fire({
                        icon: "success",
                        title: "Logged in successfully",
                    });
                    this.$router.push("/dashboard");
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    if (error.response.data.errors) {
                        // console.log(error.response.data.errors);
                        this.errors = error.response.data.errors;
                    } else {
                        // console.log(error.response.data.error);
                        this.errors = {};
                        Toast.fire({
                            icon: "warning",
                            title: error.response.data.error,
                        });
                    }
                });
        },
    },
};
</script>
