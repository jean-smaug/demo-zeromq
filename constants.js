module.exports = {
    port: 9000,
    get address() {
        return `tcp://127.0.0.1:${this.port}`
    }
}
