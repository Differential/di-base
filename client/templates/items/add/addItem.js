Template.addItem.events({
  'click [data-action=addCustomItem]': function (event, instance) {
    event.preventDefault();
    item = {
      name: $('[name=name]').val(),
      rating: $('[name=rating]').val()
    }
    Meteor.call('addItem', item);
    Router.go('/items');
  }
});
