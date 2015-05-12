Template.viewItem.onCreated(function() {
  // set instance to the template instance
  var instance = this;

  // add subscriptions
  instance.autorun(function() {
    instance.subscribe('singleItem', Router.current().params.id);
  })

  // set the cursor
  instance.item = function() {
    // Note: this is returning a cursor -- could be set to return an object
    return Items.find({});
  }

});

Template.viewItem.helpers({
  item: function() {
    return Template.instance().item();
  }
});
