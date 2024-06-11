**Bugs**

1) Incorrectly logs in user with invalid username/password and returns new jwt token. Did not use "await" keyword when authenticating user (auth.js line 42).
2) hashed password was exposed when registering user (user.js line 32) and logging user in (user.js line 70).
3) Did not accept 'admin' property on user. It always defaulted to false.
4) User.getAll() had two arguments that were not needed (user.js line 84).
5) User.getAll() returned more than just basic info when requesting GET /users.
6) authUser middleware did not throw error for incorrect tokens. Need to use jwt.verify instead of jwt.decode.
7) Error did not get thrown when GET /users/[username] was requested on a user that could not be found.
8) Only allowed for admin to update user info. Fixed so that own user can also update their own info.
9) Code allowed for pathching of disallowed fields.