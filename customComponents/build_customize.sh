#/bin/bash
buildcommand=""

if [ "$1" == "" ] || [ "$1" == all ]; then 
  for file in ./src/components/*
    do
      if [ -d $file ] && [ "$file" != "./src/components/images" ]; then
        buildcommand+=$file"/export.js "
      fi
    done 
else
  basepath=$(cd `dirname $0`; pwd)
  for componentName in $*
    do
      component=$componentName"Component"
      componentsCommand="./src/components/"$component"/export.js "
      buildcommand+=$componentsCommand
    done
fi 

buildcommand+="./src/assets/scss/index.scss"

npm run build_customize $buildcommand