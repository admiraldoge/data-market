const path = require("path");
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: @import "variables.scss";@import "mixins.scss";
    },
    env: {
        FRONT_END_URL: process.env.FRONT_END_URL,
        BACK_END_URL: process.env.BACK_END_URL,
        EDIT_MODE: process.env.EDIT_MODE
    }
}
