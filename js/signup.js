function signup(e){
    event.preventDefault();
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
    localStorage.setItem(username,json)
    alert("Đăng ký thành công")
}
function login(e){
    event.preventDefault()
    var username = document.getElementById("un").value
    var password = document.getElementById("pw").value
    var user = localStorage.getItem(username)
    var data = JSON.parse(user)
    if(username==null){
        alert("Vui lòng không để trống bất kì ô nào")
    }
    else if(username == data.username && password == data.password){
        alert("Đăng nhập thành công")
        window.location.href="index.html"
    }
    else{
        alert("Đăng nhập thất bại")
    }


}