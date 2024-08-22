export enum DocumentTypes {
    CC = "Cédula de ciudadanía",
    CE = "Cédula de extranjería",
    NIT = "Número de identificación tributario",
    PP = "Pasaporte"
}

type DocumentType="CC"|"CE"|"NIT"|"PP";

interface IUbication {
    country: string;
    state: string;
    city: string;
    zipCode?: string;
    address: string;
}

interface IDocumentation {
    documentType: DocumentType;
    documentNumber: string;
}

interface IName{
    firstName:string;
    lastName: string;
}

export interface IUser {
    name: IName;
    birthday: string;
    email: string;
    password:string;
    ubication: IUbication;
    phone?: string;
    document: IDocumentation;
}