Template.editItem.onCreated(function() {
  // set instance to the template instance
  var instance = this;

  // add subscriptions
  instance.autorun(function() {
    instance.subscribe('singleItem', Router.current().params.id);
  })

  // set the cursor
  instance.item = function() {
    return Items.findOne({});
  }

});

Template.editItem.helpers({
  item: function() {
    return Template.instance().item();
  }
});

Template.editItem.events({
  'click [data-action=editItem]': function (event, instance) {
    event.preventDefault();

    var itemId = Router.current().params.id

    var itemFields = {
      name: $('[name=name]').val(),
      rating: $('[name=rating]').val()
    }
    Meteor.call('editItem', itemId, itemFields);
    Router.go('/items');
  }
});
