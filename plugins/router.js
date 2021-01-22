export default ({ store, redirect, app }) => {
    app.router.beforeEach(async (to, from, next) => {
        if (to.matched.length === 0) {
            return
        }
        next()
        // if (to.path === '/login') {
        //     next()
        //     var tokenStr = window.sessionStorage.getItem('token') 
        // }
        // if (!tokenStr) {
        // next()
        // } else {
        // next('/login')
        // }
    })
}