<template>
    <div class="main-wrapper account-wrapper">
        <div class="account-page">
            <div class="account-center">
                <div class="account-box">
                    <form @submit.prevent="login" class="form-signin">
                        <div class="account-logo">
                            <a href="index.html"
                                ><img
                                    src="assets/backend/img/logo-dark.png"
                                    alt=""
                            /></a>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input
                                type="text"
                                v-model="formData.email"
                                name="email"
                                class="form-control"
                                autofocus
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
                        <div class="form-group text-right">
                            <router-link to="/forgot-password"
                                >Forgot your password?</router-link
                            >
                        </div>
                        <div class="form-group text-center">
                            <button
                                type="submit"
                                class="btn btn-primary account-btn"
                            >
                                Login
                            </button>
                        </div>
                        <div class="text-center register-link">
                            Don’t have an account?
                            <router-link to="/resister"
                                >Register Now</router-link
                            >
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
                email: "",
                password: "",
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
        login() {
            axios
                .post("/api/auth/login", this.formData)
                .then((response) => {
                    // console.log(response.data);
                    User.responseAfterLogin(response);
                    Toast.fire({
                        icon: "success",
                        title: "Logged in successfully",
                    });
                    this.$router.push("/dashboard");
                })
                .catch((error) => {
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
