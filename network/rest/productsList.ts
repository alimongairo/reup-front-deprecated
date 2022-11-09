import {makeRequest} from "@/network/instance";

export const getProductListRequest= () => {
    return makeRequest({
        url: '/products', // TODO
        method: 'GET',
    });
};