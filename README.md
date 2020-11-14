# back-end
 POTLUCK TABLE 

(TABLE NAME AND DATA TYPES)

CREATE POTLUCK (addPotluck)

potluckId - UNIQUE (will be created by db)
potluckName -STRING
date -STRING
time-STRING
location- STRING
foodItems-STRING
notes-STRING
userId-(foreign key from users ID)


REGISTER (users)
ID - created by Db
firstName-String
lastName-string
emailId-string
password-string
userType-string
(organizer,guest)// Lets think about this 

Login
emailId-string
Password-string

Invite(InviteList) 
guestId(foreign Key from users Table)
firstName -string
lastName-string
emailId-string
inviteId(foreign key from addPotluck Table)


END POINTS

POST
-/login
-/register
-/:id/addPotluck
PUT
-/:id/editPotluck
DELETE
-/:id/deletePotluck
GET
-/userList
Post
-/guest/:id/invite/potLuck/:id
