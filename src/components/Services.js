import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "there is a great variety of free cocktails in the bar that you can choose from."
      },
      {
        icon: <FaHiking />,
        title: "Hiking trails",
        info:
          "there is a great variety of free cocktails in the bar that you can choose from."
      },
      {
        icon: <FaShuttleVan />,
        title: "free Commutting Shuttle",
        info:
          "there is a great variety of free cocktails in the bar that you can choose from."
      },
      {
        icon: <FaBeer />,
        title: "free Beer",
        info:
          "there is a great variety of free cocktails in the bar that you can choose from."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
