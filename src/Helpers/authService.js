export const USER = 'USER';

export const authService = {
    async login(data) {
        window.localStorage.setItem(USER, JSON.stringify(data));
        this.currentUser = data;
        if (this.callback) {
            this.callback(data)
        }
    },
    getCurrentUser() {
        return this.currentUser
    },
    logout() {
        delete this.currentUser;
        window.localStorage.clear();
        if (this.callback) {
            this.callback(undefined)
        }
    },
    subscribe(callback) {
        this.callback = callback;
        return () => this.callback = undefined
    },
};

try {
    authService.currentUser = JSON.parse(window.localStorage.getItem(USER))
} catch (e) {

}