import { Droplet, Users, MapPin, Wrench, Upload, Construction } from "lucide-react";
import "../assets/styles/boreholes.css";
import heroImg from "../assets/images/background.PNG"; 
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";
import img4 from "../assets/images/image4.jpg";
export default function Boreholes() {

  const features = [
    {
      icon: <Construction size={36} />,
      title: "Borehole Installation",
      text: "Drilling and installing boreholes to provide sustainable water sources."
    },
    {
      icon: <Droplet size={36} />,
      title: "Clean Water Access",
      text: "Providing safe and clean drinking water to underserved communities."
    },
    {
      icon: <Users size={36} />,
      title: "Community Impact",
      text: "Improving health and livelihoods for families and children."
    },
    {
      icon: <MapPin size={36} />,
      title: "Remote Areas",
      text: "Reaching villages in hard-to-access rural regions of Malawi."
    }
  ];

  return (
    <div className="borehole-page">

      {/* HERO */}
      <div className="borehole-hero text-center text-white d-flex align-items-center justify-content-center"
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(11,93,42,0.6)), url(${heroImg})`
        }}
      >
        
        <div>
          <h1>Borehole Drilling Project</h1>
          <p>Providing clean water solutions to communities in need.Our borehole drilling initiative focuses on delivering clean and safe water
          to rural communities. Access to safe water reduces disease, improves hygiene,
          and supports sustainable livelihoods.</p>

          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn donate-btn">
              💚 Donate Now
            </button>

            
          </div>
        </div>
      </div>


      {/* FEATURES */}
      
      
      <section className="container py-5">
  <h2 className="text-center section-title mb-4">Project Gallery</h2>

  <div className="row g-4">
    {[img1, img2, img3, img4].map((img, index) => (
      <div key={index} className="col-md-6 col-lg-3">
        <div className="gallery-card">
          <img src={img} alt="gallery" className="img-fluid" />
        </div>
      </div>
    ))}
    <label className="btn upload-btn">
              <Upload size={18} className="me-2" />
              Upload Media
              <input type="file" hidden multiple />
            </label>
  </div>
</section>

    </div>
  );
}