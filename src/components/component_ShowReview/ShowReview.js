import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Navibar from "../navbar";

export default function ShowReview() {
  return (
    <>
  
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Reviews</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="6" className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).webp"
              class="rounded-circle shadow-1-strong"
              width="100"
              height="100"
            />
          </div>
          <p className="lead my-3 text-muted">
            "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
            elit sed ut perspiciatis unde omnis."
          </p>
          <p className="font-italic font-weight-normal mb-0">- Anna Morian</p>
        </MDBCol>
        <MDBCol md="6" className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
              class="rounded-circle shadow-1-strong"
              width="100"
              height="100"
            />
          </div>
          <p className="lead my-3 text-muted">
            "Neque cupiditate assumenda in maiores repudiandae mollitia
            architecto elit sed adipiscing elit."
          </p>
          <p className="font-italic font-weight-normal mb-0">- Teresa May</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer> </>
  );
}