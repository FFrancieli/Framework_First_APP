class Comment < ActiveRecord::Base

  #Validations
  validates :content, :presence => true, :allow_blank => false
  validates :commentable_id, presence: true, allow_blank: false
  validates :commentable_type, presence: true, allow_blank: false

  #Scope
  default_scope {order('Comments.created_at DESC')}

  #Associations
  belongs_to :commentable, polymorphic: true


end