import Record from "./base"

export class User extends Record {
  constructor(...args) {
    super(...args)
  }
  get initials() {
    return `${this.first_name?.[0] || ""}${this.last_name?.[0] || ""}`
  }
}
