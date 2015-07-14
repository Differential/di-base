Template.addItem.events({
  'click [data-action=addCustomItem]': function (event, instance) {
    event.preventDefault();

    var item = new Item();
    item.set({
      'name': $('[name=name]').val(),
      'rating': $('[name=rating]').val()
    });

    item.save();

    Router.go('/items');
  }
});
