export interface IUserToBeRegister {
  fullName: string;
  email: string;
  password: string;
}
export interface IUpdatePassword {
  password: string;
  newPassword: string;
}
export interface IUserResponseData {
  fullName: string;
  email: string;
  password: string;
}

export interface IUserResponseMeta {
  status: number;
  message: string;
  response: string;
}
export interface IUserResponseToBeRegister {
  data: IUserResponseData;
  meta: IUserResponseMeta;
}

export interface IOtpResponseData {
  fullName: string;
  email: string;
  _id: string;
}

export interface IOtpResponseMeta {
  status: number;
  message: string;
  response: string;
}

export interface IEmailOtpVerify {
  data: IOtpResponseData;
  meta: IOtpResponseMeta;
}

export enum RoleType {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  PROVIDER = 'PROVIDER',
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

export enum InputType {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Number = 'number',
}

export interface ISelectOption {
  value: string;
  label: string;
}

export enum IThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ButtonVariant {
  Success = 'success',
  successLight = 'success-light',
  Light = 'light',
}
export interface IResendOtpMeta {
  status: number;
  message: string;
  response: string;
}
export interface IResendOtpResponse {
  data: string;
  meta: IResendOtpMeta;
}

export interface User {
  _id: string;
  email: string;
  medicalSpecialty: string;
  countryOfPractice: string;
  professionalHealthCareProvider: boolean;
  agreeToTermsAndDataProtection: boolean;
}

export interface ICard {
  _id?: string;
  cardNumber?: string;
  expiryDate?: string | Date;
  cardName?: string;
  country?: string;
  cardType?: string;
  userId?: string;
  isSelected?: boolean;
  isActive?: boolean;
}

export interface IUser {
  imgUrl: string;
  fullName: string;
  email: string;
  country: string;
  state: string;
}
export interface IUserSignIn {
  email: string;
  password: string;
}

export interface ISignInResponseData {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface ISignResponseMeta {
  status: number;
  message: string;
  response: string;
}

export interface ISignInResponse {
  data: ISignInResponseData;
  meta: ISignResponseMeta;
}

export interface IResetPasswordResponseData {
  fullName: string;
  email: string;
}

export interface IResetPasswordResponseMeta {
  status: number;
  message: string;
  response: string;
}

export interface IResetPasswordResponse {
  data: ISignInResponseData;
  meta: ISignResponseMeta;
}

export interface ICommonResponse {
  meta: { status: number; response: string; message: string };
}

export interface IUpdatePasswordResponse extends ICommonResponse {
  data: IUser;
}
export interface IUserResponse extends ICommonResponse {
  data: IUser;
}
export interface ICardResponse extends ICommonResponse {
  data: ICard;
}
export interface ICardsResponse extends ICommonResponse {
  data: ICard[];
}

export interface ValidationConfig<T> {
  validate: (value: T) => boolean;
  errorMessage: string;
}
export interface ValidationFields {
  cardNumber: ValidationConfig<string>;
  expiry: ValidationConfig<string>;
  cvc: ValidationConfig<string>;
  terms: ValidationConfig<boolean>;
}

export interface ICardSlice {
  cards: ICard[];
  cardInfo: ICard;
}
