//? what is version control
//? what is LVCS, CVCS, DVCS
//? what is git
//? how does git versioning work
//? in which folder git database is stored
//? what are the three states in git
//? which directory is copied when you git clone
//? 2 ways of using git
//? what is --system --global --local, which files
// git config --list --show-origin (current config)
// git config --global user.name "John Doe" 
// git config --global user.email johndoe@example.com (needs to be done only once)
// git config --global init.defaultBranch main (change default branch name)
// git config --list
// git config help (concise), git config -h (short)
//? work of - git init, git add, git commit
//? what are tracked and untracked files
// git status -s
//? how to track newly added file
// .gitignore // .txt, !index.txt, /TODO (only root TODO file), TODO/ (all files in TODO folder), docs/**/*.txt
// git diff (un-staged changes)
// git difftool 
// git commit -a (stage and commit with files from previous commit)
// git rm index.js (untracked)
// git rm --cached index.js (untrack but don't delete)
-// git log (-p, -1, --stat, --pretty=oneline, --name-only, --name-status)
//  git log --pretty=format:"%h - %an, %ae, %cn, %ce, %ar : %s"
// git log --pretty=online --graph
// git log --since=2.hour
// git log --until=2.hour
// git log --author=sachin
// git log -S functionName (commits that changed it)
// git log -- /react.txt (commits that changed this file)
// git log --no-merges (non merged commits)

//? (making changes to previous commit)
// git commit -m "six"
// git add index.txt
// git commit --amend --no-edit (add index.txt to commit)
// git commit --amend -m "changed six" (change name of commit)

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
// one central repo, multiple nodes (people) can contribute, if first node push code to repo, second node should pull changes of first, make changes and then push
//? Integration-Manager Workflow
// each developer has own repo, can readonly other developer's repo
// contains "main" repo, developers can clone repo and make their own repo and request main repo maintainer to merge changes from their repo
//? Dictator Lieutenants Workflow
// 1 Dictator, several Lieutenants, many developers
// normal developer make changes to lieutenant's master branch
// Lieutenant merge these changes
// Lieutenant request Dictator to merge their master branch into Dictator's master branch
// good for big projects




































