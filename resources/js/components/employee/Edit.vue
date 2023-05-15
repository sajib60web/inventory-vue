<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Edit Employee</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">Edit Employee</h6>
                        <hr />
                    </div>
                    <form
                        @submit.prevent="employeeUpdate"
                        enctype="multipart/form-data"
                    >
                        <div class="row">
                            <div class="col-sm-6">
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
                                        {{ errors.name[0] }}</small
                                    >
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        v-model="formData.email"
                                        class="form-control"
                                        placeholder="Email Address"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.email"
                                    >
                                        {{ errors.email[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        v-model="formData.phone_number"
                                        class="form-control"
                                        placeholder="Phone Number"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.phone_number"
                                    >
                                        {{ errors.phone_number[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        v-model="formData.address"
                                        class="form-control"
                                        placeholder="Address"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.address"
                                    >
                                        {{ errors.address[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>NID Number</label>
                                    <input
                                        type="text"
                                        v-model="formData.nid_number"
                                        class="form-control"
                                        placeholder="NID Number"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.nid_number"
                                    >
                                        {{ errors.nid_number[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Salary</label>
                                    <input
                                        type="number"
                                        v-model="formData.salary"
                                        class="form-control"
                                        placeholder="Salary"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.salary"
                                    >
                                        {{ errors.salary[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Position</label>
                                    <input
                                        type="text"
                                        v-model="formData.position"
                                        class="form-control"
                                        placeholder="Position"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.position"
                                    >
                                        {{ errors.position[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Joining Date</label>
                                    <input
                                        type="date"
                                        v-model="formData.joining_date"
                                        class="form-control"
                                        placeholder="YYY-MM-dd"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.joining_date"
                                    >
                                        {{ errors.joining_date[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                            <label>Photo</label>
                                            <input
                                                type="file"
                                                @change="onFileSelected"
                                                class="form-control-file"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-sm-4 text-center">
                                        <img
                                            :src="updateImage()"
                                            style="
                                                height: 70px;
                                                width: 70px;
                                                border: 1px solid #ddd;
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary">
                                Update
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
                name: "",
                email: "",
                phone_number: "",
                address: "",
                nid_number: "",
                salary: "",
                position: "",
                joining_date: "",
                photo: "",
                new_photo: "",
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
            .get("/api/auth/employees/" + id)
            .then((response) => {
                this.formData = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        employeeUpdate() {
            let id = this.$route.params.id;
            axios
                .patch("/api/auth/employees/" + id, this.formData)
                .then((response) => {
                    Toast.fire({
                        icon: "success",
                        title: "Employee updated successfully",
                    });
                    this.$router.push("/employees");
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

        onFileSelected(event) {
            let file = event.target.files[0];
            if (file.size > 1048770) {
                Notification.image_validation();
            } else {
                let reader = new FileReader();
                reader.onload = (event) => {
                    this.formData.photo = event.target.result;
                    this.formData.new_photo = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        updateImage() {
            let img = this.formData.photo;
            if (img.length > 100) {
                return this.formData.photo;
            } else {
                return `/${this.formData.photo}`;
            }
        },
    },
};
</script>
