const express=require("express");
const router = express.Router();


//게시글 데이터
let boardList=[];
let numOfBoard=1;

//게시글 API
router.get("/",(req,res)=>{
    res.send(boardList);
});
router.post("/",(req,res)=>{
    const board={
        "id":numOfBoard++,
        "user_id":req.body.user_id,
        "date":req.body.date,
        "title":req.body.title,
        "content":req.body.content
    };
    boardList.push(board);
});

router.delete("/:id",(req,res)=>{
    //req.params.id 값 리스트 삭제
    const findItem=boardList.find((item)=>{
        return item.id==req.params.id
    });
    const idx=boardList.indexOf(findItem);//배열요소에 몇번째 있는지
    boardList.splice(idx,1);

    res.send("글이 삭제되었습니다.");
});
router.put("/:id",(req,res)=>{
    //req.params.id 값 리스트 업데이트
    const findItem=boardList.find((item)=>{
        return item.id==req.params.id
    });
    const idx=boardList.indexOf(findItem);//배열요소에 몇번째 있는지
    boardList.splice(idx,1);
    const board={
        "id": req.numOfBoard.id,
        "user_id":req.body.user_id,
        "date":req.body.date,
        "title":req.body.title,
        "content":req.body.content
    };
    boardList.push(board);
    res.send("글이 업데이트되었습니다.");
});

module.exports=router;