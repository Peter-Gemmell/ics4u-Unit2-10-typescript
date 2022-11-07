/**
 * Bike (4)
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-10-21
 */

import Vehicle from './Vehicle'

class Bike extends Vehicle {
  private cadence = 0

  // status
  status(): void {
    console.log(
      ` → Color: ${super.getColor()}
    → Max Speed: ${super.getMaxSpeed()}
    → Speed: ${super.getSpeed()}
    → Cadence: ${this.cadence}
    → Number of tires: ${super.getTires()}`
    )
  }

  // getter cadence
  getCadence(): number {
    return this.cadence
  }

  // method for acceleration
  accel(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower
    super.setSpeed(this.cadence * 2)
  }

  // makes bel=l sound ding
  ringBell(): void {
    console.log('Ding ding!\n')
  }
}

export = Bike
