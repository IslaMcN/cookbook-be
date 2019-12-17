const db = firebase.database();

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find(){
    return db('recipes').select('')
}