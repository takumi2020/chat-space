# ChatSpace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :groups, through: :group_users 
- has_many :messages
- has_many :group_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
### Association
- has_many :users,  through: :group_users
- has_many :messages
- has_many :group_users


## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false,foreign_key: true|
|user_id|integer|null: false,foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|bode|text||
|image|string||
|group_id|integer|null: false,foreign_key: true|
|user_id|integer|null: false,foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
