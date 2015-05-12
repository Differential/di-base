Router.route('/', {
  name: 'home'
});

Router.route('/items', {
  name: 'items'
});

Router.route('/items/add', {
  name: 'addItem'
});

Router.route('/items/:id', {
  name: 'viewItem'
});

Router.route('/items/:id/edit', {
  name: 'editItem'
})
