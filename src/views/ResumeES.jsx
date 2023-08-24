import "./../assets/css/reset.css";
import cv_ES from "./../assets/files/CV_Franco_Contreras_ES.pdf";

const ResumeES = () => {
  return (
    <iframe
      title="PDF"
      src={`/assets/pdfjs-3.9.179-dist/web/viewer.html?file=${cv_ES}`}
      width="100%"
      height="700px"
      style={{ padding: 0, margin: 0, border: 0 }}
    ></iframe>
  );
};

export default ResumeES;
