# Blogspot-source-code

A full stack application made by using postgresql, express.js, react.js, node.js (PERN) with token based authentication implemented from scratch using jsonwebtokens


The following are the features of the application:

1.Users can create an account and needs to verify through the verification link sent to their email.

2.Users can login, signout.

3.Users can request a password reset email if they forget their password.

4.Users can write a blog, can see blogs posted by other users.

5.Users can change their details.

6.Users can view other user details.

Jsonwebtoken:

Signing algorithm: HS256

Expires after: 60 mins (i.e., users need to login again after 60 mins)


REST API:

GET /auth/    Get user details

POST /auth/    Signup

PATCH /auth/    Update user details

POST /auth/login    Signin

GET /auth/verify/:token    Verify user

GET auth/resetemail    Get password reset email

PATCH auth/:token/changepassword    Change password

POST /blogs/    Add a new blog

GET /blogs/load/:loadcnt    Get latest (loadcnt)th, (loadcnt + 1)th, (loadcnt + 2)th blogs

GET /users/    Search for users

GET /users/:id Get user details with id

GET /users/:id/blogs/:loadcnt Get latest (loadcnt)th, (loadcnt + 1)th, (loadcnt + 2)th blogs from a user with id



