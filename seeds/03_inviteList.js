
exports.seed = async function(knex) {
  await knex("inviteList").insert([
    {guestId:1,firstName:"nandhini",lastName:"madan",emailId:"abc@gmail.com",inviteId:1},
    {guestId:1,firstName:"nandhini",lastName:"madan",emailId:"abc@gmail.com",inviteId:2}

  ])

  
};
