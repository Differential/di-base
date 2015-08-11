Meteor.startup(function() {
  var users = [
    {
      profile: {
        firstName: "Colin",
        lastName: "Flynn"
      },
      email:"colin@differential.com",
      password: 'colin'
    },

  ];

  if (Meteor.users.find().count() === 0) {
    console.log("Importing Users");
    _.each(users, function(user) {
      var id = Accounts.createUser(user);
    });
  }
});
