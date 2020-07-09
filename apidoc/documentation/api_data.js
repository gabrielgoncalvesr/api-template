define({ "api": [
  {
    "type": "post",
    "url": "/authenticate",
    "title": "Authenticate",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"gabriel@gmail.com\",\n  \"name\": 'Gabriel'\"\n  \"token\": \"eyJhbGciOiJIUGDGdNsasdiIsdInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTUGFAsa564Nn0._5yhuU7l9tEodMwwjbC6sMbIwETT9R1TKkMgDJZfRYw\"\n}",
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
    "version": "0.0.0",
    "filename": "apidoc/config/login.js",
    "groupTitle": "Login"
  },
  {
    "type": "put",
    "url": "/changePassword",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "Login",
    "header": {
      "fields": {
        "MyHeaderGroup": [
          {
            "group": "MyHeaderGroup",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept-Encoding\": \"Accept-Encoding: gzip, deflate\"\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"password changed with success\"\n}",
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
            "field": "401/Unauthorized",
            "description": "<p>Invalid basic auth credentials supplied.</p>"
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
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"\\\"newPassword\\\" is required\"\n}",
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
    "version": "0.0.0",
    "filename": "apidoc/config/login.js",
    "groupTitle": "Login"
  }
] });
