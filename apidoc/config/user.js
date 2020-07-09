/**
* @api  {post}  /user   Create User
* @apiName  Create User
* @apiGroup User
*
* @apiParam {String} cpf User cpf.
* @apiParam {String} name User name.
* @apiParam {String} email User email.
* @apiParam {String} password User password.
* @apiParam {String} telephoneNumber User telephoneNumber.
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
* @apiError NameRequired The <code>name</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"name\" is required"
*     }
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
* @apiError TelephoneNumberRequired The <code>telephoneNumber</code> is required.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"telephoneNumber\" is required"
*     }
*
* @apiError PasswordValidation Invalid password.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"password\" with value \"Aa1234567\" fails to match the required pattern: /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/"
*     }
*
* @apiError TelephoneNumberValidation Invalid telephone number.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"telephoneNumber\" with value \"11900001\" fails to match the required pattern: /[0-9]{2}9[0-9]{8}/"
*     }
*
* @apiError CPFLengthValidation Invalid length CPF.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"cpf\" length must be 11 characters long"
*     }
*
* @apiError EmailValidation Invalid email.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "\"email\" must be a valid email'"
*     }
*
* @apiError EmailAlreadyUsed Email already used.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this email"
*     }
*
* @apiError CPFAlreadyUsed CPF already used.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this cpf"
*     }
*
* @apiError TelephoneNumberAlreadyUsed Telephone number already used.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "already exist user with this telephoneNumber"
*     }
*
* @apiError CPFValidation Invalid CPF number.
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "message": "invalid CPF"
*     }
*/