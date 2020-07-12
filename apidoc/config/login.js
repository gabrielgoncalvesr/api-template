/**
* @api  {post}  /authenticate   Authenticate
* @apiVersion 1.0.0
* @apiName  Authenticate
* @apiGroup Login
*
* @apiParam {String} email User email.
* @apiParam {String} password User password.
*
* @apiSuccess   {String}    email User email.
* @apiSuccess   {String}    name User name.
* @apiSuccess   {String}    token Token to access API.
*
* @apiSuccessExample    Success-Response:
*       HTTP/1.1 200 OK
*       {
*           "name": "João das Neves",
*           "email": "joaodasneves@gmail.com",
*           "token": "eyJhbGciOiJIUGDGddiIsdIkpXVCJ9.eyJzdWIiOj6MTUGFAsa564Nn0._5yhuU7lIwETT9R1TKkMgDJZfRYw"
*       }
*
* @apiError EmailRequired The <code>email</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"email\" is required"
*     }
*
* @apiError PasswordRequired The <code>password</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"password\" is required"
*     }
*
* @apiError UserNotFound User not found.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Bad Request
*     {
*       "message": "user not found"
*     }
*
* @apiError WrongPassword Wrong <code>password</code>.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "incorrect password"
*     }
*/





/**
* @api  {put}   /changePassword Change Password
* @apiVersion 1.0.0
* @apiName  Change Password
* @apiGroup Login
*
* @apiHeader    (Headers) {String}    Authorization Authorization token.
* @apiHeaderExample {json} Header-Example:
*       {
*           "Authorization": "Bearer eyJhbGciOiJIUGDGddiIsdIkpXVCJ9.eyJzdWIiOj6MTUGFAsa564Nn0._5yhuU7lIwETT9R1TKkMgDJZfRYw"
*       }
*
* @apiParam     {String}    email           User email.
* @apiParam     {String}    password        User password.
* @apiParam     {String}    newPassword     New password.
*
* @apiSuccess {String}    message         Success Message.
* @apiSuccessExample    Success-Response:
*       HTTP/1.1 200 OK
*       {
*           "message": "password changed with success"
*       }
*
* @apiError   EmailRequired           The <code>email</code> is required.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"email\" is required"
*       }
*
* @apiError   PasswordRequired        The <code>password</code> is required.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"password\" is required"
*       }
*
* @apiError   NewPasswordRequired     The <code>newPassword</code> is required.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"newPassword\" is required"
*       }
*
* @apiError   UserNotFound            User not found.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 404 Bad Request
*       {
*           "message": "user not found"
*       }
*
* @apiError   WrongPassword           Wrong <code>password</code>.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "incorrect password"
*       }
*/