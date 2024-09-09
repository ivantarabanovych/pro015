const userProfile = {
    username: "Ivan",
    email: "ivantarabanovych@gmail.com",
    password: "password123",

    changePassword: function(newPassword){
        if(newPassword.length < 6){
            console.error("Пароль має містити не менше 6 символів");
            return;
        }

        const hasUpperCase = /[A-Z]/.test(newPassword);
        const hasNamber = /[0-9]/.test(newPassword);
        const hasSpecialChar = /[!@#$%^&*(),./?';']/.test(newPassword);

        if(!hasUpperCase){
            console.error("Пароль повинен містити хоча б одну велику літеру");
            return;
        }

        if(!hasNamber){
            console.error("Пароль повинен містити цифри");
            return;
        }

        if(!hasSpecialChar){
            console.error("Пароль повинен містити спеціальні символи");
            return;
        }

        this.password = newPassword;
        console.log("Пароль успішно змінений!");
    }
};

userProfile.changePassword("mewp");
userProfile.changePassword("password");
userProfile.changePassword("Password");
userProfile.changePassword("Password21");
userProfile.changePassword("Password.21");




