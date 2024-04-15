import { Card } from "flowbite-react";
import PropTypes from "prop-types";
const Popup = ({ post }) => {
  return (
    <Card className='max-w-sm'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        UserID: {post.userId}, ID: {post.id}
      </h5>
      <h5 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
        {post.title}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>{post.body}</p>
    </Card>
  );
};

Popup.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Popup;
