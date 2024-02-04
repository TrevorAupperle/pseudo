# Pseudo

## What is Pseudo?

In short, our vision for Pseudo was to create an application that would resemble the child of LinkedIn and Stackoverflow. With a primary objective of providing developers with a place to connect with some of the best in the industry, Pseudo aims to embrace the sense of community that has always existed within the software field in a new way. 

Whether you may be looking for insight on your journey to a career in software, or to bounce project ideas off of some of the brightest minds in the industry, Pseudo looks to provide ample opportunity to learn, grow, and make connections with students and professionals alike.

## How is Pseudo structured?

This application is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

In order to run the application, you should refer to the following steps:

1. First, clone the repository:
```CLI
git clone https://github.com/TrevorAupperle/pseudo.git
```

2. Next, install node modules:
```CLI
npm install
```

3. After installing Node modules, you will need to prepare you environmental variables. To do so, begin by entering the root directory:
```CLI
cd pseudo
```
```CLI
code .
```
Once the project is opened, create the environment variables file:
```CLI
touch .env.local
```
Next, input the following into the file:
```.env
AUTH0_SECRET= 'YOUR_AUTH0_SECRET_HERE'
AUTH0_BASE_URL= 'http://localhost:3000'
AUTH0_ISSUER_BASE_URL= 'YOUR_AUTH0_DOMAIN'
AUTH0_CLIENT_ID= 'YOUR_CLIENT_ID'
AUTH0_CLIENT_SECRET= 'YOUR_AUTH0_CLIENT_SECRET_HERE'

```

###Please note that you MUST visit https://auth0.com/ and create a free account, where you can set up your first application under a free tenant that will contain all of this information.

## What's next? How do I run the application?

Once you have setup the environmental variables, running the application is as easy as executing the following command:
```CLI
npm run dev
```

From here, you can utilize the Auth0 authentication to signup/sign-in either with an email + password combination, or through one of the connected social platforms.



If you are not familiar with the different technologies used in this project, please refer to the respective docs:

- [Next.js](https://nextjs.org)
- [Auth0](https://auth0.com/docs)
- [MongoDB](https://www.mongodb.com/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

