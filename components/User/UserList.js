import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const user = props.users.map((user) => (
    <li key={user.id}>
      {user.username} {user.age}
    </li>
  ));
  return (
    <Card className={classes.users}>
      <ul>{user}</ul>
    </Card>
  );
};

export default UserList;
