/**
* @api {post} /authenticate Authenticate
* @apiDescription This service, will authenticate user in api, generating a token to do requests in api.
* @apiVersion 1.0.0
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
*       HTTP/1.1 200 OK
*       {
*           "name": "João das Neves",
*           "email": "joaodasneves@gmail.com",
*           "token": "eyJhbGciOiJIUGDGddiIsdIkpXVCJ9.eyJzdWIiOj6MTUGFAsa564Nn0._5yhuU7lIwETT9R1TKkMgDJZfRYw"
*       }
*
* @apiError (400) EmailInvalid The <code>email</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"email\" must be valid"
*       }
*
* @apiError (400) PasswordInvalid The <code>password</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"password\" must be valid"
*       }
*
* @apiError (404) UserNotFound User not found.
* @apiErrorExample Error-Response:
*       HTTP/1.1 404 Bad Request
*       {
*           "message": "user not found"
*       }
*
* @apiError (422) WrongPassword Wrong <code>password</code>.
* @apiErrorExample Error-Response:
*       HTTP/1.1 422 Unprocessable Entity
*       {
*           "message": "incorrect password"
*       }
*/





/**
* @api {put} /changePassword Change Password
* @apiDescription This service, will change the current user password to a new passowrd.
* @apiVersion 1.0.0
* @apiName Change Password
* @apiGroup Login
*
* @apiHeader (Headers) {String} Authorization Authorization token.
* @apiHeaderExample {json} Header-Example:
*       {
*           "Authorization": "Bearer eyJhbGciOiJIUGDGddiIsdIkpXVCJ9.eyJzdWIiOj6MTUGFAsa564Nn0._5yhuU7lIwETT9R1TKkMgDJZfRYw"
*       }
*
* @apiParam {String} email User email.
* @apiParam {String} password User password.
* @apiParam {String} newPassword New password.
*
* @apiSuccess {String} message Success Message.
* @apiSuccessExample Success-Response:
*       HTTP/1.1 200 OK
*       {
*           "message": "password changed with success"
*       }
*
* @apiError (400) EmailInvalid The <code>email</code> must be valid.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"email\" must be valid"
*       }
*
* @apiError (400) PasswordInvalid The <code>password</code> must be valid.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"password\" must be valid"
*       }
*
* @apiError (400) NewPasswordInvalid The <code>newPassword</code> must be valid.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"newPassword\" must be valid"
*       }
*
* @apiError (404) UserNotFound User not found.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 404 Bad Request
*       {
*           "message": "user not found"
*       }
*
* @apiError (422) WrongPassword Wrong <code>password</code>.
* @apiErrorExample Error-Response:
*       HTTP/1.1 422 Bad Request
*       {
*           "message": "incorrect password"
*       }
*/





/**
* @api {post} /passwordResetRequest Password Reset Request
* @apiDescription This service, will send a email with link to reset user password.
* @apiVersion 1.0.0
* @apiName Password Reset Request
* @apiGroup Login
*
* @apiParam {String} email User email.
*
* @apiSuccess {String} message Success Message.
* @apiSuccessExample Success-Response:
*       HTTP/1.1 200 OK
*       {
*           "message": "email sent with success"
*       }
*
* @apiError (400) EmailInvalid The <code>email</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"email\" is required"
*       }
*
* @apiError (404) UserNotFound User not found.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 404 Not Found
*       {
*           "message": "user not found"
*       }
*
* @apiError (502) EmailError Error to send e-mail.
* @apiErrorExample  Error-Response:
*       HTTP/1.1 502 Bad Gateway
*       {
*           "message": "error to send email, try again"
*       }
*/





/**
* @api {put} /passwordResetConfirm Password Reset Confirm
* @apiDescription This service, will change password to a new password, if the user is authentic, confirming the token sent in the email.
* @apiVersion 1.0.0
* @apiName Password Reset Confirm
* @apiGroup Login
*
* @apiParam {String} token Token.
* @apiParam {String} newPassword New password.
*
* @apiSuccess {String} message Success Message.
* @apiSuccessExample Success-Response:
*       HTTP/1.1 200 OK
*       {
*           "message": "password changed with success"
*       }
*
* @apiError (400) TokenInvalid The <code>token</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"token\" must be valid"
*       }
*
* @apiError (400) NewPasswordInvalid The <code>newPassword</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "\"newPassword\" must be valid"
*       }
*
* @apiError (401) InvalidToken Invalid Token.
* @apiErrorExample Error-Response:
*       HTTP/1.1 401 Unauthorized
*       {
*           "message": "invalid token"
*       }
*/