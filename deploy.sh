set -e 

yarn run build

cd dist

echo > .nojekyll

git init

git checkot -b main

git add -a

git commit -m 'deploy'

cd-