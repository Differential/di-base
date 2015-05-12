Items = new Mongo.Collection('items');

if (Meteor.isServer) {
  // Generate some dummy data
  Meteor.startup(function() {
    if (Items.find().count() === 0) {
      for (i = 0; i < 10; i++) {
        Items.insert({
          name: Fake.sentence(4),
          rating: _.random(1, 5)
        });

        console.log("dummy item data created");
      }
    }
  });

  // Publications for items
  Meteor.publish('items', function(limit) {
    return Items.find({}, {limit: limit});
  })

  Meteor.publish('singleItem', function(id) {
    return Items.find({_id: id});
  })


  // Methods for CRUD operations
  Meteor.methods({
    addItem: function(item) {
      Items.insert(item);
    },

    editItem: function(itemId, itemFields) {
      Items.update(itemId, {$set: itemFields})
    },

    deleteItem: function(itemId) {
      Items.remove(itemId);
    }
  });
}
