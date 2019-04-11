const db = require('../dbConfig');

module.exports = {
    get,
    insert,
    getById,
    update,
    remove
};

async function get(){
    return await db
            .select('id', 'name')
            .from('resources');
}

async function insert(resource){
    return await db('resources')
            .insert(resource)
            .then(res => {
                id: res[0].id
            });
}

async function getById(id){
    return await db
            .select('id', 'name')
            .from('resources')
            .where({ id })
            .first();
}

async function update(id, resource){
    return await db('resources')
        .where({ id })
        .update(resource);
}

async function remove(id){
    return await db('resources')
            .where({ id })
            .del();
}
