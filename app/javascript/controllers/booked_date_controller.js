import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booked-date"
export default class extends Controller {
  connect() {
    console.log("Hello")
  }
}
