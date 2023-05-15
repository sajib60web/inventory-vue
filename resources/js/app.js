require("./bootstrap");

window.Vue = require("vue");
import router from "./router";

// Import user class
import User from "./helpers/User";
window.User = User;

// Import user class
import Notification from "./helpers/Notifications";
window.Notification = Notification;

// Sweet alert start
import Swal from "sweetalert2";
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});
window.Toast = Toast;

const app = new Vue({
    el: "#app",
    router,
});
