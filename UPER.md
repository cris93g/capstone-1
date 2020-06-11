<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
*Create a full functioning Eccomerce Site
*Need to create wire frames
*Need to create backend
*Need to Create Frontend
*products page
*search bar
*10 items
*quantity system
<h2>
    2. Planning the Solution
</h2>
*Gonna Start drawing my wireframes of each page needed
*gotta break down the projects into small things
*backend is gonna need authentication a db and a server
*front end needs to have styling might use sass
*theres gonna be alot of data moving around so might use redux
*front end needs to be broken down

<h2>
    3. Executing the Plan
</h2>
*Created a db in postgreSQL with diff columns like name price description...
*created a server thats gonna call on the backend to get info using express
*Redux will be my middleware using redux thunk I will call the routes in the server to store info
*Front end parts will get the info with useDispatch
*Added Auth0 to back end for authentication
*created a bunch of scss files to start styling 
*My cart items will be store in session so created a req.session.cart
<h2>
    4. Reflection / Refactor
</h2>
*This project made me aware how diff things work like how  a reducer is basically a funnel where it just compares the initial value to the changes.For the refactoring part
I need to do a lot of it i reused a bunch of components and code i could have made in a single file and just passed diff props to them.