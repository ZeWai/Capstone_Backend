class CropService {
  constructor(knex) {
    this.knex = knex;
  }

  async getCrop() {
    let crops = await this.knex
      .select("*")
      .from("zone")
      .innerJoin("crop", "zone.id", "crop.zone_id")
      .innerJoin("zone_crop", "zone.id", "zone_crop.zone_id");
    return crops;
  }

  async addCrop(usersId, area, cropinfo) {
    return await this.knex("zone")
      .select("*")
      .where({ users_id: usersId, area: area })
      .returning("id")
      .then((data) => {
        if (data.length == 0) {
          return this.knex("crop").insert({
            users_id: users_id,
            course_id: course_id,
            paid: true,
            zone_id: data[0],
            name: cropinfo.name,
            type: cropinfo.type,
            yield: cropinfo.yield,
            contribution: cropinfo.contribution,
            image: cropinfo.image,
            sowing: false,
            irrigation: false,
            grooming: false,
            harvest: false,
          });
        } else {
          throw new Error("Cant getCrop");
        }
      });
  }

  async getReadyToHarvest(location) {

    if (location !== "Loading") {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "type", "yield")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("crop.sowing", true)
        .where("crop.harvest", false)
        .orderBy("harvest_date", "asc")
    }
  }

  async getZoneCrop(location, zone) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;

    if (zone === "Overview") {
      return await getReadyToHarvest(location)
    }
    else {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "type", "yield", "sowing_date", "sowing", "harvest")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("area", zone)
        .where("sowing",true)
        .where("harvest", false)
        .orderBy("harvest_date", "asc")
    }
  }

  async getTodo(location, zone) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0'); //To make sure get correct date
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var today = `${yyyy}-${mm}-${dd}`;
    const SowToday = await this.SowToday(location, zone, today)
    const HarvestToday = await this.HarvestToday(location, zone, today)
    const Watertoday = await this.WaterToday(location, zone, today)
    return SowToday.concat(HarvestToday)
  }

  async SowToday(location, zone, today) {
    if (zone === "Overview") {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "sowing", "harvest", "irrigation_period", "sowing_date", "irrigation_counter")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("sowing", false)
        .where("sowing_date", "<=", today)
      
    } else {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "sowing", "harvest", "irrigation_period", "sowing_date", "irrigation_counter")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("area", zone)
        .where("sowing", false)
        .where("sowing_date", "<=", today)
    }
  }

  async HarvestToday(location, zone, today) {
    if (zone === "Overview") {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "sowing", "harvest", "irrigation_period", "sowing_date", "irrigation_counter")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("sowing", true)
        .where("harvest", false)
        .where("harvest_date", "<=", today)
    } else {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "sowing", "harvest", "irrigation_period", "sowing_date", "irrigation_counter")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("area", zone)
        .where("sowing", true)
        .where("harvest", false)
        .where("harvest_date", "<=", today)
    }
  }

  async WaterToday(location, zone, today) {
    const watertoday = [];
    if (zone === "Overview") {
      const growing =await this.knex("crop")
        .select("name", "area", "harvest_date", "sowing", "harvest", "irrigation_period", "sowing_date", "irrigation_counter")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("sowing", true)
        .where("harvest", false)
        .where("harvest_date", ">", today) 
      
      for (let i = 0; i < growing.length; i++){
        var Today = parseInt(`${today.slice(0, 4)}${today.slice(5, 7)}${today.slice(8, 10)}`)
        var sowingDate = parseInt(`${growing[i].sowing_date.slice(0, 4)}${growing[i].sowing_date.slice(5, 7)}${growing[i].sowing_date.slice(8, 10)}`)
        console.log((Today - sowingDate) % growing[i].irrigation_period === 0, "1")
        console.log((Today - sowingDate) % growing[i].irrigation_period > growing[i].irrigation_counter,"2")
        
        if ((Today - sowingDate) % growing[i].irrigation_period === 0) {
          if ((Today - sowingDate) % growing[i].irrigation_period > growing[i].irrigation_counter) {
            console.log(growing[i])

            watertoday.push(growing[i])
            console.log(watertoday)
          }
        }
      }
      console.log(watertoday)

      return "hello"
    } else {
      const growing = await this.knex("crop")
        .select("name", "area", "harvest_date", "sowing", "harvest", "irrigation_period", "sowing_date", "irrigation_counter")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("area", zone)
        .where("sowing", true)
        .where("harvest", false)
        .where("harvest_date", ">", today)
      
      for (let i = 0; i < growing.length; i++) {
        var Today = parseInt(`${today.slice(0, 4)}${today.slice(5, 7)}${today.slice(8, 10)}`)
        var sowingDate = parseInt(`${growing[i].sowing_date.slice(0, 4)}${growing[i].sowing_date.slice(5, 7)}${growing[i].sowing_date.slice(8, 10)}`)
        console.log((Today - sowingDate) % growing[i].irrigation_period === 0,"1")
        console.log((Today - sowingDate) % growing[i].irrigation_period > growing[i].irrigation_counter,"2")

        if ((Today - sowingDate) % growing[i].irrigation_period === 0) {
          if ((Today - sowingDate) % growing[i].irrigation_period > growing[i].irrigation_counter) {
            console.log(growing[i])

            watertoday.push(growing[i])
            console.log(watertoday)
          }
        }
      }
    }
  }
}
module.exports = CropService;
