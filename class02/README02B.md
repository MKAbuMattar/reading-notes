# Git

## Version Control System
Version Control System (VSC) like Project Manager for your repository can work in both way locally or in the cloud, locally it's mean in your PC or laptop you work in it wall organized your workflow for each version and managed all code, but cloud means have extra fetchers like if u have damaged your PC or laptop or even your hard-disk still you can access to all repository, code, command etch…

## Distributed Version Control System
But Git this a Distributed Version Control System (DVCS), work as tack a snapshot of your project and create a new version, and save all old version of you get a critical point and u need back to the old version, Git check all your change or new files, folders or directory.

## How to use Git
After installing Git in your system you have to configuration Git this command it's will helped

```bash
git config --global user.name 'YOUR FULL NAME'
```

```bash
git config --global user.email 'YOUR EMAIL ADDRESS'
```

```bash
git config --global core.editor "code --wait"
```

after your configuration Git got to [GitHub](https://www.github.com) and login to your account, now just create a new repository, after that you need can access your repository in tow way GitHub website or Git used the command line, in the website you can download your edit or upload best in dreg-and-drop, but in this repository it's will used command line.

for Tack copy of your code in local PC or laptop using this command

```bash
git clone https://github.com/MKAbuMattar/my-project.git
```

after that to access in your code in VSCode use

```bash
code .
```

It's wall open your VSCode after you finished your change in the project use
 
```bash
git status
```

this command this will check all your changed and all modified file for add your version of code you need use

```bash
git add .
```

It's wall create a new version of your modified code but still, and you can add a comment in your change or modified code, for easy to understand form deferent developer work in the same project or you in future. for that, you will use this command

```bash
git commit -m "message"
```

after all that still all your modified code in you're devise for publish your version, you will use this command

```bash
git push origin main 
```

> Note of this your first time used `push` command it's will asking you for your username and password.

This command cold ACP, A `add`, C `commit`, P `push`