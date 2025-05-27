import React from "react";
import { useNotification } from "../hooks/useNotification";
import { Notification } from "../types/Notification";

const NotificationBell: React.FC = () => {
  const { notifications, markAsRead } = useNotification();

  const handleNotificationClick = (notification: Notification) => {
    markAsRead(notification.id);
  };

  return (
    <div className="notification-bell">
      <button className="notification-bell__button">
        Notifications ({notifications.length})
      </button>
      <div className="notification-bell__dropdown">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-bell__item ${
              notification.isRead ? "read" : "unread"
            }`}
            onClick={() => handleNotificationClick(notification)}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
}; 
