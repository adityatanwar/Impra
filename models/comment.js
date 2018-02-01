var mongoose=require('mongoose');
var promise = mongoose.connect('mongodb://localhost/projectfinal', {
    useMongoClient: true});
var commentSchema=new mongoose.Schema({
    text:String,
    author:String,
    authorid:String
});
var Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;