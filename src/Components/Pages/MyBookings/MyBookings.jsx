import React, { useState } from "react";
import { dataRemove, getFakeDb } from "../../../Utilits/FakeDb";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import moment from "moment/moment";
const MyBookings = () => {
  const myBookedMovie = getFakeDb();
  const [storeTicket, setStoreTicket] = useState(myBookedMovie);

  const handleRemoveTicket = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dataRemove(id)
        const remainingData = storeTicket.filter(
          (movieItem) => movieItem.id != id
        );
        setStoreTicket(remainingData);

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="container mt-5 text-white">
      <h2 className="text-white text-center fw-bold mb-5">My Bookings</h2>

      <div className="overflow-scroll">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Num ofTicket</th>
            <th scope="col">Date</th>
            <th scope="col">Phone</th>
            <th scope="col">Ratings</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {storeTicket.map((movie, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>
                <img
                  height="45px"
                  width="45px"
                  className="border-2 border-info rounded-circle"
                  src={movie.movieImg}
                  alt=""
                />
              </td>
              <td>{movie.movieName}</td>
              <td>{movie.numTickets}</td>
              <td>{
              moment( movie.dateTime).format('MMMM Do YYYY,')
             }</td>
              <td>{movie.phone}</td>
              <td>{movie.ratings ? movie.ratings : 0}</td>
              <td>{movie.status}</td>
              <td>
                <button
                  onClick={() => handleRemoveTicket(movie.id)}
                  className="btn btn-danger"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MyBookings;
