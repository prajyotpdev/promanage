const DashBoardpage = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
    // You can also update the state or perform any other necessary actions
  };

  return (
    <div>
      <button onClick={clearLocalStorage}>Clear</button>
    </div>
  );
};

export default DashBoardpage;
