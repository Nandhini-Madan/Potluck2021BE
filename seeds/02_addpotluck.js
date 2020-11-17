
exports.seed = async function(knex) {
 await knex("addPotluck").insert([
   {potluckId:1,potluckName:"Get Together",date:"17-15-2020",time:"8:39 AM",location:"USA",foodItems:"rice",notes:"Hiwe",userId:1},
   {potluckId:2,potluckName:"party",date:"18-15-2020",time:"9:39 AM",location:"INDIA",foodItems:"noodles",notes:"Hiwejk",userId:2}

 ])
};
