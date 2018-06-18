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

---

### Members

- Kaleb

---

> In git, files are always in one of 3 stages: Committed, Modified, or Staged

> "git status" and notice how README.md has been modified

> Add README.md to staging with one of the following commands...

```
$ git add README.md
OR
$ git add . -v
```

#### OH [obscenity]!

> You realized you didn't actually want to add that file to staging yet...

> Let's unstage README.md with the following command...

```
$ git reset HEAD README.md
```

> Now let's edit README.md to include your full name...

---

### Members

- Kaleb Huddleston

---

> Add the change to staging...

```
$ git add . -v
```

> Now that we're satisfied with our changes, let's make our first commit...

```
$ git commit -m "Leave a meaningful commit message here"
```

#### AWWWW SNAPPP!!!

> We really meant to include an email address along with our full name.
> Let's undo that last commit and edit README.md to include our email address.

```
$ git reset --soft HEAD^
```

> Let's take a quick look at the log to see what's happened so far...

```
$ git log
```

> Now, edit README.md for the last time...

---

### Members

- Kaleb Huddleston
  - khuddleston@samaritan.org

---

> Add the change to staging...

```
$ git add . -v
```

> Commit your changes...

```
$ git commit -m "meaningful commit message"
```

> Finally, let's push our changes to the remote repo and create our first pull request...

```
$ git push -u origin addMembers
```

> Enter your git username/password

> If your push was successful, there should be a link in your terminal that you can "ctrl+click"
> to make your first pull request.
