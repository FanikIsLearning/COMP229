# COMP229 - 23/05/2023

To run your application, simply execute the following
command in your command-line tool:

`node server`

The application object (continued)

`app.set(name, value)`: This command is like telling a secret to our Express app! The secret is called name and the secret message is value. Once the Express app knows this secret, it can use it to decide how to behave or what to do.

`app.get(name)`: This command is like asking our Express app to tell us a secret it knows! We ask for the secret by its name, name, and then Express tells us the secret.

`app.engine(ext, callback)`: This command is like telling our Express app how to read a special kind of storybook. The kind of storybook is called ext, and callback is like the instructions on how to read the book. For example, we can tell Express to read HTML storybooks as if they were EJS storybooks using this command!

`app.locals`: This command is like a bag of goodies! We can put any goodies (or variables) we want inside, and then every time we make a new picture (or render a template), Express will always include these goodies in the picture.

`app.use([path], callback)`: This command is like a gatekeeper in our Express app that checks all incoming messages (HTTP requests). This gatekeeper is always alert and ready to handle these messages. Sometimes, we can tell our gatekeeper to only check messages that are sent to a specific address (path).

`app.VERB(path, [callback...], callback)`: This command is like assigning specific helpers (middleware functions) to answer certain types of questions (HTTP requests). For example, if someone sends a GET question, we use app.get() to answer. If someone sends a POST question, we use app.post() to answer, and so on.

`app.route(path).VERB([callback...], callback)`: This command is a way to assign different helpers for different types of questions, but all at the same address (path). So, we can use the same address to answer GET and POST questions by assigning different helpers for each one.

`app.param([name], callback)`: This command is like adding a special skill to our Express app. It can look for a certain word (name) in the questions it gets asked, and then do something special (a callback). For example, we can tell our app to do something special every time it sees a question with the word 'userId'.

The request object

`req.query`: This is like a special box that holds information about different things we want to ask the computer. It keeps track of small pieces of information that we send to the computer when we make a request.

`req.params`: Imagine you're going on an adventure and you have to follow a specific path. The req.params is like a map that helps you find your way. It tells the computer which route or path you're taking.

`req.body`: When we want to tell the computer something longer or more complicated, we use req.body. It's like a special note or message that we send to the computer. It helps us send and receive information in a way that both the computer and we can understand.

`req.param(name)`: Sometimes, we have a special word or name that we want to use to get something from the computer. It could be a question we ask or a piece of information we want to know. The req.param(name) helps us get that specific thing we're looking for.

`req.path`, req.host, and req.ip: Imagine you're writing a letter to a friend. You need to know the address of your friend's house (req.host), the street you're on (req.path), and the city you're in (req.ip). These things help the computer understand where you're coming from and where you want to go.

`req.cookies`: When we use the internet, our web browser stores small pieces of information called cookies. These cookies help remember things like our preferences or login information. The req.cookies is like a special jar that holds all those cookies. It helps the computer know who we are and what we like when we visit a website.

The response object

`res.status(code)`: This is like a special command we use to tell the computer how things are going. It sets a specific code that represents the status of our response. It's like telling the computer if everything went well or if there was a problem.

`res.set(field, [value])`: Imagine you're sending a letter to someone, and you want to write something important on the envelope. The res.set(field, [value]) helps us set special information on the envelope of our response. It's like adding extra details to our message.

`res.cookie(name, value, [options])`: Sometimes, we want to give the person we're sending a response to a small treat, like a cookie. The res.cookie(name, value, [options]) helps us set a special cookie that we can send along with our response. We can give it a name, a value, and some extra information.

`res.redirect([status], url)`: Imagine you're on a road and suddenly see a sign that tells you to go in a different direction. The res.redirect([status], url) helps us tell the person who requested something from us to go to a different place instead. We can give them a new URL to follow, and if we want, we can also give them a special code to explain why they need to go there.

`res.send([body | status], [body])`: When we want to send a message or some information back to the person who asked us something, we use res.send(). It does a lot of helpful things in the background, like making sure the message looks nice and has all the right details. We can also choose to include a specific status code to explain how things went.

`res.json([status | body], [body])`: Sometimes, we want to send a response in a specific format called JSON. It's like using a special language to communicate with computers. The res.json() method helps us send our response in this JSON format. We can also include a status code or the information we want to send.

`res.render(view, [locals], callback)`: Imagine you're making a special drawing or painting, and you want to show it to someone. The res.render() method helps us take a special design, called a view, and turn it into a beautiful HTML page that we can send as a response. We can also add some extra information, like the colors or shapes we used, to make it even better.

External middleware

`morgan`: Imagine you have a special diary where you write down all the things you do every day. The morgan middleware is like a special assistant that helps you log or record all the requests that come to your website. It keeps track of who visited your website, what they did, and when they did it.

`body-parser`: When someone sends you a message, it's important to understand what they're saying. The body-parser middleware helps you understand and make sense of the messages or data that people send to your website. It can read and process different types of messages, like text, images, or files, so that you can use them in your website.

`method-override`: Sometimes, not all devices or browsers understand certain commands or actions. The method-override middleware is like a translator that helps you overcome this problem. It allows you to use special words or commands, like "PUT" or "DELETE," even if the device or browser doesn't understand them directly.

**Important** `compression`: When you want to send something to someone, it's helpful to make it smaller so it's faster and easier to send. The compression middleware helps you do that with the responses you send from your website. It squeezes or compresses the data, kind of like making it into a tiny package, so that it can be sent quickly over the internet.

`express.static`: Imagine you have a collection of toys or books that you want to share with others. The express.static middleware helps you create a special shelf or display for those things. It allows you to serve or show static files, like images, CSS stylesheets, or JavaScript files, to people who visit your website.

`cookie-parser`: When you visit a website, sometimes the website wants to remember certain things about you, like your name or preferences. The cookie-parser middleware helps you read and understand those small pieces of information, called cookies, that websites store on your computer. It helps you retrieve and use those cookies to personalize your website experience.

`session`: When you have a special secret room or area where you want to keep important things, like your progress in a game or items you collected, you need a way to remember those things even if you leave and come back later. The session middleware helps you create and manage persistent sessions. It allows you to store and retrieve important information for each visitor, so they can continue where they left off when they return to your website.

Embedded JS template

https://ejs.co/
