class BookingsController < ApplicationController
  before_action :set_car, except: :confirmation

  def new
    @booking = Booking.new
  end

  def confirmation
    @booking = Booking.find(params[:id])
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.car = @car
    @booking.user = current_user

    start_date = Date.parse(booking_params[:starts_at])
    end_date = Date.parse(booking_params[:ends_at])
    days = (end_date - start_date).to_i

    @booking.total_price = days * @car.price_per_day.to_i

    if @booking.save
      redirect_to confirmation_booking_path(@booking)
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def set_car
    @car = Car.find(params[:car_id])
  end

  def booking_params
    params.require(:booking).permit(:starts_at, :ends_at)
  end
end
