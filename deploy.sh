# delete branch gh-pages
git push --delete origin gh-pages
git branch -d gh-pages

# recreate branch gh-pages
git checkout -b gh-pages HEAD
# run production build on gh-pages branch
yarn CI="" && build
# delete all files except from build folder
sudo rm -rf src/ public/ other/ node_modules/ .circleci/ yarn.lock README.md package.json deploy.sh .gitignore package-json.lock
# copy all build files in the main directory
sudo mv build/** .
# delete build folder
sudo rm -rf build/
# setup git username and email
git config --global user.name "glippi"
git config --global user.email "gabriele@lippi.net"
# commit changes
git add . && git commit -m "Run production build"
# git filter-branch --subdirectory-filter build -- gh-pages
git push origin HEAD
