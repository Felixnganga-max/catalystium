import React from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import sr from "../assets/sr.jpg";

const partners = [
  {
    src: logo,
    name: "Nyota Njema Real Estate",
    url: "https://nyotanjema.com/",
    desc: "Land Investment in Kenya",
  },
  {
    src: logo1,
    name: "Kikwetu Sacco",
    url: "https://kikwetusacco.com/",
    desc: "Savings & Credit Cooperative",
  },
  {
    src: logo2,
    name: "Royal Gather",
    url: "https://www.royalgather.org/",
    desc: "Community Organisation",
  },
  {
    src: logo3,
    name: "Ann's Maths Club",
    url: "https://annsmathsclub.com/",
    desc: "Mathematics Education",
  },
  {
    src: sr,
    name: "Serenly Digital Marketing Agency",
    url: "https://www.serenlydm.com/",
    desc: "Digital Marketing & Growth",
  },
];

const Partners = () => {
  return (
    <section
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#ffffff",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#a3a3a3",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Trusted Collaborations
          </p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#171717",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Our <span style={{ color: "#f86f17" }}>Partners</span>
          </h2>
          <p
            style={{
              color: "#a3a3a3",
              fontSize: "15px",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We are proud to work alongside organisations that share our vision
            for growth and impact.
          </p>
          <div
            style={{
              width: "40px",
              height: "2px",
              backgroundColor: "#f86f17",
              margin: "28px auto 0",
              borderRadius: "2px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}
        >
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                padding: "28px 20px",
                borderRadius: "16px",
                border: "1px solid #f0f0f0",
                backgroundColor: "#ffffff",
                textDecoration: "none",
                textAlign: "center",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(248,111,23,0.4)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#f0f0f0";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  style={{
                    maxHeight: "52px",
                    maxWidth: "100%",
                    width: "auto",
                    objectFit: "contain",

                    transition: "filter 0.3s, opacity 0.3s",
                  }}
                />
              </div>

              <div
                style={{
                  width: "32px",
                  height: "1px",
                  backgroundColor: "#e5e5e5",
                }}
              />

              <div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#262626",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: "6px",
                  }}
                >
                  {partner.name}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#a3a3a3",
                    lineHeight: 1.5,
                  }}
                >
                  {partner.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
