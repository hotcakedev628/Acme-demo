/* eslint-disable no-use-before-define */
import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import NavItem from './NavItem';

const NavBar = ({
  conversations,
  onSelectFavorite
}) => {
  const location = useLocation();

  const content = (
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      <ul>
        {conversations.map((conversation) => (
          <NavItem
            key={conversation.id}
            href={`/conversation/${conversation.id}/view`}
            info={conversation.email}
            name={`${conversation.firstName} ${conversation.lastName}`}
            isFavorite={conversation.isFavorite}
            onSelectFavorite={() => onSelectFavorite(conversation.id)}
          />
        ))}
      </ul>
    </PerfectScrollbar>
  );

  return (
    <div
      className="nav-bar"
    >
      {content}
    </div>
  );
};

export default NavBar;
