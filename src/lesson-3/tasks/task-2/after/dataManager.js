var entities= [];


export var addEntity = entity => {
    validator(entity);
    entities.push(entity);
}
export const getEntity = entity => entity;

export const getEntities = entities =>entities;

export const getCount = entities => {
    if(entities!==undefined){
        return entities.length
    }
    return null
};

export const getFirstEntity = entities =>{
    if(entities!==undefined){
        return entities[0]
    }
    return null
};


export  const getLastEntity =entities=> {
    if(entities!==undefined){
        return entities[(entities.length-1)];}
return null
}


export  const getEntityById= id=> {
    return entities.filter((itm) =>{
        return itm.id === id;
    })[0];
}

export const filter = filterFunction => {
    if (typeof filterFunction !== 'function') {
        throw new Error('filterFunction !== function')
    }
    let res = entities.filter(obj => filterFunction(obj));
    return res
}


function validator(obj) {
    if(typeof  obj.id !== 'number'){throw new Error("not num")}
    if (typeof obj.firstName !=='string'){throw new  Error("not string")}
    if(typeof obj.lastName !=='string'){throw new Error("not string")}
    if(typeof obj.age !== 'number'){throw new Error("not num")}
    if (obj.sex !=='male' && obj.sex !== 'female'){throw new Error("incorrect sex")}
}
