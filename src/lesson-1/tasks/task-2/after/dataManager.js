let entities= [];


export  function addEntity(entity){
    entities.push(entity)
}

export  function getEntities (){ return entities; }

export  function getCount(){ return entities.length; }

export  function getEntityById (id){
    // return   entities.id === id;
    return entities.filter((itm) =>{
        return itm.id === id;
    })[0];
}

export  function getFirstEntity (){return entities[0]; }

export  function getLastEntity (){return entities[(entities.count-1)];}

