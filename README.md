# The All-Star React Development Initiative Squad (TARDIS)

Summative assignment for BS3206 Advanced Software Development.

## Pre-requisite Software

In order to run this site locally and make changes to the repository, a number of pieces of software and configuration is required.

The following software is required:

- Git
- Node.js
- Visual Studio Code (or any other code editor)

The following software is highly reccomended:

- Git Bash (if developing on Windows)
- Insomnia (or any other API interface software)

A MongoDB compatible database is also required. This can either be installed locally or created in the cloud, for example with an Azure Cosmos DB.

## Clone and Run Locally

To run this locally and devleop, the repository needs to be cloned and the node dependencies need to be installed.

1. Open a terminal (Git Bash on Windows, Bash on Linux, Zsh on MacOS).
1. Clone this repository by running `git clone https://github.com/rhi-di/tardis.git <desired local path>`.
1. Move into the cloned respository by running `cd <local path>` where "local path" matches the directory above.
1. Run `git status` and verify that you are on the `master` branch.
1. Run `ls` and confirm that `client` and `server` directories are present.
1. Move into each of these directories by running `cd <client / server>` and then run `npm install` to install the required dependencies.
1. Run `npm start` in the server directory to start the API server.
1. Open another terminal session and run `npm start` in the `client` directory. A window should pop up in your default browser with the barebones homepage.

## Development Best Practices

1. Do not develop on the `master` branch. This branch should be kept as the golden copy of the site, i.e. nothing should go into this branch without it being tested and reviewed. To implement new features, create a branch by clicking on **Branches -> New branch**. Branches should be named by the feature they include, for example the branch containing code to implement the calendar should be named `feature/calendar`. Source branch should be `master`.
1. Raise a Pull Request when you are ready to merge work from your branch into `master`. This can be done by navigating to **Pull Requests -> New pull request**. Leave `base` as `master` and change `compare` to your branch. Then click **Create pull request** and ask another member of the team to review it.
1. Keep all CSS required for the site in `client/src/App.css`. This will be used across all pages in the project and helps maintain consistency in the design of the different webpages.
1. Think about reusability. Components can be reused which helps keep code tidy. An example of this is in `client/src/pages/Header.js`. The code is defined here but included in `client/src/App.js` which means it is used across all pages.
1. Think about consistency. Common CSS helps, but make sure that design choices are consistent with the look and feel of the rest of the project.
1. Please keep code neat and readable. See [this node style guide](https://github.com/felixge/node-style-guide) for styling best practises or install ESLint.
1. Where you create a POST request, you should return the request body to the user as confirmation that the request was successful. Bear in mind where this may contain sensitive information that we may not want to return, for example hashed user credentials.

## How do I

### Add a new page?

Create a file under `client/src/pages/` with the desired name of the page, e.g. Calendar.js, and edit `client/src/App.js` to create a new route for this page. The `client/src/pages/Header.js` file should then be edited to add a new link to the navbar. You can look at existing pages for specifics on what code is required to implement this.  

### Add a new API endpoint?

If the endpoint sits beneath an existing endpoint, e.g. you want to create a `/users/byId` endpoint where `/users` already exists, you can open the `server/routes/Users.js` file, copy an existing route, and change the first parameter of `router.post` to your desired endpoint.

If it is an entirely new endpoint then a new file needs to be created under `server/routes/`, e.g. `CalendarEvents.js`. Copy the contents of an existing file and remove the code that is not required. The new route and router will then need to be defined in `server/index.js`.

### Connect to a database?

The code relies on envrionment variables to connect to the database. Two variables are required, `DB_STRING` must contain the connection string and `DB_NAME` must contain the name of the database.

## Other Information

1. Everything to so with the webpages is contained within the `client` directory and everything for the API is contained within the `server` directory.
1. Some files are excluded from git version control, for example the `node_modules` directories and any build artefacts. If you think files are being wrongly excluded, or you want to add some to exclude, then please edit the `.gitignore` file in the root of the repository.
1. The `nodemon` package is used as part of the `npm start` command in the `server`. This means that every time a file is changed and saved within the `server` directory, the server will restart so these changes take effect.

## Useful Links

[git - the simple guide](https://rogerdudler.github.io/git-guide/)

[Oh Shit, Git!?!](https://ohshitgit.com)
