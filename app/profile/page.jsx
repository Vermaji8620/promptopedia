"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [post, setPost] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      if (session?.user?.id) {
        const response = await fetch(
          "/api/users/" + session.user.id + "/posts"
        );
        const data = await response.json();
        setPost(data);
      }
    };
    fetchPosts();
  }, [session]);

  const handleEdit = async (posts) => {
    router.push(`/update-prompt?id=${posts._id}`);
  };
  const handleDelete = async (posts) => {
    console.log("posts del ---> ", posts)
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt? "
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${posts._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPosts = post.filter((p) => p._id != posts._id);
        setPost(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to your personalised profile page"
        data={post}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyProfile;
