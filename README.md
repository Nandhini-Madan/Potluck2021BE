# Herokku 
https://potluck2020.herokuapp.com/
# Front End 
https://potluckfood2021.netlify.app

# back-end
 POTLUCK TABLE 


### addPotluck
|potluckId| potluckName | date | time | location | foodItems | notes | userId |
|---------|-------------|------|------|----------|-----------|--------|-------|
|3        | Get Together| 17-5-2020| 8:39 AM | USA | rice | hi welcome to potluck | 1|

### Users
|ID| firstName | lastName | emailId |password | userType|
|--|----------|---------|---------|-----------|----------|
|1|nandhini | Madan|abc@gmail.com |abc12345|guest|
|2|nandhini1|Madan|abc1@gmail.com|abc12345|organizer|
    
### Login 
| emailId  |Password |
| ------------- | ------------- |
|abc@gmail.com  | abc12345 |


### InviteList 
|guestId | firstName | lastName | emailId | inviteId |
|--------|-----------|----------|----------|----------|
|1 | nandhini | Madan | abc@gmail.com | 1|

### END POINTS

# POST
-/login
-/register
-/addPotluck
# PUT
-/:id/editPotluck
# DELETE
-/:id/deletePotluck
# GET
-/userList
# Post
-/guest/:id/invite/potLuck/:id
