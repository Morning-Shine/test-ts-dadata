export interface IGetAddressResponse {
  suggestions: IAddressItem[];
}

export interface IGetAddressRequest {
  query: string;
  count?: number;
}

export interface IAddressItem {
  value: string;
  unrestricted_value: string;
  data: {};
}
