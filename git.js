//? what is version control
//? what is LVCS, CVCS, DVCS
//? what is git
//? how does git versioning work
//? in which folder git database is stored
//? what are the three states in git
//? which directory is copied when you git clone
//? 2 ways of using git
//? what is --system --global --local, which files
//? list all git config for all the three above, also show their location
//? change username and email for all the three above
//? change the default branch name in all 3 above
//? short and long way to know about a git command

//? work of - git init, git add, git commit
//? what are tracked and untracked files
//? how to see status in long and short
//? how to track newly added file
// .gitignore // .txt, !index.txt, /TODO (only root TODO file), TODO/ (all files in TODO folder), docs/**/*.txt
//? how to prevent file from adding in staging area
//? how to ignore -> text file, don't ignore index.txt, ignore global index.js, ignore src folder, ignore all .js files and folder in "docs" at any level
//? how to check un-staged changes
//? how to check un-staged changes in vim
//? how to stage and commit at the same time
//? how to untracked a file and delete
//? how to untracked file but don't delete
//? show commit history
//? show commit history with changes make in each commit
//? show commit history with number of lines added/deleted in each commit
//? shhow commit history in one line and graph
//? show commit history with name of files changes
//? show commit history with status of changed files
//? show commit history in format -> id - author name, author email, contributor name, contributor email, date : message
//? commit history in last 2 hour
//? commit history before 2 hour
//? commit history with specific author name
//? commit history from all branches
//? commit history from specific contributor
//? commit history where a particular text/fn changed 
//? commit history where a particular file changed
//? commit history of all commits that were not merged in other branch
//? commit history of all commit that were merged in other branches

//? add a file for tracking in previous commit
//? change the message of previous commit

// git reset HEAD index.txt (un-stage file)
// git checkout -- index.txt (discard changed made after commit)
// git remote -v (hosted repo)
// git fetch origin (pull changes into local repo, works for cloned repo also)
// git pull (if only one remove repo)
// git remote show origin (info about remote)
// git remote rename origin sachin
// git remote rm origin

// git tag
// git tag -l v1.0 (list all tags starting with 1.0)
//? what are 2 types of tags in git
//? git tag -a v1.0 -m "first tag"
// git show v1.0 (show tag along with it's commit)
// git tag v3.0 4be30ee (add tags forold commit)
// git push origin v1.0 (push tag to remote)
// git push origin --tags (push all tags)
// git push origin --tags --follow-tag (push only annotation tags)
// git tag -d v1.0 (delete)
// git push origin --delete v1.0 (delete from remote)

// git config --global alias.last 'log -1'
//? explain commit, tree, blob, master and HEAD with diagram
// git branch testing (new branch)
// git log --oneline --decorate (which branch currently on)
// git checkout testing (move HEAD to other branch)
// git log testing
//? explain what happen when you create commit in new branch with diagram
// git log --oneline --decorate --graph --all
// git checkout -b testing (create and switch)
// git merge testing (merge changes)
//? to which commit main branch point after checkout
//? what is merge commit
// git branch -v (last commit)
// git branch --merged (branches merged in other branches)
// git branch --no-merged (cannot delete before merging in other branch)
// git branch -D testing (delete un-merged branch)
// git branch --move testing old (rename branch)
// git push --set-upstream origin old (push new branch name in remote)
// git branch --all (list remote branch also)
// git push origin --delete testing (delete testing branch from remote after rename)
//? explain long running and topic branch with diagram
//? git-1.png // what will we merge iss91v2 and dumbidea and them merge dumbidea into master, give final diagram

// git ls-remote https://?github.com/Sachin-sharma32/random
// git clone {url} -o remote (change the default name of remote (origin) when cloning)
// after git clone // git-2.png (origin/master // remote tracking branch)
// remote tracking branch does not change on your computer if someone pushes commit
// git fetch origin (sync remote work on local)
// can add multiple remote url (git remote add tracking {url}), git fetch tracking now does not change the code to the new remote but it add a new remote tracking branch (eg // tracking/master)
// git push origin sachin:main (push local "sachin" into remote "main")

// git merge origin/sachin (merge remote "sachin" branch into local branch)
// git checkout -b sachin origin/sachin

