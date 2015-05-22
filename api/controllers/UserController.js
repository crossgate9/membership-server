/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `UserController.index()`
   */
  index: function (req, res) {
    User.find({
      sort: 'end_date asc'
    }).exec(function (err, user){
        console.log(user);
        return res.view({list: user});
    });
    // console.log(user_list);
    // return res.view({list: user_list});
  },


  /**
   * `UserController.add()`
   */
  add: function (req, res) {

    User.create({
      name: req.param('name'),
      start_date: req.param('start_date'),
      end_date: req.param('end_date')
    }).exec(function (err, user){
      if(err){
          return res.json({
              success: false,
              message: 'error',
              data: {}
          });
      }
      console.log(user.id);
      return res.redirect('/user');
    });
  },


  /**
   * `UserController.gets()`
   */
  gets: function (req, res) {
  }
};

