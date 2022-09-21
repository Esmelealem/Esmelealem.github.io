class ExtededClock extends Clock {
  constructor(options) {

    super(options);
    let { precisionValue = 1000 } = options;
    this.precisionValue = precisionValue;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precisionValue);
  }
}
