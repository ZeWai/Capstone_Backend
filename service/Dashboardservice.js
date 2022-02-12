class DashboardService {
    constructor(knex) {
        this.knex = knex;
    }

    async client(userId) {
        let user = await this.knex("user_info")
            .select("*")
            .where({ users_id: userId });
        if (user.length == 0) {
            let err = "User does not exist!";
            return err;
        } else {
            return user;
        }
    }


    async count(id) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = `${yyyy}-${mm}-${dd}T16:00:00.000Z`;

        return await this.knex("crop")
            .join("zone_crop", "crop.id", 'zone_crop.crop_id')
            .join("zone", "crop.zone_id", "zone.id")
            .select("name")
            .where("zone.users_id", id)
            .andWhere("sowing", true)
            .andWhere("harvest", false)
            .andWhere("zone_crop.harvest_date", today)
            .then((info) => {
                if (info.length > 0) {
                    return info.length;
                } else {
                    throw new Error("not existing");
                }
            })
    }

    async count2(id) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = `${yyyy}-${mm}-${dd}T16:00:00.000Z`;
        return await this.knex("crop")
            .select("name","harvest_date")
            .join("zone_crop", "crop.id", 'zone_crop.crop_id')
            .join("zone", "crop.zone_id", "zone.id")
            .where("zone.users_id", id)
            .andWhere("sowing", true)
            .andWhere("harvest", false)
            .andWhere("harvest_date",">",today)
            .then((info) => {                
                if (info.length > 0) {
                    return info.length;
                } else {
                    throw new Error("not existing");
                }
            })
    }

    async count3(id) {
        return await this.knex("crop")
            .select("name")
            .join("zone_crop", "crop.id", 'zone_crop.crop_id')
            .join("zone", "crop.zone_id", "zone.id")
            .where("zone.users_id", id)
            .andWhere("sowing", false)
            .then((info) => {
                if (info.length > 0) {
                    return info.length;
                } else {
                    return 0;
                }
            })
    }

    async count4(id) {
        return await this.knex("crop")
            .select("name", "yield", "contribution", "harvest_date")
            .join("zone_crop", "crop.id", 'zone_crop.crop_id')
            .join("zone", "crop.zone_id", "zone.id")
            .where("zone.users_id", id)
            .andWhere("harvest", true)
            .then((info) => {
                if (info.length > 0) {
                    return info;
                } else {
                    return 0;
                }
            })
    }

    async count5(id) {
        return await this.knex("crop")
            .select("crop.id", "name", "type", "contribution")
            .join("zone", "crop.zone_id", "zone.id")
            .where("zone.users_id", id)
            .andWhere("crop.harvest", false)
            .then((info) => {
                if (info.length > 0) {
                    return info;
                } else {
                    return 0;
                }
            })
    }

    async count6(id) {
        return await this.knex("crop")
            .select("crop.id", "name", "type", "contribution", "sowing_date")
            .join("zone_crop", "crop.id", 'zone_crop.crop_id')
            .where("crop.id", id)
            .then((info) => {
                if (info.length > 0) {
                    return info;
                } else {
                    return 0;
                }
            })
    }
}

module.exports = DashboardService;