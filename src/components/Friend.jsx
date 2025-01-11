// import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
// import { Box,Typography, IconButton, useTheme, } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { setFriends } from "state"
// import FlexBetween from "./FlexBetween";
// import UserImage from "./UserImage";
// import { useNavigate } from "react-router-dom";

// const Friend = ({friendId, name, subtitle, userPicturePath})=>{
    
//     const dispatch  = useDispatch();
//     const navigate = useNavigate();
//     const {_id} = useSelector((state)=>state.user);
//     const {token} = useSelector((state)=>state.token);
//     const friends = useSelector((state)=>state.user.friends);

//     const theme = useTheme();
//     const primaryLight =theme.palette.primary.light;
//     const primaryDark  = theme.palette.primary.dark;
//     const main = theme.palette.neutral.main;
//     const medium = theme.palette.neutral.medium;

//     // const isFriend =friends.find((friend)=>friend._id ===friendId);
//     // const isFriend = friends.find((friend) => friend._id === friendId);
//     const isFriend = Array.isArray(friends) && friends.find((friend) => friend._id === friendId);



//     const patchFriend = async()=>{
//         const response =  await fetch(`http://localhost:3001/users/${_id}/${friendId}`,
//             {method: "PATCH",
//                 headers : {Authorization : `Bearer ${token}`,
//                 "Content-Type" : "application/json"}
//             }
//         );

//         const data  = await response.json();
//         dispatch(setFriends({friends: data}))

//     } ;
// return(
//     <FlexBetween>
//         <FlexBetween gap={"1rem"}>
//             <UserImage image={userPicturePath} size="55px"/>
//             <Box onClick = {()=>{
//                 navigate(`/profile/${friendId}`);
//                 navigate(0)
//             }}>

//                 <Typography color={main} variant="h5" fontWeight={"500"} sx={{"&:hover": {
//                     color: theme.palette.primary.light,
//                     cursor: "pointer" 
//                 }}}>
//                     {name}
//                 </Typography>
//                 <Typography color={medium} fontSize={"0.75rem"}>
//                     {subtitle}
//                 </Typography>   
//             </Box>
//         </FlexBetween>
//         <IconButton onClick={()=>patchFriend()} sx={{backgroundColor: primaryLight, p: "0.6rem"}}>

//             {
//                 isFriend ?  (<PersonRemoveOutlined  sx={{color: primaryDark}}/>)
//                 :
//                 (
//                     <PersonAddOutlined sx={{color: primaryDark}}/>
//                 )
//             }
//             </IconButton>

//     </FlexBetween>
// )
// }

// export default Friend;



import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const { token } = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    const theme = useTheme();
    const primaryLight = theme.palette.primary.light;
    const primaryDark = theme.palette.primary.dark;
    const main = theme.palette.neutral.main;
    const medium = theme.palette.neutral.medium;

    // Check if friend is already in the friends list
    const isFriend = Array.isArray(friends) && friends.find((friend) => friend._id === friendId);

    // Handle adding/removing friend
    // const patchFriend = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:3001/users/${_id}/${friendId}`, {
    //             method: "PATCH",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to update friend status');
    //         }

    //         const data = await response.json();
    //         dispatch(setFriends({ friends: data }));
    //     } catch (error) {
    //         console.error(error);
    //         // Optionally show an error message to the user
    //     }
    // };

    const patchFriend = async () => {
        const response = await fetch(`http://localhost:3001/users/${_id}/${friendId}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      
        if (response.ok) {
          const data = await response.json();
          dispatch(setFriends({ friends: data })); // Update the Redux store with the new friends list
        } else {
          console.error("Failed to update friends list");
        }
      };
      

    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage image={userPicturePath} size="55px" />
                <Box
                    onClick={() => {
                        navigate(`/profile/${friendId}`);
                    }}
                >
                    <Typography
                        color={main}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: theme.palette.primary.light,
                                cursor: "pointer",
                            },
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography color={medium} fontSize="0.75rem">
                        {subtitle}
                    </Typography>
                </Box>
            </FlexBetween>
            <IconButton onClick={patchFriend} sx={{ backgroundColor: primaryLight, p: "0.6rem" }}>
                {isFriend ? (
                    <PersonRemoveOutlined sx={{ color: primaryDark }} />
                ) : (
                    <PersonAddOutlined sx={{ color: primaryDark }} />
                )}
            </IconButton>
        </FlexBetween>
    );
};

export default Friend;
