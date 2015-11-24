<img src="https://cloud.githubusercontent.com/assets/7635865/11227181/833d645a-8d52-11e5-96fd-d8a11d064ba3.jpg" width="200" height="100"/>
# AzureWebStarterTemplateReactJS
A starter template for a NodeJS web application running on Microsoft Azure. This repo is a starting point for developers that would like a production ready fullstack site running on Azure.This project is intended for web applications running on the react/flux platform, and we are working towards offering the same for Angular 2 and Ember. This is an unopinionated project, which enables developers to plugin any of there own framework or CI deployment solution. I decided to use Azure Deploy/Kudu for this project as it's the default for Azure, which is fully in your own control.  

##### Installation
```
git clone https://github.com/CatalystCode/AzureWebStarterTemplateReactJS.git
npm run setup
```

##### Project Build / Start
```
grunt build
npm start
```

##### Packaged Components

######Deployment
 1. Azure CI via Kudu deployment scripts

Azure deploy is the default continous integration agent by default, but can be changed to something like Dokku at anytime. This project comes bundled with a deploy.sh file which you should never have to touch. You can refer to the blog on how to setup deployment through the azure portal. [Azure Deployment Steps]( https://azure.microsoft.com/en-us/documentation/articles/web-sites-publish-source-control/)
 
######Testing

 1. PhantomJS
 2. Karma
 3. Mocha 
 4. Sinon
 5. ESLint
 6. React Test Utils 

For Test-Driven Development, open up a second command window and run 
```
grunt test-dev
```

The project comes bundled with a Karma test harness and PhantomJS. All JS test scripts in the /tests directory will automatically re-run when any file(s) change. 

**Configuration**

1. Azure Cloud Config Settings

**Front-end**

1. ReactJS 
2. Flux

**Event Processing**

1. RxJS

**Interface component**

1. Bootstrap
2. Font awesome
3. JQuery
4. Bootstrap Notifier

**Starter Template layout**

**Authentication**

1. Active directory

**Web Routing**

1. react-router

**Asset pipeline automation**

1. grunt tasks that cover css/js minifacation, unification
2. Browserify
3. Babel

**3rd party components**

1. bower

**Web server**

1. node
2. express

**Logging**

1. Application Insights

**
