class ClientNameService {
    constructor(knex) {
        this.knex = knex;
    }

    async getClientName(id) {
        let ClientName = await this.knex
            .select("username")
            .from("users")
            .innerJoin("farmer_info", "client_id", "users.id")
            .where("farmer_id", id)
        return ClientName;
    }
}
module.exports = ClientNameService;
