 const jwt = require ("jsonwebtoken")

const authentication = (req, res, next) =>{

    try{
  const token = req.headers.authorization.split(" ")[1]
  // ^ جبنا التوكن وحولناه لنص
  const valid = jwt.verify(token,"ACC");
  // هنا قمنا بعملية التحقق للتوكن
  req.token = valid;
  next ();
  // بالنيكست  تعتبر فانكشن نعرض التوكن او البيانات
   
    } catch (error){
    res.status(403)
    res.json(error)
    }
}

module.exports = { authentication }
