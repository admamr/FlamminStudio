// src/components/LogoLoop.jsx
import "./LogoLoop.css";

export default function LogoLoop({ logos = [] }) {
  // Duplicate the sequence so the animation can scroll forever
  const sequence = [...logos, ...logos];

  return (
    <div className="logo-loop">
      <div className="logo-loop__track">
        {sequence.map((item, index) => (
          <div
            key={index}
            className="logo-loop__item"
            aria-hidden={index >= logos.length}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
