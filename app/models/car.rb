class Car < ApplicationRecord
  belongs_to :user

  has_many :bookings

  delegate :ends_at, to: :current_booking, prefix: true

  def unavailable?
    current_booking.present?
  end

  # with delegate, we don't need this method
  # def current_booking_ends_at
  #   return unless unavailable?

  #   current_booking.ends_at
  # end

  def current_booking
    bookings.where(starts_at: ..Date.today).where(ends_at: Date.today..).last
  end

  has_many_attached :photos, dependent: :destroy
  has_many :bookings, dependent: :destroy
end
