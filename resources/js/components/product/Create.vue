<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="page-title">Create Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="card-block">
                        <h6 class="card-title text-bold">Create Product</h6>
                        <hr />
                    </div>
                    <form
                        @submit.prevent="productCreate"
                        enctype="multipart/form-data"
                    >
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Product Name</label>
                                    <input
                                        type="text"
                                        v-model="formData.product_name"
                                        class="form-control"
                                        placeholder="Enter Your Product Name"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.product_name"
                                    >
                                        {{ errors.product_name[0] }}</small
                                    >
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Product Code</label>
                                    <input
                                        type="text"
                                        v-model="formData.product_code"
                                        class="form-control"
                                        placeholder="Enter Your Product Code"
                                    />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Product Category</label>
                                    <select
                                        class="form-control"
                                        v-model="formData.category_id"
                                    >
                                        <option value="">
                                            Select Product Category
                                        </option>
                                        <option
                                            :value="category.id"
                                            v-for="category in categories"
                                        >
                                            {{ category.category_name }}
                                        </option>
                                    </select>
                                    <small
                                        class="text-danger"
                                        v-if="errors.category_id"
                                    >
                                        {{ errors.category_id[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Product Supplier</label>
                                    <select
                                        class="form-control"
                                        v-model="formData.supplier_id"
                                    >
                                        <option value="">
                                            Select Product Supplier
                                        </option>
                                        <option
                                            :value="supplier.id"
                                            v-for="supplier in suppliers"
                                        >
                                            {{ supplier.name }}
                                        </option>
                                    </select>
                                    <small
                                        class="text-danger"
                                        v-if="errors.supplier_id"
                                    >
                                        {{ errors.supplier_id[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Product Root</label>
                                    <input
                                        type="text"
                                        v-model="formData.root"
                                        class="form-control"
                                        placeholder="Enter Your Product Root"
                                    />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Buying Price</label>
                                    <input
                                        type="text"
                                        v-model="formData.buying_price"
                                        class="form-control"
                                        placeholder="Enter Your Buying Price"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.buying_price"
                                    >
                                        {{ errors.buying_price[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Selling Price</label>
                                    <input
                                        type="text"
                                        v-model="formData.selling_price"
                                        class="form-control"
                                        placeholder="Enter Your Selling Price"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.selling_price"
                                    >
                                        {{ errors.selling_price[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Product Quantity</label>
                                    <input
                                        type="number"
                                        v-model="formData.product_quantity"
                                        class="form-control"
                                        placeholder="Enter Your Product Quantity"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.product_quantity"
                                    >
                                        {{ errors.product_quantity[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Buying Date</label>
                                    <input
                                        type="date"
                                        v-model="formData.buying_date"
                                        class="form-control"
                                    />
                                    <small
                                        class="text-danger"
                                        v-if="errors.buying_date"
                                    >
                                        {{ errors.buying_date[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                            <label>Image</label>
                                            <input
                                                type="file"
                                                @change="onFileSelected"
                                                class="form-control-file"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-sm-4 text-center">
                                        <img
                                            :src="formData.image"
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
                product_name: "",
                product_code: "",
                category_id: "",
                supplier_id: "",
                root: "",
                buying_price: "",
                selling_price: "",
                product_quantity: "",
                buying_date: "",
                image: "",
            },
            errors: {},
            categories: {},
            suppliers: {},
        };
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push("/");
        }
        axios
            .get("/api/auth/categories")
            .then(({ data }) => (this.categories = data));
        axios
            .get("/api/auth/suppliers")
            .then(({ data }) => (this.suppliers = data));
    },
    methods: {
        productCreate() {
            axios
                .post("/api/auth/products", this.formData)
                .then((response) => {
                    Toast.fire({
                        icon: "success",
                        title: "Product created successfully",
                    });
                    this.$router.push("/products");
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
                    this.formData.image = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
    },
};
</script>
