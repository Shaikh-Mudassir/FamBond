import User from "../models/User.js";

// read
export const getUser = async(req,res)=>{
    try{

        const {id} = req.params;
        const user  = await User.findById(id);
        res.status(200).json(user)


    }catch(err){
        res.status(404).json({msg:err.message});
    }
}

export const getUserFriends = async(req,res)=>{
 try{
    const {id} = req.params;
    const user  = await User.findById(id);
    // const friends = await Promise.all(user.friends.map((id)=>
    //     User.findById(id)
    // ));
    const friends = await User.find({ _id: { $in: user.friends } });

    const formattedFriends = friends.map(({_id, firstName, lastName,occupation,location, picturePath})=>{
        return {_id, firstName, lastName,occupation,location, picturePath};
    });
    res.status(200).json(formattedFriends);
}catch(err){
    res.status(404).json({msg:err.message});
    
}

};

// export const addRemoveFriend = async(req,res)=>{
//    try{
//     const {id, friendId} = req.params;

//     const user = await User.findById(id);
//     const friend = await User.findById(friendId)

//     if(user.friends.includes(friendId)){
//         user.friends = user.friends.filter((id)=>id!==friendId)
//         friend.friends = friend.friends.filter((id)=> id!==id);
//     }
//     else{
//         user.friends.push(friendId);
//         friend.friends.push(id);
//     }
//     await user.save()
//     await friend.save()

//     const friends = await Promise.all(user.friends.map((id)=>{
//         User.findById(id)
//     }));
//     const formattedFriends = friends.map(({_id, firstName, lastName,occupation,location, picturePath})=>{
//         return {_id, firstName, lastName,occupation,location, picturePath};
//     });
//     res.status(200).json(formattedFriends)

// }catch(err){
//     res.status(404).json({msg:err.message})
// }}


export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;

        // Validate inputs
        if (!id || !friendId) {
            return res.status(400).json({ msg: "User ID and Friend ID are required" });
        }

        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (!user || !friend) {
            return res.status(404).json({ msg: "User or Friend not found" });
        }

        // Check if friend exists in user's friend list
        if (user.friends.includes(friendId)) {
            // Remove friend
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            // Add friend
            user.friends.push(friendId);
            friend.friends.push(id);
        }

        await user.save();
        await friend.save();

        // Fetch updated friends list
        const friends = await User.find({ _id: { $in: user.friends } });

        // Format friends data
        const formattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => ({
            _id,
            firstName,
            lastName,
            occupation,
            location,
            picturePath,
        }));

        res.status(200).json(formattedFriends);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Internal server error" });
    }
};


