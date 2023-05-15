<template>
    <p style="text-align: center">Logout successfully</p>
</template>
<script>
export default {
    mounted() {
        this.logout();
        console.log("Hello");
    },
    methods: {
        logout() {
            // User.logout();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            Toast.fire({
                icon: "success",
                title: "Successfully logged out",
            });
            this.$router.push({ name: "login" });
            // axios
            //     .post("/api/auth/logout", this.formData, {
            //         headers: {
            //             Authorization: `Bearer ${localStorage.getItem(
            //                 "token"
            //             )}`,
            //         },
            //     })
            //     .then((response) => {
            //         // console.log(response.data.message);
            //         User.logout();
            //         Toast.fire({
            //             icon: "success",
            //             title: response.data.message,
            //         });
            //         this.$router.push("/");
            //     })
            //     .catch((error) => {
            //         // console.log(error);
            //         Toast.fire({
            //             icon: "warning",
            //             title: "Your account is not logged out",
            //         });
            //         this.$router.push("/dashboard");
            //     })
            //     .finally(() => {
            //         this.$router.push("/");
            //     });
        },
    },
};
</script>
