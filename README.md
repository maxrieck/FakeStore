React Fake Store is a simple e-commerce web application built with React and 
uses the Fake Store API as its backend data source. The project demonstrates 
how to build a product catalog, product detail pages, add/edit/delete product 
functionality, and a basic shopping cart using modern React features and libraries.

The application is structured around several main components:

ProductList: Fetches and displays all products from the Fake Store API. Each product is shown with an image, title, 
             and price. Clicking a product takes you to its detail page.
ProductDetails: Shows detailed information about a single product, including image, description, price, and category.
                From here, you can add the product to the cart, edit, or delete it.
AddProduct: Provides a form to add a new product to the store. The form collects product details and submits them to the API.

EditProduct: Lets you update an existing product’s information.

NavBar: Provides navigation links to the main sections of the app.

Home: A simple landing page.

Routing is handled with React Router, so users can navigate between the home page, product list, product details, add/edit forms, and the cart. 
The UI uses React Bootstrap for a responsive and modern look.

All product data is fetched from https://fakestoreapi.com/, and actions like adding, editing, or deleting products use the API’s POST, PUT, and DELETE endpoints.

To run the project, clone the repository, run npm install to install dependencies, and then npm start to launch the development server. 
The app will be available at http://localhost:3000.

This project is intended as a learning resource for React, API integration, and basic CRUD operations in a single-page application. 
It does not include authentication or payment processing and is not intended for production use.
