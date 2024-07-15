source .env

if [ -d "dist" ]
then
    echo 'Cleaning dist...'
    rm -r dist
fi
yarn build
sh copy-public.sh
if [ -d "dist" ]
then
    cd dist
    aws s3 sync . $BUCKET --delete --profile $PROFILE
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/index.html" "/img/*" --profile $PROFILE
    echo 'Done'
else
    echo 'Could not find `dist` directory.'
fi