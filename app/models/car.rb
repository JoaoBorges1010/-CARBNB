class Car < ApplicationRecord
  belongs_to :user
  has_many_attached :photos, dependent: :destroy
  has_many :bookings, dependent: :destroy
end
