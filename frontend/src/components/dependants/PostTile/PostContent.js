import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import PostAction from "./PostAction";

function PostContent() {
  return (
    <div className="flex flex-col bg-white w-full p-2 gap-2 rounded-r-md">
      <div className="flex flex-row gap-2">
        <Link to="#" className="flex flex-row">
          <Avatar />
          <h3 className="font-bold">r/username</h3>
        </Link>
        <p>5 Hour ago</p>
      </div>
      <h3 className="font-semibold text-xl">
        TitleTitleTitleTi tleTitleTitleTitleT itleTi tleTitleTitleTitl
        eTitleTitl TitleTitleTitleTi tleTitleTitleTitleT itleTi
        tleTitleTitleTitl eTitleTitl
      </h3>
      <div className="line-clamp-5">
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content ContentContent Content
        Content Content Content ontent Content Content Content Content
        ContentContent Content Content Content Contentontent Content Content
        Content Content ContentContent Content Content Content Content ontent
        Content Content Content Content ContentContent Content Content Content
        Content
      </div>
      <PostAction />
    </div>
  );
}

export default PostContent;
