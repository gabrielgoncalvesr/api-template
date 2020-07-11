define({ "api": [
  {
    "type": "post",
    "url": "/authenticate",
    "title": "Authenticate",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailRequired",
            "description": "<p>The <code>email</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordRequired",
            "description": "<p>The <code>password</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>Wrong <code>password</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"email\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"password\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"message\": \"user not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"incorrect password\"\n}",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailRequired",
            "description": "<p>The <code>email</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordRequired",
            "description": "<p>The <code>password</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NewPasswordRequired",
            "description": "<p>The <code>newPassword</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongPassword",
            "description": "<p>Wrong <code>password</code>.</p>"
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
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"password\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"\\\"newPassword\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"message\": \"user not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"incorrect password\"\n}",
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
    "version": "1.0.0",
    "name": "Create_User",
    "group": "User",
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
        "Success 200": [
          {
            "group": "Success 200",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"user created with sucess\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CPFRequired",
            "description": "<p>The <code>cpf</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NameRequired",
            "description": "<p>The <code>name</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailRequired",
            "description": "<p>The <code>email</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordRequired",
            "description": "<p>The <code>password</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TelephoneNumberRequired",
            "description": "<p>The <code>telephoneNumber</code> is required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordValidation",
            "description": "<p>The number does not correspond to a valid <code>password</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TelephoneNumberValidation",
            "description": "<p>The number does not correspond to a valid <code>telephoneNumber</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CPFValidation",
            "description": "<p>The number does not correspond to a valid <code>cpf</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailValidation",
            "description": "<p>Invalid <code>email</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailnUsed",
            "description": "<p>The <code>email</code> is in use.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CPFInUse",
            "description": "<p>The <code>cpf</code> is in use.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TelephoneNumberInUsed",
            "description": "<p>The <code>telephoneNumber</code> is in use.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"cpf\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"name\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"email\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"password\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"telephoneNumber\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"password\\\" with value \\\"Aa1234567\\\" fails to match the required pattern: /^(?=.*[A-Za-z])(?=.*\\\\d)(?=.*[@$!%*#?&])[A-Za-z\\\\d@$!%*#?&]{8,}$/\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"telephoneNumber\\\" with value \\\"11900001\\\" fails to match the required pattern: /[0-9]{2}9[0-9]{8}/\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"invalid CPF\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"email\\\" must be a valid email'\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"already exist user with this email\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"already exist user with this cpf\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"already exist user with this telephoneNumber\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/config/user.js",
    "groupTitle": "User"
  }
] });
