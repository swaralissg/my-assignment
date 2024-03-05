# React + Vite

USER PROFILE DASHBOARD 


#Introduction 

This is a personal user dashboard application using React.js that displays a user's personal
information, a to-do list, and the current weather in their city. 


#Description

This is a responsive dashboard application. It uses functional components and hooks through out the application. The homepage does contain a navigation bar and a few extra links on the sidebar. However, they are non-functional and are only present for presentation as well as in order to demonstrate responsiveness. 

The hompage consists of panel containing a list of users. This panel has been assigned a scroll functionality in order to view all the users. It contains a profile card that dynamically displays the user's information (name, email, image, city). 

The bottom consists of a todo list that allows users to add items , delete them and mark them as checked. It also consists of a weather app built using fancy CSS elements that displays weather related information upon entering the user's city name.


#Installation 

- Install Node js
- clone the repository 
- open the folder in vs code
- open the terminal on your machine enter the project folder
- npm install
- run npm install recharts react-icons
- run npm install react-router-dom --save
- npm i bootstrap --save
- npm run dev


#Requirements

-VS studio code
-Node js preinstalled 
-Router Module installed
-React framework installed
-Bootstrap installed


#Components and CSS used 

Functional components have been used throughout the app. 
4 main components were used :-
1)Homepage component
2)Weather App component 
3)To do List component
4)User Profiles Component
icons/svg vectors were used and imported as images in some places. 
Creative CSS was used to acieve certain effects like (linear gradient background effect in the weather app, gif image in the weather app , button hover functionlity etc. )


#Functionalities 

-Homepage Component is rendered in the app component. 
-UserProfiles Component has been rendered on Homepage component. 
-Weather component and To-do-list component have been rendered on UserprofilesComponent.

-Bootstrap was installed and its various classed were used to achieve responsiveness

-React Router has been imported from 'react-router-dom' and has been used to navigate between different pages/components. 
     -Only 4 links are on the sidebar are functional :-
     -Dashboard link takes you the main page/homepage 
     -User profiles links takes you to the user profiles page
     -weather statistics links takes you to the weather app page
     to do list link takes you to the to-do-list page. 

-Weather Component :-
Weather component displays the current weather statistics (e.g. temperature, weather conditions , user's city and other weather details).
OpenWeatherMap API has been used in order to fetch weather. The city is given as input by the user.

-To Do List component :-
This allows users to add, delete, and mark tasks as completed. It uses state to manage the list of tasks. This component also includes a form to add new tasks to the list.

User Profile Component :-
It consists of a panel containing a list of users. This panel has been assigned a scroll functionality in order to view all the users. It contains a profile card that dynamically displays the user's information (name, email, image, city) upon clicking on the view profile button. The user's information is hardcoded into the state.


#Author
Swarali Sandeep Ghalwadkar
