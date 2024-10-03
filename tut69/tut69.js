/* npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry

=>Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.
=>The CLI runs from a terminal, and is how most developers interact with npm.
=>The registry is a large public database of JavaScript software and the meta-information surrounding it.

npm : The node package manager , package manager for node.js modules
 npm help us to manage the packages
 node_modules folder mn wo sari dependencies stored hongi jo hm apny project mn use krna chahty hn
 if you delete the node_module folder then you can get it again by writing "nm install" commmand thsi command will isnatl all the dependencies again   

 The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.

All npm packages are defined in files called package.json.

The content of package.json must be written in JSON.

At least two fields must be present in the definition file: name and version.

Example: 
{
"name" : "foo",
"version" : "1.2.3",
"description" : "A package for fooing things",
"main" : "foo.js",
"keywords" : ["foo", "fool", "foolish"],
"author" : "John Doe",
"licence" : "ISC"
}

Managing Dependencies:
=>npm can manage dependencies.
=>npm can (in one command line) install all the dependencies of a project.
=>Dependencies are also defined in package.json.

You can publish any directory from your computer as long as the directory has a package.json file.

=> version: 1.3.5 is mager.minor.patch

Dev Dependencies: if you wan tto install any package which is only needed in developent time not in 
production time for example: nodemon  server hai jo automatically restart krne ki functionality deta hai 
npm install nodemon --save-dev
npm install nodemon --gloabl //for globally acccess

nodemon
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.
npm i is shortuct to install any module pkg
 ^ means exactly version ko install kry ga 
 ~ new patch agr aya h tu usy fetch k k install krdega latest version
 */ 


/**
 * NPM helps us to manage the packages in NodeJs. To understand this, we will make a new directory as tut69. Till now, we have only one file inside this directory i.e., tut69.js. But as soon as we write npm init on the terminal, it asks several questions like the package name, version, description, entry point, keyword, author, etc. When we execute this, there is a new file called package.json inside the tut69 directory.
 * NPM init has initialized this folder in terms of a node package. Now when we install any other dependency, it automatically gets added to this package. For example, if we write npm install slugify, the package.json file will automatically get updated 
 * In the same way, we can install or uninstall any of the packages from the directory. Besides all these things, we also get another folder called node.modules. It is a folder containing all the modules related to our project. If by mistake this folder gets deleted, we can recover it back by again installing npm by writing npm install.

If we want to install any specific version of the dependency, we can easily do that. For example, if want to install version 1.3.5 of slugify, we have to write as npm install slugify@1.3.5. As soon as write this, the version gets updated 
Let us now see what dev dependencies are. There are times when we want to install the packages only for development purposes, not for production purposes. In that case, dev dependencies are useful. The best example of this is nodemon. It gives us the server which automatically gets restart every time. 

To install this, we have to write-

npm install nodemon --save-dev
 */
console.log("This is tutorial 69"); 


