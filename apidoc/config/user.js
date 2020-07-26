/**
* @api {post} /user Create User
* @apiDescription This service, will change password to a new password, if the user is authentic, confirming the token sent in the email.
* @apiVersion 1.0.0
* @apiName Create User
* @apiGroup User
*
* @apiParam {String} cpf User cpf.
* @apiParam {String} name User name.
* @apiParam {String} email User email.
* @apiParam {String} password User password.
* @apiParam {String} telephoneNumber User telephoneNumber.
*
* @apiSuccess (201) {String} message Success message.
* @apiSuccessExample Success-Response:
*       HTTP/1.1 201 Created
*       {
*           "message": "user created with sucess"
*       }
*
* @apiError (400) CPFInvalid The <code>cpf</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "cpf must be valid"
*       }
*
* @apiError (400) NameInvalid The <code>name</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "name must be valid"
*       }
*
* @apiError (400) EmailInvalid The <code>email</code> must be valid.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*       {
*           "message": "email must be valid"
*       }
*
* @apiError (400) PasswordInvalid The <code>password</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "password must be valid"
*       }
*
* @apiError (400) TelephoneNumberInvalid The <code>telephoneNumber</code> must be valid.
* @apiErrorExample Error-Response:
*       HTTP/1.1 400 Bad Request
*       {
*           "message": "telephoneNumber must be valid"
*       }
*
* @apiError (422) CPFValidation The number does not correspond to a valid <code>cpf</code>.
* @apiErrorExample Error-Response:
*       HTTP/1.1 422 Unprocessable Entity
*       {
*           "message": "invalid CPF"
*       }
*
* @apiError (409) CPFInUse The <code>cpf</code> is in use.
* @apiErrorExample Error-Response:
*       HTTP/1.1 409 Conflict
*       {
*           "message": "already exist user with this cpf"
*       }
*
* @apiError (409) EmailnUse The <code>email</code> is in use.
* @apiErrorExample Error-Response:
*       HTTP/1.1 409 Conflict
*       {
*           "message": "already exist user with this email"
*       }
*
* @apiError (409) TelephoneNumberInUse The <code>telephoneNumber</code> is in use.
* @apiErrorExample Error-Response:
*       HTTP/1.1 409 Conflict
*       {
*           "message": "already exist user with this telephoneNumber"
*       }
*/