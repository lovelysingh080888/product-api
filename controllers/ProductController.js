
const Product = require('../models/ProductModel');

/**
 * 
 * Here product getting add. as we know rating give the customer on particular product
  and we store data related to rating and review in another table and then we find out the average rating of product
  but here is simple way, all data getting store in same table
 */
exports.addProduct = (req, res) => {
    
     const { productId, name, description, tagSpecial, rating, tagging } = req.body;

     const product = new Product({
         productId:productId,
         name:name,
         description:description,
         tagSpecial:tagSpecial,
         rating:rating,
         tagging:tagging
     });

     if(product.save()) {
        res.status(200).json({status:true,
        message: "Product added successfully"
        
        })
     }else {
        res.status(200).json({status:false,
        message: "Something went wrong"
            
        })
     }
}
/**
 * 
 * count tagspecial if tagspecial is true and find out the maximum rating of product
 */
exports.countOfTagSpecial = (req, res) => {
    console.log("ssdf")
         Product.aggregate([{ $project: { tagSpecial: 1}},
        { $count: tagSpecial, $max:rating }],function(err, result){
            if(err){
              res.status(200).json({status:false, message: "Something went wrong" })
            }else{
              res.status(200).json({status:true, message:"Okay", data: result})
            }
        })

        
}

/**
 * 
 * Updating tagging on particular product id
 */
exports.updateTagging = (req, res) => {

    const {productId, tagingYear} = req.body;

    Product.updateOne({productId: productId}, { $set: {"tagging.year": tagingYear} }, function(error,result){
     
      if(error){
        res.status(200).json({status:false, message: "Something went wrong" })
      }
      else{
        res.status(200).json({status:true, message: "Updated successfully"});
      }
    });
    
    

}

/**
 * 
 *  removing  taging field if tagging year greater than given year
 */
exports.removeTagging = (req, res) => {
    
    const {tagingYear} = req.body;

    Product.updateMany({"tagging.year": { $gt: tagingYear} },
    {$unset: {tagging:1}} , {multi: true}, function(error,result){
     
        if(error){
          res.status(200).json({status:false, message: "Something went wrong" })
        }
        else{
          res.status(200).json({status:true, message: "Tagging deleted successfully"});
        }
    });

  
}