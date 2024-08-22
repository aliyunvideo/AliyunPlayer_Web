#/bin/bash
buildcommand=""
npmscript="build_customize"
last_arg="${!#}"

if [ $last_arg == "--dev" ]; then
  npmscript="build_customize_dev"
fi

if [ "$1" == "" ] || [ "$1" == all ] || [ "$1" == "--dev" ]; then # $1 == --dev means no component name is assigned, --dev is the only argument
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
        if [ $componentName != "--dev" ]; then
          component=$componentName"Component"
          componentsCommand="./src/components/"$component"/export.js "
          buildcommand+=$componentsCommand
        fi
      done
fi 

buildcommand+="./src/assets/scss/index.scss"

npm run $npmscript $buildcommand