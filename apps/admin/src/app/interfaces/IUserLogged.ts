export interface User {
    id?:       string;
    name:     string;
    email:    string;
    password?: string;
    // otros campos
}

export interface UserLogged {
    user: User;
    logged: Boolean;
    authToken: string;
    externalLogin?: {}; 
}

export interface UserLogin {
    email:    string;
    password: string;
}