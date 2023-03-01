## Description
This project is the CMS where the NextJS will retrieve the data that fills all dynamic pages.
It's an open-source free CMS called Strapi, with a huge community

## System Requirements
Node.js 14.6.0 or newer (recommended version 18.0.0+)
Download it [here](https://nodejs.org/en/download/)

MacOS, Windows (including WSL), and Linux are supported

npm or Yarn

## Getting Started

**First, include the .env file and the data zip file on the project's root**

*This data file is used to sync the data that I use during development with you, as this CMS uses a local database to store the content*

Next, install the dependencies:

```bash
npm install
# or
yarn
```

Next, import existing data files with this command:
```bash
npm run strapi import -f your-filepath-and-filename
Example: npm run strapi import -f export_20230301171137.tar.gz
# or
yarn strapi import -f your-filepath-and-filename
Example: yarn strapi import -f export_20230301171137.tar.gz  
```

(If some error occurs while importing the data file, please try to import with Yarn. You can install here: https://yarnpkg.com/getting-started/install)

Then, run the development server:

```bash
npm run develop
# or
yarn develop
```

The develop command should open the admin dashboard automatically.
But if it doesn't, it will be running at: http://localhost:1337/admin/


## Managing content

If it's the first time accessing the CMS dashboard, it will be asked to create an Admin User.

The only section you should pay attention to now is the ***Content Manager*** appears as the first option on the left side panel.

There you be able to see the contents that fill the NextJS application.

In this first version, you will be able to see the *Member Collection*, which fills the Members of the *About page*. In this collection, you can insert, update and delete the members. 

***If you make any change, it will only make an effect if you Save and Publish.***

After saving and publishing, you will be able to see the changes on the NextJS application if it's already running. Just reload the page.

For now, only the About page has dynamic content. The Learn and Jobs page will also be dynamic for the next steps.
