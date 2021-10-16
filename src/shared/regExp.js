export const idCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]{5,12}$/;
    // 대문자 포함
    return regExp.test(id);
};

export const nickCheck = (nick) => {
    let regExp = /^[0-9a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,10}$/;
    return regExp.test(nick);
};

export const pwCheck = (pw) => {
    let regExp = /^[0-9a-zA-Z]{8,16}$/;
    // 대문자 포함
    return regExp.test(pw);
};
