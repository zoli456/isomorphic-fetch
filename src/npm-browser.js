window.global = window;

global.fetch = window.fetch;

module.exports = {
    Buffer: require("buffer").Buffer,
    Crypto: window.crypto
}