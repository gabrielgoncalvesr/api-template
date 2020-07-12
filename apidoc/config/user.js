/**
* @api  {post}  /user   Create User
* @apiVersion   1.0.0
* @apiName  Create User
* @apiGroup User
*
* @apiParam {String}    cpf User cpf.
* @apiParam {String}    name    User name.
* @apiParam {String}    email   User email.
* @apiParam {String}    password    User password.
* @apiParam {String}    telephoneNumber User telephoneNumber.
*
* @apiSuccess   {String}    message Success message.
*
* @apiSuccessExample    Success-Response:
*       HTTP/1.1 200 OK
*       {
*           "message": "user created with sucess"
*       }
*
* @apiError CPFRequired The <code>cpf</code> must be valid.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "cpf must be valid"
*     }
*
* @apiError NameRequired    The <code>name</code> must be valid.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "name must be valid"
*     }
*
* @apiError EmailRequired   The <code>email</code> must be valid.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "email must be valid"
*     }
*
* @apiError PasswordRequired    The <code>password</code> must be valid.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "telephoneNumber must be valid"
*     }
*
* @apiError TelephoneNumberRequired The <code>telephoneNumber</code> must be valid.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "telephoneNumber must be valid"
*     }
*
* @apiError CPFValidation   The number does not correspond to a valid <code>cpf</code>.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "invalid CPF"
*     }
*
* @apiError CPFInUs    The <code>cpf</code> is in use.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this cpf"
*     }
*
* @apiError EmailnUsed  The <code>email</code> is in use.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this email"
*     }
*
* @apiError TelephoneNumberInUse   The <code>telephoneNumber</code> is in use.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this telephoneNumber"
*     }
*/