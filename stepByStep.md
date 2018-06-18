![HighCountry Angular logo](https://cdn.rawgit.com/ngHighCountry/Logo/master/ngHighCountry-with-name.svg)

# Git - What is it & how do we use it?

> “Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.”

## Installation
    - Linux (https://git-scm.com/download/linux)
    - Windows (https://git-scm.com/download/win)
    - Mac (https://git-scm.com/download/mac)

## Hosting Services
    - Github.com
    - Bitbucket.org


## Clone the HighCountryAngular Repository

> Clone [this](https://github.com/ngHighCountry/HighCountryAngular.git) repo and we'll "git" started with the lab...

--------------------------------------------------------------------------------------------------------------------------------

# Step-by-step for Git lab - 6/18/18

## Open a terminal and make sure git has been successfully installed

```
$ git --version
```

## Cloning

```
$ mkdir git

$ cd git

$ git clone https://github.com/ngHighCountry/HighCountryAngular.git 

$ cd HighCountryAngular

$ code .
```

## Git help

```
Open an integrated terminal in VS Code with ...

$ git help
```

## Add Member

* quick outline

- git status
- git branch (notice which branch you're currently on)
- git checkout -b addMembers (let's create our own local branch to work from)
- open README.md
- Under "Members" add your first name in Markdown 
    - Kaleb
- git status (notice README.md has been changed)
- git add README.md OR git add . -v to add the file to staging
- what if I want to undo that last add? (git reset HEAD README.md)
- git commit -m "Leave a MEANINGFUL commit message"
- git push -u origin addMembers (let's push our changes to the remote repo and create a pull request)

