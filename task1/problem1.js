const fs = require('fs');

fs.readFile('file.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  try {
    const data = JSON.parse(jsonString);

    // Perform the required modifications and operations on the data object here
     data.name='fluffyy'
     data.catFriends[0].activities.push("drink","fight")
     data.catFriends[1].activities.push("drink","fight")

     //console.log( data.catFriends[0].activities)
     //console.log( data.catFriends[1].activities)
     //console.log( data)


    const activities1 = data.catFriends[0].activities
     for(i=0;i <activities1.length; i++)
     { console.log(activities1[i]); }

     const activities2 = data.catFriends[0].activities
     for(i=0;i <activities2.length; i++)
     { console.log(activities1[i]); }


    
            //bar
    console.log ("frind :"+data.catFriends[0].name)
          //foo
    console.log ("frind :"+data.catFriends[1].name)


     
            //size fluffyy
        data.size_fluffyy = {weight:5,height:30};
     

     console.log("weight of fluffyy friends"+ data.catFriends[0].weight + data.catFriends[1].weight)

     console.log(data.catFriends[0].furcolor="purble")
     console.log(data);

     


  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

