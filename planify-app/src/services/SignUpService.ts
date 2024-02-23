interface SignUpData{
    firstName: string;
    lastName: string;
    username: string;
    password:string;
    phoneNumber:string;
    email:string;
}

const SignUpService = {
    signUp:async(userData: SignUpData):Promise<boolean> =>{
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('', userData);
                resolve(true);
    },1000);
    });
    },  
};

export default SignUpService;