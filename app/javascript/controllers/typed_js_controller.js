import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
    connect() { new Typed(this.element, {
      strings: ["Welcome to our car Rental, where you can drive what you dream"],
      typeSpeed: 40,
      loop: true
    })
  }
}
