import UserData from '../assets/user.json';
import DataStatistic from '../assets/data.json';
// import DataFriends from '../assets/friends.json';
// import DataTransection from '../assets/transactions.json';
import { Profile } from '../components/Profile/Profile';
import { Statistic } from '../components/Statistic/Statistic';
import { Friends } from '../components/FriendsList/Friends';
// import { Transection } from '../components/Transetion/Transection';
export const App = () => {
  return (
    <>
      <Profile
        username={UserData.username}
        tag={UserData.tag}
        location={UserData.location}
        avatar={UserData.avatar}
        stats={UserData.stats}
      />
      <Statistic title="Upload stats" stats={DataStatistic} />
      <Friends />
    </>
  );
};
