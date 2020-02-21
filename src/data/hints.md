---
title: "hints"
---
## Hints for hackers.

It might turn out to be helpful to following some best hacker practices, so we assembled some for you:

#### Use the git.

We're sure that you've heard about git version control. Basically every project is using it and it lets you collaborate on code easily. That's why you should setup a git repo for your team as soon as possible and make sure to onboard newbies if necessary. Special hint for a hackathon: Do commit early, often and merge to the trunk as soon as possible. Don't let code rot in Pull Requests or "feature" branches. Trust your teammates and combine your forces when facing conflicts. Important reminder: **never ever** check in any credentials into a git repo, not even at a hackathon! Use .env files (e.g. dotenv on JS) and deployment secrets to secure your tokens instead.

#### Docker is great. Think thoroughly if you need it.

Docker helps keeping your dev machine clean, is a powerful deployment tool and it gets you started with new environments in seconds. Decide early if your team and project really needs that additional layer of complexity and rigurously enable all your team members to use them. It will earn you help-points for sure!

#### Ensure that everyone is on the same boat

Understand what you try to achieve. Make sure everyone tells the same story. Then try to split tasks among your team members according to your skills. 

#### Go minimal

Boil down your idea to an absolute minimum first and make it happen. No need to mock APIs, nobody cares if you're not abstracting things, go concrete and verbose, it's all about the running demo.   

#### Build on the shoulders of others

Of course you won't install a strpad library from npm if your language core supports it. But try to keep your head free by trusting powerful micro frameworks, simple databases and plain Javascript services and use all the help you can find on the web.  

### Learning something new vs. use what you know

If you want to go fast, use what you already know. If you start using something that's completely new to you, you'll lose quite some time on learning it - which is great! That's actually why we're here - just be aware that you cannot eat the cake and have it, too.  