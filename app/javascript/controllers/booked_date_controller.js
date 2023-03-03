import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booked-date"
export default class extends Controller {
  static targets = ['notAvailable']
  static values = {"unavailable": Boolean, "endsAt": String}
  connect() {
    console.log(this.endsAtValue)

      if (this.unavailableValue === true ) {
        this.notAvailableTarget.classList.add("opacitycard")
      }


  }

  finishDate(event) {
    event.preventDefault()
    const end = new Date(this.endsAtValue)
    alert(end)
  }
}
