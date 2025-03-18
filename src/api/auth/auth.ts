import { publicApi } from "./base";

const subPath = "auth";

const useAuthApi = () => {
    const configApi = publicApi(subPath);
    const POST_LOGIN = async (access_token : string) => {
        const res = await configApi.post("/staff/login", { access_token });
        return res.data;
    };
    return { POST_LOGIN };
};

export { useAuthApi };

