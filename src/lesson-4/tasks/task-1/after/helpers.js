'use strict';

export function validator (obj) {
    if (typeof obj.firstName !== 'string') {
        throw new Error ("Fuck you! It's not firstName");
    }
    if (typeof obj.lastName !== 'string') {
        throw new Error ("Fuck you! It's not lastName");
    }
    if (typeof obj.age !== 'number') {
        throw new Error ("Fuck you! It's not age");
    }
    if (typeof obj.sex !== 'string' && (obj.sex !== 'Male' || obj.sex !== "Female")) {
        throw new Error ("Fuck you! It's not sex");
    }
    if (typeof obj.id !== 'number') {
        throw new Error ("Fuck you! It's not id");
    }

}
