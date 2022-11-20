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
  
  
- ## Article Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | author        | Id of user    | Contains the article's author      |      
  | title         | String        | Contains the article's title       |
  | image         | String        | Contains the article's image       |
  | content       | String        | Contains the article's content     |
  | category      | Id of gender  | Contains the article's category    |
  | slug          | String        | Contains the article's slug        |
  | createdAt     | Date          | Contains the article creation date |
  
  
- ## Category Model

  | Atrributes    | Data Type     | Description                         |
  | ------------- | ---------     | ----------------------------        |
  | category      | String        | Contains the category's name        |
  | createdAt     | Date          | contains the category creation date |
  
  
- ## Like Model

  | Atrributes    | Data Type     | Description                                  |
  | ------------- | ---------     | ----------------------------                 |
  | user          | Id of user    | Contains the user who like in the article    |
  | article       | Id of article | Contains the article liked by user           |
  | createdAt     | Date          | contains the like creation date              |
  

- ## Comment Model

  | Atrributes    | Data Type     | Description                                  |
  | ------------- | ---------     | ----------------------------                 |
  | comment       | String        | Contains the comment of user                 |
  | user          | Id of user    | Contains the user who comment in the article |
  | article       | Id of article | Contains the article commented by user       |
  | createdAt     | Date          | contains the comment creation date           |

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
            "message" : "Welcome to Asean Youth Forum News, Our API Specification : https://github.com/km-2228/BE-28---Restfull-API-AYF"
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
            "new_password" : "String - mininum length 8 - required"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "Your password was changed"
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
            "role" : "Id of role - required"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "User role was updated"
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
            "phone_number":"String - required"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "Your profile was changed"
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
                          "createdAt":"Date"
                     },
            "message" : "Your data was checked"
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
                          "createdAt":"Date"
                     ]},
            "message" : "Get all data Genders"
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
                          "createdAt":"Date"
                     ]},
            "message" : "Get data gender by id"
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
            "gender" : "String - rquired"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was change a gender by id"
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
            "gender" : "String - rquired"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was listed a gender"
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
            "message" : "You was deleted a gender"
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
            "message" : "You was deleted all genders"
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
                          "createdAt":"Date"
                     ]},
            "message" : "Get all data Roles"
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
                          "createdAt":"Date"
                     ]},
            "message" : "Get data role by id"
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
            "role" : "String - rquired"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was change a role by id"
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
            "role" : "String - rquired"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was listed a role"
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
            "message" : "You was deleted a role"
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
            "message" : "You was deleted all roles"
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
                          "createdAt":"Date"
                     ]},
            "message" : "Get all data Countries"
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
                          "createdAt":"Date"
                     ]},
            "message" : "Get data country by id"
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
            "country" : "String - rquired"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was change a country by id"
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
            "country" : "String - rquired"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was listed a country"
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
            "message" : "You was deleted a country"
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
            "message" : "You was deleted all countries"
        }
    ```

# Article Endpoint

- ## articles
  - ### Get all articles (User & Admin)
    
   - Method : GET
   - Endpoint : /articles/
   - Header :
    - Accept : application/json
      
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {[
                          "_id":"String",
                          "author":"Id of user",
                          "title":"String",
                          "image":"String",
                          "content":"String",
                          "slug":"String",
                          "category":"Id of category",
                          "createdAt":"Date"
                     ]},
            "message" : "Get all data Articles"
        }
    ```

  - ### Get article by id (User & Admin)
    
   - Method : GET
   - Endpoint : /articles/:id
   - Header :
    - Accept : application/json
      
   - Parameter :
    
    `id of article`
      
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {
                          "_id":"Id of user",
                          "author":"String",
                          "title":"String",
                          "image":"String",
                          "content":"String",
                          "slug":"String",
                          "category":"Id of category",
                          "createdAt":"Date"
                     },
            "message" : "Get data article by id"
        }
    ```

  - ### Change article by id (Admin)
    
   - Method : PUT
   - Endpoint : /articles/:id
   - Header :
    - Content-Type : application/json
    - Accept : application/json
    - authorization : JSON Web Token
      
   - Parameter :
    
    `id of article`
  
   - Body :
    
    ```javascript
        "author":"Id of user - required",
        "title":"String - required",
        "image":"String - required",
        "content":"String - required",
        "slug":"String - required",
        "category":"Id of category - required"
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was change a article by id"
        }
    ```

  - ### Store article (Admin)
    
   - Method : POST
   - Endpoint : /articles/
   - Header :
    - Content-Type : application/json
    - Accept : application/json
     - authorization : JSON Web Token
      
   - Body :
    
    ```javascript
        {
            "author":"Id of user - required",
            "title":"String - required",
            "image":"String - required",
            "content":"String - required",
            "slug":"String - required",
            "category":"Id of category - required"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was listed a article"
        }
    ```

  - ### Delete article by id (Admin)
    
   - Method : DELETE
   - Endpoint : /articles/:id
   - Header :
    - Content-Type : application/json
    - Accept : application/json
    - authorization : JSON Web Token
      
    - Parameter :
    
    `id of article`
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted a article"
        }
    ```

  - ### Delete all article (Admin)

   - Method : DELETE
   - Endpoint : /articles/
   - Header :
    - Content-Type : application/json
    - Accept : application/json
    - authorization : JSON Web Token

    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted all articles"
        }
    ```

- ## categories
  - ### Get all categories (User & Admin)
  
   - Method : GET
   - Endpoint : /categories/
   - Header :
    - Accept : application/json

   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {[
                          "_id":"String",
                          "category":"String",
                          "createdAt":"Date"
                     ]},
            "message" : "Get all data categories"
        }
    ```
  
  - ### Get category by id (User & Admin)

   - Method : GET
   - Endpoint : /categories/:id
   - Header :
    - Accept : application/json
      
   - Parameter :
    
    `id of category`
      
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {
                          "_id":"String",
                          "category":"String",
                          "createdAt":"Date"
                     },
            "message" : "Get data category by id"
        }
    ```

  - ### Change category by id (Admin)

   - Method : PUT
   - Endpoint : /categories/:id
   - Header :
    - Content-Type : application/json
    - Accept : application/json
    - authorization : JSON Web Token
      
   - Parameter :
    
    `id of category`
  
   - Body :
    
    ```javascript
        "category":"String - required"
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was change a category by id"
        }
    ```

  - ### Store category (Admin)

   - Method : POST
   - Endpoint : /categories/
   - Header :
    - Content-Type : application/json
     - Accept : application/json
     - authorization : JSON Web Token
      
   - Body :
    
    ```javascript
        {
            "category":"String - required"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was listed a category"
        }
    ```

  - ### Delete category by id (Admin)

   - Method : DELETE
   - Endpoint : /categories/:id
   - Header :
    - Content-Type : application/json
    - Accept : application/json
    - authorization : JSON Web Token
      
    - Parameter :
    
    `id of category`
    
    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted a category"
        }
    ```

  - ### Delete all category (Admin)

   - Method : DELETE
   - Endpoint : /categories/
   - Header :
    - Content-Type : application/json
    - Accept : application/json
    - authorization : JSON Web Token

    - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted all categories"
        }
    ```

- ## comments
  - ### Get all comment by article id (User & Admin)

   - Method : GET
   - Endpoint : /comments/:id
   - Header :
    - Accept : application/json
      
   - Parameter :
    
    `id of article`
      
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {
                          "_id":"String",
                          "comment":"String",
                          "user":"Id of user",
                          "article":"Id of article"
                     },
            "message" : "Get data comments in article with id : xxx"
        }
    ```

  - ### Store comment by article id (User & Admin)

   - Method : POST
   - Endpoint : /comments/:id
   - Header :
    - Content-Type : application/json
     - Accept : application/json
     - authorization : JSON Web Token

   - Parameter :
    
    `id of article`
      
   - Body :
    
    ```javascript
        {
            "comment":"String - mininum length 1",
            "user":"Id of user"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was commented the article with id : xxx"
        }
    ```

  - ### Delete a comment by people who commented in the article (User & Admin)

   - Method : DELETE
   - Endpoint : /comments/:id
   - Header :
    - Content-Type : application/json
     - Accept : application/json
     - authorization : JSON Web Token

   - Parameter :
    
    `id of article`
      
   - Body :
    
    ```javascript
        {
            "_id":"String",
            "user":"Id of user"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was deleted your comment in the article with id xxx"
        }
    ```

- ## likes
  - ### Get all like by article id (User & Admin)

   - Method : GET
   - Endpoint : /likes/:id
   - Header :
    - Accept : application/json
      
   - Parameter :
    
    `id of article`
      
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "data" : {
                          "_id":"String",
                          "user":"Id of user",
                          "article":"Id of article"
                     },
            "message" : "Datas Likes in id: xxx"
        }
    ```

  - ### Lked a article by article id (User & Admin)
  
   - Method : POST
   - Endpoint : /likes/:id
   - Header :
    - Content-Type : application/json
     - Accept : application/json
     - authorization : JSON Web Token

   - Parameter :
    
    `id of article`
      
   - Body :
    
    ```javascript
        {
            "user":"Id of user"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was liked the article"
        }
    ```

  - ### Unliked a acrticle by article id and id people who liked before (User & Admin)

   - Method : DELETE
   - Endpoint : /likes/:id
   - Header :
    - Content-Type : application/json
     - Accept : application/json
     - authorization : JSON Web Token

   - Parameter :
    
    `id of article`
      
   - Body :
    
    ```javascript
        {
            "_id":"String",
            "user":"Id of user"
        }
    ```
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "You was unliked the article"
        }
    ```
