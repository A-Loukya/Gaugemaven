import bg from "../Images/BackGround.svg";
import "../css/About.css";
import logo from "../Images/logo.svg";
import profile from "../Images/profile-img.png";
import aboutImg from "../Images/About.png";
const About = () => {
  return (
    <div>
      <img src={bg} className="bg-image" />
      <div className="main about">
        {/* nav */}
        <nav>
          <img src={logo} alt="Logo" />

        </nav>
        <section>
          {/* about-main */}
          <div className="about-left">
            <h1>We are Gaugemaven.</h1>
            <p>
              Gaugemaven was founded in 2023 with a vision to improve customer
              experience of products. We're a digital platform that brings
              businesses and consumers together to foster trust and inspire
              collaboration. We're free to use, open to everybody, and built on
              transparency.
            </p>
            <p>
              Gaugemaven empowers users to make informed decisions and build
              meaningful connections. We believe that transparency is the
              cornerstone of trust, and our commitment to openness ensures a
              level playing field for all. Whether you're a business seeking to
              establish credibility or a consumer searching for reliable
              services, Gaugemaven is the neutral ground where both sides can
              come together.
            </p>
          </div>
          <div className="about-right">
            <img src={aboutImg} alt="About" />
          </div>
        </section>
        <div className="about-thoughts">
          <p>
            “ I've launched Gaugemaven with the aim of empowering consumers and
            providing companies with a platform for open, transparent, and
            unfiltered communication. This approach fosters trust by allowing
            for free and unmoderated feedback, enabling both customers and
            businesses to engage in a more honest and constructive dialogue. ”
            <span>Chandan Patnaik</span>
            <span>CEO, Gaugemaven</span>
          </p>
          <p>
            “ Gaugemavebn is your digital compass in the vast landscape of
            consumer products. We believe everyone deserves reliable insights,
            regardless of what they're shopping for. Our platform is a diverse
            community where you can find and share honest opinions on a wide
            array of products. Join us in navigating the world of consumer goods
            together. ”
            <span>Mukka Tarun</span>
            <span>Founder, Gaugemaven</span>
          </p>
          <p>
            “ Gaugemaven is where curiosity meets consumerism. Our vision goes
            beyond specific niches; it's about exploring the pulse of products
            across the board. From cutting-edge gadgets to everyday essentials,
            our community is here to help you discover, review, and discuss
            products from every imaginable category. ”
            <span>Adepu Loukya</span>
            <span>Co-founder, Gaugemaven</span>
          </p>
          <p>
            “ Gaugemaven is where all things consumer converge. Our platform is a
            celebration of the myriad products that enrich our lives. Join our
            community of reviewers who explore, rate, and discuss items from
            every imaginable category. Whether you're a tech enthusiast, a
            fashionista, or an all-around product connoisseur, there's a place
            for you here. ”
            <span>Saisha Veerabhadra</span>
            <span>Co-founder, Gaugemaven</span>
          </p>
          <p>
            “ In a world where choices are endless, gaugemaven is your go-to
            destination for diverse opinions on an eclectic mix of products.
            From the practical to the luxurious, our community of reviewers
            spans the spectrum. Join us in embracing the variety of consumer
            experiences and sharing your own unique perspective. ”
            <span>Sampath Kumar</span>
            <span>Co-founder, Gaugemaven</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
