import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PublishedTaskCard from './components/PublishedTaskCard';

const PublishedPage = () => {
  const { taskId }= useParams();
  // const task = tasks.find((task) => task.id === taskId);

  // if (!task) {
  //   return <div>task not found</div>;
  // }
  

  return (
      <PublishedTaskCard uid={taskId} />
  );
};

export default PublishedPage;
