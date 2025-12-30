import { useEffect, useState, useRef } from 'react';

export default function UserList({ letter }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [noUsers, setNoUsers] = useState(false);
  const loader = useRef();


  useEffect(() => {
    setUsers([]);
    setPage(1);
    setNoUsers(false);
  }, [letter]);

  useEffect(() => {
    fetch(`http://localhost:5000/users?letter=${letter}&page=${page}&limit=100`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0 && page === 1) {
          setNoUsers(true);
        } else {
          setUsers(prev => [...prev, ...data]);
        }
      });
  }, [page, letter]);

 
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !noUsers) {
        setPage(p => p + 1);
      }
    });

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [noUsers]);

  return (
    <>
      <ul className="user-list">
        {users.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>

      {noUsers && <p className="no-users">Not Available</p>}

      {!noUsers && <div ref={loader} className="loader">Loading...</div>}
    </>
  );
}
