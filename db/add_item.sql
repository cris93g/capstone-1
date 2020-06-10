INSERT INTO tek_items
    (item_name, item_desc, item_price, item_category,item_pic,user_id,item_quantity,item_sku )
VALUES($1, $2, $3, $4, $5, $6, $7,$8)
RETURNING *