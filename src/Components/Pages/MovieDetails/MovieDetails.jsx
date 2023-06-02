import React, { useEffect, useState } from "react";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import useDataFetch from "../../../Hooks/useDataFetch";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
const MovieDetails = () => {
  AOS.init();
  const { id } = useParams();
  const [movie, setMovies] = useState({});
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const movie = data?.find((movie) => movie.show.id === parseFloat(id));
          setMovies(movie?.show);
        }
      });
  }, []);
  const summaryWithoutTags = movie?.summary?.replace(/<\/?(p|b)>/g, "");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    numTickets: "",
    dateTime: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission
    formData.id = movie.id;
    const booKedMovie = formData;
    localStorage.setItem("bookedItem", JSON.stringify(booKedMovie));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Booking Success",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClose();
  };

  return (
    <div className="container rounded-xl my-5">
      <div className="container ">
        <h1 className="text-secondary py-5 fs-4"> Home / Movie Details</h1>
      </div>
      <div data-aos="zoom-out-up" className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie?.image?.original}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-1 fw-bold">
                {movie?.name ? movie?.name : "......."}
              </h5>
              <p className="card-text">
                {summaryWithoutTags
                  ? summaryWithoutTags
                  : "....................."}
              </p>
              <p className="card-text">
                Language:{" "}
                {movie?.language ? movie?.language : "....................."}
              </p>
              <p className="card-text">Genres: {movie?.genres}</p>
              <p className="card-text">Ratings: {movie?.rating?.average}</p>
              <p className="card-text">Runtime: {movie?.runtime}</p>
              <p className="card-text">Status: {movie?.status}</p>
              <p className="card-text">
                Time And Day: {movie?.schedule?.time} {movie?.schedule?.days}
              </p>
              <p className="card-text">
                OfficialSite:{" "}
                <Link className="btn-link" to={movie?.officialSite}>
                  OfficialSite Link
                </Link>
              </p>

              <div className="text-center mt-5">
                <button
                  onClick={handleShow}
                  type="button"
                  className="btn btn-dark"
                >
                  Book A Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            className="justify-content-center flex-column"
            closeButton
          >
            <Modal.Title className="text-center">{movie?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="container-fluid" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="numTickets">Number of Tickets</label>
                    <input
                      type="number"
                      className="form-control"
                      id="numTickets"
                      name="numTickets"
                      value={formData.numTickets}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">Movie Name</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      defaultValue={movie?.name}
                      onChange={handleChange}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="dateTime">Date and Time</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="dateTime"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn mt-3 btn-dark">
                Booked
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </>

      <div className="text-center" >
       <Link to="/"> <button className="btn btn-light">Back To Home</button></Link>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default MovieDetails;
