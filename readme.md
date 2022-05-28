# Overview #


## Features  (Unorganized for now) ##   

- Be able to login/register (be able to reset password?).
- Once a user logs in, their login session persists. I.e, they do not need to relogin everytime they reload the page. 
- A logged in user is directed to the home page. The home page consists of the posts of the people the user follows. 
<br><br>
- The user can use the create post page to upload a post. At first we can limit the website to support only text posts, then we can move onto images too.
- The user can change their username/password/profile image/bio. 
- The user can delete any of their posts.
<br><br>  
- Be able to follow other people by sending follow requests.
- Once a user follows another user, the **requestee can see the requester's posts.** Not the other way around! (Think facebook vs instagram/twitter).
- Can consider the block user feature.
- All hosted images must be PROTECTED. Otherwise anyone can view the photo with a link. Even with a link, the users browser should be logged in AND the user should follow the other user. 

<br>

## Front End ##
- **Framework**: React *[typescript optional]*
- **Client Side Rendering**: React Router *[choose between CSR & SSR]*
<br>

## Back End ##
- **Language**: NodeJS *[typescript optional]*  **OR** PHP  Laravel
- **Database**: (*For post data->* MySQL) **AND** (*For user login data ->* MySQL OR Google Firebase(NoSQL) )
- **Server Side Rendering(SSR)**: NextJS **OR** NuxtJS
- **Auth**: ExpressJS/Express-Session/bCrypt **OR** Google Firebase
  