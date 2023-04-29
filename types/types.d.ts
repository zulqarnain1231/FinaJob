declare module "react-modern-drawer";
declare module "react-image-gallery";
declare module "md5"

export interface sellerMapTypes {
  weekly: boolean;
  monthly: boolean;
  yearly: boolean;
}
export interface dialogFilterTypes {
  easyApply: boolean;
  partTime: boolean;
  fullTime: boolean;
  noExperience: boolean;
  imediateStart: boolean;
  french: boolean;
  italian: boolean;
  english: boolean;
  spanish: boolean;
  german: boolean;
}
export interface filterTypes {
  filterDialog: boolean;
  noExperience: boolean;
  partTime: boolean;
  fullTime: boolean;
}


export interface ISignUpInputs {
  role: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword?: string;
}

export interface ILoginInputs{
  Email: string;
  Password: string;
}