//미들웨어 함수
const middle1=(req,res,next)=>{
    console.log("미들웨어 모듈");
    //다음 미들웨어 또는 라우트 핸들러로 제어를 전달달
    next();
};

module.exports=middle1;