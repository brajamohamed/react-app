import Card from "./Card/card";
import "./home.css";

const Home = (props) => {
  let users = props.users;
  return (
    <div id="card-container">
      {users.map((user) => {
        return <Card user={user} />;
      })}
    </div>
  );
};
export default Home;
