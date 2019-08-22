exports.seed = function(knex, Promise) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { id: 1, name: 'Resource 1' },
        { id: 2, name: 'Resource 2' },
        { id: 3, name: 'Resource 3' },
        { id: 4, name: 'Resource 4' },
        { id: 5, name: 'Resource 5' },
        { id: 6, name: 'Resource 6' },
        { id: 7, name: 'Resource 7' },
        { id: 8, name: 'Resource 8' },
        { id: 9, name: 'Resource 9' },
        { id: 10, name: 'Resource 10' },
      ]);
    });
};