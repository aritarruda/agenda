import  Router  from "express";
const router = router();

router.get("/",function(req,res){
    res.status(200).send({
        title: "Hello world, Bem vindas a agenda",
        version: "1.0.0",
    });
});

export default router;