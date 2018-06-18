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

# Step-by-step for Git lab - 6/18/18

## Open a terminal and make sure git has been successfully installed

```
$ git --version
```

## Fork the HighCountryAngular Repository

> Fork [this](https://github.com/ngHighCountry/HighCountryAngular.git) repo and we'll "git" started with the lab...

---

## Forking

> In terminal,

```
$ mkdir git

$ cd git

$ git clone https://github.com/ngHighCountry/HighCountryAngular.git

$ cd HighCountryAngular

$ code .
```

## Git help

> Open an integrated terminal in VS Code

```
Linux + Windows - Ctrl+`
Mac - Cmd+`
```

```
$ git help
```

## Add Member

> Let's check our status and current branch before we get started...

```
$ git status
$ git branch
```

> Now, let's checkout a new branch to work from...

```
$ git checkout -b addMembers
```

> open README.md

> Under "Members" add your first name with a bullet in Markdown like the example below...

### Members

- Kaleb

> In git, files are always in one of 3 stages: Committed, Modified, or Staged

> git status and notice how README.md has been modified

> Add README.md to staging with one of the following commands...

```
$ git add README.md
OR
$ git add . -v
```

#### OH [insert obscenity]!

> You realized you didn't actually want to add that file to staging yet...

> Let's unstage README.md with the following command...

```
$ git reset HEAD README.md
```

- what if I want to undo that last add? (git reset HEAD README.md)
- git commit -m "Leave a MEANINGFUL commit message"
- git push -u origin addMembers (let's push our changes to the remote repo and create a pull request)
