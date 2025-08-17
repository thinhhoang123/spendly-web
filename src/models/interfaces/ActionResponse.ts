export default interface ActionResponse<T extends object> {
  message: string;
  success: boolean;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
