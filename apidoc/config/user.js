/**
* @api  {post}  /user   Create User
* @apiVersion   1.0.0
* @apiName  Create User
* @apiGroup User

* @apiHeader    (Headers)   {String}    Authorization Authorization token.
* @apiHeaderExample {json}  Header-Example:
*       {
*           "Authorization": "Bearer eyJhbGciOiJIUGDGddiIsdIkpXVCJ9.eyJzdWIiOj6MTUGFAsa564Nn0._5yhuU7lIwETT9R1TKkMgDJZfRYw"
*       }
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
* @apiError CPFRequired The <code>cpf</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"cpf\" is required"
*     }
*
* @apiError NameRequired    The <code>name</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"name\" is required"
*     }
*
* @apiError EmailRequired   The <code>email</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"email\" is required"
*     }
*
* @apiError PasswordRequired    The <code>password</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"password\" is required"
*     }
*
* @apiError TelephoneNumberRequired The <code>telephoneNumber</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"telephoneNumber\" is required"
*     }
*
* @apiError PasswordValidation  The number does not correspond to a valid <code>password</code>.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"password\" with value \"Aa1234567\" fails to match the required pattern: /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/"
*     }
*
* @apiError TelephoneNumberValidation   The number does not correspond to a valid <code>telephoneNumber</code>.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"telephoneNumber\" with value \"11900001\" fails to match the required pattern: /[0-9]{2}9[0-9]{8}/"
*     }
*
* @apiError CPFValidation   The number does not correspond to a valid <code>cpf</code>.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "invalid CPF"
*     }
*
* @apiError EmailValidation The number does not correspond to a valid <code>email</code>.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"email\" must be a valid email'"
*     }
*
* @apiError EmailnUsed  The <code>email</code> is in use.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this email"
*     }
*
* @apiError CPFInUse    The <code>cpf</code> is in use.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this cpf"
*     }
*
* @apiError TelephoneNumberInUsed   The <code>telephoneNumber</code> is in use.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this telephoneNumber"
*     }
*/