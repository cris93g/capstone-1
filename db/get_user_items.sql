SELECT *
FROM tek_items i JOIN tek_users u ON i.user_id= u.user_id
WHERE u.user_id=$1;
