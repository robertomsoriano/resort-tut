// import React, { useContext } from "react";
// import { RoomContext } from "../context";
// import Title from "./Title";
// import Loading from "../components/Loading";
// import Room from "../components/Room";
// const FeaturedRooms = () => {
//   const [state] = useContext(RoomContext);
//   const { loading, featuredRooms: rooms } = state;
//   const room = rooms.map(room => {
//     return <Room key={room.id} room={room} />;
//   });
//   return (
//     <>
//       <section className="featured-rooms">
//         <Title title="Featured Rooms" />
//         <div className="featured-rooms-center">
//           {loading ? <Loading /> : room}
//         </div>
//       </section>
//     </>
//   );
// };

// export default FeaturedRooms;

import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
