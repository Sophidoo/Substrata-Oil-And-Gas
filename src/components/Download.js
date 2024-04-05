import company from "../assets/documents/Substrata_Corporate_Profile.pdf";

const Download = () => {
  return (
    <>
      <div className="downloadWrapper">
        <h3>Download Our Profile</h3>
        <a href={company} target="_blank">
          {" "}
          Download
        </a>
      </div>
    </>
  );
};

export default Download;
