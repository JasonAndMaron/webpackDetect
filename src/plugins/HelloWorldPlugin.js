class HelloWorldPlugin {
  constructor(options = {}) {
  }
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      console.log('Hello World! in my webpack!!!');
    });
  }
}

module.exports = HelloWorldPlugin;