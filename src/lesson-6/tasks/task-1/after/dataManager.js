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


export const getEntityTotalviews = (Entityid, ...n) => {
    const obj= getEntityById(Entityid);

    if(n=undefined || n.length ==0){

        let result = 0; //= obj.social[0].views+obj.social[1].views+obj.social[2].views;
     obj.social.forEach((soc) => {
         result=result+soc.views;
         }
     );
     return result;
    }

    else if(n.length==1 && Array.isArray(n)){
        let  sum=0;
        //validator
if(typeof n[0] ==='string' && typeof n[1] ==='string' || typeof n[0] ==='number' && typeof n[1] ==='number'){
    throw new Error("not string and not number")
}else {

    if (typeof n[0] === 'string' && typeof n[1] === 'string') {
        obj.social.forEach((soc) => {
            if (soc === obj.social.title) {
                sum = sum + soc.views;
            }
        });
    }

    if (typeof n[0] === 'number' && typeof n[1] === 'number') {
        obj.social.forEach((soc) => {
            if (soc === obj.id) {
                sum = sum + soc.views;
            }
        });
    }


    return sum;
}
    }


    else if(n.length==2 && Array.isArray(n) && typeof n[1] === "function"){
    let total= n[2];
    let sum=0;
        obj.social.forEach((soc) => {
            sum = sum + soc.views;
            }
        );
        total(sum);
        return total;
    }

}



//sorted by pop reverse




function validator(obj) {
    if (typeof obj.firstName !=='string'){throw new  Error("not string")}
    if(typeof obj.lastName !=='string'){throw new Error("not string")}
    if(typeof obj.age !== 'number'){throw new Error("not num")}
    if (obj.sex !=='male' && obj.sex !== 'female'){throw new Error("incorrect sex")}
    if(typeof  obj.id !== 'number'){throw new Error("not num")}
}

