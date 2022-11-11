function signup(){
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var phone = document.getElementById("phonenumber").value
    var dayofbirth= document.getElementById("dayofbirth").value
    var address = document.getElementById("address").value
    var user ={
        username: username,
        email: email,
        password: password,
        phone:phone,
        dayofbirth:dayofbirth,
        address:address,
    }
    var json = JSON.stringify(user)
    if(!username || !email || !password || !phone || !dayofbirth || !address ){
        alert("Không được để trống bất kì ô nào")
    }
    else{
        alert("Đăng ký thành công")
        localStorage.setItem(username,json)
    }
}
function login(){
    var username = document.getElementById("un").value
    var password = document.getElementById("pw").value
    var user = JSON.parse(localStorage.getItem(username))
    if(!username || !password){
        alert("Không được để trống bất kì ô nào")
    }
    if(user ==null){
        alert("Sai tên đăng nhập mật khẩu")
    }else {
        if (user.password != password){
            alert("Mật khẩu không chính xác")
        }else {
            alert("Đăng nhập thành công")
            window.location.href="index.html"
            // document.getElementById("member-name").innerHTML=username
        }
    }  
}