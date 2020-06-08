INSERT INTO tek_users
    (user_name, user_auth,user_pic)
VALUES
    ($1, $2, $3)
RETURNING *;