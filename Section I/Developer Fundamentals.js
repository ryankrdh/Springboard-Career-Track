'use strict';

/*

TERMINAL SHORTCUTS:

cd [name]: to jump into the named directory. You can use absolute path or relative path. it needs to be relative to where you are. You can go anywere using absolute.

Example of Absolute: cd/users/recordingusers/stuff
Example of Relative: cd stuff/

referencing home directory: cd ~/stuff/topsecret/

cd ..: go to previous directory.
ls: see the current files and folders in the directory.
pwd: shows the absolute path.
ls [name]/: to look inside without going in
ls -a: list all. (- is a flag)
ls -l: lists more information regarding the files.

man: will give us the manual.

*if there is a space, use quotes*

Create files and folders in Terminal using mkdir and touch.
Move files and folders in Terminal using mv.
Copy files and folders in Terminal using cp.
Remove files and folders in Terminal using rm and rmdir.
    rm -rf [foldername]: force deletes without prompt.  
cat app.js: prints out the contents

echo "word": it will repeat the words back. 
echo ".env" > .gitignore: replaces all the content in there. 

open index.html: it will open a file or folder using a default program
s
less:

.: Dot is a reference to a current directory.
    example: open . will open the current directory.

mv test.txt ../: moves files from and to. 
mv test.txt newfile.txt: renames files and folders.
mv test.txt ../hello.txt: renames AND moves.

cp [org. file] [path to copied file]
cp dogs.txt dogs_copy.txt: makes full copy of the file.
cp dogs.txt ../DOGS.txt: this will copy and move it to the file.

cp -r DUMB super_dumb: copy of the whole FOLDER use -r.
cp -r DUMB ../super_cumb: moving and copying the folder.



USEFUL KEYBOARD TERMINAL SHORTCUTS:
control + a: Takes you to the beginning.
control + e: Takes you to the end.
control + w: Delete the word up to where your cursor is.
control + u: Delete the entire line.
option + arrowkeys: jumps cursor by word

*/

/*

GIT SHORTCUTS:

 git status: checking up on current repository.
git init: initializes a new repository
rm -rf .git: deletes the git folder.
git log: view previous commits
    git log --oneline: displayed as one commit per line.


git add .
git commit -m ""
git push


git diff: it will view what is modified.

//-------------------------------------------------------------

git status: checks to see if working line is clean.
git branch add-css: adding branch called add-css.
git checkout add-css: switches to the branch "add-css" 
git checkout -b [name]: creates and moves to the new branch.
git branch -d [name]: deletes a branch.

git branch -D [name]: if there are commits that haven't been merged yet. it will force delete. 

git merge [name]: stay on the branch you are merging to and write the branch name you are merging from. 


*/

/*

git remote add origin https://github.com/aninmatedtext.git
    this will add the name origin to the github url so you can remotely access it without typing the full url

git remote -v: view list of remotes

git push origin master: origin is the nickname for the url
git push -u origin master: using this first time when you push, the -u will make it default to just type git push instead of git push origin master.

git clone [copied github url]: getting a clone of someone's repository.

git pull origin master: getting the latest updated code from git hub.

*/

/*

UNIT TESTING

*/

function calculateTaxes(income) {
  if (income > 30000) {
    return income * 0.25;
  } else {
    return income * 0.15;
  }
}

console.log(calculateTaxes(500));
