# CGI hemtest

## Environment and Tools
Operating System: Linux with Ubuntu 20.04 as dist.  
IDE: Visual Studio Code  
Git Version: 2.29.2  
Node Version: 17.7.2  

## Intended use
This web-based API is intended to be used as a simple word counter. The user can provide a chunk of text which the API 
will process and then 10 most frequent occurring words in the text, together with a counter for each word representing 
how many times the word occurred in the text. It's important to note that any unnecessary whitespace being counter as a 
word. For example, texts like "  Banan  Hund" will generate the following response; **{"":3,"Banan":1,"Hund":1}**.

## Procedures
To develop this web-based API, I used Node.js together with the express module. To utilize the express module, you first 
need to install it using the *npm install express* command, as well as including the module inside the application using 
``const express = require('express');``. The express application itself is then created using ``const app = express();``. 
We also need to account for the fact that will accept input as plain text. Therefor, we tell the application to use 
express.text() (using ``app.use(express.json());``), a built-in middleware in express that interprets incoming data as 
plain text. This way, the application does not try to convert the incoming data to JSON format. Then, we set up a route 
handling incoming POST request, where the text provided by the user is fetched from the request body. We then initialize 
an empty JavaScript object (acting as a dictionary), loop through each word in the user text. The object is then 
continuously filled with words and their corresponding word counters. If the current word exists in the object, we 
simply increment its counter with 1, if the word doesn't exist, we add it to the object with an initial word counter of 1.
I've then branched out the rest of the functionality into a separate function, that takes the previously constructed 
object, sorts the words based on their word counter, then filters the 10 most frequent words. To do this, I've utilized 
the build-in methods ``Object.entries()`` and ``Object.fromEntries()``. I use ``Object.entries()`` to convert the object 
to an array, simply so I can utilize the ``sort()`` and ``filter()`` that JavaScript array has. Finally, after all of that 
is done, I use ``Object.fromEntries()`` to convert the array back to an object, which is then returned to the caller.

## How to use
### Server
To use this API, please clone this repository using *git clone https://github.com/pgaberra/cgi_hemtest.git*. In order 
to run the server locally on your machine, you need to have Node.js installed. I've also excluded the **node_modules** 
folder from version control to not cause any dependency conflicts. Therefor, the user has to install express using *npm 
install express*, otherwise the server won't run. Finally, to start the server locally, use the *node app* command in the 
terminal when inside the project directory.

### Client
To send a POST request with text data to the server, there are various amount of options one could use. Curl is one popular 
option that can be used directly from the command-line (curl should be preinstalled on most Windows and Linux machines). 
Simply type *curl -H "Content-type: text/plain" -X "POST" -d "insert text data here" http://localhost:3000/count*. Other 
3rd party programs can also be utilized, such as REST Client in Visual Studio Code.

