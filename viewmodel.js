const knockout = require('knockout');
// const knockout = require('./knockout');

class ViewModel {
  constructor(model) {
    this.model = model;
    this.message = knockout.observable('');
  }

  init() {
    const data = this.model.getData();
    this.message(data.message);
  }
}

module.exports = ViewModel;