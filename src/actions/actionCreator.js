export const action = (type, payload = {}) => {
    return { type, ...payload };
};

export const PENDING = "PENDING";
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const createRequestTypes = base => {
    return [PENDING, REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};
