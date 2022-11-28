import React from 'react';

const Blog = () => {
    return (
        <div className='text-justify'>
            <div>
                <h1 className='font-semibold text-xl my-2'>What are the different ways to manage a state in a React
                    application?</h1>
                <p>
                    There are four main types of state you need to properly manage in your React apps: <br />
                    <span className='font-semibold'> Local (UI) state –</span> Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.
                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                    There are four main types of state you need to properly manage in your React apps: <br />
                    <span className='font-semibold'> Global (UI) state –</span> Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    There are four main types of state you need to properly manage in your React apps: <br />
                    <span className='font-semibold'> Server state -</span> Data that comes from an external server that must be integrated with our UI state.
                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    There are four main types of state you need to properly manage in your React apps: <br />
                    <span className='font-semibold'> URL state –</span> Data that exists on our URLs, including the pathname and query parameters.
                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                </p>
            </div>
            <div>
                <h1 className='font-semibold text-xl my-2'>How does prototypical inheritance work?
                </h1>
                <p>
                    Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                </p>
            </div>
            <div>
                <h1 className='font-semibold text-xl my-2'>What is a unit test? Why should we write unit tests?
                </h1>
                <p>
                    Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                    In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.
                </p>
            </div>
            <div>
                <h1 className='font-semibold text-xl my-2'> React vs. Angular vs. Vue?
                </h1>
                <p>
                    <span className='font-semibold'>React: </span> The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. <br />
                    <span className='font-semibold'>Angular: </span>Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more. <br />
                    <span className='font-semibold'>Vue: </span>
                    Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.
                </p>
            </div>
        </div>
    );
};

export default Blog;
