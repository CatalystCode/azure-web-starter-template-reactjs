<img src="https://cloud.githubusercontent.com/assets/7635865/11383036/781f2cee-92d3-11e5-98b9-91eb7f29e540.png" width="500" height="100"/><br>
<img src="https://cloud.githubusercontent.com/assets/7635865/11382863/6505a116-92d2-11e5-965f-33dba073d0a5.png" width="500" height="300"/>

# Starter Template for Dokku Linux Azure Web App
A starter template for a NodeJS web application running on Microsoft Azure. This repo is a starting point for developers that would like a production ready fullstack site running on Azure.This project is intended for web applications running on the react/flux platform, and we are working towards offering the same for Angular 2 and Ember. This is an unopinionated project, that enables developers to kickoff a web project running off any framework or CI deployment solution. 

This particular project is running off a Dokku Azure Linux VM, thanks to Steven Edouard's recent work with the folks at Dokku and Azure. You can follow these [instructions](https://github.com/sedouard/case-studies-1/blob/case_study_dokku_azure/_posts/2015-10-26-Streamlined-Dokku-Deployment.md#deploying-dokku-to-azure---the-easy-way) to get started.

This project provides boilerplated capabilities for integrating Azure Active directory authentication and Application Insight logging. Both features are optional and ignored when setup is pending. 

##### Assumptions
 1. Azure Linux Web App is Online - Please follow these [instructions](https://github.com/sedouard/case-studies-1/blob/case_study_dokku_azure/_posts/2015-10-26-Streamlined-Dokku-Deployment.md#deploying-dokku-to-azure---the-easy-way)

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
 1. Travis CI Deployment to Dokku Azure VM

This repo comes bundled with travis deployment scripts that will deploy your web app builds to Azure on Git push events. You will need Ruby installed in order to use the Travis CLI tool and also access to both the Dokku Deploy and Dokku VM SSH keys, from the Dokku Web App setup. 
 
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
