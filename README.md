# BE-28---Restfull-API-AYF

# API Specification

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

  - ### Register
    Request :

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
  
    Request :

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
  - ### Change Password (User & Admin)
  - ### Change Profile (User & Admin)
  - ### Show Profile (User & Admin)

- ## Genders
  - ### Get all genders (User & Admin)
  - ### Get gender by id (User & Admin)
  - ### Change gender by id (Admin)
  - ### Store gender (Admin)
  - ### Delete gender by id (Admin)
  - ### Delete all gender (Admin)

- ## Roles
  - ### Get all roles (User & Admin)
  - ### Get role by id (User & Admin)
  - ### Change role by id (Admin)
  - ### Store role (Admin)
  - ### Delete role by id (Admin)
  - ### Delete all role (Admin)

- ## Countries
  - ### Get all countries (User & Admin)
  - ### Get country by id (User & Admin)
  - ### Change country by id (Admin)
  - ### Store country (Admin)
  - ### Delete country by id (Admin)
  - ### Delete all country (Admin)

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
