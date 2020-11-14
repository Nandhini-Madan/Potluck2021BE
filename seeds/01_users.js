

  exports.seed = async function(knex) {
    await knex("users").insert([
      { ID: 1, firstName: "nandhini",lastName:"Madan",emailId:"abc@gmail.com",password:"abc",userType:"guest"},
      { ID: 2, firstName: "nandhini1",lastName:"Madan",emailId:"abc1@gmail.com",password:"abc",userType:"organizer"},
      { ID: 3, firstName: "nandy",lastName:"Madan",emailId:"qwe@gmail.com",password:"abc",userType:"guest"},
      
    ])
  };

