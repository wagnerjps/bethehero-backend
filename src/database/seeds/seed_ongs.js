
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ongs').del()
    .then(function () {
      // Inserts seed entries
      return knex('ongs').insert([
        {id: 1, colName: 'id'},
        {id: 2, colName: 'name'},
        {id: 3, colName: 'email'},
        {id: 4, colName: 'whatsapp'},
        {id: 5, colName: 'city'},
        {id: 6, colName: 'uf'}
      ]);
    });
};
