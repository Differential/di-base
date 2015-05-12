Template.items.onCreated(function() {
  // set instance to the template instance
  var instance = this;

  // add subscriptions
  instance.autorun(function() {
    instance.subscribe('items');
  })

  // set the cursor
  instance.items = function() {
    return Items.find({});
  }

});

Template.items.helpers({
  items: function() {
    return Template.instance().items();
  }
});

Template.items.events({
  'click [data-action=addItem]': function (event, instance) {
    event.preventDefault();
    var item = {
      name: Fake.sentence(5),
      rating: _.random(1,5)
    }
    Meteor.call('addItem', item);
  },

  'click [data-action=deleteItem]': function (event, instance) {
    event.preventDefault();
    Meteor.call('deleteItem', this._id);
  }
});
