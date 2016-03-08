# echo "... W E B P A C K ..."
# webpack --progress --colors --watch
# if (webpack is running)  {
 # $running = true/false
#...

# if ($running = true) {
  #echo "do you wish to START webpack?"
  # $answer = true/false
# } select yn ...


# if ($running = false) {
  #echo "do you wish to STOP webpack?"
  # $answer = true/false
# } select yn ...

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
