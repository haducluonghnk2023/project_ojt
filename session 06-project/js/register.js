
let formRegister = document.getElementById('formRegister');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
// ***************************************************************
let lastNameError = document.getElementById("firstNameError");
let firstNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

const user = JSON.parse(localStorage.getItem("users")) || [];
console.log(user);

function validateEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validate(){
        if(firstName.value === ""){
            firstNameError.style.display="block";
        } else if(firstName.value !== ""){
            firstNameError.style.display="none";
        }
        if(lastName.value === ""){
            lastNameError.style.display="block";
        } else if(lastName.value !== ""){
            lastNameError.style.display="none";
        }

        if(email.value === ""){
            emailError.style.display="block";
        }else if(!validateEmail(email.value)){
                emailError.style.display = "block";
                emailError.innerHTML = "Email không đúng định dạng";
        }else emailError.style.display="none";
        if(password.value === ""){
            passwordError.style.display="block";
        }else {
            passwordError.style.display="none";
        }
    }

formRegister.addEventListener("submit", function(e) {
    // Ngăn chặn sự kiện mặc định của form
    e.preventDefault();

    // Lấy giá trị từ các trường input
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;

    // Kiểm tra định dạng email
    if (!isValidEmail(emailValue)) {
        emailError.style.display="block";
        return; // Dừng lại nếu email không hợp lệ
    }
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === emailValue);
    if (existingUser) {
        alert("Email đã được đăng kí"); 
        return; // Dừng lại nếu email đã tồn tại
    }

    // Kiểm tra các trường có được điền đầy đủ hay không
    if (firstNameValue && lastNameValue && emailValue && passwordValue) {
        // Tạo đối tượng newUser từ dữ liệu nhập vào
        const newUser = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue,
            password: passwordValue,
            cart:[],
            userId: Math.floor(Math.random() * 100000000),
        };
        
        // Lưu thông tin người dùng vào localStorage
        user.push(newUser);
        localStorage.setItem("users", JSON.stringify(user));
        
        // Chuyển hướng đến trang đăng nhập
        window.location.href = "login.html";
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
});

// Hàm kiểm tra định dạng email
function isValidEmail(email) {
    // Sử dụng biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

