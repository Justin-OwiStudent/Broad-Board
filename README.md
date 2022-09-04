

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/MikeMaynard14/termoneexample)
![GitHub watchers](https://img.shields.io/github/watchers/MikeMaynard14/termoneexample)
![GitHub language count](https://img.shields.io/github/languages/count/MikeMaynard14/termoneexample)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/MikeMaynard14/termoneexample)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Justin Koster</h5>
<h5 align="center" style="padding:0;margin:0;">200100</h5>
<h6 align="center">DV203 - Term 3 | 2022</h6>
</br>
<p align="center">

  <a href="https://github.com/Justin-OwiStudent/Broad-Board/issues">
    <img src="https://github.com/Justin-OwiStudent/Broad-Board/blob/main/client/src/components/images/BoardLogo.png" alt="Logo" width="250" height="140">
  </a>
  
  <h3 align="center">Medi Plus</h3>

  <p align="center">
    A Ecommerce website based on selling skateboards, using MongoDB as a backend service to controll all the data  <br>
   
    
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/Justin-OwiStudent/Broad-Board/issues">Report Bug</a>
    ·
    <a href="https://github.com/Justin-OwiStudent/Broad-Board/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Wireframes](#wireframes)
   * [Custom UI](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](https://github.com/Justin-OwiStudent/Broad-Board/blob/main/Mockups/Mockup1.png)

### Project Description

This SPA project was created in React.js alongside MongoDB, React was used as the frontend framework, MongoDB was used to control the backend and all the data for the site. There is an admin section where the owner can control the stock as well as an order page where the owner can see what ongoing orders there are. 

### Built With

* [React](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/)



<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own machines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/Justin-OwiStudent/Broad-Board` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/Justin-OwiStudent/Broad-Board
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm i install
   ```


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

On this site you are able to view all the available stock, you are able to view the product on an individual page. you can order items and checkout to create an order. The admin section of this site allows the admin to add products, delete products, as well as update the stock, name, description and prices of an individual product.
<!-- note how you can use your gitHub link. Just make a path to your assets folder -->


### All the Boards you can think of !
There is a wide selection of Boards available to choose from as well as a variety of sizes for each board.


![image2](https://github.com/Justin-OwiStudent/Broad-Board/blob/main/Mockups/Mockup9.png)
### Feature 2

Here you are able to view all the available products on the store, these are all dynamically generated based on the data from the database.

![image3](https://github.com/Justin-OwiStudent/Broad-Board/blob/main/Mockups/Mockup10.png)
### Feature 3

Here you can see all the products on the admin side, you can add more products as well as update them or delete them, when updating any item it will change the information on all pages.

![image4](https://github.com/Justin-OwiStudent/Broad-Board/blob/main/Mockups/Mockup3.png)



<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wire framing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

Initially i had a very good idea of what i wanted this project to look like, moving through the project a lot of styling changes was made to better accommodate the data and the way the data works for this project.


<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

I made use of MongoDB for this project, i found mongo to be much more efficient and more user friendly than that of other database frameworks like PHP. My understanding with the frontend of react became much more fluent, i learnt a lot more and became much more comfortable with the framework so the process was much much smoother and efficient.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* React.JS project started and UI made.
* Implemented Routing with `React-Router v6`.
* Mongo was implemented
* Created all the routes for the project, the routes "control" the axios requests.
* i implemented CRUD functionality that works across my whole project, the updating and deleting on the admin pages manage the product data all across the site and everything changes dynamically.

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* I became much more efficient and comfortable with react, just emphasising more how powerfull and fun it is to work with.
* I got introduced to MongoDB, which i found very efficient to work with and user friendly, its very straight forward and the errors are easily established and clear to work through.
* My workflow with react became much more fluant as i have became much more confidant in my react skills


#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* The biggest challenge i faced was to carry over the product that i wanted to add to my cart, then move to checkout and finally to the order list.
* I had some problems with the update part of the CRUD for this project, there were problems with my props carrying through but after some analysis i managed to fix the problem.


<!-- #### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?

* 
*  -->
### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Future implementation for this project i would like to add a wider variety of products for skateboards, like trucks, wheels, grips and bearings.
* Make a cleaner and more user friendly design for my project.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image9](https://github.com/Justin-OwiStudent/Broad-Board/blob/main/Mockups/Mockup5.png)
<br>


<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://www.youtube.com/watch?v=TPi5LbfuBtc)


See the [open issues](https://github.com/Justin-OwiStudent/Receptionist-App/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Justin Koster** - [Justin-Owistudent](https://github.com/Justin-OwiStudent)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Justin Koster** - [200100@virtualwindow.co.za](200100@virtualwindow.co.za)  
* **Project Link** - https://github.com/Justin-OwiStudent/Receptionist-App

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [pngegg](https://www.pngegg.com/)
* [flaticon](https://www.flaticon.com/)
* [flaticon](https://www.flaticon.com/)


