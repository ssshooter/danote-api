define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "login",
    "group": "Login_system",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"name\":\"ssshooter\",\n\t\"password\":\"1234567\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "msg",
            "description": "<p>Status description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\":0,\n  \"msg\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/loginSys.js",
    "groupTitle": "Login_system"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "name": "register",
    "group": "Login_system",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"name\":\"ssshooter\",\n\t\"password\":\"1234567\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Error code</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "msg",
            "description": "<p>Status description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\":0,\n  \"msg\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/loginSys.js",
    "groupTitle": "Login_system"
  },
  {
    "type": "put",
    "url": "/memo",
    "title": "Add Tag to a memo",
    "name": "addTag",
    "group": "Memo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>All tags of your memo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/memo.js",
    "groupTitle": "Memo"
  },
  {
    "type": "post",
    "url": "/memo",
    "title": "Create Memo",
    "name": "createMemo",
    "group": "Memo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>your memo</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>tags of your memo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/memo.js",
    "groupTitle": "Memo"
  },
  {
    "type": "get",
    "url": "/memo/:id",
    "title": "Get Memo By Id",
    "name": "getMemoById",
    "group": "Memo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/memo.js",
    "groupTitle": "Memo"
  },
  {
    "type": "get",
    "url": "/memo",
    "title": "Request User Memo",
    "name": "getUserAllMemo",
    "group": "Memo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>Memo number per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last",
            "description": "<p>Id of last memo currently</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.content",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/memo.js",
    "groupTitle": "Memo"
  },
  {
    "type": "put",
    "url": "/memo",
    "title": "Update Memo By Id",
    "name": "updateMemoById",
    "group": "Memo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>new content in this update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/memo.js",
    "groupTitle": "Memo"
  },
  {
    "type": "post",
    "url": "/memo",
    "title": "Create Tag",
    "name": "createTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>tag name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>tag icon</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "delete",
    "url": "/tag/:id",
    "title": "Delete Tag",
    "name": "deleteTag",
    "group": "Tag",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/tag",
    "title": "Get User All Tag",
    "name": "getUserAllTag",
    "group": "Tag",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/tag.js",
    "groupTitle": "Tag"
  }
] });
