import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="total-price"
export default class extends Controller {
  static targets = ['finalPrice', 'startsAt', 'endsAt']
  static values = { "dailyPrice": Number}

  calculateTotalPrice() {
    const start = new Date(this.startsAtTarget.value)
    const end = new Date(this.endsAtTarget.value)
    const price = this.dailyPriceValue

    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000*60*60*24)

    const totalCost = differenceInDays * price

    if (isNaN(totalCost)) {
      this.finalPriceTarget.innerText = "calculating"

    } else {
      this.finalPriceTarget.innerText = totalCost 
    }
  }
}