// when run git clone then a "tracking branch" "master" is created for "upstream branch" "origin/master" which is the remote tracking branch, git pull will automatically merge remote "origin master" into "tracking branch" "master"

// git checkout -b sachin origin/sachin (creates tracking and upstream branch "sachin" and "origin/sachin" respectively)
or
// git checkout --track origin/sachin

// git checkout sachin (if branch "sachin" don't exist and there is only one remote branch "sachin" then tracking branch is automatically created)

// git branch -u origin/master (to change the upstream branch)

// if tracking branch is set,
// git merge @{u}
//* or, 
// git merge @{upstream}
//* instead of,
// git merge origin/master

// git branch -vv (list tracking branch)

// git config --global --unset credential.helper (remove config)

// git fetch --all (sync remote branches with upstream branch (remote tracking branch), now we can merge tracking and upstream branch)

// git pull (combines "git fetch" and "git merge")

// 2 ways to integrate one branch into another // "merge" and "rebase"
// in "rebase" instead of three-way merging (git-3.png) which git merge does,
//changes are fetched into the commit (git-4.png) 
// rebase is cleaner as it doesn't add a new commit

//  git rebase --onto master server client (git-5.png, git-6.png, base the commits of "client" branch directly off "master" branch)
// git rebase master server (give the final diagram)
// git merge server (move the master to server branch)
// now remove the client and server branch
//! rebase

// git repo anywhere is just the ".git" folder
// git can transfer data to and from remote using "local", "http", "ssh", "git"
// "local" => repo in same machine,
// git clone /srv/git/project.git,
// git remote add local_proj /srv/git/project.git

// "http" => the one used with github
// advantage of "http" over "ssh" is that it can prompt for name,password in terminal instead of uploading ssh key on server

//  "ssh" => ssh://?[user@]server/project.git
// ssh is easier to setup then http
// people without ssh access to your server cannot do anything with your repo, bad for open source

// "git" => git://?example.com/project.git
// it has no security, anyone with url can make changes

// instead of hosting git repo on your own server, you can use github


//~  DISTRIBUTED WORKFLOWS
//?  Centralized Workflow 
// one central repo, multiple nodes (people) can contribute, if first node push code to repo, second node should merge changes first, then make changes and then push
//* git fetch origin
//* git merge origin/master (git-7.png)
//* git push origin master (git-8.png)
//? Integration-Manager Workflow
// each developer has own repo, can readonly other developer's repo
// contains "main" repo, developers can clone repo and make their own repo and request main repo maintainer to merge changes from their repo
//? Dictator Lieutenants Workflow
// 1 Dictator, several Lieutenants, many developers
// normal developer make changes to lieutenant's master branch
// Lieutenant merge these changes
// Lieutenant request Dictator to merge their master branch into Dictator's master branch
// good for big projects

//~ CONTRIBUTING
// remote any whitespace -> git diff --check
// commit only one issue at a time

//? commit message
// 50 char summery
// blank line
// details explanation

// clone repo you want to contribute to in your local machine
// fork the repo 
// make a separate branch and push changes to forked repo
//* git request-pull origin/sachin sachin (changes between local and remote branch)
// this request can be copied and sent to maintainer
//! forked public project (5.2)
//! public project over email (5.2)

//~ MAINTAINING PROJECT
//* git branch ss/javascript master (making new branch based on master branch)
// Patch file is a file containing the difference in code between commits
//? generating patch using diff (don't include author and created info)
//* git diff > patch_file.patch  (create a patch file)
//* git apply --check {location of path file}   (check if path can apply cleanly in the current branch)
//* git apply {location of patch file}  (apply patch to current branch as a new commit)
//? generating patch using format-path (includes author and time)
//* git format-patch -1 {commit-id} -o patches  (-1 -> one file, -o patch -> where to save the patch file)
//* git am {location of patch file}

//? if contributor forked main repo
//* git remote add origin2 {url}
//* git fetch origin2
//* git checkout -b test origin2/main

//* git pull {url}  (if you want to get changes but don't want to add it as a remote origin, it will also merge so do it in a new branch)











































