define({ "api": [
  {
    "type": "post",
    "url": "/authenticate",
    "title": "Authenticate",
    "description": "<p>This service, will authenticate user in api, generating a token to do requests in api.</p>",
    "version": "1.0.0",
    "name": "Authenticate",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to access API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"name\": \"João das Neves\",\n    \"email\": \"joaodasneves@gmail.com\",\n    \"token\": \"eyJhbGciOiJIUGDGddiIsdIkpXVCJ9.eyJzdWIiOj6MTUGFAsa564Nn0._5yhuU7lIwETT9R1TKkMgDJZfRYw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "EmailInvalid",
            "description": "<p>The <code>email</code> must be valid.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "PasswordInvalid",
            "description": "<p>The <code>password</code> must be valid.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>Wrong <code>password</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"email\\\" must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"password\\\" must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"message\": \"user not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"message\": \"incorrect password\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/config/login.js",
    "groupTitle": "Login"
  },
  {
    "type": "put",
    "url": "/changePassword",
    "title": "Change Password",
    "description": "<p>This service, will change the current user password to a new passowrd.</p>",
    "version": "1.0.0",
    "name": "Change_Password",
    "group": "Login",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUGDGddiIsdIkpXVCJ9.eyJzdWIiOj6MTUGFAsa564Nn0._5yhuU7lIwETT9R1TKkMgDJZfRYw\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"password changed with success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "EmailInvalid",
            "description": "<p>The <code>email</code> must be valid.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "PasswordInvalid",
            "description": "<p>The <code>password</code> must be valid.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "NewPasswordInvalid",
            "description": "<p>The <code>newPassword</code> must be valid.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>Wrong <code>password</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"email\\\" must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"password\\\" must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"newPassword\\\" must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"message\": \"user not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Bad Request\n{\n    \"message\": \"incorrect password\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/config/login.js",
    "groupTitle": "Login"
  },
  {
    "type": "put",
    "url": "/passwordResetConfirm",
    "title": "Password Reset Confirm",
    "description": "<p>This service, will change password to a new password, if the user is authentic, confirming the token sent in the email.</p>",
    "version": "1.0.0",
    "name": "Password_Reset_Confirm",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"password changed with success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "TokenInvalid",
            "description": "<p>The <code>token</code> must be valid.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "NewPasswordInvalid",
            "description": "<p>The <code>newPassword</code> must be valid.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>Invalid Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"token\\\" must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"newPassword\\\" must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"message\": \"invalid token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/config/login.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/passwordResetRequest",
    "title": "Password Reset Request",
    "description": "<p>This service, will send a email with link to reset user password.</p>",
    "version": "1.0.0",
    "name": "Password_Reset_Request",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"email sent with success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "EmailInvalid",
            "description": "<p>The <code>email</code> must be valid.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found.</p>"
          }
        ],
        "502": [
          {
            "group": "502",
            "optional": false,
            "field": "EmailError",
            "description": "<p>Error to send e-mail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"email\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"user not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 502 Bad Gateway\n{\n    \"message\": \"error to send email, try again\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/config/login.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create User",
    "description": "<p>This service, will change password to a new password, if the user is authentic, confirming the token sent in the email.</p>",
    "version": "1.0.0",
    "name": "Create_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>User cpf.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telephoneNumber",
            "description": "<p>User telephoneNumber.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"message\": \"user created with sucess\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "CPFInvalid",
            "description": "<p>The <code>cpf</code> must be valid.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "NameInvalid",
            "description": "<p>The <code>name</code> must be valid.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "EmailInvalid",
            "description": "<p>The <code>email</code> must be valid.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "PasswordInvalid",
            "description": "<p>The <code>password</code> must be valid.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "TelephoneNumberInvalid",
            "description": "<p>The <code>telephoneNumber</code> must be valid.</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "optional": false,
            "field": "CPFInUse",
            "description": "<p>The <code>cpf</code> is in use.</p>"
          },
          {
            "group": "409",
            "optional": false,
            "field": "EmailnUse",
            "description": "<p>The <code>email</code> is in use.</p>"
          },
          {
            "group": "409",
            "optional": false,
            "field": "TelephoneNumberInUse",
            "description": "<p>The <code>telephoneNumber</code> is in use.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "CPFValidation",
            "description": "<p>The number does not correspond to a valid <code>cpf</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"cpf must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"name must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n  {\n      \"message\": \"email must be valid\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"password must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"telephoneNumber must be valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"message\": \"invalid CPF\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n    \"message\": \"already exist user with this cpf\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n    \"message\": \"already exist user with this email\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n    \"message\": \"already exist user with this telephoneNumber\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/config/user.js",
    "groupTitle": "User"
  }
] });
