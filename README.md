# Artistify Crud Gang

Hey Squad !  
A poor client got in conflict with the developers making his web application !  
He came to us to help him finish the App.  
The application already contains some logic, let's add some features !

## The backend

### 1 - artists router

Create all the logic that will allow us to perform some CRUD operations on the Artist model.  
Our backend is now an API, we do not send/render an html page as a result, instead we will send some json. ;)

Endpoints

GET /artists => get's us all the artists from the database.  
GET /artists/:id get's us one artist matching an id.  
POST /artists => create an artist.  
PATCH /artists/:id => updates an artist with the specified id.  
/DELETE /artists/:id => deletes an artist with the specified id.

**Test your endpoints using POSTMAN**

### 2 - albums router

Endpoints

GET /albums => get's us all the albums from the database.  
GET /albums/:id get's us one album matching an id.  
POST /albums => create an album.  
PATCH /albums/:id => updates an album with the specified id.  
/DELETE /albums/:id => deletes an album with the specified id.

**Test your endpoints using POSTMAN**

## The frontend

Most of the application is already ready.

Frontend endpoints:

/artists => displays a list of all the artists in the DB. :)  
/artists/:id => displays one artist. Show the name / style / description

/albums => displays a list of all the artists in the DB. :)  
/artists/:id => displays one album. Show the cover / name / release date and label.

/admin/artists => Displays a table containing all the artists from the DB.  
=> Display the name / release date / label / edit link / delete button  
=> The edit link brings us to /admin/artists/edit/:the-id-of-the-artist  
=> The delete button deletes the artist from the database and removes the artist from the table.

/admin/albums => Displays a table containing all the albums from the DB.  
=> Display the name / style / edit link / delete button  
=> The edit link brings us to /admin/albums/edit/:the-id-of-the-album  
=> The delete button deletes the artist from the database and removes the artist from the table.

/admin/artists/create => Form Component to create an artist  
=> Make the user go back to /admin/artists when the post is successful

/admin/albums/create => Form Component to create an album  
=> Make the user go back to /admin/albums when the post is successful

/admin/artists/edit/:id => Form Component to edit an artist  
=> Make the user go back to /admin/artists when the patch is successful

/admin/albums/edit/:id => Form Component to edit an album  
=> Make the user go back to /admin/albums when the patch is successful
