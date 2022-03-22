import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Hamza Memon",
      title: "Senior Software Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFPcvLXdE_ZMg/profile-displayphoto-shrink_400_400/0/1615121284900?e=1652918400&v=beta&t=o6suKeMfwjmB_fsDOnsU2xco-mEe5m-NtJaLL7QF-8M",
      icon: "assets/twitter.png",
      desc:
        "Hardworking, intelligent and helpful, he has come a long way and is sure to achieve greater heights..",
    },
    {
      id: 2,
      name: "Muhammad Areeb",
      title: "Senior Software Engineer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGNbHHsbvtrtw/profile-displayphoto-shrink_400_400/0/1644897337991?e=1653523200&v=beta&t=OqUJCwWuBT_ww0fvpYz2eix7oSHRDvWEs0xd45tEg48",
      icon: "assets/youtube.png",
      desc:
        "I've worked with Shamail on many software projects and have always found him to be the reliable one. Shamail doesn't shy away from trying out new things, from studying a plethora of newer concepts and getting his hands dirty on all kinds of technologies.  ",
      featured: true,
    },
    {
      id: 3,
      name: "Farrukh Alvi",
      title: "Senior Lecturer-SSUET",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHHLf5u1VjIbw/profile-displayphoto-shrink_400_400/0/1631788186211?e=1653523200&v=beta&t=mmF6oQovpGyFW9poycDgpx6jrzVsSAE-jZbazkKgbA0",
      icon: "assets/linkedin.png",
      desc:
        "Shamail is a versatile and very tech savvy software engineer with a great ability to learn and pick up things fast. He has complete knowledge over the subject Matter. As his mentor and teacher I fully recommend him",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
