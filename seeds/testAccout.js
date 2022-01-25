exports.seed = function (knex) {
    return knex('admin')
        .del()
        .then(() => {
            return knex('admin').del()
        })
        .then(() => {
            return knex('admin').insert([
                { username: 'test1', email: 'test1@test1.com', password: 'password1', admin: "admin", areaCode: 852, contactNo: 87654321, logo: 'test1', access: '' },
                { username: 'test2', email: 'test2@test2.com', password: 'password2', admin: "farmer", areaCode: 853, contactNo: 12345678, logo: 'test2', access: '[test1,test3]' },
                { username: 'test3', email: 'test3@test3.com', password: 'password3', admin: "client", areaCode: 852, contactNo: 56781234, logo: 'test3', access: '' },
            ]);
        })
};