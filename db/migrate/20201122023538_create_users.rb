class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, options: "ROW_FORMAT=COMPRESSED" do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :avatar
      t.integer :role

      t.timestamps
    end
    add_index :users, :email
  end
end
