### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  A JWT is a JSON web token and it allows for API authentication to be shared across multiple services. Everytime a request is made, the session is encoded and signed with a secret key. The token will consits of a header, payload and signature. The header contains metadata about the token, the payload contains the unencrypted encoded data (ex. user ID), and the signature is how the JWT gets signed with a secret key for authentication.

- What is the signature portion of the JWT?  What does it do?
  The signature portion uses the algorithm in the header to create a secret key which will be used for authentication to verify the datas authenticity.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, the attacker can see what's inside the payload once decoded, which is why the information in the payload should not be anything confidential. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  Using Node, you can install the jsonwebtoken package. You can then create tokens using the jwt.sign() method, decode the payload using jwt.decode(), and verify the token signature is valid using jwt.verify(). To implement this in an app, you could use middleware to authenticate the JWT token upon each route request, adding the payload to the request and verifying the payloads contents to allow for the desired authorization.

- Compare and contrast unit, integration and end-to-end tests.
  All three forms of testing are for the purpose of testing your application, however, each one will test different levels of your application. Unit tests are intended to test small individual functions of your app, testing each function independently. Integration tests are intended to test if multiple funtions of your app work together as a group as expected. Finally, end-to-end tests are for the purpose of testing final outputs of your app in real-world scenarios, to make sure all the moving parts are all working together from beginning to end. 

- What is a mock? What are some things you would mock?
  A mock is a type of test for the purpose of testing functions that would potentially have random outputs. A mock is typically for unit tests where you would like to test complex objects by isolating specific behaviors and creating predictable mocks of those objects. Mocks are useful when dealing with APIs since you can avoiding waiting for an API response using a mock. 

- What is continuous integration?
  Continuous integration is when you frequently merge small changes instead of waiting for larger sections of code to be complete before merging. This also involves testing in smaller increments.

- What is an environment variable and what are they used for?
  Environment variables are values that are defined by the user and can affect how the app runs. Environment variables often included sensitive data like passwords and keys and they are not uploaded to github. Theses variables are accessed using the process.env object.

- What is TDD? What are some benefits and drawbacks?
  TDD stands for Test Driven Development and it is a concept that involves writing your tests first, expecting them to fail, then writing the necessary code to make your tests pass. The benefits of TDD is that you will have a robust high quality code, ensuring that your application is working as expected throughout the development process. This also helps to make code easier to maintain and have a high test coverage. However, the TDD process can slow you down in terms of getting your app up and running quickly since it requires you to code your tests before your app, which can be time consuming . 

- What is the value of using JSONSchema for validation?
  JSONSchema is valubale to use for validation since it validates the structure and type of your data. It can help to verify for you if the data sent matches your desired format. Instead of having to add multiple if statements for each possible data format checking if it matches what you are expecting, you can use JSONSchema to check all of the requirements for the data at once and throw an error if anything does not match your structure/type.  

- What are some ways to decide which code to test?
  One way you can decide how much code to test is by looking at your test coverage. Ideally, you should be testing your code in three sections: unit testing, integration testing and end-to-end testing (as described above). Your code should be adequately tested in these 3 ways to ensure proper functionality of your code.  

- What does `RETURNING` do in SQL? When would you use it?
  RETURNING in SQL is helpful when using queries like UPDATE, INSERT, or DELETE to return a piece of information. It is helpful with those queries since they otherwise would not return any value, like SELECT would. It is helpful to have a return value from those queries to be able to perform some other action with those values. 

- What are some differences between Web Sockets and HTTP?
  They are both different types of protocols. One of the main differences is that HTTP is stateless while Web Sockets are stateful. This allows for a bidirectional open connection to be made between two clients and remain open to reflect any changes that are made in real-time. This is not possible with HTTP since it is a request/response protocol, meaning that the server only responds to a change when the client sends a request. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  So far, I prefer to use Express over Flask, but this might change in the future. This is my current preference since I am able to keep my entire stack in just one language instead of several. Additionally, I like the way I can organize middleware, errors, data structure authorization using JSONSchema, and authentication with JWTs. However, for smaller projects I want up and running quickly, I might still use Flask. 
