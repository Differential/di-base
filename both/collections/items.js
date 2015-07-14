Items = new Mongo.Collection('items');

// Create Astronomy Schema
Item = Astronomy.createClass({
  name: 'Item',
  collection: Items,
  fields: {
    name: 'string',
    rating: 'number'
  },
  behaviors: ['timestamp']
});

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
  });

  Meteor.publish('singleItem', function(id) {
    return Items.find({_id: id});
  });

  // Allow and Deny rules
  Items.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  })
}
