import "./card.css";
const Card = (props) => {
  let check = <span class="material-symbols-outlined">check</span>;
  let uncheck = <span class="material-symbols-outlined">close</span>;
  let icon;
  let user = props.user;

  console.log("Card:", user.category);
  return (
    <div id="card">
      <h5 id="category">{user.category}</h5>
      <h1 id="rate">${user.rate}/month</h1>
      <ul id="list">
        <li>
          {check}
          {user.user}
        </li>
        <li>{check}50GB Storage</li>
        <li>{check}Unlimited Public Projects</li>
        <li>{check}Community Accesss</li>
        <li>{user.upp ? check : uncheck}Unlimited Phone Support</li>
        <li>{user.dps ? check : uncheck}Dedicated Phone Support</li>
        <li>{user.fsd ? check : uncheck}Free Subdomain</li>
        <li>{user.msr ? check : uncheck}Monthly Status Reports</li>
      </ul>

      <button id="btn">
        <h4>Button</h4>
      </button>
    </div>
  );
};

export default Card;
