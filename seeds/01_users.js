// pre-hashed password for "abc12345"
const hashedPassword = "$2a$14$rH7Cz8HrQrw1ivdVRZR.Le188NLbX0O9Bxn6dxBZaP1LIzNnFHEiu"
//$2a$14$rH7Cz8HrQrw1ivdVRZR.Le188NLbX0O9Bxn6dxBZaP1LIzNnFHEiu
//before $2a$14$qHqCbXUImiBOgXlFNX47wuA7uFWNGNAZutYLvOeye9eotewGlfYV6
  exports.seed = async function(knex) {
    await knex("users").insert([
      {  firstName: "nandhini",lastName:"Madan",emailId:"abc@gmail.com",password:hashedPassword,userType:"guest"},
      {  firstName: "nandhini1",lastName:"Madan",emailId:"abc1@gmail.com",password:hashedPassword,userType:"organizer"},
      {  firstName: "nandy",lastName:"Madan",emailId:"qwe@gmail.com",password:hashedPassword,userType:"guest"},
      
    ])
  };

