let formLogin = document.getElementById("formLogin");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let alertError = document.getElementById("alertError");
    

        formLogin.addEventListener("submit",function(e){
            e.preventDefault();
            // validate dữ liệu đầu vào
            const userLocal = JSON.parse(localStorage.getItem("users")) || [];
            // tìm kiếm email và mật khẩu mà người dùng nhập vào có tồn tại trên local không
            const findUser = userLocal.find(newUser => newUser.email === email.value && newUser.password === password.value);
                if(findUser){
                    localStorage.setItem("user",JSON.stringify(findUser));
                    window.location.href = "../index.html";
                }else{
                    alertError.style.display = "block";
                    alertError.innerHTML = "Email hoặc mật khẩu không đúng";
                }
        });