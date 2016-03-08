# echo "... W E B P A C K ..."
# webpack --progress --colors --watch

echo "Do you wish to start webpack?"
select yn in "Yes" "No"; do
  case $yn in
      Yes ) webpack --progress --colors --watch; break;;
      No ) exit;;
  esac # end case statement
done

# if [$answer  != yes];  then
#
#   echo "Killing webpack"
#   webpack --progress --colors --watch
# else
#   echo "Quitting..."
#   exit
# fi #ie endif
