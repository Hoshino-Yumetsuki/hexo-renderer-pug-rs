# hexo-renderer-pug-rs

Add support for [Pug].

## Install

```bash
$ npm install hexo-renderer-pug-rs --save
```

## Config

PugJS [options](https://pugjs.org/api/reference.html#options) are supported. These are the options passed into [compile()](https://pugjs.org/api/reference.html#pugcompilesource-options).

Create a `pug.config.js` in your project root:

```js
module.exports = {
  compile: {
    // Passed to compile().
    basedir: process.cwd()
    // ...Other options.
  }
  // No other methods are supported for now.
}
```

[Pug]: http://pugjs.org/
