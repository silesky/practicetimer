
echo "... W E B P A C K ..."
live-server . & webpack --progress --colors --watch --devtool source-map & npm test
