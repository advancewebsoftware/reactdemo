Here are the code structure summary:
The main folder is src in which all the React Native code handled.
In src there are some folder like below.
api
assets
components
constants
modules
navigators
redux
types
theme
   1. api
       This folder contains all the API handle logic.
   2. assets
       This folders contains all the application assets like images, fonts etc.
   3. components
       This folder contains all the reusable custom components which are used in our application.
   4. modules
       This folder contains multiple sub folder which are modules of our application like all the screes.
   5. navigators
       This folder handles all the navigation logic and the navigators like stack, bottom tab, drawer.
   6. redux
       This folder handles all the redux logic like creating slice, root reducer, store, actions, reducers, etc.
   7. types
       This folder contains multiple files which contains all the global types used in application.
   8. theme
       This folder contains files like colors which include all the color theme, metric which include the scaling logic.

And in all the folder I used index file to export default so whenever we used that component or function it will import directly from main parent.
And I also used styles in different files in so it is easy to manage.
I also used custom hook to manage the JS logics. I have also added test cases.