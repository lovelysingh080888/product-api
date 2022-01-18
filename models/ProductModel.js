
const DB = require("./Config");

const docSchema  = ({
    productId:{type: String},
    name:{type:String,require:true},
    description:{type:String},
    tagSpecial:{type:Boolean},
    rating:{type:Number},
    tagging:{type:Object},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
    deleted_at:{type:Date,default:null}
  });

  const Product = DB.model("Product",docSchema);
  Product.once("index",err => (err ? console.log("some error generated in model creating : ", err) : ''));

  module.exports = Product;