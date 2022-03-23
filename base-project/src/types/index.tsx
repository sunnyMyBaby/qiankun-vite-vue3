import { AxiosResponse } from 'axios';

export interface NAV_TYPE {
  icon: string;
  menuId: number;
  name: string;
  open: null;
  orderNum: number;
  parentId: number;
  parentName: null;
  perms: string;
  type: number;
  url: string;
}

export interface NAV_LIST_TYPE extends NAV_TYPE {
  list: Array<NAV_TYPE> | null;
}

export interface HTTP_RESPONSE_TYPE extends AxiosResponse {
  code?: number;
  msg?: string | undefined;
  data: any;
}
