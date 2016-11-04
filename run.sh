
# Import to mongo data from json file
mongoimport --db app_db --jsonArray --collection messages --drop --file ./server/database/messages_sample.json
echo "====> JSON data imported to MongoDB!!!"

# Installing dependencies
cd client/
npm install
echo "====> Client Dependencies installed!!!"

cd ../server/
npm install
echo "====> Server Dependencies installed!!!"

echo "

     ******************** ACHTUNG!!! ********************
     Server is starting,
     Now go in a *NEW* terminal to app/client:
     cd app/client
     and run: npm start
     ****************************************************

     "
# Run node.js server file
node server.js
