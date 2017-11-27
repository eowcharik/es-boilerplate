'use strict';
import {validator} from "./helpers";

let data = [];

 const addEntity = (entity) => {
     validator(entity);
     data.push(entity)
 };


const getEntities = () => data;

const getCount = () => data.length;

const  getEntityById = (id) => {
    if (typeof id !== 'number') {
        throw new Error ("id should be number")
    }
    const entity = data.filter(current => current.id ===id);

    const result = entity.length ? entity : null;

    return result;

};

const getFirstEntity = () => data[0];

const getLastEntity = () => data[data.length -1];

const filter = (item) => data.filter(item);


export {addEntity, getEntities, getCount, getEntityById, getFirstEntity, getLastEntity, filter} ;
