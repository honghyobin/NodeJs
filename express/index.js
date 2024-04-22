const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();

app.use(cookieParser()); //등록
/*
//("키","값",{속성})
app.get('/',(req,res)=>{
    res.cookie("cookie", "chickchock",{
        maxAge: 30000
    });
    res.send("<h1>홈입니다.</h1>");
});

app.get("/cookie",(req,res)=>{
    const c1=req.cookies.cookie;
    console.log(c1);
    res.send(`<h1>쿠키페이지입니다.</h2>${c1}`)
});

app.get("/clear", (req,res)=>{
    res.clearCookie("cookie");
    res.send(`<h1>쿠키가 삭제되었습니다.</h1>`)
})
*/

/*쿠키키 name, 쿠키 값 홍효빈
/:홈입니다.
쿠키값이 있으면 => 홍효빈입니다
없으면 => 로그인되지 않았습니다

/login:쿠키 키값 이름으로 설정
/logout:쿠키 값 제거*/

app.get('/',(req,res)=>{
    res.cookie("name", "홍효빈",{
        maxAge: 30000
    });
    res.send("<h1>홈입니다.</h1>");
});
app.get("/login",(req,res)=>{
    res.send(`<h1>홍효빈입니다.</h2>`)
});

app.get("/logout", (req,res)=>{
    res.clearCookie("홍효빈");
    res.send(`<h1>로그인되지 않았습니다.</h1>`)
})
app.listen(3000);