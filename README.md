# BE-28---Restfull-API-AYF

# API Specification

- ## User Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | first_name    | String        | Contains the user's first name     |      
  | last_name     | String        | Contains the user's last name      |
  | username      | String        | Contains the user's username       |
  | password      | String        | Contains the user's password       |
  | date_of_birth | Date          | Contains the user's date of birth  |
  | role          | Id of role    | Contains the user's role           |
  | country       | Id of country | Contains the user's country        |
  | gender        | Id of gender  | Contains the user's gender         |
  | email         | String        | Contains the user's email          |
  | phone_number  | String        | Contains the user's phone number   |
  | createdAt     | Date          | contains the account creation date |

- ## Gender Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | gender        | String        | Contains the gender's name         |
  | createdAt     | Date          | contains the gender creation date  |

- ## Role Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | role          | String        | Contains the role's name           |
  | createdAt     | Date          | contains the role creation date    |

- ## Country Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | Country       | String        | Contains the country's name        |
  | createdAt     | Date          | contains the country creation date |


# Welcome Endpoint
- ## Welcome
  - ### Start API
    - Method : GET
    - Endpoint : /
    - Header :
    - Accept : application/json
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "Welcome to Asean Youth Forum News, Our API Specification : https://github.com/km-2228/BE-28---Restfull-API-AYF",
        }
    ```
  
# Authentication & Autorization Endpoint
- ## Authentication & Autorization

  - ### Register
  
    - Method : POST
    - Endpoint : /auth/register
    - Header :
      - Content-Type : application/json
      - Accept : application/json
    - Body :

    ```javascript
      {
          "first_name" : "String - mininum length 4 - required",
          "last_name" : "String - mininum length 4 - required",
          "username" : "String - mininum length 8 - required",
          "password" : "String - mininum length 8 - required",
          "date_of_birth" : "Date - required",
          "role" : "Id of role - required",
          "country" : "Id of country - required",
          "gender" : "Id of gender - required",
          "email" : "String - required",
          "phone_number" : "String - required"
      }
    ```

    - Response :

    ```javascript
        {
            "status":"201 Created",
            "message":"Your Account was registered"
        }
    ```
  
  - ### Login
  
    - Method : POST
    - Endpoint : /auth/login
    - Header :
      - Content-Type : application/json
      - Accept : application/json
    - Body :

    ```javascript
      {
          "username" : "String - mininum length 8 - required",
          "password" : "String - mininum length 8 - required"
      }
    ```

    - Response :

    ```javascript
        {
            "status":"201 Created",
            "data":"String",
            "message":"Your Account was registered"
        }
    ```

# User Endpoint

- ## Users
  - ### Change password (User & Admin)
  
    - Method : PUT
    - Endpoint : /users/change-password
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
  
    - Body :
    
    ```javascript
        {
            "new_password" : "String - mininum length 8 - required",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "Your password was changed",
        }
    ```
    
  - ### Change role of user (Admin)
  
    - Method : PUT
    - Endpoint : /users/change-password/:id
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Parameter :
    
    `id of user`
  
    - Body :
    
    ```javascript
        {
            "role" : "Id of role - required",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "User role was updated",
        }
    ```
    
  - ### Change profile (User & Admin)
  
    - Method : PUT
    - Endpoint : /users/change-profile
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Body :
    
    ```javascript
        {
            "first_name":"String - mininum length 4 - required",
            "last_name":"String - mininum length 4 - required"
            "username":"String - mininum length 8 - required",
            "password":"String - mininum length 8 - required",
            "date_of_birth":"Date - required",
            "role":"id of role - required",
            "gender":"id of gender - required",
            "country":"id of country - required",
            "email":"String - required",
            "phone_number":"String - required",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "Your profile was changed",
        }
    ```
  
  - ### Show profile (User & Admin)
  
    - Method : GET
    - Endpoint : /users/profile
    - Header :
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {
                          "_id":"String",
                          "first_name":"String",
                          "last_name":"String"
                          "username":"String",
                          "password":"String",
                          "date_of_birth":"Date",
                          "role":"id of role",
                          "gender":"id of gender",
                          "country":"id of country",
                          "email":"String",
                          "phone_number":"String",
                          "createdAt":"Date",
                     },
            "message" : "Your data was checked",
        }
    ```

