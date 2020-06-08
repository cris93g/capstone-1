SELECT *
FROM tek_items i JOIN tek_users u ON i.user_id= u.user_auth
WHERE u.user_auth=$1;
