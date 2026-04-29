import '../assets/styles/about.css';

const aboutCards = [
  {
    title: 'About Islamic Development Forum',
    text: 'Islamic Development Forum (IDF) is a religious non-governmental organisation registered under the Trustees Incorporation Act of Malawi. It was established in 2016 by a group of Malawian Muslims with the strong urge to change the political and socio-economic situation of the Malawian Muslim community and all Malawians at large. IDF provides a platform for championing Muslim participation in political and development activities in the country and beyond. '
  },
  {
    title: 'Our Vision',
    text: 'To make a difference through service to others and to champion development through steward leadership. '
  },
  {
    title: 'Our Values',
    text: 'IDF cherishes fear of the almighty Allah, hardworking, honesty, creativity and steward leadership in its undertakings.'
  },
  {
    title: 'IDF Legal Status',
    text: 'IDF is incorporated under the Trustees Incorporation Act of Malawi. It was registered on 22 December 2017 under Registration number RG20754/IM/5.2005 '
  }
];

export default function AboutPage() {
  return (
    <section className="about-page-section py-5">
      <div className="container py-4">
        <div className="about-header text-center mb-5">
          <h1 className="about-title">About Us</h1>
          <div className="gold-dotted-line"></div>
          <p className="about-subtitle mt-3">
            Learn more about who we are, our mission, and the principles that shape our service.
          </p>
        </div>

        <div className="row g-4">
          {aboutCards.map((card, index) => (
            <div className="col-md-6" key={index}>
              <div className="about-card h-100">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
