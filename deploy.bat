@echo off
npm run build:demo&&cd dist/demo&&git init&&git add -A&&git commit -m "deploy"&&git status&&git push -f https://github.com/kabakov-vladislav-zg/vue-intersection-tracker.git main:gh-pages&&cd ..