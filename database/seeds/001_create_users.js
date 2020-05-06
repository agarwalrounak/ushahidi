exports.seed = function(knex) {
    // Deletes ALL existing entries in users table
    return knex('users')
        .del()
        .then(() => {
            // Inserts seed entries into users
            return knex('users').insert([
                {
                    id: '1',
                    email: 'rounak@email.com',
                    password: 'rounak217'
                },
                {
                    id: '2',
                    email: 'hemant@email.com',
                    password: 'hemant123'
                },
                {
                    id: '3',
                    email: 'aryan@email.com',
                    password: 'aryan123'
                }
            ]);
        });
};
