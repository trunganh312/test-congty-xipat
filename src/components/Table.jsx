import { Modal, Pagination, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { TbScanEye } from "react-icons/tb";
import Popup from "./Popup";
import axios from "axios";

const LIMIT_POST = 10;
const PERPAGE = Math.floor(100 / LIMIT_POST);

const TablePost = () => {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [contenPopup, setContenPopup] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    _page: currentPage,
    _limit: LIMIT_POST,
  });
  const onPageChange = (page) => {
    setCurrentPage(page);
    setPagination({
      _page: page,
      _limit: LIMIT_POST,
    });
  };
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: pagination,
      });
      setPosts(res.data);
    })();
  }, [pagination]);

  const handleOpenPopup = (post) => {
    setOpenModal(true);
    setContenPopup(post);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className='overflow-x-auto w-screen '>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>User ID</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <Table.Row key={post.id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {post.id}
                  </Table.Cell>
                  <Table.Cell> {post.userId}</Table.Cell>
                  <Table.Cell>{post.title}</Table.Cell>
                  <Table.Cell>
                    <button
                      className='font-medium text-2xl text-cyan-600 hover:underline dark:text-cyan-500'
                      onClick={() => handleOpenPopup(post)}
                    >
                      <TbScanEye />
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      <Modal show={openModal} size='md' onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <Popup post={contenPopup}></Popup>
        </Modal.Body>
      </Modal>
      <div
        style={{
          margin: "20px 0",
        }}
        className='flex overflow-x-auto justify-center  sm:justify-center'
      >
        <Pagination currentPage={currentPage} totalPages={PERPAGE} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default TablePost;