- ## Genders
  - ### Get all genders (User & Admin)
    
    - Method : GET
    - Endpoint : /genders/
    - Header :
      - Accept : application/json
      
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {[
                          "_id":"String",
                          "gender":"String",
                          "createdAt":"Date",
                     ]},
            "message" : "Get all data Genders",
        }
    ```
  
  - ### Get gender by id (User & Admin)
  
    - Method : GET
    - Endpoint : /genders/:id
    - Header :
      - Accept : application/json
      
    - Parameter :
    
    `id of gender`
      
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {[
                          "_id":"String",
                          "gender":"String",
                          "createdAt":"Date",
                     ]},
            "message" : "Get data gender by id",
        }
    ```
  
  - ### Change gender by id (Admin)
  
    - Method : PUT
    - Endpoint : /genders/:id
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Parameter :
    
    `id of gender`
  
    - Body :
    
    ```javascript
        {
            "gender" : "String - rquired",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was change a gender by id",
        }
    ```
  
  - ### Store gender (Admin)
    
    - Method : POST
    - Endpoint : /genders/
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Body :
    
    ```javascript
        {
            "gender" : "String - rquired",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was listed a gender",
        }
    ```
    
  - ### Delete gender by id (Admin)
  
    - Method : DELETE
    - Endpoint : /genders/:id
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Parameter :
    
    `id of gender`
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted a gender",
        }
    ```
    
  - ### Delete all gender (Admin)
  
    - Method : DELETE
    - Endpoint : /genders/
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted all genders",
        }
    ```

- ## Roles
  - ### Get all roles (User & Admin)
  
    - Method : GET
    - Endpoint : /roles/
    - Header :
      - Accept : application/json
      
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {[
                          "_id":"String",
                          "role":"String",
                          "createdAt":"Date",
                     ]},
            "message" : "Get all data Roles",
        }
    ```
  
  - ### Get role by id (User & Admin)
  
    - Method : GET
    - Endpoint : /roles/:id
    - Header :
      - Accept : application/json
      
    - Parameter :
    
    `id of role`
      
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {[
                          "_id":"String",
                          "role":"String",
                          "createdAt":"Date",
                     ]},
            "message" : "Get data role by id",
        }
    ```
  
  - ### Change role by id (Admin)
    
    - Method : PUT
    - Endpoint : /roles/:id
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Parameter :
    
    `id of role`
  
    - Body :
    
    ```javascript
        {
            "role" : "String - rquired",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was change a role by id",
        }
    ```
  
  - ### Store role (Admin)
  
    - Method : POST
    - Endpoint : /roles/
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Body :
    
    ```javascript
        {
            "role" : "String - rquired",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was listed a role",
        }
    ```
  
  - ### Delete role by id (Admin)
  
    - Method : DELETE
    - Endpoint : /roles/:id
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Parameter :
    
    `id of role`
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted a role",
        }
    ```
  
  - ### Delete all role (Admin)
  
    - Method : DELETE
    - Endpoint : /roles/
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted all roles",
        }
    ```

- ## Countries
  - ### Get all countries (User & Admin)
  
    - Method : GET
    - Endpoint : /countries/
    - Header :
      - Accept : application/json
      
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {[
                          "_id":"String",
                          "country":"String",
                          "createdAt":"Date",
                     ]},
            "message" : "Get all data Countries",
        }
    ```
  
  - ### Get country by id (User & Admin)
  
    - Method : GET
    - Endpoint : /countries/:id
    - Header :
      - Accept : application/json
      
    - Parameter :
    
    `id of country`
      
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {[
                          "_id":"String",
                          "country":"String",
                          "createdAt":"Date",
                     ]},
            "message" : "Get data country by id",
        }
    ```
  
  - ### Change country by id (Admin)
  
    - Method : PUT
    - Endpoint : /countries/:id
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Parameter :
    
    `id of country`
  
    - Body :
    
    ```javascript
        {
            "country" : "String - rquired",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was change a country by id",
        }
    ```
  
  - ### Store country (Admin)
  
    - Method : POST
    - Endpoint : /countries/
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Body :
    
    ```javascript
        {
            "country" : "String - rquired",
        }
    ```
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was listed a country",
        }
    ```
  
  - ### Delete country by id (Admin)
  
    - Method : DELETE
    - Endpoint : /countries/:id
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token
      
    - Parameter :
    
    `id of country`
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted a country",
        }
    ```
  
  - ### Delete all country (Admin)
  
    - Method : DELETE
    - Endpoint : /countries/
    - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted all countries",
        }
    ```

# Article Endpoint

- ## articles
  - ### Get all articles (User & Admin)
  - ### Get article by id (User & Admin)
  - ### Change article by id (Admin)
  - ### Store article (Admin)
  - ### Delete article by id (Admin)
  - ### Delete all article (Admin)

- ## categories
  - ### Get all categories (User & Admin)
  - ### Get category by id (User & Admin)
  - ### Change category by id (Admin)
  - ### Store category (Admin)
  - ### Delete category by id (Admin)
  - ### Delete all category (Admin)

- ## comments
  - ### Get all comment by article id (User & Admin)
  - ### Store comment by article id (User & Admin)
  - ### Delete a comment by people who commented in the article (User & Admin)

- ## likes
  - ### Get all like by article id (User & Admin)
  - ### Lked a article by article id (User & Admin)
  - ### Unliked a acrticle by article id and id people who liked before (User & Admin)
