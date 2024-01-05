import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const UserInfo = ({ username, avatarSrc }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar alt={username} src={avatarSrc} />
      <Typography variant="body1" style={{ marginLeft: '10px' }}>
        {username}
      </Typography>
    </div>
  );
};

export default UserInfo;
