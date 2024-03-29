import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/Post/PostCard/PostCard";
// import PostCard from "../../Components/PostCard/PostCard";
import StoryCircle from "../../Components/Story/StoryCircle/StoryCircle";
import StoryViewer from "../../Components/Story/StoryViewer/StoryViewer";
import { hasStory, suggetions, timeDifference } from "../../Config/Logic";
import { findUserPost } from "../../Redux/Post/Action";
import { findByUserIdsAction, getUserProfileAction } from "../../Redux/User/Action";
import "./HomePage.css";
import DarkModeToggle from "../../Components/DarkModeToggle";
const HomePage = () => {
  const dispatch=useDispatch();
  const [userIds, setUserIds]= useState([]);
  const token=localStorage.getItem("token");
  const reqUser = useSelector(store=>store.user.reqUser);
  const {user, post} = useSelector((store)=>store)
  const [suggestedUser,setSuggestedUser]=useState([]);
  const navigate=useNavigate();
  const storyUsers1 = useSelector((store) => store.user.userByIds.stories);
  
  

  useEffect(()=>{
     dispatch(getUserProfileAction(token));
  },[token])


  useEffect(()=>{

    if (reqUser) {
      const newIds = reqUser?.following?.map((user) => user.id);
      setUserIds([ reqUser?.id, ...newIds]);
      setSuggestedUser(suggetions(reqUser))
    }
    // else{
    //   navigate("/login")
    // }
    // else setUserIds([reqUser?.id])


  },[reqUser])

  useEffect(()=>{
    
    const data={
      userIds:[userIds].join(","),
      jwt:token
    }

    if(userIds.length>0){
      dispatch(findUserPost(data))
      dispatch(findByUserIdsAction(data))
    }
    
  },[userIds,post.createdPost,post.deletedPost])
  
   const storyUsers=hasStory(user.userByIds)


  return (
    <div className=" ">
      <div className="homepage-container mt-10 flex w-[100%] justify-center "></div>
       <div className="mt-10 flex w-[100%] justify-center bg-gray-100 ">
        <div className="flex flex-col w-[44%] px-10 items-center bg-gray-200">
          <div  className="flex  space-x-2 border p-4 rounded-md justify-start w-full  ">
            {/* {[1,1,11].map((item)=><StoryCircle/>)} */}
            {storyUsers.map((item, index) => <StoryCircle
              
              key={index}
              
              image={
               item?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              username={item?.username}
              userId={item?.id}
            />)}  
            {/* <StoryCircle stories={storyUsers}  image={ 
               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
             }
             />
            <StoryCircle stories={storyUsers}  image={ 
               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
             }
             />
            <StoryCircle stories={storyUsers}  image={ 
               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
             }
             />
            <StoryCircle stories={storyUsers}  image={ 
               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
             }
             />
            <StoryCircle stories={storyUsers}  image={ 
               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
             }
             />
            <StoryCircle stories={storyUsers}  image={ 
               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
             }
             /> */}
            
          </div>
          {/* <DarkModeToggle /> */}
          <div className="space-y-10 postsBox w-full">
            {post.userPost?.length>0 && post?.userPost?.map((item) => (
              <PostCard
                userProfileImage={
                  item.user.userImage?item.user.userImage:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                username={item?.user?.username}
                location={item?.location}
                postImage={item?.image}
                
                createdAt={timeDifference(item?.createdAt)}
                postId={item?.id}
                post={item}
              />
            ))}
          </div>
        </div>
        
        <div className="w-[30%] pr-10">
          <HomeRight suggestedUser={suggestedUser}/>
        </div>
      </div> 
      </div>
    
    
  );
};

export default HomePage;
