'use strict';

    const getInfo = ({arr0 = [], arr1 = [], arr2 = []}) => {
        const array = [...arr0, ...arr1, ...arr2];

            return {
                length: array.length,
                max: Math.max(...array),
                min: Math.min(...array)
        };
    };

export {getInfo};
