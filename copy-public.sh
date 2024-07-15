
echo 'Copying public to dist...'
mkdir dist/img
cp -r public/img/* dist/img
cp -r public/site.webmanifest dist/site.webmanifest
echo 'Done'