# Rocket🚀QA API

This application has to objective to teach about API Test Automation using the Robot Framework during a Masterclass at Sensedia Academy. Using Node.js and Mongo DB, were development a two APIs where the first create and authenticate a user through of a token. The second API performs a CRUD of a Project.
#

## Download MongoDB Community Server
To run the application, you need install Mongo DB (case you don’t installed).

         Download in: https://www.mongodb.com/try/download/community 

On the page, choose your OS and download (as in the image)

![Page MongoDB Community Server](./images/1.png)

and then do the standard Windows install: next, next, finish.

With Mongo installed, open your terminal and type **mongod** to run your Mongo server.

![prompt comand MongoDB](./images/2.png)
#

## Node
        Download in: https://nodejs.org/en/download/

**1 - Download Windows Installer**

First, you need to download the Windows Installer (.msi) file from the official Node.js website. This MSI installer database carries a collection of installer files essential to install, update, or modify the existing Node.js version.

Notably, the installer also carries the Node.js package manager (npm) within it. It means you don’t need to install the npm separately.

When downloading, select the correct version as per your operating system. For example, if you’re using a 64-bit operating system, download the 64-bit version, and if you’re using the 32-bit version, download the 32-bit version:

![Install Node.js](./images/3.png)

**2 - Begin the Installation Process**

Once you open and run the .msi file, the installation process begins. But you have to set a few parameters before running the installation process.

Double-click on the installer file and run it. The installer will ask you to accept the Node.js license agreement. To move forward, check the “I accept” box and click Next:

![Install Node.js](./images/4.png)

Then, select the destination where you want to install Node.js. If you don’t want to change the directory, go with the Windows default location and click the Next button again.

![Install Node.js](./images/5.png)

The next screen will show you custom setup options. If you want a standard installation with the Node.js default features, click the Next button. Otherwise, you can select your specific elements from the icons in the tree before clicking Next:

![Install Node.js](./images/6.png)

Node.js offers you options to install tools for native modules. If you’re interested in these, click the checkbox to mark your preferences, or click Next to move forward with the default:
![Install Node.js](./images/7.png)

**3 - Run Node.js Installation on Windows**

Lastly — and this is the easiest part of all — click the Install button to begin the installation process:

![Install Node.js](./images/8.png)

The system will complete the installation within a few seconds or minutes and show you a success message. Click on the Finish button to close the Node.js installer.

![Install Node.js](./images/9.png)

**4 - Verify Node.js Installation**

So the installation process is completed. Now, you have to check whether Node.js is successfully installed or not.

To verify the installation and confirm whether the correct version was installed, open your PC’s command prompt and enter the following command:
        
        Node --version

And to check the npm version, run this command:

        npm --version

If the Node.js version and npm are correctly installed, you’ll see the version name in the CMD prompt.

***For Mac and Linux installation visit:* https://kinsta.com/blog/how-to-install-node-js/**
#

## Running Application
With our database and Node installed and configured, now let's install the necessary packages and run the application. In your IDE's terminal, run the script below:

* **To install project dependencies:**

        npm install

* **To run the application server:** 

        npm start

* **To access API documentation:**

        http://localhost:1302/api-docs/

This is the image you should see in your IDE's terminal:

![Server Running](./images/10.png)

And in browser:

![Swagger API](./images/11.png)
