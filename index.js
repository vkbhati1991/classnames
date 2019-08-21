
function cs() {

    let classes = [];

    if (arguments && arguments.length <= 0) {
        return "";
    }

    for (let i = 0; i < arguments.length; i++) {

        const arg = arguments[i];
        const argType = typeof arg;

        if (argType === "string" || argType === "number") {
            classes = classes.concat(arg);;
        } else if (Array.isArray(arg) && arg.length) {
            classes = classes.concat(arg);
        } else if (argType === "object") {
            const objArry = Object.keys(arg).filter(k => arg[k] === true);
            classes = classes.concat(objArry);
        }
    }

    return classes.join(' ');

}

export default cs;