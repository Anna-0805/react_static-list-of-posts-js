import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href="mailto:Sincere@april.biz">
      {user.name}
    </a>
  </p>
);
