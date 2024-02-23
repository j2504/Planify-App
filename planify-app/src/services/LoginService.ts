interface LoginData{
    username: string;
    password:string;
}

const LoginService = {
    signUp:async(userData: LoginData):Promise<boolean> =>{
        return new Promise((resolve) => {
            setTimeout(() => {
                //make api call 
                console.log('', userData);
                //authenticate user and resolve
                 const isValid = userData.username === 'example@example.com' && userData.password === 'password123';
                resolve(isValid);//resolve true for successful login, false otherwise
    },1000);
    });
    },  
};

export default LoginService;