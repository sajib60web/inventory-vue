require("./bootstrap");

window.Vue = require("vue");
import router from "./router";

// Import User Class
import User from "./helpers/User";
window.User = User;

// Import Notification Class
import Notification from "./helpers/Notifications";
window.Notification = Notification;

// Sweet Alert start
import Swal from "sweetalert2";
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

window.Toast = Toast;
// Sweet Alert End

window.Reload = new Vue();

const app = new Vue({
    el: "#app",
    router,
});
