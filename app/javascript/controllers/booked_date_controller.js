import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booked-date"
export default class extends Controller {
  static targets = ['notAvailable']
  static values = {"unavailable": Boolean}
  connect() {
    console.log(this.notAvailableTarget)

    if (this.unavailableValue === false) {
      this.notAvailabeTarget.classList.add("opacitycard")
    } else {
      console.log("TRUE")
    }


  }
}
