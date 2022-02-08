class ZoneService {
    constructor(knex) {
        this.knex = knex;
    }

    async getZone(location) {
        let zone = await this.knex
            .select("area")
            .from("zone")
            .leftJoin("users", "users_id", "users.id")
            .where("users.username", location)

        return zone;
    }
}
module.exports = ZoneService;
