/* global hexo */

const pugRenderer = require("./lib/pug")

hexo.extend.renderer.register("pug", "html", pugRenderer, true)
