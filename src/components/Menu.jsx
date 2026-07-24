import { Link } from "react-router-dom";

const menus = [
  {
    icon: "📍",
    name: "Địa chỉ đỏ",
    link: "/dia-chi",
  },
  {
    icon: "🗺️",
    name: "Bản đồ",
    link: "/ban-do",
  },
  {
    icon: "📷",
    name: "Thư viện",
    link: "/thu-vien",
  },
  {
    icon: "🎥",
    name: "Video",
    link: "/video",
  },
];

function Menu() {
  return (
    <section
  className="menu"
  data-aos="fade-up"
>
      {menus.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card">
            <div className="icon">{item.icon}</div>

            <h3>{item.name}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Menu;