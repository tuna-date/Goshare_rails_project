import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import { BackTop } from "antd";
import axios from "axios";

export default function Home() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    fecthData(1);
  }, []);

  const fecthData = async (page) => {
    var token = await localStorage.getItem("token");
    var url = "http://localhost:5050/newfeed/" + page;
    var req = await axios.get(url, {
      headers: { Authorization: token }
    });
    setItems((items) => items.concat(req.data));
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + window.scrollY >=
      (page - 1) * 10 * document.body.offsetHeight
    ) {
      fecthData(page);
      setPage(page + 1);
    }
  };

  return (
    <div className='' onScroll={handleScroll}>
      {items.map((item, index) => (
        <div className='item home-page' key={index}>
          <Post
            nickname={item.user.name}
            avatar={item.user.user_profile_avatar_url}
            location={item.location_tag}
            caption={item.content}
            image={item.image_url}
            data={item.user}
            id={item.id}
          />
        </div>
      ))}
      <div>
        <BackTop />
      </div>
    </div>
  );
}
