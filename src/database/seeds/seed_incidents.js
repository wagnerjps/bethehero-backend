exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('incidents').del()
      .then(function () {
        // Inserts seed entries
        return knex('incidents').insert([
          {id: 1, colName: 'title'},
          {id: 2, colName: 'description'},
          {id: 3, colName: 'value'},
          {id: 4, colName: 'ong_id'}
        ]);
      });
  };
  