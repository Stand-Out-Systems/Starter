# Starter
This starter was created from an Angular 6 template, but any version of Angular greater than 2 should work. Angular cli makes it easier to work with angular projects, install that here - https://cli.angular.io/ .

## Developer Guide:

### Database setup:
- Create a database that the app will connect to by executing the following statements in the mysql console:

  - mysql> create database beers_example; -- Creates the new database
  - mysql> create user 'springuser'@'%' identified by 'ThePassword'; -- Creates the user
  - mysql> grant all on db_example.* to 'springuser'@'%'; -- Gives all privileges to the new user on the newly created database


### Server setup:
- Clone repository.
- Open up 'Server' in IDE.
- Go to 'DemoApplication.java', right click and select 'Run as Spring Boot application.'
* When the application has started you should see this:
![Server](https://github.com/Stand-Out-Systems/Starter/blob/master/Images/SpringRunner.PNG)


### Client setup:
- In command line, cd into client folder.
- Run 'npm install' to get dependencies.
- Run 'ng serve' to start the web server.
- Navigate to 'http://localhost:4200/'.
* You should see this:
!![UI](https://github.com/Stand-Out-Systems/Starter/blob/master/Images/UI.PNG)

- Perform CRUD operations on the list. If you add a new item, in the background a giph will automatically get attatched to that item that is related to the item name.

### Useful Links:
[Spring Boot starter app with Angular](https://developer.okta.com/blog/2017/04/26/bootiful-development-with-spring-boot-and-angular).
[Turn this into a PWA](https://developer.okta.com/blog/2017/05/09/progressive-web-applications-with-angular-and-spring-boot) (Haven't done this yet).
[Angular Material](https://material.angular.io/components/input/overview).

