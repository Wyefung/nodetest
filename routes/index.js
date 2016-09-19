
/*
 * GET home page.
 */
var mongoose =require('mongoose'); // 导入组件
var models = require('./models'); // 导入自定义组件
var User = models.User ; //使用User模型，对应的users表
mongoose.connect('mongodb://localhost/mldndb') ; //连接数据库

exports.index = function(req, res){
  res.render('index', { title: '我的第一个node.js' });
};

exports.login = function(req, res){
  res.render('login', { title: '用户登录' });
};

exports.doLogin = function(req, res){ //处理doLogin
  var query_doc = {userid:req.body.userid,password:req.body.password};
  User.count(query_doc,function(err,doc){
    if(doc == 0 ){
      res.redirect("/login");
    }else{
      res.redirect("/welcome?uid="+req.body.userid);
    }
  })
};

exports.logout = function(req, res){
  res.render('login', { title: '用户注销' });
};

exports.welcome = function(req, res){
  var user = {
    userid : req.query.uid
  }
  res.render('welcome', { title: '程序首页' ,user:user });
};
