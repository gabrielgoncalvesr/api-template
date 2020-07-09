/**
* @api {post} /authenticate Authenticate
* @apiName Authenticate
* @apiGroup Login
*
* @apiParam {String} email User email.
* @apiParam {String} password User password.
*
* @apiSuccess {String} email User email.
* @apiSuccess {String} name User name.
* @apiSuccess {String} token Token to access API.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "email": "gabriel@gmail.com",
*       "name": 'Gabriel'"
*       "token": "eyJhbGciOiJIUGDGdNsasdiIsdInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTUGFAsa564Nn0._5yhuU7l9tEodMwwjbC6sMbIwETT9R1TKkMgDJZfRYw"
*     }
*
* @apiError EmailRequired The <code>email</code> is required.
* @apiError PasswordRequired The <code>password</code> is required.
* @apiError UserNotFound User not found.
* @apiError WrongPassword Wrong <code>password</code>.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"email\" is required"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"password\" is required"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Bad Request
*     {
*       "message": "user not found"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "incorrect password"
*     }
*/





/**
* @api  {put}   /changePassword Change Password
* @apiName  Change Password
* @apiGroup Login
* @apiHeader    (MyHeaderGroup) {String}    Authorization Authorization token.
* @apiHeaderExample {json} Header-Example:
*       {
*           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU5NDI2MTI0NH0.JPZP3L7S9K6b5z5IOuCGCCu1QNhghcaQWz46SlSTQlc"
*       }
*
* @apiParam   {String}    email           User email.
* @apiParam   {String}    password        User password.
* @apiParam   {String}    newPassword     New password.
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