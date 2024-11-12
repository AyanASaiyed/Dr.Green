## Inspiration
Dr. Green, a mad botanist and AI enthusiast who resides in Greensville where there is a plant disease dilemma! It is literally, physically, and humanly impossible for him to attend all the plants and save them 😢! He decided to take the next best option, turning himself into an AI web app that is able to analyze pictures of plants and provide a description of the disease. This way he can help save as many plants as possible and **keep them green**!

## What it does
Uses Firebase Authentication to provide a protected route to the home page of the website. Upon successful login, the user is entered on the app. The backend is hooked up to an API that detects for plant diseases and lists the disease name. Upon insertion of the image, the image gets ran through the plant.id API which recognizes possible diseases and generates the disease on screen to inform the user.

## How we built it
We used React and TailwindCSS for frontend and Python's Flask framework for backend. The API used is the public plant.id API used to determine the possible disease. For Authentication, we used Firebase Authentication due to its quick implementation methods.

## Challenges we ran into
Hooking up the frontend to the backend proved a challenge since we were trying to use a base64 link and run that through to the backend.

## Accomplishments that we're proud of
We successfully creates a secure authentication system through the aid of Firebase resources and were able to successfully create a responsive and aesthetic frontend that is able to input the users picture input and convert the blob into a base64 url that the backend API is able to work with.

## What we learned
We learned that image processing is much more time and resource consuming than using API's and in times of pinch, training an ML model manually is way too risky as this may take a long time and produce unsatisfying results near the end.

## What's next for Dr.Green
We want to implement a user base that is able to store all the plants they have scanned. They should be able to create a "virtual garden" that stores all the plants they have scanned and keeps tracks of all the plants. Users will be able to upload 'update' pictures of their plants to make sure the plants are recovering well with the intended recovering plan.
