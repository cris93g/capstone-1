DELETE FROM tek_items
WHERE item_id = $1
RETURNING *