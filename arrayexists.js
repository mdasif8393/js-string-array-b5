const megaFriend = (friends) =>{
    let mega = friends[0];
    if(Array.isArray(friends) === true){
        for(const friend of friends){
            if(friend.length > mega.length){
                mega = friend;
            }
        }
    }
    else{
        return 'Enter array'
    }
    return mega;
}

const friends = ['Allu', 'Kamal', 'Rohim', 'Tohinda'];
const mega = megaFriend(friends);
console.log(mega);