const Model = require('./model');
const ViewModel = require('./viewmodel');

const data = { message: 'Hello, world!' };
const model = new Model(data);
const viewModel = new ViewModel(model);

viewModel.init();
knockout.applyBindings(viewModel);