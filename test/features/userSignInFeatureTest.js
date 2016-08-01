// process.env.NODE_ENV = 'test';
//
// var server = require('../../app');
// var Browser = require('zombie');
// var mongoose = require('mongoose');
// var User = mongoose.model('User');
// var expect = require('chai').expect;
// var browser;
//
//
// describe('User visits login page', function() {
//
//   beforeEach(function(done) {
//     server.listen(3001);
//     browser = new Browser({ site: "http://localhost:3001"});
//     browser.visit('/sessions/new', done);
//   });
//
//   afterEach(function(done) {
//     mongoose.connection.db.dropDatabase().then(function() {
//       server.close();
//     }).then(done, done);
//   });
//
//
//   describe("User cannot Sign in with the wrong password", function(){
//
//     beforeEach(function(done){
//       var newUser = new User({
//         username: "hello",
//         email: "hello@hello.com",
//         password: "fish"
//       });
//       newUser.save();
//
//
//       browser.fill('username', 'hello');
//       browser.fill('password', 'hello');
//       browser.pressButton('Sign In', done);
//     });
//
//
//
//     it('error of invalid password', function(){
//       expect(browser.text()).to.contain('Invalid password');
//     });
//   });
//
//
//   describe("User cannot Sign in", function(){
//
//     beforeEach(function(done){
//       var newUser = new User({
//         username: "test1",
//         email: "test1@test.com",
//         password: "test123"
//       });
//       newUser.save();
//
//       browser.fill('username', 'wrongusername')
//       .fill('password', 'test123')
//       .pressButton('Sign In', done);
//     });
//
//     it('throw error if email and password does not match', function(){
//       expect(browser.text()).to.contain('Unknown User');
//     });
//   });
// });
