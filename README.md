<img src="https://www.thebostoncalendar.com/system/events/photos/000/133/470/medium/boston-meetup-logo_(1).png?1495441976" width="auto" height="60" style="float: left; margin-right: 10px" /> &nbsp; &nbsp; <img src="https://www.strapi.io/hs-fs/hubfs/Logo.WhiteBackground%20(2)-2.png?width=1138&name=Logo.WhiteBackground%20(2)-2.png" width="auto" height="60" />

# Strapi API / Headless CMS Presentation

### General Information

#### This is a presentation for the [JAMstack Boston](https://www.meetup.com/JAMstack-Boston/events/272069365/) virtual meetup on August 18, 2020
[Presentation Video](https://www.youtube.com/watch?v=BJkI4xKuI6M&feature=youtu.be)  
[Presentation Slides](https://docs.google.com/presentation/d/e/2PACX-1vS8kLKqpF26qjAElQXqtVL62urtDaC1Shg8iYNObLctVd7pkin84Zh976-r4_tFGf3_iawWAYSUyyc5/pub?start=true&loop=false&delayms=10000)

#### What You Will Learn
In this presentation we will create a simple blog using the Strapi API.  While building the blog, you will learn about how to use Strapi, the main features that are built into Strapi and how to customize Strapi.  You will find that Strapi is easy to use while still being highly customizable.   

#### This Repo
This repo contains the React front-end for the blog that will be built during the presentation.  Because the presentation is focused on Strapi (not React), all of the front-end code needed to follow along is included in this repo.  The Strapi back-end will be built step-by-step throughout the presentation.
## 

### Getting Started 

#### Clone The React App
`git clone https://github.com/Jryke/Strapi-Presentation.git`

#### Create The Strapi Project
1. Install Strapi and create a project with “quickstart”:
 * NPM: `npx create-strapi-app my-project --quickstart`
 * YARN: `yarn create strapi-app my-project --quickstart`

2. Create an admin user and log into the Strapi admin panel 
## 

### Developing With Strapi 
#### (follow along with the presentation)
1. Create a content type
 * Create an article content type
2. Create content using the Strapi CMS
 * Create an article using the content type fields
3. Using relational fields
 * Associate an author (user) to the blog post 
4. Using Roles & Permissions plugin
 * make articles public by utilizing Strapi Roles & Permissions plugin
5. Fetching data from Strapi API on front-end
 * Start the React App (from this repo) to see the blog posts render on the front-end
6. Custom Strapi endpoints/controllers
 * create a custom controller to fetch articles by their slug (Strapi core controller fetches by id)
 * create a custom endpoint that utilizes the custom controller
 * _**Note**: custom controller must be created/saved before custom endpoint or the server will crash.  If server crashes, restart using `npm run develop` or `yarn develop`._
