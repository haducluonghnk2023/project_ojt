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
                    localStorage.setItem("checkLogin", findUser.userId);
                    window.location.href = "../index.html";
                    //đăng nhập thành công 
                    // lưu checklogin để xác định user đăng nhập
                    // ông nào đang nhập thì luuw id ông đấy trên local 
                    // trong local phải có user và product
                }else{
                    alertError.style.display = "block";
                    alertError.innerHTML = "Tài khoản không đúng";
                }
        });