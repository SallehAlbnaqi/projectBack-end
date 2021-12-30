const foodModel = require ("../../db/models/foodModel")
// ^ استدعينا الفود موديل عشان نقدر نضيف نحذف


const getFood = async (req,res)=>{
 try{
const foods = await foodModel.find({})
res.status(200).json(foods);
 } catch (error){
     res.send("error")
 }
}
const postFood = async (req,res)=>{
  let { newName, newDescription, newImg } = req.body;
//   ^ البودي هذا جانا من الفرونت اند عشان يطلب البيانات  اللي فوق 
  const user = req.token.userId
//   console.log({ name: newName, description: newDescription, img: newImg, user});
  const newFood = new foodModel({ name:newName,description:newDescription,img:newImg })
    try{
        const saveFood = await newFood.save()
        // سوينا حفظ للنيو فود بالداتا بيس
        // const foods = await foodModel.find({user: user}).populate("user");
        res.status(201).json(saveFood);
        // هنا استجبنا للطلب اللي جاناوارسلناه ..
    } catch (error){
        res.send("error")
    }
}

const putFood = async (req,res)=>{
    const id = req.params.id;
    let {name, discription} = req.body;
    try{
      const foodUpb = await foodModel.findOneAndUpdate({_id: id, name: name, discription: discription});
      res.status(201).json(foodUpb);
    } catch (err){
       res.send(err) 
    }
}

const deleteFood = async (req,res)=>{
    const id = req.params.id;
    // ^ هنا نحذف عن طريق الايدي
    const user = req.token.userId
    try{
        const dele = await foodModel.findOneAndDelete({_id: id , user: user});
                // ^ يبحث عن شي واحد ويحذفه اللي هو عن طريق ايدي
        res.status(201).json(dele);
    } catch (error){
        res.send("error")
    }
}

module.exports = { getFood, postFood, deleteFood, putFood }