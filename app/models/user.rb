class User < ApplicationRecord
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :confirmable,
         :omniauthable,
         :jwt_authenticatable,
         jwt_revocation_strategy: JwtDenylist

  has_one_attached :photo

  # Validations
  validates :email, format: { with: Devise.email_regexp }
  validates :firstname, uniqueness: true, presence: true
  validates :lastname, :password, presence: true

  def generate_jwt
    payload = { user_id: id }
    expiration_time = 60.days.from_now.to_i
    JWT.encode payload.merge(exp: expiration_time), Rails.application.secrets.secret_key_base
  end

  def is_admin
    role == 'admin'
  end
end
