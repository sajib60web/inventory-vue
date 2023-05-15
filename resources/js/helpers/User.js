import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const username = res.data.name;
        if (Token.isValid(access_token)) {
            AppStorage.store(access_token, username);
        }
    }

    hasToken() {
        const storeToken = localStorage.getItem("token");
        if (storeToken) {
            return Token.isValid(storeToken) ? true : false;
        }
        return false;
    }

    isLoggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
    }

    id() {
        if (this.isLoggedIn) {
            const payload = Token.payload(localStorage.getItem("token"));
            return payload.sub;
        }
        return false;
    }
}

export default User = new User();
