import { axiosInstance as axios } from './axios';

interface ApiResponse {
    success: boolean;
    response?: any;
}

export interface topBarConfigType {
    heading: string,
    button_text: string,
    Step: number,
}
export interface emptyUIConfig {
    heading: string,
    description: string,
    type: string
    button_text: string
    image: string
}

const apiRequest = async (url: string, values: any): Promise<ApiResponse> => {
    let data = JSON.stringify(values);
    let response;
    try {
        if (values === null) {
            response = await axios.get(url);
        } else {
            response = await axios.post(url, data);
        }
        return { success: true, response };
    } catch (error) {
        console.error(`API Request Error for ${url}:`, error);
        return { success: false };
    }
};

export const login = async (values: any): Promise<ApiResponse> => {
    return apiRequest('/login', values);
};

export const signUp = async (values: any): Promise<ApiResponse> => {
    return apiRequest('/signup', values);
};

export const accountVerify = async (values: any): Promise<ApiResponse> => {
    return apiRequest('/verify_code', values);
};

export const getAllModels = async (): Promise<ApiResponse> => {
    return apiRequest('/models', null);
};

export const getAllConnectors = async (): Promise<ApiResponse> => {
    return apiRequest('/connectors', null);
};
