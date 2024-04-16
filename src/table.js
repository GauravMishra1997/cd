// Table.js
import React, { useState, useEffect } from 'react';

const Table = ({ data }) => {
  const [colleges, setColleges] = useState(data.slice(0, 10));

  useEffect(() => {
    setColleges(data.slice(0, 10));
  }, [data]);

  const loadMore = () => {
    const currentLength = colleges.length;
    const newColleges = data.slice(currentLength, currentLength + 10);
    setColleges([...colleges, ...newColleges]);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>CD Rank</th>
          <th>colleges</th>
          <th>Course Fees</th>
          <th>Placement</th>
          <th>User Reviews</th>
          <th>Ranking</th>
        </tr>
      </thead>
      <tbody>
        {colleges.map(college => (
          <tr key={college.id}>
            <td>{college.rank}</td>
            <td>{college.name}</td>
            <td>{college.rating}</td>
            <td>{college.fees}</td>
            <td>{college.userReviewRating}</td>
            <td>{college.featured }</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="6">
            <button onClick={loadMore}>Load More</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
